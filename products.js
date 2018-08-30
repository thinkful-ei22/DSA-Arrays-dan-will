// Input: [1, 3, 9, 4]
// Output: [108, 36, 12, 27]

function products(arr) {
  let newArr = [];
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    newArr.push(result / arr[i]);
  }
  return newArr;
}
console.log(products([1, 3, 9, 4]));