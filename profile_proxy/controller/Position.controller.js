const axios = require("axios");
const local = "http://dev.profilebe.tuoitre.vn";

const getPositionList = async (req, res) => {
    try {
        let { per_page, page, page_size } = req.query;
        let {headers: {authorization}} = req;
        let result;
        if (per_page) {
            result = await axios({
                url: `${local}/position-management/?page_size=${per_page}`,
                method: "GET",
                headers: {
                    Authorization: authorization
                },
            });
            res.send(result.data);
        } else if (page && page_size) {
            result = await axios({
                url: `${local}/position-management/?page_size=${page_size}&page=${page}&sort_by=id&order=desc`,
                method: "GET",
                headers: {
                    Authorization: authorization
                },
            });
            res.send(result.data);
        }
    } catch (error) {
        res.send(error)
    }
}

const getPositionTypeList = async (req, res) => {
    try {
        let { page_size, page, sort_by, order } = req.query;
        let { headers: { authorization } } = req;
        const result = await axios({
            url: `${local}/position-types/?page_size=${page_size}&page=${page}&sort_by=${sort_by}&order=${order}`,
            method: "GET",
            headers: { 
                // 'Content-Type': 'application/json',
                Authorization: authorization
            }
        })
        // console.log(result)
        res.send(result.data)
    } catch (error) {
        // console.log("lỗi", error)
        res.send(error)
    }
}

const createPosType = async (req, res) => {
    try {
        let { headers: { authorization } } = req;
        const result = await axios({
            url: `${local}/position-types`,
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

const updatePosType = async (req, res) => {
    try {
        let { pos_id } = req.params;
        let { identifier, level, description } = req.body;
        let { headers: { authorization } } = req;
        const result = await axios({
            url: `${local}/position-types/${pos_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: {
                identifier,
                level,
                description
            }
        });
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

const deletePosType = async (req, res) => {
    try {
        let { pos_id } = req.params;
        let { headers: { authorization } } = req;
        const result = await axios({
            url: `${local}/position-types/${pos_id}`,
            method: "DELETE",
            headers: {
                Authorization: authorization
            },
        })
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
}

const createPositionAndManagement = async (req, res) => {
    try {
        let { name, identifier } = req.body;
        let { headers: { authorization } } = req;
        const createPosition = await axios({
            url: `${local}/positions`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: {
                name: name
            }
        })
        let { id: pos_id } = createPosition.data.data;
        const createPositionManagement = await axios({
            url: `${local}/position-management`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: {
                pos_type_id: identifier,
                pos_id
            }
        })
        res.send(createPositionManagement.data)
    } catch (error) {
        res.send(error)
    }
}

const updatePositionAndManagement = async (req, res) => {
    try {
        let { pos_management_id, pos_type_id, name, pos_id } = req.body;
        let { headers: { authorization } } = req;
        // console.log(pos_management_id, pos_type_id, name, pos_id)
        const updatePosition = axios({
            url: `${local}/positions/${pos_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: { name: `${name}` }
        });
        const updatePositionManagement = axios({
            url: `${local}/position-management/${pos_management_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: {
                pos_type_id: pos_type_id,
                pos_id: pos_id
            }
        })
        Promise.all([updatePosition, updatePositionManagement])
            .then((resolve) => {
                let result = [];
                for (let i = 0; i < resolve.length; i++) {
                    // console.log(resolve[i].data)
                    result.push(resolve[i].data)
                }
                result.push({ status: 200 })
                res.send(result)
            })
            .catch((err) => {
                res.send(err)
            })
    } catch (error) {
        res.send(error)
    }
}

const deletePositionAndManagement = async (req, res) => {
    try {
        let { pos_mana_id, pos_id } = req.body;
        let { headers: { authorization } } = req;
        const deletePosition = axios({
            url: `${local}/positions/${pos_id}`,
            method: "DELETE",
            headers: {
                Authorization: authorization
            }
        });
        const deletePositionManagement = axios({
            url: `${local}/position-management/${pos_mana_id}`,
            method: "DELETE",
            headers: {
                Authorization: authorization
            }
        });
        Promise.all([deletePosition, deletePositionManagement])
            .then((resolve) => {
                let result = [];
                for (let i = 0; i < resolve.length; i++) {
                    // console.log(resolve[i].data)
                    result.push(resolve[i].data)
                }
                result.push({ status: 200 })
                res.send(result)
            })
            .catch((err) => {
                res.send(err)
            })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getPositionList,
    getPositionTypeList,
    createPosType,
    updatePosType,
    deletePosType,
    createPositionAndManagement,
    updatePositionAndManagement,
    deletePositionAndManagement
}