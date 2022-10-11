import React, { useEffect, useState } from 'react';
import "./profile.css";
import { Radio, Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPBCV, removePBCV, setIsNavigate, setNoiOHuyen, setNoiSinhHuyen, setQueQuanHuyen} from '../../redux/Steps/step1/step1Slice';
import { AiOutlineMinus } from "react-icons/ai"
import { moveToNextStep } from '../../redux/Steps/stepsSlice';
import moment from 'moment';
import { CREATE_PROFILE, GET_DEP_POS, GET_DISTRICTS_ADDRESS, GET_DISTRICTS_BIRTH_PLACE, GET_DISTRICTS_HOME_TOWN, GET_PART, GET_PROVINCES, noiSinh_Step1, queQuan_Step1, UPDATE_PROFILE } from '../../title/title';
import { useNavigate } from 'react-router-dom';
import Image from './image';
import Modal_Step1 from '../modal/modal_step1';
import {FcPlus} from "react-icons/fc";

export default function SoYeuLyLich(props) {

    const {Option} = Select;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let {nextStep} = useSelector(state => state.stepsReducer);
    let {phongBanChucVuArr, values, noiSinhTinh, 
    noiSinhQuan, noiSinhHuyen, queQuanTinh, queQuanQuan,queQuanHuyen,
    noiOTinh, noiOQuan, noiOHuyen, isCreateProfile , isNavigateTo404, phongBan :
    depList, chucVu : posList, to : toList} = useSelector(state => state.steps1Reducer);
    let [phongBanCVOb,setPhongBanCVOb] = useState({phongBan : "", chucVu: ""});
    let [isShowModal, setIsShowModal] = useState(false)
    let [isShowModal2, setIsShowModal2] = useState(false)
        
    const closeModal = ()=>{
        setIsShowModal(false)
    }

    const closeModal2 = ()=>{
        setIsShowModal2(false)
    }
    
    useEffect(()=>{
        if(isNavigateTo404){
            navigate("/notFound");
            dispatch(setIsNavigate(false))
        }
    },[isNavigateTo404])

    useEffect(()=>{
        if(nextStep !== 0){
           let isNextStep = checkValueForm();
           if(!isNextStep){
                dispatch(moveToNextStep(0))
           } else if(isNextStep){
            // console.log(isCreateProfile)
                if(!isCreateProfile){
                    dispatch({
                        type: UPDATE_PROFILE,
                        valuesUpdate: valueForm
                    })
                } else if(isCreateProfile) {
                    dispatch({
                        type: CREATE_PROFILE,
                        valuesCreate: valueForm
                    })
                }
           }
        }
    },[nextStep])

    useEffect(()=>{
        // call API lấy tỉnh
        dispatch({
            type: GET_PROVINCES
        })
        dispatch({
            type: GET_DEP_POS
        });
        dispatch({
            type: GET_PART
        })
    },[dispatch])

    useEffect(()=>{
        setValueForm({...values})
    },[values])

    const [valueForm, setValueForm] = useState({...values});
    // field nào cần check validate thì cho vào mảng bên dưới
    const valuesNeedValidate = [ "hoTen", "ngayThangNamSinh","chieuCao","canNang","danToc"
    ,"hocVan","chuyenMon","lyLuanCT","ngayDuocTuyenDung","ngayVaoDangCSVN","ngayChinhThuc",
    "ngachVienChuc","coQuanTuyenDung","bacLuong","tinhHinhSK","gioiTinh","tuNgayThangNam",
    "phongBanCVObj","xuatThan","noiSinh","queQuan","noiOHienTai","email","soDienThoai", "to"]
    const [validateForm, setValidateForm] = useState({
        hoTen: false,
        email: false,
        to: false,
        ngayThangNamSinh: false,
        soDienThoai: false,
        tonGiao: false,
        hocVan: false,
        chuyenMon: false,
        lyLuanCT:false,
        ngayDuocTuyenDung: false,
        coQuanTuyenDung : false,
        ngayVaoDangCSVN: false,
        ngayChinhThuc: false,
        ngachVienChuc: false,
        bacLuong: false,
        tuNgayThangNam: false,
        tinhHinhSK: false,
        phongBanCVObj: false,
        xuatThan: {thanhPhanXuatThan:false, maSo: false},
        noiSinh: {huyen: false,quan:false,tinh:false},
        queQuan: {huyen: false,quan:false,tinh:false},
        noiOHienTai: {diaChi:false,huyen: false,quan:false,tinh:false},
    });

    const renderTinh =  (fieldName = "noiSinh") => {
        if(fieldName === "noiSinh"){
            if(noiSinhTinh.length > 0){
                return noiSinhTinh.map((tinh,index)=>{
                    return <Option value={tinh.name}>{tinh.name}</Option>
                }) 
            }
        } else if(fieldName === "queQuan") {
            if(queQuanTinh.length > 0){
                return queQuanTinh.map((tinh,index)=>{
                    return <Option value={tinh.name}>{tinh.name}</Option>
                }) 
            }
        } else {
            if(noiOTinh.length > 0){
                return noiOTinh.map((tinh,index)=>{
                    return <Option value={tinh.name}>{tinh.name}</Option>
                }) 
            }
        }
    }

    const renderQuan =  (fieldName = "noiSinh") => {
        if(fieldName === "noiSinh"){
            if(noiSinhQuan.length > 0){
                return noiSinhQuan.map((tinh,index)=>{
                    return <Option value={tinh.name}>{tinh.name}</Option>
                }) 
            }
        } else if(fieldName === "queQuan") {
            if(queQuanQuan.length > 0){
                return queQuanQuan.map((tinh,index)=>{
                    return <Option value={tinh.name}>{tinh.name}</Option>
                }) 
            }
        } else {
            if(noiOQuan.length > 0){
                return noiOQuan.map((tinh,index)=>{
                    return <Option value={tinh.name}>{tinh.name}</Option>
                }) 
            }
        }
    }
    
    const renderHuyen =  (fieldName = "noiSinh") => {
        if(fieldName === "noiSinh"){
            if(noiSinhHuyen.length > 0){
                return noiSinhHuyen.map((tinh,index)=>{
                    return <Option value={tinh.name}>{tinh.name}</Option>
                }) 
            }
        } else if(fieldName === "queQuan") {
            if(queQuanHuyen.length > 0){
                return queQuanHuyen.map((tinh,index)=>{
                    return <Option value={tinh.name}>{tinh.name}</Option>
                }) 
            }
        } else {
            if(noiOHuyen.length > 0){
                return noiOHuyen.map((tinh,index)=>{
                    return <Option value={tinh.name}>{tinh.name}</Option>
                }) 
            }
        }
    }

    const renderPhongBanCV = ()=>{
        // console.log(phongBanChucVuArr)
        if(phongBanChucVuArr.length >= 1){
            /* Vì value của Option là id của phòng ban , chức vụ nên phải tìm ra Object của phòng ban
            , chức vụ đó từ đó lấy name của PB, CV đó để render ra cho user xem */
            let newPBCVArr = [];
            for(let PB_CV of phongBanChucVuArr){
                let {phongBan, chucVu} = PB_CV;
                let phongBanOb = depList.find(PB => PB.id === phongBan)
                let chucVuOb = posList.find(CV => CV.id === chucVu)
                newPBCVArr.push({phongBan: phongBanOb.dep_name, chucVu: chucVuOb.pos_name})
            }
            /* Sau khi bóc ra được name của PB, CV rồi thì lấy Array mới có chứa tên cua PB, CV
            render ra */
            // console.log(phongBanChucVuArr)
            return newPBCVArr.map((infor,index)=>{
                return <div key={index}>
                            <div>
                                <p>{infor.phongBan}</p>
                                <p>{infor.chucVu}</p>
                            </div>
                            <AiOutlineMinus onClick={()=>{
                                dispatch(removePBCV(index))
                            }} />
                </div>
            })
        }
    }

    const checkValueForm = ()=>{
        let newValueForm = {};
        let isNextStep = true;
        for(let value of valuesNeedValidate){
            if(value === "noiSinh" ){
                if(valueForm[value].huyen === "" || valueForm[value].quan === "" || valueForm[value].tinh === ""){
                    newValueForm = {...newValueForm,[value]: {huyen: true}}
                    isNextStep = false
                }
            } else if(value === "queQuan"){
                if(valueForm[value].huyen === "" || valueForm[value].quan === "" || valueForm[value].tinh === ""){
                    newValueForm = {...newValueForm,[value]: {huyen: true}}
                    isNextStep = false
                }
            } else if(value === "noiOHienTai"){
                if(valueForm[value].diaChi === "" || valueForm[value].huyen === "" || valueForm[value].quan === "" || valueForm[value].tinh === ""){
                    newValueForm = {...newValueForm,[value]: {huyen: true}}
                    isNextStep = false
                }
            } else if(value === "xuatThan"){
                if(valueForm[value].thanhPhanXuatThan === "" || valueForm[value].maSo === ""){
                    newValueForm = {...newValueForm,[value]: {thanhPhanXuatThan: true}}
                    isNextStep = false
                }
            } else if(value === "phongBanCVObj"){
                if(valueForm[value].phongBan === "" ){
                    newValueForm = {...newValueForm, [value]: {...newValueForm[value], phongBan: true}}
                    isNextStep = false
                }
                if(valueForm[value].chucVu === ""){
                    newValueForm = {...newValueForm, [value]: {...newValueForm[value], chucVu: true}}
                    isNextStep = false
                }
            } else {
                if(valueForm[value] === ""){
                    newValueForm = {...newValueForm,[value]: true}
                    isNextStep = false
                }
            }
            setValidateForm({
                ...newValueForm
            });
            // console.log(newValueForm)
        }
        return isNextStep
    }

    const renderDay = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="" Selected>Ngày</Option>)
        for(let i = 1; i<=31; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const renderMonth = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Tháng</Option>)
        for(let i = 1; i<=12; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const renderYear = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Năm</Option>)
        for(let i = 1940; i<=2002; i++){
            htmlRendered.push(<Option value={i}>{i}</Option>) 
        }
        return htmlRendered
    }

    const handleChangeGetValueInput = (e)=>{
        let {name,value} = e.target;
        setValueForm({
            ...valueForm,
            [name]:value
        });
    }

    const renderChucVu = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Chức vụ</Option>)
        if(posList.length > 0){
            for(let chucVu of posList){
                htmlRendered.push(<Option value={chucVu.id}>{chucVu.pos_name}</Option>) 
            }
        }
        return htmlRendered
    }

    const renderPhongBan = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Phòng ban</Option>)
        if(depList.length > 0){
            for(let phongBan of depList){
                htmlRendered.push(<Option value={phongBan.id}>{phongBan.dep_name}</Option>) 
            }
        }
        return htmlRendered
    }

    const handleChangeValueRadio = (e)=>{
        let {value} = e.target;
        setValueForm({
            ...valueForm,
            gioiTinh: value
        });
    }

    const getValueSelect_NoiSinh_Huyen = (value)=>{
        let {noiSinh} = valueForm;
        let noiSinhNew = {...noiSinh, huyen: value};
        setValueForm({
            ...valueForm,
            noiSinh: { ...noiSinhNew}
        });
    }

    const getValueSelect_NoiSinh_Quan_TP = (value)=>{
        dispatch(setNoiSinhHuyen(value))
        let {noiSinh} = valueForm;
        let noiSinhNew = {...noiSinh, quan: value};
        setValueForm({
            ...valueForm,
            noiSinh: { ...noiSinhNew}
        });
    }

    const getValueSelect_NoiSinh_Tinh_TP = (value)=>{
        let tinhSelected = noiSinhTinh.find(tinh => tinh.name === value);
        dispatch({
            type: GET_DISTRICTS_BIRTH_PLACE,
            code: tinhSelected.code
        })
        let {noiSinh} = valueForm;
        let noiSinhNew = {...noiSinh, tinh: value};
        setValueForm({
            ...valueForm,
            noiSinh: { ...noiSinhNew }
        });
    }

    const getValueSelect_QueQuan_Huyen = (value)=>{
        let {queQuan} = valueForm;
        let queQuanNew = {...queQuan, huyen: value};
        setValueForm({
            ...valueForm,
            queQuan: {...queQuanNew}
        });
    }

    const getValueSelect_QueQuan_Quan_TP = (value)=>{
        dispatch(setQueQuanHuyen(value))
        let {queQuan} = valueForm;
        let queQuanNew = {...queQuan, quan: value};
        setValueForm({
            ...valueForm,
            queQuan: {...queQuanNew}
        });
    }

    const getValueSelect_QueQuan_Tinh_TP = (value)=>{
        let tinhSelected = noiSinhTinh.find(tinh => tinh.name === value);
        dispatch({
            type: GET_DISTRICTS_HOME_TOWN,
            code: tinhSelected.code
        })
        let {queQuan} = valueForm;
        let queQuanNew = {...queQuan, tinh: value};
        setValueForm({
            ...valueForm,
            queQuan: {...queQuanNew}
        });
    }

    const getValueSelect_NoiO_Huyen = (value)=>{
        let {noiOHienTai} = valueForm;
        let noiOHienTaiNew = {...noiOHienTai, huyen: value};
        setValueForm({
            ...valueForm,
            noiOHienTai: {...noiOHienTaiNew}
        });
    }

    const getValueSelect_NoiO_Quan_TP = (value)=>{
        dispatch(setNoiOHuyen(value))
        let {noiOHienTai} = valueForm;
        let noiOHienTaiNew = {...noiOHienTai, quan: value};
        setValueForm({
            ...valueForm,
            noiOHienTai: {...noiOHienTaiNew}
        });
    }

    const getValueSelect_NoiO_Tinh_TP = (value)=>{
        let tinhSelected = noiOTinh.find(tinh => tinh.name === value);
        dispatch({
            type: GET_DISTRICTS_ADDRESS,
            code: tinhSelected.code
        })
        let {noiOHienTai} = valueForm;
        let noiOHienTaiNew = {...noiOHienTai, tinh: value};
        setValueForm({
            ...valueForm,
            noiOHienTai: {...noiOHienTaiNew}
        });
    }

    const getValueSelect_ChucVu = (value)=>{
        if(phongBanCVOb.phongBan !== ""){
            dispatch(addPBCV({...phongBanCVOb, chucVu: value}));
            setValueForm({
                ...valueForm,
                phongBanCVObj: {...valueForm.phongBanCVObj,chucVu: value}
            })
            let newPhongBanCVObj = {phongBan : "", chucVu: ""}
            setPhongBanCVOb({...newPhongBanCVObj})
        }
    }

    const getValueSelect_PhongBan = (value)=>{
        setPhongBanCVOb({...phongBanCVOb, phongBan: value});
        setValueForm({
        ...valueForm,
        phongBanCVObj: {...valueForm.phongBanCVObj,phongBan: value}
        })
    }

    const showRequiredAlert = ()=>{
        return <p className="required__field">* Trường này không được để trống</p>
    }

    const validateField = (e)=>{
        let {value,name} = e.target;
        if(value === ""){
            setValidateForm({...validateForm,[name]: true});
        } else {
            setValidateForm({...validateForm,[name]: false});
        }
    }

    const setValueIntoForm = (name)=>{
        if(valueForm.name !== ""){
            return valueForm[name]
        }
    }

    const getValueSelect_To = (value)=>{
        setValueForm({
            ...valueForm,
            to: value
        });
    }

    const renderTo = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Tổ</Option>)
        if(toList.length > 0){
            for(let To of toList){
                htmlRendered.push(<Option value={To.id}>{To.part_name}</Option>) 
            }
        }
        return htmlRendered
    }
    
    return (
        <div className="SoYeuLyLich">
            <div className="SoYeuLyLich__left">
                <Image />
                <div className="SYLL__left__field">
                    <label htmlFor='hoTen'>Họ và tên khai sinh:
                        <span className="required__field"> *</span>
                    </label>
                    <input id="hoTen" name="hoTen" type="text"
                    value={setValueIntoForm("hoTen")} 
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e);
                        window.addEventListener("beforeunload", function (e) {
                            var confirmationMessage = "\o/";
                            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                            return confirmationMessage;                            //Webkit, Safari, Chrome
                        });
                    }} />
                    {validateForm.hoTen ? showRequiredAlert() : ""}
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='tenThuongGoi'>Tên thường gọi:</label>
                    <input id="tenThuongGoi" name="tenThuongGoi" type="text" 
                    value={setValueIntoForm("tenThuongGoi")}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e);
                    }} />
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='tenKhac'>Các tên gọi khác:</label>
                    <input id="tenKhac" name="tenKhac" type="text" 
                    value={setValueIntoForm("tenKhac")}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e);
                    }} />
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='email'>Email:
                        <span className="required__field"> *</span>
                    </label>
                    <input id="email" name="email" type="text"
                    value={setValueIntoForm("email")} 
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e);
                    }} />
                    {validateForm.email ? showRequiredAlert() : ""}
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='soDienThoai'>Số điện thoại:
                        <span className="required__field"> *</span>
                    </label>
                    <input id="soDienThoai" name="soDienThoai" type="text"
                    value={setValueIntoForm("soDienThoai")} 
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e);
                    }} />
                    {validateForm.soDienThoai ? showRequiredAlert() : ""}
                </div>
                <div className="SYLL__left__field birthday">
                    <label>Ngày tháng năm sinh:<span className="required__field"> *</span></label>
                    <DatePicker 
                        value={
                            valueForm.ngayThangNamSinh !== ""
                            ? moment(valueForm.ngayThangNamSinh, "DD-MM-YYYY")
                            : ""}
                            onBlur={()=>{
                                if(valueForm.ngayThangNamSinh === ""){
                                    setValidateForm({
                                        ...validateForm,
                                        ngayThangNamSinh: true
                                    })
                                } else {
                                    setValidateForm({
                                        ...validateForm,
                                        ngayThangNamSinh: false
                                    })
                                }
                            }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayThangNamSinh: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    {validateForm.ngayThangNamSinh
                     ? showRequiredAlert() 
                     : ""}
                </div>
                <div className="SYLL__left__field">
                    <label>Giới tính:</label>
                    <Radio.Group onChange={handleChangeValueRadio} value={setValueIntoForm("gioiTinh")}>
                        <Radio value={1}>Nam</Radio>
                        <Radio value={2}>Nữ</Radio>
                        <Radio value="Khác">Khác</Radio>
                    </Radio.Group>
                </div>
                <div className="SYLL__left__field noiSinh">
                    <label>Nơi sinh:<span className="required__field"> *</span></label>
                    <FcPlus onClick={()=>{
                        setIsShowModal(true)
                    }} />
                    <Modal_Step1 
                    title= {noiSinh_Step1}
                    isShowModal = {isShowModal}
                    closeModal= {closeModal}
                    valueForm= {valueForm}
                    setValidateForm= {setValidateForm}
                    validateForm= {validateForm}
                    getValueSelect_NoiSinh_Tinh_TP={getValueSelect_NoiSinh_Tinh_TP}
                    getValueSelect_NoiSinh_Quan_TP={getValueSelect_NoiSinh_Quan_TP}
                    getValueSelect_NoiSinh_Huyen={getValueSelect_NoiSinh_Huyen}
                    renderTinh={renderTinh}
                    renderQuan={renderQuan}
                    renderHuyen={renderHuyen}
                    showRequiredAlert={showRequiredAlert}
                    />
                    {validateForm.noiSinh?.huyen || validateForm.noiSinh?.quan || validateForm.noiSinh?.tinh
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <div className="SYLL__left__field queQuan">
                    <label>Quê quán:<span className="required__field"> *</span></label>
                    <FcPlus onClick={()=>{
                        setIsShowModal2(true)
                    }} />
                    <Modal_Step1 
                    title= {queQuan_Step1}
                    isShowModal = {isShowModal2}
                    closeModal= {closeModal2}
                    valueForm= {valueForm}
                    setValidateForm= {setValidateForm}
                    validateForm= {validateForm}
                    renderTinh={renderTinh}
                    renderQuan={renderQuan}
                    renderHuyen={renderHuyen}
                    getValueSelect_QueQuan_Tinh_TP={getValueSelect_QueQuan_Tinh_TP}
                    getValueSelect_QueQuan_Quan_TP={getValueSelect_QueQuan_Quan_TP}
                    getValueSelect_QueQuan_Huyen={getValueSelect_QueQuan_Huyen}
                    showRequiredAlert={showRequiredAlert}
                    />
                    {validateForm.queQuan?.huyen || validateForm.queQuan?.quan || validateForm.queQuan?.tinh
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <div className="SYLL__left__field noiOHienTai">
                    <label htmlFor='diaChi'>Nơi ở hiện tại:
                        <span className="required__field"> *</span>
                    </label>
                    <input id="NoiOHienTai" name="diaChi" type="text" 
                    value={valueForm.noiOHienTai.diaChi !== "" 
                        ? valueForm.noiOHienTai.diaChi
                        : ""
                    }
                    onBlur={(e)=>{
                        let {value} = e.target;
                        if(value === ""){
                            setValidateForm({
                                ...validateForm,
                                noiOHienTai: {...validateForm.noiOHienTai,diaChi:true}})
                        } else {
                            setValidateForm({
                                ...validateForm,
                                noiOHienTai: {...validateForm.noiOHienTai,diaChi:false}})
                        }
                    }}
                    onChange={(e)=>{
                        let {value} = e.target;
                        let {noiOHienTai} = valueForm;
                        let noiOHienTaiNew = {...noiOHienTai,diaChi: value}
                        setValueForm({
                            ...valueForm,
                            noiOHienTai : {...noiOHienTaiNew}
                        })
                    }} />
                    <Select
                    value={valueForm.noiOHienTai.tinh !== ""
                        ? valueForm.noiOHienTai.tinh
                        : ""
                    }
                    onBlur={()=>{
                        if(valueForm.noiOHienTai.tinh === ""){
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,tinh:true}})
                        } else {
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,tinh:false}})
                        }
                    }}
                    onChange={getValueSelect_NoiO_Tinh_TP}>
                        <Option value="">Tỉnh (Thành phố)</Option>
                        {renderTinh("noiO")}
                    </Select>
                    <Select
                    value={valueForm.noiOHienTai.quan !== ""
                        ? valueForm.noiOHienTai.quan
                        : ""
                    }
                    onBlur={()=>{
                        if(valueForm.noiOHienTai.quan === ""){
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,quan:true}})
                        } else {
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,quan:false}})
                        }
                    }}
                    onChange={getValueSelect_NoiO_Quan_TP}>
                        <Option value="">Quận (Thành phố)</Option>
                        {renderQuan("noiO")}
                    </Select>
                    <Select
                    value={valueForm.noiOHienTai.huyen !== ""
                        ? valueForm.noiOHienTai.huyen
                        : ""
                    }
                    onBlur={()=>{
                        if(valueForm.noiOHienTai.huyen === ""){
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,huyen:true}})
                        } else {
                            setValidateForm({...validateForm,noiOHienTai: {...validateForm.noiOHienTai,huyen:false}})
                        }
                    }}
                    onChange={getValueSelect_NoiO_Huyen}>
                        <Option value="">Huyện (Xã)</Option>
                        {renderHuyen("noiO")}
                    </Select>
                    {validateForm.noiOHienTai?.huyen || validateForm.noiOHienTai?.quan 
                        || validateForm.noiOHienTai?.tinh || validateForm.noiOHienTai?.diaChi
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <div className="SYLL__left__field two__content">
                    <div className="fisrt__content danToc">
                        <label htmlFor="danToc">Dân tộc:
                            <span className="required__field"> *</span> 
                        </label>
                        <input id="danToc" name="danToc" type="text" 
                        value={setValueIntoForm("danToc")}
                        onBlur={validateField}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                        {validateForm.danToc ? showRequiredAlert() : ""}
                    </div>
                    <div className="second__content tonGiao">
                        <label htmlFor="tonGiao">Tôn giáo:
                        </label>
                        <input id="tonGiao" name="tonGiao" type="text" 
                        value={setValueIntoForm("tonGiao")}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                    </div>
                </div>
                <div className="SYLL__left__field two__content xuatThan">
                    <div>
                        <div className="fisrt__content thanhPhanXuatThan">
                        <label htmlFor="thanhPhanXuatThan">Thành phần xuất thân:
                            <span className="required__field"> *</span>
                        </label>
                        <input id="thanhPhanXuatThan" name="thanhPhanXuatThan" 
                        type="text"
                        value={valueForm.xuatThan.thanhPhanXuatThan !==""
                            ? valueForm.xuatThan.thanhPhanXuatThan
                            : ""
                        }
                        onBlur={(e)=>{
                            let {value} = e.target;
                            if(value === ""){
                                setValidateForm({
                                    ...validateForm,
                                    xuatThan: {...validateForm.xuatThan,thanhPhanXuatThan:true}})
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    xuatThan: {...validateForm.xuatThan,thanhPhanXuatThan:false}})
                            }
                        }}
                        onChange={(e)=>{
                            let {value,name} = e.target;
                            let {xuatThan} = valueForm;
                            let xuatThanNew = {...xuatThan, [name]: value};
                            setValueForm({
                                ...valueForm,
                                xuatThan: {...xuatThanNew}
                            })
                        }} />
                        </div>
                        <div className="second__content maSo">
                            <input placeholder="Mã Số" id="maSo" name="maSo" 
                            type="text" 
                            value={valueForm.xuatThan.maSo !==""
                            ? valueForm.xuatThan.maSo
                            : ""
                        }
                            onBlur={(e)=>{
                                let {value} = e.target;
                                if(value === ""){
                                    setValidateForm({
                                        ...validateForm,
                                        xuatThan: {...validateForm.xuatThan,maSo:true}})
                                } else {
                                    setValidateForm({
                                        ...validateForm,
                                        xuatThan: {...validateForm.xuatThan,maSo:false}})
                                }
                            }}
                            onChange={(e)=>{
                                let {value,name} = e.target;
                                let {xuatThan} = valueForm;
                                let xuatThanNew = {...xuatThan, [name]: value};
                                setValueForm({
                                    ...valueForm,
                                    xuatThan: {...xuatThanNew}
                                })
                            }} />
                        </div>
                    </div>
                    {validateForm.xuatThan?.thanhPhanXuatThan || validateForm.xuatThan?.maSo 
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <div className="SYLL__left__field">
                    <label htmlFor='ngheNghiep'>Nghề nghiệp khi được tuyển dụng:</label>
                    <input id="ngheNghiep" name="ngheNghiep" type="text" 
                    value={setValueIntoForm("ngheNghiep")}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                </div>
            </div>
            <div className="SoYeuLyLich__right">
                <div className="SYLL__right__field two__content">
                <div className="fisrt__content hocVan">
                    <label htmlFor="hocVan">Trình độ học vấn:
                        <span className="required__field"> *</span>
                    </label>
                    <input placeholder='Văn hóa phổ thông' id="hocVan" name="hocVan" type="text"
                    value={setValueIntoForm("hocVan")}
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                    {validateForm.hocVan 
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <div id="chuyenMon__content">
                    <div className="second__content">
                    <input placeholder='Chuyên môn kỹ thuật' id="chuyenMon" 
                    name="chuyenMon" 
                    type="text" 
                    value={setValueIntoForm("chuyenMon")}
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                    </div>
                    {validateForm.chuyenMon 
                        ? showRequiredAlert() 
                        : ""}
                </div>
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='lyLuanCT'>Lý luận chính trị:
                        <span className="required__field"> *</span>
                    </label>
                    <input id="lyLuanCT" name="lyLuanCT" type="text" 
                    value={setValueIntoForm("lyLuanCT")}
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                    {validateForm.lyLuanCT ? showRequiredAlert() : ""}
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='ngoaiNgu'>Ngoại ngữ:</label>
                    <input id="ngoaiNgu" name="ngoaiNgu" type="text" 
                    value={setValueIntoForm("ngoaiNgu")}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content ngayThamGiaCM">
                        <label >Ngày tham gia cách mạng:</label>
                        <DatePicker 
                        value={
                            valueForm.ngayThamGiaCM !== "" && valueForm.ngayThamGiaCM !== undefined
                            ? moment(valueForm.ngayThamGiaCM, "DD-MM-YYYY")
                            : ""}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayThamGiaCM: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="second__content toChuc">
                        <label htmlFor="toChucLamViec">Làm việc gì, tổ chức nào:
                        </label>
                        <input id="toChucLamViec" name="toChucLamViec" type="text" 
                        value={setValueIntoForm("toChucLamViec")}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }}/>
                    </div>
                </div>
                <div className="SYLL__right__field three__content">
                    <div className="fisrt__content">
                        <label>Ngày nhập ngũ:</label>
                        <DatePicker 
                        value={valueForm.ngayNhapNgu !== "" && valueForm.ngayNhapNgu !== undefined
                        ? moment(valueForm.ngayNhapNgu, "DD-MM-YYYY")
                        : ""}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayNhapNgu: dateString
                            })
                        }}
                        placeholder="" 
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="second__content">
                        <label>Ngày xuất ngũ:</label>
                        <DatePicker 
                        value={valueForm.ngayXuatNgu !== "" && valueForm.ngayXuatNgu !== undefined
                        ? moment(valueForm.ngayXuatNgu, "DD-MM-YYYY")
                        : ""}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayXuatNgu: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                    <div className="third__content">
                        <label htmlFor='capBac'>Cấp bậc:
                        </label>
                        <input id="capBac" name="capBac" type="text" 
                        value={setValueIntoForm("capBac")}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                    </div>
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content date__picker">
                        <label >Ngày được tuyển dụng:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        value={valueForm.ngayDuocTuyenDung !== ""
                        ? moment(valueForm.ngayDuocTuyenDung, "DD-MM-YYYY")
                        : ""}
                        onBlur={()=>{
                            if(valueForm.ngayDuocTuyenDung === ""){
                                setValidateForm({
                                    ...validateForm,
                                    ngayDuocTuyenDung: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    ngayDuocTuyenDung: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayDuocTuyenDung: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.ngayDuocTuyenDung ? showRequiredAlert() : ""}
                    </div>
                    <div className="second__content">
                        <label htmlFor="coQuanTuyenDung">Cơ quan tuyển dụng:
                            <span className="required__field"> *</span>
                        </label>
                        <input id="coQuanTuyenDung" name="coQuanTuyenDung" type="text" 
                        value={setValueIntoForm("coQuanTuyenDung")}
                        onBlur={validateField}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                        {validateForm.coQuanTuyenDung ? showRequiredAlert() : ""}
                    </div>
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content date__picker">
                        <label >Ngày vào ĐCSVN:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        value={valueForm.ngayVaoDangCSVN !== ""
                        ? moment(valueForm.ngayVaoDangCSVN, "DD-MM-YYYY")
                        : ""}
                        onBlur={()=>{
                            if(valueForm.ngayVaoDangCSVN === ""){
                                setValidateForm({
                                    ...validateForm,
                                    ngayVaoDangCSVN: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    ngayVaoDangCSVN: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayVaoDangCSVN: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.ngayVaoDangCSVN ? showRequiredAlert() : ""}
                    </div>
                    <div className="second__content date__picker">
                        <label>Ngày chính thức:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        value={valueForm.ngayChinhThuc !== ""
                        ? moment(valueForm.ngayChinhThuc, "DD-MM-YYYY")
                        : ""}
                        onBlur={()=>{
                            if(valueForm.ngayChinhThuc === ""){
                                setValidateForm({
                                    ...validateForm,
                                    ngayChinhThuc: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    ngayChinhThuc: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayChinhThuc: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.ngayChinhThuc ? showRequiredAlert() : ""}
                    </div>
                </div>
                <div className="SYLL__right__field ">
                    <div className="two__content">
                        <div className="fisrt__content to">
                                <label htmlFor="to">Tổ:
                                    <span className="required__field"> *</span>
                                </label>
                                <Select defaultValue= "Tổ"
                                value={valueForm.to !== ""
                                ? valueForm.to
                                : ""
                                }
                                onBlur={()=>{
                                    if(valueForm.to === ""){
                                        setValidateForm({...validateForm, to: true})
                                    } else {
                                        setValidateForm({...validateForm,to : false})
                                    }
                                }}
                                onChange={getValueSelect_To}>
                                    {renderTo()}
                                </Select>
                                {validateForm.to 
                                    ? showRequiredAlert() 
                                    : ""}
                        </div>
                        <div className="fisrt__content phongBan">
                            <label htmlFor="phongBan">Phòng ban:
                                <span className="required__field"> *</span>
                            </label>
                            <Select defaultValue= "Phòng ban"
                            value={phongBanCVOb.phongBan === "" ? "" : phongBanCVOb.phongBan }
                            onBlur={()=>{
                                if(valueForm.phongBanCVObj.phongBan === ""){
                                    setValidateForm({
                                        ...validateForm,
                                        phongBanCVObj: {...validateForm.phongBanCVObj,phongBan: true}
                                    })
                                } else {
                                    setValidateForm({
                                        ...validateForm,
                                        phongBanCVObj: {...validateForm.phongBanCVObj,phongBan: false}
                                    })
                                }
                            }}
                            onChange={getValueSelect_PhongBan}>
                                {renderPhongBan()}
                            </Select>
                            {validateForm.phongBanCVObj?.phongBan && phongBanChucVuArr.length < 1 
                                ? showRequiredAlert() 
                                : ""}
                        </div>
                        <div className="second__content chucVuHienTai">
                            <label htmlFor="chucVuHienTai">Chức vụ:
                                <span className="required__field"> *</span>
                            </label>
                            <Select defaultValue="Chức vụ" 
                            value={phongBanCVOb.chucVu === "" ? "" : phongBanCVOb.chucVu }
                            onBlur={()=>{
                                if(valueForm.phongBanCVObj.chucVu === ""){
                                    setValidateForm({
                                        ...validateForm,
                                        phongBanCVObj: {...validateForm.phongBanCVObj,chucVu: true}
                                    })
                                } else {
                                    setValidateForm({
                                        ...validateForm,
                                        phongBanCVObj: {...validateForm.phongBanCVObj,chucVu: false}
                                    })
                                }
                            }}
                            onChange={getValueSelect_ChucVu}>
                                {renderChucVu()}
                            </Select>
                            {validateForm.phongBanCVObj?.chucVu && phongBanChucVuArr.length < 1 
                                ? showRequiredAlert() 
                                : ""}
                        </div>
                    </div>
                    <div className="phongBanCV__list">
                        {renderPhongBanCV()}
                    </div>    
                </div>
                <div className="SYLL__right__field two__content">
                    <div className="fisrt__content">
                        <label htmlFor="ngachVienChuc">Ngạch Viên Chức:
                            <span className="required__field"> *</span>
                        </label>
                        <input id="ngachVienChuc" name="ngachVienChuc" type="text" 
                        value={setValueIntoForm("ngachVienChuc")}
                        onBlur={validateField}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                        {validateForm.ngachVienChuc ? showRequiredAlert() : ""}
                    </div>
                    <div className="second__content">
                        <label htmlFor="bacLuong">Bậc lương:
                            <span className="required__field"> *</span>
                        </label>
                        <input id="bacLuong" name="bacLuong" type="text" 
                        value={setValueIntoForm("bacLuong")}
                        onBlur={validateField}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }} />
                        {validateForm.bacLuong ? showRequiredAlert() : ""}
                    </div>
                </div>
                <div className="SYLL__right__field two__content ngayVaoDang">
                    <div className="fisrt__content date__picker">
                        <label >Từ ngày tháng năm:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        value={valueForm.tuNgayThangNam !== ""
                        ? moment(valueForm.tuNgayThangNam, "DD-MM-YYYY")
                        : ""}
                        onBlur={()=>{
                            if(valueForm.tuNgayThangNam === ""){
                                setValidateForm({
                                    ...validateForm,
                                    tuNgayThangNam: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    tuNgayThangNam: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                tuNgayThangNam: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.tuNgayThangNam ? showRequiredAlert() : ""}
                    </div>
                    <div className="maSo__ChucVu">
                        <div className="second__content maSo">
                            <input placeholder='Mã Số' name="maSoFake" type="text" 
                            value={setValueIntoForm("maSoFake")}
                            onChange={(e)=>{
                                handleChangeGetValueInput(e)
                            }} />
                        </div>
                    </div>
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='danhHieuDuocPhong'>Danh hiệu được phong:</label>
                    <input id="danhHieuDuocPhong" name="danhHieuDuocPhong" type="text" 
                    value={setValueIntoForm("danhHieuDuocPhong")}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='tinhHinhSK'>Tình hình sức khỏe:
                        <span className="required__field"> *</span>
                    </label>
                    <input id="tinhHinhSK" name="tinhHinhSK" type="text" 
                    value={setValueIntoForm("tinhHinhSK")}
                    onBlur={validateField}
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                    {validateForm.tinhHinhSK ? showRequiredAlert() : ""}
                    <div id="chieuCao__CanNang" className="two__content">
                        <div className="chieuCao">
                            <input placeholder='Chiều cao (m)' name="chieuCao" type="text" 
                            value={setValueIntoForm("chieuCao")}
                            onBlur={validateField}
                            onChange={(e)=>{
                                handleChangeGetValueInput(e)
                            }} />
                            {validateForm.chieuCao ? showRequiredAlert() : ""}
                        </div>
                        <div className="canNang">
                            <input placeholder='Cân nặng (kg)' name="canNang" type="text" 
                            value={setValueIntoForm("canNang")}
                            onBlur={validateField}
                            onChange={(e)=>{
                                handleChangeGetValueInput(e)
                            }} />
                            {validateForm.canNang ? showRequiredAlert() : ""}
                        </div>
                    </div>
                </div>
                <div className="SYLL__right__field">
                    <label htmlFor='soTruongCongTac'>Sở trường công tác:</label>
                    <input id="soTruongCongTac" name="soTruongCongTac" type="text" 
                    onChange={(e)=>{
                        handleChangeGetValueInput(e)
                    }} />
                </div>
            </div>
        </div>
    )
}