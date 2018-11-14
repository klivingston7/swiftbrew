import axios from "axios";

export default {
  // Gets all coffee
  getCoffee: function() {
    return axios.get("/api/coffee");
  },
  // Gets the coffee with the given id
  getOneCoffee: function(id) {
    return axios.get("/api/coffee/" + id);
  },
  // Deletes the coffee with the given id
  deleteCoffee: function(id) {
    return axios.delete("/api/coffee/" + id);
  },
  // Saves a coffee to the database
  saveCoffee: function(bookData) {
    return axios.post("/api/coffee", bookData);
  }
};
