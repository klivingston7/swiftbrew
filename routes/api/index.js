const router = require("express").Router();
const shoppingRoutes = require("./shoppingCart");

// coffee routes
router.use("/coffee", shoppingRoutes);

module.exports = router;
