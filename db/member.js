const mongoose = require('mongoose');

const {Schema } = mongoose;


var favs = ["hybrid","indica","sativa"]


const memberschema = new Schema({
    username:String,
    email:String,
    image:String,
    balance:{
        type:Number,
        default:Math.random() * 1000 | 0
    },
    favorite:{
        type:String,
        default:favs[Math.random() * favs.length | 0]
    }

})

module.exports = mongoose.model("Member",memberschema)


