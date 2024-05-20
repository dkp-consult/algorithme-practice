function findTheDifference(s, t) {
    let answer = [];
    let sAlph = s.split('').sort();
    let tAlph = t.split('').sort();

    for (let i = 0; i < tAlph.length; i++) {
        if (sAlph[i] !== tAlph[i]) {
            answer.push(tAlph[i]);
        } 
    }
    return answer.join('');
}

module.exports = { findTheDifference };
