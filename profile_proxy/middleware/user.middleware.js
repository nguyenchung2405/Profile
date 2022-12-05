const axios = require("axios")

const checkQuery = async (req, res, next) => {
    try {
        let { page, per_page, full_name, dep_ids, pos_management_ids } = req.query;
        let { headers: { authorization } } = req;
        console.log(`full_name: ${full_name}, dep_ids: ${dep_ids}, pos_management_ids: ${pos_management_ids}`)
        if(full_name || dep_ids || pos_management_ids){
            console.log("Vô đây")
            const result = await axios({
                url: `http://dev.userbe.tuoitre.vn/users/?full_name=${encodeURI(full_name)}&dep_ids=${dep_ids}&pos_management_ids=${pos_management_ids}&is_in_user_group=true&page_size=10&page=1&sort_by=id&order=desc`,
                method: "GET",
                headers: {
                    Authorization: authorization
                }
            });
            console.log(result)
            res.send(result.data)
        }
        if (page && per_page) {
            console.log("Vô đây 2")
            const result = await axios({
                url: `http://dev.userbe.tuoitre.vn/users/?page_size=${per_page}&page=${page}&sort_by=id&order=desc`,
                method: "GET",
                headers: {
                    Authorization: authorization
                }
            });
            // console.log(result)
            res.send(result.data);
        }
        console.log("Xuống đây")
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
        // console.log("createNewUser")
        const result = await axios({
            url: `http://dev.userbe.tuoitre.vn/users/register`,
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