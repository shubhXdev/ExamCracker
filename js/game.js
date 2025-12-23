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
        this.attemptedQuestions = []; // Track used questions
    }

    init() {
        // Load and shuffle questions
        // Copy data to avoid mutating original
        this.questions = Utils.shuffle([...QUESTION_DATA]).slice(0, this.totalQuestions);
        this.attemptedQuestions = [];
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

        const currentQ = this.questions[this.currentIndex];
        const correctIndex = currentQ.correct;
        const isCorrect = selectedIndex === correctIndex;

        // Record attempt
        this.attemptedQuestions.push({
            question: currentQ.question,
            selected: currentQ.options[selectedIndex],
            correct: currentQ.options[correctIndex],
            isCorrect: isCorrect
        });

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

    pauseTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    resumeTimer() {
        // Avoid duplicate intervals
        if (this.timerInterval) return;

        this.dom.timerText.textContent = this.timer;
        this.timerInterval = setInterval(() => {
            this.timer--;
            this.dom.timerText.textContent = this.timer;

            const offset = 220 - (this.timer / 30) * 220;
            this.dom.timerCircle.style.strokeDashoffset = offset;

            if (this.timer <= 0) {
                this.handleTimeout();
            }
        }, 1000);
    }

    handleTimeout() {
        clearInterval(this.timerInterval);

        const currentQ = this.questions[this.currentIndex];
        const correctIndex = currentQ.correct;

        // Record timeout attempt
        this.attemptedQuestions.push({
            question: currentQ.question,
            selected: "TIME OUT",
            correct: currentQ.options[correctIndex],
            isCorrect: false
        });

        // Show correct answer then move on
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

    generatePDF() {
        if (!window.jspdf) {
            alert("PDF Library not loaded. Please verify internet connection.");
            return;
        }
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Header
        doc.setFillColor(22, 22, 37); // Dark BG
        doc.rect(0, 0, 210, 40, 'F');

        doc.setTextColor(0, 255, 136); // Primary Color
        doc.setFontSize(22);
        doc.text("SHUBHAM'S EXAM CRACKER", 105, 20, null, null, "center");

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(12);
        doc.text(`Candidate: ${App.username}`, 14, 30);
        doc.text(`Final Score: ${this.score}`, 150, 30);
        doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 36);

        // Reset for Body
        doc.setTextColor(0, 0, 0);

        // Table Data
        const tableData = this.attemptedQuestions.map((q, i) => [
            i + 1,
            q.question.split('/')[0].trim(), // English only fit better
            q.selected.split('/')[0].trim(),
            q.correct.split('/')[0].trim(),
            q.isCorrect ? "CORRECT" : "WRONG"
        ]);

        doc.autoTable({
            startY: 45,
            head: [['#', 'Question', 'Your Ans', 'Correct Ans', 'Result']],
            body: tableData,
            theme: 'grid',
            headStyles: {
                fillColor: [22, 22, 37],
                textColor: [0, 255, 136],
                fontStyle: 'bold'
            },
            styles: {
                fontSize: 9,
                cellPadding: 3,
                overflow: 'linebreak'
            },
            columnStyles: {
                0: { cellWidth: 10 },
                1: { cellWidth: 80 }
            },
            didParseCell: function (data) {
                if (data.section === 'body' && data.column.index === 4) {
                    if (data.cell.raw === "CORRECT") {
                        data.cell.styles.textColor = [0, 150, 0];
                        data.cell.styles.fontStyle = 'bold';
                    } else {
                        data.cell.styles.textColor = [200, 0, 0];
                    }
                }
            }
        });

        doc.save(`${App.username}_Exam_Report.pdf`);
    }
}
