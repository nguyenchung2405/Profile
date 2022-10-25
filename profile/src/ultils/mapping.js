import moment from "moment"

export const mappingProfileStep1 = (formValues)=>{
    // Giới tính: Nam là 1, Nữ là 2, Khác tạm chưa có
    const {noiOHienTai: {diaChi, huyen, quan, tinh}} = formValues;
    return {
        "user_id": "",
        "full_name": formValues.hoTen,
        "pen_name": formValues.tenThuongGoi,
        "birth_day": Date.parse(moment(formValues.ngayThangNamSinh, "DD-MM-YYYY")) / 10000,
        "gender": formValues.gioiTinh,
        "birth_place": `${formValues.noiSinh.huyen}, ${formValues.noiSinh.quan}, ${formValues.noiSinh.tinh}`,
        "home_town": `${formValues.queQuan.huyen}, ${formValues.queQuan.quan}, ${formValues.queQuan.tinh}`,
        "local_phone": formValues.soDienThoaiNoiBo,
        "resident": `${diaChi}, ${huyen}, ${quan}, ${tinh}`,
        "ethnic": formValues.danToc,
        "religion": formValues.tonGiao,
        "background_origin": formValues.thanhPhanXuatThan,
        "occupation": formValues.ngheNghiep,
        "identity_card": formValues.canCuocCD,
        "identity_card_when": Date.parse(moment(formValues.ngayCapCCCD, "DD-MM-YYYY")) / 10000,
        "identity_card_where": formValues.noiCapCCCD
    }
}

export const mappingDepartmentPosition = (data)=>{
    let depPosArr = [];
    for(let depPos of data.phongBanCVObj){
        depPosArr.push({
            "user_id": "",
            "dep_id": depPos.phongBan,
            "pos_man_id": depPos.chucVu,
            "appointment_date": Date.parse(moment(data.ngayBoNhiem, "DD-MM-YYYY")) / 10000,
            "expire_date": Date.parse(moment(data.ngayHetHanBoNhiem, "DD-MM-YYYY")) / 10000,
            "note": Date.parse(moment(data.ngayDuocTuyenDung, "DD-MM-YYYY")) / 10000,
            "is_primary":"1"
        })
    }
    return depPosArr;
}

export const mappingUserDegree = (data)=>{
    return {
        "pro_id": "",
        "user_id": "",
        "begin_study": null,
        "diploma": data.chuyenMon,
        "education": data.hocVan,
        "end_study": null,
        "foreign_language": data.ngoaiNgu,
        "majors": "",
        "note": "",
        "permanent_residence": `${data.hoKhauThuongTru.diaChi}, ${data.hoKhauThuongTru.huyen}, ${data.hoKhauThuongTru.quan},${data.hoKhauThuongTru.tinh}`,
        "politic": data.lyLuanCT,
        "school_name": "",
        "type": ""
    }
}

export const mappingJournalistCard = (data)=>{
    return {
        "pro_id": "",
        "user_id": "",
        "number": data.soTheNhaBao,
        "number_day": Date.parse(moment(data.ngayCapTheNhaBao, "DD-MM-YYYY")) / 10000,
        "begin": Date.parse(moment(data.theCoHieuLucTu, "DD-MM-YYYY")) / 10000,
        "end": Date.parse(moment(data.theCoHieuLucDen, "DD-MM-YYYY")) / 10000,
        "note":""
    }
}

function tachDuLieu(string, capDuLieu = 3) {
    let diaChi, huyen, quan, tinh, String;
    // console.log(string)
    if(string === "" || string === undefined || string === null){
      return ""
    }
    if (capDuLieu === 3) {
      for (let i = 0; i <= 2; i++) {
        if (i === 0) {
          let index = string.indexOf(",");
          huyen = string.slice(0, index);
          String = string.slice(index + 1);
          // console.log(String);
        } else if (i === 1) {
          let index = String.indexOf(",");
          quan = String.slice(0, index);
          tinh = String.slice(index + 1);
          // console.log(String);
        }
      }
      // console.log(huyen, quan, tinh);
      return {huyen, quan, tinh}
    } else if (capDuLieu !== 3) {
      for (let i = 0; i <= 2; i++) {
        if (i === 0) {
          let index = string.indexOf(",");
          diaChi = string.slice(0, index);
          String = string.slice(index + 1);
          // console.log(String);
        } else if (i === 1) {
          let index = String.indexOf(",");
          // console.log(index)
          huyen = String.slice(0, index);
          String = String.slice(index + 1);
        } else if (i === 2) {
          let index = String.indexOf(",");
          quan = String.slice(0, index);
          tinh = String.slice(index + 1);
        }
      }
      // console.log(diaChi, huyen, quan, tinh);
      return {diaChi, huyen, quan, tinh}
    }
}

function tachDuLieuPhongBan_ChucVu(data){
  // console.log(data)
    let PB_CV_Arr = [];
    for(let dep_pos of data.user_dep_pos){
      let {department: {id : dep_id}, position_management: {position : {id : pos_id}}} = dep_pos;
      PB_CV_Arr.push({
        phongBan: dep_id,
        chucVu: pos_id
      })
    }
    // console.log(PB_CV_Arr)
    return PB_CV_Arr;
}

export const mappingProfileAPI = (values)=>{
  // console.log(values)
    return {
        canCuocCD: values.identity_card,
        chuyenMon: values?.user_degree[0]?.diploma,
        danToc: values.ethnic,
        email: "doannguyenchung@gmail.com",
        gioiTinh: values.gender,
        hoKhauThuongTru: tachDuLieu(values?.user_degree[0]?.permanent_residence, 4),
        hoTen: values.full_name,
        hocVan: values?.user_degree[0]?.education,
        lyLuanCT: values?.user_degree[0]?.politic,
        ngayBoNhiem: "01-10-2022",
        ngayCapCCCD: moment(new Date((values.identity_card_when * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        ngayCapTheNhaBao: moment(new Date((values?.journalist_card[0]?.number_day * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        ngayDuocTuyenDung: "21-07-2022",
        ngayHetHanBoNhiem: "03-10-2022",
        ngayThangNamSinh: moment(new Date((values.birth_day * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        ngheNghiep: values.occupation,
        ngoaiNgu: values?.user_degree[0]?.foreign_language,
        noiCapCCCD: values.identity_card_where,
        noiOHienTai: tachDuLieu(values.resident, 4),
        noiSinh: tachDuLieu(values.birth_place, 3),
        phongBanCVObj: tachDuLieuPhongBan_ChucVu(values),
        queQuan: tachDuLieu(values.home_town, 3),
        soDienThoai: "0327572323",
        soDienThoaiNoiBo: values.local_phone,
        soTheNhaBao: values?.journalist_card[0]?.number,
        tenThuongGoi: values.pen_name,
        thanhPhanXuatThan: values.background_origin,
        theCoHieuLucDen: moment(new Date((values?.journalist_card[0]?.end * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        theCoHieuLucTu: moment(new Date((values?.journalist_card[0]?.begin * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        tonGiao: values.religion,
    }
}