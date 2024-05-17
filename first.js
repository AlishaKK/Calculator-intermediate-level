import inquirer from "inquirer";
export async function userPrompts() {
    return await inquirer.prompt([
        {
            type: "number",
            name: "firstNumber",
            message: "Enter first number?",
            validate: (ans) => {
                if (ans === 0 || ans) {
                    return true; // Accept 0 or any other number
                }
                else {
                    return "Please Enter a number";
                }
            }
        },
        {
            type: "number",
            name: "secondNumber",
            message: "Enter Second number?",
            validate: (ans) => {
                if (ans === 0 || ans) {
                    return true; // Accept 0 or any other number
                }
                else {
                    return "Please Enter a number";
                }
            }
        },
        {
            type: "list",
            name: "Operator",
            choices: ["Addition", "Multiplication", "Division", "Subtraction"]
        }
    ]);
}
