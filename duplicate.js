const numbers = [10,5,12,8,9,11,10,5,36,2,8,1,8];
function noDuplicate (array){
    const unique =[];
    for (const item of array){
        if (unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray = noDuplicate(numbers);
console.log(uniqueArray);