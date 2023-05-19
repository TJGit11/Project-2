


// const response = await fetch(`/api/checkout`, {
//     method: 'GET',
//     body: JSON.stringify({
//         first_name,
//         last_name,
//         order_description,
//         phone_number,
//     }),


// });
// console.log(res.body);

// const response = await fetch('/api/checkout', {
//     method: 'GET',
//     body: JSON.stringify({
//         first_name,
//         last_name,
//         order_description,
//         phone_number,
//     }),
// });

// const data = await response.json();
// console.log(data);

// const orderString = "pepperoni with cheese ,Meat lovers , Veggie";
// const userString = "Hingle, silly, North"

// const checkoutOrder = inputString.split(",");

// const response = await fetch('/api/checkout', {
//     method: 'POST',
//     body: JSON.stringify({
//         values: checkoutOrder,
//     }),
// });

// // const data = await response.json();
// console.log(data);

const sourceEndpoint = '/order';
const destinationEndpoint = '/checkout';

// Make a GET request to the source endpoint to retrieve data
const response = await fetch('/order');
const data = await response.json();

// Make a POST request to the destination endpoint with the retrieved data
await fetch('/checkout', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
});

console.log('Your Order has been received!!!');

