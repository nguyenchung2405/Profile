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

export async function deleteRewardDisciplineAPI(re_dis_id){
    try {
        const res = await axios({
            url: `${local}/api/reward-discipline/${re_dis_id}`,
            method: "DELETE",
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

export async function updateRewardDisciplineAPI(data){
    try {
        let {id} = data;
        const res = await axios({
            url: `${local}/api/reward-discipline/${id}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data
        });
        return res.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}