// cargar api pata clima
// api clima Your API key is 65a23d022f59b3e4ba06e87387a95f1a
window.addEventListener('load', ()=> {
  let lon
  let lat
  if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition( posicion => {
         //console.log(posicion.coords.latitude)
         lon = posicion.coords.longitude
         lat = posicion.coords.latitude
          //ubicación actual    
         //ubicación por ciudad
         const url = `https://api.openweathermap.org/data/2.5/weather?q=McAllen&lang=es&units=metric&appid=65a23d022f59b3e4ba06e87387a95f1a`

         fetch(url)
          .then( response => { return response.json()})
          .then( data => {
              city = data.name
              country = data.sys.country
              let temp = Math.round(data.main.temp)
              let tmin = Math.round(data.main.temp_min)
              let tmax = Math.round(data.main.temp_max)
              clima=document.getElementById('clima');
              clima.innerHTML = `<p> City : ${city}</p> <p> Temperatura Actual : ${temp}</p>
              <p> Temperatura Minima : ${tmin}</p>
              <p> Temperatura Maxima : ${tmax}</p>`
          })
          .catch( error => {
              console.log(error)
          })
     })   
  }
}

)
let reinicio = confirm("Iniciar un nuevo Draw (OK)  continuo Draw Actual (Cancel)");

// a partir de la posicion 1 el contenido es el proximo juego para los games de la seguientes ronda 
const reglas =['',9,9,10,10,11,11,12,12,13,13,14,14,15,15,"campeon"]

// cargar json se utilizo localStorage hare una proxima version usando JSON

 let url = 'json/games.json'
 nextGame=[]
 function getGames(){
  fetch(url, {
   'mode': 'no-cors',
   'headers': {
       'Access-Control-Allow-Origin': '*',
   }
  }).then(function(res){
    console.log(res);
    return res.json();
  }).then(function(data){
    //console.log(data)
  }).catch(function(error){
    console.log(error);
  })
  }
  getGames()
//---------------------------------carga inicial esto en el futuro ya estara lleno desde otro lugar
let games=[]
let gameTemp=[]
let items=[]
// se obtiene el estatus inicial del storage en el futuro esto estara generandose en otro programa
function getGamesFromStoorage() {
    
    games = [
    {
        id: '1',
        nameP1: 'Raul Ramirez',
        nameP2: 'Vitas Gerulaitis',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : false,
    },
    {
        id: '2',
        nameP1: 'Jimmy Connors',
        nameP2: 'Adriano Panatta',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado :false,
    },
    {
        id: '3',
        nameP1: 'Gillermo Vilas',
        nameP2: 'Ivan Lendl',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : false,
    },
    {
        id: '4',
        nameP1: 'Rosco Tanner',
        nameP2: 'Ile Nastase',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : false,
    },
    {
        id: '5',
        nameP1: 'Manuel Orantes',
        nameP2: 'Brian Gottfried',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : false,
    },
    {
        id: '6',
        nameP1: 'Harold Solomon',
        nameP2: 'Jhon Mcnroee',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : false,
    },
    {
        id: '7',
        nameP1: 'Stefan Edberg',
        nameP2: 'Mats Wilander',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : false,
    },
    {
        id: '8',
        nameP1: 'Eduardo Velez',
        nameP2: 'Andre Agassi',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : false,
    },
    {
        id: '9',
        nameP1: 'Pending',
        nameP2: 'Pending',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : true,
    },
    {
        id: '10',
        nameP1: 'Pending',
        nameP2: 'Pending',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : true,
    },
    {
        id: '11',
        nameP1: 'Pending',
        nameP2: 'Pending',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : true,
    },
    {
        id: '12',
        nameP1: 'Pending',
        nameP2: 'Pending',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : true,
    },
    {
        id: '13',
        nameP1:'Pending',
        nameP2: 'Pending',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : true,
    },
    {
        id: '14',
        nameP1: 'Pending',
        nameP2: 'Pending',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : true,
    },
    {
        id: '15',
        nameP1: 'Pending',
        nameP2: 'Pending',
        winner: '',
        score1: '0',
        score2: '0',
        score3: '0',
        score4: '0',
        score5: '0',
        score6: '0',
        desabilitado : true,
    },
    {
      id: '16',
      nameP1: '',
      nameP2: '',
  }
]

// generar firstRound en localStorage
localStorage.setItem('gamesFirstRound',JSON.stringify(games)) // de aqui se carga todo la primera vez
let items = JSON.parse(localStorage.getItem('gamesFirstRound'))
return items
}
// ir a storage por set up inicial una flag si ya tiene info y no ir hacer el setItems
if (reinicio){
  items =getGamesFromStoorage() // esto pone en ceros los scores
}
else{
  items = JSON.parse(localStorage.getItem('gamesFirstRound')) //ojo sirve?
}
// se obtiene el proximo match del ganador del arreglo de reglas cada posicion indica cual es el proximo juego del winner
function buscarNextRound(g,w) {
  return reglas[g];
}  
let player1 ='';
let player2 = '';
idGame=0;
const appDiv = document.getElementById('app');
// generar first rorund
// ojo agregue
games= items
let i =1
generaBotones()
// fin generar first rorund
const showButtons = document.getElementsByClassName('showBtn');
generaListeners()

