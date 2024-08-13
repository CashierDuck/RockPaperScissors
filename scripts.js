let ranChoice = "";

function getComputerChoice() {
    let ranCalc = Math.random();
    
    if (ranCalc > 0 && ranCalc <= 0.33){
        return ranChoice = "rock";
    } else if (ranCalc > 0.33 && ranCalc <= 0.66){
        return ranChoice = "paper";
    } else {
        return ranChoice = "scissors";
    }
}

let humanChoice = "";
function getHumanChoice(){
    humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function round(com, hum){
    switch(humanChoice){
        case "rock": 
            if(com == "rock"){
                console.log("Its a tie!")
            } else if(com == "paper"){
                console.log("Paper beats rock, you lose!")
            } else if(com == "Scissors"){
                console.log("Rock beats scissors, you win!")
            } else {
                console.log("invalid choice")
            }
            break;
        case "scissors":
            if(com == "rock"){
                console.log("Rock beats scissors, you lose!")
            } else if(com == "paper"){
                console.log("Scisscors beats paper, you win!")
            } else if(com == "Scissors"){
                console.log("It's a tie!")
            } else {
                console.log("invalid choice")
            }
            break;
        case "paper":
            if(com == "rock"){
                console.log("Paper beats rock, you win!")
            } else if(com == "paper"){
                console.log("It's a tie!")
            } else if(com == "Scissors"){
                console.log("Scissors beats paper, you lose!")
            } else {
                console.log("invalid choice")
            }
            break;
        default:
            console.log("invalid choice")
    }

}

function playGame(){
    for(let i = 0; i <=5; i++){
        round(getComputerChoice(), getHumanChoice());
    }
    if(humanScore < computerScore){
        alert("A W for the humans!");
    } else {
        alert("The Computer Wins!");
    }
}

playGame();