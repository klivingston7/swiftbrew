const router = require("express").Router();
const frappucinoController = require("../../controllers/frappucinoController");

// Matches with "/api/coffee"
router.route('/').get(frappucinoController.findAll)

module.exports = router;
