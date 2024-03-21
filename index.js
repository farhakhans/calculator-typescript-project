#!/user/bin/env node
// import inquirer from "inquirer";
// const answar =await inquirer.prompt([
//   { massage: "Enter First Nmuber", type: "number", name: "Firstnumber" },
//   { massage: "Enter Second number", type: "number", name: "Secondnumber" },
//   {
//    massage: "select one of the Operators to perform action",
//     type: "list",
//     name: "operator",
//     choices: ["addition", "substraction", "multipilication", "division"]
//   },
// ]);
// //  conditional statement
// if(answar.operator ==="addition"){
//     console.log( answar.Firstnumber + answar.Secondnumber);
// }
// if(answar.operator ==="substraction"){
//     console.log( answar.Firstnumber - answar.Secondnumber);
// }
// if(answar.operator ==="multipilication"){
//     console.log( answar.Firstnumber * answar.Secondnumber);
// }
// if(answar.operator ==="division"){
//     console.log( answar.Firstnumber / answar.Secondnumber);
// }
// Define a function to perform arithmetic operations
function clac(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            }
            else {
                throw new Error('Division by zero is not allowed');
            }
        default:
            throw new Error('Invalid operator');
    }
}
export {};
