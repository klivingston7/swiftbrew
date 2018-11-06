const router = require("express").Router();
const coffeeController = require("../../controllers/coffeeController");

// Matches with "/api/books"
router.route('/')
  .get(coffeeController.findAll)
  .post(coffeeController.create);

// Matches with "/api/coffee/:id"
router
  .route("/:id")
  .get(coffeeController.findById)
  .put(coffeeController.update)
  .delete(coffeeController.remove);

module.exports = router;
