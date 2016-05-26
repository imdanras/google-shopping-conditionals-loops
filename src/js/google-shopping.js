var data = require('../products.json');

// Write your solutions below

//console.log(typeof data); - prints 'object'



//EXERCISE 1 - answer is 16


// for (i = 0; i < data.items.length; i++) {


//     console.log(data.items[i].kind.length);

// };

//EXERCISE 2 - lots

// for (i = 0; i < data.items.length; i++) {

//       if (data.items[i].product.inventories[0].availability.includes('backorder')) {
//         console.log(data.items[i].product.title);
//       }
// };


//EXERCISE 3 -- 6 total entries

// for (i = 0; i < data.items.length; i++) {

//     if (data.items[i].product.images.length > 1) {

//   console.log(data.items[i].product.title);
// }
// };

//EXERCISE 4

// for (i = 0; i < data.items.length; i++) {

//     if (data.items[i].product.brand == "Canon") {
//   console.log(data.items[i].product.title);
// }
// };

//EXERCISE 5 -- 1 item

// for (var i = 0; i < data.items.length; i++) {

//     if (data.items[i].product.author.name == 'eBay' &&

//         data.items[i].product.brand == 'Canon') {
//   console.log(data.items[i]);
// }
// };

//EXERCISE 6

for (var i = 0; i < data.items.length; i++) {

    console.log(data.items[i].product.brand);
    console.log(data.items[i].product.inventories[0].price)
    console.log(data.items[i].product.images[0].link)
  }







