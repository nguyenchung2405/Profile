const axios = require("axios");
const local = "http://dev.userbe.tuoitre.vn";

const getPermissionList = async (req, res)=>{
    try {
        let {page, page_size} = req.query;
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/permissions/?page=${page}&page_size=${page_size}`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        });
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
};

const createPermission = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/permissions`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: req.body
        });
        res.send(result.data);
    } catch (error) {
        res.send(error)
    }
}

const updatePermission = async (req, res)=>{
    try {
        let {per_id} = req.params;
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/permissions/${per_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: req.body
        });
        res.send(result.data);
    } catch (error) {
        res.send(error)
    }
};

const deletePermission = async (req, res)=>{
    try {
        let {per_id} = req.params;
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/permissions/${per_id}`,
            method: "DELETE",
            headers: {
                Authorization: authorization
            }
        });
        res.send(result.data);
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getPermissionList,
    createPermission,
    updatePermission,
    deletePermission
}