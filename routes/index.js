const path = require("path");
const passport = require("passport");
const router = require("express").Router();
const apiRoutes = require("./api");
const db = require("../models");
// API Routes
router.use("/api", apiRoutes);
router.post("/login", passport.authenticate("local-signin"), function(req, res){
  console.log("REQ USER LOGIN", req.user);
  res.json({success:true, user:req.user});
})
router.get("/facebook", passport.authenticate("facebook"))
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    console.log("REQ USER LOGIN", req.user);
    res.json({success:true, user:req.user});
  });
router.get("/twitter", passport.authenticate("twitter"), function(req,res){
  console.log("REQ USER LOGIN", req.user);
  res.json({success:true, user:req.user});
})
router.get("/google", passport.authenticate("google"), function(req,res){
  console.log("REQ USER LOGIN", req.user);
  res.json({success:true, user:req.user});
})
router.post("/signup", function(req, res){
  let userInfo = {
    email:req.body.email,
    password:req.body.password
  }
  console.log(userInfo)
  db.Users.create(userInfo).then(function(response){
    res.json(response);
  })
})

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
