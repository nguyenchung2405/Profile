const multer = require("multer")

const uploadFileIport = ()=>{
        let upload = multer({dest: "./profile_proxy/public/files"});
        return upload.single("file");
}

module.exports = {
    uploadFileIport
}