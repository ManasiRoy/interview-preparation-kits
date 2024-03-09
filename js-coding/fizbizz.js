function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Check if the number is divisible by both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Check if the number is divisible by 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Check if the number is divisible by 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // If the number is not divisible by 3 or 5, print the number
    else {
      console.log(i);
    }
  }
}

// Test the function with n = 15
fizzBuzz(15);
