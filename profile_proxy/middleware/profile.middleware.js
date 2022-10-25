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
        console.log(error)
    }
}

const checkUserID = (req,res,next)=>{
    let {user_id} = req.body;
    console.log(user_id)
    if(user_id){
        req.user_id = user_id
        next()
    } else {
        res.send("user_id không tồn tại")
    }
}

module.exports = {
    createProfile,
    checkUserID
}