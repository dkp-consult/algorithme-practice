// LeetCode challenge : https://leetcode.com/problems/largest-substring-between-two-equal-characters/

var maxLengthBetweenEqualCharacters = function(s) {
    let n = s.length;
    let res = -1;

    for (let i = 0; i < n -1; i++)
        for (let j = i + 1; j < n; j++)
            if (s[i] == s[j])
                res = Math.max(res, Math.abs(j - i -1));
    return res;
};

// Lister les charactères présents => Mapper les caractères et les comparer entre eux
// Identifier s'il y a des doublons 
// Créer un string avec les charactères entre les doublons
// Compter le nombres de charactères et le retourner
// Si aucun doublon, pas de retour 

// search method + indexOf + regex 
// https://stackoverflow.com/questions/14867835/get-substring-between-two-characters-using-javascript
// https://www.tutorialspoint.com/largest-substring-between-two-equal-characters-in-a-string-in-javascript
