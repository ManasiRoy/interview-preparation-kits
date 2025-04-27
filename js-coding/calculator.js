function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Cannot divide by zero';
            }
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

const result = calculator(5, '*', 3);
console.log(result); // Outputs: 15