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
        "pro_background_origin": formValues.xuatThan.thanhPhanXuatThan,
        "pro_occupation": formValues.ngheNghiep,
        "pro_identity_card": formValues.canCuocCD,
        "pro_identity_card_when": Date.parse(moment(formValues.ngayCapCCCD, "DD-MM-YYYY")) / 10000,
        "pro_identity_card_where": formValues.noiCapCCCD
    }
}

export const mappingDepartmentPosition = (data)=>{
    return {
        "user_id": "",
        "dep_id": data.phongBanCVObj.phongBan,
        "pos_id": data.phongBanCVObj.chucVu,
        "part_id": data.to,
        "appointment_date":Date.parse(moment(data.ngayBoNhiem, "DD-MM-YYYY")) / 10000,
        "expire_date": Date.parse(moment(data.ngayHetHanBoNhiem, "DD-MM-YYYY")) / 10000,
        "note":"",
        "is_primary":"1"
    }
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

export const mappingProfileAPI = (values)=>{
    return {
        bacLuong: "4",
        email: "",
        to: "",
        soDienThoai: "",
        capBac: "Đại tướng",
        chuyenMon: "Lập trình",
        coQuanTuyenDung: "BTT",
        canCuocCD: "",
        danToc: "Kinh",
        danhHieuDuocPhong: "BOSS",
        gioiTinh: values.pro_gender,
        hoTen: values.pro_name,
        hocVan: "Đại học",
        lyLuanCT: "OK",
        maSoFake: "2",
        ngayThangNamSinh: "",
        ngayHetHanBoNhiem: "06-09-2022",
        ngayDuocTuyenDung: "04-09-2022",
        ngayNhapNgu: "02-09-2022",
        ngayThamGiaCM: "01-09-2022",
        ngayBoNhiem: "05-09-2022",
        ngayXuatNgu: "03-09-2022",
        ngheNghiep: values.pro_occupation,
        ngoaiNgu: "Anh",
        noiOHienTai: {diaChi: '82/17 nguyen hong dao', huyen: 3, quan: 3, tinh: 1943},
        noiSinh: {huyen: 1, quan: 1, tinh: 1941},
        hoKhauThuongTru: {huyen: 1, quan: 1, tinh: 1941},
        phongBanCVObj: {chucVu: 'Giám đốc Nhà in', phongBan: 'Nhân viên khoán'},
        queQuan: {huyen: 2, quan: 2, tinh: 1942},
        soTruongCongTac: "Chơi game",
        tenThuongGoi: values.pro_pen_name,
        toChucLamViec: "Ban chỉ huy",
        tonGiao: "Công Giáo",
        theCoHieuLucTu: "07-09-2022",
        theCoHieuLucDen:"",
        xuatThan: {thanhPhanXuatThan: 'Con ông cháu cha', maSo: '1'}
    }
}