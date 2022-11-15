const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const tranection = require("./modal/userData")
const cors = require("cors")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
app.use(cors())

app.post('/postdata',(req,res)=>{
    console.log(req.body.runningammount)
    const newammount = new tranection({
        desc: req.body.desc,
        ammount: req.body.ammount,
        type: req.body.type,
        runningammount: req.body.runningammount
    })
    newammount.save().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})
app.get('/getData',(req,res)=>{
    tranection.find().then((data)=>{
        res.send(data)
    }).catch((err)=>{
        console.log(err)
    })
})

mongoose.connect("mongodb://localhost:27017/userdata").then(()=>{
    app.listen(5000,()=>{
        console.log("listining on port 5000")
    })
})