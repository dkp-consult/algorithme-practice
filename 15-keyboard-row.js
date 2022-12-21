// LeetCode challenge 15 : https://leetcode.com/problems/keyboard-row/

var findWords = function(words) {

    // Lettre par niveau 
    const keyB = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    // Vérification pour chaque mots: 

    let found = false;
    let results = [];

    keyB.forEach( (sequence) => {
        words.forEach((word) => {
            found = word.toLowerCase().split('').every(letter => sequence.includes(letter))

            if (found) {
                results.push(word)
            }
        })
    })
    return results;
};

findWords(["Hello","Alaska","Dad","Peace"])

// On split les mots dans un tableau
// On vérifie si toutes les lettres d'un tableau se retrouve sur une et une seule ligne 
// Dans l'affirmative on ajoute ce mot à une variable 
// On retourne la variable mot qui a la + grande longueure

// Explaination : https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjd3rWPlIn8AhUyi_0HHUszAgUQz40FegQIDRAd&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdcyHiyoBQk4&usg=AOvVaw3pfumE0x3dWtSevMdepAyz