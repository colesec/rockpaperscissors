function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    if (number == 0){
        return "scissors";
    }
    else if (number == 1){
        return "paper";
    }
    else {
        return "rock";
    }
}

function getHumanChoice(){
    let choice = prompt("What is your choice?!?").toLowerCase();
    return choice;
}

function playGame(){
    function playRound(){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if (computerChoice == "rock"){
            if (humanChoice == "scissors"){
                computerScore++;
                console.log("You lose! Rock beats Scissors");
            }
            else if (humanChoice == "paper"){
                humanScore++;
                console.log("You win! Paper beats Rock");
            }
            else if (humanChoice == "rock"){
                console.log("Nobody wins!");
            }
        }
        else if (computerChoice == "scissors"){
            if (humanChoice == "paper"){
                computerScore++;
                console.log("You lose! Scissors beats Paper");
            }
            else if (humanChoice == "rock"){
                humanScore++;
                console.log("You win! Rock beats Scissors");
            }
            else if (humanChoice == "scissors"){
                console.log("Nobody wins!");
            }
        }
        else if (computerChoice == "paper"){
            if (humanChoice == "rock"){
                computerScore++;
                console.log("You lose! Paper beats Rock");
            }
            else if (humanChoice == "scissors"){
                humanScore++;
                console.log("You win! Scissors beats Paper");
            }
            else if (humanChoice == "paper"){
                console.log("Nobody wins!");
            }
        }
    }
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    console.log(humanScore, computerScore);
}

humanScore = 0;
computerScore = 0;

playGame();