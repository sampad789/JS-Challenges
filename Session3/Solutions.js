/**
|--------------------------------------------------
|  CHALLENGE 1: ADD ALL NUMBERS
 Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
 ex. addAll(2,5,6,7) === 20
|--------------------------------------------------
*/

function addAll(...numbers) {
  let total = 0;
  numbers.forEach(num => (total += num));
  return total;
}

//console.log(addAll(2, 5, 6, 7));

/**
|--------------------------------------------------
|  CHALLENGE 2: SUM ALL PRIMES
 Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
 ex. sumAllPrimes(10) == 17
|--------------------------------------------------
*/
function sumAllPrimes(num) {
  let total = 0;
  const checkForPrime = i => {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      total += i;
    }
  }
  return total;
}
//console.log(sumAllPrimes(100));

// TODO  "EXTRA"  SUM of n prime numbers

function sumOfNPrime(num) {}

/**
|--------------------------------------------------
|  CHALLENGE 3: SEEK & DESTROY
 Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
 ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
|--------------------------------------------------
*/
//Anchor ..rest ,filter and include
function seekAndDestroy(arr, ...rest) {
  return arr.filter(val => !rest.includes(val));
}
//console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

/**
|--------------------------------------------------
|  CHALLENGE 4: SORT BY HEIGHT
 Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
 ex.
 a = [-1, 150, 190, 170, -1, -1, 160, 180]
 sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
 /NOTE -1 are tress and numbers are the height 
|--------------------------------------------------
*/

function sortByHeight(arr) {
  const positionalArray = []; //NOTE  To hold the position of the numbers
  const valueArray = []; // NOTE to hold the Height values

  arr.forEach((value, index) =>
    value === -1 ? positionalArray.push(index) : valueArray.push(value)
  );
  const sortValueArray = valueArray.sort((a, b) => a - b);

  positionalArray.forEach((value, index) =>
    sortValueArray.splice(positionalArray[index], 0, -1)
  );

  return sortValueArray;
}
//console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

/**
|--------------------------------------------------
|  CHALLENGE 5: MISSING LETTERS
 Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
 ex.
 missingLetters("abce") == "d"
 missingLetters("abcdefghjklmno") == "i"
 missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
|--------------------------------------------------
*/
function missingLetters(str) {
  let compare = str.charCodeAt(0);
  let missing;

  str.split("").map((char, index) => {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}
console.log(missingLetters("abcdefghijklqrst"));

/**
|--------------------------------------------------
|  CHALLENGE 6: EVEN & ODD SUMS
Take in an array and return an array of the sums of even and odd numbers
ex.
evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
|--------------------------------------------------
*/
function evenOddSums(arr) {
  let evenSum = 0;
  let oddSum = 0;

  arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

  let finalAnswer =
    "the sum of even numbers is " +
    evenSum +
    " and the sum off odd numbers is " +
    oddSum;
  return finalAnswer;
}
console.log(evenOddSums([50, 60, 60, 45, 71]));
