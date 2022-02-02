const mongoose = require('mongoose');

const {Schema } = mongoose;


const weedschema = new Schema({
    weedname:String,
    price:Number,
    rated:{
        type:Number,
        default:(Math.random() * 5 | 0) + 5
    },
    on_sale:{
        type:Boolean,
        default:Math.random() > .5 ? true : false
    },
    is_rolled:{
        type:Boolean,
        default:false
    },
    strain:{
        type:String,
        default:"hybrid"
    }
})

module.exports = mongoose.model("Weed",weedschema)


