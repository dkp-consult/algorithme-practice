// LeetCode challenge 9 : https://leetcode.com/problems/length-of-last-word/

var s = "   fly me   to   the moon  ";

var lengthOfLastWord = function(s) {
    var splitted = s.split(' ');
    var noWhiteSpace = splitted.filter(function(str) {
        return /\S/.test(str);
    });
    var lastWord = noWhiteSpace.slice(-1).join();
    return lastWord.length
};

console.log(lengthOfLastWord(s));



// transformer en array
// supprimer les espaces
// prendre l'index -1
// donner sa longueur 
// retourner la réponse 

//12 min timmr 1
// 7 min timer 2