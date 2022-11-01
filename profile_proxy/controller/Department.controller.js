const axios = require("axios");
const local =  "http://dev.profilebe.tuoitre.vn";

const getDepartmentList = async (req,res)=>{
    try {
        let {per_page, page, page_size} = req.query;
        let result;
        if(per_page){
            console.log("1")
            result = await axios({
                url: `${local}/departments/?page_size=${per_page}`,
                method: "GET"
            });
        } else if(page, page_size) {
            console.log("2")
            result = await axios({
                url: `${local}/departments/?page_size=${page_size}&page=${page}&order=asc`,
                method: "GET"
            });
        }
        
        res.send(result.data);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getDepartmentList
}