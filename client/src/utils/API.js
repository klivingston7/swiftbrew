import axios from "axios";

export default {
  // Gets all coffee
  getCoffee: function() {
    return axios.get("/api/coffee");
  },
  // Gets the coffee with the given id
  // not using
  getOneCoffee: function(id) {
    return axios.get("/api/coffee/" + id);
  },
  // Deletes the coffee with the given id
  // not using
  removeFromCart: function(id) {
    return axios.delete("/api/cart/" + id);
  },
  // Saves a coffee to the database
  // not using
  saveCoffee: function(bookData) {
    return axios.post("/api/coffee", bookData);
  },
  //sends item to cart
  addCoffeeToCart: function(cartData) {
    return axios.post("/api/cart", cartData)
  },
  getCart: function() {
    return axios.get("/api/cart")
  }
};
