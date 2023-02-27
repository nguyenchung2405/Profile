const axios = require("axios");
const local =  "http://dev.profilebe.tuoitre.vn";

const deleteDepPos = async (req,res)=>{
    try {
        let {depPosID} = req.params;
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/user-dep-pos/${depPosID}`,
            method: "DELETE",
            headers: {
                Authorization: authorization
            }
        });
        res.send(result.data);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    deleteDepPos
}