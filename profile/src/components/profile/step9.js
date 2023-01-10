import { Button, DatePicker, Select } from 'antd'
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { AiOutlineEdit, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsSubmit } from '../../redux/Steps/step1/step1Slice';
import { setFamilyRelationshipExist } from '../../redux/Steps/step8Slice';
import { setNoiOHienTaiHuyen_ST9 } from '../../redux/Steps/step9Slice';
import { setIsNextStep, setMessageAlert } from '../../redux/Steps/stepsSlice';
import { CREATE_FAMILY_RELATIONSHIP, GET_DISTRICTS_STEP9, GET_PROVINCES, lichSuBanThan, UPDATE_FAMILY_RELATIONSHIP } from '../../title/title';
import { checkMicroFe, handleDateTime } from '../../ultils/helper';
import ModalComponent from '../modal/modal';

export default function Step8() {

    const {Option} = Select;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let { user_profile_id: { pro_id }, isDone} = useSelector(state => state.stepsReducer);
    let {isSubmit} = useSelector(state => state.steps1Reducer);
    let { familyRelationship, isCreated } = useSelector(state => state.step8Reducer);
    let { noiOHienTaiTinh, noiOHienTaiQuan , noiOHienTaiHuyen } = useSelector(state => state.step9Reducer);
    let [isShowModal, setIsShowModal] = useState(false)
    let [isUpdate, setIsUpdate ] = useState(false);
    let [isShowModalUpdate, setIsShowModalUpdate] = useState(false)
    const [valueForm, setValueForm] = useState({});
    const [valueIntoModal, setValueIntoModal] = useState({});
    // console.log(valueForm)
    // console.log(familyRelationship)
    // console.log(isDone, isUpdate, isCreated)

    const filterRelationship = ()=>{
        let a =familyRelationship.map((item)=>{
            if(item.type.toLowerCase().includes("cấp") || item.type.toLowerCase().includes("đồng")){
                return item
            }
        });
        let b = a.filter(item => item !== undefined);
        return b.map((item) => {
            return <li className={valueForm.id === item.id ? "activate__li" : ""} onClick={(e)=>{
                let {className} = e.target;
                let itemExist = familyRelationship.find(relation => relation.id === item.id)
                if(itemExist && !className.includes("activate__li")){
                    setValueForm({...itemExist});
                    dispatch(setFamilyRelationshipExist(true))
                    setIsUpdate(true);
                    // e.target.className = "activate__li"
                } else {
                    setValueForm({});
                    setIsUpdate(false);
                    dispatch(setFamilyRelationshipExist(false))
                    // e.target.className = ""
                }
            }}>{`${item.full_name} - ${item.type}`}</li>
        })
    }

    useEffect(()=>{
        return ()=>{
            dispatch(setMessageAlert({}))
        }
    }, []);

    useEffect(()=>{
        dispatch({
            type: GET_PROVINCES
        })
    }, [dispatch])

    useEffect(()=>{
        if(isCreated){
            setIsUpdate(true)
            let lengthArr = familyRelationship.length;
            setValueForm({... familyRelationship[lengthArr - 1]})
        }
    }, [isCreated])

    useEffect(()=>{
        if(isSubmit){
            if(!valueForm.type){
                dispatch(setIsSubmit(false))
                dispatch(setMessageAlert({type: "error", msg: "Thao tác thất bại."}))
            } else {
                if(!isUpdate){
                    // console.log("Tạo family")
                    valueForm.pro_id = pro_id;
                    dispatch({
                        type: CREATE_FAMILY_RELATIONSHIP,
                        data: valueForm
                    })
                    dispatch(setIsSubmit(false))
                } else {
                    // console.log("Cập nhật family")
                    dispatch({
                        type: UPDATE_FAMILY_RELATIONSHIP,
                        data: valueForm
                    })
                    dispatch(setIsSubmit(false))
                }
            }
        }
    }, [isSubmit])

    useEffect(()=>{
        if(isDone){
            dispatch(setMessageAlert({type: "success", msg: "Bạn đã hoàn tất hồ sơ cá nhân."}))
            let checkMicroFE = checkMicroFe()
            if(checkMicroFE){
                navigate("/profile-service/hr/profile");
            } else {
                navigate("/");
            }
        }
    }, [isDone])

    useEffect(() => {
        setValueForm({
            ...valueForm,
            noiOHienTai: { ...valueForm.noiOHienTai, quan: "", huyen: "" }
        });
    }, [noiOHienTaiQuan])

    useEffect(() => {
        setValueForm({
            ...valueForm,
            noiOHienTai: { ...valueForm.noiOHienTai, huyen: "" }
        });
    }, [noiOHienTaiHuyen])

    const closeModal = ()=>{
        setIsShowModal(false)
    }

    const closeModalUpdate = ()=>{
        setIsShowModalUpdate(false)
    }

    const valueOfField = (name)=>{
        if(name === "birthday"){
            if(valueForm[name] && valueForm[name] !== null && valueForm[name] !== undefined){
                return handleDateTime(valueForm[name])
            }
        } else if(valueForm[name] && valueForm[name] !== null && valueForm[name] !== undefined && valueForm[name] !== ""){
            return valueForm[name]
        } else {
            return ""
        }
    }

    const getValueSelect_NoiO_Huyen = (value)=>{
        let { noiOHienTai } = valueForm;
        let noiOHienTaiNew = { ...noiOHienTai, huyen: value };
        setValueForm({
            ...valueForm,
            noiOHienTai: { ...noiOHienTaiNew }
        });
    }

    const getValueSelect_NoiO_Quan_TP = (value)=>{
        dispatch(setNoiOHienTaiHuyen_ST9(value));
        let { noiOHienTai } = valueForm;
        let noiOHienTaiNew = { ...noiOHienTai, quan: value };
        setValueForm({
            ...valueForm,
            noiOHienTai: { ...noiOHienTaiNew }
        });
    }

    const getValueSelect_NoiO_Tinh_TP = (value)=>{
        let tinhSelected = noiOHienTaiTinh.find(tinh => tinh.name === value);
        dispatch({
            type: GET_DISTRICTS_STEP9,
            code: tinhSelected.code
        })
        let { noiOHienTai } = valueForm;
        let noiOHienTaiNew = { ...noiOHienTai, tinh: value };
        setValueForm({
            ...valueForm,
            noiOHienTai: { ...noiOHienTaiNew }
        });
    }

    const renderTinh = ()=>{
        return noiOHienTaiTinh.map((tinh, index) => {
            return <Option value={tinh.name} key={index}>{tinh.name}</Option>
        })
    }

    const renderQuan = ()=>{
        return noiOHienTaiQuan.map((quan, index) => {
            return <Option value={quan.name} key={index}>{quan.name}</Option>
        })
    }

    const renderHuyen = ()=>{
        return noiOHienTaiHuyen.map((huyen, index) => {
            return <Option value={huyen.name} key={index}>{huyen.name}</Option>
        })
    }

    const renderQuanHe = ()=>{
        let htmlRendered = [];
        let quanHeArr = ["Cấp trên","Cấp dưới","Đồng nghiệp","Sếp lớn"];
        for(let quanHe of quanHeArr){
            htmlRendered.push(<Option value={quanHe}>{quanHe}</Option>) 
        }
        return htmlRendered
    }

    const renderHistoryFeatures = ()=>{
        if(valueForm?.historical_features?.length > 0 && typeof valueForm?.historical_features === "object"){
            return valueForm?.historical_features?.map((item, index)=>{
                let tuNgay = moment(new Date(item.his_from)).format("DD/MM/YYYY");
                let denNgay = moment(new Date(item.his_to)).format("DD/MM/YYYY");
                return <div className="center">
                    <div className="process step8" key={index}>
                        <div className="point"></div>
                        <div className="process__infor">
                            <p>{`${tuNgay} - ${denNgay}`}</p>
                            <p>{item.content}</p>
                        </div>
                        <AiOutlineMinusCircle onClick={() => {
                            let newHisArr = [...valueForm?.historical_features];
                            newHisArr = newHisArr.filter(his => his.content !== item.content)
                            setValueForm({
                                ...valueForm,
                                historical_features: [...newHisArr]
                            });
                        }} />
                        <AiOutlineEdit className="icon__update" onClick={()=>{
                            let newHisArr = [...valueForm?.historical_features];
                            newHisArr = newHisArr.filter(his => his.content === item.content)
                            setIsShowModalUpdate(true)
                            setValueIntoModal({...newHisArr[0], index})
                        }}/>
                    </div>
                </div>
            })
        }
    }

    const handleChangeValue = (e)=>{
        let {name, value} = e.target;
        setValueForm({
            ...valueForm,
            [name]: value
        })
    }

    const handleChangQuanHe = (value)=>{
        setValueForm({
            ...valueForm,
            type: value
        })
        // if(familyRelationship.length > 0){
        //     let itemIsExist = familyRelationship.find(item => item.type === value);
        //     if(itemIsExist){
        //         setValueForm({...itemIsExist});
        //         dispatch(setFamilyRelationshipExist(true))
        //         setIsUpdate(true);
        //     } else {
        //         setValueForm({
        //             type: value
        //         })
        //         setIsUpdate(false);
        //         dispatch(setFamilyRelationshipExist(false))
        //     }
        // } else {
        //     setValueForm({
        //         ...valueForm,
        //         type: value
        //     })
        // }
    }

  return (
    <div className="alignCenter">
        <div className="fami__rela__position">
            <h3>Danh sách quan hệ xã hội:</h3>
            <ol>
                {filterRelationship()}
            </ol>
        </div>
        <div className="Step8">
            <div className="quanHeGiaDinh">
                <Select
                value={valueForm?.type !== "" && valueForm?.type !== undefined ? valueForm?.type : "Quan hệ xã hội"}
                dropdownStyle={{minWidth: "277px"}}
                popupClassName="quanHeList"
                onChange={handleChangQuanHe}
                >
                    {renderQuanHe()}
                </Select>
            </div>
            <div className="field">
                <label htmlFor="hoTen">Họ tên:</label>
                <input id="hoTen" name="full_name" 
                value={valueOfField("full_name")}
                onChange={handleChangeValue} />
            </div>
            <div className="field birthday">
                <label>Ngày tháng năm sinh:</label>
                <DatePicker 
                value={valueOfField("birthday")}
                onChange={(date,dateString)=>{
                    setValueForm({
                        ...valueForm,
                        birthday: moment(dateString, "DD-MM-YYYY").toISOString()
                    })
                }}
                placeholder=""
                suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6"/>
                </svg>}
                format="DD-MM-YYYY"
                />
            </div>
            <div className="field">
                <label htmlFor="ngheNghiep">Nghề nghiệp:</label>
                <input id="ngheNghiep" name="job" 
                value={valueOfField("job")}
                onChange={handleChangeValue} />
            </div>
            <div className="field">
                <label htmlFor="congTac">Công tác:</label>
                <input id="congTac" name="mission"
                value={valueOfField("mission")}
                onChange={handleChangeValue} />
            </div>
            <div className="Step8__quaTrinh">
                    <div className="Step8__content">
                            <p>Đặc điểm lịch sử
                            <span> (chức danh, chức vụ, tên, địa chỉ cơ quan, xí nghiệp, công ty ở trong hoặc ngoài nước)</span>
                            </p>
                            {renderHistoryFeatures()}
                    </div>
                    <div className="Step8__footer">
                        <Button 
                        onClick={()=>{
                            setIsShowModal(true)
                        }}
                        type="default"
                        icon={<AiOutlinePlusCircle />}>Thêm lịch sử</Button>
                    </div>
                    <ModalComponent 
                    title={lichSuBanThan}
                    isShowModal={isShowModal}
                    closeModal={closeModal}
                    valueForm={valueForm}
                    setValueForm={setValueForm} />
                    <ModalComponent 
                    title={lichSuBanThan}
                    isShowModal={isShowModalUpdate}
                    closeModal={closeModalUpdate}
                    valueForm={valueForm}
                    setValueForm={setValueForm}
                    valueIntoModal={valueIntoModal}
                    setValueIntoModal={setValueIntoModal} />
            </div>
            <div className="field">
                <label htmlFor="congViecHienTai">Công việc hiện tại:</label>
                <input id="congViecHienTai" name="current_job"
                value={valueOfField("current_job")}
                onChange={handleChangeValue} />
            </div>
            <div className="field noiCuTru">
                    <label htmlFor='noiCuTru'>Nơi ở hiện tại:</label>
                    <input id="NoiOHienTai" name="diaChi" type="text" 
                    value={valueForm?.noiOHienTai?.diaChi ? valueForm?.noiOHienTai?.diaChi : ""}
                    onChange={(e)=>{
                        let {name, value} = e.target;
                        setValueForm({
                            ...valueForm,
                            noiOHienTai: { ...valueForm.noiOHienTai, [name] : value}
                        })
                    }} />
                    <Select defaultValue="Tỉnh (Thành phố)" 
                    showSearch
                    value={valueForm?.noiOHienTai?.tinh ? valueForm?.noiOHienTai?.tinh : "Tỉnh (Thành phố)"}
                    filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    onChange={getValueSelect_NoiO_Tinh_TP}>
                        {renderTinh()}
                    </Select>
                    <Select defaultValue="Quận (Thành phố)" 
                    showSearch
                    value={valueForm?.noiOHienTai?.quan ? valueForm?.noiOHienTai?.quan : "Quận (Thành phố)"}
                    filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    onChange={getValueSelect_NoiO_Quan_TP}>
                        {renderQuan()}
                    </Select>
                    <Select defaultValue="Huyện" 
                    showSearch
                    filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    value={valueForm?.noiOHienTai?.huyen  ? valueForm?.noiOHienTai?.huyen : "Huyện (Xã)"}
                    onChange={getValueSelect_NoiO_Huyen}>
                        {renderHuyen()}
                    </Select>
            </div>
        </div>
    </div>
  )
}