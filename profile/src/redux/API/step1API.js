import axios from "axios"

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY0MjY2NjQxLCJleHAiOjc3MTIyNjY2NDEsIm5iZiI6MTY2NDI2NjY0MSwianRpIjoiRW9FeWZOdmFlZUptTUdXdSIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.A0XvucOy1LdNZO_OvDMcUvKHErrN2rS18dX_RqiQeR0";
const proxy = "http://localhost:3001"

export async function getProvinces_API(){
    try {
        const res = await axios({
            url: "https://provinces.open-api.vn/api/p/",
            method: "GET"
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getDistricts_Wards_API(codeProvince){
    try {
        const res = await axios({
            url: `https://provinces.open-api.vn/api/p/${codeProvince}?depth=3`,
            method: "GET"
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getDistricts_Wards_HT_API(codeProvince){
    try {
        const res = await axios({
            url: `https://provinces.open-api.vn/api/p/${codeProvince}?depth=3`,
            method: "GET"
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getDistricts_Wards_ADDRESS_API(codeProvince){
    try {
        const res = await axios({
            url: `https://provinces.open-api.vn/api/p/${codeProvince}?depth=3`,
            method: "GET"
        })
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function getUserList_API(page,pageSize){
    try {
        const res = await axios({
            url: `${proxy}/api/user?page=${page}&per_page=${pageSize}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return res;
    } catch (error) {
        console.log(error)
    }
}

export function getDepPosList_API(){
    try {
        const res_dep =  axios({
            url: `${proxy}/api/departments?per_page=150`,
            method: "GET"
        });
        const res_pos =  axios({
            url: `${proxy}/api/positions?per_page=150`,
            method: "GET"
        });
        return Promise.all([res_dep, res_pos])
        .then((values)=>{
            // console.log(values);
            let depList = values[0];
            let posList = values[1];
            return {depList, posList}
        })
    } catch (error) {
        console.log(error)
    }
}

export async function getPart_API(){
    try {
        let res = await axios({
            url: `${proxy}/api/parts`,
            method: "GET"
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}