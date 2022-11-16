import moment from "moment";

export let handleDateTime = (date = "1995-04-05T17:00:00")=>{
    try {
        let convert;
        
        if(typeof date === "number"){
            // convert từ số sang chuỗi DD-MM-YYYY

        
        } else {
            // convert sang chuỗi DD-MM-YYYY
            convert = moment(date, "DD-MM-YYYY")
            // convert = moment(new Date(date)).format("DD-MM-YYYY")
            console.log(convert)
        }
        return convert
    } catch (error) {
        console.log(error)
    }
}