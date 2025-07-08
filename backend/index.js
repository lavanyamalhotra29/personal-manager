const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend basic setup!');
});

app.listen(3000, function(){
    console.log("backend is working");
})