const express = require('express');
const router = express.Router();
const render = require('../render');
const places = require('../models/places.js');

//New place
router.get('/new', (req, res) => {
         res.send(render('places/New'));
         
    
});

router.post('/', (req, res) => {
    const newPlace = { ...req.body };
    if (!newPlace.pic) {
        newPlace.pic = 'https://via.placeholder.com/300';
    }
    if (!newPlace.city) {
        newPlace.state = 'USA';
    }
    places.push(newPlace);
    res.redirect('/places');
});
//GET List of Places
router.get('/', (req, res) => {
    res.send(render('places/index', { places: places }));
    

});

//GET Details of a place
router.get("/:id/edit", (req, res) => {
    let id = number(req.params.id);
    if (isNaN(id)) {
        res.status(404).render("error404");
      } else if (!places[id]) {
        res.status(404).render("error404");
      } else {
        res.render(`places/${id}`);
      }
})
 //Update a Place
 router.get('/:id/edit', (req, res) => {
    
 })

module.exports = router;
