#! /user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import gradient from "gradient-string";
import { type } from "os";
import { exit } from "process";


const sleep = ()=>
{
    return new Promise((res) => {
        setTimeout(res,2000);
        
    })
}
async function welcome()
{
    let title = chalkAnimation.rainbow("Welcome to HBL ATM");
    await sleep();
    title.stop();
    
}
await welcome();

    let users = [ 
        {
         name: "hikmat" ,
         password : 123,
         balance: 1000,
        } , 
        {
        name: "sajjad" ,
        password : 123,
        balance: 2000
        } , 
        {
        name: "rafi" , 
        password:123,
        balance: 3000
        }
];


async function login()
{
    
let info = await inquirer.prompt([
{
    name: "username",
    type: "input",
    message: "Please Enter username: "
},
{
    name: "password",
    type: "input",
    message: "Please Enter your Password: "
}
]);

let index = users.findIndex( (obj)=>obj.name == info.username)  //this will return us the index incase of input username exist in regusers otherwise it will return -1
//console.log(index);
let passCheck = info.password == users[index].password;     //this will return us boolean value true/false
if(passCheck)
{
    mainMenu();
    
}
else
{
    console.log("Invalid username or password ");
    login();
}

async function mainMenu()
{
   let Menu = await inquirer.prompt({
        name: "menu",
        type: "list",
        message: "Please! select one of them:",
        choices: ["withdrawl" , "BalanceCheck" , "Deposit" ]
    });
    // console.log(Menu.menu);
    if(Menu.menu == "BalanceCheck")
    {
        console.log("your Balance: " + users[index].balance);
        repeat();
    }
    else if(Menu.menu == "withdrawl")
    {
         withdrawl();
    }
    else if(Menu.menu == "Deposit")
    {
        Deposit();
    }

}
//----------------- withdrawl function
async function withdrawl()
{
    let num = await inquirer.prompt({
        name: "amount",
        type: "number",
        message: "please! enter amount: "
    })
    if(num.amount > users[index].balance)
    {
        console.log(chalk.red("OOps! You don't have sufficient balance."));
        console.log("Your current balance is : " + users[index].balance);
    }
    else
    {
        users[index].balance = users[index].balance - num.amount;
        console.log("Your remaining balance is: " + users[index].balance);
    }
    
    repeat();
}
//----------------deposit function
async function Deposit()
{
    let num = await inquirer.prompt({
        name: "amount",
        type: "number",
        message: "please! enter amount: "
    })
    
    users[index].balance = users[index].balance + num.amount;
    console.log("Your remaining balance: " + users[index].balance);
    repeat();
}
//--------------------again function
async function repeat()
{
    let Again = await inquirer.prompt({
        name: "again",
        type:"list",
        message: "Do you want another Transection?",
        choices: ["yes" , "no"]
    })
    if(Again.again == "yes")
    {
        mainMenu();
    }
    else if(Again.again == "no")
    {
        console.log(chalk.bgBlue("Thanks for using Banking! "))
        exit();
    }
}

}

login();