//submit 
const botonSubmit = document.getElementById("botonSubmit");
botonSubmit.addEventListener('click',(e)=> {
  e.preventDefault(e);
  const id     = registroScore.idGame.value;
  let score1 = registroScore.score1.value;
  let score2 = registroScore.score2.value;
  let score3 = registroScore.score3.value;
  let score4 = registroScore.score4.value;
  let score5 = registroScore.score5.value;
  let score6 = registroScore.score6.value;
  
  winner1 =''
  winner2 = ''
  winner = ((parseInt(score1)+parseInt(score3)+parseInt(score5)) > (parseInt(score2)+parseInt(score4)+parseInt(score6)) ? player1:player2)
  // buscar en rules reglas que match les tocara en la siguiente ronda
  nextRound=buscarNextRound(id,winner)
  // los pares (posicion en el arreglo de reglas ) siempre iran en la parte de abajo
  if(id %2 ==0 ){
    winner2=winner
  }
  // los nones(posicion en el arreglo de reglas) siempre iran en la parte de  arriba
  else{
    winner1=winner
  }
  // Toastify
  Toastify({
    text:`el ganador fue ${winner}`,
    duration:2500,
    position:'right',
    style:{
      backgrund: 'rgb(0, 255, 255)',
        color: 'black',
        width :'175px',
        height:'75px',
      }, 
     offset:{
      x:'60%',
      y:'100',
      }
  }).showToast();
  // finToastify
 /* 
score1=0;
score2=0;
score3=0;
score4=0;
score5=0;
score6=0;
*/
x=document.querySelector(".item"+((nextRound)+''));
const rounds = JSON.parse(localStorage.getItem("gamesFirstRound"));
let actualGame = rounds[id - 1];
// score ganador 
actualGame['winner'] = winner
actualGame['score1'] = score1
actualGame['score3'] = score3
actualGame['score5'] = score5
// score perdedor
actualGame['winner'] = winner
actualGame['score2'] = score2
actualGame['score4'] = score4
actualGame['score6'] = score6
// aqui puedo actualizar score tendre el score del ganador o perdedor con el del perdedor podre deducuir el del ganador (update pendiente funciono en otra parte)
updateStorageTemporal(actualGame,id-1)
  // -----------(se determina la posicion del proximo juego en base a si fue par o non)
 pos1 = (id-2) <= 0 ? 0 :id-2
 pos2 = (id-1) ==0 ? 1 :id-1
switch (id) {
  case "1" || "2":
    pos1 = 0
    pos2 = 1
    break
    case "3" || "4": 
    pos1 = 2
    pos2 = 3
    break;
    case  "5" || "6": 
      pos1 = 4
      pos2 = 5
      break
    case "7" || "8": 
        pos1 = 6
        pos2 = 7
        break
    case "9" || "10": 
        pos1 = 8
        pos2 = 9
        break    
        case "11" || "12": 
        pos1 = 10
        pos2 = 11
        break     
    case "13" || "14":
        pos1 = 12
        pos2 = 13
        break            
    case "15" || "16": 
        pos1 = 14
        pos2 = 15
        break                 
        case "17" || "18":
        pos1 = 16
        pos2 = 17
        break                     
  default:
    break;
}
let desabilitar = false //ojo
nextGame[nextRound]={"id":nextRound+'',"nameP1":games[pos1].winner,"nameP2":games[pos2].winner,"winner":'',"score1":games[pos1],"score2":games[pos2],"score3":games[pos1],"score4":games[pos2],"score5":games[pos1],"score6":games[pos2]} // si agarro el 1 el 2 es pending
if(id+''=='15'){
  //campeon = document.getElementsByClassName('item16'); //no quiso 
  campeon=document.querySelector(".item"+(16+''));     // si quiso
  campeon.innerHTML = `  <h3> Campeon    ${actualGame.winner}`
  final=document.querySelector(".item"+(15+''));    
  final.innerHTML = `
        <button type="button" class="btn btn-primary showBtn" disabled id="${nextRound+''}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p id=P${((id*2)-1+'')}> ${games[id-1].nameP1} </p>
        <p>vs</p>
        <p id=P${(id*2+'')}> ${games[id-1].nameP2} </p>
        <p>score</p>
        <p> ${games[id-1].score1+ '-'+games[id-1].score2+'  '+games[id-1].score3+ '-'+games[id-1].score4+'  '+games[id-1].score5+ '-'+games[id-1].score6} </p>
        <h3> Campeon    ${actualGame.winner} </h3>
        </button>
        `
}
else {
  // prender una flag y con eso saber si es disabled or enabled
  let desabilitar = false
  if(games[pos1].winner ===undefined  || games[pos1].winner ===''){
    desabilitar = true
  }
  if(games[pos2].winner ===undefined || games[pos2].winner ===''){
    desabilitar = true
  }
  
  if(games[pos1].winner.length > 1){
    games[pos1].desabilitado = true
    desabilitar = true
  }
  if(games[pos2].winner.length > 1){
    games[pos2].desabilitado = true
    desabilitar = true
  }
  // no funciona
  if(nextGame[nextRound]=='' || nextGame[nextRound].nameP2==''){
    desabilitar = true
  }
  else{
    desabilitar = false
  }
  // fin de no funciona
  x.innerHTML = `
        <button type="button" class="btn btn-primary showBtn" ${desabilitar ? "disabled" : "enabled"} id="${nextRound+''}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p id=P${(((nextRound*2)-1)+'')}> ${games[pos1].winner ===undefined ? "Pending":games[pos1].winner} </p>
        <p>vs</p>
        <p id=P${((nextRound*2)+'')}> ${games[pos2].winner===undefined ? "Pending":games[pos2].winner}  </p>
        <p> score </p>
        </button>
        `
        // actualGame  ojo con $ nextRound
        campeon=document.querySelector(".item"+(16+''));
        campeon.innerHTML = `<h3> </h3>`
        score=document.querySelector(".item"+((id)+''));
        score.innerHTML = `
        <button type="button" class="btn btn-primary showBtn" disabled id="${nextRound+''}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p id=P${((id*2)-1+'')}> ${games[id-1].nameP1} </p>
        <p>vs</p>
        <p id=P${(id*2+'')}> ${games[id-1].nameP2} </p>
        <p>score</p>
        <p> ${games[id-1].score1+ '-'+games[id-1].score2+'  '+games[id-1].score3+ '-'+games[id-1].score4+'  '+games[id-1].score5+ '-'+games[id-1].score6} </p>
        </button>
        `
}
  updateStorage(nextGame,nextRound,id-1,desabilitar)
  
})

