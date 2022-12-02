import axios from "axios"
import {local , TOKEN} from "../../title/title"

export async function getProfileByID_API(pro_id){
    try {
        const res = await axios({
            url: `${local}/api/fe/profiles/users/${pro_id}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        })
        return res;
    } catch (error) {
        console.log(error)
        return error.response;
    }
}

export async function updateProfile_API(valuesUpdate){
    try {
        // let {user_id, jour_card_id, user_degree_id, pro_id} = valuesUpdate;
        // console.log(user_id, jour_card_id, user_degree_id, pro_id)
        const res = await axios({
            url: `${local}/api/profiles/update`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: valuesUpdate
            
        })
        return res;
    } catch (error) {
        console.log(error)
    }
}

export async function createProfile_API(data){
    try {
        // console.log(data)
        const res = await axios({
            url: `${local}/api/create`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
            
        });
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function getAvatar_API(userID){
    try {
        // console.log(userID)
        const res = await axios({
            url: `${local}/api/user/resources/${userID}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
        });
        // console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function onlyCreateProfileAPI(data){
    try {
        const res = await axios({
            url: `${local}/api/create/profile`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data
        });
    } catch (error) {
        console.log(error)
    }
}

export async function deleteDepPosAPI(dep_pos_id){
    try {
        const res = await axios({
            url: `${local}/api/user-dep-pos/${dep_pos_id}`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
        });
    } catch (error) {
        console.log(error)
    }
}