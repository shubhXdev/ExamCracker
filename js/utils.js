const Utils = {
    // Shuffle array
    shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    },

    // Random integer between min and max
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    // Generate fake bot names
    generateBotNames(count) {
        const names = ["Rohan99", "Priya_GK", "ExamWarrior", "CivilS_Aspirant", "Amit_UP", "Sneha_07", "Vikram_ISO", "Pooja_Sharma", "Rahul_Dev", "Kiran_IAS"];
        let bots = [];
        for (let i = 0; i < count; i++) {
            bots.push({
                name: names[i % names.length] + (Math.floor(Math.random() * 100)),
                score: 0
            });
        }
        return bots;
    }
};
