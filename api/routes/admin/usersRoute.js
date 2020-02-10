'use strict';
var router = global.router;

var user = require('../../controllers/userController');
router.get('/users',user.list_all_user);
router.post('/users',user.create_a_user);
router.get('/user/:userId',user.select_a_user);
router.delete('/user/:userId',user.delete_a_user);
router.get('/user/select_user_with_phone/:userPhone',user.select_a_user_with_phone);

module.exports = router;





// let User = require('../../models/UserModel');
// const {check,validationResult} = require('express-validator');
// /* GET users listing. */
// router.get('/list_users', (request, response, next) => {
//   // console.log(request.params.id);
//   User.find({}).limit(100).sort({ name: 1 }).select({
//     name: 1,
//     phone: 1,
//     password: 1,
//     create_date: 1,
//     roles: 1,
//     management: 1,
//     history: 1
//   }).exec((err, users) => {
//     if (err) {
//       response.json({
//         result: 'failed',
//         data: [],
//         messege: `Error: ${err}`
//       });

//     } else {
//       response.render('list', { Users: users, title: "List users" });
      

//     }
//   });

// });

// /*api insert a user*/
// router.post('/insert_new_user',[
//   check('phone', 'phone is required').not().isEmpty(),
//   check('name', 'name is required').not().isEmpty(),
//   check('password', 'password is required').not().isEmpty(),
// ], function(request, response, next)  {
//   if(request.body.name === ""||request.body.phone ===""||request.body.password ==="") {
//     response.json({
//       result: "Failed",
//       messege: 'các trường không được bỏ trống'
//     });
//   } else {
//     var user = {
//       phone: new RegExp('^' + request.body.phone.trim() + '$', "i")
//     };
//     User.find(user).limit(1).exec((err, userCheck) => {
//       if (err) {
  
//       } else {
  
//         //if user exist, do not allow to insert
//         if (userCheck.length > 0) {
//           console.log("User already exists ");
//           response.json({
//             result: "failed",
//             data: [],
//             messege: 'User already exists'
//           });
//         } else {
//           var newUser = new User({
//             name: request.body.name,
//             phone: request.body.phone,
//             password: request.body.password,
//             roles: request.body.roles
//           });
  
//           newUser.save((err) => {
//             if (err) {
//               response.json({
//                 result: "failed",
//                 data: [],
//                 messege: `Error is: ${err}`
//               });
//             } else {
//               response.render('create', { title: 'Create new user' });
//             }
//           });
//         }
//       }
//     })
//   }
// });
// /*Delete user with phone number */
// router.post('/delete_user', (request, response, next) => {
//   User.remove({ phone: request.body.delete }).exec((err, result) => {
//   });
//   User.find({}).limit(100).sort({ name: 1 }).select({
//     name: 1,
//     phone: 1,
//     password: 1,
//     create_date: 1,
//     roles: 1,
//     management: 1,
//     history: 1
//   }).exec((err, users) => {
//     if (err) {
//       response.json({
//         result: 'failed',
//         data: [],
//         messege: `Error: ${err}`
//       });

//     } else {
//       response.render('list', { Users: users, title: "List users" });
//       // console.log(users);
//     }
//   });
// });
// //Select user to edit
// router.post('/select_user', (request, response, next) => {
//   User.find({ phone: request.body.edit }).limit(1).select({
//     name: 1,
//     phone: 1,
//     password: 1,
//     create_date: 1,
//     roles: 1,
//     management: 1,
//     history: 1
//   }).exec((err, user) => {
//     if (err) {

//     } else {
//       console.log("User already exists ");

//       response.render('edit', { User: user, title: "Update user" });
//     }
//   });
// });
// // update user
// router.post('/update_user', (request, response, next) => {
//   var nameUpdate = request.body.name[0].toUpperCase() + request.body.name.slice(1);
//   let newValue = {};
//   newValue.name = request.body.name;
//   newValue.roles = request.body.roles;
//   newValue.password = request.body.password;
//   newValue.management = request.body.management;


//   const option = {
//     new: true,
//   }
//   User.updateOne({ phone: request.body.phone }, { $set: newValue }, option, (err, updateUser) => {
//     if (err) {

//     } else {
//       User.find({}).limit(100).sort({ name: 1 }).select({
//         name: 1,
//         phone: 1,
//         password: 1,
//         create_date: 1,
//         roles: 1,
//         management: 1,
//         history: 1
//       }).exec((err, users) => {
//         if (err) {
//           response.json({
//             result: 'failed',
//             data: [],
//             messege: `Error: ${err}`
//           });
    
//         } else {
//           // response.render('list', { Users: users, title: "List users" });
//           response.json({
//             result: 'true',
//             data: users,
//             messege: `Error: ${err}`
//           });
//           // console.log(users);
//         }

//       });
//     }
//   });
// });

// module.exports = router;
