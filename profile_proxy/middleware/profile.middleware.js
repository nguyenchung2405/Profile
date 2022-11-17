const axios = require("axios");

const createProfile = async (req,res,next)=>{
    try {
        let {profile} = req.body;
        let {user_id} = req;
        let {headers: {authorization}} = req;
        // console.log(authorization)
        profile["user_id"] = user_id;
        // console.log(profile)

        const result = await axios({
            url: `http://dev.profilebe.tuoitre.vn/profiles`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: profile
        });
        // console.log(result)
        let { data: {code, data: {id}}} = result;
        console.log({pro_id: id})
        if(code == 200){
            req.pro_id = id
            next()
        } else {
            res.send("Create Profile failed")
        }
    } catch (error) {
        res.send(error)
    }
}

const checkUserID = (req,res,next)=>{
    let {user_id} = req.body;
    // console.log("check user id: ",user_id)
    if(user_id){
        req.user_id = user_id
        next()
    } else {
        res.send("user_id không tồn tại")
    }
}

const updateProfile = async (req,res,next)=>{
    try {
        console.log("updateProfile")
        let {profile , pro_id} = req.body;
        let {user_id, ...rest} = profile;
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `http://dev.profilebe.tuoitre.vn/profiles/${pro_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: rest
        });
        // console.log(result)
        let { data: {code}} = result;
        if(code == 200){
            next();
        }
    } catch (error) {
        console.log("Lỗi ở updateProfile")
        res.send(error)
    }
}

module.exports = {
    createProfile,
    checkUserID,
    updateProfile
}