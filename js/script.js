
let jeton = true;
const joue = document.getElementById('jouer');
const numberDice = document.getElementById('scoreCurrent1')
const numberDice2 = document.getElementById('scoreCurrent2');
const hold = document.getElementById('hold');
const afficheGlobal1 = document.getElementById('score1');
const afficheGlobal2 = document.getElementById('score2');
const afficheDice = document.getElementById('dice');
const nouvellePartie = document.getElementById('nouvellePartie');





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
                  lance = 0;
                  afficheLance = 1;
                  player1.currentScore=0;
                  jeton = false;
            }
             else {
                   afficheLance = lance;
            }
             player1.currentScore = player1.currentScore + lance;
   
            numberDice.textContent= "current : "+player1.currentScore;
            afficheDice.textContent= afficheLance;
        }
        else {
           let lancePlayer2 = lanceDice();
   
           if(lancePlayer2 == 1){
                lancePlayer2 = 0;
                afficheLance = 1;
                player2.currentScore =0;
                jeton = true;
            }
            else {
                afficheLance = lancePlayer2;
            }
            player2.currentScore = player2.currentScore + lancePlayer2;
            numberDice2.textContent = "current : "+player2.currentScore;
            afficheDice.textContent= afficheLance;
        }
}

const holder=() =>{
    if(jeton == true){
        player1.globalScore = player1.globalScore + player1.currentScore;
        afficheGlobal1.textContent = "score : "+player1.globalScore;
        player1.currentScore = 0;
        jeton = false;

    }
    else {
        player2.globalScore = player2.globalScore + player2.currentScore;
        afficheGlobal2.textContent = "score : "+player2.globalScore;
        player2.currentScore = 0;
        jeton = true;
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
    afficheDice.textContent= afficheLance;
    numberDice.textContent= "current : "+player1.currentScore;

}



joue.addEventListener('click', goPlay);
hold.addEventListener('click',holder);
nouvellePartie.addEventListener('click',reset);
