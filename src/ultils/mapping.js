import moment from "moment"

export const mappingProfileStep1 = (formValues)=>{
    // Giới tính: Nam là 1, Nữ là 2, Khác tạm chưa có
    const birthDay = `${formValues.ngaySinh}-${formValues.thangSinh}-${formValues.namSinh}`;
    const {noiOHienTai: {diaChi, huyen, quan, tinh}} = formValues;

    return {
        "user_id": "",
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
        "pro_background_origin": "test thêm",
        "pro_occupation": formValues.ngheNghiep,
        "pro_identity_card": "test thêm",
        "pro_identity_card_when": "123123",
        "pro_identity_card_where": "test thêm"
    }
}

export const mappingProfileAPI = (values)=>{
    return {
        bacLuong: "4",
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
        ngheNghiep: "CEO",
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