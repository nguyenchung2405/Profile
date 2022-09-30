import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    values: {
        hoTen: "",
        ngaySinh: "",
        chieuCao: "",
        canNang: "",
        thangSinh: "",
        namSinh: "",
        danToc: "",
        hocVan: "",
        chuyenMon: "",
        lyLuanCT:"",
        ngayDuocTuyenDung: "",
        ngayVaoDangCSVN: "",
        ngayChinhThuc: "",
        ngachVienChuc: "",
        coQuanTuyenDung:"",
        bacLuong: "",
        tinhHinhSK: "",
        gioiTinh: "1",
        tuNgayThangNam: "",
        phongBanCVObj: {chucVu:"", phongBan: ""},
        xuatThan: {thanhPhanXuatThan:"", maSo: ""},
        noiSinh: {huyen: "",quan:"",tinh:""},
        queQuan: {huyen: "",quan:"",tinh:""},
        noiOHienTai: {diaChi: "",huyen: "",quan:"",tinh:""},
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
    isCreateProfile: false,
}

const step1Slice = createSlice({
    name: "steps",
    initialState,
    reducers: {
        addPBCV: (state,action)=>{
            let {payload} = action;
            console.log("reducer",payload)
            if(payload.chucVu === "" || payload.phongBan ===""){
                return
            }
            state.phongBanChucVuArr.push(action.payload)
        },
        removePBCV: (state,action)=>{
            console.log(action.payload)
            state.phongBanChucVuArr.splice(action.payload,1)
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
        setIsCreateProfile: (state,action)=>{
            state.isCreateProfile = action.payload
        }
    }
})

export const {addPBCV, removePBCV, setValues, setNoiSinhTinh
, setNoiSinhQuan, setNoiSinhHuyen, setQueQuanTinh, setQueQuanQuan, 
setQueQuanHuyen, setNoiOTinh, setNoiOQuan, setNoiOHuyen, setIsCreateProfile } = step1Slice.actions;

export default step1Slice.reducer;