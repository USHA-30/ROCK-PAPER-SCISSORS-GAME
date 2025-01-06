let userScore=0;
let compScore=0;
const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const generateComp = () => {
        //select rock or papaer or scissors randomly
        const options=["rock","paper","scissors"];
       const randomIdx = Math.floor(Math.random( )*3); 
       return options[randomIdx]; 
};


const drawGame = () =>{
    msg.innerText = "It's a draw ,Play Again";
    msg.style.backgroundColor = "grey";
    msg.style.color="black";
};


const showWinner = (userWin, userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`Congratulations !!! You Won The Game,your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `Oopss!!! You Lost The Game, ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};


const playGame = ( userChoice) =>{
    console.log("userchoice = " ,userChoice);
    //generate computer choice
    const compChoice = generateComp( );
    console.log(compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{

         let userWin= true;
         if(userChoice === "rock"){
            //computer choice : scissors,paper
            userWin= compChoice === "paper" ? false : true;
         }
         else if(userChoice === "paper"){
            //computer choice : rock,scissors
            userWin = compChoice === "scissors" ? false : true;
         } 
         else if (userChoice === "scissors"){
            //computer choice :rock,paper
            userWin = compChoice === "rock" ? false :true;
         }  

         showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
    
});