let playerScore = 0;
let pcScore = 0;
let playerScore_div = document.getElementById("player-score");
let pcScore_div = document.getElementById("pc-score");
let result_div = document.getElementById("result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");
let reset = document.getElementById("reset");


function getPCChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter){
if(letter === 'r') return "Rock";
if(letter === 'p') return "Paper";
return "Scissors";
}

function win(userChoice, pcChoice){

    playerScore++;
    playerScore_div.innerHTML = playerScore;
    pcScore_div.innerHTML = pcScore;
    result_div.innerHTML = "WIN"
    document.getElementById(userChoice).classList.add('bg-success');
    setTimeout(()=>{document.getElementById(userChoice).classList.remove('bg-success');}, "100")
    result_div.classList.add('bg-success');
    setTimeout(()=>{result_div.classList.remove('bg-success');}, "100")
    declareWinner()
}

function lose(userChoice, pcChoice){
    pcScore++;
    playerScore_div.innerHTML = playerScore;
    pcScore_div.innerHTML = pcScore;
    result_div.innerHTML = "LOST";
    document.getElementById(userChoice).classList.add('bg-danger');
    setTimeout(()=>{document.getElementById(userChoice).classList.remove('bg-danger');}, "100")
    result_div.classList.add('bg-danger');
    setTimeout(()=>{result_div.classList.remove('bg-danger');}, "100")
    declareWinner()
}

function draw(userChoice, pcChoice){
    result_div.innerHTML = "EQUAL";
    document.getElementById(userChoice).classList.add('bg-primary');
    setTimeout(()=>{document.getElementById(userChoice).classList.remove('bg-primary');}, "100")
    result_div.classList.add('bg-primary');
    setTimeout(()=>{result_div.classList.remove('bg-primary');}, "100")
    declareWinner()
}

function game(userChoice){
    const pcChoice = getPCChoice();

    switch(userChoice + pcChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice, userChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, userChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice, userChoice);
        break;
    }
}

function main(){
rock_div.addEventListener('click', function(){
    if (isGameOver()) {
        alert("Game over, click reset button to play again");
        return;
    }
    game('r');
})

paper_div.addEventListener('click', function(){
    if (isGameOver()) {
        alert("Game over, click reset button to play again");
        return;
    }
    game('p');
})

scissors_div.addEventListener('click', function(){
    if (isGameOver()) {
        alert("Game over, click reset button to play again");
        return;
    }
    game('s');
})
}

main();

function refreshPage() {
    playerScore = 0;
    pcScore = 0;
    playerScore_div.innerHTML = playerScore;
    pcScore_div.innerHTML = pcScore;
}

function isGameOver() {
    return playerScore === 5 || pcScore === 5;
  }


  reset.addEventListener('click', refreshPage);