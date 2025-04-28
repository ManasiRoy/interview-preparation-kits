// 1. Loop
// 2. Reverse the letters / words
// 3. Largest Num
// 4. Second Largest Num
// 5. Odd Numbers from Array
// 6. Even Numbers from Array
// 7. Total Sum with Odd / Even Numbers 
// 8. Normal add / minus 
// 9. find and print all numbers greater than 50 from Array
// 10.Write a function to count how many numbers are even in an array.
// 11.Vowels and count the number of vowels within words.





//Solution 3.
function LargestNum(arr){
    let largest = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest;
}

let arr = [23, 45, 63, 10, 99]

console.log(LargestNum(arr))

//Solution 4.
/*==============*/
function SecondLargestNum(arr){
    let largest = arr[0];
    let SecondLargest = -Infinity;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            SecondLargest = largest;
            largest = arr[i];
            
        }else if(arr[i] > SecondLargest && arr[i] != largest){
            console.log(arr[i])
        }
    }
    return SecondLargest;
}

let arr = [23, 45, 63, 10, 99]

console.log(SecondLargestNum(arr))

//Solution 11
/*==================*/
function CheckingVowels(str){
  let vowels = "AEIOUaeiou";
  let count = 0;
  let showVowel = [];
  
  for(let item of str){
    vowels.includes(item) ? (count++, showVowel.push(item)) : count;
  }
  console.log({count, showVowel});
}
CheckingVowels("JavaScript");

