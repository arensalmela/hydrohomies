let db = require("../models");

module.exports = function (app) {
  //***find all reviews==================================
  app.get("/api/allReviews", function (req, res) {
    db.All_Reviews.findAll({}).then(function (dbAll_Reviews) {
      res.json(dbAll_Reviews);
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

  //***save new review to All_Reviews table==================================
  app.post("/api/new_review", function (req, res) {
    const answers = req.body;
    const pushReview = `INSERT INTO allReviews (title, body, brand, carbonation, flavor, rating, user_name, email, createdAt, updatedAt) VALUES ("${answers.title}", "${answers.body}", "${answers.brand}", "${answers.carbonation}", "${answers.flavor}",  "${answers.rating}", "${answers.user_name}", "${answers.email}", current_timestamp(), CURRENT_TIMESTAMP);`;

    const allReviews = db.All_Reviews.create(answers).then((results) =>
      res.json(results)
    );
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
