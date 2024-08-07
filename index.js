function writeCards( name, event) {
  let array =[];
  for (let i = 0; i < name.length; i++) {
    let message = (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    array.push(message)
  }
  return array;
}
let cards = writeCards(["Guadalupe", "Ollie","Aki"],"birthday",);
console.log(cards)


function countDown(start) {
let i = start; 
while (i >= 0) {
  console.log(i);
  i--;
 }
}
countDown(10);
