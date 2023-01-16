/* A function that selects a weapon randomly
for the computer */
function getComputerChoice()
{
    let result = ""; //empty string
    const choices = ["Rock", "Paper", "Scissors"]; //all possible options
    
    let num = Math.floor(Math.random() * 3); //will result in number 0 - 3
    
    result += choices[num]; //to result variable add the string that is indexed to choices array
    return result; //return whatever is held in that result variable
}

/* A function for the player to select their weapon
and standardize their input to avoid errors
*/
function yourTurn()
{
   let choice = prompt("Pick Rock, Paper, or Scissors: ").toLowerCase(); //make everything lowercase
   let firstLetter = choice.at(0).toUpperCase(); //extract first letter and capitalize it
   let generalChoice = firstLetter + choice.slice(1,choice.length); //define new string to combine first letter and the rest of the string (not including the first letter)
   return generalChoice;

}

/* function overload - parameters */
function playRound(playerSelection, computerSelection)
{
    //outcomes
    let tie = "Its a tie!";
    let win = "You Win!";
    let lose = "You Lose!";

    //Standardization of input
    playerSelection = playerSelection.toLowerCase();
    //validate input
    if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors")
    {
        let first = playerSelection.at(0).toUpperCase();
        let selection = first + playerSelection.slice(1, playerSelection.length);
        playerSelection = selection;
    
        //possibilities
        // rock ties with rock
        if (playerSelection == "Rock" && computerSelection == "Rock")
        {
            return tie;
        }
        // rock beats scissors
        if (playerSelection == "Rock" && computerSelection == "Scissors")
        {
            return win;
        }
        // rock loses to paper
        if (playerSelection == "Rock" && computerSelection == "Paper")
        {
            return lose;
        }

        // paper ties with paper
        if (playerSelection == "Paper" && computerSelection == "Paper")
        {
            return tie;
        }
        // paper beats rock
        if (playerSelection == "Paper" && computerSelection == "Rock")
        {
            return win;
        }   
        // paper loses to scissors
        if (playerSelection == "Paper" && computerSelection == "Scissors")
        {
            return lose;
        }

        // scissors ties with scissors
        if (playerSelection == "Scissors" && computerSelection == "Scissors")
        {
            return tie;
        }
        // scissors beats paper
        if (playerSelection == "Scissors" && computerSelection == "Paper")
        {
            return win;
        }
        // scissors loses to rock
        if (playerSelection == "Scissors" && computerSelection == "Rock")
        {
            return lose;
        }
    }
    else
    {
        return "Invalid Input!";
    }
}

function game()
{
    //outcomes
    let tie = "Its a tie!";
    let win = "You Win!";
    let lose = "You Lose!";
    //trackers
    let wins = 0;
    let loses = 0;
    let ties = 0;
    
    for(let i = 0; i < 5; i++)
    {
        let chosen = prompt("Rock, Paper, Scissors?");
        computerSelection = getComputerChoice();
        console.log(playRound(chosen, computerSelection));
        //tracking each outcome
        if (playRound(chosen, computerSelection) == tie) {ties += 1;}
        else if (playRound(chosen, computerSelection) == win) {wins += 1;}
        else if (playRound(chosen, computerSelection) == lose) {loses += 1;}
        
        
    }

    console.log("game stats\n----------");
    console.log("Wins:", wins);
    console.log("Loses:", loses);
    console.log("Ties:", ties);

}