'use strict';
var mongoose = require('mongoose');


var TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'pending'
    }
});


module.exports = mongoose.model('Tasks', TaskSchema);
