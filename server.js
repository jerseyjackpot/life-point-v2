// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
var compression = require('compression');
// const bodyParser = require("body-parser");
// Requiring passport as we've configured it
const passport = require("./config/passport");



// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// adding an object the app, helps parse the data coming back
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());

 
// function shouldCompress (req, res) {
//   if (req.headers['x-no-compression']) {
//     // don't compress responses with this request header
//     return false
//   }
 
//   // fallback to standard filter function
//   return compression.filter(req, res)
// }

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
