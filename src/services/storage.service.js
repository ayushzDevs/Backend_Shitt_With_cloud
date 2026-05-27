const ImageKit = require("@imagekit/nodejs");
const { clientEncryption } = require("../models/post.model");

const imagekit = new ImageKit({
    privateKey: "private_+/O/dII1cpJ0bnttPSje355JyJ0="
});


uploadfile = async (buffer) => {
    const result = imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });

    return result;
};

module.exports = uploadfile;