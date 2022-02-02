const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const db = require('./db')
const app = express();
const PORT = process.env.PORT || 4455;

let mongo_url=`mongodb+srv://admin:admin@crudcluster.zjkmt.mongodb.net/netlifydb?retryWrites=true&w=majority`

mongoose.connect(mongo_url).then(()=>{
    console.log("mongo is connected")
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get('/test',(req,res)=>{
    console.log("/test pinged");
    res.json({status:200,msg:"Connected on the back-end :)"})
})


app.get('/weed',async(req,res)=>{
    console.log(req.body);
    let weeddata = await db.Weed.find().sort("price")
    console.log("weedData",weeddata)
    res.json({status:202,msg:"data was received",weeddata})
})


app.post('/addweed',async(req,res)=>{
    console.log(req.body);
    let response = await db.Weed.create(req.body);
    console.log("Response",response)
    res.json({status:202,msg:"data was received",response})
})


app.get('/delete/:id',async(req,res)=>{
    console.log('/deleteweed fired',req.params.id);
    let response = await db.Weed.findOneAndDelete({_id:req.params.id});
    console.log("Response",response)
    res.json({status:202,msg:"success"})
})





app.listen(PORT,()=>console.log(`Listening in on port ${PORT},${process.env.USER}. PID:${process.pid}`))