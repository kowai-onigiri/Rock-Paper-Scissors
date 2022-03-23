function game() {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    function playGame() {
        const rockBtn = document.querySelector("#rock");
        const paperBtn = document.querySelector("#paper");
        const scissorsBtn = document.querySelector("#scissors");
        const playerOptions = [rockBtn, paperBtn, scissorsBtn];
        const computerOptions = ["rock", "paper", "scissors"];

        playerOptions.forEach(option => {
            option.addEventListener('click', function() {
                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10-moves}`;

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice)

                if(moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            })
        })
    }

    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer) {
            result.textContent = 'Tie'
            result.style.color='white';
        }
        else if(player == 'rock') {
            if(computer == 'paper') {
                result.textContent = 'Computer chose paper. Computer Won.';
                result.style.color='white';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else {
                result.textContent = 'Computer chose scissors. You Won!';
                result.style.color='white';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Computer chose rock. Computer Won.';
                result.style.color='white';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else{
                result.textContent = 'Computer chose paper. You Won!';
                result.style.color='white';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors') {
                result.textContent = 'Computer chose scissors. Computer Won.';
                result.style.color='white';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
            else {
                result.textContent = 'Computer chose rock. You Won!';
                result.style.color='white';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
    function gameOver(playerOptions, movesLeft) {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        });

        chooseMove.innerText = 'Game Over!!';
        movesLeft.style.display = 'none';

        if(playerScore > computerScore) {
            result.style.fontsize = '2rem';
            result.innerText = 'You Won the Game!';
            result.style.color = 'white';
        }

        else if(playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost the Game!';
            result.style.color= 'white';
        }

        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'white';
        }

        reloadBtn.innerText = 'Restart';
        reloadBtn.setAttribute('style', 'display: flex; backgroundColor: #fff');

        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }

    playGame();
}

game();

