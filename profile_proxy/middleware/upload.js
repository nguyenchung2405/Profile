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

module.exports = {
    uploadImageAvatar
}