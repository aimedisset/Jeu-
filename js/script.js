
let jeton = true;
const joue = document.getElementById('jouer');
const numberDice = document.getElementById('scoreCurrent1')
const numberDice2 = document.getElementById('scoreCurrent2');
const hold = document.getElementById('hold');
const afficheGlobal1 = document.getElementById('score1');
const afficheGlobal2 = document.getElementById('score2');
const afficheDice = document.getElementById('dice');
const nouvellePartie = document.getElementById('nouvellePartie');
const play1 = document.getElementById('jeton1');
const play2 = document.getElementById('jeton2');
const afficheDe = document.getElementById('de');



let de1 = '<svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi bi-dice-1" viewBox="0 0 16 16">'+
           '<circle cx="8" cy="8" r="1.5"/>'+'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>'+
           +'</svg>';

let de2 = '<svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi bi-dice-2" viewBox="0 0 16 16">'+
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>'+
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>'+
'</svg>';

let de3 = '<svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi bi-dice-3" viewBox="0 0 16 16">'+
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>'+
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>'+
'</svg>';

let de4 = '<svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi bi-dice-4" viewBox="0 0 16 16">'+
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>'+
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>'+
'</svg>';

let de5 = '<svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16">'+
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>'+
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>'+
'</svg>';

let de6 = '<svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="currentColor" class="bi bi-dice-6" viewBox="0 0 16 16">'+
'<path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>'+
'<path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>'+
'</svg>';

const tabDice = ['',de1,de2,de3,de4,de5,de6]; //tableau des icones de dés

const lanceDice =()=> {
    return Math.floor(Math.random() * (7 - 1) + 1);
  
  }

 

  function Player (currentScore, globalScore,jeton){
              this.currentScore = currentScore;
              this.globalScore = globalScore;
              this.jeton = true;
  }

 let player1 = new Player(0,0,true);
 let player2 = new Player(0,0,false);

let score = 0;
let afficheLance



const goPlay = () => {
    

        if(jeton == true){
            let lance = lanceDice();
   
            if(lance == 1){
                  numberDice.textContent = "current : 0";
                  play1.innerHTML="";
                  lance = 0;
                  afficheLance = 1;
                  player1.currentScore=0;
                  jeton = false;
                  
                  play2.innerHTML="O";
                //  afficheDe.innerHTML = tabDice[1];
                  afficheDice.innerHTML = "";
            }
             else {
                   afficheLance = lance;
            }
             player1.currentScore = player1.currentScore + lance;
            afficheDice.innerHTML= tabDice[afficheLance];
            numberDice.textContent= "current : "+player1.currentScore;
         
          //  play1.innerHTML="O";
          //  play2.innerHTML="";
        }
        else {
           let lancePlayer2 = lanceDice();
   
           if(lancePlayer2 == 1){
                lancePlayer2 = 0;
                afficheLance = 1;
                player2.currentScore =0;
                jeton = true;
                play1.innerHTML="0";
                play2.innerHTML="";
                numberDice2.textContent = "current : 0";
             
            }
            else {
                afficheLance = lancePlayer2;
            }
            player2.currentScore = player2.currentScore + lancePlayer2;
            numberDice2.textContent = "current : "+player2.currentScore;
            afficheDice.innerHTML= tabDice[afficheLance];
         //   play1.innerHTML="";
         //   play2.innerHTML="O";
        }
        
}

const holder=() =>{
    if(jeton == true){
        numberDice.innerHTML="current : 0";
        player1.globalScore = player1.globalScore + player1.currentScore;
        afficheGlobal1.textContent = "score : "+player1.globalScore;
        player1.currentScore = 0;
        jeton = false;
        play1.innerHTML="";
        play2.innerHTML="O";
        afficheDice.innerHTML = tabDice[0];

    }
    else {
        numberDice2.innerHTML="current : 0";
        player2.globalScore = player2.globalScore + player2.currentScore;
        afficheGlobal2.textContent = "score : "+player2.globalScore;
        player2.currentScore = 0;
        jeton = true;
        play1.innerHTML="0";
        play2.innerHTML="";
        afficheDice.innerHTML = tabDice[0];
    }
}


const reset =()=> {
    player1.globalScore = 0;
    jeton = true;
    player1.currentScore = 0;
    player2.globalScore = 0;
    player2.currentScore = 0;
    afficheLance = 0;
    afficheGlobal2.textContent = "score : "+player2.globalScore;
    afficheGlobal1.textContent = "score : "+player1.globalScore;
    numberDice2.textContent = "current : "+player2.currentScore;
    afficheDice.innerHTML= "";
    numberDice.textContent= "current : "+player1.currentScore;
    play1.innerHTML="0";
    play2.innerHTML="";

}



joue.addEventListener('click', goPlay);
hold.addEventListener('click',holder);
nouvellePartie.addEventListener('click',reset);
