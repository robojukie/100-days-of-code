/*
 * Homework 03 - Decrease and Conquer
 * Utilize the decrease and conquer pattern to solve these problems.
 */


/*
 *
 *  Number of Ones
 *
 * *Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Output: {Integer}
 *
 * **Constraints**
 * Time: O(logN) // not sure what algos are logN
 * Space: O(1)
 *
 * **Examples**
 * `[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8`
 * `[0, 0, 0] --> 0`
 * `[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7`
 */

[0, 0, 0, 1, 1] -> 2
          .
       *

[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] // len 12
                .
                *
                x     

mid === 1, end = mid
mid = (start + end) / 2 // 4 + 5 / 2
mid === 0, start = mid + 1
                 

function numberOfOnes(arr) {
  // empty array, single digit
  let start = 0;
  let end = arr.length;
  let mid = (start + end) / 2;

  while (start < end) {
    if (arr[mid] === 0) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr.length - start;
}

console.log(numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(numberOfOnes([0, 0, 0]));
console.log(numberOfOnes([0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]));
console.log(numberOfOnes([0, 0, 0, 1, 1]));


/*
 * Closest Value
 *
 * Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * If there are two numbers tied for the closest value, return the lowest value.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 4, 4, 7, 9, 10, 11], 6 --> 5`
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`
 */

[1, 2, 3], 8 --> 3
// smallest difference, lowest val if equal
// [1, 10, 22, 59, 67, 72, 100], 70
//  0   1   2   3  4    5   6  // len 7
//                      .                       
//                           *
//                      x
// if num exact, then return num or target

// [1, 2, 3]
//        s  e // 1
    
// // loop while start < mid
// if (target - arr[start] > target - arr[mid]) {
//   start = mid;
// }
// // if (target - arr[end-1] < target - arr[mid]) {
// //   end = mid
// // }
// mid = Math.floor ((end + start) / 2)
// //end loop
// if target - arr[start] <= target - arr[end] // return arr[start] else return arr[end]


function closestValue(arr, target) {
  let start = 0;
  let end = arr.length-1;
  let mid = Math.floor ((arr.length + start) / 2) ;

  while (start < mid) {
  //   if (arr[mid] === target) return arr[mid];
  //   if (Math.abs(target - arr[start]) > Math.abs(target - arr[mid])) {
  //     start = mid;
  //   }
  //   mid = Math.floor ((end + start) / 2)
  // }
  // Math.abs(target - arr[start]) <= Math.abs(target - arr[end]) ? arr[start] : arr[end]
  // return arr[start] else return arr[end]
}

console.log(closestValue([1], 1));
console.log(closestValue([1, 2, 3, 4, 4, 7, 9, 10, 11], 6));
console.log(closestValue([1, 2, 3], 8));
console.log(closestValue([1, 10, 22, 59, 67, 72, 100], 70));

/*
 * Square Root
 *
 * Given an positive integer, find the square root.*
 *
 * **Parameters**
 * Input: value {Double}
 * Output: {Double}
 *
 * **Constraints**
 * Do not use a native built in method.
 * Ensure the result is accurate to 6 decimal places (0.000001)
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `4 --> 2.0`
 * `98 --> 9.899495`
 * `14856 --> 121.885192
 */


squareRoot(n) {

  return -1.0;
}


/*
 * Greater Values
 *
 * *Given an sorted array of integers, and a target value return the number of values greater the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4`
 * `[1, 2, 3], 4 --> 0`
 * `[1, 10, 22, 59, 67, 72, 100], 13 --> 5`
 *
*/

// [1, 10, 22, 59, 67, 72, 100], 13
//          .
//          *
//          x


function greaterValues(arr, target) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + arr.length) / 2);
  while (start < end) {
    if (arr[mid] > target) {
      end = mid;
    } else {
      start = mid + 1
    }
    mid = Math.floor((start + end) / 2);
  }
  return arr.length - start;
}

console.log(greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5));
console.log(greaterValues([1, 2, 3], 4));
console.log(greaterValues([1, 10, 22, 59, 67, 72, 100], 13));


/*
 * Sorted and Rotated Array [Extra Credit]
 *
 * *Given a array that is sorted an rotated, find out if a target value exists in the array.*
 *
 * An sorted array is rotated by taking an unknown amount of values from the beginning and placing it at the end.
 *
 * `[3, 4, 5, 1, 2]` is rotated left by 2.
 * `[99, 14, 25, 78, 93]` is rotated to the right by 1.
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Boolean}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(N)
 *
 * **Examples**
 * `[35, 46, 79, 102, 1, 14, 29, 31], 46 --> true`
 * `[35, 46, 79, 102, 1, 14, 29, 31], 47 --> false`
 * `[7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9 --> true`
 */

public static boolean rotatedArraySearch(int[] nums, int target) {
  // YOUR WORK HERE
  return false;
}


private static boolean binarySearch(int[] nums, int start, int end, int target) {
  // YOUR WORK HERE
  return false;
}


/*
 * Multiplication Using Russian Peasant [Extra Credit]
 *
 * *Given two positive integers, return its product using Russian Peasant method of multiplication*
 *
 * Read up on how to apply the Russian Peasant method [here](https: *en.wikipedia.org/wiki/Ancient_Egyptian_multiplication). It is also referred to as the Egyptian multiplication.
 *
 * **Parameters**
 * Input: a {Integer}
 * Input: b {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * Assume a <= b, and the value of a is N.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `734, 487 --> 357458`
 * `846, 908--> 768168`
 */

public static int multiplicationRussianPeasant(int a, int b) {
  // YOUR WORK HERE
  return -1;
}
