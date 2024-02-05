const phones = [
    {name:'samsung', price : 28000, camera:'12mp', color: 'black'},
    {name:'oppo', price : 26000, camera:'12mp', color: 'black'},
    {name:'I-phone', price : 200000, camera:'12mp', color: 'black'},
    {name:'Huwei', price : 56000, camera:'12mp', color: 'black'}
]
function cheapestPhone(phones){
    let highly = phones [0];
    for (const phone of phones){
        if(phone.price> highly.price){
            highly = phone;
        }
    }
    return highly;
}
const highlyPrice = cheapestPhone(phones);
console.log(highlyPrice);