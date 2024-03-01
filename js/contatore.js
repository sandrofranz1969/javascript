
var contatore = 0;

function incremento() {
  aggiorna(++contatore);
}

function decremento() {
  aggiorna(--contatore);
}

function aggiorna(val) {
  document.getElementById('valore-contatore').innerHTML = val;
}

 
