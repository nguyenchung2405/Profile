import axios from "axios"
import {local , TOKEN} from "../../title/title"

export async function getUserDegreeAPI(user_degree_id){
    try {
        const res = await axios({
            url: `${local}/api/user-degree/${user_degree_id}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}