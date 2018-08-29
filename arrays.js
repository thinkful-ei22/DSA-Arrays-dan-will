const Memory = require('./memory');

let memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value){
    if (this.length >= this._capacity){
      this._resize((this.length+1) * Array.sizeRatio);

    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size){
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null){
      throw new Error ('out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }
  
  get(index){
    if(index < 0 || index >= this.length) {
      throw new Error ('wrong index');
    }
    return memory.get(this.ptr + index);
  }

  pop() {
    if (this.length === 0) {
      throw new Error('Index error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value){
    if(index < 0 || index>=this.length){
      throw new Error('wrong index');
    }
    if (this.length >= this._capacity){
      this._resize((this.length+1) * Array.sizeRatio)
    }
    memory.copy(this.ptr + index+1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('wrong index');
    }
    
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

}

function main() {

  Array.sizeRatio = 3;

  //create an instance of the array class
  let arr = new Array();

  // //add an item to the array
  // arr.push(3);

  // // What is the length, capacity and memory address of your array ?
  // //-- Array { length: 1, _capacity: 3, ptr: 0 }

  // arr.push(5);
  // arr.push(15);

  // //-- Array { length: 3, _capacity: 3, ptr: 0 }

  // arr.push(19);

  // // -- Array { length: 4, _capacity: 12, ptr: 3 }

  // arr.push(45);
  // arr.push(10);

  // // What is the length, capacity and memory address of your array ? Explain the result of your program after adding the new lines of code
  // //-- Array { length: 6, _capacity: 12, ptr: 3 }


  // arr.pop();
  // arr.pop();
  // arr.pop();

  arr.push("tauhida");

  // What is the length, capacity and address of your array ? Explain the result of your program after adding the new lines of code
  // - Array { length: 3, _capacity: 12, ptr: 3 }

  // Print the first item in the array arr.

  // Empty the array and add just one item arr.push("tauhida");

  // Print this one item that you just added.What is the result ? Can you explain your result ?

  //   What is the purpose of the _resize() function in your Array class?

  console.log(arr);
}

main();