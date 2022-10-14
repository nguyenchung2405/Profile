const axios = require("axios");
const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY1NzE1MDg4LCJleHAiOjc3MTM3MTUwODgsIm5iZiI6MTY2NTcxNTA4OCwianRpIjoiRUtFeUU5RzYzR0FBbWJtRiIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.VgQCn6oLxl4pV9u2iw2oMLVcTEYOcnH4flIJrmDi6B8";

const createProfile = async (req,res,next)=>{
    try {
        let {profile} = req.body;
        let {user_id} = req;
        profile["user_id"] = user_id;
        const result = await axios({
            url: `http://192.168.61.116/api/profiles`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: profile
        });
        let {data: {code, id}} = result;
        console.log({pro_id:result.data.id})
        if(code = 200){
            req.pro_id = id
            next()
        } else {
            res.send("Create Profile failed")
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createProfile
}