// prendo gli elementi
const kmInput = document.querySelector("#km");
const etaInput = document.querySelector("#eta");
const bottone = document.querySelector("#calcola");
const risultato = document.querySelector("#risultato");
const prezzoOutput = document.querySelector("#prezzo");

// al click
bottone.onclick = function () {

  // prendo valori
  const km = parseFloat(kmInput.value);
  const eta = parseInt(etaInput.value);

   // prezzo base
  let prezzo = km * 0.21;

  // sconti
  if (eta < 18) {
    prezzo = prezzo * 0.8;
  } else if (eta > 65) {
    prezzo = prezzo * 0.6;
  }
  
 // formatto prezzo
  prezzo = prezzo.toFixed(2);

  // stampo risultato
  prezzoOutput.innerHTML = prezzo + " €";

  // mostro risultato
  risultato.classList.remove("d-none");
};
