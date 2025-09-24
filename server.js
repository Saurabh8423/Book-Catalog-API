const express = require("express");

const app = express();


//
const port = process.env.PORT || 5000

//DB Connection
require("./config/db")

app.get("/", (req, res)=> {
    res.send("hello!")
})

app.listen(port, ()=>{
    console.log(`Server is running at PORT: ${port}`);
})
