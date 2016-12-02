
/** File Name: index.js
Author's Name: Vaishali Sareen
WebSite Name: https://productapplication.herokuapp.com/
File Description:This js file is the default controller for the user **/
var express = require('express');
var router = express.Router();



//link to the account model
var Account = require('../models/account');

//link to the passport packages
var passport = require('passport');
var flash = require('connect-flash');

/* to get the home page **/
router.get('/', function(req, res, next)
{
  res.render('index',
      {
        title: 'Inventory Record',
        user: req.user
      });
});

/* to get the about page **/
router.get('/about', function(req, res, next)
{
    res.render('about',
        {
            title: '',
            user: req.user
        });
});


/* to get the register page which allows the user to register to the app**/
router.get('/register', function(req, res, next)
{
    res.render('register',
        {
            title: 'Register',
            user: req.user
        });
});


/* to post register save the new user into the database **/
router.post('/register', function(req, res, next) {

  Account.register(new Account(
      {
          username: req.body.username
      }),
          req.body.password,
      function(err, account)
      {
        if (err)
        {
          console.log(err);
          res.redirect('/register');
        }
        else
        {
          res.redirect('/login');
        }
      });
});

/* to get the login page for the existing user**/
router.get('/login', function (req,res,next)
{
    // this will show the messages already in the passport.authenticate
    var messages = req.session.messages || [];
    //clearing the session messages
    req.session.messages = [];
    res.render('login',
    {
      title:'Login',
      messages: messages,
      user: req.user
    });
});

/** to post login when user login it should be able to see products **/
router.post('/login', passport.authenticate('local',
{

  successRedirect: '/products',
  failureRedirect: '/login',
  failureMessage: 'Invalid Login.. Please try with correct username and password',
  failureFlash: true

}));

/* to get logout */
router.get('/logout', function (req,res,next) {
  req.logout();
  res.redirect('/login');
});

/* to get the facebook page if the user wants to login using their facebook username and password **/
router.get('/facebook', passport.authenticate('facebook'), function(req, res, next) {});

/* to get the facebook call back which facebook will send back after the user is logged in **/
router.get('/facebook/callback', passport.authenticate('facebook',
{
    failureRedirect: '/login',
    failureMessage: 'Invalid Login'
}),
    function(req, res, next)
{
    //if the user is logged successfully they should be able to see products list
    res.redirect('/products');
});



module.exports = router;
