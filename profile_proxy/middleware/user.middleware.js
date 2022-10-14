const axios = require("axios")
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY1NzE1MDg4LCJleHAiOjc3MTM3MTUwODgsIm5iZiI6MTY2NTcxNTA4OCwianRpIjoiRUtFeUU5RzYzR0FBbWJtRiIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.VgQCn6oLxl4pV9u2iw2oMLVcTEYOcnH4flIJrmDi6B8"

const checkQuery = async (req,res,next)=>{
    try {
        let {page,per_page} = req.query;
        let {headers: {authorization}} = req;
        if(page && per_page){
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
        console.log(error)
    }
}

const createNewUser = async (req,res,next) => {
    try {
        let {profile : { pro_name }, email, soDienThoai} = req.body;
        console.log(pro_name, email, soDienThoai);
        const result = await axios({
            url: `http://192.168.61.116/api/register`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: {
                "full_name": pro_name,
                "email": email,
                "phone": soDienThoai
            }
        });
        console.log({user_id : result.data.detail.id})
        req.user_id = result.data.detail.id;
        next();
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    checkQuery,
    createNewUser
}