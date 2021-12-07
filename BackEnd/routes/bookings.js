const router = require('express').Router();
const { MongoBookings } = require('../persistence/MongoBookings.js');
const { Movies } = require('../persistence/Movies.js')


router.post('/create', (req, res, next) => {


    const booking = new MongoBookings(req.body);
    console.log(req.body);
    console.log(booking);


    booking.save()

    .then((result) => {
        res.status(201).send(`${result} saved to database!`);
    })

    .catch((error) => {

        next(error);
    });

});



router.get('/getAll', (req, res) => {

    console.log("getAll");
    MongoBookings.find((error, bookingList) => {
        if (error) {
            console.log(`error :( : ${error}`);
        }
        res.send(bookingList).status(202);
    })
})

module.exports = router;