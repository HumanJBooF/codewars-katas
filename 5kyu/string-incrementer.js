// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1. 
// If the string does not end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

const incrementString = str => {
    if (isNaN(str.slice(-1))) {
        return `${str}1`;
    } else {
        const letters = [...str].filter(letter => isNaN(letter)).join('');
        const numbers = [...str].filter(nan => !isNaN(nan)).join('');
        const newNum = +numbers + 1;
        if (numbers.length > newNum.toString().length) {
            let zeros = '';
            [...numbers].forEach(elem => zeros += '0');
            return `${letters}${(zeros + newNum).slice(-numbers.length)}`
        } else {
            return `${letters}${newNum}`;
        }

    }
}

incrementString('romanissupergay0099')
