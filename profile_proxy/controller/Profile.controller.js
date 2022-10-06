const axios = require("axios")

const local =  "http://192.168.61.116";
// Muốn tạo tài khoản hay tạo bất kỳ thứ gì phaỉ dùng TOKEN của admin
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY0OTU1NDk4LCJleHAiOjc3MTI5NTU0OTgsIm5iZiI6MTY2NDk1NTQ5OCwianRpIjoiUTg2b2o3d2c4VXo2cmc4UyIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.YtWmQgx42lZC8VSXMwlavipXi5cJ_g35oH_YaovqyXg";

const getProfile = async (req,res)=>{
    try {
        let {id} = req.params;
        let {headers: {authorization}} = req;
        // lấy thông tin cá nhân
        const result_pro = await axios({
            url: `http://192.168.61.116/api/fe/profiles/users/${id}`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        });
        // lấy thông tin bằng cấp
        // const result_degree = await axios({
        //     url: `http://192.168.61.116/api/user-degrees/users/${id}`,
        //     method: "GET",
        //     headers: {
        //         Authorization: authorization
        //     }
        // });
        // lấy thông tin phòng ban, chức vụ
        // const result_dep_pos = await axios({
        //     url: `http://192.168.61.116/api/departments/positions/users/${id}`,
        //     method: "GET",
        //     headers: {
        //         Authorization: authorization
        //     }
        // });
        res.send(result_pro?.data)
    } catch (error) {
        res.send(error)
    }
}

const createProfile = (req,res)=>{
    try {
        const result_pro = axios({
            url: `${local}/api/profiles`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: {
                
            }
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getProfile, createProfile
}