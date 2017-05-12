myApp.controller('HomeController', function() {
  console.log('home controller running');

  var self = this;

  self.message = "Welcome to the Home View";





  // Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.
  //
  // Example
  //
  // For sequence = [1, 3, 2, 1], the output should be
  // almostIncreasingSequence(sequence) = false;
  //
  // There is no one element in this array that can be removed in order to get a strictly increasing sequence.
  //
  // For sequence = [1, 3, 2], the output should be
  // almostIncreasingSequence(sequence) = true.
  //
  // You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
  //
  // Input/Output
  //
  // [time limit] 4000ms (js)
  // [input] array.integer sequence
  //
  // Guaranteed constraints:
  // 2 ≤ sequence.length ≤ 105,
  // -105 ≤ sequence[i] ≤ 105.
  //
  // [output] boolean
  //
  // Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.



  //   function almostIncreasingSequence(sequence) {
  //     if(sequence.length == 2) return true;
  //
  //     var error = 0;
  //
  //     for(var i = 0; i < sequence.length - 1; i++){
  //       // if current value is greater than next value
  //       if(sequence[i] >= sequence[i+1]){
  //         // Test whether stepping back or forwards can bridge the hump or pothole
  //         var noStepBack = sequence[i-1] && sequence[i-1] >= sequence[i+1];
  //         var noStepFoward = sequence[i+2] && sequence[i] >= sequence[i+2];
  //         // We only test for bridge gaps when i > 0
  //         if(i > 0 && noStepBack && noStepFoward) {
  //           // Cannot step back over gap forwards or backwards
  //           // Counts as two errors ONLY WHEN BOTH PRESENT
  //           error+=2;
  //         }else{
  //           // Typical error
  //           error++;
  //         }
  //       }
  //
  //       // Early dropout cause if you ever get more than one error, then its game over anyway
  //       if(error > 1) return false;
  //     }
  //
  //     return true;
  //     console.log("array11111",almostIncreasingSequence([[1,9,2,9,8]]));
  //
  //
  // }


  //===============================================================================================================================================================================================================================

  // After becoming famous, CodeBots decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms, each cell containing an integer - the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots.
  //
  // Help the bots calculate the total price of all the rooms that are suitable for them.
  //
  // Example
  //
  // For
  //
  // matrix = [[0, 1, 1, 2],
  //           [0, 5, 0, 0],
  //           [2, 0, 3, 3]]
  // the output should be
  // matrixElementsSum(matrix) = 9.
  //
  // Here's the rooms matrix with unsuitable rooms marked with 'x':
  //
  // [[x, 1, 1, 2],
  //  [x, 5, x, x],
  //  [x, x, x, x]]
  // Thus, the answer is 1 + 5 + 1 + 2 = 9.
  //
  // Input/Output
  //
  // [time limit] 4000ms (js)
  // [input] array.array.integer matrix
  //
  // 2-dimensional array of integers representing a rectangular matrix of the building.
  //
  // Guaranteed constraints:
  // 1 ≤ matrix.length ≤ 5,
  // 1 ≤ matrix[i].length ≤ 5,
  // 0 ≤ matrix[i][j] ≤ 10.
  //
  // [output] integer
  //
  // function matrixElementsSum(matrix) {
  //     var result = 0;
  //     for (var i = 0; i < matrix[0].length; i++) {
  //         for (var j = 0; j < matrix.length; j++) {
  //             if (matrix[j][i] === 0) {
  //                 break;
  //             }
  //             result += matrix[j][i];
  //         }
  //     }
  //     return result;
  // }



  //===============================================================================================================================================================================================================================
  // Given an array of strings, return another array containing all of its longest strings.
  //
  // Example
  //
  // For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
  // allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
  //
  // Input/Output
  //
  // [time limit] 4000ms (js)
  // [input] array.string inputArray
  //
  // A non-empty array.
  //
  // Guaranteed constraints:
  // 1 ≤ inputArray.length ≤ 10,
  // 1 ≤ inputArray[i].length ≤ 10.
  //
  // [output] array.string
  //
  // Array of the longest strings, stored in the same order as in the inputArray.
  //

  //
  // function allLongestStrings(inputArray) {
  //   var longArray = [];
  //   if (inputArray.length == 1) {
  //     longArray.push(inputArray[0]);
  //     return longArray;
  //   }
  //   var longest = inputArray.sort(function (a, b) { return b.length - a.length; })[0];
  //   for (var i = 0; i <= inputArray.length-1; i++) {
  //     if (inputArray[i].length>=longest.length) {
  //       longArray.push(inputArray[i]);
  //     }
  //   }
  //   return longArray;
  // };
  //
  // console.log(allLongestStrings(["abc", "eeee", "abcd", "dcd"]));
  //
  //
  //


  //===============================================================================================================================================================================================================================

  // Given two strings, find the number of common characters between them.
  //
  // Example
  //
  // For s1 = "aabcc" and s2 = "adcaa", the output should be
  // commonCharacterCount(s1, s2) = 3.
  //
  // Strings have 3 common characters - 2 "a"s and 1 "c".
  //
  // Input/Output
  //
  // [time limit] 4000ms (js)
  // [input] string s1
  //
  // A string consisting of lowercase latin letters a-z.
  //
  // Guaranteed constraints:
  // 1 ≤ s1.length ≤ 15.
  //
  // [input] string s2
  //
  // A string consisting of lowercase latin letters a-z.
  //
  // Guaranteed constraints:
  // 1 ≤ s2.length ≤ 15.
  //
  // [output] integer




// function commonCharacterCount(s1, s2) {
//     var string1=s1.split('');
//     var string2=s2.split('');
//     var common=0;
//
//     for(var i=0;i<string1.length;i++){
//         if(string2.indexOf(string1[i])>=0){
//             common++;
//             string2.splice(string2.indexOf(string1[i]),1);
//         }
//     }
//     return common;
// }


  //===============================================================================================================================================================================================================================






















  //===============================================================================================================================================================================================================================
























  //===============================================================================================================================================================================================================================






















  //===============================================================================================================================================================================================================================



















  //===============================================================================================================================================================================================================================

  //
  // function tripletSum(x, a) {
  // if(a.indeoxOf(a)+a.indeoxOf(a)+a.indeoxOf(a) === x){
  //     return true}
  //
  //     else {return false}
  // }
  // console.log(tripletSum(15,[14, 1, 2, 3, 8, 15, 3]));
  //




  //===========================================================================================================================================================================================================================================================================================================================================
  // Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
  //
  // Example
  //
  // For statues = [6, 2, 3, 8], the output should be
  // makeArrayConsecutive2(statues) = 3.
  //
  // Ratiorg needs statues of sizes 4, 5 and 7.
  //
  // Input/Output
  //
  // [time limit] 4000ms (js)
  // [input] array.integer statues
  //
  // An array of distinct non-negative integers.
  //
  // Guaranteed constraints:
  // 1 ≤ statues.length ≤ 10,
  // 0 ≤ statues[i] ≤ 20.
  //
  // [output] integer
  //
  // The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.


  //  function makeArrayConsecutive2(statues) {
  //    var missing = [];
  //  statues.sort((a, b) => (a > b));
  //  for (var i = statues[0],a = statues[0]+1; i <= statues[statues.length-1],a <= statues[(statues.length-1)]+1; i++,a++) {
  //   console.log("miss",missing,"i",i,"A",a);
  // if (statues.indexOf(i)==-1 && a !== i) {
  //      missing.push(i);
  //    }
  //  }
  //        return missing.length;
  //  }
  //
  //
  //  console.log(makeArrayConsecutive2([0,3]));

  //==========================================================================================================================================================================================================================================================================================================================================

  // function centuryFromYear(year) {
  //
  //  return Math.ceil(year / 100);
  //
  // };
  //
  // console.log(centuryFromYear(1801));
  //





  //==========================================================================================================================================================================================================================================================================================================================================


  // function adjacentElementsProduct(inputArray) {
  //   var arr1=[];
  //   for (var i = 0; i <=inputArray.length; i++) {
  //   if(inputArray[i] !== unique)
  // console.log(arr1,"ddd");
  //     if(arr1.length== 2){
  //     console.log(arr1,"arr1");
  //     var index = i;
  //   }
  //   else{index=0}
  // }
  // var max = Math.max.apply(null,inputArray);
  // var second = inputArray.sort(function(a,b){return b-a})[1];
  // console.log(index,max,second);
  // return (max*index);
  // }

  // ==================================================================================================================================================================================================================================



  // var updateOccurrence = function(hash, value) {
  //   // probably quicker to cache, but would be inconsistent
  //   if (hash[value] === undefined) {
  //     hash[value] = 1;
  //   } else {
  //     hash[value]++;
  //   }
  //
  //   return hash[value];
  // };
  //
  // var hash = {};
  // var greatestOccurrence = 0;
  // var mode = undefined; // done to be explicit
  // for (var i = 0; i < inputArray.length; i++) {
  //   var value = inputArray[i];
  //   var occurrence = updateOccurrence(hash, value);
  //   if (greatestOccurrence < occurrence) {
  //     greatestOccurrence = occurrence;
  //     mode = value;
  //   }
  // }



  //
  // var max =Math.max.apply(null,inputArray);
  // var adjSpot = inputArray.indexOf(max);
  // if (inputArray[adjSpot-1]>inputArray[adjSpot+1]){
  //   return max*inputArray[adjSpot-1];
  // }else {
  //   return max*inputArray[adjSpot+1];
  // // var second = inputArray.sort(function(a,b){return b-a})[0];
  // // console.log(max,mode);
  // // return (max*mode);
  // }
  // }




  // function adjacentElementsProduct(inputArray) {
  // var sum = 0;
  //    for (var i = 0,a=1; i <= inputArray.length-1,a <=inputArray.length-2; i++,a++) {
  // if (inputArray[i]*inputArray[a]> sum){
  //   sum = inputArray[i]*inputArray[a];
  // }
  // }
  //
  //   return sum;
  // }

  // console.log(adjacentElementsProduct([1,4,6,-3,5,4]));
  // function checkPalindrome(inputString){
  //    for (var i = 0,a=inputString.length-1; i < inputString.length-1,a > 0; i++,a--) {
  // if (inputString.charAt(a) === inputString.charAt(i)) {
  // } else {return false;
  //       }
  //     }
  //   return true;
  // }



});
