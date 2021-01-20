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
      res.json({ message: "Review was created successfully" });
    });
  });

  //***delete one post==================================
  app.delete("/api/delete_review/:id", function (req, res) {
    db.All_Reviews.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbAll_Reviews) {
      res.json(dbAll_Reviews);
    });
  });


};


//***filter reviews==================================
 //app.get("/api/filterBrand", function (req, res){
   //db.All_Reviews.findAll({
     //where: {
        //brand: filterBrand 

     //}
   //})
 //})