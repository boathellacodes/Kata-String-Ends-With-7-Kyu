// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

let stringTest = 'My name is Boat';


const stringEnder = (string, ender) => {
    return string.endsWith(ender);
}

function checkString (string, checker)  {
    return string.endsWith(checker);
}


console.log(checkString('abc', 'bc'));
console.log(stringEnder('abc', 'bc'));

console.log(stringTest.endsWith('oat'))

