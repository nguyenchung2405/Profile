const axios = require("axios")

const checkQuery = async (req, res, next) => {
    try {
        let { page, page_size, full_name, dep_names, pos_names, per_page } = req.query;
        let { headers: { authorization } } = req;
        // console.log(`full_name: ${full_name}, dep_names: ${dep_names}, 
        // pos_names: ${pos_names}, page: ${page}, page_size: ${page_size}, per_page: ${per_page}`)
        if(full_name || dep_names || pos_names){
            // console.log("Vô đây")
            const result = await axios({
                url: `${process.env.apiUser}/users/?full_name=${encodeURI(full_name)}&dep_names=${encodeURI(dep_names)}&pos_names=${encodeURI(pos_names)}&is_in_user_group=true&page_size=500&page=1&sort_by=id&order=desc`,
                method: "GET",
                headers: {
                    Authorization: authorization
                }
            });
            // console.log(result)
            res.send(result.data)
        } else if (page && per_page) {
            // console.log("Vô đây 2")
            const result = await axios({
                url: `${process.env.apiUser}/users/?page_size=${per_page}&page=${page}&sort_by=id&order=desc`,
                method: "GET",
                headers: {
                    Authorization: authorization
                }
            });
            // console.log(result.data)
            res.send(result.data);
        } else {
            // console.log("Xuống đây")
            next()
        }
    } catch (error) {
        res.send(error)
    }
}

const createNewUser = async (req, res, next) => {
    try {
        let { profile: { full_name }, email, soDienThoai } = req.body;
        // console.log(full_name, email, soDienThoai);
        let { headers: { authorization } } = req;
        // console.log("createNewUser")
        const result = await axios({
            url: `${process.env.apiUser}/users/register`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: {
                "full_name": full_name,
                "email": email,
                "phone": soDienThoai,
                "service_management_id": 2
            }
        });
        console.log("user_id:", result.data.data?.id)
        let user_id = result.data?.data?.id;
        req.user_id = user_id;
        if(user_id && typeof +user_id === "number"){
            next();
        } else {
            res.send(result.response.data)
        }
    } catch (error) {
        console.log("lỗi ở createNewUser, POST", error.response)
        res.send(error.response.data)
    }
}

module.exports = {
    checkQuery,
    createNewUser
}