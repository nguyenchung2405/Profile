const axios = require("axios");
const local =  "http://192.168.61.116";

const getPositionList = async (req,res)=>{
    try {
        let {per_page} = req.query;
        const result = await axios({
            url: `${local}/api/positions?per_page=${per_page}`,
            method: "GET"
        });
        res.send(result.data);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getPositionList
}