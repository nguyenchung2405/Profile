const axios = require("axios");
const FormData = require("form-data");
const path = require("path");
// const fs = require("fs");

const importUser = async (req,res)=>{
    // try {
    //     // console.log("vô tới controller")
    //     let {file} = req;
    //     let {headers: {authorization}} = req;
    //     let {start_row, end_row} = req.query;
    //     const pathFileImport = path.join(path.dirname(file.path), file.filename)
    //     const form = new FormData();
    //     form.append("file" , fs.readFileSync(pathFileImport), file.filename)
    //     const result = await axios({
    //         url: `${process.env.apiProfile}/profiles/importation?start_row=${start_row}&end_row=${end_row}`,
    //         method: "POST",
    //         headers: {
    //             Authorization: authorization
    //         },
    //         data: form
    //     })
    //     console.log(result)
    //     res.send(result.data)
    // } catch (error) {
    //     res.send(error)
    // }
}
module.exports = {
    importUser,
}