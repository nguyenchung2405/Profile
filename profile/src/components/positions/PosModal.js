import { Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function PosModal(props) {

    let{isShowModal, setIsShowModal, dataToModal}=props;
    const {Option} = Select;
    const {positionTyleList} = useSelector(state => state.positionReducer);
    const [formValue, setFormValue] = useState({});
    const [validate, setValidate] = useState({
        name: false,
        identifier: false,
        level: false
    });
    // console.log("dataToModal",dataToModal)
    // console.log("positionTyleList",positionTyleList)
    
    useEffect(()=>{
        setFormValue(dataToModal)
    },[dataToModal])

    const handleCancel = ()=>{
        setIsShowModal(false)
    }

    const submitForm=(e)=>{
        e.preventDefault();
        checkValueForm()
    }

    const handleChangeInput = (e)=>{
        let {value, id} = e.target;
        setFormValue({
            ...formValue,
            [id]:value
        })
    }

    const handleChangeSelectType = (value)=>{
        setFormValue({
            ...formValue,
            identifier :value
        })
    }

    const handleChangeSelectLevel = (value)=>{
        setFormValue({
            ...formValue,
            level :value
        })
    }

    const renderOption = ()=>{
        return positionTyleList.map((postype,index)=>{
            return <Option value={postype?.id}>{postype?.identifier}</Option>
        })
    }

    const checkValueForm = ()=>{
        let isNext;
        let newValidate = {};
        for(let prop in validate){
            if(formValue[prop] && formValue[prop] !== ""){
                isNext = true;
                newValidate = {...newValidate, [prop]:false}
            } else {
                isNext = false;
                newValidate = {...newValidate, [prop]:true}
            }
        }
        setValidate({
            ...newValidate
        })
        return isNext;
    }

    const setValueField = (name)=>{
        if(name === "name"){
            return formValue.position ? formValue.position[name] : ""
        } else {
            return formValue.position_type ? formValue.position_type[name] : ""
        }
    }

    const showRemind = (nameOfField)=>{
        if(validate[nameOfField]){
            return <p className="required__field">* Trường này không được để trống</p>
        }
    }

    const renderButton = ()=>{
        if(dataToModal["id"]){
            return <div className="alignCenter">
                <button type='submit' className="dep__btn">
                    Cập nhật
                </button>
            </div>
        } else {
            return <div className="alignCenter">
                <button type='submit' className="dep__btn">
                    Tạo
                </button>
            </div>
        }
    }

  return (
    <Modal 
    title={"abc"}
    footer={null}
    closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black"/>
        </svg>}
    open={isShowModal} 
    onCancel={handleCancel}>
        <div className="pos__infor">
            <form onSubmit={submitForm}>
                <div className="pos__infor__name onefield">
                    <label htmlFor="name">Tên chức vụ:<span className="required__field"> *</span></label>
                    <input id="name" type="text" 
                    value={setValueField("name")}
                    onChange={handleChangeInput} />
                    {showRemind("name")}
                </div>
                <div className="pos__infor__identifier onefield">
                    <label htmlFor="identifier">Loại chức vụ:<span className="required__field"> *</span></label>
                    <Select
                        id="identifier"
                        showSearch
                        value={setValueField("identifier")}
                        onChange={handleChangeSelectType}
                        filterOption={(input, option) =>
                            (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {renderOption()}
                    </Select>
                    {showRemind("identifier")}
                </div>
                <div className="pos__infor__level onefield">
                    <label htmlFor="level">Cấp bậc:<span className="required__field"> *</span></label>
                    <Select
                        id="level"
                        showSearch
                        value={setValueField("level")}
                        onChange={handleChangeSelectLevel}
                        filterOption={(input, option) =>
                            (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        <Option value={1} key={1} >a</Option>
                        <Option value={2} key={2} >b</Option>
                    </Select>
                    {showRemind("level")}
                </div>
                <div className="pos__infor__description onefield">
                    <label htmlFor="description">Mô tả:</label>
                    <textarea name="description" id="description" 
                    value={setValueField("description")}
                    onChange={handleChangeInput} ></textarea>
                </div>
                    {renderButton()}
            </form>
        </div>
    </Modal>
  )
}
