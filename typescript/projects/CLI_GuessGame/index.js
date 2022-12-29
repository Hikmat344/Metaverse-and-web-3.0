#! /usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
var computerscore = 0;
var userscore = 0;
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let title = chalkAnimation.rainbow("Let's start game...");
    await sleep();
    title.stop();
}
await welcome();
async function main() {
    // async function userInput() 
    // {
    //     let userres=({
    //         name: "uernumber",
    //         type: "input",
    //         message: "guess a number in between 1-10: "
    //     })
    // }
    let user = await inquirer.prompt({
        name: "uernumber",
        type: "input",
        message: "guess a number in between 1-10: "
    });
    let a = Math.random() * 10;
    let b = Math.floor(a);
    const userInput = user.uernumber;
    const computer = b;
    console.log(chalk.red("Your Guessed Number: " + userInput));
    console.log(chalk.green("Computer Number: " + computer));
    if (userInput === computer) {
        userscore++;
    }
    else
        computerscore++;
    console.log(chalk.bgRed("User Score: " + userscore));
    console.log(chalk.bgGreen("Computer Score: " + computerscore));
    let again = await inquirer.prompt({
        name: "againinput",
        type: "list",
        message: "Do you want to guess again? ",
        choices: ['yes', 'no']
    });
    if (again.againinput == 'yes') {
        await main();
    }
}
await main();
