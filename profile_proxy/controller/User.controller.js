const axios = require("axios");
const local =  "http://dev.userbe.tuoitre.vn";

const getAvatar = async (req,res)=>{
    try {
        let {id} = req.params;
        const result = await axios({
            url: `${local}/user-resources/user/${id}`,
            method: "GET"
        })
        res.send(result.data)
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}

module.exports = {
    getAvatar
}