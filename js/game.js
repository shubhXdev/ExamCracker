class GameEngine {
    constructor() {
        this.questions = [];
        this.currentIndex = 0;
        this.score = 0;
        this.timer = 30;
        this.timerInterval = null;
        this.totalQuestions = 100;

        // Sound effects (using browser speech for simplicity, or just visual cues)
        this.dom = {
            questionText: document.getElementById('question-text'),
            optionsGrid: document.getElementById('options-grid'),
            timerText: document.getElementById('timer-text'),
            timerCircle: document.querySelector('.timer-ring-circle'),
            currentScore: document.getElementById('current-score'),
            progressBar: document.getElementById('progress-fill'),
            leaderboard: document.getElementById('live-leaderboard')
        };
    }

    init() {
        // Load and shuffle questions
        // Copy data to avoid mutating original
        this.questions = Utils.shuffle([...QUESTION_DATA]).slice(0, this.totalQuestions);
        this.startLevel();
        this.startMultiplayer();
    }

    startLevel() {
        if (this.currentIndex >= this.totalQuestions) {
            this.endGame();
            return;
        }

        const qData = this.questions[this.currentIndex];
        this.renderQuestion(qData);
        this.resetTimer();
        this.updateProgress();
    }

    renderQuestion(data) {
        // Dual Language Display
        this.dom.questionText.innerHTML = `
            ${data.question}
            <span class="question-hindi">${data.questionHindi}</span>
        `;

        this.dom.optionsGrid.innerHTML = '';

        data.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt;
            btn.onclick = () => this.handleAnswer(index, btn);
            this.dom.optionsGrid.appendChild(btn);
        });
    }

    handleAnswer(selectedIndex, btnElement) {
        clearInterval(this.timerInterval); // Stop timer immediately

        const correctIndex = this.questions[this.currentIndex].correct;
        const isCorrect = selectedIndex === correctIndex;

        // Visual Feedback
        const allBtns = document.querySelectorAll('.option-btn');
        allBtns[correctIndex].classList.add('correct');

        if (!isCorrect) {
            btnElement.classList.add('wrong');
        } else {
            // Score Calculation: Base 10 + Time Bonus
            const bonus = this.timer > 20 ? 5 : (this.timer > 10 ? 2 : 0);
            this.score += (10 + bonus);
            this.animateScore();

            // Push calculation to server
            Fire.updateScore(this.score);
        }

        // Delay before next question
        setTimeout(() => {
            this.currentIndex++;
            this.startLevel();
        }, 1500);
    }

    resetTimer() {
        this.timer = 30;
        this.dom.timerText.textContent = this.timer;
        this.dom.timerCircle.style.strokeDashoffset = 0;

        // Clear existing interval if any
        if (this.timerInterval) clearInterval(this.timerInterval);

        this.timerInterval = setInterval(() => {
            this.timer--;
            this.dom.timerText.textContent = this.timer;

            // Update Circle (220 is circumference)
            const offset = 220 - (this.timer / 30) * 220;
            this.dom.timerCircle.style.strokeDashoffset = offset;

            if (this.timer <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    }

    handleTimeout() {
        clearInterval(this.timerInterval);
        // Show correct answer then move on
        const correctIndex = this.questions[this.currentIndex].correct;
        const allBtns = document.querySelectorAll('.option-btn');
        if (allBtns[correctIndex]) allBtns[correctIndex].classList.add('correct');

        setTimeout(() => {
            this.currentIndex++;
            this.startLevel();
        }, 1500);
    }

    updateProgress() {
        const percent = ((this.currentIndex) / this.totalQuestions) * 100;
        this.dom.progressBar.style.width = `${percent}%`;
        this.dom.currentScore.textContent = this.score;
    }

    animateScore() {
        this.dom.currentScore.classList.add('pulse');
        setTimeout(() => this.dom.currentScore.classList.remove('pulse'), 500);
    }

    // --- MULTIPLAYER (REAL-TIME) ---
    startMultiplayer() {
        // Listen to real updates
        Fire.subscribeToLeaderboard((players) => {
            this.renderLeaderboard(players);
        });
    }

    renderLeaderboard(players) {
        // Render Top 10
        this.dom.leaderboard.innerHTML = '';
        players.slice(0, 10).forEach((p, i) => {
            const isMe = p.name === App.username;
            const li = document.createElement('li');
            li.className = `lb-item ${isMe ? 'you' : ''}`;
            li.innerHTML = `
                <span>#${i + 1} ${p.name}</span>
                <span>${p.score}</span>
            `;
            this.dom.leaderboard.appendChild(li);
        });
    }

    endGame() {
        clearInterval(this.timerInterval);
        App.showResults(this.score, this.totalQuestions);
    }
}
