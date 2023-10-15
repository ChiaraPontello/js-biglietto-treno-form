
// prendo le classi dell'HTML
const kilometri = document.getElementById('kilometri');


const selezione = document.getElementById('selezione');


const btn = document.getElementById('btn');

const km = 0.21;

const totale = document.getElementById('totale');


//inizio funzione + comando al bottone
btn.addEventListener('click', function(){
    const kmPercorso = kilometri.value;
    
  
    const age = selezione.value; 
  
    let sconto, base, prezzoSconto, prezzo;
  
    base = kmPercorso * km;
    
  
    
  })
  