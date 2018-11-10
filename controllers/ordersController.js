const db = require("../models");

// Defining methods for the CartController
module.exports = {
  getOrders: function(req, res) {
    db.SavedOrders
      .find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveOrder: function(req, res) {
    db.SavedOrders
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeOrder: function(req, res) {
    db.SavedOrders
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};