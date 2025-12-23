const firebaseConfig = {
    apiKey: "AIzaSyC1hDYRk_jelvgcMfKVXKVO1WDr-Mau4yM",
    authDomain: "exam--cracker2.firebaseapp.com",
    databaseURL: "https://exam--cracker2-default-rtdb.firebaseio.com",
    projectId: "exam--cracker2",
    storageBucket: "exam--cracker2.firebasestorage.app",
    messagingSenderId: "30514388814",
    appId: "1:30514388814:web:3effd9636b77c263ac081f",
    measurementId: "G-JXKGR29Q2Y"
};

// Initialize Firebase (Compat)
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();

const Fire = {
    userId: null,
    userName: "Anonymous",

    // Sign in anonymously
    async login(name) {
        this.userName = name;
        return auth.signInAnonymously()
            .then((userCredential) => {
                this.userId = userCredential.user.uid;
                console.log("Signed in as", this.userId);

                // Add user to "online" list
                this.joinLobby();
                return this.userId;
            })
            .catch((error) => {
                console.error("Login failed:", error);
                alert("Multiplayer Error: Could not connect to server.");
            });
    },

    joinLobby() {
        if (!this.userId) return;
        const userRef = db.ref('players/' + this.userId);
        userRef.set({
            name: this.userName,
            score: 0,
            status: 'online',
            lastActive: firebase.database.ServerValue.TIMESTAMP
        });

        // Remove on disconnect
        userRef.onDisconnect().remove();
    },

    updateScore(newScore) {
        if (!this.userId) return;
        db.ref('players/' + this.userId).update({
            score: newScore,
            status: 'playing'
        });
    },

    // Listen to all players for leaderboard
    subscribeToLeaderboard(callback) {
        const playersRef = db.ref('players');
        playersRef.on('value', (snapshot) => {
            const data = snapshot.val();
            if (!data) return callback([]);

            // Convert object to array
            const players = Object.keys(data).map(key => ({
                id: key,
                ...data[key]
            }));

            // Sort by score
            players.sort((a, b) => b.score - a.score);
            callback(players);
        });
    }
};
