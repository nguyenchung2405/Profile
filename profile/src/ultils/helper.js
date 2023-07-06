import moment from "moment";
import docCookie from "doc-cookies"

export let handleDateTime = (date) => {
    try {
        let convert;
        if (typeof date === "number") {
            // convert từ số sang chuỗi DD-MM-YYYY
            let convert1 = moment(new Date(date)).format("DD-MM-YYYY")
            convert = moment(convert1, "DD-MM-YYYY")
        } else {
            if (date.includes(".000Z")) {
                let convert1 = moment(new Date(date)).format("DD-MM-YYYY")
                convert = moment(convert1, "DD-MM-YYYY")
            } else {
                let convert1 = moment(new Date(date.concat(".000Z"))).format("DD-MM-YYYY")
                convert = moment(convert1, "DD-MM-YYYY")
            }
        }
        return convert
    } catch (error) {
        console.log(error)
    }
}

export let checkMicroFe = () => {
    if (
        window.location.href.includes("3000") ||
        window.location.href.includes("profileservice")
        || 
        window.location.href.includes("3001") || window.location.href.includes("nhatoi") || window.location.href.includes("192.168.61.25")) {
        return false;
    } else {
        return true;
    }
}

export let getTokenInCookie = () => {
    try {
        let tokenCookie = docCookie.getItem("usertoken")
        if (!tokenCookie) {
            // khi push code lên server
            return null
            // Khi test trên local
            // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzU2LCJleHAiOjI3NTA1NTQ3MzB9.drBO_G7F9JCDi7XmLRmf14QvUqYe8cW4inBIbQsmRYI"
            // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNzUwNDExMDg3fQ.uWeEJEXHyNysw85k22m0s6dFNi4nJFAO8NS8leY6fyA"
        }
        return tokenCookie
    } catch (error) {
        console.log(error)
    }
}
export let checkUserPermission = (permissionList, ...namePermission) => {
    try {
        let result = true;
        for (let perName of namePermission) {
            if (!permissionList.includes(perName)) {
                result = false;
            }
        }
        return result;
    } catch (error) {
        console.log(error)
    }
}