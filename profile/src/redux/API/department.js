import axios from "axios";

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY2Njc0NTE3LCJleHAiOjc3MTQ2NzQ1MTcsIm5iZiI6MTY2NjY3NDUxNywianRpIjoiOFZvQklmWW9ZeW11YmRrWSIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.LBWj5Ubn8jam1y4uvZern2vQ7orUqByYYf-mRMEDQnY";
const local = "http://localhost:3001";

export async function getDepPosAPI(page,pageSize){
    try {
        const res = await axios({
            url: `${local}/api/departments/?page_size=${pageSize}&page=${page}`,
            method: "GET"
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}