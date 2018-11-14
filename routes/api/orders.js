const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/orders"
router.route('/')
  .get(ordersController.getOrders)
  .post(ordersController.saveOrder);

// Matches with "/api/orders/:id"
router
  .route("/:id")
  .delete(ordersController.removeOrder);

module.exports = router;
