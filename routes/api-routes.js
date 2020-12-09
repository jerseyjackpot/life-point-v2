// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const parseBool = str => str === "true" || str === "1";
const dateFns = require("date-fns");

module.exports = function (app) {

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      _id: req.user._id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    console.log("Sign Up Route Hit", req.body)
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then((data) => {
        console.log("signup it worked!");
        res.json({ email: data.email });
      })
      .catch(err => {
        console.log("something went wrong")
        res.status(401).json(err);
      });
  });

  // API call for posting a new journal entry
  app.post("/api/entry", (req, res) => {
    console.log("entry route hit", req.body);
    // Creates the journal first
    let id = 0;
    if (req.user) {
      id = req.user._id;
    }

    db.Entry.create({
      mood: parseInt(req.body.mood),
      medication: parseBool(req.body.medication),
      hoursSleep: parseInt(req.body.hoursSleep),
      minutesExercise: parseInt(req.body.minutesExercise),
      minutesNapping: parseInt(req.body.minutesNapping),
      servingsCaffeine: parseInt(req.body.servingsCaffeine),
      servingsAlcohol: parseInt(req.body.servingsAlcohol),
      hoursTV: parseInt(req.body.hoursTV),
      showered: parseBool(req.body.showered),
      brushedTeeth: parseBool(req.body.brushedTeeth),
      selfCare: parseBool(req.body.selfCare),
      minutesSocial: parseInt(req.body.minutesSocial),
      headache: parseBool(req.body.headache),
      nausea: parseBool(req.body.nausea),
      exhaustion: parseBool(req.body.exhaustion),
      insomnia: parseBool(req.body.insomnia),
      appetite: parseBool(req.body.appetite),
      menstruation: parseBool(req.body.menstruation),
      gratefulEntryOne: req.body.gratefulEntryOne,
      gratefulEntryTwo: req.body.gratefulEntryTwo,
      gratefulEntryThree: req.body.gratefulEntryThree,
      gratefulEntryFour: req.body.gratefulEntryFour,
      gratefulEntryFive: req.body.gratefulEntryFour,
      journalEntry: req.body.journalEntry,
      journalEntryDate: req.body.journalEntryDate,
      remember: [req.body.rememberEntryOne,
      req.body.rememberEntryTwo,
      req.body.rememberEntryThree,
      req.body.rememberEntryFour,
      req.body.rememberEntryFive],
      userId: id


    }).then(data => {
      console.log(data);
      // const EntryId = data._id;
      // res.json({ data });
      res.json({
        userId: parseInt(data.userId),
        remember: data.remember,
        mood: data.mood,
        medication: data.medication,
        hoursSleep: data.hoursSleep,
        minutesExercise: data.minutesExercise,
        minutesNapping: data.minutesNapping,
        minutesSocial: data.minutesSocial,
        servingsAlcohol: data.servingsAlcohol,
        servingsCaffeine: data.servingsCaffeine,
        hoursTV: data.hoursTV,
        showered: data.showered,
        brushedTeeth: data.brushedTeeth,
        selfCare: data.selfCare,
        headache: data.headache,
        nausea: data.nausea,
        exhaustion: data.exhaustion,
        insomnia: data.insomnia,
        appetite: data.appetite,
        menstruation: data.menstruation,
        gratefulEntryOne: data.gratefulEntryOne,
        gratefulEntryTwo: data.gratefulEntryTwo,
        gratefulEntryThree: data.gratefulEntryThree,
        gratefulEntryFour: data.gratefulEntryFour,
        gratefulEntryFive: data.gratefulEntryFive,
        journalEntry: data.journalEntry,
        journalEntryDate: data.journalEntryDate
      });

    })
      .catch(err => {
        console.log("something went wrong")
        res.status(401).json(err);
      })



  });

  // API call to get the calendar data
  app.get("/api/calendar", function (req, res) {
    // Gets the data for each mood based on the journal and UserId they are tied to
    db.Mood.findAll({
      include: [
        {
          model: db.Journal,
          where: { UserId: req.user.id }
        }]
    }).then(function (dbJournal) {
      res.json(dbJournal);
    });
  });

  /*app.get("/api/entry", function (req, res) {
    // Gets the data for each mood based on the journal and UserId they are tied to
    const date = req.query.date
    //use req.body to find the date that we passed in
    // then use moment.js to break out the day month year into variables
    // pass those into the new Dates on 124 and new Year + 1 
    console.log("api routes")
    console.log(date)
    // db.Entry.findAll({
    //   include: [
    //     {
    //       model: db.Journal,
    //       where: { UserId: req.user.id }
    //     }]
    // }).then(function (dbJournal) {
    //   res.json(dbJournal);
    // });
    // db.Entry.find( //query today up to tonight
    //   {"journalEntryDate": {"$gte": new Date(2012, 7, 14), "$lt": new Date(2012, 7, 15)}})




    db.Entry.find( //query today up to tonight

      {
        userId: req.user._id,

        journalEntryDate: {
          $gte: dateFns.startOfDay(new Date(date)),
          $lte: dateFns.endOfDay(new Date(date))
        }
      }



    ).then(function (results) {
      console.log("results", results)
      res.json(results)
    })
  });*/
  app.get("/api/entry/:dateUnix", (req, res) => {
    let startDate = new Date(parseInt(req.params.dateUnix));
    console.log(startDate);
    let endDate = new Date(parseInt(req.params.dateUnix) + (1000 * 60 * 60 * 24));
    console.log(endDate);
    db.Entry.find( //query today up to tonight

      {
        userId: req.user._id,

        journalEntryDate: {
          $gte: startDate.toISOString().substr(0,10),
          $lte: endDate.toISOString().substr(0,10)

        }
      }



    ).then(function (results) {
      console.log("results", results)
      res.json(results)
    })
    .catch(function (err){
      console.log(err)
      res.json(err);
    })


  });


  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.json(true);
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      console.log(req.user.email);
      console.log(req.user._id);
      res.json({
        email: req.user.email,
        _id: req.user._id
      });
    }
  });
  app.get("/api/affirmation", function (req, res) {
    db.Affirmation.count().exec(function (err, count) {
      let random = Math.floor(Math.random() * count);

      db.Affirmation.findOne({}).skip(random).then(function (postAffirm) {
        res.json(postAffirm)
      })
    })

  })
};
