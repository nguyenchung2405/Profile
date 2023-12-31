import React, { useEffect, useState } from 'react'
import { Modal, DatePicker, Button } from 'antd';
import "./modal.css"
import { boiDuong, CREATE_ORGANIZATION, CREATE_PERSONAL_HISTORY, CREATE_REWARD_DISCIPLINE, CREATE_TRAINING, daoTao, khenThuong, kyLuat, lichSuBanThan, quaTrinhLVHT, thamGiaToChucCT } from '../../title/title';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {handleDateTime} from "../../ultils/helper"

export default function ModalComponent(props) {

    let { title, isShowModal, closeModal, setValueForm, valueForm,
        valueIntoModal, setValueIntoModal } = props;
    const dispatch = useDispatch()
    let { user_profile_id: { pro_id }} = useSelector(state => state.stepsReducer);
    const [valueModal, setValueModal] = useState({});

    useEffect(()=>{
        if(!isShowModal){
            setValueModal({});
        }
    }, [isShowModal]);

    useEffect(()=>{
        setValueModal({...valueIntoModal})
    }, [valueIntoModal])

    const handleOk = () => {
        if(title === quaTrinhLVHT){
                valueModal.pro_id = pro_id;
                dispatch({
                    type: CREATE_PERSONAL_HISTORY,
                    data: valueModal
                });
                
        } else if(title === thamGiaToChucCT) {
                valueModal.pro_id = pro_id;
                dispatch({
                    type: CREATE_ORGANIZATION,
                    data: valueModal
                })
        } else if(title === daoTao) {
            valueModal.study_mode = "training";
            valueModal.pro_id = pro_id;
            dispatch({
                type: CREATE_TRAINING,
                data: valueModal
            })
        } else if(title === boiDuong) {
            valueModal.study_mode = "fostering";
            valueModal.pro_id = pro_id;
            dispatch({
                type: CREATE_TRAINING,
                data: valueModal
            })
        } else if(title === khenThuong) {
            valueModal.pro_id = pro_id;
            valueModal.type = "reward"
            dispatch({
                type: CREATE_REWARD_DISCIPLINE,
                data: valueModal
            })
        } else if(title === kyLuat) {
            valueModal.pro_id = pro_id;
            valueModal.type = "discipline"
            dispatch({
                type: CREATE_REWARD_DISCIPLINE,
                data: valueModal
            })
        } else if(title === lichSuBanThan){
            let newHistorical_features = [];
            if(valueForm?.historical_features?.length > 0){
                newHistorical_features = [...valueForm.historical_features];
                if(valueModal?.index === undefined){
                    newHistorical_features.push(valueModal);
                    setValueForm({
                        ...valueForm,
                        historical_features: [...newHistorical_features]
                    })
                } else {
                    newHistorical_features[valueModal.index] = {...valueModal};
                    setValueForm({
                        ...valueForm,
                        historical_features: [...newHistorical_features]
                    })
                }
            } else {
                newHistorical_features.push(valueModal);
                setValueForm({
                    ...valueForm,
                    historical_features: [...newHistorical_features]
                })
            }
        }
        closeModal()
    };
    
    const handleCancel = () => {
        closeModal()
    };

    const getDateValue = (date, dateString) => {
        if (title === quaTrinhLVHT) {
            setValueModal({
                ...valueModal,
                work_from: moment(dateString, "DD/MM/YYYY").toISOString()
            })
        } else if(title === thamGiaToChucCT) {
            setValueModal({
                ...valueModal,
                time_from: moment(dateString, "DD/MM/YYYY").toISOString()
            })
        } else if(title === daoTao || title === boiDuong) {
            setValueModal({
                ...valueModal,
                time_from: moment(dateString, "DD/MM/YYYY").toISOString()
            })
        } else if(title === khenThuong || title === kyLuat) {
            setValueModal({
                ...valueModal,
                time_from: moment(dateString, "DD/MM/YYYY").toISOString()
            })
        } else if(title === lichSuBanThan){
            setValueModal({
                ...valueModal,
                his_from: moment(dateString, "DD/MM/YYYY").toISOString()
            })
        }
    };

    const getDateValue_DenNgay = (date, dateString) => {
        let denNgay = moment(dateString, "DD/MM/YYYY").toISOString();
        if (title === quaTrinhLVHT && !valueModal?.work_from) {
            alert("Vui lòng chọn Từ ngày trước.")
            setValueModal({
                ...valueModal
            })
        } else {
            if (title === quaTrinhLVHT && Date.parse(denNgay) > Date.parse(valueModal?.work_from)) {
                setValueModal({
                    ...valueModal,
                    work_to: denNgay
                })
            } else if (title === quaTrinhLVHT && Date.parse(denNgay) < Date.parse(valueModal?.work_from)) {
                alert("Đến ngày phải lớn hơn Từ ngày.")
            } else {
                setValueModal({
                    ...valueModal
                })
            }
        }
        if(title === thamGiaToChucCT) {
            if(!valueModal?.time_from){
                alert("Vui lòng chọn Từ ngày trước.")
                setValueModal({
                    ...valueModal
                })
            } else {
                if(Date.parse(denNgay) > Date.parse(valueModal?.time_from)) {
                    setValueModal({
                        ...valueModal,
                        time_to: denNgay
                    })
                } else {
                    alert("Đến ngày phải lớn hơn Từ ngày.")
                    setValueModal({
                        ...valueModal
                    })
                }
            }
        }
        if(title === daoTao || title === boiDuong) {
            if(!valueModal?.time_from){
                alert("Vui lòng chọn Từ ngày trước.")
                setValueModal({
                    ...valueModal
                })
            } else {
                if(Date.parse(denNgay) > Date.parse(valueModal?.time_from)) {
                    setValueModal({
                        ...valueModal,
                        time_to: denNgay
                    })
                } else {
                    alert("Đến ngày phải lớn hơn Từ ngày.")
                    setValueModal({
                        ...valueModal
                    })
                }
            }
        }
        if(title === lichSuBanThan){
            if(!valueModal?.his_from){
                alert("Vui lòng chọn Từ ngày trước.")
                setValueModal({
                    ...valueModal
                })
            } else {
                if(Date.parse(denNgay) > Date.parse(valueModal?.his_from)) {
                    setValueModal({
                        ...valueModal,
                        his_to: denNgay
                    })
                } else {
                    alert("Đến ngày phải lớn hơn Từ ngày.")
                    setValueModal({
                        ...valueModal
                    })
                }
            }
        }
    };

    const handleContent = (e) => {
        let { value } = e.target;
        if (title === quaTrinhLVHT) {
            setValueModal({
                ...valueModal,
                work_place: value
            })
        } else if(title === thamGiaToChucCT){
            setValueModal({
                ...valueModal,
                note: value
            })
        } else if(title === daoTao || title === boiDuong){
            setValueModal({
                ...valueModal,
                note: value
            })
        } else if(title === khenThuong || title === kyLuat){
            setValueModal({
                ...valueModal,
                note: value
            })
        } else if(title === lichSuBanThan){
            setValueModal({
                ...valueModal,
                content: value
            })
        }
    }
    
    const valueOfField = (from_or_to)=>{
        // Đang làm step 8 cái modal => khi đóng modal thì clear data các field
        if(title === lichSuBanThan){
            if(from_or_to === "from"){
                if(valueModal?.his_from && valueModal?.his_from !== ""){
                    return handleDateTime(valueModal["his_from"])
                } else {
                    return ""
                }
            } else if(from_or_to === "to"){
                if(valueModal?.his_to && valueModal?.his_to !== ""){
                    return handleDateTime(valueModal["his_to"])
                } else {
                    return ""
                }
            } else {
                if(valueModal?.content && valueModal?.content !== ""){
                    return valueModal["content"]
                } else {
                    return ""
                }
            }
        }
    }

    const renderContent = () => {
        if (title === khenThuong) {
            return <>
                <span>Ngày được khen thưởng:</span>
                <DatePicker
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6" />
                    </svg>}
                    format="DD-MM-YYYY"
                    placeholder=''
                    onChange={getDateValue}
                 />
            </>
        } else if (title === kyLuat) {
            return <>
                <span>Ngày bị kỷ luật:</span>
                <DatePicker
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6" />
                    </svg>}
                    format="DD-MM-YYYY"
                    placeholder=''
                    onChange={getDateValue}
                 />
            </>
        } else {
            return <>
                <span>Từ ngày:</span>
                <DatePicker
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6" />
                    </svg>}
                    format="DD-MM-YYYY"
                    placeholder=''
                    onChange={getDateValue}
                    value={valueOfField("from")} />
                <span>Đến ngày:</span>
                <DatePicker
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6" />
                    </svg>}
                    format="DD-MM-YYYY"
                    placeholder=''
                    onChange={getDateValue_DenNgay}
                    value={valueOfField("to")}/>
            </>
        }
    }

    return (
        <div className="Modal">
            <Modal
                closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black" />
                </svg>}
                footer={<Button className='btn__modal__step' type="primary" onClick={() => {
                    handleOk()
                }}>Thêm</Button>}
                style={{ width: "600px" }}
                width="600px"
                title={<span class="modal__title">{title}</span>}
                open={isShowModal}
                onCancel={handleCancel}>
                <div className="content">
                    {renderContent()}
                    {title === daoTao
                        ?
                        <div className="bangCap">
                            <label htmlFor="bangCap">Bằng cấp:</label>
                            <input id="bangCap" onChange={(e)=>{
                                setValueModal({
                                    ...valueModal,
                                    diploma: e.target.value
                                })
                            }} />
                        </div>
                        :
                        ""
                    }
                    <textarea onChange={handleContent} value={valueOfField("content")}></textarea>
                </div>
            </Modal>
        </div>
    )
}