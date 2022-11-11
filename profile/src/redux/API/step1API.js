import axios from "axios"
import {local , TOKEN} from "../../title/title"

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

export async function getDistricts_Wards_HoKhau_API(codeProvince){
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
            url: `${local}/api/user?page=${page}&per_page=${pageSize}`,
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
            url: `${local}/api/departments?per_page=150`,
            method: "GET"
        });
        const res_pos =  axios({
            url: `${local}/api/positions?per_page=150`,
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
            url: `${local}/api/parts`,
            method: "GET"
        });
        return res.data;
    } catch (error) {
        console.log(error)
    }
}