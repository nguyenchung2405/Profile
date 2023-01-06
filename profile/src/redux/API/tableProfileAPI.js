import axios from "axios"
import {local , TOKEN} from "../../title/title";

export async function searchAPI(data, page, pageNumber){
    try {
        let full_name = data?.full_name || "";
        let dep_names = data?.dep_names || "";
        let pos_names = data?.pos_names || "";
        // console.log(page, pageNumber)
        // console.log(data)
        const result = await axios({
            url: `${local}/api/user/?full_name=${full_name}&dep_names=${dep_names}&pos_names=${pos_names}&is_in_user_group=true&page_size=${pageNumber}&page=${page}&sort_by=id`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        })
        return result.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}