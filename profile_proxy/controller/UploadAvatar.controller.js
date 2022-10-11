const FormData = require("form-data");
const path = require("path")
const axios = require("axios");
const local =  "http://192.168.61.116";
const fs = require("fs")

const uploadUserAvatar = async (req,res)=>{
    try {
        let {file} = req;
        let {user_id} = req.body;
        // console.log(file.path);
        // Nếu có user_Id thì post lên API rồi lấy content dạng base64 rồi hiện kiêu khác
        // Còn ko có user_id thì trả lại cái path cho user thấy ảnh trước rồi gọi API sau
        if(user_id){
            const pathFile = path.join(path.dirname(file.path), file.filename);
            const formData = new FormData();
            console.log(pathFile)
            formData.append("file", fs.readFileSync(pathFile), file.filename);
            formData.append("resource_type", "image")
            formData.append("user_id", user_id)
            formData.append("user_resource_type", "3x4");
            const result = await axios({
                url: `${local}/api/user/resources`,
                method: "POST",
                data: formData
            })
            // console.log(result)
            let {message} = result.data;
            if(message === 'Successfully'){
                // nếu post ảnh thành công thì call API get Avatar rồi trả về content dạng base64
                const result_getIMG = await axios({
                    url: `${local}/api/user/resources/${user_id}`,
                    method: "GET"
                })
                res.send(result_getIMG.data);
            } else {
                // Nếu post ảnh fail thì trả về  kết quả báo lỗi gì đó
                res.send(result.data);
            }
        } else {
            res.send(file)
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    uploadUserAvatar
}