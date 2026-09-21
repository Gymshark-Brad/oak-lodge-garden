// Original notebook schematics, deliberately simple enough to inspect and
// maintain. Captions carry the complete instruction independently of colour.
function SeasonalDiagram({ kind }) {
  const meta = window.OAK.SEASONAL_DIAGRAMS[kind];
  if (!meta) return null;
  const cut = (x, y) => <g stroke="var(--stamp)" strokeWidth="3"><path d={`M${x-9} ${y-7}l18 14M${x-9} ${y+7}l18 -14`} /></g>;
  const label = (x, y, text) => <text x={x} y={y} fill="var(--ink)" stroke="none" fontSize="16">{text}</text>;
  const bud = (x, y) => <ellipse cx={x} cy={y} rx="6" ry="10" transform={`rotate(35 ${x} ${y})`} fill="var(--green)" stroke="none" />;
  let drawing;
  if (kind === 'bud') drawing = <><path d="M150 205L150 100" strokeWidth="7" /><path d="M150 95V35" strokeDasharray="6 6" />{bud(161,119)}{cut(150,97)}{label(202,73,'remove the tip')}{label(202,125,'keep this bud')}{label(202,166,'cut ~5mm above')}<path d="M178 116h18" /></>;
  else if (kind === 'collar') drawing = <><path d="M140 215V35M155 140L265 50" strokeWidth="14" /><path d="M151 124Q179 128 178 154" strokeWidth="4" />{cut(184,116)}{label(230,155,'collar stays')}{label(230,185,'cut outside it')}<path d="M183 147l38 9" /></>;
  else if (kind === 'renewal') drawing = <><path d="M65 215H435" strokeWidth="1" /><path d="M180 214Q130 130 120 50M220 214Q220 130 240 45M270 214Q305 150 330 55" strokeWidth="4" /><path d="M245 214Q270 145 275 35" strokeDasharray="6 5" strokeWidth="7" />{cut(250,200)}{label(50,30,'keep young stems')}{label(315,120,'old stem')}{label(315,149,'cut at base')}</>;
  else if (kind === 'rose') drawing = <><path d="M35 100H465M35 160H465" strokeWidth="1" strokeDasharray="4 5" /><path d="M245 220Q230 157 60 156M250 220Q257 97 440 98" strokeWidth="5" /><path d="M130 158V115M337 119V70" strokeWidth="3" />{cut(130,116)}{cut(337,70)}{label(42,52,'short flowering side shoots')}{label(275,191,'keep main canes')}</>;
  else if (kind.startsWith('wisteria')) {
    const winter = kind.endsWith('winter'); const count = winter ? 3 : 6;
    drawing = <><path d="M70 35V215" strokeWidth="9" /><path d="M72 185L430 75" strokeWidth="3" />{Array.from({length:count},(_,i) => {const x=110+i*42,y=173-i*13;return <g key={i}>{bud(x,y-8)}{label(x-4,y+28,String(i+1))}</g>;})}{cut(winter?213:340,winter?142:103)}{label(24,242,'main branch stays')}{label(245,40,winter?'keep 2–3 buds':'keep 5–6 leaves')}</>;
  } else if (kind === 'clematis-1') drawing = <><path d="M95 218Q100 120 160 65Q200 38 295 50M165 65Q240 125 350 100" strokeWidth="4" /><path d="M300 50Q375 60 435 45" strokeDasharray="6 5" />{cut(300,50)}{label(235,165,'retain the framework')}{label(235,196,'trim after flowering')}{bud(285,57)}</>;
  else if (kind === 'clematis-3') drawing = <><path d="M40 216H440" strokeWidth="1" /><path d="M140 214L150 130M200 214L205 130" strokeWidth="4" /><path d="M150 123L157 25M205 122L218 25" strokeDasharray="6 5" />{bud(139,145)}{bud(161,145)}{bud(194,145)}{bud(216,145)}{cut(150,125)}{cut(205,125)}{label(263,136,'healthy low buds')}{label(263,170,'~15–30cm up')}{label(263,199,'late winter only')}</>;
  else if (kind === 'deadhead') drawing = <><path d="M150 215V130M150 135Q200 110 225 75" strokeWidth="4" /><path d="M150 123V48" strokeDasharray="6 5" /><circle cx="150" cy="36" r="15" /><circle cx="229" cy="66" r="9" fill="var(--green)" />{cut(150,121)}{label(275,49,'spent head: remove')}{label(275,91,'new bud: keep')}{label(275,171,'cut above joint')}</>;
  else drawing = <><path d="M35 160H455M240 155V55" strokeWidth="4" /><path d="M40 146H205M275 146H450" strokeWidth="23" stroke="var(--tape)" /><path d="M213 140v26M267 140v26" strokeDasharray="3 3" />{label(170,34,'keep the base clear')}{label(35,115,'mulch ~5cm')}{label(295,208,'soil stays below')}</>;
  return <figure className="cal-diagram"><strong className="t-hand">{meta.title}</strong>
    <div className="cal-diagram-drawing" tabIndex="0" role="region" aria-label={meta.title + " diagram — scroll horizontally on small screens"}><svg viewBox="0 0 490 260" role="img" aria-label={meta.text}><g fill="none" stroke="var(--pencil)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{drawing}</g></svg></div><span className="cal-diagram-hint">Swipe the drawing sideways to see every label.</span>
    <figcaption>{meta.text} <span className="t-mono">Illustration, not to scale. × marks a cut.</span></figcaption>
  </figure>;
}
window.SeasonalDiagram = SeasonalDiagram;
