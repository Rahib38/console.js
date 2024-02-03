function sumOfNumbers(numbers){
    let sum = 0;
    for (const number of numbers){
        console.log(number);
        sum += number;
    }
    return sum;
}
const nums = [54, 885, 9785, 699536,25265];
const sum = sumOfNumbers(nums);
console.log('Sum of numbers',sum);