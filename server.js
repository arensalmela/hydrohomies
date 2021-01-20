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

  const allReviews1 = db.All_Reviews.create({
    brand: "Polar",
    carbonation: 1,
    flavor: "Cherry",
    title: "This sucks",
    body: "This is a terrible beverage",
    rating: true,
    user_name: "aren",
  });

  const allReviews2 = db.All_Reviews.create({
    brand: "Bubly",
    carbonation: 0,
    flavor: "Lime",
    title: "So great",
    body: "I love it",
    rating: false,
    user_name: "mike",
  });

  const allReviews4 = db.All_Reviews.create({
    brand: "La Croix",
    carbonation: 1,
    flavor: "Peach",
    title: "Wow this is good",
    body:
      "I am floored at how great this is. Everyone should have to opportunity to drink something so pure in their lifetime.",
    rating: false,
    user_name: "sean",
  });

  const allReviews5 = db.All_Reviews.create({
    brand: "La Croix",
    carbonation: 1,
    flavor: "Mango",
    title: "No Mango Please",
    body:
      "Drinking this was possibly the worst decision of my life, and I willingly bought crocs.",
    rating: true,
    user_name: "ben",
  });

  const allReviews6 = db.All_Reviews.create({
    brand: "La Croix",
    carbonation: 1,
    flavor: "Mango",
    title: "No Mango Please",
    body:
      "That imposter is crazy. The Mango flavor pairs nicely with succuss and love, two things the other Ben has obviously never experienced. I have no opinion on the crocs matter, but I do hope the FAKE BEN finds happiness.",
    rating: false,
    user_name: "therealben",
  });

  const allReviews7 = db.All_Reviews.create({
    brand: "Bubly",
    carbonation: 0,
    flavor: "Peach",
    title: "Back Again",
    body:
      "I though I loved the lime flavor, but oh boy have I fallen for peach. I AM BECOME WATER, NOURISHER OF LIFE.",
    rating: false,
    user_name: "mike",
  });

  const allReviews8 = db.All_Reviews.create({
    brand: "Polar",
    carbonation: 0,
    flavor: "Peach",
    title: "Gross",
    body:
      "My husband bought these for the house. They rotted all our teeth and everyone, even my children, have to wear denchers. I'm getting a divorce lawyer.",
    rating: true,
    user_name: "Sue",
  });

  const allReviews9 = db.All_Reviews.create({
    brand: "Polar",
    carbonation: 1,
    flavor: "Mango",
    title: "Meh",
    body:
      "I'm only here for the strawberry background. Looking good strawberry!",
    rating: false,
    user_name: "Pat",
  });

  const allReviews10 = db.All_Reviews.create({
    brand: "Bubly",
    carbonation: 0,
    flavor: "Mango",
    title: "Flat",
    body:
      "I've been drinking this for years and have been pleased - I love the way the bubble make my tongue feel. To my surprise there were no bubbles in my recent can. This was unpleasant and my tongue felt dryer than usual. I'll try again but please don't let me down again. Also, I agree with the REAL BEN, and I too have no opinion on the crox situation.",
    rating: true,
    user_name: "Pat",
  });

  const allReviews11 = db.All_Reviews.create({
    brand: "Polar",
    carbonation: 1,
    flavor: "Cherry",
    title: "This sucks",
    body: "I am here again to day that I am not happy.",
    rating: true,
    user_name: "aren",
  });
});
