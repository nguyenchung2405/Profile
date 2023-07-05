const axios = require("axios");
const local = process.env.apiUser;
// console.log("User controller",process.env.apiUser)

const getAvatar = async (req,res)=>{
    try {
        let {id} = req.params;
        console.log("Line 8",id)
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/user-resources/user/${id}`,
            method: "GET",
            headers: {
                Authorization: authorization
            },
        })
        // console.log("avatar",result)
        res.send(result.data)
    } catch (error) {
        // console.log(error);
        res.send(error)
    }
}

const deleteResource = async (req, res)=>{
    try {
        let {id} = req.params;
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/user-resources/${id}`,
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

const getUserPermission = async (req,res)=>{
    try {
        let {headers: {authorization}} = req;
        let result = await axios({
            url: `${local}/users/users/me/permissions`,
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

const getDetailUser = async (req, res)=>{
    try {
        let {headers: {authorization}} = req;
        let {user_id} = req.params;
        let result = await axios({
            url: `${local}/users/${user_id}`,
            method: "GET",
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
    getAvatar,
    deleteResource,
    getUserPermission,
    getDetailUser
}