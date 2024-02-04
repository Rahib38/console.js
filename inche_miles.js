function inchToFeet (inch){
    const feetFaction = inch /12;
    const feetNumbers = parseInt (feetFaction);
    const inchRemaing = inch % 12;
    const result = feetNumbers + ' ft '  +  inchRemaing  +  ' inch'
    return result;
}
const menHeight = inchToFeet (75);
console.log(menHeight);
