const bCrypt = require('bcrypt');
const LocalStrategy = require("passport-local").Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const TwitterStrategy = require('passport-twitter').Strategy;
// const GoogleStrategy = require('passport-google').Strategy;

// require('dotenv').config();

module.exports = function (passport, user) {
  passport.serializeUser(function (user, done) {
    console.log("Serialize User", user);
    done(null, user.id);
  });
  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    const Users = user;
    Users.findOne({_id:id}).then(function(error,user){
      if(error){
        return done(null, error)
      }
      return done(null, user)
    })

  });
  //LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(

    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, email, password, done) {
      console.log(email)
      console.log(req.body.email)
      const Users = user;
      Users.findOne({ email:req.body.email }).then(function (user) {
        user.comparePassword(req.body.password, function(error, response){
          if(error){
            return done(null, error)
          }
          return done(null, user)
        })
      })
    }
  ));

  //FACEBOOK SIGNIN
//   passport.use("facebook", new FacebookStrategy({
//     clientID: 'FACEBOOK_APP_KEY',
//     clientSecret: 'FACEBOOK_APP_SECRET',
//     callbackURL: "http://localhost:3001/auth/facebook/callback",
//     profileFields: ['id', 'displayName', 'photos', 'email']
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log("Facebook Profile ", profile);
//     return cb(null, "lol");
//   }
//   ));

// passport.use("twitter", new TwitterStrategy({
//     consumerKey: 'TWITTER_APP_KEY',
//     consumerSecret: 'TWITTER_APP_SECRET',
//     callbackURL: "http://localhost:3001/auth/twitter/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log("Twitter Profile ", profile);
//     return cb(null, profile);
// }
// ));

// passport.use("google", new GoogleStrategy({
//     consumerKey: 'GOOGLE_APP_KEY',
//     consumerSecret: 'GOOGLE_APP_SECRET',
//     returnURL: "http://localhost:3001/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log("Google Profile ", profile);
//     return cb(null, profile);
// }
// ,))

};