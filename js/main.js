//informazioni utente 

let kmnumbers = prompt("inserisci il numero di chilometri che devi percorrere");

let age = prompt("insersici la tua età");

//calcoli 

let kmprice = kmnumbers * 0.21
let priceunder18 = kmprice - kmprice * 20 / 100
let priceover65 = kmprice - kmprice * 40 / 100




//variabili booleane 

if (console.log < 18) {
    document.getElementById("final_price").innerHTML = console.log("il tuo biglietto costa" + " " + priceunder18)
}
if (age > 65) {
    document.getElementById("final_price").innerHTML = console.log("il tuo biglietto costa" + " " + priceover65)
} else {
    document.getElementById("final_price").innerHTML = console.log("il tuo biglietto costa" + " " + kmprice)
}

//stampa in html



