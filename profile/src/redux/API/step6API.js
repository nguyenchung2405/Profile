import axios from "axios"
import {local , TOKEN} from "../../title/title";

export async function createRewardDisciplineAPI(data){
    try {
        const res = await axios({
            url: `${local}/api/reward-discipline`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data
        })
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}