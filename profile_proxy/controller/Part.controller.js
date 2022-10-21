const axios = require("axios");
const local =  "http://dev.profilebe.tuoitre.vn";

const getParts = async (req,res)=>{
    try {
        const result = await axios({
            url: `${local}/api/parts`
        });
        res.send(result.data);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getParts
}