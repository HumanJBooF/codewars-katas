// This time we want to write calculations using functions and get the results.
// Let's have a look at some examples:

// JavaScript:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

// There must be a function for each number from 0("zero") to 9("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy(divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division, e.g eight(dividedBy(three())) / eight(divided_by(three)) should return 2, not 2.666666...

const expr = (number, operation) => {
    if (!operation)
        return number;
    return operation(number);
}

const zero = operation => expr(0, operation);
const one = operation => expr(1, operation);
const two = operation => expr(2, operation);
const three = operation => expr(3, operation);
const four = operation => expr(4, operation);
const five = operation => expr(5, operation);
const six = operation => expr(6, operation);
const seven = operation => expr(7, operation);
const eight = operation => expr(8, operation);
const nine = operation => expr(9, operation);

const plus = a => {
    return b => {
        return b + a;
    }
}
const minus = a => {
    return b => {
        return b - a;
    }
}
const times = a => {
    return b => {
        return a * b;
    }
}
const dividedBy = a => {
    return b => {
        return Math.floor(b / a);
    }
}