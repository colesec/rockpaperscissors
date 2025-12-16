function getComputerChoice(){
  let number = Math.floor(Math.random()*3);
  
  switch (number) {
    case 0: return "scissors";
    case 1: return "paper";
    case 2: return "rock"
  }
}

function updateScore(){
  scoreDiv.innerText = `You: ${humanScore} Computer: ${computerScore}`;
}

function playRound(humanChoice){
  if(humanScore == 5 || computerScore == 5){
    (humanScore>computerScore)
    ? statusDiv.innerText = "You won the game!"
    : statusDiv.innerText = "Computer won the game! Yes!";
    return 0;
  }

  let computerChoice = getComputerChoice();

  if (computerChoice == "rock"){
    if (humanChoice == "scissors"){
      computerScore++;
      statusDiv.innerText = `Round ${round}: \nYou lose! Rock beats Scissors`;
    }
    else if (humanChoice == "paper"){
      humanScore++;
      statusDiv.innerText = `Round ${round}: \nYou win! Paper beats Rock`;
    }
    else if (humanChoice == "rock"){
      statusDiv.innerText = `Round ${round}: \nNobody wins!`;
    }
  }
  else if (computerChoice == "scissors"){
    if (humanChoice == "paper"){
      computerScore++;
      statusDiv.innerText = `Round ${round}: \nYou lose! Scissors beats Paper`;
    }
    else if (humanChoice == "rock"){
      humanScore++;
      statusDiv.innerText = `Round ${round}: \nYou win! Rock beats Scissors`;
    }
    else if (humanChoice == "scissors"){
      statusDiv.innerText = `Round ${round}: \nNobody wins!`;
    }
  }
  else if (computerChoice == "paper"){
    if (humanChoice == "rock"){
      computerScore++;
      statusDiv.innerText = `Round ${round}: \nYou lose! Paper beats Rock`;
    }
    else if (humanChoice == "scissors"){
      humanScore++;
      statusDiv.innerText = `Round ${round}: \nYou win! Scissors beats Paper`;
    }
    else if (humanChoice == "paper"){
      statusDiv.innerText = `Round ${round}: \nNobody wins!`;
    }
  }

  updateScore();

  round++;
}

let humanScore = 0;
let computerScore = 0;
let round = 1;

const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper");
const rockBtn = document.querySelector("#rock");

const scoreDiv = document.createElement("div");
const statusDiv = document.createElement("div");

scoreDiv.style.paddingBottom = "10px";

scissorsBtn.addEventListener("click", () => playRound("scissors"));
paperBtn.addEventListener("click", () => playRound("paper"));
rockBtn.addEventListener("click", () => playRound("rock"));

document.body.appendChild(scoreDiv);
document.body.appendChild(statusDiv);

updateScore();