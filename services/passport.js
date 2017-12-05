const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      //console.log("accessToken : ", accessToken);
      //console.log("refreshToken : ", refreshToken);
      console.log("************************************");
      console.log("profile : ", profile);
      console.log("************************************");
    }
  )
);
