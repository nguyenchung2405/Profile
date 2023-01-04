import React, { useEffect, useState } from 'react'
import { Select, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_DEPARTMENT, regexPhone, UPDATE_DEPARTMENT } from '../../title/title';

export default function DepInfor(props) {

    let {isShowModal, setIsShowModal, dataToModal : depInfor} = props;
    let  depID = depInfor?.id;
    const {Option} = Select;
    const dispatch = useDispatch();
    const {tableDepList} = useSelector(state => state.departmentsReducer)
    let [formValue, setFormValue] = useState({});
    let [checkPhone, setCheckPhone] = useState(false);
    let [validate, setValidate] = useState({
        name: false,
        address: false,
        phone: false,
        parent_id: false
    });
    // console.log(formValue)
    // console.log(tableDepList)
    useEffect(()=>{
        if(!isShowModal){
            setValidate({
                name: false,
                address: false,
                phone: false,
                parent_id: false
            })
        }
    },[isShowModal])
    
    useEffect(()=>{
        setFormValue({...depInfor})
    }, [depInfor])
    
    const handleCancel = () => {
        setIsShowModal(false)
    };

    const submitForm = (e)=>{
        e.preventDefault()
        let isSubmit = checkValueForm();
        if(isSubmit){
            if(depID){
                dispatch({
                    type: UPDATE_DEPARTMENT,
                    data: formValue
                })
                setIsShowModal(false)
            } else {
                dispatch({
                    type: CREATE_DEPARTMENT,
                    data: formValue
                });
                setIsShowModal(false)
            }
        }
    }

    const handleChangeInput = (e)=>{
        let {value, id} = e.target;
        // let isSubmit = checkValueForm();
        setFormValue({
            ...formValue,
            [id]:value
        })
    }

    const handleChangeSelect = (value)=>{
        setFormValue({
            ...formValue,
            parent_id :value
        })
    }

    const setValueField = (name)=>{
        if(formValue[name] === null) {
            return ""
        } else if(formValue[name] || formValue[name] === ""){
            return formValue[name]
        }
    }

    const showRemind = (nameOfField)=>{
        if(validate[nameOfField]){
            return <p className="required__field">* Trường này không được để trống</p>
        }
    }

    const checkValueForm = ()=>{
        let isNext = true;
        let newValidate = {};  
        if(depInfor?.title === "Tạo tổ"){
            for(let prop in validate){
                if(formValue[prop] && formValue[prop] !== ""){
                    newValidate = {...newValidate, [prop]:false}
                } else {
                    isNext = false;
                    newValidate = {...newValidate, [prop]:true}
                }
            }
            setValidate({
                ...newValidate
            })
        } else if(depInfor?.title === "Tạo phòng ban" || depInfor?.title === "Chỉnh sửa phòng ban"){
            let {parent_id, ...rest} = validate;
            for(let prop in rest){
                if(formValue[prop] && formValue[prop] !== ""){
                    newValidate = {...newValidate, [prop]:false}
                } else {
                    isNext = false;
                    newValidate = {...newValidate, [prop]:true}
                }
            }
            setValidate({
                ...newValidate
            })
        } 
        return isNext;
    }

    const renderButton = ()=>{
        if(depID){
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

    const showDepParentSelect = ()=>{
        if(!depID && depInfor?.title === "Tạo tổ"){
            return <div className="dep__infor__parent onefield">
            <label htmlFor="parent">Bộ phận công tác:<span className="required__field"> *</span></label>
            <Select
            id="parent_id"
            showSearch
            value={ isShowModal === false ? "" : setValueField("parent_id") }
            onChange={handleChangeSelect}
            filterOption={(input, option) =>
                (option?.name ?? '').toLowerCase().includes(input.toLowerCase())
              }
            >
                { tableDepList.map((dep,index)=>{
                    if(dep.parent_id === null){
                        return <Option value={dep.id} name={dep.name} >
                            {dep.name}
                        </Option>
                    }
                })}
            </Select>
            {showRemind("parent_id")}
        </div>
        }
    }

  return (
    <Modal title={<span className='modal__title'>{depInfor?.title}</span>}
    footer={null}
    closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black"/>
        </svg>}
    open={isShowModal} 
    onCancel={handleCancel}>
        <div className="dep__infor">
            <form onSubmit={submitForm}>
                <div className="dep__infor__name onefield">
                    <label htmlFor="name">{depInfor?.title === "Tạo tổ" ? "Tên tổ ": "Tên phòng ban"}:<span className="required__field"> *</span></label>
                    <input id="name" type="text" 
                    value={setValueField("name")}
                    onChange={handleChangeInput} />
                    {showRemind("name")}
                </div>
                <div className="dep__infor__address onefield">
                    <label htmlFor="address">{depInfor?.title === "Tạo tổ" ? "Địa chỉ tổ ": "Địa chỉ phòng ban"}:<span className="required__field"> *</span></label>
                    <input id="address" type="text" 
                    value={setValueField("address")}
                    onChange={handleChangeInput} />
                    {showRemind("address")}
                </div>
                <div className="dep__infor__phone onefield">
                    <label htmlFor="phone">{depInfor?.title === "Tạo tổ" ? "Số điện thoại tổ ": "Số điện thoại phòng ban"}:<span className="required__field"> *</span></label>
                    <input id="phone" type="text" 
                    value={setValueField("phone")}
                    onBlur={(e)=>{
                        let {value, id} = e.target;
                        if(regexPhone.test(value)){
                            setValidate({
                                ...validate,
                                phone: false
                            });
                            setCheckPhone(false)
                        } else {
                            if(value === ""){
                                setValidate({
                                    ...validate,
                                    phone: true
                                });
                                setCheckPhone(true)
                            } else {
                                setValidate({
                                    ...validate,
                                    phone: true
                                });
                                setCheckPhone(true)
                            }
                        }
                    }}
                    onChange={handleChangeInput} />
                    {validate["phone"] && checkPhone ? <p className="required__field">* Số điện thoại không hợp lệ. (Bắt đầu bằng 0 hoặc 84 + 9 số)</p> : ""}
                    {validate["phone"] && !checkPhone ? <p className="required__field">* Trường này không được để trống</p> : ""}
                </div>
                <div className="dep__infor__note onefield">
                    <label htmlFor="note">Ghi chú:</label>
                    <textarea name="note" id="note" 
                    value={setValueField("note")}
                    onChange={handleChangeInput} ></textarea>
                </div>
                {showDepParentSelect()}
                {renderButton()}
            </form>
        </div>
    </Modal> 
  )
}