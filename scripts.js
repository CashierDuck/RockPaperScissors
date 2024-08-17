let ranChoice = "";

const image = document.querySelector(".comSelection");

const showBulb = document.getElementById("bulbCom");
const showChae = document.getElementById("charCom");
const showSquirt = document.getElementById("squirtCom");

function getComputerChoice() {
    let ranCalc = Math.random();
    
    if (ranCalc > 0 && ranCalc <= 0.33){
        bulbCom.classList.toggle("visible");
        return ranChoice = "bulbasaur";
    } else if (ranCalc > 0.33 && ranCalc <= 0.66){
        charCom.classList.toggle("visible");
        return ranChoice = "charmander";
    } else {
        squirtCom.classList.toggle("visible");
        return ranChoice = "squirtle";
    }
}

const result = document.querySelector(".result");
const resultText = document.createElement("span");


let humanChoice = "";
const btn = document.querySelectorAll("button");

btn.forEach((button) => {
    button.addEventListener("click", () => {

    switch(button.id){
        case "bulbasaur":
            round(getComputerChoice(), "bulbasaur");
            break;

        case "charmander":
            round(getComputerChoice(), "charmander");
            break;

        case "squirtle":
            round(getComputerChoice(), "squirtle");
            break;
    }
    });

});

let humanScore = 0;
let computerScore = 0;

function round(com, hum){


    switch(hum){
        case "bulbasaur": 
            if(com == "bulbasaur"){
                resultText.textContent = "It's a tie!"
            } else if(com == "charmander"){
                resultText.textContent = "Your opponent chose Charmander, you lose!";
                computerScore++;
            } else if(com == "squirtle"){
                resultText.textContent = "Your opponent chose Squirtle, you win!";
                humanScore++;
            } else {
                resultText.textContent = "invalid choice";
            }
            showScore();
            break;
        case "squirtle":
            if(com == "bulbasaur"){
                resultText.textContent = "Your opponent chose Bulbasaur, you lose!";
                computerScore++;
            } else if(com == "charmander"){
                resultText.textContent = "Your opponent chose Charmander, you win!";
                humanScore++;
            } else if(com == "squirtle"){
                resultText.textContent ="It's a tie!";
            } else {
                resultText.textContent = "invalid choice";
            }
            showScore();
            break;
        case "charmander":
            if(com == "bulbasaur"){
                resultText.textContent = "Your opponent chose Bulbasaur, you win!";
                humanScore++;
            } else if(com == "charmander"){
                resultText.textContent = "It's a tie!";
            } else if(com == "squirtle"){
                resultText.textContent = "Your opponent chose Squirtle, you lose!";
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