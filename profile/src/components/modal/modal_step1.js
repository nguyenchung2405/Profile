import React from 'react'
import { Modal, Select, Button } from 'antd';
import { noiSinh_Step1, queQuan_Step1 } from '../../title/title';

export default function Modal_step1(props) {

    let {title, isShowModal, closeModal, valueForm ,setValidateForm, 
        validateForm, getValueSelect_NoiSinh_Tinh_TP, getValueSelect_NoiSinh_Quan_TP,
        renderTinh, getValueSelect_NoiSinh_Huyen, renderQuan, renderHuyen, showRequiredAlert,
        getValueSelect_QueQuan_Tinh_TP, getValueSelect_QueQuan_Quan_TP,
        getValueSelect_QueQuan_Huyen, disabledInput} = props;

    const {Option} = Select;
    
    const handleOk = () => {
        closeModal()
    };
  
    const handleCancel = () => {
        closeModal()
    };

    const renderContent = ()=>{
        if(title === noiSinh_Step1){
            return (
                <div className="SYLL__left__field noiSinh">
                <Select 
                showSearch
                filterOption={(input, option) =>
                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                }
                disabled={disabledInput()}
                value={valueForm.noiSinh.tinh !== ""
                    ? valueForm.noiSinh.tinh
                    : ""
                }
                onBlur={()=>{
                    if(valueForm.noiSinh.tinh === ""){
                        setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,tinh:true}})
                    } else {
                        setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,tinh:false}})
                    }
                }}
                onChange={getValueSelect_NoiSinh_Tinh_TP}
                >
                    <Option value="">Tỉnh (thành phố)</Option>
                    {renderTinh()}
                </Select>
                <Select
                showSearch
                filterOption={(input, option) =>
                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                }
                disabled={disabledInput()}
                value={valueForm.noiSinh.quan !== ""
                    ? valueForm.noiSinh.quan
                    : ""
                }
                onBlur={()=>{
                    if(valueForm.noiSinh.quan === ""){
                        setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,quan:true}})
                    } else {
                        setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,quan:false}})
                    }
                }}
                onChange={getValueSelect_NoiSinh_Quan_TP}
                >
                    <Option value="">Quận (Thành phố)</Option>
                    {renderQuan()}
                </Select>
                <Select 
                showSearch
                filterOption={(input, option) =>
                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                }
                disabled={disabledInput()}
                value={valueForm.noiSinh.huyen !== ""
                    ? valueForm.noiSinh.huyen
                    : ""
                }
                onBlur={()=>{
                    if(valueForm.noiSinh.huyen === ""){
                        setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,huyen:true}})
                    } else {
                        setValidateForm({...validateForm,noiSinh: {...validateForm.noiSinh,huyen:false}})
                    }
                }}
                onChange={getValueSelect_NoiSinh_Huyen}
                >
                    <Option value="">Huyện (Xã)</Option>
                    {renderHuyen()}
                </Select>
                {validateForm.noiSinh?.huyen || validateForm.noiSinh?.quan || validateForm.noiSinh?.tinh
                    ? showRequiredAlert() 
                    : ""}
                </div>
            )
        } else if(title === queQuan_Step1){
            return (
                <div className="SYLL__left__field queQuan">
                <Select
                showSearch
                filterOption={(input, option) =>
                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                }
                disabled={disabledInput()}
                value={valueForm.queQuan.tinh !== ""
                    ? valueForm.queQuan.tinh
                    : ""
                }
                onBlur={()=>{
                    if(valueForm.queQuan.tinh === ""){
                        setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,tinh:true}})
                    } else {
                        setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,tinh:false}})
                    }
                }}
                onChange={getValueSelect_QueQuan_Tinh_TP}>
                    <Option value="">Tỉnh (thành phố)</Option>
                    {renderTinh("queQuan")}
                </Select>
                <Select defaultValue="Quận (Thành phố)" 
                showSearch
                filterOption={(input, option) =>
                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                }
                disabled={disabledInput()}
                value={valueForm.queQuan.quan !== ""
                    ? valueForm.queQuan.quan
                    : ""
                }
                onBlur={()=>{
                    if(valueForm.queQuan.quan === ""){
                        setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,quan:true}})
                    } else {
                        setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,quan:false}})
                    }
                }}
                onChange={getValueSelect_QueQuan_Quan_TP}>
                    <Option value="">Quận (Thành phố)</Option>
                    {renderQuan("queQuan")}
                </Select>
                <Select
                showSearch
                filterOption={(input, option) =>
                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                }
                disabled={disabledInput()}
                value={valueForm.queQuan.huyen !== ""
                    ? valueForm.queQuan.huyen
                    : ""
                }
                onBlur={()=>{
                    if(valueForm.queQuan.huyen === ""){
                        setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,huyen:true}})
                    } else {
                        setValidateForm({...validateForm,queQuan: {...validateForm.queQuan,huyen:false}})
                    }
                }}
                onChange={getValueSelect_QueQuan_Huyen}>
                    <Option value="">Huyện (Xã)</Option>
                    {renderHuyen("queQuan")}
                </Select>
                {validateForm.queQuan?.huyen || validateForm.queQuan?.quan || validateForm.queQuan?.tinh
                    ? showRequiredAlert() 
                    : ""}
                </div>
            )
        }
    }

  return (
    <div className="modal_step1">
        <Modal
        className="modal__step1"
        closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black"/>
        </svg>}
        footer={<Button className="btn-green" onClick={handleOk} >Xác nhận</Button>}
        width= "600px"
        title={<span className="modal__step1__title">{title}</span>} 
        open={isShowModal} 
        onOk={handleOk} 
        onCancel={handleCancel}
        >
            <div className="content">
                {renderContent()}
            </div>
        </Modal>
    </div>
  )
}
