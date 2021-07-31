
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    item_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    qty:{
        type: Number,
        required: true
    }
} //, {timestamps: true}
);

module.exports = mongoose.model('products', productSchema);

