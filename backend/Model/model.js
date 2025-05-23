const mongoose = require("mongoose")
const shortid = require("shortid")

const schema = mongoose.Schema({
    shortid : {
        type: String,
        require:true ,
        unique: true
    },
    redirectUrl:{
        type: String,
        require :true,
    }

})

const Link = mongoose.model("Link", schema);

module.exports = Link;
