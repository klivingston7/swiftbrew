import axios from "axios";

export default {
  // Gets all coffee
  getCoffee: function() {
    return axios.get("/api/coffee");
  },
  getBakery:function(){
    return axios.get("/api/bakery");
  },
  getFrappucino:function(){
    return axios.get("/api/frappucino")
  },
  getTea:function(){
    return axios.get("/api/tea")
  },
  // Deletes the item with the given id
  removeFromCart: function(id) {
    return axios.delete("/api/cart/" + id);
  },
  //sends item to cart
  addCoffeeToCart: function(cartData) {
    return axios.post("/api/cart", cartData);
  },
  getCart: function() {
    return axios.get("/api/cart");
  },
  removeAll: function() {
    return axios.delete("/api/cart");
  },
  getOrders: function() {
    return axios.get("/api/orders");
  },
  saveOrder: function(orderData) {
    return axios.post("/api/orders",orderData);
  },
  removeOrder: function(id) {
    return axios.delete("/api/orders/" + id)
  }
};
