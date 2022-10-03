const axios = require("axios")

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

module.exports = {
    checkQuery
}