// requires
const express = require('express');
const app = express();
const wrapAsync = require("../utils/wrapAsync")
const multer = require("multer")




// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const upload = multer({storage:multer.memoryStorage()})


app.post("/create-post", upload.single("image"), wrapAsync(async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
}))




module.exports = app;