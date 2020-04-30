var schemas = require('../schemas');
var users = require('../couchdb').use('users');
/// Create user
exports.create = schemas.validating('user', createUser);
function createUser(user, cb) {
    users.insert(user, user.email, cb);
}
