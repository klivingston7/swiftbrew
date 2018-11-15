const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
  order_name: {type: String, require: true, default:"SwiftSave"},
  items: [{
    product_name: {type: String},
    size: {type: String},
    price: {type: Number}
  }]

});

const SavedOrders = mongoose.model("SavedOrders", ordersSchema, "SavedOrders");

module.exports = SavedOrders;