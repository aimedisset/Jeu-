
let jeton = true; //variable booleenne qui permet de donner la main à un joueur player1 -> true et player2 -> false par défaut


/************************ Affectation des identifiants du DOM ***************************/
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
const gagnant = document.getElementById('winner');

// affect à circle l'icone point rouge de bootstrap pour visualiser quel joueur a la main
const circle = ' <span style="color : red; font-weight: 900; vertical-align:middle;"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">'+
'<circle cx="8" cy="8" r="8"/>'+
'</svg>';
//affect aux variables d'affichage dans le DOM selon si le joueur a la main ou pas.
const player1AfficheFalse = "<span style=\"font-size:60px; font-weight : 100; color:black; font-family:'Lato',cursive;vertical-align: middle;\">PLAYER 1</span>";
const player1AfficheTrue = "<span style=\"font-size:60px; font-weight : 900; color:black; font-family:'Lato',cursive;vertical-align: middle;\">PLAYER 1&nbsp;&nbsp;</span>";

const player2AfficheFalse = "<span style=\"font-size:60px; font-weight : 100; color:black; font-family:'Lato',cursive;vertical-align: middle;\">PLAYER 2</span>";
const player2AfficheTrue = "<span style=\"font-size:60px; font-weight : 900; color:black; font-family:'Lato',cursive;vertical-align: middle;\">PLAYER 2&nbsp;&nbsp;</span>";



//affectation des icones de dés de bootstrap pour les intégrer dans un tableau afin d'en faciliter l'utilisation lorsque la fonction aléatoire retournera un nombre entre 1 et 6
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


const tabDice = ['',de1,de2,de3,de4,de5,de6]; //tableau des icones de dés les guillemets vide à l'indice 0 permette de ne rien afficher

//fonction qui retourne de manière aléatoire un entier compris entre 1 et 6
const lanceDice =()=> {
    return Math.floor(Math.random() * (7 - 1) + 1);
  
  }

 
//création de l'objet joueur qui prend en paramètre le score courant et le score global
  function Player (currentScore, globalScore){
              this.currentScore = currentScore;
              this.globalScore = globalScore;
              
  }
//création de l'objet player 1 et player 2
 let player1 = new Player(0,0,true);
 let player2 = new Player(0,0,false);


//score initial
let score = 0;
let afficheLance;  //variable d'affichage du retour de la fonction aléatoire lanceDice()


//fonction qui va être appeler lors du click sur l'élément joue du DOM (ROLL DICE)
const goPlay = () => {
    

        if(jeton == true){   //si jeton = true alors joueur 1 a la main
            let lance = lanceDice();  //retourne et affecte à lance le nombre aléatoire
   
            if(lance == 1){    //si lance = 1 
                  numberDice.textContent = "0";    //affect la valeur 0 au current score
                  play1.innerHTML=player1AfficheFalse; //affichage de la perte de la main
                  lance = 0; //affect 0 à la variable car le 1 est perdant 
                  afficheLance = 1;
                  player1.currentScore=0; //remise à 0 du current score
                  jeton = false; //perd la main et la donne au joueur 2
                  
                  play2.innerHTML=player2AfficheTrue+circle; //affichage dans le DOM de la prise de main du joueur 2
                
                  
            }
             else {
                   afficheLance = lance; //sinon on affect la valeur retournée par la fonction aléatoire
            }
             player1.currentScore = player1.currentScore + lance; //affect la valeur retournée par la fonction aléatoire au current score en l'additionnant
            afficheDice.innerHTML= tabDice[afficheLance]; //affiche l'icone du dé selon sa valeur
            numberDice.textContent= player1.currentScore; //affiche dans le DOM le current score
         
         
        }
        else {   //si le jeton n'a pas la valeur true soit false alors le même code que le précédent s'exécute mais pour le joueur 2
           let lancePlayer2 = lanceDice();
   
           if(lancePlayer2 == 1){
                lancePlayer2 = 0;
                afficheLance = 1;
                player2.currentScore =0;
                jeton = true;
                play1.innerHTML=player1AfficheTrue+circle;
                play2.innerHTML=player2AfficheFalse;
                numberDice2.textContent = "0";
                
             
            }
            else {
                afficheLance = lancePlayer2;
            }
            player2.currentScore = player2.currentScore + lancePlayer2;
            numberDice2.textContent = player2.currentScore;
            afficheDice.innerHTML= tabDice[afficheLance];
     
        }
        
}


