const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  order_name: {type: String, require: true},
  product_name1: { type: String, required: true },
  size1: {type: String, required: true},
  price1: {type: Number, required: true},
  product_name2: { type: String},
  size2: {type: String},
  price2: {type: Number},
  product_name3: { type: String},
  size3: {type: String},
  price3: {type: Number},
  product_name4: { type: String},
  size4: {type: String},
  price4: {type: Number},
  product_name5: { type: String},
  size5: {type: String},
  price5: {type: Number},
  product_name6: { type: String},
  size6: {type: String},
  price6: {type: Number},
  product_name7: { type: String},
  size7: {type: String},
  price7: {type: Number},
  product_name8: { type: String},
  size8: {type: String},
  price8: {type: Number},
  product_name9: { type: String},
  size9: {type: String},
  price9: {type: Number},
  product_name10: { type: String},
  size10: {type: String},
  price10: {type: Number},
  product_name11: { type: String},
  size11: {type: String},
  price11: {type: Number},
  product_name12: { type: String},
  size12: {type: String},
  price12: {type: Number},
  product_name13: { type: String},
  size13: {type: String},
  price13: {type: Number},
  product_name14: { type: String},
  size14: {type: String},
  price14: {type: Number},
  product_name15: { type: String},
  size15: {type: String},
  price15: {type: Number},
  product_name16: { type: String},
  size16: {type: String},
  price16: {type: Number},
  product_name17: { type: String},
  size17: {type: String},
  price17: {type: Number},
  product_name18: { type: String},
  size18: {type: String},
  price18: {type: Number},
  product_name19: { type: String},
  size19: {type: String},
  price19: {type: Number},
  product_name20: { type: String},
  size20: {type: String},
  price20: {type: Number}

});

const SavedOrders = mongoose.model("SavedOrders", ordersSchema, "SavedOrders");

module.exports = SavedOrders;