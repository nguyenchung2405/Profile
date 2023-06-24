const axios = require("axios");
const local = "http://dev.userbe.tuoitre.vn";

const getPermissionDepPos = async (req, res) => {
    try {
        let { headers: { authorization } } = req;
        let { department_position_management_ids } = req.query;
        let result_not = await axios({
            url: `${local}/permission-department-position/position-management?department_position_management_ids=${department_position_management_ids}&is_except=true`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        })
        let result_have = await axios({
            url: `${local}/permission-department-position/position-management?department_position_management_ids=${department_position_management_ids}&is_except=false`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        })
        let result = [];
        result.push(result_have.data)
        result.push(result_not.data)
        result.unshift({ msg: "Thành công" })
        res.send(result)
    } catch (error) {
        res.send(error)
    }
};

const postPermissionDepPos = async (req, res) => {
    try {
        let { headers: { authorization } } = req;
        let result = await axios({
            url: `${local}/permission-department-position/`,
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
};

const deletePermissionDepPos = async (req, res) => {
    try {
        let { headers: { authorization } } = req;
        let result = await axios({
            url: `${local}/permission-department-position/`,
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

const getPermissionDepPosList = async (req, res) => {
    try {
        let { headers: { authorization } } = req;
        let { page, page_size } = req.query;
        const result = await axios({
            url: `${local}/permission-department-position/exists-dep-pos/list?page_size=${page_size}&page=${page}`,
            method: "GET",
            headers: {
                Authorization: authorization
            }
        });
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getPermissionDepPos,
    postPermissionDepPos,
    deletePermissionDepPos,
    getPermissionDepPosList
}