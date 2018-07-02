'use strict';

module.exports = (app) => {
  var Role = app.models.Role;

  Role.registerResolver('eventAdmin', (role, context, cb) => {
    function reject() {
      process.nextTick(() => cb(null, false));
    };
    var userId = context.accessToken.userId;
    if (!userId) {
      return reject();
    }
    var Role = app.models.roles;
    var UserRole = app.models.user_role;
    UserRole.find({where: {ngoUserId: userId}}, function(err, userRoleResult) {
      if (err) {
        cb(null, false);
      }
      Role.find({where: {id: userRoleResult.roleId}}, function(err, roleResult) {
        if (err) {
          cb(null, false);
        }
        console.log('<<<<<<<<<<<< ', JSON.stringify(roleResult));
        var Ngo = app.models.ngo;
        Ngo.find({where: userRoleResult.scopeId, include: ['chapters']}, function(err, ngoResult) {
          console.log('>>>>>>>>>> ', JSON.stringify(ngoResult));
        });
      });
      //console.log(JSON.stringify(userRoleResult));
      cb(null, true);
    });
    //Roles.
  });
};
