// const nums = [20, 5, 55, 10, 15, 30];
// for (let i = 0; i<nums.length-1;i++){
//     console.log (nums[i]);
// }

// let i = 1;
// for (i =1; i<=100;i++){
//     console.log("I Love you sona pakhi", i);
// }

let nums = [20, 5, 55, 10, 15, 30];
let i = 0;
let sumOfEven = 0;
let sumOfOdd = 0;
for (i=0;i<nums.length;i++){
    const j = nums[i];
    if(j%2===1){
        sumOfOdd+=j;
    }else{
        sumOfEven+=j;

    }
}
console.log(sumOfEven);
console.log(sumOfOdd);