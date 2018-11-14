const router = require("express").Router();
const bakeryController = require("../../controllers/bakeryController");

// Matches with "/api/bakery"
router.route('/').get(bakeryController.findAll)

module.exports = router;
