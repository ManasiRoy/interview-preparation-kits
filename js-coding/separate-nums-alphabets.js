// The output should be; [2, 4, 3, 5, 1, "b", "d", "a", "c", "e"];
const numbersFirstAlphabetsSecond = (arr) => {
  let numbers = [];
  let alphabets = [];
  let finalArr = [];

  numbers = arr.filter((val) => typeof val === "number");
  alphabets = arr.filter((val) => typeof val === "string");
  finalArr = [...numbers, ...alphabets];

  return finalArr;
};

let arr = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];

console.log(numbersFirstAlphabetsSecond(arr));


//if the results need to be maintain sequence then
console.log(arr.sort());



// ================================================================== //
//only print numbers
const item = [2, 4, 3, 5, 1, "b", "d", "a", "c", "e"];

const onlyNumber = (num) => {
  let numbers = [];
  numbers = num.filter((val) => typeof val === "number");
  return numbers
};

let num = [2, "b", 4, "d", 3, "a", "c", "e", 5, 1];

//if need to sorting the number
console.log(onlyNumber(num).sort());
