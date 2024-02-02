const address = 'noakhali';
const part = address.slice(2,5);
console.log(part);

// split
const sentence = 'I am a good boy';
console.log (sentence.split());
console.log (sentence.split(' '));

// join
const realFriend = ['Rahim', 'Kahim', 'Mahim', 'Khahim'];
console.log(realFriend.join());
console.log(realFriend.join(","));
console.log(realFriend.join('|'));