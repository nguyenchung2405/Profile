const axios = require("axios")
const local = "http://dev.profilebe.tuoitre.vn";

const getProfile = async (req, res) => {
    try {
        let { id } = req.params;
        let { headers: { authorization } } = req;
        // lấy thông tin cá nhân
        const result_pro = await axios({
            url: `${local}/profiles/${id}`,
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

const getProfileByUserID = async (req, res) => {
    try {
        let { user_id } = req.params;
        let { headers: { authorization } } = req;
        const result_profile = axios({
            url: `${local}/profiles/user/${user_id}`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        });
        const result_user = axios({
            url: `http://dev.userbe.tuoitre.vn/users/${user_id}`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        });
        Promise.all([result_profile, result_user])
            .then(resolve => {
                let dataResponse = []
                for (reso of resolve) {
                    dataResponse.push(reso.data)
                }
                dataResponse.unshift({ msg: "Thành công" })
                res.send(dataResponse)
            })
            .catch(err => {
                res.send(err)
            })
    } catch (error) {
        console.log("lỗi ở getProfileByUserID", error)
        res.send(error)
    }
}

const create_dep_pos_degree_jourCard = (req, res) => {
    try {
        let { depPos, userDegree, jourCard, workObject } = req.body;
        let { user_id, pro_id } = req;
        let { headers: { authorization } } = req;
        // userDegree["user_id"] =user_id;
        // jourCard["user_id"] =user_id;
        userDegree["pro_id"] = pro_id;
        jourCard["pro_id"] = pro_id;
        workObject["pro_id"] = pro_id;
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
        // console.log(promiseArr)
        const result_user_degree = axios({
            url: `${local}/user-degree`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: userDegree
        })
        const result_jour_card = axios({
            url: `${local}/journalist-card`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: jourCard
        })
        const result_work_object = axios({
            url: `${local}/work-object`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: workObject
        });
        Promise.all([...promiseArr, result_user_degree, result_jour_card, result_work_object])
            .then((resolve) => {
                let result = [];
                for (let i = 0; i < resolve.length; i++) {
                    // console.log(resolve[i].data)
                    result.push(resolve[i].data)
                }
                result.unshift({ msg: "Thành công" })
                res.send(result)
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })
    } catch (error) {
        res.send(error)
    }
}

const update_dep_pos_degress_jourCard = (req, res) => {
    try {
        // console.log("update_dep_pos_degress_jourCard")
        let { depPos, userDegree, jourCard, jour_card_id, user_degree_id, user_id, pro_id, userInfor, workObject, work_object_id } = req.body;
        // console.log(jourCard)
        let { headers: { authorization } } = req;
        let promiseArr = [];
        // console.log(depPos)
        for (let i = 0; i < depPos.length; i++) {
            depPos[i].user_id = user_id
            // console.log(depPos[i])
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
        workObject["pro_id"] = pro_id;
        let { user_id: userID, ...rest } = userDegree;
        // console.log(rest, user_degree_id)
        const updateDegree = axios({
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
        // console.log(restJourCard)
        const updateJourCard = axios({
            url: `${local}/journalist-card/${jour_card_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: restJourCard
        });
        const updateUserInfor = axios({
            url: `http://dev.userbe.tuoitre.vn/users/${user_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: { ...userInfor, service_management_id: 2 }
        });

        const updateWorkObject = axios({
            url: `${local}/work-object/${work_object_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: workObject
        })
        Promise.all([...promiseArr, updateDegree, updateJourCard, updateUserInfor, updateWorkObject])
            .then((resolve) => {
                let result = [];
                for (let i = 0; i < resolve.length; i++) {
                    // console.log(resolve[i].data)
                    result.push(resolve[i].data)
                }
                result.unshift({ msg: "Thành công" })
                res.send(result)
            })
            .catch((err) => {
                console.log("Line 198 Lỗi ở update_dep_pos_degress_jourCard")
                res.send(err)
            })
    } catch (error) {
        console.log("Lỗi ở update_dep_pos_degress_jourCard 123")
        res.send(error)
    }
}
const update_dep_pos_degress_jourCard2 = (req, res) => {
    try {
        // console.log("update_dep_pos_degress_jourCard")
        let { depPos, userDegree, jourCard, jour_card_id, user_degree_id, user_id, pro_id, userInfor, workObject, work_object_id } = req.body;
        // console.log(jourCard)
        let { headers: { authorization } } = req;
        let promiseArr = [];
        // console.log(depPos)
        for (let i = 0; i < depPos.length; i++) {
            depPos[i].user_id = user_id
            // console.log(depPos[i])
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
        workObject["pro_id"] = pro_id;
        let { user_id: userID, ...rest } = userDegree;
        // console.log(rest, user_degree_id)
        const updateDegree = axios({
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
        // console.log(restJourCard)
        const updateJourCard = axios({
            url: `${local}/journalist-card/${jour_card_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: restJourCard
        });
        const updateUserInfor = axios({
            url: `http://dev.userbe.tuoitre.vn/users/users/me`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: { ...userInfor }
        });

        const updateWorkObject = axios({
            url: `${local}/work-object/${work_object_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: workObject
        })
        Promise.all([...promiseArr, updateDegree, updateJourCard, updateUserInfor, updateWorkObject])
            .then((resolve) => {
                let result = [];
                for (let i = 0; i < resolve.length; i++) {
                    // console.log(resolve[i].data)
                    result.push(resolve[i].data)
                }
                result.unshift({ msg: "Thành công" })
                res.send(result)
            })
            .catch((err) => {
                console.log(" Line 279 Lỗi ở update_dep_pos_degress_jourCard")
                res.send(err)
            })
    } catch (error) {
        console.log("Lỗi ở update_dep_pos_degress_jourCard 123")
        res.send(error)
    }
}
const getUserInfor = async (req, res) => {
    try {
        let { headers: { authorization } } = req;
        const result = await axios({
            url: `http://dev.userbe.tuoitre.vn/users/users/me/`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        })
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getProfile,
    create_dep_pos_degree_jourCard,
    update_dep_pos_degress_jourCard,
    getProfileByUserID,
    getUserInfor,
    update_dep_pos_degress_jourCard2
}