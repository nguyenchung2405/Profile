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

module.exports = {
    getPermissionPos
}