'use strict';
var express = require('express');
var router = express.Router();
// module.exports = function(app) {
//     var userController = require('../controllers/usersController');
//     app.route('/users')
//         .get(userController.list_all_users)
//         .post(userController.create_a_user)

//     app.route('/users/:userId')
//         .get(userController.get_a_user)
//         .put(userController.update_a_user)
//         .delete(userController.delete_a_user)

//     app.route('/quickCode/:code')
//         .get(userController.rsvp_page)
// }


var userController = require('../controllers/usersController');
router.get('/users', userController.list_all_users)
    .post('/users', userController.create_a_user);

router.get('/users/:userId', userController.get_a_user)
    .put('/users/:userId',userController.update_a_user)
    .delete('/users/:userId',userController.delete_a_user)

router.get('/quickCode/:code', userController.rsvp_page)



module.exports = router;
 