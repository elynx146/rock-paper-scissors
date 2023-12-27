
// computer picks random option
// prompt for user option
    //change strings to all lowercase

//if statement to determine winner

//return score +1 for winner

let playerscore;
let compscore;
let gamenum;
gamenum = 5;
playerscore = 0
compscore = 0

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"){
        if(computerSelection === "scissors"){
            return (playerscore + 1);
        }
        if(computerSelection === "paper"){
            //return (compscore +1);
            return (playerscore - 1);
        }
        if(computerSelection === "rock"){
            return 0;
        }
    }
    if (playerSelection === "paper"){
        if(computerSelection === "rock"){
            return (playerscore + 1);
        }
        if(computerSelection === "scissors"){
            //return (compscore +1);
            return (playerscore + 1);
        }
        if(computerSelection === "paper"){
            return 0;
        }
    }
    if (playerSelection === "scissors"){
        if(computerSelection === "paper"){
            return (playerscore + 1);
        }
        if(computerSelection === "rock"){
            //return (compscore +1);
            return (playerscore + 1);
        }
        if(computerSelection === "scissors"){
            return 0;
        }
    }
    console.log("error")
    return(0)
}

let compChoice

function getComputerChoice() {
    //pick random number between 1 & 3
    compChoice = Math.floor(Math.random() * 3) + 1;
    console.log(compChoice);
    let compOut;
    if(compChoice === 1){
        compOut = "rock";
        return compOut;
    }
    if(compChoice === 2){
        compOut = "paper";
        return compOut;
    }
    if(compChoice === 3){
        compOut = "scissors";
        return compOut;
    }
    else{
        console.log("ERROR");
    }
}

//const playerSelection = prompt("rock, paper, scissors?:");
//const computerSelection = getComputerChoice();
//console.log(computerSelection)
//console.log(playRound(playerSelection, computerSelection));
let finalscore;
finalscore = 0

function game(){
while(gamenum > 0){
    let playerSelection = prompt("rock, paper, scissors?:");
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection,computerSelection);
    if(result === 0){
        gamenum = gamenum;
    }
    else{
        gamenum = gamenum - 1;
    }
    finalscore = result + finalscore;
    if(finalscore === 3){
        gamenum = 0
    }
    if(finalscore === -3){
        gamenum = 0
    }
}
if(finalscore < 3){
    console.log("lose")
    console.log(finalscore)
    return ("The Player Lost");
}
else{
    console.log("win")
    console.log(finalscore)
    return ("The Player Won");
}
}

game()
