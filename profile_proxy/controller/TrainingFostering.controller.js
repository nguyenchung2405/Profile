const axios = require("axios")
const local = process.env.apiProfile;

const createTrainingFostering = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/training-fostering`,
            method: "POST",
            headers:{
                Authorization: authorization
            },
            data: req.body
        })
        res.send(result.data);
    } catch (error) {
        res.send(error)
    }
}

const deleteTrainingFostering = async (req,res)=>{
    try {
        let {headers: {authorization}} = req;
        let {tr_pos_id} = req.params;
        const result = await axios({
            url: `${local}/training-fostering/${tr_pos_id}`,
            method: "DELETE",
            headers:{
                Authorization: authorization
            },
        })
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

const updateTrainingFostering = async (req,res)=>{
    try {
        let {headers: {authorization}} = req;
        let {tr_pos_id} = req.params;
        const result = await axios({
            url: `${local}/training-fostering/${tr_pos_id}`,
            method: "PUT",
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
    createTrainingFostering,
    deleteTrainingFostering,
    updateTrainingFostering
}