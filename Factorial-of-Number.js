function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}

const result = factorial(5);
console.log(result); // Outputs: 120
