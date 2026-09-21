// Optional browser regression suite. Uses existing Playwright tooling; no site build or npm install.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'playwright');
const assert=require('node:assert/strict');
const os=require('node:os'), path=require('node:path');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_EXECUTABLE_PATH ? {executablePath:process.env.PLAYWRIGHT_EXECUTABLE_PATH} : {})});
 const page=await browser.newPage({viewport:{width:1365,height:1000},reducedMotion:'reduce'}),errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto((process.env.CALENDAR_TEST_URL || 'http://127.0.0.1:8765'));await page.getByRole('button',{name:'Seasonal calendar',exact:true}).click();
 await page.getByRole('heading',{name:'Jobs by category'}).waitFor();
 for(let month=0;month<12;month++){
  await page.locator('#calendar-month-tab-'+month).click();
  const result=await page.evaluate((month)=>{
   const data=window.OAK.SEASONAL[window.OAK.MONTHS[month]], categories=[...document.querySelectorAll('.cal-priority > header h4')].map(x=>x.textContent);
   const ids=[...document.querySelectorAll('[id]')].map(x=>x.id);
   for(const round of document.querySelectorAll('.cal-bed-round[data-zone-key]')) {
    for(const row of round.querySelectorAll('.cal-round-job')) {
     const job=data.jobs.find(j=>j.id===row.dataset.jobId);
     const expected=job.plantIds.filter(id=>window.OAK.PLANT_BY_ID[id].zoneKey===round.dataset.zoneKey);
     const actual=[...row.querySelectorAll('[data-plant-id]')].map(e=>e.dataset.plantId);
     if(JSON.stringify(expected)!==JSON.stringify(actual)) throw new Error('Wrong plants in '+round.dataset.zoneKey+' / '+job.id);
    }
   }
   return {heading:document.querySelector('.cal-month-name').textContent, jobs:document.querySelectorAll('.cal-job').length,expected:data.jobs.length+data.indoorJobs.length,categories,empty:categories.some(t=>!data.jobs.some(j=>window.OAK.SEASONAL_CATEGORIES.find(c=>c.id===j.category)?.title===t)),duplicates:ids.filter((v,i)=>ids.indexOf(v)!==i),missingNotes:data.jobs.filter(j=>j.plantIds.length>1&&j.plantIds.some(id=>!j.plantNotes[id])).map(j=>j.id)};
  },month);
  assert.equal(result.jobs,result.expected);assert.equal(result.empty,false);assert.deepEqual(result.duplicates,[]);assert.deepEqual(result.missingNotes,[]);
  for(const palette of ['Spring','Summer','Autumn','Winter','Night']){
   await page.getByRole('button',{name:palette+' palette',exact:true}).click();
   assert.equal(await page.locator('html').getAttribute('data-palette'),palette.toLowerCase());
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1));
  }
 }
 // One shared job, one completion in all its locations.
 await page.locator('#calendar-month-tab-9').click();
 const task=page.locator('#cal-job-oct-dahlia-after-frost-reviewed'); await task.locator('input').check();
 const label='Complete whole job: Protect all three dahlias after dieback';const roundChecks=page.getByRole('checkbox',{name:label,exact:true});
 assert.equal(await roundChecks.count(),2);for(const check of await roundChecks.all())assert(await check.isChecked());
 assert.match(await page.locator('.cal-progress strong').textContent(),/^1 of /);
 await roundChecks.first().uncheck();assert.equal(await task.locator('input').isChecked(),false);
 // Existing completion persists across reloads and survives profile navigation.
 await page.locator('#calendar-month-tab-1').click();await page.locator('#cal-job-feb-prune-wisteria input').check();
 await page.locator('#cal-job-feb-prune-wisteria .cal-plant-link').click();await page.locator('.pp-back').click();
 assert.equal(await page.locator('.cal-month-name').textContent(),'February');assert(await page.locator('#cal-job-feb-prune-wisteria input').isChecked());
 await page.reload();await page.getByRole('button',{name:'Seasonal calendar',exact:true}).click();await page.locator('#calendar-month-tab-1').click();assert(await page.locator('#cal-job-feb-prune-wisteria input').isChecked());
 await page.getByRole('button',{name:'Reset February',exact:true}).click();assert.equal(await page.locator('#cal-job-feb-prune-wisteria input').isChecked(),false);
 // Keyboard month navigation wraps, and jump controls move focus.
 await page.locator('#calendar-month-tab-1').focus();await page.keyboard.press('Home');assert.equal(await page.locator('.cal-month-name').textContent(),'January');await page.keyboard.press('ArrowLeft');assert.equal(await page.locator('.cal-month-name').textContent(),'December');
 await page.getByRole('button',{name:'Bed-by-bed garden round ↓',exact:true}).click();assert.equal(await page.evaluate(()=>document.activeElement.id),'cal-round-heading');
 // All diagrams render and provide a complete accessible text equivalent.
 const seen=new Set();for(let m=0;m<12;m++){
  await page.locator('#calendar-month-tab-'+m).click();await page.locator('.cal-job-details').evaluateAll(es=>es.forEach(e=>e.open=true));
  for(const name of await page.locator('.cal-diagram > strong').allTextContents())seen.add(name);
  for(const diagram of await page.locator('.cal-diagram svg').all())assert((await diagram.getAttribute('aria-label')).length>60);
 }
 assert.equal(seen.size,10);
 await page.locator('#calendar-month-tab-1').click();await page.locator('#cal-job-feb-prune-wisteria details').evaluate(e=>e.open=true);
 await page.locator('#cal-job-feb-prune-wisteria').scrollIntoViewIfNeeded();
 await page.screenshot({path:path.join(os.tmpdir(),'oak-calendar-diagram.png')});
 // Small-screen checks in every month, plus palette screenshots.
 await page.setViewportSize({width:390,height:844});
 for(let m=0;m<12;m++) {await page.locator('#calendar-month-tab-'+m).click();await page.locator('.cal-job-details').evaluateAll(es=>es.forEach(e=>e.open=true));assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'mobile overflow month '+m);}
 await page.locator('#calendar-month-tab-1').click();await page.locator('#cal-job-feb-prune-wisteria details').evaluate(e=>e.open=true);
 for(const palette of ['Spring','Summer','Autumn','Winter','Night']){
  await page.getByRole('button',{name:palette+' palette',exact:true}).click();await page.locator('#cal-job-feb-prune-wisteria .cal-diagram').scrollIntoViewIfNeeded();
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'expanded diagram overflow');
  await page.screenshot({path:path.join(os.tmpdir(),'oak-mobile-'+palette.toLowerCase()+'.png')});
 }
 const blocked=await browser.newPage();await blocked.addInitScript(()=>{Storage.prototype.getItem=()=>{throw new Error('storage blocked')};Storage.prototype.setItem=()=>{throw new Error('storage blocked')};});
 blocked.on('pageerror',e=>errors.push(e.message));await blocked.goto((process.env.CALENDAR_TEST_URL || 'http://127.0.0.1:8765'));await blocked.getByRole('button',{name:'Seasonal calendar',exact:true}).click();await blocked.locator('.cal-job input').first().check();assert.match(await blocked.locator('.cal-progress strong').textContent(),/^1 of /);
 // A previous year's saved checks must not complete this year's work.
 const oldYear=await browser.newPage();await oldYear.addInitScript(()=>localStorage.setItem('oak-seasonal-completed-v1',JSON.stringify({[new Date().getFullYear()-1]:{'feb-prune-wisteria':true}})));
 await oldYear.goto(process.env.CALENDAR_TEST_URL || 'http://127.0.0.1:8765');await oldYear.getByRole('button',{name:'Seasonal calendar',exact:true}).click();await oldYear.locator('#calendar-month-tab-1').click();assert.equal(await oldYear.locator('#cal-job-feb-prune-wisteria input').isChecked(),false);
 assert.deepEqual(errors,[]);console.log('PASS: 12 months × 5 palettes; mobile widths; all 10 diagrams; shared completion; persistence/reset; profile return; keyboard/jump focus; blocked storage. No browser errors.');
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
