import { message, Popconfirm, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react'
import { AiFillQuestionCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { FiMinusCircle } from 'react-icons/fi';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { setMessageAlert } from '../../redux/Slice/permissionSlice';
import { DELETE_PERMISSION, GET_PERMISSION_LIST, GET_TABLE_MANAGEMENT } from '../../title/title';
import PermissionModal from './PermissionModal';

export default function PermissionTable() {

    const {Column} = Table;
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const [dataModal, setDataModal] = useState({});
    const {permissionList, total, messageAlert} = useSelector(state => state.permissionReducer);
    // console.log(permissionList)
    useEffect(()=>{
        dispatch({
            type: GET_PERMISSION_LIST,
            data: {page, pageNumber}
        });
    }, [dispatch, page, pageNumber]); 

    useEffect(()=>{
      let {type, msg} = messageAlert;
        if(type !== "" && msg !== ""){
            message[type](msg)
        }
    } , [messageAlert])

    useEffect(()=>{
        dispatch({
          type: GET_TABLE_MANAGEMENT
        });
        return ()=>{
            dispatch(setMessageAlert({type: "", msg: ""}))
        }
    }, []);
    
  return (
    <div className="tableProfiles table__position">
        <PermissionModal dataModal={dataModal} showModal={showModal} setShowModal={setShowModal} />
        <div className="tools">
            <button className="create_acc_profile" onClick={() => {
                setDataModal({
                  title: "Tạo quyền"
                });
                setShowModal(true);
            }}>
                <AiOutlinePlusCircle />
            Tạo
            </button>
        </div>
        <Table
          dataSource={permissionList}
          pagination={{
            position: ["bottomLeft"],
            defaultPageSize: 10,
            locale: { items_per_page: "" },
            defaultCurrent: 1,
            showSizeChanger: true,
            total: total,
            pageSizeOptions: [10, 50, 100],
            onChange: (page, pageNumber) => {
              setPageNumber(pageNumber);
              setPage(page);
            },
            showTotal: (total) => {
              if (pageNumber * page < total) {
                return `Hiển thị ${pageNumber * page} trong ${total}`;
              }
              return `Hiển thị ${total} trong ${total}`;
            },
          }}
        >
          <Column
            title="Tên quyền"
            key="permissionName"
            className="table__pos__name"
            render={(text, record) => {
              return record.name
            }}
          />
          <Column
            title="Loại phương thức"
            key="permissionMethod"
            className="table__pos__type"
            filters={[{value: "GET", text: "GET"}, {value: "PUT", text: "PUT"}, {value: "POST", text: "POST"}, {value: "DELETE", text: "DELETE"}]}
            filterSearch={true}
            filterMode="menu"
            onFilter={(value, record)=> { return record.method.includes(value.toLowerCase()) }}
            render={(text, record) => {
                if(record.method === "get"){
                    return <Tag color="#61affe">{record.method.toUpperCase()}</Tag>
                } else if(record.method === "post"){
                    return <Tag color="#49cc90">{record.method.toUpperCase()}</Tag>
                } else if(record.method === "put"){
                    return <Tag color="#fca130">{record.method.toUpperCase()}</Tag>
                } else if(record.method === "delete"){
                    return <Tag color="#f93e3e">{record.method.toUpperCase()}</Tag>
                }
            }}
          />
          <Column
            title=""
            key="thaoTac"
            render={(text, record) => {
              return <div className="thaoTac__Edit">
                <button className="thaoTac__Edit__btn" onClick={() => {
                    setDataModal({
                      ...dataModal,
                      ...record,
                      title: "Cập nhật quyền"
                    });
                    setShowModal(true)
                }}>
                    <MdOutlineModeEditOutline />
                </button>
                <Popconfirm
                  title="Bạn có chắc muốn thực hiện thao tác này ?"
                  okText="Có"
                  cancelText="Không"
                  icon={<AiFillQuestionCircle />}
                  placement="topRight"
                  onConfirm={() => {
                    let { id } = record;
                    dispatch({
                      type: DELETE_PERMISSION,
                      data: id
                    })
                  }}
                >
                  <button className="thaoTac__Edit__btn thaoTac__Delete__btn">
                    <FiMinusCircle />
                  </button>
                </Popconfirm>
              </div>
            }}
          />
        </Table>
      </div>
  )
}
