const FormData = require("form-data");
const path = require("path")
const axios = require("axios");
const local = process.env.apiUser;
const fs = require("fs")

const uploadUserAvatar = async (req,res)=>{
    try {
        let {file} = req;
        let {headers: {authorization}} = req;
        let user_id;
        if(req.user_id){
            user_id = req.user_id;
        } else {
            user_id = req.body.user_id;
        }
        // Nếu có user_Id thì post lên API rồi lấy content dạng base64 rồi hiện kiêu khác
        // Còn ko có user_id thì trả lại cái path cho user thấy ảnh trước rồi gọi API sau
        if(user_id){
            const pathFile = path.join(path.dirname(file.path), file.filename);
            const formData = new FormData();
            formData.append("files", fs.readFileSync(pathFile), file.filename);
            formData.append("resource_type", "image")
            formData.append("user_id", user_id)
            formData.append("user_resource_type", "3x4");
            const result = await axios({
                url: `${local}/user-resources`,
                method: "POST",
                headers: {
                    Authorization: authorization
                },
                data: formData
            })
            // console.log(result.data)
            // console.log(result)
            let {message} = result.data;
            if(message === 'Success'){
                // nếu post ảnh thành công thì call API get Avatar rồi trả về content dạng base64
                const result_getIMG = await axios({
                    url: `${local}/user-resources/user/${user_id}`,
                    method: "GET",
                    headers: {
                        Authorization: authorization
                    }
                })
                // console.log(result_getIMG.data)
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
        res.send(error)
    }
}

const uploadFileStep5 = async (req,res)=>{
    try {
        let {user_id, type, imgIdExsisted} = req.body;
        let {file, headers: {authorization}} = req;
        const pathFile = path.join(path.dirname(file.path), file.filename);
        const formData = new FormData();
        formData.append("files", fs.readFileSync(pathFile), file.filename);
        formData.append("resource_type", "image")
        formData.append("user_id", +user_id)
        formData.append("user_resource_type", type);
        const result = await axios({
            url: `${local}/user-resources`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: formData
        });
        if(imgIdExsisted && typeof +imgIdExsisted === "number" ){
            axios({
                url: `${local}/user-resources/${imgIdExsisted}`,
                method: "DELETE",
                headers: {
                    Authorization: authorization
                }
            })
        }
        let {message} = result.data;
        if(message === 'Success'){
            const result_getIMG = await axios({
                url: `${local}/user-resources/user/${user_id}`,
                method: "GET",
                headers: {
                    Authorization: authorization
                }
            })
            res.send(result_getIMG.data);
        } else {
            res.send(result.data);
        }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

const uploadFileStep7 = async (req, res)=>{
    try {
        let {user_id} = req.body;
        let {file, headers: {authorization}} = req;
        const pathFile = path.join(path.dirname(file.path), file.filename);
        const formData = new FormData();
        formData.append("files", fs.readFileSync(pathFile), file.filename);
        formData.append("user_id", user_id);
        formData.append("resource_type", "document");
        formData.append("user_resource_type", "asset");
        const uploadFile = await axios({
            url: `${local}/user-resources`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: formData
        });
        let {message} = uploadFile.data;
        if(message === "Success"){
            const result_getResources = await axios({
                url: `${local}/user-resources/user/${user_id}`,
                method: "GET",
                headers: {
                    Authorization: authorization
                }
            })
            res.send(result_getResources.data);
        } else {
            res.send(uploadFile.data);
        }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

module.exports = {
    uploadUserAvatar,
    uploadFileStep5,
    uploadFileStep7
}