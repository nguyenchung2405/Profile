import axios from "axios";

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY2Njc0NTE3LCJleHAiOjc3MTQ2NzQ1MTcsIm5iZiI6MTY2NjY3NDUxNywianRpIjoiOFZvQklmWW9ZeW11YmRrWSIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.LBWj5Ubn8jam1y4uvZern2vQ7orUqByYYf-mRMEDQnY";
const local = "http://localhost:3001";

export async function getPositionListAPI(page,pageNumber){
    try {
        const res = await axios({
            url: `${local}/api/positions/?page_size=${pageNumber}&page=${page}&sort_by=id&order=desc`,
            method: "GET"
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getPositionTypeListAPI(){
    try {
        const res = await axios({
            url: `${local}/api/positions/position-types/?page_size=10&page=1&sort_by=id&order=desc`,
            method: "GET"
        })
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export async function createPosTypeAPI(data){
    try {
        const res = await axios({
            url: `${local}/api/positions/position-types`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        });
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function updatePosTypeAPI(data){
    try {
        let {id} = data;
        const res = await axios({
            url: `${local}/api/positions/position-types/${id}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        })
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function deletePosTypeAPI(pos_type_id){
    try {
        const res = await axios({
            url: `${local}/api/positions/position-types/${pos_type_id}`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function createPositionAndManagementAPI(data){
    try {
        const res = await axios({
            url: `${local}/api/positions/position-management/`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        })
        return res.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function updatePositionAndManagementAPI(data){
    try {
        const res = await axios({
            url:`${local}/api/positions/position-management/`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: data
        })
        return res.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}