var router = global.router;
let User = require('../models/UserModel');
var JSAlert = require("js-alert");
var url = require('url');
// var popupS = require('popups');
/* GET users listing. */
router.get('/list_users', (request, response, next) => {
  // console.log(request.params.id);
  User.find({}).limit(100).sort({ name: 1 }).select({
    name: 1,
    phone: 1,
    password: 1,
    create_date: 1,
    roles: 1,
    history: 1
  }).exec((err, users) => {
    if (err) {
      response.json({
        result: 'failed',
        data: [],
        messege: `Error: ${err}`
      });

    } else {
      response.render('list', { Users: users, title: "List users" });
      console.log(users);

    }
  });

});
//navigate to page create
router.get('/navigate_to_create', (req, res) => {
  res.render('create', { title: 'Create new user' });
});

/*api insert a user*/
router.post('/insert_new_user', (request, response, next) => {
  var user = {
    phone: new RegExp('^' + request.body.phone.trim() + '$', "i")
  };
  User.find(user).limit(1).exec((err, userCheck) => {
    if (err) {

    } else {

      //if user exist, do not allow to insert
      if (userCheck.length > 0) {
        console.log("User already exists ");
      } else {
        var newUser = new User({
          name: request.body.name,
          phone: request.body.phone,
          password: request.body.password,
          roles: request.body.roles
        });

        newUser.save((err) => {
          if (err) {
            response.json({
              result: "failed",
              data: [],
              messege: `Error is: ${err}`
            });
          } else {
            response.render('create', { title: 'Create new user' });
          }
        });
      }
    }
  })
});

router.post('/delete_user', (request, response, next) => {
  User.remove({ phone: request.body.delete }).exec((err, result) => {
  });
  User.find({}).limit(100).sort({ name: 1 }).select({
    name: 1,
    phone: 1,
    create_date: 1,
    roles: 1
  }).exec((err, users) => {
    if (err) {
      response.json({
        result: 'failed',
        data: [],
        messege: `Error: ${err}`
      });

    } else {
      response.render('list', { Users: users, title: "List users" });
      // console.log(users);
    }
  });
});
//Select user to edit
router.post('/select_user', (request, response, next) => {
  User.find({ phone: request.body.edit }).limit(1).select({
    name: 1,
    phone: 1,
    create_date: 1,
    roles: 1
  }).exec((err, user) => {
    if (err) {

    } else {
      console.log("User already exists ");

      response.render('edit', { User: user, title: "Update user" });
    }
  });
});
// update user
router.post('/update_user', (request, response, next) => {
  var nameUpdate = request.body.name[0].toUpperCase() + request.body.name.slice(1);
  console.log(nameUpdate);
  let newValue = {};
  newValue.name = nameUpdate;
  newValue.roles = request.body.roles;


  const option = {
    new: true,
  }
  User.updateOne({ phone: request.body.phone }, { $set: newValue }, option, (err, updateUser) => {
    if (err) {

    } else {
      User.find({}).limit(100).sort({ name: 1 }).select({
        name: 1,
        phone: 1,
        create_date: 1,
        roles: 1
      }).exec((err, users) => {
        if (err) {
          response.json({
            result: 'failed',
            data: [],
            messege: `Error: ${err}`
          });
    
        } else {
          response.render('list', { Users: users, title: "List users" });
          // console.log(users);
        }
      });
    }
  });
});

module.exports = router;
