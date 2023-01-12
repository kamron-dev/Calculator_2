// Creating variables
let firstOperator;
let secondOperator;
let firstOperand;
let secondOperand;
let result; 
// let displayValue = '0'




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
// const lowerDisplay = document.querySelector(".lowerDisplay")
const operandBtns = document.querySelectorAll(".operand")
const operatorBtns = document.querySelectorAll(".operator")

const clearBtn = document.querySelector(".helper-clear")
const equalsBtn = document.querySelector(".equalsBtn")
const deleteBtn = document.querySelector(".helper-delete")
const dotBtn = document.querySelector(".helper-dot")

// Buttons populate the display with numbers


operandBtns.forEach(button => {
    button.addEventListener("click", () => { 
       if (result && firstOperator) {
            if(Number(upperDisplay.textContent) === result) upperDisplay.textContent = ''
            // console.log("numbers 2nd option")
            upperDisplay.textContent += button.value
            secondOperand = upperDisplay.textContent
            forDisplay()
       } else if (firstOperand && firstOperator) {
        // console.log("numbers 1st option")
        upperDisplay.textContent += button.value
        secondOperand = upperDisplay.textContent
        forDisplay()

       } else {
        // console.log("numbers 3rd option")
        upperDisplay.textContent += button.value
        forDisplay()

       }
        
        
    })
})

// operator buttons logic 

operatorBtns.forEach(button => {
    button.addEventListener("click", () => {
        if (!firstOperator && !secondOperator && !firstOperand && !secondOperand) {
            firstOperator = button.value
            firstOperand = upperDisplay.textContent
            upperDisplay.textContent = ''
            
        } else if (firstOperator && firstOperand && secondOperand) {
            result = operate(Number(firstOperand), firstOperator, Number(secondOperand));
            upperDisplay.textContent = result;
            firstOperand = result;
            firstOperator = button.value;
            // upperDisplay.textContent = ''

            
        } else if (result && firstOperand) {
            firstOperator = button.value
        }
    })
})

equalsBtn.addEventListener("click", () => {
    showEquals()
})

function showEquals() {
    result = (operate(Number(firstOperand), firstOperator, Number(secondOperand)))
    upperDisplay.textContent = result;
    firstOperand = result;
    firstOperator = null;
    secondOperand = null; 

}

function forDisplay() {
    if (upperDisplay.textContent.length >= 9) {
        upperDisplay.textContent = upperDisplay.textContent.substring(0, 9);
    }
}




// clear button
clearBtn.addEventListener("click", () =>{
    upperDisplay.textContent = ''
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
    
})
// delete button
deleteBtn.addEventListener('click', () => {
    upperDisplay.textContent = upperDisplay.textContent.slice(0, upperDisplay.textContent.length - 1)
})



// console.table(operatorBtns)
// console.log(deleteBtn)