const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const frappucinoSchema = new Schema({
  product_picture: { type: String, default: "/images/Placeholder.png" },
  product_category: { type: String, default: "Frappucino" },
  product_type: String,
  product_name: { type: String, required: true },
  social: Number,
  socialCal: Number,
  daily: Number,
  dailyCal: Number,
  kick: Number,
  kickCal: Number
});

const Frappucino = mongoose.model("Frappucino", frappucinoSchema, "Frappucino");

module.exports = Frappucino;
