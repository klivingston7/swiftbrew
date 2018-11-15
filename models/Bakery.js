const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bakerySchema = new Schema({
  product_picture: { type: String, default: "/images/Placeholder.png" },
  product_category: { type: String, default: "Bakery" },
  product_name: { type: String, required: true },
  daily: Number,
  dailyCal: Number
});

const Bakery = mongoose.model("Bakery", bakerySchema, "Bakery");

module.exports = Bakery;
