const db = require('../models');

db.Place.create([
    {
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'https://images.pexels.com/photos/1001773/pexels-photo-1001773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    founded: 1989
}, 
{
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    founded: 2020
},
])
.then(() => {
    console.log('Success!')
    process.exit(0);
})
.catch(err => {
    console.log('Failure!', err)
    process.exit(1);
});