//game play
function playRound(humanPlayer, computerPlayer) {

    if (humanPlayer == computerPlayer) {
        alert("It's a tie!");
    }

    else if (humanPlayer == "rock") {
        if (computerPlayer == "scissors") {
            alert("You win!");
        }
        else if (computerPlayer == "paper") {
            alert("You lose!");
        }
    }

    else if (humanPlayer == "paper") {
        if (computerPlayer == "rock") {
            alert("You win!");
        }
        else if (computerPlayer == "scissors") {
            alert("You lose!");
        }
    }

    else if (humanPlayer == "scissors") {
        if (computerPlayer == "paper") {
            alert("You win!");
        }
        else if (computerPlayer == "rock") {
            alert("You lose!")
        }
    }
}

// game loop for five turns

function loopGame() {
    for (i = 0; i < 5; i++) {

        //computer choice
        const computerRand = Math.floor(Math.random()*3)+1;

        function computerChoice(computerRand) {
            if (computerRand == 1) {
                return "rock";
            }
            else if (computerRand == 2) {
                return "paper";
            }
            else {
                return "scissors";
            }
        }

        const computerPlayer = computerChoice(computerRand);
        
        // human choice
        const humanPlayer = prompt("Choose rock, paper, or scissors and write it below:");

        //call gameplay
        console.log(playRound(humanPlayer, computerPlayer));
    }
}

console.log(loopGame());