const axios = require("axios")

const checkQuery = async (req, res, next) => {
    try {
        let { page, per_page } = req.query;
        let { headers: { authorization } } = req;
        if (page && per_page) {
            const result = await axios({
                url: `http://dev.userbe.tuoitre.vn/users/?page_size=3&page=${page}&sort_by=id&order=desc`,
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
            url: `http://dev.userbe.tuoitre.vn/users`,
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
        console.log({ user_id: result.data.data.id })
        let user_id = result.data.data.id;
        req.user_id = user_id;
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