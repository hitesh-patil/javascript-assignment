function checkPalindrome(inputStr) {
  let reverseStr = [];
  if(!inputStr.length) {
    throw "Do not expect empty string";
  }
  for(let i = inputStr.length - 1; i >= 0; i--) {
    reverseStr.push(inputStr[i]);
  }
  if(reverseStr.join('').toLowerCase() === inputStr.toLowerCase()) {
    return "You've found a palindrome";
  } else {
    return "Incorrect!!!. not a palindrome";
  }
}

checkPalindrome("Eye");
