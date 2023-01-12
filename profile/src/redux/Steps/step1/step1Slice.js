import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    values: {
        canCuocCD: "",
        chuyenMon: "",
        danToc: "",
        // email: "doannguyenchung@gmail.com",
        gioiTinh: 1,
        hoKhauThuongTru: {diaChi: '', huyen: '', quan: '', tinh: ''},
        hoTen: "",
        hocVan: "",
        lyLuanCT: "",
        ngayBoNhiem: null,
        ngayCapCCCD: "",
        ngayCapTheNhaBao: "",
        // ngayDuocTuyenDung: "21-07-2022",
        ngayHetHanBoNhiem: null,
        ngayThangNamSinh: "",
        ngheNghiep: "",
        ngoaiNgu: "",
        noiCapCCCD: "",
        noiOHienTai: {diaChi: '', huyen: '', quan: '', tinh: ''},
        noiSinh: {huyen: '', quan: '', tinh: ''},
        queQuan: {huyen: '', quan: '', tinh: ''},
        // soDienThoai: "0327572323",
        soDienThoaiNoiBo: "",
        soTheNhaBao: "",
        phongBanCVObj: [],
        tenThuongGoi: "",
        theCoHieuLucDen: null,
        theCoHieuLucTu: null,
        tonGiao: "",
        thanhPhanXuatThan: '',
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
    isSubmit: false,
    phongBan: [],
    chucVu:[],
    to: [],
    avatar: "",
    emailPhone: {},
    action: "",
    resources: []
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
                let index = state.phongBanChucVuArr.findIndex(PB_CV => PB_CV.phongBan === payload.phongBan && PB_CV.chucVu === payload.chucVu);
                if(index === -1){
                    state.phongBanChucVuArr.push(payload)
                }
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
            state.values = action.payload;
        },
        setIsSubmit: (state, action)=>{
            state.isSubmit = action.payload;
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
            // console.log(action.payload)
            // console.log(state.hoKhauQuan)
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
        },
        setEmailPhone: (state,action)=>{
            let {email, soDienThoai} = action.payload;
            state.emailPhone = {email, soDienThoai}
        },
        setAction: (state, action)=>{
            state.action = action.payload;
        },
        setResources: (state, action)=>{
            state.resources = action.payload;
        }
    }
})

export const {addPBCV, removePBCV, setValues, setNoiSinhTinh
, setNoiSinhQuan, setNoiSinhHuyen, setQueQuanTinh, setQueQuanQuan, 
setQueQuanHuyen, setNoiOTinh, setNoiOQuan, setNoiOHuyen, setIsCreateProfile, setIsNavigate,
setPB_CV, setTo, setAvatar, setIsOnLyCreateProfile, setHoKhauHuyen, setHoKhauTinh,
setHoKhauQuan, setEmailPhone, setIsSubmit, setAction, setResources } = step1Slice.actions;

export default step1Slice.reducer;