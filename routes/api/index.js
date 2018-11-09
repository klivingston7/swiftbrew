const router = require("express").Router();
const coffeeRoutes = require("./coffee");
const cartRoutes = require("./cart")

// coffee routes
router.use("/coffee",coffeeRoutes,cartRoutes);
// router.use(["/coffee","/cart"], cartRoutes);
// router.use("/coffee",cartRoutes);
// router.use("/coffee",coffeeRoutes);
router.use("/cart",cartRoutes);

module.exports = router;
