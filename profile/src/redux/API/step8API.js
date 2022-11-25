import axios from "axios"
import {local , TOKEN} from "../../title/title";

export async function getDistrictsStep8API(codeProvince){
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

export async function createFamilyRelationshipAPI(data){
    try {
        let { noiOHienTai, ...rest} = data;
        // let newData = {
        //     ...rest,
        //     residence: `${noiOHienTai.diaChi}, ${noiOHienTai.huyen}, ${noiOHienTai.quan}, ${noiOHienTai.tinh}`
        // }
        let newData = {
            ...rest,
            residence: "abc"
        }
        console.log(newData)
        const res = await axios({
            url: `${local}/api/family-relationship`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: newData
        })
        return res.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function updateFamilyRelationshipAPI(data){
    try {
        let {id} = data;
        const res = await axios({
            url: `${local}/api/family-relationship/${id}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data
        })
        return res.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}