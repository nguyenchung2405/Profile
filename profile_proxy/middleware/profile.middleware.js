const axios = require("axios");

const createProfile = async (req, res, next) => {
    try {
        let { profile } = req.body;
        let { user_id } = req;
        let { headers: { authorization } } = req;
        // console.log(authorization)
        profile["user_id"] = user_id;
        // console.log(profile)
        const result = await axios({
            url: `${process.env.apiProfile}/profiles`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: profile
        });
        // console.log(result)
        let { data: { code, data: { id } } } = result;
        console.log({ pro_id: id })
        if (code == 200) {
            req.pro_id = id
            next()
        } else {
            res.send("Create Profile failed")
        }
    } catch (error) {
        console.log("lỗi create profile")
        res.send(error?.response?.data)
    }
}

const checkUserID = (req, res, next) => {
    let { user_id } = req.body;
    // console.log("check user id: ",user_id)
    if (user_id) {
        req.user_id = user_id
        next()
    } else {
        res.send("user_id không tồn tại")
    }
}

const updateProfile = async (req, res, next) => {
    try {
        // console.log("updateProfile")
        let { profile, pro_id } = req.body;
        let { user_id, ...rest } = profile;
        let { headers: { authorization } } = req;
        let {action}= req.query;
        // console.log(action, rest, pro_id)
        const result = await axios({
            url: `${process.env.apiProfile}/profiles/${pro_id}?action=${action}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: rest
        });
        // console.log(result)
        let { data: { code } } = result;
        // console.log(code)
        if (code == 200) {
            next();
        } else {
            res.send(result.data)
        }
    } catch (error) {
        console.log("Lỗi ở updateProfile")
        if(error?.response?.data?.detail){
            res.send(error?.response?.data?.detail)
        }else {
            res.send(error)
        }
    }
}

module.exports = {
    createProfile,
    checkUserID,
    updateProfile
}