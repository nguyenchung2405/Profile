const axios = require("axios")
const local =  "http://dev.profilebe.tuoitre.vn";

const createFamilyRelationship = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/family-relationship`,
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

const updateFamilyRelationship = async (req, res)=>{
    try {
        let {fa_re_id} = req.params;
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/family-relationship/${fa_re_id}`,
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
    createFamilyRelationship,
    updateFamilyRelationship
}