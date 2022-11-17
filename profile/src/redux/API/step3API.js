import axios from "axios";
import {local , TOKEN} from "../../title/title";

export async function createPartyAPI(data){
    try {
        const result = await axios({
            url: `${local}/api/party`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function updatePartyAPI(data){
    try {
        let {id} = data;
        const result = await axios({
            url: `${local}/api/party/${id}`,
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