const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
  product_picture: { type: String, default: "/images/Placeholder.png" },
  product_category: { type: String, default: "Coffee" },
  product_type: String,
  product_name: { type: String, required: true },
  social: Number,
  socialCal: Number,
  daily: Number,
  dailyCal: Number,
  kick: Number,
  kickCal: Number
});

const Coffee = mongoose.model("Coffee", coffeeSchema, "Coffee");

module.exports = Coffee;
