const axios = require("axios")

const local =  "http://192.168.61.116";
// Muốn tạo tài khoản hay tạo bất kỳ thứ gì phaỉ dùng TOKEN của admin
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY1NzE1MDg4LCJleHAiOjc3MTM3MTUwODgsIm5iZiI6MTY2NTcxNTA4OCwianRpIjoiRUtFeUU5RzYzR0FBbWJtRiIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.VgQCn6oLxl4pV9u2iw2oMLVcTEYOcnH4flIJrmDi6B8";

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

const create_dep_pos_degree_jourCard = (req,res)=>{
    try {
        let {depPos, userDegree, jourCard} = req.body;
        let {user_id, pro_id} = req;
        depPos["user_id"] = user_id;
        userDegree["user_id"] =user_id;
        jourCard["user_id"] =user_id;
        userDegree["pro_id"] =pro_id;
        jourCard["pro_id"] =pro_id;
        let promiseArr = [];
        for(let i = 0; i < depPos.length; i++){
            depPos[i].user_id = user_id
            promiseArr.push(axios({
                url: `${local}/api/profiles/departments`,
                method: "POST",
                headers: {
                    Authorization: "Bearer " + TOKEN
                },
                data: depPos[i]
            }))
        }
        console.log(promiseArr)
        const result_dep_pos = axios({
            url: `${local}/api/profiles/departments`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: depPos
        })
        const result_user_degree = axios({
            url: `${local}/api/user-degrees`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: userDegree
        })
        const result_jour_card = axios({
            url: `${local}/api/journalist-cards`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: jourCard
        })
        Promise.all([ ...promiseArr, result_user_degree, result_jour_card])
        .then((resolve)=>{
            console.log(resolve[0].data)
            console.log(resolve[1].data)
            console.log(resolve[2].data)
            res.send({
                res1: resolve[0].data,
                res2: resolve[1].data,
                res3: resolve[2].data
            })
        })
        .catch((err)=>{
            res.send(err)
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getProfile,
    create_dep_pos_degree_jourCard
}