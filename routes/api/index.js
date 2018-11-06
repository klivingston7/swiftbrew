const router = require("express").Router();
const coffeeRoutes = require("./coffee");

// coffee routes
router.use("/coffee", coffeeRoutes);

module.exports = router;
