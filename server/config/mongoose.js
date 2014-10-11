var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

module.exports = function(config) {
  mongoose.connect(config.db);

  var db = mongoose.connection;

  db.once('open', function(err){
    if(err) {
      console.log('Database could not be opened: ' + err);
      return;
    }
    console.log('Database up and running...')
  });

  db.on('error', function (err) {
    console.log('Database error: ' + err);
  });

  var userSchema = mongoose.Schema({
    username: String,
    firstName: String,
    lastName: String,
    salt: String,
    hashPass: String,
    roles: [String]
  });

  userSchema.method({
    authenticate: function(password){
      console.log(encryption.generateHashedPassword(this.salt, password));
      console.log(this.hashPass);
      if(encryption.generateHashedPassword(this.salt, password) === this.hashPass) {
        return true;
      }
    }
  });

  var User = mongoose.model('User', userSchema);

  User.find({}).exec(function(err, collection){
    if(err){
      console.log('Cannot find users: ' + err);
      return;
    }

    if(collection.length === 0){
      var salt;
      var hashedPwd;

      salt = encryption.generateSalt();
      hashedPwd = encryption.generateHashedPassword(salt, 'Slavi');
      User.create({username: 'test', firstName: 'Slavi', lastName: 'Nikolov', salt: salt, hashPass: hashedPwd, roles: ['admin']});
      salt = encryption.generateSalt();
      hashedPwd = encryption.generateHashedPassword(salt, 'Test');
      User.create({username: 'test1', firstName: 'Test', lastName: 'Name', salt: salt, hashPass: hashedPwd, roles: ['standard']});
      salt = encryption.generateSalt();
      hashedPwd = encryption.generateHashedPassword(salt, 'Test1');
      User.create({username: 'test2', firstName: 'Test1', lastName: 'Name1', salt: salt, hashPass: hashedPwd, roles: ['moderator']});
      console.log('Users added to DataBase... ')
    }
  });
};