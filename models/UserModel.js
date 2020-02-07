var mongoose = require('mongoose');
var schema = mongoose.Schema;
var UserSchema = new schema({
    name: {
        type: String,
        required: true
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
    for(let i = 0;i < inputString.length;i++) {
        return inputString[i].toUpperCase() + inputString.slice(1,inputString.length);
    }
    
});
UserSchema.path('phone').set((inputString) => {
    return inputString;
});
UserSchema.path('password').set((inputString) => {
    return inputString;
});
// FoodSchema.path('name').set((input) => {
//     return input;
// })
module.exports = mongoose.model('User',UserSchema);