import React, { useState } from 'react'
import { Transfer, Modal } from 'antd';
import "./permission.css"

export default function PermissionPosition() {
    const data = [
      {
        "key": 4,
        "name": "Tạo hồ sơ",
        "table_management_id": 4,
        "uri": "/profiles/",
        "method": "post",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 4,
        "created_at": "2022-12-13T13:28:12",
        "updated_at": "2022-12-13T13:28:12"
      },
      {
        "key": 3,
        "name": "Gỡ bỏ phòng ban và chức vụ của user",
        "table_management_id": 6,
        "uri": "/user-dep-pos/{id}",
        "method": "delete",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 3,
        "created_at": "2022-12-13T13:28:12",
        "updated_at": "2022-12-13T13:28:12"
      },
      {
        "key": 2,
        "name": "Luân chuyển phòng ban và chức vụ của user",
        "table_management_id": 6,
        "uri": "/user-dep-pos/{id}",
        "method": "put",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 2,
        "created_at": "2022-12-13T13:28:12",
        "updated_at": "2022-12-13T13:28:12"
      },
      {
        "key": 1,
        "name": "Phân bổ phòng ban và chức vụ cho user",
        "table_management_id": 6,
        "uri": "/user-dep-pos/",
        "method": "post",
        "param": null,
        "body": null,
        "option": null,
        "is_display": false,
        "id": 1,
        "created_at": "2022-12-13T13:28:11",
        "updated_at": "2022-12-13T13:28:11"
    }]
    const [showModal, setShowModal] = useState(false)
    const [targetKeys, setTargetKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    // console.log(targetKeys, selectedKeys)
    const onChange = (nextTargetKeys, direction, moveKeys) => {
      console.log('targetKeys:', nextTargetKeys);
      console.log('direction:', direction);
      console.log('moveKeys:', moveKeys);
      setTargetKeys(nextTargetKeys);
    };
    const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
      console.log('sourceSelectedKeys:', sourceSelectedKeys);
      console.log('targetSelectedKeys:', targetSelectedKeys);
      setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

  return (
    <div>
        <Modal
            title={<span className='modal__title'>Bảng gán quyền</span>}
            width="800px"
            closeIcon={<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.61719 6.5L13.4609 11.3438C13.5911 11.474 13.5911 11.6172 13.4609 11.7734L12.5625 12.6719C12.4062 12.8021 12.263 12.8021 12.1328 12.6719L11.3125 11.8125L7.28906 7.82812L2.44531 12.6719C2.3151 12.8021 2.17188 12.8021 2.01562 12.6719L1.11719 11.7734C0.986979 11.6172 0.986979 11.474 1.11719 11.3438L5.96094 6.5L1.11719 1.65625C0.986979 1.52604 0.986979 1.38281 1.11719 1.22656L2.01562 0.328125C2.17188 0.197917 2.3151 0.197917 2.44531 0.328125L7.28906 5.17188L12.1328 0.328125C12.263 0.197917 12.4062 0.197917 12.5625 0.328125L13.4609 1.22656C13.5911 1.38281 13.5911 1.52604 13.4609 1.65625L12.6016 2.47656L8.61719 6.5Z" fill="black"/>
            </svg>}
            open={showModal}
            footer={null}
        >
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
                      setShowModal(false)
                  }}>
                      Tạo
                </button>
                <button type='button' className="dep__btn"
                  onClick={()=>{
                    setShowModal(false)
                  }}>
                    Cập nhật
                </button>
            </div>
        </Modal>
    </div>
  )
}
