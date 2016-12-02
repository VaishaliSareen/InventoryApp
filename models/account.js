/**
 * Created by Owner on 11/28/2016.
 */
// this is the account model
//link to mongoose
var mongoose = require('mongoose');
var plm = require('passport-local-mongoose');

var accountSchema = new mongoose.Schema({
// passport sets the username and password automaticcally
    oauthID: String,
    created: Date
});

accountSchema.plugin(plm);
// making the files public
module.exports = mongoose.model('Account',accountSchema);