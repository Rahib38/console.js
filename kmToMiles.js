function kmToMiles (km){
    const Miles = km * 0.621371;
    const toMiles = parseInt (Miles);
    const toKm = km % 0.621371;
    const kmMiles = toMiles + ' Miles ' + toKm.toFixed(2) + ' Km';
    return kmMiles;
}
const mile = kmToMiles (5);
console.log (mile);