const multer = require("multer")

const uploadImageAvatar = ()=>{
    // const storage = multer.diskStorage({
        
    //     filename: (req,file,cb)=>{
    //         cb(null, `${Date.now()}_${file.originalname}`)
    //     }
    // });
    const upload = multer({ dest : "./profile_proxy/public/avatar"})
    return upload.single("image3x4");
};

const uploadStep5 = ()=>{
    const upload = multer({ dest : "./profile_proxy/public/files"})
    return upload.single("file");
}

module.exports = {
    uploadImageAvatar,
    uploadStep5
}