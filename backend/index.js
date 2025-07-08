const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send('backend working');
})

app.listen(3000, function(){
    console.log("backend is working");
})