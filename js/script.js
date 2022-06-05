
function lanceDice() {
    return Math.floor(Math.random() * (7 - 1) + 1);
  
  }
let score = 0;
let afficheLance
let i =0;
let j = 0;
let jeton = true;
const joue = document.getElementById('jouer');
const numberDice = document.getElementById('lanceDice')
const numberDice2 = document.getElementById('lanceDice2');
let scorePlayer2 = 0;
const goPlay = () => {
 if(jeton == true){
   let lance = lanceDice();
   i++;
   if(lance == 1){
       lance = 0;
       afficheLance = 1;
       jeton = false;
   }
   else {
       afficheLance = lance;
   }
   score =score + lance;
   
   numberDice.textContent= "lancé"+i+": "+afficheLance+" score = "+score;
 }
 else {
     let lancePlayer2 = lanceDice();
     j++;
     if(lancePlayer2 == 1){
         lancePlayer2 = 0;
         afficheLance = 1;
         jeton = true;
     }
     else {
         afficheLance = lancePlayer2;
     }
     scorePlayer2 = scorePlayer2 + lancePlayer2;
     numberDice2.textContent = "Lancé joueur 2 :"+j+" : "+afficheLance+"  score : "+scorePlayer2;
 }
}

joue.addEventListener('click', goPlay);