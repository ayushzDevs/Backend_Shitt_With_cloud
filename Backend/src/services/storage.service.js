const ImageKit = require("@imagekit/nodejs");
const { clientEncryption } = require("../models/post.model");
require("dotenv").config();


const imagekit = new ImageKit({
    privateKey: process.env.IMAGE_PRIVATE_KEY,
});


uploadfile = async (buffer) => {
    const result = imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });

    return result;
};

module.exports = uploadfile;