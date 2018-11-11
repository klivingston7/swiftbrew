const router = require("express").Router();
const coffeeController = require("../../controllers/coffeeController");

// Matches with "/api/coffee"
router.route('/').get(coffeeController.findAll)

module.exports = router;
