import axios from "axios"

const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTkyLjE2OC42MS4xMTYvYXBpL2xvZ2luIiwiaWF0IjoxNjY0MjY2NjQxLCJleHAiOjc3MTIyNjY2NDEsIm5iZiI6MTY2NDI2NjY0MSwianRpIjoiRW9FeWZOdmFlZUptTUdXdSIsInN1YiI6MSwicHJ2IjoiOTA0ZjZkMmQ4NzI1ZjJjNWI0OThiYTg1Yzk5YTE4ZGNiY2ZjMmQ4NSJ9.A0XvucOy1LdNZO_OvDMcUvKHErrN2rS18dX_RqiQeR0";
const domain = "employee.tuoitre.vn";
const tthr = "192.168.61.116"

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