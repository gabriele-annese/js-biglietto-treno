
// chiedere etá
const etá = parseInt( prompt("Inserisci la tua etá") );
console.log(etá);
// chiedere n KM
const km =  parseInt( prompt("Inserisci i kilometri da percorrere") );
console.log(km);
// prezzo al km
const prezzo_km = 0.21;
// totale tratta
let totale_tratta = prezzo_km * km;
console.log("totale tratta " + totale_tratta);
// totale_tratta.toFixed(2);

// sconti
let sconto_minori =  (totale_tratta / 100 * 20);
let prezzo_scontato_minori = totale_tratta - sconto_minori;

let sconto_over =  (totale_tratta / 100 * 40);
let prezzo_scontato_over = totale_tratta - sconto_over;

// condizioni sconti-applicati
if (etá < 18) {
    prezzo_scontato_minori
    console.log("prezzo scontato " + prezzo_scontato_minori );
    document.getElementById('biglietto').innerHTML = prezzo_scontato_minori.toFixed(2);
} 
else if (etá > 65) {
    prezzo_scontato_over
    console.log("prezzo scontato " + prezzo_scontato_over );
    document.getElementById('biglietto').innerHTML = prezzo_scontato_over.toFixed(2);
}
else {
    document.getElementById('biglietto').innerHTML = totale_tratta.toFixed(2);
}

