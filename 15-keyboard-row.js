// LeetCode challenge 15 : https://leetcode.com/problems/keyboard-row/

var findWords = function(words) {

    // Init row variables
    var row1 = "qwertyuiop".split('');
    var row2 = "asdfghjkl".split('');
    var row3 = "zxcvbnm".split('');

    var answer = [];

    // Transform word to array
    var wordToArray = words[0].split('');
    
    // Test an idea
    for (i = 0; i < words.length ; i++) {
        var oneWord = words[i].split('');
        for (j = 0; j < oneWord.length; j++) {
            if (oneWord[j].includes(row2)) {
                answer = 'yes'
                console.log(answer)
            }
        }
    }
    
    
    console.log(answer)
};

findWords(["Hello","Alaska","Dad","Peace"])

// On split les mots dans un tableau
// On vérifie si toutes les lettres d'un tableau se retrouve sur une et une seule ligne 
// Dans l'affirmative on ajoute ce mot à une variable 
// On retourne la variable mot qui a la + grande longueure

// Explaination : https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjd3rWPlIn8AhUyi_0HHUszAgUQz40FegQIDRAd&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DdcyHiyoBQk4&usg=AOvVaw3pfumE0x3dWtSevMdepAyz