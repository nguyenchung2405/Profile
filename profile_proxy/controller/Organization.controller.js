const axios = require("axios")
const local =  "http://dev.profilebe.tuoitre.vn";

const createOrganization = async (req,res)=>{
    try {
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/organization`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: req.body
        })
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

const deleteOrganization = async (req, res)=>{
    try {
        let {organ_id} = req.params;
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/organization/${organ_id}`,
            method: "DELETE",
            headers: {
                Authorization: authorization
            }
        });
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

const updateOrganization = async (req, res)=>{
    try {
        let {organ_id} = req.params;
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/organization/${organ_id}`,
            method: "PUT",
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

module.exports = {
    createOrganization,
    deleteOrganization,
    updateOrganization
}