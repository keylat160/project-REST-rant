require('dotenv').config();
const express = require('express');
const app = express();
const render = require('./render');

//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'jsx')
app.engine('jsx', require ('express-react-views').createEngine() )

app.get('/', (req, res) => {
    //res.send('Hello Rest-Rant World!');
    res.send(render('Home'));
});

//load the places controller
app.use('/places', require('./controllers/places'));


//wildcard/404 route
app.get('*', (req, res) => {
    console.log('user requested unknown route: ', req.url);
    res.status(404).send(render('Error404'));
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});

