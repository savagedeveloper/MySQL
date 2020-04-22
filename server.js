const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json("hey");
    console.log("Running");
});

app.listen(process.env.PORT || 8080);