import axios from "axios";
import {local , TOKEN} from "../../title/title";

export async function createTrainingAPI(data){
    try {
        const result = await axios({
            url: `${local}/api/training-fostering`,
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

export async function deleteTrainingFosteringAPI(tr_fos_id){
    try {  
        const result = await axios({
            url: `${local}/api/training-fostering/${tr_fos_id}`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
        })
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function updateTrainingFosteringAPI(data){
    try {
        let {id} = data;
        const result = await axios({
            url: `${local}/api/training-fostering/${id}`,
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