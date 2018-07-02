'use strict';

var app = require('../../server/server');

module.exports = function(Ngouser) {
  function createUserRole(scopeId, ngoUserId, roleId) {
    var userRole = app.models.user_role;
    userRole.create({
      scopeId: scopeId,
      ngoUserId: ngoUserId,
      roleId: roleId,
    });
  }

  /* assign as super admin start */
  Ngouser.assignAsSuperAdmin = (ngoUserId, ngoId, cb) => {
    console.log('this is an excdkjfn');
    createUserRole(ngoId, ngoUserId, '5b3626f5f12e5373953103eb');
    cb(null, true);
  };

  Ngouser.remoteMethod('assignAsSuperAdmin', {
    accepts: [
      {arg: 'ngoUserId', type: 'string'},
      {arg: 'ngoId', type: 'string'},
    ],
    returns: {args: 'success', type: 'boolean'},
    http: {path: '/assignSuperAdmin', verb: 'post'},
  });
  /* assign as super admin end */

  /* assign as NGO Event admin start */
  Ngouser.assignAsNGOEventAdmin = (ngoUserId, ngoId, cb) => {
    createUserRole(ngoId, ngoUserId, '5b362721f12e5373953103ec');
    cb(null, true);
  };

  Ngouser.remoteMethod('assignAsNGOEventAdmin', {
    accepts: [
      {arg: 'ngoUserId', type: 'string'},
      {arg: 'ngoId', type: 'string'},
    ],
    returns: {args: 'success', type: 'boolean'},
    http: {path: '/assignNgoEventAdmin', verb: 'post'},
  });
  /* assign as NGO Event admin end */

  /* assign as Chapter Event admin start */
  Ngouser.assignAsChapterEventAdmin = (ngoUserId, chapterId, cb) => {
    createUserRole(chapterId, ngoUserId, '5b362736f12e5373953103ed');
    cb(null, true);
  };

  Ngouser.remoteMethod('assignAsChapterEventAdmin', {
    accepts: [
      {arg: 'ngoUserId', type: 'string'},
      {arg: 'chapterId', type: 'string'},
    ],
    returns: {args: 'success', type: 'boolean'},
    http: {path: '/assignChapterEventAdmin', verb: 'post'},
  });
  /* assign as Chapter Event admin end */

  /* assign as Chapter Event admin Assistant start */
  Ngouser.assignAsChapterEventAdminAssistant = (ngoUserId, chapterId, cb) => {
    createUserRole(chapterId, ngoUserId, '5b36274cf12e5373953103ee');
    cb(null, true);
  };

  Ngouser.remoteMethod('assignAsChapterEventAdminAssistant', {
    accepts: [
      {arg: 'ngoUserId', type: 'string'},
      {arg: 'chapterId', type: 'string'},
    ],
    returns: {args: 'success', type: 'boolean'},
    http: {path: '/assignChapterEventAdminAssistant', verb: 'post'},
  });
  /* assign as Chapter Event admin Assistant end */

  /* assign as Event Co ordinator start */
  Ngouser.assignAsEventCoordinator = (ngoUserId, eventId, cb) => {
    createUserRole(eventId, ngoUserId, '5b36275ef12e5373953103ef');
    cb(null, true);
  };

  Ngouser.remoteMethod('assignAsEventCoordinator', {
    accepts: [
      {arg: 'ngoUserId', type: 'string'},
      {arg: 'eventId', type: 'string'},
    ],
    returns: {args: 'success', type: 'boolean'},
    http: {path: '/assignEventCoordinator', verb: 'post'},
  });
  /* assign as Event Co ordinator end */
};
