const price = 800;
const age = 18;
if (age < 10){
    console.log("children for free");
}
else if ( age < 20){
    const discount = 800 * 50 /100;
    const payAmount = price - discount ;
    console.log(payAmount);
}
else if ( age >= 60){
    const discount = 800 * 15 /100;
    const payAmount = price - discount ;
    console.log(payAmount);
}
else{
    console.log("ticket fare 800tk");
}