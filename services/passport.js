const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const mongoose = require("mongoose");

const User = mongoose.model("Users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      /* console.log("************************************");
      console.log("profile : ", profile);
      console.log("************************************"); */

      User.findOne({ googleId: profile.id }).then(existingUser => {
        console.log(existingUser);
        if (existingUser) {
          console.log("User already exists");
          done(null, existingUser);
        } else {
          console.log("User not found. Creating new user");
          new User({ googleId: profile.id })
            .save()
            .then(newUser => done(null, newUser));
        }
      });
    }
  )
);
