var mongoose = require('mongoose');
var schema = mongoose.Schema;
var StoreSchema = new schema ({
    nameStore: {
        type: String,
        required: true
    },
    addressStore: {
        type: String,
        required: true
    },
    phoneStore: {
        type: String,
        required: true
    }
})