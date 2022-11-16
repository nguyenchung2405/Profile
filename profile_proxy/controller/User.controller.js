const axios = require("axios");
const local =  "http://192.168.61.116";

const getAvatar = async (req,res)=>{
    try {
        let {id} = req.params;
        const result = await axios({
            url: `${local}/api/user/resources/${id}`,
            method: "GET"
        })
        res.send(result.data)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAvatar
}