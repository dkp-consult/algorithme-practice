var findWords = function(words) {
    // Lettre par niveau 
    const keyB = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    // Vérification pour chaque mot: 
    let results = [];

    keyB.forEach((sequence) => {
        words.forEach((word) => {
            const found = word.toLowerCase().split('').every(letter => sequence.includes(letter));

            if (found) {
                results.push(word);
            }
        });
    });
    return results;
};

module.exports = { findWords };
