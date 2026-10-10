/**
 * Lernportal Viyan - Zentrale JavaScript-Helfer
 * Beinhaltet Interaktivität für Übungen, Lösungsanzeige und KaTeX-Unterstützung.
 */

// Lösungs-Aufklappfunktion für Übungsaufgaben
function toggleSolution(button) {
  const card = button.closest('.exercise-card');
  if (!card) return;
  const solutionBox = card.querySelector('.solution-box');
  if (!solutionBox) return;

  const isVisible = solutionBox.classList.contains('is-visible');
  if (isVisible) {
    solutionBox.classList.remove('is-visible');
    button.textContent = 'Lösung anzeigen';
  } else {
    solutionBox.classList.add('is-visible');
    button.textContent = 'Lösung verbergen';
  }
}

// KaTeX Render-Funktion
function triggerKaTeX() {
  if (typeof renderMathInElement === "function") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false
    });
  } else {
    setTimeout(triggerKaTeX, 30);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Event Delegation für alle Lösungs-Buttons
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-toggle-solution');
    if (btn) {
      toggleSolution(btn);
    }
  });

  // KaTeX initialisieren, falls Skript geladen
  if (typeof renderMathInElement !== "undefined" || document.querySelector('script[src*="katex"]')) {
    triggerKaTeX();
  }
});

window.addEventListener('load', () => {
  if (document.querySelector('script[src*="katex"]')) {
    triggerKaTeX();
  }
});
