import { Modal, Select, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { CREATE_PERMISSION, UPDATE_PERMISSION } from '../../title/title';
import "./permission.css"

export default function PermissionModal(props) {

    const {Option} = Select;
    const {dataModal: {title, ...dataPermission}, showModal, setShowModal} = props;
    const dispatch = useDispatch();
    const [valueModal, setValueModal] = useState({});
    // console.log(props.dataModal)
    // console.log(valueModal)

    useEffect(()=>{
        setValueModal({...dataPermission})
    }, [props.dataModal]);

    const closeModal = ()=>{
        setShowModal(false);
    };

    const handleChangeInput = (e)=>{
        let {name, value} = e.target;
        if(name && typeof name === "string"){
            setValueModal({
                ...valueModal,
                [name]: value
            })
        }
    }

    const handleChangeSelect = (value)=>{
        setValueModal({
            ...valueModal,
            method: value
        })
    };

    const valueOfField = (name)=>{
        if(name === "method"){
            if(valueModal[name] !== undefined && valueModal[name].toUpperCase() === "GET"){
                return valueModal[name].toUpperCase()
            } else if(valueModal[name] !== undefined && valueModal[name].toUpperCase() === "POST"){
                return valueModal[name].toUpperCase()
            } else if( valueModal[name] !== undefined && valueModal[name].toUpperCase() === "PUT"){
                return valueModal[name].toUpperCase()
            } else if( valueModal[name] !== undefined && valueModal[name].toUpperCase() === "DELETE") {
                return valueModal[name].toUpperCase()
            }
        }
        if(valueModal[name] && valueModal[name] !== "" && valueModal[name] !== undefined){
            return valueModal[name]
        }
        return ""
    }

    const renderButton = ()=>{
        if(title === "Tạo quyền"){
            return <button type='button' className="dep__btn"
            onClick={()=>{
                dispatch({
                    type: CREATE_PERMISSION,
                    data: valueModal
                });
                closeModal();
            }}>
                Tạo
            </button>
        } else if(title === "Cập nhật quyền") {
            return <button type='button' className="dep__btn"
            onClick={()=>{
                dispatch({
                    type: UPDATE_PERMISSION,
                    data: valueModal
                })
                closeModal()
            }}>
                Cập nhật
            </button>
        }
    };

    const rendetOption = ()=>{
        let methodArr = ["GET", "POST", "PUT", "DELETE"];
        return methodArr.map((method, index)=>{
            if(method === "GET"){
                return <Option value={method} >
                        <Tag color="#61affe">{method}</Tag>
                </Option>
            } else if(method === "POST"){
                return <Option value={method} >
                        <Tag color="#49cc90">{method}</Tag>
                </Option>
            } else if(method === "PUT"){
                return <Option value={method} >
                        <Tag color="#fca130">{method}</Tag>
                </Option>
            } else {
                return <Option value={method} >
                        <Tag color="#f93e3e">{method}</Tag>
                </Option>
            }
        })
    }

  return (
    <div>
        <Modal
            title={<span className='modal__title'>{title}</span>}
            // width="800px"
            closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black"/>
            </svg>}
            open={showModal}
            footer={null}
            onCancel={closeModal}
        >
            <div className="permission__modal__content">
                <div className="permission__modal__field">
                    <label htmlFor="name">Tên quyền:</label>
                    <input id="name" type="text" name="name" 
                    value={valueOfField("name")}
                    onChange={handleChangeInput} />
                </div>
                <div className="permission__modal__field">
                    <label htmlFor="uri">Đường dẫn uri:</label>
                    <input id="uri" type="text" name="uri" 
                    value={valueOfField("uri")}
                    onChange={handleChangeInput} />
                </div>
                <div className="permission__modal__field">
                    <label htmlFor="method">Phương thức:</label>
                    <Select id="method" className="permission__select" 
                    value={valueOfField("method")}
                    onChange={handleChangeSelect} >
                            {rendetOption()}
                    </Select>
                </div>
                <div className="permission__modal__field">
                    <label htmlFor="param">Param:</label>
                    <input id="param" type="text" name="param" 
                    value={valueOfField("param")}
                    onChange={handleChangeInput} />
                </div>
                <div className="permission__modal__field">
                    <label htmlFor="body">Body:</label>
                    <input id="body" type="text" name="body" 
                    value={valueOfField("body")}
                    onChange={handleChangeInput} />
                </div>
                <div className="permission__modal__field">
                    <label htmlFor="option">Option:</label>
                    <input id="option" type="text" name="option" 
                    value={valueOfField("option")}
                    onChange={handleChangeInput} />
                </div>
            </div>
            <div className="alignCenter permisstion__table__modal">
                {renderButton()}
            </div>
        </Modal>
    </div>
  )
}