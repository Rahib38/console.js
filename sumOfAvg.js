function oddAverage (numbers){
    const odds = [];
    for (const number of numbers){
    if (number % 2 === 1){
        odds.push(number);
    }  
    }
    let sum = 0;
    for(const number of odds){
        sum += number;
    }
    const count = odds.length;
    const avg = sum / count;
    return avg;
}
const numbers = [10,11,575,149,500,58451,684,63267];
const avg = oddAverage(numbers);
console.log(avg);