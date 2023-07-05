const FormData = require("form-data");
const path = require("path");
const axios = require("axios");
const local = process.env.apiUser;
const localResource = process.env.apiResource;
const fs = require("fs");

const uploadUserAvatar = async (req, res) => {
  try {
    let { file } = req;
    let {
      headers: { authorization },
    } = req;
    let user_id;
    if (req.user_id) {
      user_id = req.user_id;
    } else {
      user_id = req.body.user_id;
    }
    // Nếu có user_Id thì post lên API rồi lấy content dạng base64 rồi hiện kiêu khác
    // Còn ko có user_id thì trả lại cái path cho user thấy ảnh trước rồi gọi API sau
    if (user_id) {
      const pathFile = path.join(path.dirname(file.path), file.filename);
      const formData = new FormData();
      formData.append("files", fs.readFileSync(file.path), file.filename);
      // formData.append("resource_type", "image")
      // formData.append("user_id", user_id);
      // formData.append("type", "3x4");
      const result = await axios({
        url: `${localResource}/resources/?service_management_id=user-service&table_management_id=user&type=3x4&is_private=false`,
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
            ...formData.getHeaders(),
            Authorization: authorization,
        },
        data: formData,
        
      });
      let message  = result.data.message;
      if (message === "Success") {
        // nếu post ảnh thành công thì call API get Avatar rồi trả về content dạng base64
        const result_getIMGs = await axios({
          url: `${local}/user-resources`,
          method: "POST",
          data: JSON.stringify({
            user_id: +user_id,
            type: "3x4",
            path: JSON.stringify([result.data.data.files[0]]),
          }),
          headers: {
            Authorization: authorization,
            'Content-Type': 'application/json',
            cache: 'no-cache'
          },
        });
        // console.log("Line 58",result_getIMGs)
        const result_getIMG = await axios({
            url: `${local}/user-resources/user/${user_id}`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        })
        res.send(result_getIMG.data);
        // res.send(result_getIMGs.data);
      } else {
        // Nếu post ảnh fail thì trả về  kết quả báo lỗi gì đó
        res.send(result.data);
      }
    } else {
      res.send(file);
    }
    
    // const config = {
    //   headers: { Authorization: req.headers.authorization },
    // };
    // const formData = new FormData();
    // formData.append("files", fs.readFileSync(req.file.path), req.file.filename);
    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = authorization;
    // try {
    //   let { data } = await axios.post(
    //     `http://192.168.61.116:8017/resources/?service_management_id=profile-service&table_management_id=work-object&alias_name=123&type=anh&is_private=false`,
    //     formData,
    //     {
    //       headers: formData.getHeaders(),
    //       cache: 'no-cache'
    //     },
    //     config
    //   );
    //   res.send(data);
    // } catch (error) {
    //   console.log("err", error)
    //   res.send(error);
    // }
  } catch (error) {
    console.log(error.response);
    res.send(error);
  }
};

const uploadFileStep5 = async (req, res) => {
  try {
    let { user_id, type, imgIdExsisted } = req.body;
    let {
      file,
      headers: { authorization },
    } = req;
    const pathFile = path.join(path.dirname(file.path), file.filename);
    const formData = new FormData();
    formData.append("files", fs.readFileSync(pathFile), file.filename);
    formData.append("resource_type", "image");
    formData.append("user_id", +user_id);
    formData.append("user_resource_type", type);
    const result = await axios({
      url: `${local}/user-resources`,
      method: "POST",
      headers: {
        Authorization: authorization,
      },
      data: formData,
    });
    if (imgIdExsisted && typeof +imgIdExsisted === "number") {
      axios({
        url: `${local}/user-resources/${imgIdExsisted}`,
        method: "DELETE",
        headers: {
          Authorization: authorization,
        },
      });
    }
    let { message } = result.data;
    if (message === "Success") {
      const result_getIMG = await axios({
        url: `${local}/user-resources/user/${user_id}`,
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      res.send(result_getIMG.data);
    } else {
      res.send(result.data);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const uploadFileStep7 = async (req, res) => {
  try {
    let { user_id } = req.body;
    let {
      file,
      headers: { authorization },
    } = req;
    const pathFile = path.join(path.dirname(file.path), file.filename);
    const formData = new FormData();
    formData.append("files", fs.readFileSync(pathFile), file.filename);
    // formData.append("user_id", user_id);
    // formData.append("resource_type", "document");
    // formData.append("user_resource_type", "asset");
    const uploadFile = await axios({
      url: `${local}/user-resources`,
      method: "POST",
      headers: {
        Authorization: authorization,
      },
      data: formData,
    });
    let { message } = uploadFile.data;
    if (message === "Success") {
      const result_getResources = await axios({
        url: `${localResource}/resources?service_management_id=user-service&table_management_id=user&type=3x4`,
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      res.send(result_getResources.data);
    } else {
      res.send(uploadFile.data);
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

module.exports = {
  uploadUserAvatar,
  uploadFileStep5,
  uploadFileStep7,
};
