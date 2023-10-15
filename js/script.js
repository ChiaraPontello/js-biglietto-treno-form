
// prendo le classi dell'HTML
const kilometri = document.getElementById('kilometri');


const selezione = document.getElementById('selezione');


const bottone = document.getElementById('bottone');

const km = 0.21;

const totale = document.getElementById('totale');


//inizio funzione + comando al bottone
bottone.addEventListener('click', function(){
    const kmPercorso = kilometri.value;
    
  
    const age = selezione.value; 

//creo variabili
    let sconto, base, prezzoSconto, prezzo;
  
    base = kmPercorso * km;
    
//ciclo per età: <18 / >65 / tra 18 e 65
    if(age === min){
      sconto = base * 20 / 100;
      prezzoSconto = base - sconto;
      prezzo = prezzoSconto.toFixed(2);
    }
    else if(age === senior){
      sconto = base * 40 / 100;
      prezzoSconto = base - sconto;
      prezzo = prezzoSconto.toFixed(2);
    }
    else{
      prezzo = base.toFixed(2);
    }
   
  //total
    totale.innerHTML = prezzo.toFixed(2);
  })
  