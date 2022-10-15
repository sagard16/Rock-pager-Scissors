const playerScore = document.getElementById("playerScore");
const playerChoice = document.getElementById("playerChoice");

const computerScore = document.getElementById("computerScore");
const computerChoice = document.getElementById("computerChoice");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors")

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const resultText = document.getElementById("resultText");

const allGameImg = document.querySelectorAll("img");

const selections = {
    Rock: { name: "Rock", defeat: 'Scissors' },
    Paper: { name: 'Paper', defeat: 'Rock' },
    Scissors: { name: 'Scissors', defeat: 'Rock' },
}

let computerSelect = ''
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// update score
function updateScore(playerselect) {
    console.log(playerselect, computerSelect)
    const select = selections[playerselect];
    if (playerselect === computerSelect) {
        resultText.textContent = "it's a tie";
        document.body.style.backgroundColor = 'white'
    }

    else if (select.defeat.indexOf(computerSelect) > -1) {
        resultText.textContent = 'You Won!';
        document.body.style.backgroundColor = 'green';
        playerScoreNumber++
        playerScore.textContent = playerScoreNumber;
    }
    else{
        resultText.textContent = 'You Lost'
        document.body.style.backgroundColor = 'red'
        computerScoreNumber++
        computerScore.textContent = computerScoreNumber;

    }
}

// Random computer choice
function computerRandomSelect() {
    const computerSelectNumber = Math.random();

    if (computerSelectNumber < 0.3) {
        computerSelect = 'Rock';
    }
    else if (computerSelectNumber <= 0.7) {
        computerSelect = 'Paper';
    }
    else {
        computerSelect = 'Scissore'
    }
    displayComputerSelect(computerSelect);
}

// Passing computer selection and styling button
function displayComputerSelect(copmputerSelect) {
    //styling the ComputerSelection
    switch (computerSelect) {
        case 'Rock':
            computerRock.classList.add('selected');
            computerChoice.textContent = '--- Rock';
            break;
        case 'Paper':
            computerPaper.classList.add('selected');
            computerChoice.textContent = '--- Paper';
            break;
        case 'Scissore':
            computerScissors.classList.add('selected');
            computerChoice.textContent = '--- Scissore';
            break;
        default:
            break;
    }
}


// Reset selected
function resetSelected() {
    allGameImg.forEach((img) => {
        img.classList.remove('selected');
    })
}

// player selectione

function select(playerselect) {
    resetSelected();

    //styling the PlayerSelection
    switch (playerselect) {
        case 'Rock':
            playerRock.classList.add('selected');
            playerChoice.textContent = '--- Rock';
            break;
        case 'Paper':
            playerPaper.classList.add('selected');
            playerChoice.textContent = '--- Paper';
            break;
        case 'Scissore':
            playerScissors.classList.add('selected');
            playerChoice.textContent = '--- Scissore';
            break;
        default:
            break;
    }
    computerRandomSelect();
    updateScore(playerselect);
}