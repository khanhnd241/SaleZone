var router = global.router;
let Customer = require('../models/UserModel');
/* Register */
router.post('/register', (request, response, next) => {
  var customer = {
    phone: new RegExp('^' + request.body.phone.trim() + '$', "i")
  };
  Customer.find(customer).limit(1).exec((err, customerCheck) => {
    if (err) {

    } else {

      //if user exist, do not allow to insert
      if (customerCheck.length > 0) {
        console.log("User already exists ");
      } else {
        var newCustomer = new Customer({
          name: request.body.name,
          phone: request.body.phone,
          password: request.body.password
        });

        newCustomer.save((err, user) => {
          if (err) {
            response.json({
              result: "failed",
              data: [],
              messege: `Error is: ${err}`
            });
          } else {
            console.log("Insert successed!");
            response.json({
                result: "successed",
                data: user,
                messege: `Error is: ${err}`
              });
          }
        });
      }
    }
  })
});
router.post('/login', (request, response, next) => {
  var customer = {
    phone: new RegExp('^' + request.body.phone.trim() + '$', "i"),
    password: new RegExp('^' + request.body.password.trim() + '$', "i")
  };
  console.log(customer);
  Customer.find(customer).limit(1).exec((err, customerCheck) => {
    if (err) {
        console.log("khong tim thay");
    } else {
      if (customerCheck.length > 0) {
        console.log("Login successed ");
        response.json({
          result: "success",
          data: customerCheck,
          messege: `Error is: ${err}`
        });
      } else {
        console.log("Login failed ");
      }
    }
  })
});

module.exports = router;
