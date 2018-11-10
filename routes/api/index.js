const router = require("express").Router();
const coffeeRoutes = require("./coffee");
const cartRoutes = require("./cart")
const ordersRoutes = require('./orders')

// coffee routes
router.use("/coffee",coffeeRoutes,cartRoutes);

router.use("/cart",cartRoutes,ordersRoutes);

router.use("/orders",ordersRoutes,cartRoutes);

module.exports = router;
