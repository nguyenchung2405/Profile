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
            // let convertToNumber = Date.parse(date)
            // console.log(convertToNumber)
            let convert1 = moment(new Date(date)).format("DD-MM-YYYY")
            // console.log(convert1)
            convert = moment(convert1, "DD-MM-YYYY")
        }
        // console.log(convert)
        return convert
    } catch (error) {
        console.log(error)
    }
}

export let checkMicroFe = () => {
    if (window.location.href.includes("3000") || window.location.href.includes("profileservice") || window.location.href.includes("3001")) {
        return false;
    } else {
        return true;
    }
}

export let getTokenInCookie = ()=>{
    try {
        let tokenCookie = docCookie.getItem("usertoken")
        if(!tokenCookie){
            return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNzUwNDExMDg3fQ.uWeEJEXHyNysw85k22m0s6dFNi4nJFAO8NS8leY6fyA"
        }
        // console.log(tokenCookie);
        return tokenCookie
    } catch (error) {
        console.log(error)
    }
}