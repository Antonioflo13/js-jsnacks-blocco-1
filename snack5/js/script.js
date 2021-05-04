// Snack #5:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
// Stampa l'array nella console.


// FUNCTIONS
function pari (num) {

    if (num % 2 == 0 ) {
        var pari = true;
    }
    return pari;
}

var arrayVuoto = [];
// console.log(arrayVuoto);
var i = 0;
do {
    var inserisciNumero = prompt("Ti chiedo un numero!");
    if (pari (inserisciNumero) == true ) {
        arrayVuoto.push(inserisciNumero);
    }
    i++;
} while (i < 6) {
 
}
