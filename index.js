#! /usr/bin/env node
import { userPrompts } from "./first.js";
import { add } from "./addition.js";
import { multi } from "./multiplication.js";
async function calculator() {
    const answer = await userPrompts();
    if (answer.Operator === "Addition") {
        console.log(add(answer.firstNumber, answer.secondNumber));
    }
    else if (answer.Operator === "Multiplication") {
        console.log(multi(answer.firstNumber, answer.secondNumber));
    }
    else if (answer.Operator === "Division") {
        if (answer.secondNumber === 0) {
            console.log("Error: Division by zero");
        }
        else {
            console.log(answer.firstNumber / answer.secondNumber);
        }
    }
    else if (answer.Operator === "Subtraction") {
        console.log(answer.firstNumber - answer.secondNumber);
    }
    else {
        console.log("Invalid Input");
    }
}
calculator();
