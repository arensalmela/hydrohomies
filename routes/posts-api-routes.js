let db = require("../models");

module.exports = function (app) {
  //***find all posts==================================
  app.get("/api/posts", function (req, res) {
    let query = {};
    if (req.query.brand_id) {
      query.BrandId = req.query.brand_id;
    }
    db.Post.findAll({
      where: query,
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  //***find one post==================================
  app.get("/api/posts/:id", function (req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (dbPost) {
      console.log(dbPost);
      res.json(dbPost);
    });
  });

  //***save new post==================================
  app.post("/api/posts", function (req, res) {
    db.Post.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  //***delete one post==================================
  app.delete("/api/posts/:id", function (req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  //***update one post==================================
  app.put("/api/posts", function (req, res) {
    db.Post.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function (dbPost) {
      res.json(dbPost);
    });
  });
};
