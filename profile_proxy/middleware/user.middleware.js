const axios = require("axios")

const checkQuery = async (req, res, next) => {
    try {
        let { page, per_page } = req.query;
        let { headers: { authorization } } = req;
        if (page && per_page) {
            const result = await axios({
                url: `http://192.168.61.116/api/user?page=${page}&per_page=${per_page}`,
                method: "GET",
                headers: {
                    Authorization: authorization
                }
            });
            // console.log(result)
            res.send(result.data);
        }
        next()
    } catch (error) {
        res.send(error)
    }
}

const createNewUser = async (req, res, next) => {
    try {
        let { profile: { full_name }, email, soDienThoai } = req.body;
        console.log(full_name, email, soDienThoai);
        let { headers: { authorization } } = req;
        console.log("createNewUser")
        const result = await axios({
            url: `http://192.168.61.116/api/register`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: {
                "full_name": full_name,
                "email": email,
                "phone": soDienThoai,
                "service_management_id": "2"
            }
        });
        console.log({ user_id: result.data.detail.id })
        req.user_id = result.data.detail.id;
        next();
    } catch (error) {
        console.log("lỗi ở createNewUser, POST", error)
        res.send(error)
    }
}

module.exports = {
    checkQuery,
    createNewUser
}