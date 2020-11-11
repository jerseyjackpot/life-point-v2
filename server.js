// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// Requiring passport as we've configured it
const passport = require("./config/passport");
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lifepoint', {useNewUrlParser: true});

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// adding an object the app, helps parse the data coming back
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
// require("./routes/html-routes.js")(app);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
require("./routes/api-routes.js")(app);

app.use(require('./routes/index.js'));

// Syncing our database and logging a message to the user upon success
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

