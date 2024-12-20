const mongoose = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const { Schema } = mongoose;

const productSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true,
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
    },
    image:{
        type: String,
    },
    price:{
        type: Number,
        required: true,
        min: 0.99,
    },
    quantity:{
        type: Number,
        min: 0,
        default: 0,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    discounted_price: {
        type: Number,
        max: this.price,
        default: 0
    }

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;