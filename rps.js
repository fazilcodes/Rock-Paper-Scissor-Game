const totalScores = {computerScore: 0, playerScore: 0}


const getComputerChoice = () => {
    choice = ['Rock', 'Paper', 'Scissors'];
    compchoice = Math.floor(Math.random() * choice.length)
    return choice[compchoice]
}

const getResult = (playerChoice, computerChoice) => {
    let score;

    if (playerChoice == computerChoice) {
        score = 0
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    }
    else {
        score = -1
    }

    return score
}

const showResult = (score, playerChoice, computerChoice) => {
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
    
    if (score == -1) {
        resultDiv.innerText = 'you Lost'
    }
    else if (score == 0) {
        resultDiv.innerText = 'its a Tie'
    }
    else {
        resultDiv.innerText = 'You Won!'
    }

    handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
    playerScoreDiv.innerText = `your Score: ${totalScores['playerScore']}`
}


const onclickRPS = (playerChoice) => {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice, computerChoice)
    totalScores['playerScore'] += score
    showResult(score, playerChoice, computerChoice)
}


function playGame() {
    rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)

    rpsButtons.forEach(button => {
        button.onclick = () => onclickRPS(button.value)
    })

    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScores)
}

const endGame = () => {
    totalScores['playerScore'] = 0
    totalScores['computerScore'] = 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
}

playGame()
