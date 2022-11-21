import axios from "axios";
import {local , TOKEN} from "../../title/title";

export async function createOrganizationAPI(data){
    try {
        let result = await axios({
            url: `${local}/api/organization`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data
        })
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function deleteOrganizationAPI(organ_id){
    try {
        const result = await axios({
            url: `${local}/api/organization/${organ_id}`,
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
}

export async function updateOrganizationAPI(data){
    try {
        let {id} = data;
        const result = await axios({
            url: `${local}/api/organization/${id}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data
        })
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}