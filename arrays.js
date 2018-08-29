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

}

function main() {

  Array.sizeRatio = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  arr.push(3);

  console.log(arr);
}

main();