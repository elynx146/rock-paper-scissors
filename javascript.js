
// computer picks random option
// prompt for user option
    //change strings to all lowercase

//if statement to determine winner

//return score +1 for winner

let playerscore
let compscore
let tie
tie = 1

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === "rock"){
        if(computerSelection === "scissors"){
            return (playerscore + 1)
        if(computerSelection === "paper"){
            return (compscore +1)
        }
        if(computerSelection === "rock"){
            return tie
        }
        }
    }
    if (playerSelection === "paper"){
        if(computerSelection === "rock"){
            return (playerscore + 1)
        if(computerSelection === "scissors"){
            return (compscore +1)
        }
        if(computerSelection === "paper"){
            return tie
        }
        }
    }
    if (playerSelection === "scissors"){
        if(computerSelection === "paper"){
            return (playerscore + 1)
        if(computerSelection === "rock"){
            return (compscore +1)
        }
        if(computerSelection === "scissors"){
            return tie
        }
    }
  }
}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  