const mongoose = require('mongoose');
const activitySchema = new mongoose.Schema({
    name: String,
    date: String,
    duration: String,
    phone_number: String,
    description: String,
    activity_type: String

});
module.exports = mongoose.model('Activity', activitySchema);
