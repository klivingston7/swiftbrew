const db = require("../models");


// Defining methods for the CoffeeController
module.exports = {
  findAll: function(req, res) {
    db.Coffee
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
