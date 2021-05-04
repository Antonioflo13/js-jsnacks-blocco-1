// Snack #4:
// Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste.

var listaCognomi = ["Lococciolo", "Rossi", "Lombardi"] ;
console.log(listaCognomi);
var listaNomi = ["Antonio", "Claudia", "Francesca"] ;
console.log(listaNomi);

function nomeCasuale (nome, cognome) {
    var nomeCasuale = Math.floor(Math.random()* nome.length);
    console.log("nome casuale " + nomeCasuale);
    var cognomeCasuale = Math.floor(Math.random()* cognome.length);
    
    return nome[nomeCasuale] + " " + cognome[cognomeCasuale];
}

for (i = 0; i < 10; i++) {
    document.getElementById("listainvitati").innerHTML += "<li>" + nomeCasuale(listaCognomi, listaNomi) + "</li>";
}

