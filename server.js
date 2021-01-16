// *** Dependencies================================================
const express = require("express");
require("dotenv").config();

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
  const flavor1 = db.Flavor.create({
    flavor: "Lime",
  }).then();

  const flavor2 = db.Flavor.create({
    flavor: "Peach",
  }).then();

  const flavor3 = db.Flavor.create({
    flavor: "Mango",
  }).then();

  const brand1 = db.Brand.create({
    brand_name: "Polar",
  }).then();

  const brand2 = db.Brand.create({
    brand_name: "Bubby",
  }).then();

  const brand3 = db.Brand.create({
    brand_name: "La Croix",
  }).then();

  const user = db.User.create({
    user_name: "ArenS",
  }).then();

  const carbonation = db.Bubbles.create({
    carbonation: true,
  }).then();

  const flat = db.Bubbles.create({
    carbonation: false,
  }).then();

  const rating1 = db.Rating.create({
    rating: true,
  }).then();

  const rating2 = db.Rating.create({
    rating: false,
  }).then();

  const allReviews = db.All_Reviews.create({
    brand: "Polar",
    carbonation: 1,
    flavor: "Cherry",
    title: "This sucks",
    body: "This is a terrible beverage",
    rating: true,
    user_name: "aren",
  });
});
