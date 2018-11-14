const router = require("express").Router();
const coffeeRoutes = require("./coffee");
const cartRoutes = require("./cart");
const ordersRoutes = require('./orders');
const bakeryRoutes = require('./bakery');
const frappucinoRoutes = require('./frappucino');
const teaRoutes = require('./tea');

// coffee routes
router.use("/coffee",coffeeRoutes,cartRoutes);
router.use("/bakery",bakeryRoutes,cartRoutes);
router.use("/frappucino",frappucinoRoutes,cartRoutes);
router.use("/tea",teaRoutes,cartRoutes)

router.use("/cart",cartRoutes,ordersRoutes);

router.use("/orders",ordersRoutes,cartRoutes);

module.exports = router;
