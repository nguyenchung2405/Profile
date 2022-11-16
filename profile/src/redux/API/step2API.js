import axios from "axios";
import {local , TOKEN} from "../../title/title";

export async function createPersonalHistoryAPI(data){
    try {
        const result = await axios({
            url: `${local}/api/personal-history`,
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

export async function deletePersonalHistoryAPI(personal_history_id){
    try {
        const result = await axios({
            url: `${local}/api/personal-history/${personal_history_id}`,
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