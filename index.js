const readlineSync = require("readline-sync");
const playerName = readlineSync.question('What is your name?')
console.log(`Hello ${playerName}, welcome to an adventure game`);

while (true) {
let playerChoice = readlineSync.question("Were do you want to go? Store, Kitchen, Basement?");
if (playerChoice === "Store"){
console.log("You go tothe Store and meet you friends.");
}else if (playerChoice === 'Kitchen'){
    console.log("You go to the Kitchen and eat" );
}else if (playerChoice === 'Basement'){
    console.log("You go to the Basement, there is a monster, game over.");
} else{
    console.log("Wrong choice, please choose Store, Kitchen, or Basement");
}
}