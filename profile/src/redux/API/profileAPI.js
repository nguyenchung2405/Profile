import axios from "axios"

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY2MzE2NzQ1LCJleHAiOjc3MTQzMTY3NDUsIm5iZiI6MTY2NjMxNjc0NSwianRpIjoibnM0YWt2NllKb01KNVlKTSIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.S8J6cOmcJDPiF_cHXYT0EufoetzKuakKmAMuI78Qh4U";
const local = "http://localhost:3001"

export async function getProfileByID_API(user_id){
    try {
        const res = await axios({
            url: `${local}/api/fe/profiles/users/${user_id}`,
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

export async function updateProfile_API(user_id,valuesUpdate){
    try {
        const res = await axios({
            url: `${local}/api/profiles/${user_id}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: {
                valuesUpdate
            }
        })
        return res;
    } catch (error) {
        console.log(error)
    }
}

export async function createProfile_API(data){
    try {
        console.log(data)
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
        const res = await axios({
            url: `${local}/api/user/resources/${userID}`,
            method: "GET"
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}