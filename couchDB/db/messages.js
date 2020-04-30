var extend = require('util')._extend;
var schemas = require('../schemas');
var errors = require('../errors');
var messages = require('../couchdb').use('messages');
/// Create user
exports.create = schemas.validating('message', 'create', createMessage);
function createMessage(message, cb) {
    message.createdAt = Date.now();
    messages.insert(message, errors.wrapNano(cb));
}

/// Messages for a given user
exports.getFor = getMessagesFor;
function getMessagesFor(user, cb) {  
  messages.view(
    'by_to', 'by_to', {keys: [user], include_docs: true},
    errors.wrapNano(function(err, result) {
      if (err) {
        cb(err);
      }
      else {
        result = result.rows.map(function(row) {
          return row.doc;
        });
        cb(null, result);
      }
    })
  );
}
