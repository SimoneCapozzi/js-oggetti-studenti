//oggetto1 = descrizione di uno studente
 var studente = { //<---- {} dentro graffa diventa un oggetto
  'nome' : 'Giulio',// 'nome'= chiave ------- 'Giulio' valore
  'cognome' : 'Cesare',// 'cognome'= chiave ------- 'Cesare' valore
  'età' : 56// 'nome'= età ------- 56Giulio' valore
 }
 /* console.log(studente); */

 //ciclo for in 

 for(var chiave in studente){//con il ciclo for in dico di stampare nella variabile studente  in posizione chiave
   console.log(studente[chiave]);//stampiamo nella variabile studente i valori mettendo tra [] la chiave dei valori
   
 }
  console.log("--------------------------------------------------------");

//Creo un array di studenti

//ho creato un array di studenti contenete gli oggetti  studenti con le varie chiavi e valori di ogni oggetto

var arrStudenti = [ 
  {//i=0
    'nome' : 'Giulio',//j=0  chiave = valore in posizione j
    'cognome' : 'Cesare',//j=1 chiave = valore in posizione j
    'età' : 56//j=2 chiave = valore in posizione j
  },
  {//i=1
    'nome' : 'Marco',//j=0  chiave = valore in posizione j
    'cognome' : 'Aurelio',//j=1 chiave = valore in posizione j
    'età' : 59//j=2 chiave = valore in posizione j
  },
  {//i=2
    'nome' : 'Caligola',//j=0  chiave = valore in posizione j
    'cognome' : 'Germanico',//j=1 chiave = valore in posizione j
    'età' : 29//j=2 chiave = valore in posizione j
  },
  {//i=3
    'nome' : 'Nerone',//j=0  chiave = valore in posizione j
    'cognome' : 'Germanico',//j=1 chiave = valore in posizione j
    'età' : 31//j=2 chiave = valore in posizione j
  },
]

for(var student of arrStudenti){
  for( var chiave in student){
    console.log("chiave: " + chiave + " <----->" + " valore: " + student[chiave]);
  }
  console.log("----------------------------------------------")
  //creo una variabile student che mi salva l'oggetto in posizione [i] di array studenti con i < di arraystudenti.lenght -------- ciclo of
  //chiave è uguale all'attributo dell'oggetto in posizione j e lo stampa tramite student che sarebbe l'oggetto in posizione [i]
}

//creo dei prompt per far inserire dall'utente i valori di un nuovo oggetto

var nuovoNome = prompt("Inserire nome studente");
var nuovoCognome = prompt("Inserire cognome studente");
var nuovaEtà = parseInt(prompt("Inserire età dello studente"));

arrStudenti.push({
  "nome" : nuovoNome,
  "cognome" : nuovoCognome,
  "età" : nuovaEtà,
})

for(var student of arrStudenti){
  for( var chiave in student){
    console.log("chiave: " + chiave + " <----->" + " valore: " + student[chiave]);
  }
  console.log("----------------------------------------------")
  
}

//for var index di in studenti
//studente a
for(var index in arrStudenti){//index = indice che mi scorre l'array studente
  var a = arrStudenti[index]//abbiamo dato alla variabile a il vaolre dell'elemento che si trova alla posizione index = 0 (indice = 0)
  console.log("Il nome è " +a['nome']);
  console.log("Il cognome è " + a['cognome']);
  console.log("----------------------------------------------")
}