let db = require("../models");

module.exports = function (app) {
  //***find all reviews==================================
  app.get("/api/allReviews", function (req, res) {
    db.All_Reviews.findAll({}).then(function (dbAll_Reviews) {
      res.json(dbAll_Reviews);
    });
  });

  //***save new post==================================
  app.post("/api/posts", function (req, res) {
    db.Post.create(req.body).then(function (dbPost) {
      res.json(dbPost);
    });
  });

  //***save new review to allReviews table==================================
  app.post("/api/new_review", function (req, res) {
    console.log(req.body);

    db.All_Reviews.create({
      brand: req.body.brand,
      flavor: req.body.flavor,
      bubbles: req.body.bubbles,
      rating: req.body.rating,
      title: req.body.title,
      body: req.body.body,
      user_name: req.body.user_name,
    }).then(function (results) {
      console.log(results);
      res.json({ message: "Great Job" });
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

// app.post("/api/new_review", function (req, res) {
//   const answers = req.body;
//   const pushReview = `INSERT INTO All_Reviews (title, body, brand, carbonation, flavor, rating, user_name, createdAt, updatedAt) VALUES ("${answers.title}", "${answers.body}", "${answers.brand}", "${answers.carbonation}", "${answers.flavor}",  "${answers.rating}", "${answers.user_name}", current_timestamp(), CURRENT_TIMESTAMP);`;

//   const allReviews = db.All_Reviews.create(answers).then((results) =>
//     res.json(results)
//   );
// });
