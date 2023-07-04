import axios from "axios"
import {local , TOKEN} from "../../title/title"

export async function getProfileByID_API(pro_id){
    try {
        const res = await axios({
            url: `${local}/api/fe/profiles/users/${pro_id}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
        })
        return res;
    } catch (error) {
        console.log(error)
        return error.response;
    }
}

export async function updateProfile_API(valuesUpdate, action){
    console.log("Line 21",action)
    console.log(valuesUpdate);
    try {
        // let {user_id, jour_card_id, user_degree_id, pro_id} = valuesUpdate;
        // console.log(user_id, jour_card_id, user_degree_id, pro_id)
        // console.log("update profile API",action)
        const res = await axios({
            url: `${local}/api/profiles/update?action=${action}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: valuesUpdate
        })
        return res;
    } catch (error) {
        console.log(error)
        return "Cập nhật thất bại"
    }
}

export async function updateProfileActiveAPI(valuesUpdate){
    console.log("dadasqweqw")
    try {
        let {action, ...resData } = valuesUpdate;
        let res;
        console.log(action, resData)
        if(action.length > 0 && action === "inactive"){
            res = await axios({
                url: `${local}/api/profiles/update?action=${action}`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + TOKEN
                },
                data: resData
            })
        } else {
            res = await axios({
                url: `${local}/api/profiles/updateactive`,
                method: "PUT",
                headers: {
                    Authorization: "Bearer " + TOKEN
                },
                data: valuesUpdate
            })
        }
        return res;
    } catch (error) {
        console.log(error)
        return "Thất bại"
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
        return res.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
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

export async function getProfileByUserIDAPI(User_ID){
    try {
        const result = await axios({
            url: `${local}/api/profiles/user/${User_ID}`,
            method: "GET",
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

export async function getProfileByToken(){
    try {
        const result = await axios({
            url: `${local}/api/users/users/me/`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        })
        // console.log(result.data)
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function deleteResourceAPI(resource_id){
    try {
        const result = await axios({
            url: `${local}/api/user/resources/${resource_id}`,
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

export async function getDetailUserAPI(user_id){
    try {
        const result = await axios({
            url: `${local}/api/user/${user_id}`,
            method: "GET",
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