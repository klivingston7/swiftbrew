const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  product_name: { type: String, required: true },
  size: {type: String, required: true},
  price: {type: Number, required: true}
});

const Cart = mongoose.model("Cart", cartSchema, "Cart");

module.exports = Cart;
