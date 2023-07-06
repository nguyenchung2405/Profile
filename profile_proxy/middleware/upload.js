// const multer = require("multer")

// const uploadImageAvatar = ()=>{
//     // const storage = multer.diskStorage({
        
//     //     filename: (req,file,cb)=>{
//     //         cb(null, `${Date.now()}_${file.originalname}`)
//     //     }
//     // });
//     const upload = multer({ dest : "./profile_proxy/public/avatar"})
//     return upload.single("image3x4");
// };

// const uploadStep5 = ()=>{
//     const upload = multer({ dest : "./profile_proxy/public/files"})
//     return upload.single("file");
// }

// const uploadStep7 = ()=>{
//     const upload = multer({ dest : "./profile_proxy/public/asset"})
//     return upload.single("filePDF");
// }

// module.exports = {
//     uploadImageAvatar,
//     uploadStep5,
//     uploadStep7
// }