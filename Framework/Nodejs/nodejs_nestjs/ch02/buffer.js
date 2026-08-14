const buffer = Buffer.from('trans me to buffer')

console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('blah '), Buffer.from('blah '), Buffer.from('blahblah')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('allock():', buffer3);
