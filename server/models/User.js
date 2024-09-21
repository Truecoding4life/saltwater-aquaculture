const {Schema, model} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    blog:[
        {
            title: {
                type: String,
                required: true,
                trim: true,
            },
            text: {
                type: String,
                required: true,
                trim: true,
            },
            url: {
                type: String,
                required: true,
                trim: true,
            },
            createdAt: {
                type: Date,
                required: true,
            },
        }
    ],
    messages: [
        {
            message: {
                type: String,
                required: 'Leave a message!',
                trim: true,
                minlength: 1,
                maxlength: 280,
            },
            email: {
                type: String,
                required: true,
                trim: true,
            },
            name : {
                type: String,
                required: true,
                trim: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        },
    ],
});
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
  
const User = model('User', userSchema);
module.exports = User;