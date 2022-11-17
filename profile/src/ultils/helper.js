import moment from "moment";

export let handleDateTime = (date = "1995-04-05T17:00:00")=>{
    try {
        let convert;
        if(typeof date === "number"){
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