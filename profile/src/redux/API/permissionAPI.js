import axios from "axios"
import { local, TOKEN } from "../../title/title";

export async function getPermissionListAPI(data){
    try {
        let {page, pageNumber} = data;
        const result = await axios({
            url: `${local}/api/permissions/?page=${page}&page_size=${pageNumber}`,
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

export async function createPermissionAPI(data){
    try {
        let newData = {...data}
        newData.method = newData.method.toLowerCase();
        const result = await axios({
            url: `${local}/api/permissions`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: newData
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function updatePermissionAPI(data){
    try {
        let {id, ...rest} = data
        rest.method = rest.method.toLowerCase();
        const result = await axios({
            url: `${local}/api/permissions/${id}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: rest
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function deletePermissionAPI(per_id){
    try {
        const result = await axios({
            url: `${local}/api/permissions/${per_id}`,
            method: "DELETE",
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

export async function getTableManagementAPI(){
    try {
        const result = await axios({
            url: `${local}/api/table-management`,
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