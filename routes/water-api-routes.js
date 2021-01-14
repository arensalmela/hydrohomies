let db = require("../models");

module.exports = function (app) {
  //***find all brands==================================
  app.get("/api/brands", function (req, res) {
    db.Brand.findAll({}).then(function (dbBrand) {
      res.json(dbBrand);
    });
  });

  //***find all flavors==================================
  app.get("/api/flavors", function (req, res) {
    db.Flavor.findAll({}).then(function (dbFlavor) {
      res.json(dbFlavor);
    });
  });


  //***find one brand==================================
  app.get("/api/brands/:id", function (req, res) {
    db.Brand.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (dbBrand) {
      res.json(dbBrand);
    });
  });

  //***find one flavor==================================
  app.get("/api/flavors/:id", function (req, res) {
    db.Flavor.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (dbBrand) {
      res.json(dbBrand);
    });
  });

  //***add new brand==================================
  app.post("/api/brands", function (req, res) {
    db.Brand.create(req.body).then(function (dbBrand) {
      res.json(dbBrand);
    });
  });

  //***add new flavor==================================
  app.post("/api/flavors", function (req, res) {
    db.Flavor.create(req.body).then(function (dbFlavor) {
      res.json(dbFlavor);
    });
  });

  //***delete a brand==================================
  app.delete("/api/Brands/:id", function (req, res) {
    db.Brand.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbBrand) {
      res.json(dbBrand);
    });
  });

  //***delete a flavor==================================
  app.delete("/api/flavors/:id", function (req, res) {
    db.Flavor.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbFlavor) {
      res.json(dbFlavor);
    });
  });
};
