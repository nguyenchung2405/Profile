const axios = require("axios");

const createProfile = async (req,res,next)=>{
    try {
        let {profile} = req.body;
        let {user_id} = req;
        let {headers: {authorization}} = req;
        // console.log(authorization)
        profile["user_id"] = user_id;
        const result = await axios({
            url: `http://dev.profilebe.tuoitre.vn/profiles`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: profile
        });
        let { data: {code, data: {id}}} = result;
        // console.log(result)
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

module.exports = {
    createProfile
}