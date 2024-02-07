function f(array,value){
    var n = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == value){n++}
    }
    return n;
}
const numbers = [5,6,11,12,98, 5];
const num = f (numbers,5);
console.log(num);