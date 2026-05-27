// requires
const express = require('express');
const app = express();
const wrapAsync = require("../utils/wrapAsync");
const multer = require("multer");
const uploadfile = require("./services/storage.service");
require("dotenv").config();

const postModel = require("./models/post.model");



// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const upload = multer({storage:multer.memoryStorage()})


app.post("/create-post", upload.single("image"), wrapAsync(async(req,res)=>{
    console.log(req.body)
    console.log(req.file)

    const result = await uploadfile(req.file.buffer);
    const post = await postModel.create({
        image:result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        success:true,
        post
    })
}));




module.exports = app;