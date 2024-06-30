#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("=".repeat);
console.log(chalk.yellow.italic("\tWellcome to 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓕𝓪𝓱𝓪𝓭 𝓬𝓸𝓭𝓮𝓻  - Number Guessing Game\n"));
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.green("Enter Your Guessed Number(Number Limit from 1 to 5")
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! You Guess Correct Number. ");
}
else {
    console.log("Sorry, You Guess a Wrong Number.");
}
