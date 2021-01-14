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
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });
});

function addReview() {
  inquirer.prompt(questions.addReviewQuestions).then((answers) => {
    connection.query(
      `INSERT INTO allReviews (title, body, brand, carbonation, flavor, rating, user_name, email, createdAt, updatedAt) VALUES ("${answers.title}", "${answers.body}", "${answers.brand}", "${answers.carbonation}", "${answers.flavor}",  "${answers.rating}", "${answers.user_name}", "${answers.email}", current_timestamp(), CURRENT_TIMESTAMP);`,
      function (err) {
        if (err) throw err;
        const query = "SELECT * FROM allReviews";
        connection.query(query, (err, res) => {
          if (err) throw err;
          console.log(`
          ---------------------------------------------
          Your review was created successfully!
          ---------------------------------------------`);
          console.table(res);
          connection.end();
        });
      }
    );
  });
}
