'use strict';

var app = require('../../server/server');
module.exports = function(Ngo) {

  Ngo.afterRemote('create', (context, remoteMethodOutput, next) => {
    console.log('inside remote function >>>>> ', JSON.stringify(remoteMethodOutput));
    console.log('app module >>>>>>>>>>>>> ', app);
    var user_role = app.models.user_role;
    user_role.create({
      scopeId: 'NGO',
      ngoUserId: remoteMethodOutput.Id,
      roleId: '5b3626e1f12e5373953103ea',
    });
    //context.models.
    next();
  });
};
