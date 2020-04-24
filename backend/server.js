const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express');
const session = require('express-session')
const passport = require('passport');
const passportLocal = require('passport-local');

const model = require('./model')
const app = express();

const port = process.env.PORT || 3001;

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static('public'));
app.use(session({ secret: 'lkjfnvlieogdcurbyrp', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());


//passport configuration
passport.use(new passportLocal.Strategy({
  usernameField: 'email',
  passwordField: 'plainPassword'
}, function(email, plainPassword, done) {
  model.User.findOne({email: email }).then(function (user) {
    if (!user) {
      return done(null, false);
    } else {
      user.verifyPassword(plainPassword, function (result) {
        if (result) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  }).catch(function (err) {
    done(err);
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(userId, done) {
  model.User.findOne({_id: userId}).then(function(user) {
    done(null, user);
  }).catch(function(err) {
    done(err)
  });
});

app.post('/session', passport.authenticate('local'), function(req, res) {
  // auth success, user logged in.
  res.sendStatus(201);
});

app.delete('/session', function (req, res) {
  //Authentication succeeded
  req.logOut()
  res.sendStatus(200)
})

app.get('/session', function (req, res) {
  if (req.user) {
    res.json(req.user)
  } else {
    res.sendStatus(401)
  }
})

app.post('/questions', function (req, res) {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", req.body.name, "!!!!!!!!!!!!!!")
    //create an instance of the mongoose model
    let question = new model.Questions({
      title1: req.body.title1,
      title2: req.body.title2,
      title3: req.body.title3,
      
      // physicalSkills: req.body.physicalSkills,
      // technicalSkills: req.body.technicalSkills
    });
    //Insert into mongoose model
    question.save().then(function () {
      // res.set("Access-Control-Allow-Origin", "*")
      res.sendStatus(201)
    }).catch(function (err) {
      
      if (err.errors) {

        var messages = {};
        for (let e in err.errors) {
          messages[e] = err.errors[e].message;
        }
        res.sendStatus(422).json(messages);
      } else {
        res.sendStatus(500);
      }

    })
});

app.get('/questions', function (req, res) {
  console.log("user/////////////////////////////////////", req.user)
  // if (!req.user) {
  //   res.sendStatus(401);
  //   return
  // }
  res.set("Access-Control-Allow-Origin", "*")
  model.Questions.find({}).then( (questions) => {
  res.json(questions);
  });
  // query the mongoose model
});

// app.post('/questions', function (req, res) {
//   // if (!req.user) {
//   //   res.sendStatus(401);
//   //   return
//   // }

//   console.log("the body", req.body);
//   res.set("Access-Control-Allow-Origin", "*")

//   // create an instance of the mongoose model
//   let questions = new model.Questions({
//     questionTitle1: req.body.questionTitle1,
//     questionTitle2: req.body.questionTitle2,
//     questionTitle3: req.body.questionTitle3,
//   });

app.get('/surveyAnswers', function (req, res) {
  console.log("userssssssssssssssss", req.user)
  // if (!req.user) {
  //   res.sendStatus(401);
  //   return
  // }
  res.set("Access-Control-Allow-Origin", "*")
  model.SurveyAnswers.find({}).then( (surveyAnswers) => {
    console.log('here ye here', surveyAnswers)
  res.json(surveyAnswers);
  });
  // query the mongoose model
});

app.post('/surveyAnswers', function (req, res) {
  console.log("survvevvvvvvvvvv///////////////////////////////ey answers")
  // if (!req.user) {
  //   res.sendStatus(401);
  //   return
  // }
  console.log("the body", req.body);
  res.set("Access-Control-Allow-Origin", "*")

  // create an instance of the mongoose model
  let surveyAnswers = new model.SurveyAnswers({
    roomNumber: req.body.roomNumber,
    question1: req.body.question1,
    question2: req.body.question2,
    question3: req.body.question3,
    rating: req.body.rating,
    date: req.body.date
    
  });
  // insert into the mongoose model
  surveyAnswers.save().then(function () {
    res.sendStatus(201);
  }).catch(function (err) {
    if (err.errors) {
      var messages = {};
      for (let e in err.errors) {
        messages[e] = err.errors[e].message;
      }
      res.status(422).json(messages);
    } else {
      res.sendStatus(500);
    }
  });
});

app.post('/users', function (req, res) {
  console.log("made it to user post!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!____________________________________");
  res.set("Access-Control-Allow-Origin", "*")
  // create an instance of the mongoose model
  let user = new model.User({
    email: req.body.email
  });

  user.setEncryptedPassword(req.body.plainPassword, function() {
    user.save().then(function() {
      res.sendStatus(201);
    }).catch(function(err) {
      if (err.errors) {
        var messages = {};
        for (let e in err.errors) {
          messages[e] = err.errors[e].message;
        }
        res.status(422).json(messages);
      } else {
        res.sendStatus(500);
      } 
    });
  });
});



app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);  
});

