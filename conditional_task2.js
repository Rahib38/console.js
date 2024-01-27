const weight = 72;
const height = 5.8;
const heightInMeter = 5.8 / 3.0848;

const bmi = weight / (heightInMeter ** 2);

if(bmi < 18.5){
    console.log('you are underweight');
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log('you are normal');
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log('you are overweight');
}
else{
    console.log('you are obese');
}