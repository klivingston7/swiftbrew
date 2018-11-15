const db = require("../models");


// Defining methods for the TeaController
module.exports = {
  findAll: function(req, res) {
    db.Tea
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
