const user = { id: 464, Name: 'Ansary', Role: 'Student' }

const stringified = JSON.stringify(user)
// console.log(user)
// console.log(stringified)

/* 

{ id: 464, Name: 'Ansary', Role: 'Student' }   ===> JS
{"id":464,"Name":"Ansary","Role":"Student"}    ===> JSON

*/

const shop = {
    owner: 'Prince',
    address: {
        street: '5/3, Sobhanbag',
        city: 'Dhaka',
        location: 'Metro Shopping Mall'
    },
    products: ['laptop', 'monitor', 'mic', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

console.log(shop)
const shopJSON = JSON.stringify(shop)
console.log(shopJSON)
const shopObject = JSON.parse(shopJSON)