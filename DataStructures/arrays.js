class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    // We loop through the array and shift every item replacing the desired index
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.item[this.length - 1];
    this.length--;
  }
  reverse() {
    let newIndex = 0;
    let reversedData = {};

    for (let i = this.length - 1; i >= 0; i--) {
        reversedData[newIndex] = this.data[i];
        newIndex++;    
    }

    this.data = reversedData;
  }
}

const newArray = new MyArray();
