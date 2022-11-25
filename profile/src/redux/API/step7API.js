import axios from "axios"

export async function getDistrictsStep7API(codeProvince){
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