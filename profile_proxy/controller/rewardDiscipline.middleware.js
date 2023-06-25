const axios = require("axios")
const local =  process.env.apiProfile;

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

const deleteRewardDiscipline = async (req,res)=>{
    try {
        let {headers: {authorization}} = req;
        let {re_dis_id} = req.params;
        const result = await axios({
            url: `${local}/reward-discipline/${re_dis_id}`,
            method: "DELETE",
            headers:{
                Authorization: authorization
            }
        });
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

const updateRewardDiscipline = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        let {re_dis_id} = req.params;
        const result = await axios({
            url: `${local}/reward-discipline/${re_dis_id}`,
            method: "PUT",
            headers:{
                Authorization: authorization
            },
            data: req.body
        });
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    createRewardDiscipline,
    deleteRewardDiscipline,
    updateRewardDiscipline
}