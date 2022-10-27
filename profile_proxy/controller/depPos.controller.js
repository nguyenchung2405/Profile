const axios = require("axios");
const local =  "http://dev.profilebe.tuoitre.vn";

const deleteDepPos = async (req,res)=>{
    try {
        let {depPosID} = req.params;
        const result = await axios({
            url: `${local}/user-dep-pos/${depPosID}`,
            method: "DELETE"
        });
        res.send(result.data);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    deleteDepPos
}