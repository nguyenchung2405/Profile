import axios from "axios"
import { local, TOKEN } from "../../title/title";

export async function getPermissionListAPI(data){
    try {
        let {page, pageNumber} = data;
        const result = await axios({
            url: `${local}/api/permissions/?page=${page}&page_size=${pageNumber}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function createPermissionAPI(data){
    try {
        let newData = {...data}
        newData.method = newData.method.toLowerCase();
        const result = await axios({
            url: `${local}/api/permissions`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: newData
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function updatePermissionAPI(data){
    try {
        let {id, ...rest} = data
        rest.method = rest.method.toLowerCase();
        const result = await axios({
            url: `${local}/api/permissions/${id}`,
            method: "PUT",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: rest
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function deletePermissionAPI(per_id){
    try {
        const result = await axios({
            url: `${local}/api/permissions/${per_id}`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function getTableManagementAPI(){
    try {
        const result = await axios({
            url: `${local}/api/table-management`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function getPermissionPosListAPI(pos_mana_id){
    try {
        const result = await axios({
            url: `${local}/api/permission-position/position-management?position_management_ids=${pos_mana_id}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function deletePermissionPositionAPI(deleteArr, pos_mana_id){
    try {
        const result = await axios({
            url: `${local}/api/permission-position`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: {
                position_management_ids: [ pos_mana_id ],
                permission_ids: deleteArr
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function postPermissionPositionAPI(postArr, pos_mana_id){
    try {
        const result = await axios({
            url: `${local}/api/permission-position/`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data: {
                position_management_ids: [ pos_mana_id ],
                permission_ids: postArr
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}

export async function getPermissionDepPosAPI(dep_id, pos_id){
    try {
        const result = await axios({
            url: `${local}/api/permission-department-position/position-management?department_position_management_ids=${dep_id}%2C${pos_id}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        })
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function deletePermissDepPosAPI(data){
    try {
        const result = await axios({
            url: `${local}/api/permission-department-position/`,
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function postPermissDepPosAPI(data){
    try {
        const result = await axios({
            url: `${local}/api/permission-department-position/`,
            method: "POST",
            headers: {
                Authorization: "Bearer " + TOKEN
            },
            data
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function getPermissionDepPosListAPI(page, pageNumber){
    try {
        const result = await axios({
            url: `${local}/api/permission-department-position/exists-dep-pos/list?page_size=${pageNumber}&page=${page}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return result.data;
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
};

export async function getPermissionPositionListAPI(page, pageNumber){
    try {
        const result = await axios({
            url: `${local}/api/permission-position/exists-dep-pos/list?page_size=${pageNumber}&page=${page}`,
            method: "GET",
            headers: {
                Authorization: "Bearer " + TOKEN
            }
        });
        return result.data
    } catch (error) {
        console.log(error)
        return "Thất bại"
    }
}