const numbers = [13, 10, 20, 321, 50, 32, 10];

const n = 13

for(let i = 0; i < numbers.length; i++) {
  if (numbers[i] === n) {
    console.log("found");
    break;
  }
  console.log("Not Found")
  break;
}