// Build Tower
// Build Tower by the following given argument:
// number of floors(integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a[String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]
// and a tower of 6 floors looks like below

// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]

const towerBuilder = nFloors => {
    let space = "";
    let star = "";
    let result = [];
    for (i = 1; i <= nFloors; i++) {
        space = (" ").repeat(nFloors - i);
        star = ("*").repeat((2 * i) - 1);
        result.push(`${space}${star}${space}`);
    }
    return result;
}