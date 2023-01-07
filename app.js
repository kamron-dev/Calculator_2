// Creating variables
let firstOperator;
let secondOperator;
let firtsOperand;
let secondOperand;
let result; 

// Creating operator functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2; 
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2; 

// Creating the operate function to handle the operations 

const operate = (num1, operator, num2) => {
    switch (operator) {
        case "+":
            return add(num1, num2)
            
        case "-":
            return subtract(num1, num2)
            
        case "*":
            return multiply(num1, num2)
            
        case "÷":
            return divide(num1, num2)
            
        default:
            return null;              
    }
}

// Dom elements

const upperDisplay = document.querySelector(".upperDisplay")
const lowerDisplay = document.querySelector(".lowerDisplay")
const operandBtns = document.querySelectorAll(".operand")
const operatorBtns = document.querySelectorAll(".operator")

const clearBtn = document.querySelector(".helper-clear")
const equalsBtn = document.querySelector(".equalsBtn")
const deleteBtn = document.querySelector(".helper-delete")
const dotBtn = document.querySelector(".helper-dot")

// Buttons populate the lower display

operandBtns.forEach(button => {
    button.addEventListener("click", () =>{
        lowerDisplay.textContent += button.value
    })
})

// clear button

clearBtn.addEventListener("click", () =>{
    lowerDisplay.textContent = ''
})





// console.table(operatorBtns)
// console.log(deleteBtn)