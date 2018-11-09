const router = require("express").Router();
const cartController = require("../../controllers/cartController");

// Matches with "/api/cart"
router.route('/')
  .get(cartController.getCart)
  .post(cartController.addCoffeeToCart);

// Matches with "/api/cart/:id"
router
  .route("/:id")
  .put(cartController.update)
  .delete(cartController.remove);

module.exports = router;
