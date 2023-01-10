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

const createFamilyRelaStep7 = async (req,res)=>{
    try {
        let {headers: {authorization}} = req;
        let {valueForm} = req.body;
        const result_voChong = await axios({
            url: `${local}/family-relationship`,
            method: "POST",
            headers:{
                Authorization: authorization
            },
            data: valueForm
        });
        let resArr = [];
        resArr.push(result_voChong.data)
        // resArr.push(result_con.data)
        resArr.unshift({msg: "Thành công"})
        res.send(resArr)
    } catch (error) {
        res.send(error)
    }
};

const createFamilyRelaStep7Con = async (req,res)=>{
    try {
        let {headers: {authorization}} = req;
        const result_con = await axios({
            url: `${local}/family-relationship`,
            method: "POST",
            headers:{
                Authorization: authorization
            },
            data: req.body
        });
        res.send({msg: "Thành công", dataResponse: result_con.data})
    } catch (error) {
        res.send(error)
    }
}

const updateFamilyRelaStep7 = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        let {valueForm} = req.body;
        let {id: idVoChong, ...restVoChong} = valueForm;
        // let {id: idCon, ...restCon} = valueFormCon;
        const result_voChong = await axios({
            url: `${local}/family-relationship/${idVoChong}`,
            method: "PUT",
            headers:{
                Authorization: authorization
            },
            data: restVoChong
        });
        let resArr = [];
        resArr.push(result_voChong.data)
        // resArr.push(result_con.data)
        resArr.unshift({msg: "Thành công"})
        res.send(resArr)
    } catch (error) {
        res.send(error)
    }
}

const updateFamilyRelaConStep7 = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        let {id: idCon} = req.body;
        const result_con = await axios({
            url: `${local}/family-relationship/${idCon}`,
            method: "PUT",
            headers:{
                Authorization: authorization
            },
            data: req.body
        });
        res.send(result_con.data)
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
    updateFamilyRelationship,
    createFamilyRelaStep7,
    updateFamilyRelaStep7,
    createFamilyRelaStep7Con,
    updateFamilyRelaConStep7
}