import axios from "axios"

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