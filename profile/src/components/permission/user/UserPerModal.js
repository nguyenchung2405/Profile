import { Modal, Select, Transfer } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DELETE_PERMISSION_POS, GET_PERMISSION_POS_LIST, POST_PERMISSION_POS } from '../../../title/title';

export default function UserPerModal(props) {

    const {isShowModal, setIsShowModal, dataToModal} = props;
    const dispatch = useDispatch();
    const {Option} = Select;
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [data, setData] = useState([]);
    const [rootPermissionArr, setRootPermissionArr] = useState([]);
    
    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        // console.log('sourceSelectedKeys:', sourceSelectedKeys);
        // console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const closeModal = ()=>{
        setIsShowModal(false);
    };

    const onChange = (nextTargetKeys, direction, moveKeys) => {
        // console.log('targetKeys:', nextTargetKeys);
        // console.log('direction:', direction);
        // console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    const handleClickButton = ()=>{
        let deleteArr = rootPermissionArr.filter(per => !targetKeys.includes(per));
        let postArr = targetKeys.filter(per => !rootPermissionArr.includes(per));
        if(deleteArr.length > 0){
        //   dispatch({
        //     type: DELETE_PERMISSION_POS,
        //     data: {deleteArr, pos_mana_id: depPos.pos_mana_id}
        //   })
        }
        if(postArr.length > 0){
        //   dispatch({
        //     type: POST_PERMISSION_POS,
        //     data: {postArr, pos_mana_id: depPos.pos_mana_id}
        //   })
        }
        dispatch({
          type: GET_PERMISSION_POS_LIST,
          table: { page: 1, pageNumber: 10 }
        })
        closeModal()
      }

  return (
    <div>
        <Modal
        title={<span className='modal__title'>Bảng gán quyền</span>}
        width="800px"
        closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black"/>
        </svg>}
        open={isShowModal}
        footer={null}
        onCancel={closeModal}
    >
    {/**
            <div className="select__dep__pos">
        <Select
                allowClear
                showSearch
                placeholder="Chức vụ"
                filterOption={(input, option) =>
                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())}
                value={depPos.pos_mana_id !== "" ? depPos.pos_mana_id : null}
                onChange={(value)=>{
                setDepPos({
                    ...depPos,
                    pos_mana_id: value
                })
            }}
            >
                    {renderPosOption()}
        </Select>
    </div>
    */}
        <Transfer
            className="permission__transfer"
            dataSource={data}   
            locale={{searchPlaceholder: "Tìm kiếm quyền", itemsUnit: "quyền", itemUnit: "quyền"}}
            titles={['Quyền chưa có', 'Quyền đã có']}
            showSearch
            filterOption={(inputValue, option) => option.name.indexOf(inputValue) > -1}
            targetKeys={targetKeys}
            selectedKeys={selectedKeys}
            onChange={onChange}
            onSelectChange={onSelectChange}
            render={item => item.name}    
        />
        <div className="alignCenter permission__transfer__footer">
            <button type='button' className="dep__btn"
            onClick={()=>{
                closeModal()
            }}>
                Đóng
            </button>
            <button type='button' className="dep__btn"
            onClick={handleClickButton}
            >
                Cập nhật
            </button>
        </div>
        </Modal>
    </div>
  )
}