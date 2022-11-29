const axios = require("axios");
const local =  "http://dev.profilebe.tuoitre.vn";

const getDepartmentList = async (req,res)=>{
    try {
        let {per_page, page, page_size} = req.query;
        let result;
        if(per_page){
            result = await axios({
                url: `${local}/departments/?page_size=${per_page}`,
                method: "GET"
            });
        } else if(page, page_size) {
            result = await axios({
                url: `${local}/departments/?page_size=${page_size}&page=${page}&order=asc&sort_by=parent_id`,
                method: "GET"
            });
        }
        // console.log("kết quả",result.data)
        res.send(result.data);
    } catch (error) {
        console.log(error)
        // res.send(error)
    }
}

const getDepInfor = async (req,res)=>{
    try {
        let {dep_id} = req.params;
        const result = await axios({
            url: `${local}/departments/${dep_id}`,
            method: "GET",
            
        })
        res.send(result.data);
    } catch (error) {
        res.send(error)
    }
}

const updateDepInfor = async (req,res)=>{
    try {
        let {dep_id} = req.params;
        let {headers: {authorization}} = req;
        // console.log(authorization)
        // console.log(req.body)
        const result = await axios({
            url: `${local}/departments/${dep_id}`,
            method: "PUT",
            headers: {
                Authorization: authorization
            },
            data: req.body
        })
        res.send(result.data);
    } catch (error) {
        res.send(error)
    }
}

const createDepartment = async (req,res) => {
    try {
        // console.log("data", req.body)
        let {headers: {authorization}} = req;
        const result = await axios({
            url: `${local}/departments/`,
            method: "POST",
            headers: {
                Authorization: authorization
            },
            data: req.body
        })
        // console.log(result)
        res.send(result.data)
    } catch (error) {
        res.send({msg :"thất bại", error})
    }
}

module.exports = {
    getDepartmentList,
    getDepInfor,
    updateDepInfor,
    createDepartment
}