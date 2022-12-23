import axios from "axios"
import { local, TOKEN } from "../../title/title";

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

export async function createFamilyRelaAPI(data){
    try {
        let {valueForm, valueFormCon} = data;
        let {queQuan, ...restVoChong} = valueForm;
        let {noiOHienTai, ...restCon} = valueFormCon;
        let newVoChong = {
            ...restVoChong,
            home_town: `${queQuan?.huyen}, ${queQuan?.quan}, ${queQuan?.tinh}`
        };
        let newCon = {
            ...restCon,
            residence: `${noiOHienTai?.diaChi}, ${noiOHienTai?.huyen}, ${noiOHienTai?.quan}, ${noiOHienTai?.tinh}`
        }
        // console.log(newVoChong, newCon)
        const result = await axios({
            url: `${local}/api/family-relationship/step7`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: {
                valueForm: newVoChong,
                valueFormCon: newCon
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function updateFamilyRelaAPI(data){
    try {
        let {valueForm, valueFormCon} = data;
        let {queQuan, ...restVoChong} = valueForm;
        let {noiOHienTai, ...restCon} = valueFormCon;
        let newVoChong = {
            ...restVoChong,
            home_town: `${queQuan?.huyen}, ${queQuan?.quan}, ${queQuan?.tinh}`
        };
        let newCon = {
            ...restCon,
            residence: `${noiOHienTai?.diaChi}, ${noiOHienTai?.huyen}, ${noiOHienTai?.quan}, ${noiOHienTai?.tinh}`
        }
        const result = await axios({
            url: `${local}/api/family-relationship/step7`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: {
                valueForm: newVoChong,
                valueFormCon: newCon
            }
        });
        return result.data;
    } catch (error) {
        console.log(error.response)
        return "Thất bại"
    }
}