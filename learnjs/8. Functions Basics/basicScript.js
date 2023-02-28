const a = 12;
const b = 4;
const result = sumOfTwoNumbers(a, b);
console.log("returned result", result);
//
// do something else
//
const c = 2;
const d = 24;
sumOfTwoNumbers(c, d);
//
// do something else
//

function sumOfTwoNumbers(a, b) {
    const sum = a + b;
    console.log("result is", sum);
    return sum;
}

const e = 5;
const f = 14;
sumOfTwoNumbers(e, f);

const square = function (num) {
    return num * num;
};

console.log(square);
console.log(square(4));
