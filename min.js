const heights = [25, 58, 214, 42, 11, 98, 44, 65, 2];
function getMin (numbers){
    let min = numbers [0];
    for (const num of numbers){
        if (num < min){
            min = num
        }
    }
    return min;
}
const min = getMin (heights);
console.log (min);