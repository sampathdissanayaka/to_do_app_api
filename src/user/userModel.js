const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
} 
);

//encrypt the password befor save
userSchema.methods.encryptPassword  = async function (password){
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt);
    return hashPassword;
}

//validate password with database
userSchema.methods.validatePassword = async function (passwordInDb,password){
    const validationResult = await bcrypt.compare(password,passwordInDb);
    return validationResult;
}

module.exports = mongoose.model('users', userSchema);