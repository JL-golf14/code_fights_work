myApp.controller('HomeController', function() {
  console.log('home controller running');

  var self = this;

  self.message = "Welcome to the Home View";



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


  function makeArrayConsecutive2(statues) {
    var missing = [];
  statues.sort((a, b) => (a > b));
  for (var i = statues[0],a = statues[0]+1; i <= statues[statues.length-1],a <= statues[(statues.length-1)]+1; i++,a++) {
   console.log("miss",missing,"i",i,"A",a);
 if (statues.indexOf(i)==-1 && a !== i) {
      missing.push(i);
    }
  }
        return missing.length;
  }


  console.log(makeArrayConsecutive2([0,3]));

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
