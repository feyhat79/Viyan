/**
 * Lernportal Viyan - Multiple-Choice Quiz Engine
 * Unterstützt Pool-Auswahl (10 zufällige Fragen vs. kompletter Test)
 */

class ViyanQuiz {
  constructor(containerId, questionPool, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Quiz-Container mit ID "${containerId}" nicht gefunden.`);
      return;
    }
    this.pool = questionPool;
    this.options = options;
    this.currentQuestions = [];
    this.currentIndex = 0;
    this.scoreCorrect = 0;
    this.scoreWrong = 0;
    this.mode = 'quick'; // 'quick' (10 Fragen) oder 'full' (alle)
    this.hasAnswered = false;

    this.renderStartScreen();
  }

  // Fisher-Yates Shuffle
  shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  renderStartScreen() {
    const totalCount = this.pool.length;
    this.container.innerHTML = `
      <div class="quiz-start-screen">
        <div style="font-size: 2.2rem; margin-bottom: 0.35rem;">🎯</div>
        <h3 class="quiz-start-title">Interaktiver Multiple-Choice Test</h3>
        <p class="quiz-start-desc">
          Teste dein Wissen zu diesem Thema! Der Fragenpool enthält insgesamt <strong>${totalCount} Fragen</strong>. Wähle deinen Modus:
        </p>

        <div class="quiz-mode-grid">
          <button type="button" class="quiz-mode-btn mode-quick" data-mode="quick">
            <div class="mode-btn-header">
              <span class="mode-btn-icon">⚡</span>
              <span class="mode-btn-badge">Empfohlen</span>
            </div>
            <div class="mode-btn-title">Schnelltest</div>
            <div class="mode-btn-desc">10 zufällig ausgewählte Fragen für die schnelle Wiederholung zwischendurch.</div>
          </button>

          <button type="button" class="quiz-mode-btn mode-full" data-mode="full">
            <div class="mode-btn-header">
              <span class="mode-btn-icon">📚</span>
              <span class="mode-btn-badge">Komplett</span>
            </div>
            <div class="mode-btn-title">Kompletter Test</div>
            <div class="mode-btn-desc">Alle ${totalCount} Fragen am Stück – das ultimative Prüfungstraining!</div>
          </button>
        </div>
      </div>
    `;

    this.container.querySelectorAll('.quiz-mode-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const mode = btn.dataset.mode;
        this.startQuiz(mode);
      });
    });
  }

  startQuiz(mode) {
    this.mode = mode;
    this.currentIndex = 0;
    this.scoreCorrect = 0;
    this.scoreWrong = 0;

    const shuffled = this.shuffleArray(this.pool);
    if (mode === 'quick') {
      this.currentQuestions = shuffled.slice(0, Math.min(10, shuffled.length));
    } else {
      this.currentQuestions = shuffled;
    }

    this.renderQuestionScreen();
    this.showCurrentQuestion();
  }

  renderQuestionScreen() {
    this.container.innerHTML = `
      <div class="quiz-active-screen" style="display: block;">
        <div class="quiz-header-bar">
          <span class="quiz-counter" id="quizCounterText">Frage 1 von ${this.currentQuestions.length}</span>
          <div class="quiz-score-live">
            <span class="score-tag-correct">✅ <strong id="scoreCorrectVal">0</strong></span>
            <span class="score-tag-wrong">❌ <strong id="scoreWrongVal">0</strong></span>
          </div>
        </div>

        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" id="quizProgressBar"></div>
        </div>

        <div class="quiz-question-box">
          <div class="quiz-question-text" id="quizQuestionText"></div>
          <div class="quiz-options-list" id="quizOptionsList"></div>
          <div class="quiz-feedback-box" id="quizFeedbackBox"></div>
          <button type="button" class="quiz-btn-next" id="quizBtnNext">Nächste Frage &rarr;</button>
        </div>
      </div>
    `;

    document.getElementById('quizBtnNext').addEventListener('click', () => {
      this.nextQuestion();
    });
  }

  showCurrentQuestion() {
    const q = this.currentQuestions[this.currentIndex];
    this.hasAnswered = false;

    // Counter & Progress
    const total = this.currentQuestions.length;
    const currentNum = this.currentIndex + 1;
    document.getElementById('quizCounterText').textContent = `Frage ${currentNum} von ${total}`;
    
    const progressPercent = ((this.currentIndex) / total) * 100;
    document.getElementById('quizProgressBar').style.width = `${progressPercent}%`;

    // Question
    document.getElementById('quizQuestionText').innerHTML = q.q;

    // Reset Feedback & Next Button
    const feedbackBox = document.getElementById('quizFeedbackBox');
    feedbackBox.style.display = 'none';
    feedbackBox.className = 'quiz-feedback-box';
    feedbackBox.innerHTML = '';

    const nextBtn = document.getElementById('quizBtnNext');
    nextBtn.style.display = 'none';
    nextBtn.textContent = (currentNum === total) ? 'Ergebnis anzeigen 🏆' : 'Nächste Frage \u2192';

    // Options
    const optContainer = document.getElementById('quizOptionsList');
    optContainer.innerHTML = '';

    const keys = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-opt-btn';
      btn.innerHTML = `
        <span class="quiz-opt-key">${keys[idx]}</span>
        <span class="quiz-opt-content">${optText}</span>
        <span class="quiz-opt-status-icon"></span>
      `;

      btn.addEventListener('click', () => {
        if (!this.hasAnswered) {
          this.handleAnswer(idx, btn);
        }
      });

      optContainer.appendChild(btn);
    });
  }

  handleAnswer(selectedIndex, clickedBtn) {
    this.hasAnswered = true;
    const q = this.currentQuestions[this.currentIndex];
    const isCorrect = (selectedIndex === q.correct);

    const allButtons = document.querySelectorAll('.quiz-opt-btn');
    allButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.correct) {
        btn.classList.add('is-correct');
        btn.querySelector('.quiz-opt-status-icon').textContent = '✅';
      }
    });

    if (isCorrect) {
      this.scoreCorrect++;
      document.getElementById('scoreCorrectVal').textContent = this.scoreCorrect;
    } else {
      this.scoreWrong++;
      document.getElementById('scoreWrongVal').textContent = this.scoreWrong;
      clickedBtn.classList.add('is-wrong');
      clickedBtn.querySelector('.quiz-opt-status-icon').textContent = '❌';
    }

    // Feedback anzeigen
    const feedbackBox = document.getElementById('quizFeedbackBox');
    feedbackBox.style.display = 'block';
    if (isCorrect) {
      feedbackBox.className = 'quiz-feedback-box correct';
      feedbackBox.innerHTML = `<strong>Richtig! 🎉</strong> ${q.exp || ''}`;
    } else {
      feedbackBox.className = 'quiz-feedback-box wrong';
      feedbackBox.innerHTML = `<strong>Leider nicht ganz richtig.</strong> ${q.exp || ''}`;
    }

    // Next button anzeigen
    document.getElementById('quizBtnNext').style.display = 'block';
  }

  nextQuestion() {
    this.currentIndex++;
    if (this.currentIndex < this.currentQuestions.length) {
      this.showCurrentQuestion();
    } else {
      this.renderResultScreen();
    }
  }

  renderResultScreen() {
    const total = this.currentQuestions.length;
    const correct = this.scoreCorrect;
    const percent = Math.round((correct / total) * 100);

    // Progress bar auf 100%
    document.getElementById('quizProgressBar').style.width = '100%';

    let badge = '🏆';
    let title = 'Hervorragend!';
    let text = 'Du hast das Thema meisterhaft verstanden!';

    if (percent === 100) {
      badge = '🌟';
      title = 'Perfekt! 100% richtig!';
      text = 'Du hast alle Fragen fehlerfrei beantwortet – eine glatte Eins!';
    } else if (percent >= 80) {
      badge = '🎉';
      title = 'Super Leistung!';
      text = 'Klasse gemacht! Du bist bestens für die nächste Klassenarbeit vorbereitet.';
    } else if (percent >= 60) {
      badge = '👍';
      title = 'Gutes Ergebnis!';
      text = 'Das sieht schon richtig gut aus! Schau dir die wenigen Fehler nochmal kurz an.';
    } else {
      badge = '💪';
      title = 'Noch ein bisschen üben!';
      text = 'Wiederhole am besten die Merkregeln oben auf dieser Seite und probiere es gleich nochmal.';
    }

    this.container.innerHTML = `
      <div class="quiz-result-screen" style="display: block;">
        <div class="quiz-result-badge">${badge}</div>
        <h3 class="quiz-result-title">${title}</h3>
        <div class="quiz-result-score">${correct} von ${total} Fragen richtig (${percent} %)</div>
        <p class="quiz-result-text">${text}</p>

        <div class="quiz-result-actions">
          <button type="button" class="quiz-btn-restart" id="btnRestartQuick">
            ⚡ Schnelltest wiederholen (10 Fragen)
          </button>
          <button type="button" class="quiz-btn-secondary" id="btnRestartFull">
            📚 Kompletten Test starten (${this.pool.length} Fragen)
          </button>
        </div>
      </div>
    `;

    document.getElementById('btnRestartQuick').addEventListener('click', () => {
      this.startQuiz('quick');
    });

    document.getElementById('btnRestartFull').addEventListener('click', () => {
      this.startQuiz('full');
    });
  }
}

// Globaler Initialisierer
window.initViyanQuiz = function(containerId, questions, options) {
  return new ViyanQuiz(containerId, questions, options);
};
