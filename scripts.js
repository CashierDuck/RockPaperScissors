let ranChoice = "";

const image = document.querySelector(".comSelection");

const showRock = document.getElementById("rockCom");
const showPaper = document.getElementById("paperCom");
const showScissors = document.getElementById("scissorsCom");

function getComputerChoice() {
    let ranCalc = Math.random();
    
    if (ranCalc > 0 && ranCalc <= 0.33){
        rockCom.classList.toggle("visible");
        return ranChoice = "rock";
    } else if (ranCalc > 0.33 && ranCalc <= 0.66){
        paperCom.classList.toggle("visible");
        return ranChoice = "paper";
    } else {
        scissorsCom.classList.toggle("visible");
        return ranChoice = "scissors";
    }
}

const result = document.querySelector(".result");
const resultText = document.createElement("span");


let humanChoice = "";
const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener("click", () => {

    switch(button.id){
        case "rock":
            round(getComputerChoice(), "rock");
            break;

        case "paper":
            round(getComputerChoice(), "paper");
            break;

        case "scissors":
            round(getComputerChoice(), "scissors");
            break;
    }
    });

});

let humanScore = 0;
let computerScore = 0;

function round(com, hum){


    switch(hum){
        case "rock": 
            if(com == "rock"){
                resultText.textContent = "It's a tie!"
                
            } else if(com == "paper"){
                resultText.textContent = "Paper beats rock, you lose!";
                computerScore++;
            } else if(com == "scissors"){
                resultText.textContent = "Rock beats scissors, you win!";
                humanScore++;
            } else {
                resultText.textContent = "invalid choice";
            }
            showScore();
            break;
        case "scissors":
            if(com == "rock"){
                resultText.textContent = "Rock beats scissors, you lose!";
                computerScore++;
            } else if(com == "paper"){
                resultText.textContent = "Scissors beats paper, you win!";
                humanScore++;
            } else if(com == "scissors"){
                resultText.textContent ="It's a tie!";
            } else {
                resultText.textContent = "invalid choice";
            }
            showScore();
            break;
        case "paper":
            if(com == "rock"){
                resultText.textContent = "Paper beats rock, you win!";
                humanScore++;
            } else if(com == "paper"){
                resultText.textContent = "It's a tie!";
            } else if(com == "scissors"){
                resultText.textContent = "Scissors beats paper, you lose!";
                computerScore++;
            } else {
                resultText.textContent = "invalid choice";
            }
            showScore();
            break;
        default:
           resultText.textContent = "invalid choice hoe";

    }
    console.log(resultText);
    result.appendChild(resultText);
}

function showScore(){
    console.log("Human: " + humanScore + " | Computer: "+ computerScore);
}

function playGame(){
    for(let i = 0; i < 5; i++){
        round(getComputerChoice(), getHumanChoice());
    }
    if(humanScore > computerScore){
        console.log("A W for the humans!");
        showScore();
    } else if (humanScore < computerScore){
       console.log("The Computer Wins!");
       showScore();
    } else {
        console.log("It's a tie!");
        showScore();
        
    }
}


// switch selector