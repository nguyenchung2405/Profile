const axios = require("axios")
const local =  "http://dev.profilebe.tuoitre.vn";

const createRewardDiscipline = async (req,res)=>{
    try {
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/reward-discipline`,
            method: "POST",
            headers:{
                Authorization: authorization
            },
            data: req.body
        })
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    createRewardDiscipline
}