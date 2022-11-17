const axios = require("axios")

const local = "http://dev.profilebe.tuoitre.vn";
// Muốn tạo tài khoản hay tạo bất kỳ thứ gì phaỉ dùng TOKEN của admin
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY1NzE1MDg4LCJleHAiOjc3MTM3MTUwODgsIm5iZiI6MTY2NTcxNTA4OCwianRpIjoiRUtFeUU5RzYzR0FBbWJtRiIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.VgQCn6oLxl4pV9u2iw2oMLVcTEYOcnH4flIJrmDi6B8";

const getProfile = async (req, res) => {
    try {
        let { id } = req.params;
        let { headers: { authorization } } = req;
        // lấy thông tin cá nhân
        const result_pro = await axios({
            url: `http://dev.profilebe.tuoitre.vn/profiles/${id}`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        });
        res.send(result_pro?.data)
    } catch (error) {
        res.send(error)
    }
}

const create_dep_pos_degree_jourCard = (req, res) => {
    try {
        let { depPos, userDegree, jourCard } = req.body;
        let { user_id, pro_id } = req;
        // userDegree["user_id"] =user_id;
        // jourCard["user_id"] =user_id;
        userDegree["pro_id"] = pro_id;
        jourCard["pro_id"] = pro_id;
        let promiseArr = [];
        // console.log(depPos)
        for (let i = 0; i < depPos.length; i++) {
            depPos[i].user_id = user_id
            promiseArr.push(axios({
                url: `${local}/user-dep-pos`,
                method: "POST",
                headers: {
                    Authorization: "Bearer " + TOKEN
                },
                data: depPos[i]
            }))
        }
        console.log(promiseArr)
        const result_user_degree = axios({
            url: `${local}/user-degree`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: userDegree
        })
        const result_jour_card = axios({
            url: `${local}/journalist-card`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: jourCard
        })
        Promise.all([...promiseArr, result_user_degree, result_jour_card])
            .then((resolve) => {
                console.log(resolve[0].data)
                console.log(resolve[1].data)
                console.log(resolve[2].data)
                res.send({
                    res1: resolve[0].data,
                    res2: resolve[1].data,
                    res3: resolve[2].data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    } catch (error) {
        res.send(error)
    }
}

const update_dep_pos_degress_jourCard = async (req, res) => {
    try {
        // console.log("update_dep_pos_degress_jourCard")
        let { depPos, userDegree, jourCard, jour_card_id, user_degree_id, user_id, pro_id } = req.body;
        let { headers: { authorization } } = req;
        let promiseArr = [];
        // console.log(depPos)
        for (let i = 0; i < depPos.length; i++) {
            depPos[i].user_id = user_id
            promiseArr.push(axios({
                url: `${local}/user-dep-pos`,
                method: "POST",
                headers: {
                    Authorization: authorization
                },
                data: depPos[i]
            }))
        }
        // Chỉnh sửa thuộc tính của user degree rồi mới gắn vô API
        userDegree["pro_id"] = pro_id;
        let { user_id: userID, ...rest } = userDegree;
        const updateDegree = await axios({
            url: `${local}/user-degree/${user_degree_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: rest
        });
        // Chỉnh sửa thuộc tính của journalist card rồi mới gắn vô API
        jourCard["pro_id"] = pro_id;
        let { user_id: joucardUserID, ...restJourCard } = jourCard;
        const updateJourCard = await axios({
            url: `http://dev.profilebe.tuoitre.vn/journalist-card/${jour_card_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: restJourCard
        });
        Promise.all([...promiseArr, updateDegree, updateJourCard])
            .then((resolve) => {
                let result = [];
                for (let i = 0; i < resolve.length; i++) {
                    // console.log(resolve[i].data)
                    result.push(resolve[i].data)
                }
                res.send(result)
            })
            .catch((err) => {
                res.send(err)
            })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = {
    getProfile,
    create_dep_pos_degree_jourCard,
    update_dep_pos_degress_jourCard
}