const axios = require("axios");
const local =  "http://dev.profilebe.tuoitre.vn";

const createPersonalHistory = async (req,res)=>{
    try {
        let {headers: {authorization}} = req;
        console.log(req.body)
        const result = await axios({
            url: `${local}/personal-history`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: req.body
        });
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

const deletePersonalHistory = async (req,res)=>{
    try {
        let {per_his_id} = req.params
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/personal-history/${per_his_id}`,
            method: "DELETE",
            headers: {
                Authorization: authorization
            }
        })
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    createPersonalHistory,
    deletePersonalHistory
}