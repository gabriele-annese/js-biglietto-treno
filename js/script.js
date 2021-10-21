
// chiedere etá
const etá = parseInt( prompt("Inserisci la tua etá") ); 
if((etá < 0) ||(isNaN)(etá) ) {
    alert("informazioni non inserite corettamente")
}

// chiedere n KM
const km =  parseInt( prompt("Inserisci i kilometri da percorrere") );
if((km <= 0) ||(isNaN)(km) ) {
    alert("inserire piú di 1km")
}

// prezzo al km
const prezzo_km = 0.21;

// totale tratta
let totale_tratta = prezzo_km * km;

// sconti
let sconto_minori =  (totale_tratta / 100 * 20);
let prezzo_scontato_minori = totale_tratta - sconto_minori;

let sconto_over =  (totale_tratta / 100 * 40);
let prezzo_scontato_over = totale_tratta - sconto_over;

// condizioni sconti-applicati
if (etá < 18) {
    prezzo_scontato_minori
    document.getElementById('biglietto').innerHTML = `${prezzo_scontato_minori.toFixed(2)} €`;
} 
else if (etá > 65) {
    prezzo_scontato_over
    document.getElementById('biglietto').innerHTML = `${prezzo_scontato_over.toFixed(2)} €`;
}
else {
    document.getElementById('biglietto').innerHTML = `${totale_tratta.toFixed(2)} €`;
}

// BONUS
function ricalcola(){

const etá = parseInt( prompt("Inserisci la tua etá") ); 
if((etá < 0) ||(isNaN)(etá) ) {
    alert("informazioni non inserite corettamente")
}

const km =  parseInt( prompt("Inserisci i kilometri da percorrere") );
if((km <= 0) ||(isNaN)(km) ) {
    alert("inserire piú di 1km")
}

const prezzo_km = 0.21;


let totale_tratta = prezzo_km * km;

let sconto_minori =  (totale_tratta / 100 * 20);
let prezzo_scontato_minori = totale_tratta - sconto_minori;

let sconto_over =  (totale_tratta / 100 * 40);
let prezzo_scontato_over = totale_tratta - sconto_over;

if (etá < 18) {
    prezzo_scontato_minori
    document.getElementById('biglietto').innerHTML = `${prezzo_scontato_minori.toFixed(2)} €`;
} 
else if (etá > 65) {
    prezzo_scontato_over
    document.getElementById('biglietto').innerHTML = `${prezzo_scontato_over.toFixed(2)} €`;
}
else {
    document.getElementById('biglietto').innerHTML = `${totale_tratta.toFixed(2)} €`;
}



}
