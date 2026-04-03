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
