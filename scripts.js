let ranChoice = "";

const image = document.querySelector(".comSelection");

const showBulb = document.getElementById("bulbCom");
const showChar = document.getElementById("charCom");
const showSquirt = document.getElementById("squirtCom");

function hideImages(){
    showBulb.classList.remove("visible");
    showChar.classList.remove("visible");
    showSquirt.classList.remove("visible");
}

function getComputerChoice() {
    hideImages()
    let ranCalc = Math.random();
    
    if (ranCalc > 0 && ranCalc <= 0.33){
        bulbCom.classList.add("visible");
        return ranChoice = "bulbasaur";
    } else if (ranCalc > 0.33 && ranCalc <= 0.66){
        charCom.classList.add("visible");
        return ranChoice = "charmander";
    } else {
        squirtCom.classList.add("visible");
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

const score = document.querySelector(".score");
const scoreText = document.createElement("span");

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
            break;
        default:
           resultText.textContent = "invalid choice hoe";

    }
    console.log(resultText);
    result.appendChild(resultText);

    scoreText.textContent = `Trainer: ${humanScore} | Rival: ${computerScore}`;
    score.appendChild(scoreText);

}



// switch selector