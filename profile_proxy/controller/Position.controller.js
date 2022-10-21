const axios = require("axios");
const local =  "http://dev.profilebe.tuoitre.vn";

const getPositionList = async (req,res)=>{
    try {
        let {per_page} = req.query;
        const result = await axios({
            url: `${local}/position-management/?per_page=${per_page}`,
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