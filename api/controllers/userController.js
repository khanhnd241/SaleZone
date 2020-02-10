let User = require('../models/UserModel');

//show list user
exports.list_all_user = function(request,response) {
    User.find({}).limit(100).sort({ name: 1 }).select({
        name: 1,
        phone: 1,
        create_date: 1,
        roles: 1,
        management: 1,
        history: 1
      }).exec((err, users) => {
        if (err) {
          response.json({
            result: 'failed',
            data: [],
            messege: `Error: ${err}`
          });
    
        } else {
          response.json(users);
        }
      });
}
//create a new user
exports.create_a_user = function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};
//select a user with id
exports.select_a_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
  };

//select a user with phone
exports.select_a_user_with_phone = function(req, res) {
    User.find({ phone: req.params.userPhone }).limit(1).select({
        name: 1,
        phone: 1,
        password: 1,
        create_date: 1,
        roles: 1,
        management: 1,
        history: 1
      }).exec((err, user) => {
        if (err) {
    
        } else {
          console.log("User already exists ");
    
          res.json(user);
        }
      });
}



// deleta a user
exports.delete_a_user = function(req, res) {
    // User.remove({
    //   _id: req.params.userId
    // }, function(err, user) {
    //   if (err) {
    //     res.send(err);
    //   }
    //   else {
    //     res.json({ message: 'User successfully deleted' });
    //   }
      
    // });
    User.remove({ _id: req.params.userId }).exec((err, result) => {
        if(err) {
            res.send(err);
        }
        else {
            res.json({ message: 'User successfully deleted' });
        }
    });
  };
