// Single-use access configuration (edit the `password` value as needed)
const ACCESS = {
    // Change this value to the access password you want to require.
    // NOTE: Without a server this is enforced client-side only.
    password: '1122',
    // Optional: persistent token list key. Store a JSON array string in localStorage under this key to enable token auth.
    tokensStorageKey: 'exam_token_list'
};

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

// Device-blocking by marking used in localStorage has been intentionally removed
// so that an access code/token is required every time the site is opened.

// Token helpers
function getStoredTokens() {
    try {
        const raw = localStorage.getItem(ACCESS.tokensStorageKey);
        if (!raw) return [];
        const arr = JSON.parse(raw);
        return Array.isArray(arr) ? arr : [];
    } catch (e) { return []; }
}

function saveStoredTokens(arr) {
    try { localStorage.setItem(ACCESS.tokensStorageKey, JSON.stringify(arr)); } catch (e) { }
}

function getUsedTokens() {
    // kept for backwards compatibility but unused; tokens are not consumed client-side
    return [];
}

function saveUsedTokens(arr) {
    // no-op: we don't persist used tokens on device to force token entry every session
}

function consumeToken(token) {
    // Validate token exists in the stored token list but do NOT remove it.
    if (!token) return false;
    const stored = getStoredTokens();
    return stored.indexOf(token) !== -1;
}

// Convenience: expose a loader for admins to preload tokens via console
window.__exam_loadTokens = function(tokens) {
    if (!Array.isArray(tokens)) return false;
    saveStoredTokens(tokens);
    return true;
}

function showAccessModal(used) {
    const modal = document.getElementById('access-modal');
    const prompt = document.getElementById('access-prompt');
    const input = document.getElementById('access-password-input');
    const submit = document.getElementById('access-submit');
    const cancel = document.getElementById('access-cancel');

    if (used) {
        prompt.textContent = 'This access code has already been used on this device. Contact the administrator.';
        input.style.display = 'none';
        submit.style.display = 'none';
        cancel.textContent = 'Close';
        cancel.addEventListener('click', () => {
            // Keep the site blocked — hide modal but don't initialize app
            modal.classList.add('hidden');
        });
        modal.classList.remove('hidden');
        return;
    }

    modal.classList.remove('hidden');

    function cleanup() {
        submit.removeEventListener('click', onSubmit);
        cancel.removeEventListener('click', onCancel);
    }

    function onSubmit() {
        const val = input.value || '';
        // First check for static password (legacy)
        if (val === ACCESS.password) {
            markAccessUsed();
            cleanup();
            modal.classList.add('hidden');
            App.init();
            return;
        }

        // Then check token list
        if (consumeToken(val)) {
            cleanup();
            modal.classList.add('hidden');
            App.init();
            return;
        }

        // Not valid
        input.value = '';
        input.placeholder = 'Invalid token or password — try again';
    }

    function onCancel() {
        cleanup();
        modal.classList.add('hidden');
    }

    submit.addEventListener('click', onSubmit);
    cancel.addEventListener('click', onCancel);
}

window.addEventListener('DOMContentLoaded', () => {
    // Always require access code every session — show modal unconditionally.
    showAccessModal(false);
});

// Preload provided tokens (only if none are present).
// Tokens list supplied by admin — stored as strings.
(function preloadProvidedTokens() {
    try {
        const existing = getStoredTokens();
        if (existing.length === 0) {
            const provided = [
                "1023","8471","5904","2368","7745","9182","4509","6813","3297","5641",
                "7098","1426","8359","2910","4762","9534","6187","3049","7801","5296",
                "8640","1735","4928","6014","7382","2591","9470","8163","3856","6249",
                "7015","9482","1367","5820","4693","8104","2958","6471","9036","5748",
                "1829","7603","4391","8265","5947","3108","9712","6540","2873","4186",
                "7059","8621","3490","5963","2748","9315","6804","1572","8436","5091",
                "7628","4905","3184","6759","9217","5460","2841","7396","1584","6047",
                "8731","4921","7106","3659","9487","5208","6913","2740","8362","1597",
                "6075","7829","4103","9658","5384","2916","8740","6509","1378","4926",
                "7183","5607","9341","2865","4790","8016","3458","6924","9573","1249",
                "8736","5098","7601","3420","6157","9842","2784","4965","8310","5609",
                "7146","2398","6872","9450","3187","5796","8604","4920","1365","7039",
                "8241","5984","2673","9516","4089","7352","1846","6295","8703","5462",
                "3918","7609","2145","9831","6574","4286","5093","8417","2960","7348",
                "1852","6907","9528","3471","5864","7102","4695","8236","1549","6071",
                "9384","2759","8146","5902","3418","7265","4682","9537","6019","2874",
                "8409","5196","7321","3945","9651","2478","6809","5143","8720","3068",
                "9571","4280","6915","8402","5736","2194","7648","3950","9826","6473"
            ];
            saveStoredTokens(provided);
            // mark todo item as completed
            try { localStorage.setItem('exam_tokens_preloaded', 'true'); } catch (e) {}
            console.log('Preloaded', provided.length, 'tokens into localStorage.');
        }
    } catch (e) { /* ignore */ }
})();
