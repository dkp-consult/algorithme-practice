var convertToTitle = function(columnNumber) {
    let result = "";

    while (columnNumber > 0) {
        columnNumber --; // Décrémente de 1 pour le décalage A=1 devient A=0
        let remainder = columnNumber % 26; // Trouve le reste
        result = String.fromCharCode(remainder + 'A'.charCodeAt(0)) + result; // Convertir le reste en lettre et préfixer au résultat
        columnNumber = Math.floor(columnNumber / 26);
    }
    return result ; 
};