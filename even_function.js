function evenNumbersOnly(numbers){
    const evens = [];
    for (const number of numbers){
        if ( number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}
const numbers = [10, 525, 787, 9875, 76];
const evens = evenNumbersOnly(numbers);
console.log(evens);