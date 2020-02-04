var mongoose = require('mongoose');
var schema = mongoose.Schema;
var UserSchema = new schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    history: {
        type: Array,
        default: ['1','2','3']
    },
    roles: {
        type: [{
            type: String,
            enum: ['user','admin','mod']
        }],
        default: ['user']
    }
});
// setter
UserSchema.path('name').set((inputString) => {
    return inputString[0].toUpperCase() + inputString.slice(1);
});
// FoodSchema.path('name').set((input) => {
//     return input;
// })
module.exports = mongoose.model('User',UserSchema);