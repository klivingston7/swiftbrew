const router = require("express").Router();
const teaController = require("../../controllers/teaController");

// Matches with "/api/tea"
router.route('/').get(teaController.findAll)

module.exports = router;
