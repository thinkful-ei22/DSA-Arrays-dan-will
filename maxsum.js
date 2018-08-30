// Max sum in the array
// You are given an array containing positive 
// and negative integers.Write an algorithm which will find the 
// largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12



function maxSum(arr){
  let currentMax = 0;
  let currentHigh = 0;
  for (let i=0; i<arr.length; i++){
    currentHigh = 0;
    for (let j = i; j < arr.length; j++){
      currentHigh+=arr[j];
      if (currentHigh > currentMax){
        currentMax = currentHigh;
      }
    }
  }
  return currentMax;
}

let arr = [4, 6, -3, 5, -2, 1];
console.log(maxSum(arr));