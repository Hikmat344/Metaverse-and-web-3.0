#! /usr/bin/env node
import inquire from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let title = chalkAnimation.rainbow("Let's do some caculation.");
    await sleep();
    title.stop();
}
async function start() {
    let question = ([
        {
            name: "Operator",
            type: "list",
            message: "Please! select a choice.",
            choices: ['+', '-', '/', '*'],
        },
        {
            name: "first",
            type: "number",
            message: "Please! enter a number",
        },
        {
            name: "second",
            type: "number",
            message: "Please! enter second number",
        }
    ]);
    let answer = await inquire.prompt(question);
    if (answer.Operator == '+') {
        console.log("result:" + answer.first + answer.second);
    }
    else if (answer.Operator == '-') {
        console.log(answer.first - answer.second);
    }
    else if (answer.Operator == '/') {
        console.log("result:" + answer.first / answer.second);
    }
    else if (answer.Operator == '*') {
        console.log("result:" + answer.first * answer.second);
    }
    const again = await inquire.prompt({
        name: "recal",
        message: "Do you want to do another calculation?",
        type: "list",
        choices: ["yes", "no"],
    });
    if (again.recal === "yes") {
        start();
    }
}
await welcome();
start();
