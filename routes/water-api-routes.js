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

  //***find all bubbles==================================
  app.get("/api/bubbles", function (req, res) {
    db.Bubbles.findAll({}).then(function (dbBubbles) {
      res.json(dbBubbles);
    });
  });

  //***find all ratings==================================
  app.get("/api/rating", function (req, res) {
    db.Rating.findAll({}).then(function (dbRating) {
      res.json(dbRating);
    });
  });

  //***add new brand==================================
  app.post("/api/brands", function (req, res) {
    console.log(req.body.brand_name);

    db.Brand.create({ brand_name: req.body.brand_name })
    .then(function (dbBrand) {
      res.json(dbBrand);
    });
  });

  //***add new flavor==================================
  app.post("/api/flavors", function (req, res) {
    db.Flavor.create({flavor: req.body.flavor})
    .then(function (dbFlavor) {
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
