import React, { useState } from 'react'
import { Modal, DatePicker, Button, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { boiDuong, daoTao, khenThuong, kyLuat, quaTrinhLVHT, thamGiaToChucCT, UPDATE_ORGANIZATION, UPDATE_PERSONAL_HISTORY, UPDATE_REWARD_DISCIPLINE, UPDATE_TRAINING } from '../../title/title';
import { handleDateTime } from '../../ultils/helper';

export default function ModalUpdate(props) {

    let { title, isShowModal, closeModal, dataStep2, dataStep4, dataStep5, dataStep6 } = props;
    const {Option} = Select;
    const dispatch = useDispatch();
    const [valueModal, setValueModal] = useState({});
    // console.log(valueModal)
    const handleOk = () => {
        if(title === quaTrinhLVHT){
                dispatch({
                    type: UPDATE_PERSONAL_HISTORY,
                    data: valueModal
                });
        } else if(title === thamGiaToChucCT) {
                dispatch({
                    type: UPDATE_ORGANIZATION,
                    data: valueModal
                })
        } else if(title === daoTao) {
            dispatch({
                type: UPDATE_TRAINING,
                data: valueModal
            })
        } else if(title === boiDuong) {
            dispatch({
                type: UPDATE_TRAINING,
                data: valueModal
            })
        } else if(title === khenThuong || title === kyLuat) {
            dispatch({
                type: UPDATE_REWARD_DISCIPLINE,
                data: valueModal
            })
        }
        closeModal()
    };

    const handleCancel = () => {
        closeModal()
        setValueModal({})
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
        }
    }

    const valueOfField = (name)=>{
        if(name === "work_from" || name === "work_to" || name === "time_from" || name === "time_to"){
            if(!valueModal[name]){
                return ""
            }
            return handleDateTime(valueModal[name])
        } else if(valueModal[name] && valueModal[name]!== undefined){
            return valueModal[name]
        } else {
            return ""
        }
    }

    const handleChangeSelect = (value)=>{
        let itemIsFinding;
        if(title === quaTrinhLVHT){
            itemIsFinding = dataStep2.find(item => item.id === value)
            // console.log(itemIsFinding)
            setValueModal({...itemIsFinding})
        } else if(title === thamGiaToChucCT){
            itemIsFinding = dataStep4.find(item => item.id === value)
            // console.log(itemIsFinding)
            setValueModal({...itemIsFinding})
        } else if(title === daoTao){
            itemIsFinding = dataStep5.find(item => item.id === value)
            // console.log(itemIsFinding)
            setValueModal({...itemIsFinding})
        } else if(title === boiDuong){ 
            itemIsFinding = dataStep5.find(item => item.id === value)
            // console.log(itemIsFinding)
            setValueModal({...itemIsFinding})
        } else if(title === khenThuong || title === kyLuat){ 
            itemIsFinding = dataStep6.find(item => item.id === value)
            // console.log(itemIsFinding)
            setValueModal({...itemIsFinding})
        }
    }

    const renderOption = ()=>{
        if(title === quaTrinhLVHT){
            return dataStep2.map((item, index)=>{
                // console.log(item)
                return <Option value={item.id} key={index}>{item.work_place}</Option>
            })
        } else if(title === thamGiaToChucCT){
            return dataStep4.map((item, index)=>{
                // console.log(item)
                return <Option value={item.id} key={index}>{item.note}</Option>
            })
        } else if(title === daoTao){
            let newDaoTao = dataStep5.filter(item => item.study_mode === "training");
            return newDaoTao.map((item, index)=>{
                return <Option value={item.id} key={index}>{item.note}</Option>
            })
        } else if(title === boiDuong){
            let newBoiDuong = dataStep5.filter(item => item.study_mode === "fostering");
            return newBoiDuong.map((item, index)=>{
                return <Option value={item.id} key={index}>{item.note}</Option>
            })
        } else if(title === khenThuong){
            let newKhenThuong = dataStep6.filter(item => item.type === "reward");
            return newKhenThuong.map((item, index)=>{
                return <Option value={item.id} key={index}>{item.note}</Option>
            })
        } else if(title === kyLuat){
            let newKyLuat = dataStep6.filter(item => item.type === "discipline");
            return newKyLuat.map((item, index)=>{
                return <Option value={item.id} key={index}>{item.note}</Option>
            })
        }
    }

    const renderContent = () => {
        if (title === khenThuong) {
            return <>
                <div className="modal__update__select">
                    <Select
                    showSearch 
                    value={valueOfField("id")}
                    onChange={handleChangeSelect}
                    filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    >
                        {renderOption()}
                    </Select>
                </div>
                <span>Ngày được khen thưởng:</span>
                <DatePicker
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6" />
                    </svg>}
                    format="DD-MM-YYYY"
                    placeholder=''
                    onChange={getDateValue}
                    value={valueOfField("time_from")} />
            </>
        } else if (title === kyLuat) {
            return <>
                <div className="modal__update__select">
                    <Select
                    showSearch 
                    value={valueOfField("id")}
                    onChange={handleChangeSelect}
                    filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    >
                        {renderOption()}
                    </Select>
                </div>
                <span>Ngày bị kỷ luật:</span>
                <DatePicker
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6" />
                    </svg>}
                    format="DD-MM-YYYY"
                    placeholder=''
                    onChange={getDateValue}
                    value={valueOfField("time_from")} />
            </>
        } else {
            return <>
                <div className="modal__update__select">
                    <Select
                    showSearch 
                    value={valueOfField("id")}
                    onChange={handleChangeSelect}
                    filterOption={(input, option) =>
                        (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    >
                        {renderOption()}
                    </Select>
                </div>
                <span>Từ ngày:</span>
                <DatePicker
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6" />
                    </svg>}handleChangeSelect
                    format="DD-MM-YYYY"
                    placeholder=''
                    onChange={getDateValue}
                    value={title === quaTrinhLVHT ? valueOfField("work_from") : valueOfField("time_from")} />
                <span>Đến ngày:</span>
                <DatePicker
                    suffixIcon={<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.625 9C4.8125 9 5 8.84375 5 8.625V7.375C5 7.1875 4.8125 7 4.625 7H3.375C3.15625 7 3 7.1875 3 7.375V8.625C3 8.84375 3.15625 9 3.375 9H4.625ZM8 8.625V7.375C8 7.1875 7.8125 7 7.625 7H6.375C6.15625 7 6 7.1875 6 7.375V8.625C6 8.84375 6.15625 9 6.375 9H7.625C7.8125 9 8 8.84375 8 8.625ZM11 8.625V7.375C11 7.1875 10.8125 7 10.625 7H9.375C9.15625 7 9 7.1875 9 7.375V8.625C9 8.84375 9.15625 9 9.375 9H10.625C10.8125 9 11 8.84375 11 8.625ZM8 11.625V10.375C8 10.1875 7.8125 10 7.625 10H6.375C6.15625 10 6 10.1875 6 10.375V11.625C6 11.8438 6.15625 12 6.375 12H7.625C7.8125 12 8 11.8438 8 11.625ZM5 11.625V10.375C5 10.1875 4.8125 10 4.625 10H3.375C3.15625 10 3 10.1875 3 10.375V11.625C3 11.8438 3.15625 12 3.375 12H4.625C4.8125 12 5 11.8438 5 11.625ZM11 11.625V10.375C11 10.1875 10.8125 10 10.625 10H9.375C9.15625 10 9 10.1875 9 10.375V11.625C9 11.8438 9.15625 12 9.375 12H10.625C10.8125 12 11 11.8438 11 11.625ZM14 3.5C14 2.6875 13.3125 2 12.5 2H11V0.375C11 0.1875 10.8125 0 10.625 0H9.375C9.15625 0 9 0.1875 9 0.375V2H5V0.375C5 0.1875 4.8125 0 4.625 0H3.375C3.15625 0 3 0.1875 3 0.375V2H1.5C0.65625 2 0 2.6875 0 3.5V14.5C0 15.3438 0.65625 16 1.5 16H12.5C13.3125 16 14 15.3438 14 14.5V3.5ZM12.5 14.3125C12.5 14.4375 12.4062 14.5 12.3125 14.5H1.6875C1.5625 14.5 1.5 14.4375 1.5 14.3125V5H12.5V14.3125Z" fill="#666666" fillOpacity="0.6" />
                    </svg>}
                    format="DD-MM-YYYY"
                    placeholder=''
                    onChange={getDateValue_DenNgay}
                    value={title === quaTrinhLVHT ? valueOfField("work_to") : valueOfField("time_to")} />
            </>
        }
    }

  return (
    <div className="Modal">
    <Modal
        closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black" />
        </svg>}
        footer={<Button type="primary" onClick={() => {
            handleOk()
        }}>Cập nhật</Button>}
        style={{ width: "600px" }}
        width="600px"
        title={title}
        open={isShowModal}
        onCancel={handleCancel}>
        <div className="content">
            {renderContent()}
            {title === daoTao
                ?
                <div className="bangCap">
                    <label htmlFor="bangCap">Bằng cấp:</label>
                    <input 
                    id="bangCap"
                    value={valueOfField("diploma")}
                    onChange={(e)=>{
                        setValueModal({
                            ...valueModal,
                            diploma: e.target.value
                        })
                    }} />
                </div>
                :
                ""
            }
            <textarea onChange={handleContent} value={title === quaTrinhLVHT ? valueOfField("work_place") : valueOfField("note")}></textarea>
        </div>
    </Modal>
    </div>
  )
}