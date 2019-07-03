/**
|--------------------------------------------------
|  CHALLENGE 1: LONGEST WORD
 Return the longest word of a string
 ex. longestWord('Hi there, my name is Brad') === 'there,'
     - Return a single longest word
     - Return an array and include multiple words if they have the same length
     - Only return an array if multiple words, otherwise return a string
|--------------------------------------------------
*/
function getLongestWord(sen) {
  // NOTE Take the punctiations away from the sentence and save into an array

  const wordArray = sen.toLowerCase().match(/[a-z0-9]+/g);

  //NOTE  Sort BY length
  const sorted = wordArray.sort((a, b) => b.length - a.length);

  //NOTE If multiple Word put into an Array

  const longestWordArray = sorted.filter(
    word => word.length === sorted[0].length
  );

  //NOTE check if more than 1 value in the array
  if (longestWordArray.length === 1) {
    return longestWordArray[0];
  } else {
    return longestWordArray;
  }
}

const longestword = getLongestWord("Hi , my name ,is ,my name is slim shady");

//console.log(longestword);

/**
|--------------------------------------------------
|  CHALLENGE 2: ARRAY CHUNKING
 Split an array into chunked arrays of a specific length
 ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
 ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
|--------------------------------------------------
*/
function chunkArray(arr, len) {
  //NOTE initailizing empty array for chucking

  const chunkedArray = [];
  //Index for loop
  let i = 0;

  //NOTE loop while index is less than the array length

  while (i < arr.length) {
    //NOTE slice the array and push it into chunked array

    chunkedArray.push(arr.slice(i, i + len));
    //NOTE increment by chunk length

    i += len;
  }
  return chunkedArray;
}
const splitted = chunkArray([1, 2, 3, 4, 5, 6, 7], 3);
//console.log(splitted);

/**
|--------------------------------------------------
|  CHALLENGE 3: FLATTEN ARRAY
 Take an array of arrays and flatten to a single array
 ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
|--------------------------------------------------
*/
function flattenArray(arrays) {
  // NOTE  reduce the array and concatinate
  return arrays.reduce((a, b) => a.concat(b));
}
const flattened = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
//console.log(flattened);

/**
|--------------------------------------------------
|  CHALLENGE 4: ANAGRAM
 Return true if anagram and false if not
 ex. 'elbow' === 'below'
 ex. 'Dormitory' === 'dirty room##'
|--------------------------------------------------
*/
function isAnagram(str1, str2) {
  return formatString(str1) === formatString(str2);
}

// ANCHOR Helper Function
const formatString = str =>
  str
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

const checkAnagram = isAnagram("elbows", "belows");
console.log(checkAnagram);

/**
|--------------------------------------------------
|  CHALLENGE 5: LETTER CHANGES
 Change every letter of the string to the one that follows it and capitalize the vowels
 Z should turn to A
 ex. 'hello there' === 'Ifmmp UIfsf'
|--------------------------------------------------
*/
function letterChanges(str) {
  let newString = str.toLowerCase().replace(/[a-z]/gi, char => {
    if (char === "z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  newString = newString.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());

  return newString;
}

const changedLetter = letterChanges("Hello There");
console.log(changedLetter);
