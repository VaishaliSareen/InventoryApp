/** File Name: users.js
 Author's Name: Vaishali Sareen
 WebSite Name: https://productapplication.herokuapp.com/
 File Description:This js file is the controller of the users**/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
