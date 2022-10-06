import moment from "moment"

export const mappingProfileStep1 = (formValues,user_id)=>{
    // Giới tính: Nam là 1, Nữ là 2, Khác tạm chưa có
    const birthDay = `${formValues.ngaySinh}-${formValues.thangSinh}-${formValues.namSinh}`;
    const {noiOHienTai: {diaChi, huyen, quan, tinh}} = formValues;
    console.log(moment(birthDay, "DD-MM-YYYY"))
    return {
        "user_id": user_id,
        "pro_name": formValues.hoTen,
        "pro_pen_name": formValues.tenThuongGoi,
        "pro_birth_day": moment(birthDay, "DD-MM-YYYY"),
        "pro_gender": formValues.gioiTinh,
        "pro_birth_place": `${formValues.noiSinh.huyen}, ${formValues.noiSinh.quan}, ${formValues.noiSinh.tinh}`,
        "pro_home_town": `${formValues.queQuan.huyen}, ${formValues.queQuan.quan}, ${formValues.queQuan.tinh}`,
        "pro_local_phone": "test thêm",
        "pro_resident": `${diaChi}, ${huyen}, ${quan}, ${tinh}`,
        "pro_ethnic": formValues.danToc,
        "pro_religion": formValues.tonGiao,
        "pro_background_origin": formValues.xuatThan.thanhPhanXuatThan,
        "pro_occupation": formValues.ngheNghiep,
        "pro_identity_card": "test thêm",
        "pro_identity_card_when": "123123",
        "pro_identity_card_where": "test thêm"
    }
}

export const mappingDepartmentPosition = (data,pro_id,user_id)=>{
    return {
        "pro_id": pro_id,
        "user_id": user_id,
        "dep_id": data.phongBan,
        "pos_id": data.chucVu,
        "part_id":"123",
        "appointment_date":"123123"
    }
}

export const mappingUserDegree = (data,pro_id,user_id)=>{
    return {
        "pro_id": pro_id,
        "user_id": user_id,
        "deg_begin_study": null,
        "deg_diploma": "",
        "deg_education": data.hocVan,
        "deg_end_study": null,
        "deg_foreign_language": data.ngoaiNgu,
        "deg_majors": data.chuyenMon,
        "deg_note": "",
        "deg_permanent_residence": "",
        "deg_politic": data.lyLuanCT,
        "deg_school_name": "",
        "deg_type": ""
    }
}

export const mappingParty = (data,pro_id,user_id)=>{
    return {
        "pro_id": pro_id,
        "user_id": user_id,
        "par_admission_date":"123111",
        "par_branch":"test par_branch",
        "par_committee":"test par_committee",
        "par_first_full_name":"test par_first_full_name",
        "par_first_position":"test par_first_position",
        "par_first_workplace":"test par_first_workplace",
        "par_first_residence":"test par_first_residence",
        "par_second_full_name":"test par_second_full_name",
        "par_second_position":"test par_second_position",
        "par_second_workplace":"test par_second_workplace",
        "par_second_residence":"test par_second_residence",
        "par_announcement_date":"123123",
        "par_announcement_branch":"test par_announcement_branch",
        "par_announcement_committee":"test par_announcement_committee",
        "par_member_id":"123123",
        "par_issue_date":"1213",
        "par_issue_committee":"123123"
    }
}

export const mappingProfileAPI = (values)=>{
    return {
        bacLuong: "4",
        email: "",
        to: "",
        soDienThoai: "",
        canNang: "80",
        capBac: "Đại tướng",
        chieuCao: "1,71",
        chuyenMon: "Lập trình",
        coQuanTuyenDung: "BTT",
        danToc: "Kinh",
        danhHieuDuocPhong: "BOSS",
        gioiTinh: values.pro_gender,
        hoTen: values.pro_name,
        hocVan: "Đại học",
        lyLuanCT: "OK",
        maSoFake: "2",
        namSinh: moment(values.pro_birth_day, "DD-MM-YYYY")["_d"].getFullYear(),
        ngachVienChuc: "123",
        ngayChinhThuc: "06-09-2022",
        ngayDuocTuyenDung: "04-09-2022",
        ngayNhapNgu: "02-09-2022",
        ngaySinh: moment(values.pro_birth_day, "DD-MM-YYYY")["_d"].getDate(),
        ngayThamGiaCM: "01-09-2022",
        ngayVaoDangCSVN: "05-09-2022",
        ngayXuatNgu: "03-09-2022",
        ngheNghiep: values.pro_occupation,
        ngoaiNgu: "Anh",
        noiOHienTai: {diaChi: '82/17 nguyen hong dao', huyen: 3, quan: 3, tinh: 1943},
        noiSinh: {huyen: 1, quan: 1, tinh: 1941},
        phongBanCVObj: {chucVu: 'Giám đốc Nhà in', phongBan: 'Nhân viên khoán'},
        queQuan: {huyen: 2, quan: 2, tinh: 1942},
        soTruongCongTac: "Chơi game",
        tenKhac: "Chung",
        tenThuongGoi: values.pro_pen_name,
        thangSinh: moment(values.pro_birth_day, "DD-MM-YYYY")["_d"].getMonth() + 1,
        tinhHinhSK: "Tốt",
        toChucLamViec: "Ban chỉ huy",
        tonGiao: "Công Giáo",
        tuNgayThangNam: "07-09-2022",
        xuatThan: {thanhPhanXuatThan: 'Con ông cháu cha', maSo: '1'}
    }
}