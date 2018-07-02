'use strict';

var app = require('../../server/server');
module.exports = function(Ngo) {

  Ngo.afterRemote('create', (context, remoteMethodOutput, next) => {
    var user_role = app.models.user_role;
    user_role.create({
      scopeId: remoteMethodOutput.id,
      ngoUserId: remoteMethodOutput.ngoUserId,
      roleId: '5b3626e1f12e5373953103ea',
    });
    next();
  });
};
