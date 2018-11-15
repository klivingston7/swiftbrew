const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teaSchema = new Schema({
  product_picture: { type: String, default: "/images/Placeholder.png" },
  product_category: { type: String, default: "Tea" },
  product_type: String,
  product_name: { type: String, required: true },
  social: Number,
  socialCal: Number,
  daily: Number,
  dailyCal: Number,
  kick: Number,
  kickCal: Number
});

const Tea = mongoose.model("Tea", teaSchema, "Tea");

module.exports = Tea;
