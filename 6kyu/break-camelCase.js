// Complete the solution so that the function will break up camel casing, 
// using a space between words.

//     Example
// solution('camelCasing') // => should return 'camel Casing'

const solution = string => string.split(/(?=[A-Z])/).join(' ');