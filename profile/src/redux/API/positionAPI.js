import axios from "axios";
import {local , TOKEN} from "../../title/title"

export async function getPositionListAPI(page,pageNumber){
    try {
        const res = await axios({
            url: `${local}/api/positions/?page_size=${pageNumber}&page=${page}&sort_by=id&order=desc`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getPositionTypeListAPI(){
    try {
        const res = await axios({
            url: `${local}/api/positions/position-types/?page_size=10&page=1&sort_by=id&order=desc`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function createPosTypeAPI(data){
    try {
        const res = await axios({
            url: `${local}/api/positions/position-types`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        });
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function updatePosTypeAPI(data){
    try {
        let {id} = data;
        const res = await axios({
            url: `${local}/api/positions/position-types/${id}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        })
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function deletePosTypeAPI(pos_type_id){
    try {
        const res = await axios({
            url: `${local}/api/positions/position-types/${pos_type_id}`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function createPositionAndManagementAPI(data){
    try {
        const res = await axios({
            url: `${local}/api/positions/position-management/`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        })
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function updatePositionAndManagementAPI(data){
    try {
        const res = await axios({
            url:`${local}/api/positions/position-management/`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        })
        return res.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function deletePositionAndManagementAPI(data){
    try {
        const res = await axios({
            url:`${local}/api/positions/position-management/`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        })
        return res.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function getPositionsNameListAPI(){
    try {
        const result = await axios({
            url: `${local}/api/positions/list`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function searchPositionAPI(data){
    try {
        let pos_name = data?.pos_name || "";
        let identifier = data?.identifier || "";
        let level = data?.level || "";
        const result = await axios({
            url: `${local}/api/positions/position-management/?pos_name=${pos_name}&identifier=${identifier}&level=${level}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}