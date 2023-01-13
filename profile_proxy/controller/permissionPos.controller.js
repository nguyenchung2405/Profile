const axios = require("axios");
const local = "http://dev.userbe.tuoitre.vn";

const getPermissionPos = (req, res)=>{
    try {
        let {position_management_ids} = req.query;
        let {headers: {authorization}} = req;
        const result_notPer = axios({
            url: `${local}/permission-position/position-management?position_management_ids=${position_management_ids}&is_except=true`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        });
        const result_havePer = axios({
            url: `${local}/permission-position/position-management?position_management_ids=${position_management_ids}&is_except=false`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        });
        Promise.all([result_havePer, result_notPer])
        .then(resolve => {
            let result = [];
            for(reso of resolve){
                result.push(reso.data)
            }
            result.unshift({msg: "Thành công"})
            res.send(result)
        })
        .catch(err => {
            res.send(err)
        })
    } catch (error) {
        res.send(error)
    }
};

const deletePermissionPosition = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/permission-position/`,
            method: "DELETE",
            headers: {
                Authorization: authorization
            },
            data: req.body
        });
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
};

const postPermissionPosition = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/permission-position/`,
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

module.exports = {
    getPermissionPos,
    deletePermissionPosition,
    postPermissionPosition
}