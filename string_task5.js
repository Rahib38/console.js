// const sentence = 'I am a good boy';
// const sent = sentence[0].toUpperCase() + sentence.substring(1);
// console.log(sent);
// const publication = "freeCodeCamp";
// const pub=publication[0].toUpperCase() + publication.substring(1);
// console.log(pub);

const mySentence = "freeCodeCamp is an awesome resource";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
console.log(words);