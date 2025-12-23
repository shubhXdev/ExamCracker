const App = {
    currentGame: null,
    username: 'Player',

    init() {
        // Event Listeners
        document.getElementById('btn-enter').addEventListener('click', () => {
            const name = document.getElementById('username-input').value || "Player";
            this.username = name;

            // Login to Firebase
            const btn = document.getElementById('btn-enter');
            btn.innerHTML = "CONNECTING...";
            btn.disabled = true;

            Fire.login(name).then(() => {
                this.showScreen('lobby-screen');
                this.updateLobby();
                btn.innerHTML = "ENTER LOBBY";
                btn.disabled = false;
            });
        });

        document.getElementById('btn-invite').addEventListener('click', () => {
            // Share the current URL (works for GitHub Pages)
            const url = window.location.href;
            const text = `Join me in Shubham Exam Cracker! Beat my score here: ${url}`;
            navigator.clipboard.writeText(text);

            const btn = document.getElementById('btn-invite');
            const originalText = btn.innerHTML;
            btn.innerHTML = "LINK COPIED! ✅";
            setTimeout(() => btn.innerHTML = originalText, 2000);
        });

        document.getElementById('btn-start').addEventListener('click', () => {
            this.showScreen('game-screen');
            this.currentGame = new GameEngine();
            this.currentGame.init();
        });

        // EXIT flow: double confirmation + motivational quote on second confirm
        const quotes = [
            "You are closer than you think — one more step matters.",
            "Greatness is built from small consistent choices. Stay focused.",
            "Finish strong — future you will thank you for not quitting.",
            "A single question more could change everything. Keep going!",
            "Courage is continuing even when it's hard. You've got this."
        ];

        document.getElementById('btn-exit').addEventListener('click', () => {
            if (this.currentGame) this.currentGame.pauseTimer();
            document.getElementById('confirm-exit-modal').classList.remove('hidden');
        });

        document.getElementById('exit-cancel').addEventListener('click', () => {
            document.getElementById('confirm-exit-modal').classList.add('hidden');
            if (this.currentGame) this.currentGame.resumeTimer();
        });

        document.getElementById('exit-yes').addEventListener('click', () => {
            document.getElementById('confirm-exit-modal').classList.add('hidden');
            const q = quotes[Math.floor(Math.random() * quotes.length)];
            document.getElementById('final-quote').textContent = q;
            document.getElementById('final-exit-modal').classList.remove('hidden');
        });

        document.getElementById('final-stay').addEventListener('click', () => {
            document.getElementById('final-exit-modal').classList.add('hidden');
            if (this.currentGame) this.currentGame.resumeTimer();
        });

        document.getElementById('final-exit').addEventListener('click', () => {
            document.getElementById('final-exit-modal').classList.add('hidden');
            // Force end the game and show results
            if (this.currentGame) this.currentGame.endGame();
        });

        document.getElementById('btn-replay').addEventListener('click', () => {
            this.showScreen('landing-screen');
        });
    },

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => {
            if (s.id !== screenId) {
                s.classList.remove('active');
                setTimeout(() => s.classList.add('hidden'), 500);
            }
        });

        const target = document.getElementById(screenId);
        // Force remove hidden immediately and ensure it stays visible
        target.classList.remove('hidden');
        setTimeout(() => target.classList.add('active'), 50);
    },

    updateLobby() {
        document.getElementById('display-name').textContent = this.username.toUpperCase();

        // Listen to real player count
        Fire.subscribeToLeaderboard((players) => {
            document.getElementById('lobby-count').textContent = players.length;
        });
    },

    showResults(score, total) {
        this.showScreen('results-screen');
        document.getElementById('final-score').textContent = score;

        // Bind PDF Button
        const pdfBtn = document.getElementById('btn-download-pdf');
        // Remove old listeners to avoid duplicates if replaying
        const newPdfBtn = pdfBtn.cloneNode(true);
        pdfBtn.parentNode.replaceChild(newPdfBtn, pdfBtn);

        newPdfBtn.addEventListener('click', () => {
            if (this.currentGame) {
                this.currentGame.generatePDF();
            }
        });

        // Calculate mock rank based on score
        let rank = "Top 10%";
        if (score < 200) rank = "Top 80%";
        else if (score < 500) rank = "Top 40%";
        else if (score < 800) rank = "Top 20%";
        else rank = "Top 1%"; // Godlike

        document.getElementById('final-rank').textContent = rank;

        // Accuracy isn't strictly tracked in GameEngine efficiently due to speed runs,
        // but can be estimated or tracked if needed. 
        // For now, simpler metric or just score is fine, but let's mock accuracy for UI completeness.
        const accuracy = Math.min(100, Math.round((score / (total * 15)) * 100));
        document.getElementById('final-accuracy').textContent = accuracy + "%";
    }
};

// Start App
window.addEventListener('DOMContentLoaded', () => {
    App.init();
});
