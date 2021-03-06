let path = require("path");

module.exports = function (app) {
  //*** loads sign in page
  app.get("/login", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });

  //*** loads new review page
  app.get("/new_post", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/newPost.html"));
  });

  //*** loads reviews page
  app.get("/reviews", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/posts.html"));
  });

  //*** loads suggestion us page
  app.get("/suggestion", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/suggestion.html"));
  });
};
