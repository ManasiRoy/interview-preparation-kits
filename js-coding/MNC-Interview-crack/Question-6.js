// Given a string s of '(', ')' and lowercase English characters.
//  Your task is to remove the minimum number of parentheses('(' or ')',
// in any positions) so that the resulting parentheses string is valid and
// return any valid string




function minRemoveToMakeValid(s) {
    let stack = [];
    let chars = s.split("");

    // Step 1: Mark invalid parentheses
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === "(") {
            stack.push(i);
        } else if (chars[i] === ")") {
            if (stack.length) {
                stack.pop(); // Match found, remove from stack
            } else {
                chars[i] = ""; // Mark as invalid
            }
        }
    }

    // Step 2: Remove unmatched '('
    while (stack.length) {
        chars[stack.pop()] = "";
    }

    // Step 3: Build and return valid string
    return chars.join("");
}

// Example usage:
console.log(minRemoveToMakeValid("lee(t(c)o)de)"));  // Output: "lee(t(c)o)de"
console.log(minRemoveToMakeValid("a)b(c)d"));        // Output: "ab(c)d"
console.log(minRemoveToMakeValid("))(("));          // Output: ""
