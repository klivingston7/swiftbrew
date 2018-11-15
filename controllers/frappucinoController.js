const db = require("../models");


// Defining methods for the FrappucinoController
module.exports = {
  findAll: function(req, res) {
    db.Frappucino
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
