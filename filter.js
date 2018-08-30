function filter(arr, value) { 
  let newArr = []; 
  for (let i = 0; i < arr.length; i++) { 
    if (arr[i] !== value) { 
      newArr.push(arr[i]); 
    } 
  } 
  return newArr; 
}

let arr = [30, 5, 4, 6, 5, 15, 20];
console.log(filter(arr, 5));