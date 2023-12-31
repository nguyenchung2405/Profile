const axios = require("axios");

const getTableManagement = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${process.env.apiEmployee}/api/table-management`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        });
        res.send(result.data);
    } catch (error) {
        res.send(error)
    }
};

module.exports = {
    getTableManagement
}