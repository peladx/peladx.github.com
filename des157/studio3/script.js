'use strict';
const startGame=document.getElementById('startgame');
const gameControl=document.getElementById('gamecontrol');
const game=document.getElementById('game');
const score=document.getElementById('score');
const actionArea=document.getElementById('actions');
const instructions=document.getElementById('instructions');
const howtoplay=document.getElementById('howtoplay');
const close1=document.querySelector(".close1");
//audio
const cheer = new Audio('media/cheer.wav');
const dice = new Audio('media/dice.wav');
cheer.volume = 0.5;
dice.volume = 0.7;

//images/variables for dice
const gameData ={
  dice:["media/dice1.png","media/dice2.png","media/dice3.png","media/dice4.png","media/dice5.png","media/dice6.png"],
  players:["player 1","player 2"],
  score:[0,0],
  roll1: 0,
  roll2: 0,
  rollSum:0,
  index:0,
  gameEnd:29

};
//instructions
instructions.addEventListener("click",function(){
  howtoplay.className='showing';
});

close1.addEventListener("click",function(){
  howtoplay.className='hidden';
});
//startgame
startGame.addEventListener("click",function(){
  gameData.index= Math.round(Math.random());
  gameControl.innerHTML='';
  gameControl.innerHTML +='<button id="quit">Quit?</button>';

  document.getElementById('quit').addEventListener("click",function(){
    location.reload();

  });
  console.log("Set up the turn!");
  setUpTurn();
});

function setUpTurn(){
  game.innerHTML=`<p>
  Roll the dice for the ${gameData.players[gameData.index]}
  </p>`;
  console.log(game);
  actionArea.innerHTML='<button id="roll">roll the dice </button>';
  document.getElementById('roll').addEventListener('click', function(){
    console.log("roll the dice!");
    throwDice();
  });
}

//roll dice +actions 
function throwDice(){
  dice.play();
  actionArea.innerHTML='';
  gameData.roll1 = Math.floor(Math.random()*6)+1;
  gameData.roll2=Math.floor(Math.random()*6)+1;
  game.innerHTML=`<p>
  Roll the dice for the ${gameData.players[gameData.index]}
  </p>`;
  game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                    <img src="${gameData.dice[gameData.roll2-1]}">`;
  gameData.rollSum=gameData.roll1+gameData.roll2;

  // console.log(gameData);

  if (gameData.rollSum === 2){
    game.innerHTML+=`<p>
    Oh snap! Snake Eyes!
    </p>`;
    gameData.score[gameData.index]=0;
    gameData.index ? (gameData.index=0): (gameData.index=1);
    setTimeout(setUpTurn,2000);
    showCurrentScore();

  }
  else if (gameData.roll1===1||gameData.roll2===1){
    gameData.index ? (gameData.index=0):(gameData.index=1);
    game.innerHTML+=`<p>Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}
    </p>`;
    setTimeout(setUpTurn,2000);

  }

  else{
    console.log('the game proceeds');
    gameData.score[gameData.index]=gameData.score[gameData.index]+gameData.rollSum;
    actionArea.innerHTML='<button id="rollagain">Roll again</button><button id="pass">Pass</button>';

    document.getElementById('rollagain').addEventListener('click',function(){
      setUpTurn();
    });
    document.getElementById('pass').addEventListener('click',function(){
      gameData.index ? (gameData.index=0) : (gameData.index=1);
      setUpTurn();

    });
    checkWinningCondition();
  }
}


//player wins ; new game
function checkWinningCondition(){
  if(gameData.score[gameData.index]>gameData.gameEnd){
    cheer.play();
    score.innerHTML=`<h2> ${gameData.players[gameData.index]}
    wins with ${gameData.score[gameData.index]} points!
    </h2>`;

    actionArea.innerHTML='';
    document.getElementById('quit').innerHTML="New Game?";
  }
  else{
    score.innerHTML=`<p>
    Score: <strong>${gameData.players[0]}
    ${gameData.score[0]}</strong> <strong>${gameData.players[1]}
    ${gameData.score[1]}</strong></p>`;
  }
}

function showCurrentScore(){
  score.innerHTML=`<p> The score is currently <strong>${gameData.player[0]}
  ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
  ${gameData.score[1]}</strong></p>`;
}
