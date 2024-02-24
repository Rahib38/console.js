const arr = [10, 15, 20, 14, 25, 30];
const find = 15;
for (const array of arr){
    if(array === find){
        console.log('Data found is:-',arr.indexOf(array));
        break;
    }
    else {
        console.log('Data not found');
    }
}