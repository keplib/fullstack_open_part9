type Operation = 'multiply' | 'add' | 'divide';
type Result = number | string;

const calculator = (a: number, b: number, op: Operation): Result => {
  if (op === 'multiply') {
    return a * b;
  } else if (op === 'add') {
    return a + b;
  } else {
    if (b === 0) return "can't divide by 0!";
    return a / b;
  }
};

console.log(calculator(2, 3, 'add'));
