const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    admin: { type: Boolean, default: false }
});

// Create new User document
User.statics.create = (username, password) {
    const user = new thiss({
        username,
        password
    });

    // return the Promise
    return user.save();
}

// find one user by using username
User.statics.findOneByUsername = username => {
    return this.findOne({
        username
    }).exec();
}

// verify the password of the User document
User.methods.verify = password => {
    return this.password === password;
}

User.methods.assignAdmin = () => {
    this.admin = true;
    return this.save();
}

module.exports = mongoose.model('User', user);
