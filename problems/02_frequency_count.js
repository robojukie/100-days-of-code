/*
 * Frequency Count
 * Utilize the frequency count pattern to solve these problems.  Use a Hash Set
 * or an Array instead of a Hash Table where applicable.
 */

// class Problems {
  /**
   *
   * Unique
   *
   * Given an array of integers, return an array with all duplicates removed.*
   *
   * Parameters
   * Input: arr {Array of Integers}
   * Output: {ArrayList of Integers}
   *
   * Constraints
   *
   * Time: O(N)
   * Space: O(N)
   *
   * Examples
   * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
   * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
   * [1, 2, 3, 1, 2] --> [1, 2, 3]
   */

   
  function unique(arr) {
    // let output = Array.from(new Set(arr)); //complexity?
    // return output // arr -> set - O(n), probably same for set -> arr

    // space: O(n), time: O(n^2)?
    // for (let n of arr) {
    //     if (!result.includes(n)) {
    //         result.push(n);
    //     }
    // };

    let hash = new Set();
    let result = [];

    // loop and check each number in array
    // if number is not in set
    // add to set, add to result
    for (let num of arr) {
      if (!hash.has(num)) {
        hash.add(num);
        result.push(num);
      }
    }
    return result 
  }
  console.log(unique([1, 2, 4, 4, 5, 6]));
  console.log(unique([1, 1, 2, 2, 3, 3]));
  console.log(unique([1, 2, 3, 1, 2]));
  console.log(unique([]));

  /**
  * Word Count
  *
  * Given an body of text, return a hash table of the frequency of each word.
  *
  * Parameters
  * Input: sentence {String}
  * Output: {Hash Map <String, Integer>}
  *
  * Constraints
  *
  * Capital and lower case versions of the same word should be counted is the same word.
  *
  * Remove punctuations from all words.
  *
  * Time: O(N)
  * Space: O(N)
  * Where N is the number of characters in the string.
  *
  * **Examples**
  * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
  * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
  * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
  */

  // function wordCount(sentence) {
  //   // let frequencyTable = new Map()

  //   // YOUR WORK HERE
  //   return;
  // }

  // console.log(wordCount('The cat and the hat.'));
  // console.log(wordCount('As soon as possible.'));
  // console.log(wordCount('It\'s a man, it\'s a plane, it\'s superman!'));

  /**
   * RGB Set
   *
   * Given a string of characters where each character is either 'r', 'g', or 'b',
   * determine the number of complete sets of 'rgb' that can be made with the
   * characters.
   *
   * Parameters
   * Input: str {String}
   * Output: {Integer}
   *
   * Constraints
   * Time: O(N)
   * Space: O(1)
   *
   * Examples
   * `'rgbrgb' --> 2`
   * `'rbgrbrgrgbgrrggbbbbrgrgrgrg' --> 7`
   * `'bbrr' --> 0`
   */
  function rgb(string) {
    let lettersMap = new Map(); // space O(n)?
     // loop through string -> O(n)
     for (let char of string) {
       if (lettersMap.has(char)) {
         let count = lettersMap.get(char);
         lettersMap.set(char, ++count);
         // count === 0 ? count+= 2 : count++;
         // lettersMap.set(char, count);
       } else {
         lettersMap.set(char, 1);
       }
     }
   
    if (lettersMap.size < 3) return 0
    let setCounts = lettersMap.values();
    let smallestCount = Number.MAX_SAFE_INTEGER;
    for (let num of setCounts) {
      if (num < smallestCount) {
        smallestCount = num;
      }
    }
    // if char not in map -> O(1)
    // add character, and 1 to map
    // if char in map -> O(1)
    // add char count

    // get all values of lettersmap -> O(1)
    // loop through values of lettersmap -> O(n)
    // return smallest value of letters map
    return smallestCount;
  }
  console.log(rgb('rgbrgb'));
  console.log(rgb('rbgrbrgrgbgrrggbbbbrgrgrgrg'));
  console.log(rgb('bbrr'));

  
  /**
  * Missing Number
  *
  * Given range of 1 to N and an array of unique integers that are within that
  * range, return the missing integers not found in the array
  *
  * Parameters
  * Input: n {Integer}
  * Input: arr {Array of Integers}
  * Output: {ArrayList of Integers}
  *
  * Constraints
  * Time: O(N)
  * Space: O(N)
  *
  * Examples
  * `4, [1, 4, 2] --> [3]`
  * `8, [4, 7, 1, 6] --> [2, 3, 5, 8]`
  * `6, [6, 4, 2, 1] --> [3, 5]`
  */

  function missingNumber(n, arr) {
    let result = []
    let arrMap = new Set(arr); // O(n)
    for (let i = 1; i <= n; i++) { // O(n) where n is target n
      // if (!arr.includes(i)) { // is this O(n)? potentially O(n^2) then?
      //   result.push(i);
      // }
      if (!arrMap.has(i)) { // O(1)
        result.push(i)
      }
    }    
    //arr -> set
    // if set does not have number in range
    // add number to result

    return result;
  }

  console.log(missingNumber(4, [1,4,2]));
  console.log(missingNumber(8, [4, 7, 1, 6]));
  console.log(missingNumber(6, [6, 4, 2, 1]));


  /**
   * Letter Sort
   *
   * Given a string of lowercase letters, return the letters in sorted order.
   *
   * Parameters
   * Input: str {String}
   * Output: {String}
   *
   * Constraints
   * Time: O(N)
   * Space: O(1)
   *
   * Examples
   * `hello --> ehllo`
   * `whiteboard --> abdehiortw`
   * `one --> eno`
   */

  function letterSort(string) {
    let arr = string.split('');
    // return arr.sort().join('');
    // with custom compare function
    // return arr.sort((a,b) => {
    //   if (a < b) return -1;
    //   if (b > a) return 1;
    //   return 0;
    // })
    // without using builtin sort
    // stick letters in array?
    // TODO try this again
  }
  console.log(letterSort('hello'));
  console.log(letterSort('whiteboard'));
  console.log(letterSort('one'));
  
  /**
  * Character Mode
  *
  * Given a string, find the most frequent occurring letter(s) in the string
  *
  * Parameters
  * Input: string {String}
  * Output: {String}
  *
  * Constraints
  * If more than one letter is tied for the most frequent, return a string of all
  * the letters in one string.
  *
  * Time: O(N)
  * Space: O(N)
  *
  * Examples
  * 'hello' --> 'l'
  * 'A walk in the park' --> 'a'
  * 'noon' --> 'no'
  */
  // let map = new Map();
  // if letter in map -> increment count
  // if letter not in map -> add to map with count 1
  // let maxCount = 0;
  // loop through map,
  // if value > maxCount, set maxCount to value and set resultString to key
  // if value === maxCount, concat key to resultString

  // return resultString
  //   function haracterMode(string) {
  //     // YOUR WORK HERE
  //     return "";
  //   }

  /**
   * Sort Digits
   *
   * Given an integer, sort the digits in ascending order and return the new integer.
   * Ignore leading zeros.
   *
   * Parameters
   * Input: num {Integer}
   * Output: {Integer}
   *
   * Constraints
   * Do not convert the integer into a string or other data type.
   *
   * Time: O(N) where N is the number of digits.
   * Space: O(1)
   *
   * Examples
   * 8970 --> 789
   * 32445 --> 23445
   * 10101 --> 111
   */

  // modulo trick

  // 8970 % 10 -> 0 // ignore
  // 8970 / 10 -> 897
  // 897 % 10 -> 7 // add to result array
  // 897 / 10 -> 89
  // 89 % 10 -> 9 // add to result array
  // 89 / 10 -> 8
  // 8 % 10 -> 8 // add to result array
  // 8 / 10 -> 0
  // array.sort.join.toNumber // what about without this? idk


  // function sortDigits(n) {
  //   // YOUR WORK HERE
  //   return -1;
  //  }

  /**
    *  Get Duplicates
    *
    *  Given an array of values, return only the values that have duplicates in the
    *  array
    *
    *  Parameters
    *  Input: arr {Array}
    *  Output: {ArrayList}
    *
    *  Constraints
    *  Time: O(N)
    *  Space: O(N)
    *
    *  Examples
    *  [1, 2, 4, 2] --> [2]
    *  [3, 2, 3, 2, 3, 3, 4] --> [3, 2]
    *  [1, 2, 3, 4] --> []
    */


  function getDuplicates(arr) {
    let numSet = new Set();
    // let result = new Set();
    let result = [];
    for (let num of arr)
      if (numSet.has(num)) {
        if (!result.includes(num)) {
          result.push(num);
        }
        // result.add(num);
      } else {
        numSet.add(num)
      }  
    // return [...result];
    return result
  }
  console.log(getDuplicates([1, 2, 4, 2]));
  console.log(getDuplicates([3, 2, 3, 2, 3, 3, 4]));
  console.log(getDuplicates([1, 2, 3, 4]));

  /**
  *  Anagram Pair
  *
  *  Given two strings, determine if the strings are anagrams of one another.
  *
  *  Two words are anagrams of one another if they contain the same letters.
  *
  *  Parameters
  *  Input: str1 {String}
  *  Input: str2 {String}
  *  Output: {Boolean}
  *
  *  Constraints
  *  With N as the length of the first string, and M as the length of the second string.
  *
  *  Time: O(N)
  *  Space: O(N)
  *
  *  Examples
  *  "cat", "act" --> true
  *  "cat", "dog" --> false
  *  "racecar", "aaccrres" --> false
  */
  // assume no space & punctuation, all lowercase
  // racecar
  // {r: 1, a: 1, c: 2, e: 1}
  function anagramPair(string1, string2) {
    // call .toLowerCase() on each string if needed
    let charMap = new Map();

    // if string lengths differ, return false
    if (string1.length !== string2.length) {
      return false;
    }
    // for each letter in string1
    //   if in Map, increment count  
    // else 
    //   add letter, 1 to map  
    // return false;
    for (let ch of string1) {
      if (charMap.has(ch)) {
        let count = charMap.get(ch);
        charMap.set(ch, ++count);
      } else {
        charMap.set(ch, 1);
      }
    }

    for (let ch of string2) {
      if (!charMap.has(ch)) return false;
      let count = charMap.get(ch);
      count--;
      charMap.set(ch, count);
      if (count <= 0) {
        charMap.delete(ch)
      }
    }
    // loop through string2
    // if letter not in map
    //   return false
    // else 
    //   decrement letter count
    //   if count is 0, remove letter from map

    return true
  }
  
  console.log(anagramPair('cat', 'act'));
  console.log(anagramPair('cat', 'dog'));
  console.log(anagramPair('racecar', 'aaccrres'));
  console.log(anagramPair('racecar', 'car')); // false?
  console.log(anagramPair('noon', 'noon')); // false?

  /**
   *  Anagram Palindrome
   *
   *  Given a string, determine if the string can be rearranged to form a palindrome.
   *
   *  A palindrome is a word that is the same as its reversed. For example: "racecar"
   *  and "noon" are palindromes because they match their reversed version
   *  respectively. On the other hand, "cat" is not a palindrome because "cat"
   *  does not equal "tac".
   *
   *  Parameters
   *  Input: str {String}
   *  Output: {Boolean}
   *
   *  Constraints
   *
   *  Assume the string only contains lowercase letters and no spaces.
   *
   *  Time: O(N)
   *  Space: O(1)
   *
   *  Examples
   *  `"carrace" --> true ("carrace" can be rearranged to "racecar")`
   *  `"cat" --> false`
   */

  // carrace
  // {c:2, a:2, r:2, e:1}

  // let map = {} -> when to use {} and when to use new Map()
  // loop through each ch
  // if ch in map : increment count for ch
  // else : add ch to map with count 1

  // get all values in map, if more than 1 of the values is not divisible by 2 (2 unique single characters)
  // return false
  // else return true

  function anagramPalindrome(str) {
    let charMap = new Map();
    let singleChars = 0;

    // let charMap = {};
    // for (let ch of str) {
    //   if (charMap[ch]) {
    //     charMap[ch]++;
    //   } else {
    //     charMap[ch] = 1
    //   }
    // }

    for (let ch of str) {
      if (charMap.get(ch)) {
        let count = charMap.get(ch);
        charMap.set(ch, ++count);
      } else {
        charMap.set(ch, 1);
      }
    }
    
    // look up different ways of map iteration
    for (let [key, values] of charMap.entries()) {
      if (values % 2 !== 0) {
        singleChars++;
      }
    }
  
    return singleChars > 1 ? false : true
  }

  // does it have to be dictionary word or just string?
  console.log(anagramPalindrome('carrace'));
  console.log(anagramPalindrome('noon'));
  console.log(anagramPalindrome('cat'));
  console.log(anagramPalindrome('')); // true?

// }
