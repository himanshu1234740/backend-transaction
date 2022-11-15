const mongoose = require("mongoose");
const ammount = mongoose.Schema({
    desc: {
        type: String
    },
    ammount: {
        type: Number
    },
    type: String,
    createAt: {
        type:  Date,
        default: new Date
    },
    runningammount: String
})
const tranection = mongoose.model("Tranection",ammount)
module.exports = tranection 