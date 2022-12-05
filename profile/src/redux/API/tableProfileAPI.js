import axios from "axios"
import {local , TOKEN} from "../../title/title";

export async function searchAPI(data, page, pageNumber){
    try {
        let full_name = data?.full_name || "";
        let dep_ids = data?.dep_ids || "";
        let pos_management_ids = data?.pos_management_ids || "";
        console.log(page, pageNumber)
        // console.log(data)
        const result = await axios({
            url: `${local}/api/user/?full_name=${full_name}&dep_ids=${dep_ids}&pos_management_ids=${pos_management_ids}&is_in_user_group=true&page_size=${pageNumber}&page=${page}&sort_by=id`,
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