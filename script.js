// rock

function choiceRock (computerPlayer) {
    if (computerPlayer == "rock") {
        alert("You tie!");
    }
    else if (computerPlayer == "scissors") {
        alert("You win!");
    }
    else if (computerPlayer == "paper") {
        alert("You lose!");
    }
}


function playRock () {

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

    console.log(choiceRock(computerPlayer));

        

}

const rock = document.querySelector('#rock');
rock.addEventListener('click', playRock);

// paper

function choicePaper (computerPlayer) {
    if (computerPlayer == "paper") {
        alert("You tie!");
    }
    else if (computerPlayer == "rock") {
        alert("You win!");
    }
    else if (computerPlayer == "scissors") {
        alert("You lose!");
    }
}


function playPaper () {

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

    console.log(choicePaper(computerPlayer));

        

}

const paper = document.querySelector('#paper');
paper.addEventListener('click', playPaper);



// scissors

function choiceScissors (computerPlayer) {
    if (computerPlayer == "scissors") {
        alert("You tie!");
    }
    else if (computerPlayer == "paper") {
        alert("You win!");
    }
    else if (computerPlayer == "rock") {
        alert("You lose!");
    }
}


function playScissors () {

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

    console.log(choiceScissors(computerPlayer));


}

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', playScissors);
