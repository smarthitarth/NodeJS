var users = require('../couchdb').use('users');
exports.create = function create(user, cb){
    users.insert(user, user.email, cb);
};

var diff = require('object-versions').diff;
///updare usernod

exports.update = schemas.validating('user', updateUser);

function updateUser(user, cb){
    users.get(user._id, errors.wrapNano(function(err, currentUser){
        if (err){
            cb(err);
        }else{
            var userDiff = diff(currentUser, user);
            schemas.validate(userDiff, 'user', 'update', function(err){
                if(err){
                    cb(err);
                }else{
                    users.insert(user, errors.wrapNano(cb));
                }
            });
        }
    }));
}


exports.updateDiff = updateUserDiff;

function updateUserDiff(userDiff, cb) {  
    schemas.validate(userDiff, 'user', 'update', function(err) {
      if (err) {
        cb(err);
      }
      else {
        merge();
      }
    });
    function merge() {
      users.get(userDiff._id, errors.wrapNano(function(err, user) {
        if (err) {
          cb(err);
        }
        else {
          extend(user, userDiff);
          users.insert(user, errors.wrapNano(done));
        }
      }));
      function done(err) {
        if (err && err.statusCode == 409 && !userDiff._rev) {
          merge(); // try again
        }
        else {
          cb.apply(null, arguments);
        }
      }
    }
  }


