import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    values: {
        canCuocCD: "272697007",
        chuyenMon: "Lập trình",
        danToc: "Kinh",
        email: "doannguyenchung@gmail.com",
        gioiTinh: 1,
        hoKhauThuongTru: {diaChi: '82/17 nguyen hong mai', huyen: 'Phường Lạc Viên', quan: 'Quận Ngô Quyền', tinh: 'Thành phố Hải Phòng'},
        hoTen: "Đoàn Nguyễn Chung",
        hocVan: "Đại học",
        lyLuanCT: "OK",
        ngayBoNhiem: "01-10-2022",
        ngayCapCCCD: "24-12-2021",
        ngayCapTheNhaBao: "30-09-2022",
        // ngayDuocTuyenDung: "21-07-2022",
        ngayHetHanBoNhiem: "03-10-2022",
        ngayThangNamSinh: "24-05-1998",
        ngheNghiep: "Lập trình viên",
        ngoaiNgu: "Anh",
        noiCapCCCD: "CA  biên hòa",
        noiOHienTai: {diaChi: '82/17 nguyen hong dao', huyen: 'Phường Tân Hòa', quan: 'Thành phố Hòa Bình', tinh: 'Tỉnh Hoà Bình'},
        noiSinh: {huyen: 'Phường Yên Bình', quan: 'Thành phố Tam Điệp', tinh: 'Tỉnh Ninh Bình'},
        queQuan: {huyen: 'Xã Ninh Hòa', quan: 'Huyện Hoa Lư', tinh: 'Tỉnh Ninh Bình'},
        soDienThoai: "0327572323",
        soDienThoaiNoiBo: "123456",
        soTheNhaBao: "456987",
        phongBanCVObj: [],
        tenThuongGoi: "Chung",
        theCoHieuLucDen: "31-10-2022",
        theCoHieuLucTu: "01-10-2022",
        tonGiao: "Công Giáo",
        thanhPhanXuatThan: 'Con ông cháu cha',
    },
    phongBanChucVuArr: [],
    noiSinhTinh: "",
    noiSinhQuan: "",
    noiSinhHuyen: "",
    queQuanTinh: "",
    queQuanQuan: "",
    queQuanHuyen: "",
    noiOTinh: "",
    noiOQuan: "",
    noiOHuyen: "",
    hoKhauTinh: "",
    hoKhauQuan: "",
    hoKhauHuyen: "",
    isCreateProfile: false,
    isNavigateTo404: false,
    isOnLyCreateProfile: false,
    phongBan: [],
    chucVu:[],
    to: [],
    avatar: "",
}

const step1Slice = createSlice({
    name: "steps",
    initialState,
    reducers: {
        addPBCV: (state,action)=>{
            let {payload} = action;
            // console.log("reducer",payload)
            if(payload.length > 0){
                state.phongBanChucVuArr = payload;
            } else {
                state.phongBanChucVuArr.push(payload)
            }
        },
        removePBCV: (state,action)=>{
            let {payload}= action;
            if(payload !== "all" && typeof payload === 'number'){
                state.phongBanChucVuArr.splice(action.payload,1)
            } else {
                state.phongBanChucVuArr = []
            }
        },
        setValues: (state,action)=>{
            state.values = {...action.payload};
        },
        setNoiSinhTinh: (state,action)=>{
            // console.log(action.payload)
            state.noiSinhTinh = [...action.payload];
        },
        setNoiSinhQuan: (state,action)=>{
            state.noiSinhQuan = [...action.payload];
        },
        setNoiSinhHuyen: (state,action)=>{
            let quanSelected = state.noiSinhQuan.find(quan => quan.name === action.payload);
            state.noiSinhHuyen = quanSelected.wards;
        },
        setQueQuanTinh: (state,action)=>{
            state.queQuanTinh = [...action.payload];
        },
        setQueQuanQuan: (state,action)=>{
            state.queQuanQuan = [...action.payload];
        },
        setQueQuanHuyen: (state,action)=>{
            let quanSelected = state.queQuanQuan.find(quan => quan.name === action.payload);
            state.queQuanHuyen = quanSelected.wards;
        },
        setNoiOTinh: (state,action)=>{
            state.noiOTinh = [...action.payload];
        },
        setNoiOQuan: (state,action)=>{
            state.noiOQuan = [...action.payload];
        },
        setNoiOHuyen: (state,action)=>{
            let quanSelected = state.noiOQuan.find(quan => quan.name === action.payload);
            state.noiOHuyen = quanSelected.wards;
        },
        setHoKhauHuyen: (state,action)=>{
            console.log(action.payload)
            console.log(state.hoKhauQuan)
            let quanSelected = state.hoKhauQuan.find(quan => quan.name === action.payload);
            state.hoKhauHuyen = quanSelected.wards;
        },
        setHoKhauTinh: (state,action)=>{
            state.hoKhauTinh = [...action.payload];
        },
        setHoKhauQuan: (state,action)=>{
            state.hoKhauQuan = [...action.payload];
        },
        setIsCreateProfile: (state,action)=>{
            state.isCreateProfile = action.payload
        },
        setIsOnLyCreateProfile: (state,action)=>{
            state.isOnLyCreateProfile = action.payload
        },
        setIsNavigate: (state,action)=>{
            state.isNavigateTo404 = action.payload
        },
        setPB_CV: (state,action)=>{
            let {depList, posList} = action.payload;
            state.phongBan = depList;
            state.chucVu = posList
        },
        setTo: (state,action)=>{
            state.to = action.payload;
        },
        setAvatar: (state,action)=>{
            state.avatar = action.payload;
        }
    }
})

export const {addPBCV, removePBCV, setValues, setNoiSinhTinh
, setNoiSinhQuan, setNoiSinhHuyen, setQueQuanTinh, setQueQuanQuan, 
setQueQuanHuyen, setNoiOTinh, setNoiOQuan, setNoiOHuyen, setIsCreateProfile, setIsNavigate,
setPB_CV, setTo, setAvatar, setIsOnLyCreateProfile, setHoKhauHuyen, setHoKhauTinh,
setHoKhauQuan } = step1Slice.actions;

export default step1Slice.reducer;