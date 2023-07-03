//informazioni utente 

let kmnumbers = prompt("inserisci il numero di chilometri che devi percorrere");

let age = prompt("insersici la tua età");

//calcoli 

let kmprice = kmnumbers * 0.21
let priceunder18 = kmprice - kmprice * 20 / 100 
let priceover65 = kmprice - kmprice * 40 / 100

//console



//variabili booleane 

if( age < 18){
    console.log("il tuo biglietto costa" + " " + priceunder18)
} else if(age > 65){
    console.log("il tuo biglietto costa" + " " + priceover65)
} else{
    console.log("il tuo biglietto costa" + " " + kmprice)
}

//stampa in html

document.getElementById("final_price").innerHTML = kmprice;


