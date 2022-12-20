import { Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToTablePosList } from '../../redux/Slice/positions.slice';
import { CREATE_POSITION_AND_MANAGEMENT, UPDATE_POSITION_AND_MANAGEMENT } from '../../title/title';

export default function PosModal(props) {

    let{isShowModal, setIsShowModal, dataToModal, titlePosManageModal}=props;
    const {Option} = Select;
    const dispatch = useDispatch()
    const {positionTyleList} = useSelector(state => state.positionReducer);
    const [formValue, setFormValue] = useState({});
    const [validate, setValidate] = useState({
        name: false,
        identifier: false
    });
    // console.log("dataToModal",dataToModal)
    console.log("formValue",formValue)
    
    useEffect(()=>{
        setFormValue(dataToModal)
    },[dataToModal])

    // useEffect(()=>{
    //     if(formValue.position && formValue.position_type){
    //         setFormValue(...formValue)
    //     }
    // }, [formValue])

    const handleCancel = ()=>{
        setIsShowModal(false)
        setValidate({
            name: false,
            identifier: false
        })
        setFormValue({
            position: {
                name:""
            },
            position_type: {
                id: ""
            }
        })
    }

    const submitForm=(e)=>{
        e.preventDefault();
        checkValueForm()
    }

    const handleChangeInput = (e)=>{
        let {value, id} = e.target;
        if(titlePosManageModal === "Thêm chức vụ"){
            setFormValue({
                ...formValue,
                [id]:value
            })
        } else if(titlePosManageModal === "Chỉnh sửa chức vụ"){
                setFormValue({
                    ...formValue,
                    position:{
                        ...formValue.position,
                        [id]:value
                    }
                })
        } 
    }

    const handleChangeSelectType = (value)=>{
        if(titlePosManageModal === "Thêm chức vụ"){
            setFormValue({
                ...formValue,
                identifier :value
            })
        } else if(titlePosManageModal === "Chỉnh sửa chức vụ"){
            setFormValue({
                ...formValue,
                position_type:{
                    ...formValue.position_type,
                    id:value
                }
            })
        }
    }

    const renderOption = ()=>{
        return positionTyleList.map((postype,index)=>{
            return <Option value={postype?.id.toString()} key={index}>{postype?.identifier}</Option>
        })
    }

    const valueOfField = (name)=>{
        if(name === "name"){
            return formValue.position?.name
        } else {
            return formValue.position_type?.id
        }
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

    const showRemind = (nameOfField)=>{
        if(validate[nameOfField] && titlePosManageModal === "Thêm chức vụ"){
            return <p className="required__field">* Trường này không được để trống</p>
        }
    }

    const renderButton = ()=>{
        if(titlePosManageModal === "Thêm chức vụ"){
            return <div className="alignCenter">
            <button className="dep__btn"
            onClick={()=>{
                dispatch({
                    type: CREATE_POSITION_AND_MANAGEMENT,
                    data: formValue
                })
                dispatch(addItemToTablePosList(formValue))
                setIsShowModal(false)
            }}>
                Tạo123
            </button>
        </div>
        } else if(titlePosManageModal === "Chỉnh sửa chức vụ"){
            return <div className="alignCenter">
                <button type='submit' className="dep__btn"
                onClick={()=>{
                    let {name, id: pos_id} = formValue.position
                    let {id: pos_type_id} = formValue.position_type;
                    let {id: pos_management} = formValue;
                    dispatch({
                        type: UPDATE_POSITION_AND_MANAGEMENT,
                        data: {
                            pos_management_id: pos_management,
                            position: {
                                name,
                                pos_id
                            },
                            pos_type:{
                                pos_type_id
                            }
                        }
                    })
                    setIsShowModal(false)
                }}>
                    Cập nhật
                </button>
            </div>
        }

           
    }

  return (
    <Modal 
    title={<span className='modal__title'>{titlePosManageModal}</span>}
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
                    <input id="name" type="text" key ="99"
                    value={valueOfField("name")}
                    onChange={handleChangeInput} />
                    {showRemind("name")}
                </div>
                <div className="pos__infor__identifier onefield">
                    <label htmlFor="identifier">Loại chức vụ:<span className="required__field"> *</span></label>
                    <Select
                        id="identifier"
                        showSearch
                        value={valueOfField("identifier")}
                        onChange={handleChangeSelectType}
                        filterOption={(input, option) =>
                            (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {renderOption()}
                    </Select>
                    {showRemind("identifier")}
                </div>
                    {renderButton()}
            </form>
        </div>
    </Modal>
  )
}
