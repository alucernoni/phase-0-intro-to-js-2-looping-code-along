// Code your solutions in this file

// for (let age = 30; age < 40; age ++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
// }

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);



function writeCards(obj, event) {
    const messages = []
    for (let i = 0; i < obj.length; i++) {
        messages.push(`Thank you, ${obj[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'surprise'))

function countDown(number) {
    let i = 0;
    while (number >= 0) {
        debugger;
        console.log(number--)
    }
}

console.log(countDown(3))

