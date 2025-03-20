/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/
const readline = require('readline-sync');

// Available items for the player
const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;
const hasShield = true;
const hasPotion = false;

// Starting message and first choice
console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice1 = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice1 === "mountains") {
  console.log("You decide to venture into the dark mountains.");
  
  // Check if player has a torch to navigate in the dark
  if (hasTorch) {
    console.log("You safely navigate through the dark mountains with your trusty torch.");

    // Nested choice: encounter a wild bear
    const choice2 = readline.question("You encounter a wild bear. Do you 'fight', 'run', or 'befriend' the bear? ");
    if (choice2 === "fight" && hasSword) {
      console.log("You fight the bear with your sword and manage to defeat it!");
    } else if (choice2 === "fight" && !hasSword) {
      console.log("You try to fight the bear, but you don't have a weapon. The bear overpowers you.");
    } else if (choice2 === "run" && hasCompass) {
      console.log("You use your compass to find a safe path and escape the bear.");
    } else if (choice2 === "run" && !hasCompass) {
      console.log("You run blindly and get lost. The bear catches up to you, but you escape with some injuries.");
    } else if (choice2 === "befriend" && hasPotion) {
      console.log("You offer the bear a potion. It calms down and allows you to pass safely.");
    } else {
      console.log("You try to befriend the bear, but it doesn't trust you. You decide to turn back.");
    }

  } else {
    console.log("It's too dark to proceed without a torch. You decide to turn back.");
  }

} else if (choice1 === "village") {
  console.log("You decide to head towards the village.");

  // Check if the player has a map to navigate the village
  if (hasMap) {
    console.log("You easily find your way through the village using the map.");

    // Nested choice: meet a villager who offers a quest
    const choice2 = readline.question("A villager offers you a quest to find a rare flower in the mountains. Do you 'accept' or 'decline'? ");
    if (choice2 === "accept") {
      console.log("You embark on the quest to find the rare flower.");
      
      // Nested choice: facing a dangerous river on the way
      const choice3 = readline.question("You come across a dangerous river blocking your path. Do you 'swim' or 'build a raft'? ");
      if (choice3 === "swim" && hasShield) {
        console.log("You use your shield to protect yourself while swimming across the river.");
      } else if (choice3 === "swim" && !hasShield) {
        console.log("You swim across the river, but the current is strong, and you barely make it to the other side.");
      } else if (choice3 === "build a raft") {
        console.log("You gather materials and successfully build a raft to cross the river.");
      } else {
        console.log("You stand there unsure of what to do, and the quest is abandoned.");
      }
    } else {
      console.log("You decline the quest and decide to relax in the village. The village is peaceful, but you wonder what you might have missed.");
    }

  } else {
    console.log("Without a map, you get lost in the village and wander aimlessly, eventually leaving without exploring much.");
  }

} else {
  console.log("You don't make a decision and wander off into the unknown.");
}
