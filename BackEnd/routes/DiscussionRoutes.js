const router = require("express").Router();

const { Discussion } = require("../persistence/Discussion");

router.post("/create", (req, res, next) => {
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
router.get("/getName/:name", (req, res) => {
  const name = req.params.name;

  Discussion.find({ userName: name }, (error, result) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.status(200).send(result);
  });
});
router.delete("/deleteId/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  Lizard.findByIdAndDelete(id, (error) => {
    if (error) {
      console.log(`error :( : ${error}`);
    }
    res.status(202).send("Deleted!");
  });
});
