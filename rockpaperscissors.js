/* Rock-Paper-Scissors Game 
*/
const plays = ["rock", "paper", "scissors"];
const playNum = {
	"rock": 0,
	"paper": 2,
	"scissors": 4
};
const playName = {
	0: "rock",
	2: "paper",
	4: "scissors"
}

function nameToNum(name) {
	/* given a name, returns corresponding number
	*/
	return playNum[name];
}

function numToName(num) {
	return playName[num];
}

function computerPlay() {
	/* randomly picks a value for computer selection 
	*/
	let keys = Object.keys(playName);
	compPlay = keys[Math.floor(Math.random()*2)];
	return compPlay;
}

function checkResults(comp, pl) {
	/* returns outcome based on computer and player selection 
	*/
	// compute difference of comp_number and player_number modulo five
	message = '';
    diff_mod = Math.abs((comp - pl) % 5);
    playerChoice = "You: " + numToName(pl);
    computerChoice = "Computer: " + numToName(comp);

    // determine winner, print winner message
    if (diff_mod == 3 || diff_mod == 4) {
        message = "You win! " + numToName(pl) + " beats " + numToName(comp);
    } else if (diff_mod == 1 || diff_mod == 2) {
        message = "Computer wins! " + numToName(comp) + " beats " + numToName(pl);
    } else {
    	message = "Player and computer tie!  You both picked " + numToName(pl);
      }
    return [playerChoice, computerChoice, message];
}

function playRound() {
	/* main logic 
	*/
	playerSelection = '';
	
	// get player selection
	while (!plays.includes(playerSelection)) {
		playerSelection = window.prompt("Enter one of the following:  rock, paper, scissors").toLowerCase();
	}

	// check the outcome and return it
	return checkResults(computerPlay(), nameToNum(playerSelection));
}

function reportResults() {
	outcome = playRound();
	message = document.getElementById('message');
	message.innerHTML = outcome[0] + "<br>" + outcome[1] + "<br><br>" + outcome[2];
}


window.onload = reportResults();
