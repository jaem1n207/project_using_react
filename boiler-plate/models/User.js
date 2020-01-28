const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    require: [true, "Username is required!"]
  },
  email: {
    type: String,
    trim: true,
    unique: 1
  },
  password: {
    type: String,
    minlength: 5,
    require: [true, "Password is required!"]
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

userSchema.pre("save", function(next) {
  var user = this;

  // 비밀번호가 변경될 때만 해쉬해준다.
  if (user.isModified("password")) {
    // 비밀번호 암호화
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(plainPassword, callback) {
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

userSchema.methods.generateToken = function(callback) {
  var user = this;
  // jswebtoken을 이욯해 token생성.
  var token = jwt.sign(user._id.toHexString(), "secret");

  user.token = token;
  user.save(function(err, user) {
    if (err) return callback(err);
    callback(null, user);
  });
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
