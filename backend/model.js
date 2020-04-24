const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb+srv://dylan:Rho26zIUaKc2rcOQ@ddinehart-kqodd.mongodb.net/Hotel?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true });

var Questions = mongoose.model('Questions', {
  title1: {
    type: String,
  },
  title2: {
    type: String,
  },
  title3: {
    type: String,
  },
});

var SurveyAnswers = mongoose.model('SurveyAnswers', {
  roomNumber: {
    type: Number,
    required: true,
  },
  question1: {
    type: String,
    required: true,
  },
  question2: {
    type: String,
    required: true,
  },
  question3: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  
})

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email must be provided"],
    unique: true
  },
  encryptedPassword: {
    type: String,
    required: true,
  }
});

userSchema.methods.setEncryptedPassword = function (plainPassword, callbackFunction) {
  bcrypt.hash(plainPassword, 12).then(hash => {
    this.encryptedPassword = hash;
    callbackFunction();
  });
};

userSchema.methods.verifyPassword = function (plainPassword, callbackFunction) {
  bcrypt.compare(plainPassword, this.encryptedPassword).then(result => {
    callbackFunction(result);
  });
};

var User = mongoose.model('User', userSchema);

module.exports = {
    SurveyAnswers: SurveyAnswers,
    Questions: Questions,
    User: User
};