function generaBotones(){
  games.forEach((item) => {
   // items.forEach((item) => {
      if((i+'')=='31' || (i+'') =='32' ){
        appDiv.innerHTML += `<div class="item${item.id}"> <p id=P${(i+'')}>  ${""}</p> </div>` 
      }
      else {
        // se incluyo ternario para poner disabled los matches de las siguientes rondas pudo usar operadores AND y solo cuando sea verdaddera la condicion poner el disabled
        // <button type="button" class="btn btn-primary showBtn" id="${item.id}" ${parseInt(item.id) > 8 ? "disabled":"enabled"} data-bs-toggle="modal" data-bs-target="#exampleModal">
        appDiv.innerHTML += `
            <div class="item${item.id}">
              <button type="button" class="btn btn-primary showBtn" id="${item.id}" ${(item.desabilitado === true ? "disabled":"enabled")} data-bs-toggle="modal" data-bs-target="#exampleModal">
              <p id=P${(i+'')}> ${item.nameP1} </p>
              <p>vs</p>
              <p id=P${((i+1)+'')}> ${item.nameP2} </p>
             <p> score </p>
             <p> ${item.score1+ ' '+item.score2+' '+item.score3+' '+item.score4+' '+item.score5+' '+item.score6} </p> 
              </button>
            </div>`;
        i=i+2;
      }});
    
}
//<p> ${(item.score1 ='undefined') ? ' ' :item.score1 + '-'+ (item.score2='undefined') && ' ' +'  '+(item.score3='undefined') && ' '+ '-'+(item.score4='undefined') && ' '+'  '+(item.score5='undefined') && ' '+ '-'+(item.score6='undefined') && ' '} </p>
function generaListeners(){
    for (const btn of showButtons) {
        btn.addEventListener('click', (e) => {
        const foundItem = items.find((item) => item.id === btn.id);
        idGame=btn.id;
        player1=foundItem.nameP1
        player2=foundItem.nameP2
        registroScore.innerHTML = `
        <div class="idGame" ><label for="idGame"></label>
        <br><br><br><br><br><br>
        <input
        type="number"
        id="idGame"
        name="idGame"
        value="${btn.id}"
       disabled
       />
      </div>
      <div>
        <label for="score1">${foundItem.nameP1}</label>
        <input
          type="number"
          id="score1"
          name="score1"
          min="0"
          max="7"
          step="1"
          value="0"
        />
      </div>
  
      <div>
        <label for="score2">${foundItem.nameP2}</label>
        <input
          type="number"
          id="score2"
          name="score2"
          min="0"
          max="7"
          step="1"
          value="0"
        />
      </div>
  
      <div>
        <label for="score3">${foundItem.nameP1}</label>
        <input
          type="number"
          id="score3"
          name="score3"
          min="0"
          max="7"
          step="1"
          value="0"
        />
      </div>
  
      <div>
        <label for="score4">${foundItem.nameP2}</label>
        <input
          type="number"
          id="score4"
          name="score4"
          min="0"
          max="7"
          step="1"
          value="0"
        />
      </div>
  
      <div>
        <label for="score5">${foundItem.nameP1}</label>
        <input
         type="number"
          id="score5"
          name="score5"
          min="0"
          max="7"
          step="1"
          value="0"
        />
      </div>
  
      <div>
        <label for="score6">${foundItem.nameP2}</label>
        <input
          type="number"
          id="score6"
          name="score6"
          min="0"
          max="7"
          step="1"
          value="0"
        />
      </div>
      
      `; 
    });
  }
}
// args son arreglo donde di click y el id con este puedo ir a reglas a traer el nextMatch
function updateStorageTemporal(a,b){
  games[b] = a // actualizar player en siguientematch 
}
function updateStorage(a,b,d){
    games[b-1] = a[b]
   // games[b-1].desabilitado =false
    desabilita = d
    games[b-1].desabilitado = (games[b-1].nameP1.length <1 || games[b-1].nameP2 <1  ? true : false)
    games[b-1].winner = a[b].winner
    games[b-1].score1 = a[b].score1='0'
    games[b-1].score2 = a[b].score2='0'
    games[b-1].score3 = a[b].score3='0'
    games[b-1].score4 = a[b].score4='0'
    games[b-1].score5 = a[b].score5='0'
    games[b-1].score6 = a[b].score6='0'
    localStorage.setItem('gamesFirstRound',JSON.stringify(games)) 
    items = JSON.parse(localStorage.getItem('gamesFirstRound')) //solo quite const y jalo sera la inmutabilidad ?
    // games = items //ojo
   generaListeners()
  
  }
