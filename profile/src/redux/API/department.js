import axios from "axios";
import {local , TOKEN} from "../../title/title"

export async function getDepPosToSearch(){
    try {
        const depList = axios({
            url: `${local}/api/departments/?page_size=200&page=1`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        })
        const posList = axios({
            url: `${local}/api/positions/?page_size=200&page=1&sort_by=id&order=desc`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        })
        let res = Promise.all([depList, posList])
        .then(resolve => {
            // console.log(resolve)
            return resolve
        })
        .catch(err => {
            console.log(err)
            return "Thất bại"
        })
        return res
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function getDepPosAPI(page,pageSize){
    try {
        const res = await axios({
            url: `${local}/api/departments/?page_size=${pageSize}&page=${page}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getDepInforAPI(dep_id){
    try {
        const res = await axios({
            url: `${local}/api/departments/${dep_id}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function updateDepartmentInforAPI(data){
    try {
        let {id: dep_id, ...rest} = data;
        // console.log(dep_id, rest)
        const res = await axios({
            url: `${local}/api/departments/${dep_id}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: rest
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function createDepartmentAPI(data){
    try {
        const res = await axios({
            url: `${local}/api/departments`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}