//fonction qui va être appeler lors du click sur l'élément holder du DOM (HOLD)
const holder=() =>{
    if(jeton == true){
        
        numberDice.innerHTML="0"; //affiche dans le DOM la réinitialisation à 0 du current score
        player1.globalScore = player1.globalScore + player1.currentScore; //affectation du current au score global

        if(player1.globalScore<100){  //tant que le score est strictement inférieur à 100 le jeun se poursuit
            afficheGlobal1.textContent = player1.globalScore; //affichage dans le DOM à l'id score1 (joueur1)
            player1.currentScore = 0; //réinitialisation à 0 du current score
            jeton = false; //donne la main au joueur 2
            play1.innerHTML=player1AfficheFalse; //affichage dans le DOM de la perte de main
            play2.innerHTML=player2AfficheTrue+circle; //affichage de la prise de main pour joueur 2
            afficheDice.innerHTML = tabDice[0];//retire l'affichage du dé, l'indice 0 retourne un chaîne de caractères vide
        }
        else {  //score global supérieur ou égal à 100 player 1 gagne la partie
            gagnant.innerHTML = "<span class='win'>PLAYER 1 Win</span>";  //affichage du joueur 1 gagnant dans le DOM
            afficheGlobal1.textContent = player1.globalScore; //Affiche le score global final
            hold.removeEventListener('click', holder); //supprime l'écoute du Hold
            joue.removeEventListener('click', goPlay); //supprime l'écooute du Roll les deux écoutes seront réactivés à l'aide de la fonction reset(nouvelle partie)
            
        }
    }
    else {  //idem que le code précédent mais pour le joueur 2
        numberDice2.innerHTML="0";
        player2.globalScore = player2.globalScore + player2.currentScore;

        if(player2.globalScore<100){
            afficheGlobal2.textContent = player2.globalScore;
            player2.currentScore = 0;
            jeton = true;
            play1.innerHTML=player1AfficheTrue + circle;
            play2.innerHTML=player2AfficheFalse;
            afficheDice.innerHTML = tabDice[0];
        }
        else {
            gagnant.innerHTML = "<span class='win'>PLAYER 2 Win</span>";
            afficheGlobal2.textContent = player2.globalScore;
            hold.removeEventListener('click', holder); //fin de partie on efface l'écoute du holder
            joue.removeEventListener('click', goPlay); //fin de partie on efface l'écoute du lancé de dé
            
        }
    }
}

//fonction reset (nouvelle partie) elle permet de réinitialiser les paramètres à 0 pour une nouvelles partie
const reset =()=> {
    player1.globalScore = 0;  //réinitialisation du score global du joueur 1 à 0
    jeton = true;             //le joueur commence en prenant la main (cette main peut être donnée au joueur 2 en cliquant sur HOLD)
    player1.currentScore = 0; //réinitialisation du current score à 0
    player2.globalScore = 0;  //réinitialisation score global player 2
    player2.currentScore = 0; //réinitialisation à 0 du current score
    afficheLance = 0; //lancé de dé à 0

    //affichage dans le DOM de la réinitialisation
    afficheGlobal2.textContent = player2.globalScore; 
    afficheGlobal1.textContent = player1.globalScore;
    numberDice2.textContent = player2.currentScore;
    afficheDice.innerHTML= "";
    numberDice.textContent= player1.currentScore;
    play1.innerHTML=player1AfficheTrue+circle;
    play2.innerHTML=player2AfficheFalse;
    hold.addEventListener('click', holder); //remise en écoute de holder
    joue.addEventListener('click', goPlay)  //remise en écoute du lancé du dé
    gagnant.innerHTML="";

}



joue.addEventListener('click', goPlay); //appel de la fonction goPlay
hold.addEventListener('click',holder);  //appel par click de la fonction holder
nouvellePartie.addEventListener('click',reset); //appel par click de la fonction reset (nouvelle partie)
