const router = require("express").Router();
const { MongoBookings } = require("../persistence/MongoBookings.js");
const { Movies } = require("../persistence/Movies.js");
const { Discussion } = require("../persistence/Discussion");

router.post("/create", (req, res, next) => {
  const booking = new MongoBookings(req.body);
  console.log(req.body);
  console.log(booking);

  booking
    .save()

    .then((result) => {
      res.status(201).send(`${result} saved to database!`);
    })

    .catch((error) => {
      next(error);
    });
});

router.post("/direct", (req, res, next) => {
  const movie = new Movies(req.body);
  console.log(req.body);
  console.log(movie);

  movie
    .save()

    .then((result) => {
      res.status(201).send(`${result} saved to database!`);
    })

    .catch((error) => {
      next(error);
    });
});

router.get("/getAll", (req, res) => {
  console.log("getAll");
  MongoBookings.find((error, bookingList) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.send(bookingList).status(202);
  });
});

router.get("/watchAll", (req, res) => {
  console.log("watchAll");
  Movies.find((error, bookingList) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.send(bookingList).status(202);
  });
});

router.post("/createComment", (req, res, next) => {
  const discussion = new Discussion(req.body);

  discussion
    .save()

    .then((result) => {
      res.status(201).send(`${result} saved to database!`);
    })

    .catch((error) => {
      next(error);
    });
});
router.get("/getCommentName/:userName", (req, res) => {
  const name = req.params.name;

  Discussion.find({ userName: name }, (error, result) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.status(200).send(result);
  });
});
router.delete("/deleteCommentId/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Discussion.findByIdAndDelete(id, (error) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.status(202).send("Deleted!");
  });
});
router.get("/getComment/:comment", (req, res) => {
  const comment = req.params.comment;

  Discussion.find({ comment: comment }, (error, result) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.status(200).send(result);
  });
});
router.put("/updateComment/:id", (req, res) => {
  const id = req.params.id;
  const discussion = new Discussion(req.body);

  discussion.updateOne({ _id: id }, (error, result) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.status(202).send("Updated");
  });
});

module.exports = router;
