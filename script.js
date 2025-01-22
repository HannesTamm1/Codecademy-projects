// Function to get user choice
const getUserChoice = (userInput) => {
    // Making the input all lower case
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    } else {
      console.log("Invalid choice!");
      return undefined;
    }
  };
  
  //randomly generates a number, by what switch statements chooses what should the computer use to beat user
  function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'Invalid';
    }
  }
  
  //Makes a choice between two players, who's going to win
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    } else if (userChoice === 'bomb') {
      return 'User won by cheating';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      return `Computer won with ${computerChoice}`;
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      return `Computer won with ${computerChoice}`;
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      return `Computer won with ${computerChoice}`;
    } else {
      return `User won with ${userChoice}`;
    }
  }
  
  //Takes outputs, and prints them out
  function playGame(){
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  //Call function to start the game
  playGame();
  