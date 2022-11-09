import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import {AiOutlineUserAdd} from "react-icons/ai"
import {MdOutlineModeEditOutline} from "react-icons/md"
import { Table, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import {GET_POSITIONS_LIST} from "../../title/title"
import "./position.css"
import PosModal from './PosModal'
import PosTypeModal from './PosTypeModal'

export default function TablePositions() {

  const {Column} = Table;
  const dispatch = useDispatch()
  
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(10);
  // State quản lý component PosModal 
  const [isShowModal, setIsShowModal] = useState(false)
  const [dataToModal, setDataToModal] = useState({})
  // State quản lý component PosTypeModal
  const [isShowTypeModal, setIsShowTypeModal] = useState(false)
  const [titleTypeModal, setTitleTypeModal] = useState("")

  let {tablePosList, total} = useSelector(state => state.positionReducer)
  
  useEffect(()=>{
    dispatch({
      type: GET_POSITIONS_LIST,
      table: {page,pageNumber}
    })
  },[page, pageNumber, dispatch])

  const showLoading = ()=>{
    if(true){
      return <Loading />
    }
  }

  return (
    <div className="tableProfiles table__position">
      <div className="tools">
        <button className="create_acc_profile" onClick={()=>{
            setDataToModal({})
            setIsShowModal(true)
        }}>
          <AiOutlineUserAdd />
          Tạo
        </button>
        <div className="pos__type">
          <button className="create_acc_profile create_pos_type" onClick={()=>{
              setIsShowTypeModal(true)
              setTitleTypeModal("Tạo loại chức vụ")
          }}>
            <AiOutlineUserAdd />
            Tạo loại chức vụ
          </button>
          <button className="create_acc_profile update_pos_type" onClick={()=>{
              setIsShowTypeModal(true)
              setTitleTypeModal("Sửa loại chức vụ")
          }}>
            <AiOutlineUserAdd />
            Sửa loại chức vụ
          </button>
          <button className="create_acc_profile delete_pos_type" onClick={()=>{
              setIsShowTypeModal(true)
              setTitleTypeModal("Xóa loại chức vụ")
          }}>
            <AiOutlineUserAdd />
            Xóa loại chức vụ
          </button>
        </div>
      </div>
      <Table 
      dataSource={tablePosList}
      pagination={{
        position: ["bottomLeft"],
        defaultPageSize: 10,
        locale: { items_per_page: "" },
        defaultCurrent: 1,
        showSizeChanger: true,
        total: total,
        pageSizeOptions: [10,50,100],
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
          title="Tên chức vụ" 
          key="postionName"
          className="table__pos__name"
          render={(text,record)=>{
              return record.position.name
          }} 
        />
        <Column 
          title="Loại chức vụ" 
          key="postionType"
          className="table__pos__type"
          render={(text,record)=>{
            return record.position_type.identifier
          }}
          />
        <Column 
          title="" 
          key="thaoTac"
          render={(text,record)=>{
            return <div className="thaoTac__Edit">
                     <button className="thaoTac__Edit__btn" onClick={()=>{
                        setDataToModal(record)
                        setIsShowModal(true)
                      }}>
                         <MdOutlineModeEditOutline/>
                     </button>
               </div>
          }}
          />
      </Table>
      <PosModal 
        isShowModal={isShowModal} 
        setIsShowModal={setIsShowModal} 
        dataToModal={dataToModal} 
      />
      <PosTypeModal
          isShowTypeModal={isShowTypeModal}
          setIsShowTypeModal={setIsShowTypeModal}
          titleTypeModal={titleTypeModal}
      />
    </div>
  )
}
