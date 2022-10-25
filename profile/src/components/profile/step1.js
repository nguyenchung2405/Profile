import React, { useEffect, useState } from 'react';
import "./profile.css";
import { Select, DatePicker } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addPBCV, removePBCV, setIsNavigate, setNoiOHuyen, setNoiSinhHuyen, setQueQuanHuyen} from '../../redux/Steps/step1/step1Slice';
import { AiOutlineMinus } from "react-icons/ai"
import { moveToNextStep } from '../../redux/Steps/stepsSlice';
import moment from 'moment';
import { CREATE_PROFILE, GET_DEP_POS, GET_DISTRICTS_ADDRESS, GET_DISTRICTS_BIRTH_PLACE, GET_DISTRICTS_HOME_TOWN, GET_PART, GET_PROVINCES, noiSinh_Step1, ONLY_CREATE_PROFILE, queQuan_Step1, UPDATE_PROFILE } from '../../title/title';
import { useNavigate } from 'react-router-dom';
import Image from './image';
import Modal_Step1 from '../modal/modal_step1';
import {FcPlus} from "react-icons/fc";
import ThongTinCoBan from './ThongTinCoBan';
import DiaChiLienHe from './DiaChiLienHe';
import ThongTinCaNhan from './ThongTinCaNhan';

export default function SoYeuLyLich(props) {

    const {Option} = Select;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    let {nextStep, user_profile_id: {user_id}} = useSelector(state => state.stepsReducer);
    let {phongBanChucVuArr, values, noiSinhTinh, 
    noiSinhQuan, noiSinhHuyen, queQuanTinh, queQuanQuan,queQuanHuyen,
    noiOTinh, noiOQuan, noiOHuyen, isCreateProfile, isOnLyCreateProfile , isNavigateTo404, 
    phongBan : depList, chucVu : posList, to : toList} = useSelector(state => state.steps1Reducer);
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
        // console.log("is navigate")
        if(isNavigateTo404){
            navigate("/notFound");
            dispatch(setIsNavigate(false))
        }
    },[isNavigateTo404])

    useEffect(()=>{
        if(nextStep !== 0){
           let isNextStep = checkValueForm();
        //    console.log(isNextStep)
           if(!isNextStep){
                dispatch(moveToNextStep(0))
           } else if(isNextStep){
            // console.log(isOnLyCreateProfile, isCreateProfile)
                if(!isCreateProfile && !isOnLyCreateProfile){
                    console.log("Cập nhật profile")
                    // dispatch({
                    //     type: UPDATE_PROFILE,
                    //     valuesUpdate: valueForm
                    // })
                } else if(isCreateProfile) {
                    dispatch({
                        type: CREATE_PROFILE,
                        valuesCreate: valueForm
                    })
                } else if(isOnLyCreateProfile && !isCreateProfile && user_id){
                    // console.log("isOnLyCreateProfile")
                    dispatch({
                        type: ONLY_CREATE_PROFILE,
                        valuesCreate: {valueForm, user_id}
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
        // dispatch({
        //     type: GET_PART
        // })
    },[dispatch])

    useEffect(()=>{
        // console.log("values")
        setValueForm({...values})
    },[values])

    useEffect(()=>{
        // console.log(phongBanChucVuArr)
        setValueForm({...valueForm, phongBanCVObj: [...phongBanChucVuArr]})
    },[phongBanChucVuArr.length])

    const [valueForm, setValueForm] = useState({...values});
    // console.log(valueForm)
    // field nào cần check validate thì cho vào mảng bên dưới
    const valuesNeedValidate = [ "hoTen", "ngayThangNamSinh","danToc"
    ,"hocVan","chuyenMon","lyLuanCT","ngayDuocTuyenDung","ngayBoNhiem","ngayHetHanBoNhiem"
    ,"gioiTinh","theCoHieuLucTu", "phongBanCVObj","thanhPhanXuatThan","noiSinh","queQuan","noiOHienTai","email","soDienThoai"
    , "hoKhauThuongTru", "theCoHieuLucDen"]
    const [validateForm, setValidateForm] = useState({
        hoTen: false,
        email: false,
        ngayThangNamSinh: false,
        soDienThoai: false,
        tonGiao: false,
        hocVan: false,
        ngayDuocTuyenDung: false,
        chuyenMon: false,
        to: false,
        lyLuanCT:false,
        ngayBoNhiem: false,
        ngayHetHanBoNhiem: false,
        theCoHieuLucTu: false,
        theCoHieuLucDen: false,
        phongBanCVObj: false,
        thanhPhanXuatThan: false,
        noiSinh: {huyen: false,quan:false,tinh:false},
        queQuan: {huyen: false,quan:false,tinh:false},
        noiOHienTai: {diaChi:false,huyen: false,quan:false,tinh:false},
        hoKhauThuongTru: {diaChi:false,huyen: false,quan:false,tinh:false},
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
            // console.log(phongBanChucVuArr)
            for(let PB_CV of phongBanChucVuArr){
                let {phongBan, chucVu} = PB_CV;
                // console.log(PB_CV)
                // console.log(phongBan, chucVu)
                // console.log(depList, posList)
                let phongBanCanTim = depList.find(PB => PB.id === phongBan)
                let chucVuCanTim = posList.find(CV => CV.id === chucVu)
                // console.log(phongBanCanTim, chucVuCanTim)
                newPBCVArr.push({phongBan: phongBanCanTim?.name, chucVu: chucVuCanTim?.position?.name})
            }
            // console.log(newPBCVArr)
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
            }else if(value === "hoKhauThuongTru"){
                if(valueForm[value].diaChi === "" || valueForm[value].huyen === "" || valueForm[value].quan === "" || valueForm[value].tinh === ""){
                    newValueForm = {...newValueForm,[value]: {huyen: true}}
                    isNextStep = false
                }
            } else if(value === "phongBanCVObj"){
                if(valueForm[value].length === 0 ){
                    newValueForm = {...newValueForm, [value]: {...newValueForm[value], phongBan: true}}
                    newValueForm = {...newValueForm, [value]: {...newValueForm[value], chucVu: true}}
                    newValueForm = {...newValueForm, [value]: {...newValueForm[value], to: true}}
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
                htmlRendered.push(<Option value={chucVu.id}>{chucVu.position.name}</Option>) 
            }
        }
        return htmlRendered
    }

    const renderPhongBan = ()=>{
        let htmlRendered = [];
        htmlRendered.push(<Option value="">Phòng ban</Option>)
        if(depList.length > 0){
            for(let phongBan of depList){
                htmlRendered.push(<Option value={phongBan.id}>{phongBan.name}</Option>) 
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

    const getValueSelect_HoKhau_Tinh_TP = (value)=>{
        let tinhSelected = noiOTinh.find(tinh => tinh.name === value);
        dispatch({
            type: GET_DISTRICTS_ADDRESS,
            code: tinhSelected.code
        })
        let {hoKhauThuongTru} = valueForm;
        let hoKhauThuongTruNew = {...hoKhauThuongTru, tinh: value};
        setValueForm({
            ...valueForm,
            hoKhauThuongTru: {...hoKhauThuongTruNew}
        });
    }

    const getValueSelect_HoKhau_Huyen = (value)=>{
        let {hoKhauThuongTru} = valueForm;
        let hoKhauThuongTruNew = {...hoKhauThuongTru, huyen: value};
        setValueForm({
            ...valueForm,
            hoKhauThuongTru: {...hoKhauThuongTruNew}
        });
    }

    const getValueSelect_HoKhau_Quan_TP = (value)=>{
        dispatch(setNoiOHuyen(value))
        let {hoKhauThuongTru} = valueForm;
        let hoKhauThuongTruNew = {...hoKhauThuongTru, quan: value};
        setValueForm({
            ...valueForm,
            hoKhauThuongTru: {...hoKhauThuongTruNew}
        });
    }

    const getValueSelect_ChucVu = (value)=>{
        if(phongBanCVOb.phongBan !== ""){
            dispatch(addPBCV({...phongBanCVOb, chucVu: value}));
            let newPhongBanCVObj = {phongBan : "", chucVu: "", to: ""}
            setPhongBanCVOb({...newPhongBanCVObj})
        }
    }

    const getValueSelect_PhongBan = (value)=>{
        setPhongBanCVOb({...phongBanCVOb, phongBan: value});
    }

    const getValueSelect_To = (value)=>{
        setPhongBanCVOb({
            ...phongBanCVOb,
            to: value
        });
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
                <ThongTinCoBan
                setValueIntoForm={setValueIntoForm}
                validateField={validateField}
                handleChangeGetValueInput={handleChangeGetValueInput}
                validateForm={validateForm}
                showRequiredAlert={showRequiredAlert}
                valueForm={valueForm}
                setValidateForm={setValidateForm}
                setValueForm={setValueForm}
                handleChangeValueRadio={handleChangeValueRadio}
                 />
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
                    {valueForm.noiSinh?.huyen && valueForm.noiSinh?.quan && valueForm.noiSinh?.tinh
                        ? <p>{`${valueForm.noiSinh.huyen}, ${valueForm.noiSinh.quan}, ${valueForm.noiSinh.tinh}`}</p>
                        : ""}
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
                    {valueForm.queQuan?.huyen && valueForm.queQuan?.quan && valueForm.queQuan?.tinh
                        ? <p>{`${valueForm.queQuan.huyen}, ${valueForm.queQuan.quan}, ${valueForm.queQuan.tinh}`}</p>
                        : ""}
                    {validateForm.queQuan?.huyen || validateForm.queQuan?.quan || validateForm.queQuan?.tinh
                        ? showRequiredAlert() 
                        : ""}
                </div>
                <DiaChiLienHe
                valueForm={valueForm}
                setValidateForm={setValidateForm}
                validateForm={validateForm}
                setValueForm={setValueForm}
                getValueSelect_NoiO_Tinh_TP={getValueSelect_NoiO_Tinh_TP}
                renderTinh={renderTinh}
                getValueSelect_NoiO_Quan_TP={getValueSelect_NoiO_Quan_TP}
                renderQuan={renderQuan}
                getValueSelect_NoiO_Huyen={getValueSelect_NoiO_Huyen}
                renderHuyen={renderHuyen}
                showRequiredAlert={showRequiredAlert}
                getValueSelect_HoKhau_Tinh_TP={getValueSelect_HoKhau_Tinh_TP}
                getValueSelect_HoKhau_Quan_TP={getValueSelect_HoKhau_Quan_TP}
                getValueSelect_HoKhau_Huyen={getValueSelect_HoKhau_Huyen} />
            </div>
            <div className="SoYeuLyLich__right">
                <ThongTinCaNhan
                setValueIntoForm={setValueIntoForm}
                handleChangeGetValueInput={handleChangeGetValueInput}
                valueForm={valueForm}
                setValueForm={setValueForm}
                validateField={validateField}
                validateForm={validateForm}
                showRequiredAlert={showRequiredAlert} />
                <div className="SYLL__right__field ngayTuyenDung">
                <label>Ngày được tuyển dụng:<span className="required__field"> *</span></label>
                <DatePicker 
                    value={
                        valueForm.ngayDuocTuyenDung !== ""
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
                {validateForm.ngayDuocTuyenDung
                 ? showRequiredAlert() 
                 : ""}
            </div>
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
                    <div className="fisrt__content date__picker">
                        <label>Ngày bổ nhiệm:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        value={valueForm.ngayBoNhiem !== ""
                        ? moment(valueForm.ngayBoNhiem, "DD-MM-YYYY")
                        : ""}
                        onBlur={()=>{
                            if(valueForm.ngayBoNhiem === ""){
                                setValidateForm({
                                    ...validateForm,
                                    ngayBoNhiem: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    ngayBoNhiem: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayBoNhiem: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.ngayBoNhiem ? showRequiredAlert() : ""}
                    </div>
                    <div className="second__content date__picker">
                        <label>Ngày hết hạn bổ nhiệm:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        value={valueForm.ngayHetHanBoNhiem !== ""
                        ? moment(valueForm.ngayHetHanBoNhiem, "DD-MM-YYYY")
                        : ""}
                        onBlur={()=>{
                            if(valueForm.ngayHetHanBoNhiem === ""){
                                setValidateForm({
                                    ...validateForm,
                                    ngayHetHanBoNhiem: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    ngayHetHanBoNhiem: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayHetHanBoNhiem: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.ngayHetHanBoNhiem ? showRequiredAlert() : ""}
                    </div>
                </div>
                <div className="SYLL__right__field ">
                    <div className="two__content">
                        <div className="fisrt__content to">
                                <label htmlFor="to">Tổ:
                                    <span className="required__field"> *</span>
                                </label>
                                <Select defaultValue= "Tổ"
                                value={phongBanCVOb?.to !== ""
                                ? phongBanCVOb?.to
                                : ""
                                }
                                onBlur={()=>{
                                    if(phongBanCVOb.to === "" || phongBanCVOb.to === undefined){
                                        setValidateForm({
                                            ...validateForm,
                                            phongBanCVObj: {...validateForm.phongBanCVObj,to: true}
                                        })
                                    } else {
                                        setValidateForm({
                                            ...validateForm,
                                            phongBanCVObj: {...validateForm.phongBanCVObj,to: false}
                                        })
                                    }
                                }}
                                onChange={getValueSelect_To}>
                                    {renderTo()}
                                </Select>
                                {validateForm.phongBanCVObj?.to 
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
                                if(phongBanCVOb.phongBan === ""){
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
                                if(phongBanCVOb.chucVu === ""){
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
                    <div className="fisrt__content toChuc">
                        <label htmlFor="soTheNhaBao">Số thẻ nhà báo:
                        </label>
                        <input id="soTheNhaBao" name="soTheNhaBao" type="text" 
                        value={setValueIntoForm("soTheNhaBao")}
                        onChange={(e)=>{
                            handleChangeGetValueInput(e)
                        }}/>
                    </div>
                    <div className="second__content date__picker">
                        <label >Ngày cấp thẻ nhà báo:</label>
                        <DatePicker 
                        value={
                            valueForm.ngayCapTheNhaBao !== "" && valueForm.ngayCapTheNhaBao !== undefined
                            ? moment(valueForm.ngayCapTheNhaBao, "DD-MM-YYYY")
                            : ""}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                ngayCapTheNhaBao: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                    </div>
                </div>
                <div className="SYLL__right__field two__content theCoHieuLuc">
                    <div className="fisrt__content date__picker">
                        <label >Thẻ có hiệu lực từ:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        value={valueForm.theCoHieuLucTu !== ""
                        ? moment(valueForm.theCoHieuLucTu, "DD-MM-YYYY")
                        : ""}
                        onBlur={()=>{
                            if(valueForm.theCoHieuLucTu === ""){
                                setValidateForm({
                                    ...validateForm,
                                    theCoHieuLucTu: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    theCoHieuLucTu: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                theCoHieuLucTu: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.theCoHieuLucTu ? showRequiredAlert() : ""}
                    </div>
                    <div className="second__content date__picker">
                        <label >Thẻ có hiệu lực đến:
                            <span className="required__field"> *</span>
                        </label>
                        <DatePicker 
                        value={valueForm.theCoHieuLucDen !== ""
                        ? moment(valueForm.theCoHieuLucDen, "DD-MM-YYYY")
                        : ""}
                        onBlur={()=>{
                            if(valueForm.theCoHieuLucDen === ""){
                                setValidateForm({
                                    ...validateForm,
                                    theCoHieuLucDen: true
                                })
                            } else {
                                setValidateForm({
                                    ...validateForm,
                                    theCoHieuLucDen: false
                                })
                            }
                        }}
                        onChange={(date,dateString)=>{
                            setValueForm({
                                ...valueForm,
                                theCoHieuLucDen: dateString
                            })
                        }}
                        placeholder=""
                        suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                        </svg>}
                        format="DD-MM-YYYY"
                        />
                        {validateForm.theCoHieuLucDen ? showRequiredAlert() : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}