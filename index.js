require('dotenv').config();
const express = require('express');
const app = express();
const render = require('./render');

//MIDDLEWARE
app.use(express.static('public'));

app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine() )

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello Rest-Rant World!');
    res.render('Home');
})


app.get('*', (req, res) => {
    res.render('error404')
})


app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${3001}`);
})

