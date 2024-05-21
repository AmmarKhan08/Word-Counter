#! /usr/bin/env node

// This line is called a Shebang, it tells the operating system to run it with node.js

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.magentaBright.bold("\n \tWelcome To Project with Ammar - Words Counter\n"));

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers: {
    sentence: string
} = await inquirer.prompt([
  {
   name: "sentence",
   type: "input",
   message: chalk.cyanBright.bold("Enter your sentence to count the words:") 
  }
 ]
);

const words = answers.sentence.trim().split(" ")

// Print the array of words to the console
console.log(words);

//Print the word count of the sentence to the console

console.log(chalk.yellowBright.bold`\n Your sentence of Word Count is ${words.length}`);