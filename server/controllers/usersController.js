var encryprion = require('../utilities/encryption');
var User = require('mongoose').model('User');

module.exports = {
  createUser: function(req, res){
    var newUserData = req.body;
    newUserData.salt = encryprion.generateSalt();
    newUserData.hashPass = encryprion.generateHashedPassword(newUserData.salt, newUserData.password);
    User.create(newUserData, function(err, user){
      if(err){
        console.log('Failed to register new user: ' + err);
        return;
      }
      req.logIn(user, function(err){
        if(err){
          //res.statusCode(400);
          //res.status(400);
          return res.send({reason: err.toString()});
        }

        res.send(user);
      });
    });
  },
  getAllUsers: function(req, res){
    User.find({}).exec(function(err, collection){
      if(err){
        console.log('User could not be loaded: ' + err);
      }

      res.send(collection);
    })
  }
};