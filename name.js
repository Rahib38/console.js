function fullName (firstName, secondName){
    if (typeof firstName !=='string' || typeof  secondName !== 'string'){
        return "Please provide a string";
    }
    const full = firstName + '' + secondName;
    return full;
}
full = fullName ('Nadimul ','Tasniya' );
console.log(full);