import React, { useEffect, useState } from 'react'
import { Modal, Select, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_POSITION_TYPE, DELETE_POSITION_TYPE, GET_POSITION_TYPE_LIST, UPDATE_POSITION_TYPE } from '../../title/title';

export default function PosTypeModal(props) {

    let { isShowTypeModal, setIsShowTypeModal, titleTypeModal } = props
    const { Option } = Select;
    const dispatch = useDispatch()

    const [valueField, setValueField] = useState({})
    const { positionTyleList, message: notification } = useSelector(state => state.positionReducer);
    console.log(valueField)
    useEffect(() => {
        dispatch({
            type: GET_POSITION_TYPE_LIST
        })
    }, [dispatch])

    useEffect(() => {
        let { msg, type } = notification;
        if (msg && type === "success") {
            message.success(msg)
        } else if (msg && type === "error") {
            message.error(msg)
        }
    }, [notification])

    const handleCancel = () => {
        setIsShowTypeModal(false);
        setValueField({
            identifier: "",
            level: "",
            description: "",
            id: ""
        })
    };

    const handleChangeInput = (e) => {
        let { name, value } = e.target;
        setValueField({
            ...valueField,
            [name]: value
        })
    }

    const handleChangeSelect = (value) => {
        // setValue(value)
        let postypeUpdate = positionTyleList.find(postype => postype.id == value)
        setValueField({
            ...postypeUpdate
        })
    }

    const valueOfField = (name) => {
        if (isShowTypeModal && titleTypeModal === "Sửa loại chức vụ") {
            if (valueField[name] && valueField[name] !== undefined && valueField[name] !== "") {
                return valueField[name]
            } else {
                return ""
            }
        }
    }

    const renderOption = () => {
        return positionTyleList.map((postype, index) => {
            return <Option value={postype?.id}>{postype?.identifier}</Option>
        })
    }
    const renderContentOfModal = () => {
        if (titleTypeModal === "Tạo loại chức vụ") {
            return <div className="pos__type__modal__content">
                <div className="pos__type__modal__field onefield">
                    <label htmlFor="dinhDanh">Loại chức vụ:</label>
                    <input type="text" name="identifier" id="dinhDanh" onChange={handleChangeInput} />
                </div>
                <div className="pos__type__modal__field onefield">
                    <label htmlFor="capBac">Cấp bậc:</label>
                    <input type="text" name="level" id="capBac" key='123'
                        onChange={handleChangeInput} />
                </div>
                <div className="pos__type__modal__field onefield">
                    <label htmlFor="moTa">Mô tả:</label>
                    <textarea type="text" name="description" id="moTa" key='1234'
                        onChange={handleChangeInput} />
                </div>
                <button className="dep__btn" onClick={() => {
                    dispatch({
                        type: CREATE_POSITION_TYPE,
                        data: valueField
                    })
                    setValueField({})
                    setIsShowTypeModal(false);
                }}>Tạo</button>
            </div>
        } else if (titleTypeModal === "Sửa loại chức vụ") {
            return <div className="pos__type__modal__content">
                <div className="pos__type__modal__field onefield">
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
                <div className="pos__type__modal__field onefield">
                    <label htmlFor="dinhDanh">Loại chức vụ:</label>
                    <input type="text" name="identifier" id="dinhDanh" key="10"
                        value={valueOfField("identifier")}
                        onChange={handleChangeInput} />
                </div>
                <div className="pos__type__modal__field onefield">
                    <label htmlFor="capBac">Cấp bậc:</label>
                    <input type="text" name="level" id="capBac" key="12"
                        value={valueOfField("level")}
                        onChange={handleChangeInput} />
                </div>
                <div className="pos__type__modal__field onefield">
                    <label htmlFor="moTa">Mô tả:</label>
                    <textarea type="text" name="description" id="moTa" key="11"
                        value={valueOfField("description")}
                        onChange={handleChangeInput} />
                </div>
                <button className="dep__btn update__btn"
                    onClick={() => {
                        dispatch({
                            type: UPDATE_POSITION_TYPE,
                            data: valueField
                        })
                        setIsShowTypeModal(false);
                    }}>Cập nhật</button>
            </div>
        } else if (titleTypeModal === "Xóa loại chức vụ") {
            return <div className="pos__type__modal__content">
                <div className="pos__type__modal__field onefield">
                    <Select
                        showSearch
                        onChange={handleChangeSelect}
                        filterOption={(input, option) =>
                            (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                    >
                        {renderOption()}
                    </Select>
                </div>
                <button className="dep__btn delete__btn"
                    onClick={() => {
                        dispatch({
                            type: DELETE_POSITION_TYPE,
                            pos_type_id: valueField.id
                        });
                        setValueField({})
                        setIsShowTypeModal(false);
                    }}>Xóa</button>
            </div>
        }
    }

    return (
        <Modal
            title={titleTypeModal}
            open={isShowTypeModal}
            onCancel={handleCancel}
            className="pos__type__modal"
            footer={null}
        >
            {renderContentOfModal()}
        </Modal>
    )
}
