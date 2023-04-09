import inquirer from "inquirer";
import chalk from 'chalk';
import operations from "./operation/index.js";
const input = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter Number 1:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter Number 2:"
    },
    {
        name: "operation",
        type: "list",
        message: "Choose Operation Name:",
        choices: ["add", "sub", "mul", "divide"]
    }
]);
const operation = input.operation;
const answer = operations[operation](input.num1, input.num2);
console.log(chalk.bgGreen('Here is your answer: ') + ' ' + chalk.bold(answer));
