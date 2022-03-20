//game play
function playRound(humanPlayer, computerPlayer) {

    if (humanPlayer == computerPlayer) {
        console.log("It's a tie!");
    }

    else if (humanPlayer == "rock") {
        if (computerPlayer == "scissors") {
            console.log("You win!");
        }
        else if (computerPlayer == "paper") {
            console.log("You lose!");
        }
    }

    else if (humanPlayer == "paper") {
        if (computerPlayer == "rock") {
            console.log("You win!");
        }
        else if (computerPlayer == "scissors") {
            console.log("You lose!");
        }
    }

    else if (humanPlayer == "scissors") {
        if (computerPlayer == "paper") {
            console.log("You win!");
        }
        else if (computerPlayer == "rock") {
            console.log("You lose!")
        }
    }
}

// game loop for five turns

function game() {
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

console.log(game());