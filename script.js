var selectAlgorithm = document.querySelector("#algos-multiselect");
var algoDescription = document.querySelector(".algo-description");
var writtenAlgorithm = document.querySelector(".written-algorithm");
var algoSteps = document.querySelector(".algo-steps");

var data = [
  {
    id: "1",
    intro: "Reverse String",
    algorithm: 
`function strReverse(aString) {

    var newString = [];
    
    for ( var i = 0 ; i < aString.length ; i++ ) {
        newString[i] = aString[aString.length - i - 1]
    }
    
        return newString
    }
`,
    description: "Given an array (or string), the task is to reverse the array/string."
  },
  {
    id: "2",
    intro: "",
    algorithm: 
    ` function isPalindrome(testString){
  
    var reversedString = ""
    
    // reversing string to check with parameters
    for ( var element of testString ){
      reversedString = element + reversedString
    }
        
    // after reversing string, check if it the same as the string
    if( testString == reversedString){
      return true
    } else {
      return false
    }
    
  }
  
  let test = isPalindrome("saas")
    `,
    description: "Given a stream of characters (characters are received one by one), write a function that prints ‘Yes’ if a character makes the complete string palindrome, else prints ‘No’."
  },
  {
    id: "3",
    intro: "",
    algorithm: `function reverseInterger(anInteger){
  
    // check if given string if positive or negative
    var isPositive = false;
    var intAfterChecking ;
     
    // get string of number either positive or negative
    if (anInteger > 0){
      isPositive = true
      intAfterChecking = anInteger.toString()
    }else{
      isPositive = false
      intAfterChecking = anInteger.toString().slice(1)
    }
    
    // reverse string
    intAfterChecking = intAfterChecking.split('').reverse().join('') 
    
    // check if string has '0' at first after reversing
    for ( var element of intAfterChecking ) {
      if (element == 0){
        intAfterChecking = intAfterChecking.slice(1)
      }else{
        break
      }
    }
    
    // if given integer was negative return as negative
    if (isPositive == false){
      intAfterChecking = intAfterChecking * -1
    }
    return intAfterChecking
  }
`,
  description: "Write a program to reverse an integer assuming that the input is a 32-bit integer. If the reversed integer overflows, print -1 as the output."
  },
  {
    id: "4",
    intro: "",
    algorithm: 
`var st = "nnnnnnnnnrr"
var arrayOfStringChars = st.split('')
var numberOfChars = {}

for (element of arrayOfStringChars){ 
   if (numberOfChars[element]) {
     numberOfChars[element]++
   }else{
     numberOfChars[element] = 1
   }
}

console.log(numberOfChars)
`,
  description: "Write an efficient function to return maximum occurring character in the input string e.g., if input string is “test” then function should return ‘t’."
  },
  {
    id: "5",
    intro: "",
    algorithm: 
`function fizzBuzz(n){
  
    for (var i = 0; i <= n; i++){
      if (i % 3 == 0 && i % 5 == 0){
        console.log(i ,'fizzBuzz')
      } else if (i % 3 == 0) {
        console.log(i, 'fizz')
      } else if  (i % 5 == 0){
        console.log(i, 'Buzz')
      } else {
        console.log(i)
      }
    }
    
  }
  
  fizzBuzz(50)
`,
  description: `Write a program that prints the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of the number and for the multiples of '5' print "Buzz".`
  }
];

// set initial algorithm
algoDescription.innerHTML = data[0].algorithm
algoSteps.innerHTML = data[0].description;

// on change function
selectAlgorithm.addEventListener("change", function(e) {
  
  algoDescription.innerHTML = data[e.target.value - 1].algorithm;
  algoSteps.innerHTML = data[e.target.value - 1].description;
  
});
