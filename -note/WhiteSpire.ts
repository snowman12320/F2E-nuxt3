// create add two number function use typescript
function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(addTwoNumbers(2, 3));

// test functionnpm install -g ts-node
function testFunction(num: number): number {
  return num;
}

console.log(testFunction(2));
console.log(testFunction(3));

// create minus two number function use typescript
function minusTwoNumbers(num1: number, num2: number): number {
  return num1 - num2;
}
console.log(minusTwoNumbers(2, 3));

export { addTwoNumbers, minusTwoNumbers };
