import axios from "axios";
import {local , TOKEN} from "../../title/title"


export async function getDepPosAPI(page,pageSize){
    try {
        const res = await axios({
            url: `${local}/api/departments/?page_size=${pageSize}&page=${page}`,
            method: "GET"
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
            method: "GET"
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