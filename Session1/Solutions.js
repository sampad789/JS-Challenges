/**
|--------------------------------------------------
| ANCHOR CHALLENGE 1: REVERSE A STRING
 Return a string in reverse
 ex. reverseString('hello') === 'olleh'
|--------------------------------------------------
*/

function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

const answer = reverseString("hello");
console.log(answer);

/**
|--------------------------------------------------
|  ANCHOR CHALLENGE 2: VALIDATE A PALINDROME
 Return true if palindrome and false if not
 ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false
|--------------------------------------------------
*/

function isPalindrome(str) {
  // NOTE Reverse the string
  const reversed = str
    .split("")
    .reverse()
    .join("");
  // NOTE  Check if reversed string matches the original

  if (reversed === str) {
    return true;
  } else {
    return false;
  }
  // NOTE This returns the same.
  //return reversed === str;
}
const checkPalindrome = isPalindrome("hello");
console.log(checkPalindrome);
/**
|--------------------------------------------------
|  ANCHOR CHALLENGE 3: REVERSE AN INTEGER
 Return an integer in reverse
 ex. reverseInt(521) === 125
|--------------------------------------------------
*/

function reverseInt(int) {
  // NOTE convert the int to string and then reverse it
  const reversed = int
    .toString()
    .split("")
    .reverse()
    .join("");

  //NOTE Turn it back into the Integer
  return parseInt(reversed);
}
const reversedIntAnswer = reverseInt(521);
console.log(reversedIntAnswer);

/**
|--------------------------------------------------
| ANCHOR CHALLENGE 4: CAPITALIZE LETTERS
Return a string with the first letter of every word capitalized
 ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
|--------------------------------------------------
*/

function capitalizeLetters(str) {
  // NOTE  Turn the sentence into and array and map individual word to capitalize
  //First string of the word and turn back into sentence i.e "String"

  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(" ");
}

const firstLetterCapital = capitalizeLetters("i love jaVASCRIPT");
console.log(firstLetterCapital);

/**
|--------------------------------------------------
|  CHALLENGE 5: MAX CHARACTER
 Return the character that is most common in a string
 ex. maxCharacter('javascript') == 'a'
|--------------------------------------------------
*/

function maxCharacter(str) {
  const characterMap = {};
  let maxNum = 0;
  let maxChar = "";
  // NOTE TURn the string into an array and turn it into key value pairs
  // and the value being the numbers
  str.split("").forEach(alphabet => {
    if (characterMap[alphabet]) {
      characterMap[alphabet]++;
    } else {
      characterMap[alphabet] = 1;
    }
  });

  for (let alphabet in characterMap) {
    if (characterMap[alphabet] > maxNum) {
      maxNum = characterMap[alphabet];
      maxChar = alphabet;
    }
  }
  let characters = maxChar.toUpperCase() + " is repeated " + maxNum + " times";
  return characters;
}
const maximum = maxCharacter("Javascript");
console.log(maximum);
/**
|--------------------------------------------------
|  ANCHOR CHALLENGE 6: FIZZBUZZ
 Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
|--------------------------------------------------
*/

function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz();
