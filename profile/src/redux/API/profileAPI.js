import axios from "axios"

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY2Njc0NTE3LCJleHAiOjc3MTQ2NzQ1MTcsIm5iZiI6MTY2NjY3NDUxNywianRpIjoiOFZvQklmWW9ZeW11YmRrWSIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.LBWj5Ubn8jam1y4uvZern2vQ7orUqByYYf-mRMEDQnY";
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
        console.log(userID)
        const res = await axios({
            url: `${local}/api/user/resources/${userID}`,
            method: "GET"
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