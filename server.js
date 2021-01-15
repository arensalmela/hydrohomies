// *** Dependencies================================================
let express = require("express");
// let msql2 = require("mysql2");
// let sequelize = require("sequelize");
require("dotenv").config();
const inquirer = require("inquirer");
const questions = require("./questions");

// *** Sets up the Express App=======================================
let app = express();
let PORT = process.env.PORT || 8080;

// Requiring our models for syncing
let db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// *** Routes========================================================
require("./routes/html-routes.js")(app);
require("./routes/reviews-api-routes.js")(app);
require("./routes/water-api-routes.js")(app);

// *** Syncing our sequelize models and then starting our Express app
// *** =============================================================
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
  const flavor = db.Flavor.create({
    flavor: "Lime",
  }).then();

  const brand = db.Brand.create({
    flavor: "Polar",
  }).then();

  const user = db.User.create({
    user_name: "ArenS",
    email: "aren@email.com",
  }).then();

  const carbonation = db.Bubbles.create({
    carbonation: 1,
  }).then();

  const flat = db.Bubbles.create({
    carbonation: 2,
  }).then();

  const allReviews = db.All_Reviews.create({
    brand: "Polar",
    carbonation: 1,
    flavor: "Cherry",
    title: "This sucks",
    body: "This is a terrible beverage",
    rating: 1,
    user_name: "aren",
    email: "aren@email.com",
  });
});
