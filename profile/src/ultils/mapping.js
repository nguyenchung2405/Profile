import moment from "moment"

export const mappingProfileStep1 = (formValues)=>{
    // Giới tính: Nam là 1, Nữ là 2, Khác tạm chưa có
    const {noiOHienTai: {diaChi, huyen, quan, tinh}} = formValues;
    return {
        "user_id": "",
        "pro_name": formValues.hoTen,
        "pro_pen_name": formValues.tenThuongGoi,
        "pro_birth_day": Date.parse(moment(formValues.ngayThangNamSinh, "DD-MM-YYYY")) / 10000,
        "pro_gender": formValues.gioiTinh,
        "pro_birth_place": `${formValues.noiSinh.huyen}, ${formValues.noiSinh.quan}, ${formValues.noiSinh.tinh}`,
        "pro_home_town": `${formValues.queQuan.huyen}, ${formValues.queQuan.quan}, ${formValues.queQuan.tinh}`,
        "pro_local_phone": formValues.soDienThoaiNoiBo,
        "pro_resident": `${diaChi}, ${huyen}, ${quan}, ${tinh}`,
        "pro_ethnic": formValues.danToc,
        "pro_religion": formValues.tonGiao,
        "pro_background_origin": formValues.thanhPhanXuatThan,
        "pro_occupation": formValues.ngheNghiep,
        "pro_identity_card": formValues.canCuocCD,
        "pro_identity_card_when": Date.parse(moment(formValues.ngayCapCCCD, "DD-MM-YYYY")) / 10000,
        "pro_identity_card_where": formValues.noiCapCCCD
    }
}

export const mappingDepartmentPosition = (data)=>{
    let depPosArr = [];
    for(let depPos of data.phongBanCVObj){
        depPosArr.push({
            "user_id": "",
            "dep_id": depPos.phongBan,
            "pos_id": depPos.chucVu,
            "part_id": depPos.to,
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
        "deg_begin_study": null,
        "deg_diploma": data.chuyenMon,
        "deg_education": data.hocVan,
        "deg_end_study": null,
        "deg_foreign_language": data.ngoaiNgu,
        "deg_majors": "",
        "deg_note": "",
        "deg_permanent_residence": `${data.hoKhauThuongTru.diaChi}, ${data.hoKhauThuongTru.huyen}, ${data.hoKhauThuongTru.quan},${data.hoKhauThuongTru.tinh}`,
        "deg_politic": data.lyLuanCT,
        "deg_school_name": "",
        "deg_type": ""
    }
}

export const mappingJournalistCard = (data)=>{
    return {
        "pro_id": "",
        "user_id": "",
        "car_number": data.soTheNhaBao,
        "car_number_day": Date.parse(moment(data.ngayCapTheNhaBao, "DD-MM-YYYY")) / 10000,
        "car_begin": Date.parse(moment(data.theCoHieuLucTu, "DD-MM-YYYY")) / 10000,
        "car_end": Date.parse(moment(data.theCoHieuLucDen, "DD-MM-YYYY")) / 10000,
        "car_note":""
    }
}

function tachDuLieu(string, capDuLieu = 3) {
    let diaChi, huyen, quan, tinh, String;
    console.log(string)
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

export const mappingProfileAPI = (values)=>{

    return {
        canCuocCD: values.pro_identity_card,
        chuyenMon: values?.userDegree?.data.deg_diploma,
        danToc: values.pro_ethnic,
        email: "doannguyenchung@gmail.com",
        gioiTinh: values.pro_gender,
        hoKhauThuongTru: tachDuLieu(values?.userDegree?.data.deg_permanent_residence, 4),
        hoTen: values.pro_name,
        hocVan: values?.userDegree?.data.deg_education,
        lyLuanCT: values?.userDegree?.data.deg_politic,
        ngayBoNhiem: "01-10-2022",
        ngayCapCCCD: moment(new Date((values.pro_identity_card_when * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        ngayCapTheNhaBao: moment(new Date((values?.journalistCard?.data.car_number_day * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        ngayDuocTuyenDung: "21-07-2022",
        ngayHetHanBoNhiem: "03-10-2022",
        ngayThangNamSinh: moment(new Date((values.pro_birth_day * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        ngheNghiep: values.pro_occupation,
        ngoaiNgu: values?.userDegree?.data.deg_foreign_language,
        noiCapCCCD: values.pro_identity_card_where,
        noiOHienTai: tachDuLieu(values.pro_resident, 4),
        noiSinh: tachDuLieu(values.pro_birth_place, 3),
        phongBanCVObj: {chucVu: 209, phongBan: 105},
        queQuan: tachDuLieu(values.pro_home_town, 3),
        soDienThoai: "0327572323",
        soDienThoaiNoiBo: values.pro_local_phone,
        soTheNhaBao: values?.journalistCard?.data.car_number,
        tenThuongGoi: values.pro_pen_name,
        thanhPhanXuatThan: values.pro_background_origin,
        theCoHieuLucDen: moment(new Date((values?.journalistCard?.data.car_end * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        theCoHieuLucTu: moment(new Date((values?.journalistCard?.data.car_begin * 10000)).toLocaleDateString(), "MM-DD-YYYY"),
        tonGiao: values.pro_religion,
    }
}