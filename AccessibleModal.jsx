// Oak Lodge Garden — reusable accessible modal shell.

const { useEffect: useEffect_AM, useRef: useRef_AM } = React;

function AccessibleModal({
  children,
  onClose,
  titleId,
  ariaLabel,
  className = "",
  panelClassName = "",
  initialFocusRef,
  escapeDisabled = false,
  backgroundId,
  zIndex,
}) {
  const panelRef = useRef_AM(null);
  const restoreFocusRef = useRef_AM(null);

  useEffect_AM(() => {
    restoreFocusRef.current = document.activeElement;
    const background = backgroundId ? document.getElementById(backgroundId) : null;
    if (background) {
      background.setAttribute("inert", "");
      background.setAttribute("aria-hidden", "true");
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusTarget = initialFocusRef && initialFocusRef.current
      ? initialFocusRef.current
      : panel && panel.querySelector(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
    if (focusTarget) window.requestAnimationFrame(() => focusTarget.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      if (background) {
        background.removeAttribute("inert");
        background.removeAttribute("aria-hidden");
      }
      const restoreTarget = restoreFocusRef.current;
      if (restoreTarget && document.contains(restoreTarget)) {
        window.requestAnimationFrame(() => restoreTarget.focus());
      }
    };
  }, []);

  useEffect_AM(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && !escapeDisabled) {
        event.preventDefault();
        event.stopPropagation();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(panelRef.current.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter((element) => !element.hasAttribute("hidden") && element.offsetParent !== null);
      if (focusable.length === 0) {
        event.preventDefault();
        panelRef.current.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [onClose, escapeDisabled]);

  return (
    <div
      className={`accessible-modal ${className}`.trim()}
      style={zIndex ? { zIndex } : null}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        className={panelClassName}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId || undefined}
        aria-label={!titleId ? ariaLabel : undefined}
        tabIndex="-1"
      >
        {children}
      </div>
    </div>
  );
}

window.AccessibleModal = AccessibleModal;
