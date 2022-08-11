// set de rules para nextRounds estara lleno previamente en otro programa
// a partir de la posicion 1 el contenido es el proximo juego para los games de la segunda ronda me falta agregar los de las semifinales 
const reglas =['',9,9,10,10,11,11,12,12,13,13,14,14]
const rules = [
  {
    game1: 1,
    game2: 2,
    gameNextRound:"9" // buscar el id en games
  },
  {
    game1: '3',
    game2: '4',
    gameNextRound:"10"
  },
  {
    game1: '5',
    game2: '6',
    gameNextRound:"11" // buscar el id en games
  },
  {
    game1: '7',
    game2: '8',
    gameNextRound:"12"
  },
]
// generar rulesNextRound en localStorage
localStorage.setItem('rulesNextRound',JSON.stringify(rules))
const rulesNextRound = JSON.parse(localStorage.getItem('rulesNextRound'))
// realizar set inicial de las  reglas de next round este array de objetos ya debera estar generado en otro programa en el futuro

const games = [
{
  id: '1',
  nameP1: 'Raul Ramirez',
  nameP2: 'Vitas Gerulaitis',
  winner :''
},
{
  id: '2',
  nameP1: 'Jimmy Connors',
  nameP2: 'Adriano Panatta',
  winner :''
},
{
  id: '3',
  nameP1: 'Jose L, Clerc',
  nameP2: 'Ivan Lendl',
  winner :''
},
{
  id: '4',
  nameP1: 'Rosco Tanner',
  nameP2: 'Ile Nastase',
  winner :''
},
{
id: '5',
nameP1: 'Manuel Orantes',
nameP2: 'Brian Gottfried',
winner :'',
},
{
id: '6',
nameP1: 'Harold Solomon',
nameP2: 'Jhon Mcnroee',
winner :'',
    },
{
 id: '7',
nameP1: 'Stefan Edberg',
nameP2: 'Mats Wilander',
winner :'',
},
{
 id: '8',
 nameP1: 'Eduardo Velez',
 nameP2: 'Andre Agassi',
 winner :'',
},
{
  id: '9',
  nameP1: '',
  nameP2: '',
  winner :'',
  },
  {
  id: '10',
  nameP1: '',
  nameP2: '',
  winner :'',
      },
  {
   id: '11',
  nameP1: '',
  nameP2: '',
  winner :'',
  },
  {
   id: '12',
   nameP1: '',
   nameP2: '',
   winner :'',
  },
]
// generar firstRound en localStorage
localStorage.setItem('gamesFirstRound',JSON.stringify(games))
const items = JSON.parse(localStorage.getItem('gamesFirstRound'))

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
  
  x.innerHTML = `
        <button type="button" class="btn btn-primary showBtn" id="${pelos}" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <p id=P17> ${winner1} </p>
        <p>vs</p>
        <p id=P18> ${winner2} </p>
        <p> score</p>
        </button>
      </div>
  `;

  // localStorage
})
// aqui ya no vuelve a entrar despues de insertar el boton con el winner
const showButtons = document.getElementsByClassName('showBtn');
for (const btn of showButtons) {
  btn.addEventListener('click', (e) => {
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

