import axios from "axios";
import {TOKEN} from "../TOKEN";

const getUserList = async (req,res)=>{
    try {
        const {page, per_page} = req.query;
        const res = axios({
            url: `http://192.168.61.116/api/user?page=${page}&per_page=${per_page}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
    } catch (error) {
        console.log(error)
    }
}