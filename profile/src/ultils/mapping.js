import moment from "moment"

export const mappingProfileStep1 = (formValues) => {
  // Giới tính: Nam là 1, Nữ là 2, Khác tạm chưa có
  const { noiOHienTai: { diaChi, huyen, quan, tinh } } = formValues;
  // let a = moment(formValues.ngayThangNamSinh, "DD/MM/YYYY").toISOString()
  // console.log(moment(formValues.ngayThangNamSinh, "DD/MM/YYYY").toISOString())
  // console.log(moment(new Date(a)).format("DD/MM/YYYY"))

  return {
    "user_id": "",
    "full_name": formValues.hoTen,
    "pen_name": formValues.tenThuongGoi,
    "birth_day": moment(formValues.ngayThangNamSinh, "DD/MM/YYYY").toISOString(),
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
    "identity_card_when": moment(formValues.ngayCapCCCD, "DD/MM/YYYY").toISOString(),
    "identity_card_where": formValues.noiCapCCCD
  }
}

export const mappingDepartmentPosition = (data) => {
  let depPosArr = [];
  for (let depPos of data.phongBanCVObj) {
    depPosArr.push({
      "user_id": "",
      "dep_id": depPos.phongBan,
      "pos_man_id": depPos.chucVu,
      "appointment_date": moment(data.ngayBoNhiem, "DD/MM/YYYY").toISOString(),
      "expire_date": moment(data.ngayHetHanBoNhiem, "DD/MM/YYYY").toISOString(),
      // "note": Date.parse(moment(data.ngayDuocTuyenDung, "DD-MM-YYYY")) / 10000,
      "is_primary": "1"
    })
  }
  return depPosArr;
}

export const mappingUserDegree = (data) => {
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

export const mappingJournalistCard = (data) => {
  return {
    "pro_id": "",
    "user_id": "",
    "number": data.soTheNhaBao,
    "number_day": Date.parse(moment(data.ngayCapTheNhaBao, "DD-MM-YYYY")) / 10000,
    "begin": moment(data.theCoHieuLucTu, "DD/MM/YYYY").toISOString(),
    "end": moment(data.theCoHieuLucDen, "DD/MM/YYYY").toISOString(),
    "note": ""
  }
}

function tachDuLieu(string, capDuLieu = 3) {
  let diaChi, huyen, quan, tinh, String;
  // console.log(string)
  if (string === "" || string === undefined || string === null) {
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
    return { huyen, quan, tinh }
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
    return { diaChi, huyen, quan, tinh }
  }
}

function tachDuLieuPhongBan_ChucVu(data) {
  // console.log(data.user_dep_pos)
  let PB_CV_Arr = [];
  if (data.user_dep_pos.length > 0) {
    for (let dep_pos of data.user_dep_pos) {
      // console.log(dep_pos)
      let { department_id: dep_id, position: { pos_management_id }, id } = dep_pos;
      PB_CV_Arr.push({
        phongBan: dep_id,
        chucVu: pos_management_id,
        id
      })
    }
  }
  // console.log(PB_CV_Arr)
  return PB_CV_Arr;
}

export const mappingProfileAPI = (values) => {
  // console.log(moment(new Date(values.identity_card_when)).format("DD/MM/YYYY"))
  return {
    canCuocCD: values.identity_card,
    chuyenMon: values?.user_degree[0]?.diploma,
    danToc: values.ethnic,
    // email: "doannguyenchung@gmail.com",
    gioiTinh: values.gender,
    hoKhauThuongTru: tachDuLieu(values?.user_degree[0]?.permanent_residence, 4),
    hoTen: values.full_name,
    hocVan: values?.user_degree[0]?.education,
    lyLuanCT: values?.user_degree[0]?.politic,
    ngayBoNhiem: moment(new Date(values?.user_dep_pos[0]?.appointment_date)).format("DD/MM/YYYY"),
    ngayCapCCCD: moment(new Date(values.identity_card_when)).format("DD/MM/YYYY"),
    ngayCapTheNhaBao: moment(new Date((values?.journalist_card[0]?.number_day * 10000)).toLocaleDateString()).format("DD-MM-YYYY"),
    // ngayDuocTuyenDung: "",
    ngayHetHanBoNhiem: moment(new Date(values?.user_dep_pos[0]?.expire_date)).format("DD/MM/YYYY"),
    ngayThangNamSinh: moment(new Date(values.birth_day)).format("DD/MM/YYYY"),
    ngheNghiep: values.occupation,
    ngoaiNgu: values?.user_degree[0]?.foreign_language,
    noiCapCCCD: values.identity_card_where,
    noiOHienTai: tachDuLieu(values.resident, 4),
    noiSinh: tachDuLieu(values.birth_place, 3),
    phongBanCVObj: tachDuLieuPhongBan_ChucVu(values),
    queQuan: tachDuLieu(values.home_town, 3),
    // soDienThoai: "",
    soDienThoaiNoiBo: values.local_phone,
    soTheNhaBao: values?.journalist_card[0]?.number,
    tenThuongGoi: values.pen_name,
    thanhPhanXuatThan: values.background_origin,
    theCoHieuLucDen: moment(new Date(values?.journalist_card[0]?.end)).format("DD/MM/YYYY"),
    theCoHieuLucTu: moment(new Date(values?.journalist_card[0]?.begin)).format("DD/MM/YYYY"),
    tonGiao: values.religion,
  }
}