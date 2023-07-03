//informazioni utente 

let kmnumbers = prompt("inserisci il numero di chilometri che devi percorrere");

let age = prompt("insersici la tua età");

//calcoli 






//variabili booleane 
let finalPrice = kmnumbers * 0.21;

if (age < 18) {
    finalPrice = finalPrice - finalPrice * 20 / 100
}
else if (age > 65) {
    finalPrice = finalPrice - finalPrice * 40 / 100
}




console.log("il tuo biglietto costa" + " " + finalPrice);
document.getElementById("final_price").innerHTML = finalPrice.toFixed(2);

//stampa in html





