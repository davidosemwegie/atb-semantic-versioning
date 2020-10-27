/**
 * Author: David Osemwegie
 * Date: October 26th 2020
 */


//Imports
const inquirer = require('inquirer');
const chalk = require('chalk');

/**
 * The determinePrecedence is located at ./src/determinePrecedence
 */
const { determinePrecedence } = require('./src/determinePrecedence')

inquirer
    .prompt([
        {
            input: "input",
            name: "first_number",
            message: "What what is the first semantic number you want to compare?"
        },
        {
            input: "input",
            name: "second_number",
            message: "What what is the second semantic number you want to compare?"
        },
    ])
    .then(answers => {
        const { first_number, second_number } = answers

        const res = determinePrecedence(first_number, second_number)
        console.log("Response Code: ", res)
        let message = ""

        switch (res) {
            case 1:
                message = `${first_number} takes precedent over ${second_number}`
                break
            case 0:
                message = `${first_number} does not take precedent over ${second_number}`
                break
            case -1:
                message = `Both numbers are the same. There is no precedent.`
                break
            default:
                break
        }

        console.log(message)
    })
    .catch(error => {
        console.log(chalk.red.bold(error))
        console.log(chalk.blue.bold("Please restart the program"))
    });

