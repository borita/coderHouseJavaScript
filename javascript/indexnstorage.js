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
              clima.innerHTML = `<p> Temperatura Actual : ${temp}</p>
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


// set de rules para nextRounds estara lleno previamente en otro programa
// a partir de la posicion 1 el contenido es el proximo juego para los games de la segunda ronda me falta agregar los de las semifinales 
const reglas =['',9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19]

// realizar set inicial de las  reglas de next round este array de objetos ya debera estar generado en otro programa en el futuro

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
    console.log(data)
  }).catch(function(error){
    console.log(error);
  })
  }

 //getGames()


/* sin cors
function getGames(){
  fetch(url).then(function(res){
    console.log(res);
    return res.json();
  })

}
*/
// api clima Your API key is 65a23d022f59b3e4ba06e87387a95f1a


//------------------------------------------------------------
let games = [
{
  id: '1',
  nameP1: 'Raul Ramirez',
  nameP2: 'Vitas Gerulaitis',
},
{
  id: '2',
  nameP1: 'Jimmy Connors',
  nameP2: 'Adriano Panatta',
},
{
  id: '3',
  nameP1: 'Jose L, Clerc',
  nameP2: 'Ivan Lendl',
},
{
  id: '4',
  nameP1: 'Rosco Tanner',
  nameP2: 'Ile Nastase',
},
{
id: '5',
nameP1: 'Manuel Orantes',
nameP2: 'Brian Gottfried',
},
{
id: '6',
nameP1: 'Harold Solomon',
nameP2: 'Jhon Mcnroee',
},
{
 id: '7',
nameP1: 'Stefan Edberg',
nameP2: 'Mats Wilander',
},
{
 id: '8',
 nameP1: 'Eduardo Velez',
 nameP2: 'Andre Agassi',
},
{
  id: '9',
  nameP1: 'Raul Ramirez',
  nameP2: 'Jimmy Connors',
  },
  {
  id: '10',
  nameP1: 'Ivan Lendl',
  nameP2: 'Ile Nastase',
      },
  {
   id: '11',
  nameP1: 'Manuel Orantes',
  nameP2: 'John Mcnroee',
  },
  {
   id: '12',
   nameP1: 'Mats Wilander',
   nameP2: 'Eduardo Velez',
  },
  {
   id: '13',
   nameP1: 'Raul Ramirez',
   nameP2: 'Ile Nastase',
  },
  {
   id: '14',
   nameP1: 'Manuel Orantes',
   nameP2: 'Eduardo Velez',
  },
  {
   id: '15',
   nameP1: 'PendingK',
   nameP2: 'PendingL',
  }
]
// generar firstRound en localStorage
localStorage.setItem('gamesFirstRound',JSON.stringify(games))
const items = JSON.parse(localStorage.getItem('gamesFirstRound'))
//const items = JSON.parse(localStorage.getItem('gamesSecondRound'))

function buscarNextRound(g,w) {
  return reglas[g];
} 
  
let player1 ='';
let player2 = '';
idGame=0;
const appDiv = document.getElementById('app');
// generar first rorund
let i = 1
items.forEach((item) => {
  appDiv.innerHTML += `
      <div class="item${item.id}">
        <button type="button" class="btn btn-primary showBtn" id="${item.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p id=P${(i+'')}> ${item.nameP1} </p>
        <p>vs</p>
        <p id=P${((i+1)+'')}> ${item.nameP2} </p>
        <p> score</p>
        </button>
      </div>
  `;
  i=i+2;
});
// fin generar first rorund

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
  pelos=buscarNextRound(id,winner)
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
score1=0;
score2=0;
score3=0;
score4=0;
score5=0;
score6=0;
  

  // si P1 o P2 ya tienen info y lo que viene es vacio dejar lo que tiene no sobreescribir

 x=document.querySelector(".item"+((pelos)+''));
   //x=document.querySelector(".item9");
  //posicionInicial= JSON.parse(JSON.stringify(x.innerHTML)).indexOf('"P17">')  
  //posicionFinal  = JSON.parse(JSON.stringify(x.innerHTML)).indexOf("</p>")  
  //strinner=JSON.parse(JSON.stringify(x.innerHTML)).substring(posicionInicial,posicionInicial-posicionFinal)

  // ------(ir a storage a guardar score y winner y recuperarlo para mostrarlo aqui)----- 
  //localStorage.setItem('gamesFirstRound',JSON.stringify(games))
  //const items = JSON.parse(localStorage.getItem('gamesFirstRound'))
  
  let actualGame = JSON.parse(localStorage.getItem('gamesFirstRound'))
  actualGame = [JSON.stringify(actualGame[id-1])]
  actualGame['winner'] = winner
 
  updateStorage(actualGame,id-1)
  // ----------------------actualiza winner ---------------------------- 


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
p1= games[pos1].winner
p2= games[pos2].winner
nextGame[pelos]={"id":pelos+'',"nameP1":games[pos1].winner,"nameP2":games[pos2].winner}
console.log(" NEXT GAME :"+nextGame[pelos])
  x.innerHTML = `
        <button type="button" class="btn btn-primary showBtn" id="${pelos+''}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p id=P${(((pelos*2)-1)+'')}> ${games[pos1].winner} </p>
        <p>vs</p>
        <p id=P${((pelos*2)+'')}> ${games[pos2].winner} </p>
        <p> score</p>
        </button>
      </div>`;
/*
      //----------------------------- listener para updated
let i = 1
items.forEach((item) => {
  appDiv.innerHTML += `
      <div class="item${item.id}">
        <button type="button" class="btn btn-primary showBtn" id="${item.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p id=P${(i+'')}> ${item.nameP1} </p>
        <p>vs</p>
        <p id=P${((i+1)+'')}> ${item.nameP2} </p>
        <p> score</p>
        </button>
      </div>
  `;
  i=i+2;
});
for (const btn of showButtons) { 
      btn.addEventListener('click', (e) => {
        alert("id del click ? "+ idGame)  
        const foundItem = items.find((item) => item.id ===btn.id);
        idGame=btn.id;
        player1=foundItem.nameP1
        player2=foundItem.nameP2
        registroScore.innerHTML = `
        <div class="idGame" ><label for="idGame">${btn.id}</label>
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
          </div>`
      })}
      //----------------------------- fin de listener updated
      updateStorage(nextGame,pelos)
      */
  console.log("que genero")
  console.log(x)
})
// aqui ya no vuelve a entrar despues de insertar el boton con el winner
const showButtons = document.getElementsByClassName('showBtn');
for (const btn of showButtons) {
  btn.addEventListener('click', (e) => {
  alert("id del click ? "+ btn.id)  
  const foundItem = items.find((item) => item.id === btn.id);
  idGame=btn.id;
  player1=foundItem.nameP1
  player2=foundItem.nameP2
  registroScore.innerHTML = `
  <div class="idGame" ><label for="idGame">${btn.id}</label>
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

// args son arreglo donde di click y el id con este puedo ir a reglas a traer el nextMatch
function updateStorage(a,b){
  games[b] = a // si quito esto falla lo de actualizar player en siguiente ronda
  //alert(games)
  //7 , 4 ,2
  /*
 games[b]["id"] = a[0]
 games[b]["nameP1"] = a[1]
 games[b]["nameP2"] = a[2]
 localStorage.setItem('gamesFirstRound',JSON.stringify(games[b]))
 */
}