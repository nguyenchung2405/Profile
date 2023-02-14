import React, { useEffect, useState } from 'react'
import Loading from '../Loading'
import { AiOutlinePlusCircle, AiFillQuestionCircle } from "react-icons/ai"
import { MdOutlineModeEditOutline } from "react-icons/md"
import { FiMinusCircle } from "react-icons/fi"
import { Table, Popconfirm, AutoComplete } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_POSITION_AND_MANAGEMENT, GET_POSITIONS_MANA_LIST, GET_POS_LIST, SEARCH_POSITION } from "../../title/title"
import "./position.css"
import PosModal from './PosModal'
import PosTypeModal from './PosTypeModal'
import { setLoading, setMessage } from '../../redux/Slice/positions.slice'
import { checkUserPermission } from '../../ultils/helper'
import { useNavigate } from 'react-router-dom'

export default function TablePositions() {

  const { Column } = Table;
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(10);
  // State quản lý component PosModal 
  const [isShowModal, setIsShowModal] = useState(false)
  const [dataToModal, setDataToModal] = useState({})
  // State quản lý component PosTypeModal
  const [isShowTypeModal, setIsShowTypeModal] = useState(false)
  const [titleTypeModal, setTitleTypeModal] = useState("")
  const [titlePosManageModal, setTitlePosManageModal] = useState("")
  // State quản lý tìm kiếm
  const [search, setSearch] = useState({pos_name:"", identifier: "", level: ""});
  const [isSearch, setIsSearch] = useState(false)

  let { tablePosList, total, showLoading: showLoadingComponent, positionTyleList, positionsNameList } = useSelector(state => state.positionReducer)
  const {userPermission} = useSelector(state => state.permissionReducer);

  useEffect(() => {
    if(!isSearch){
      dispatch({
        type: GET_POSITIONS_MANA_LIST,
        table: { page, pageNumber }
      })
      dispatch({
        type: GET_POS_LIST
      });
      dispatch(setLoading(true))
    }
  }, [page, pageNumber, dispatch])

  useEffect(() => {
    return () => {
      dispatch(setMessage({}))
    }
  }, [])

  useEffect(()=>{
    if(!userPermission.includes("xem danh sách chức vụ")  && userPermission.length > 0){
      navigate("/404notfound", {replace: true})
    } else if(userPermission.length === 0) {
      dispatch(setLoading(true))
    }
  } , [userPermission])

  useEffect(()=>{
    if(search?.pos_name === "" && search?.identifier === "" && search?.level === "" && isSearch === true){
      dispatch({
        type: GET_POSITIONS_MANA_LIST,
        table: { page, pageNumber }
      })
      setIsSearch(false)
    }
  }, [search])

  const showLoading = () => {
    if (showLoadingComponent) {
      return <Loading />
    }
  }

  const handleSearch =(name, value)=>{
      setSearch({...search, [name]: value})
  }
  
  const dataOfAutoComplete = (name)=>{
    if(name === "pos"){
        return positionsNameList.map(item => {
            return {
              label: item.name,
              value: item.name
            }
        })
    } else if(name === "pos_type") {
        return positionTyleList.map(item => {
            return {
              label: item.identifier,
              value: item.identifier
            }
        })
    } else {
      return [{label: "100",value: "100"},{label: "200",value: "200"},{label: "300",value: "300"},{label: "400",value: "400"}];
    }
  }

  const renderTable =()=>{
    if(userPermission.length > 0){
      return <div className="tableProfiles table__position">
      {showLoading()}
      <div className="tools">
      {  checkUserPermission(userPermission, "tạo chức vụ")
            ?
            <button className="create_acc_profile btn__position__table" onClick={() => {
              setDataToModal({})
              setIsShowModal(true)
              setTitlePosManageModal("Thêm chức vụ")
            }}>
              <AiOutlinePlusCircle />
              Tạo
            </button>
          : ""
        }
       
        <div className="search__tool">
            <AutoComplete
                allowClear
                value={search.pos_name}
                className="auto__complete"
                options={dataOfAutoComplete("pos")}
                filterOption={(input, option)=>{
                    let index = input.lastIndexOf(",");
                    let str_replace = input.slice(0, index + 1);
                    input = input.replace(str_replace, "");
                    return (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
                  }
                }
                onSelect={(value)=>{
                  if(search.pos_name !== ""){
                    let index = search.pos_name.lastIndexOf(";");
                    let str_replace = search.pos_name.slice(0, index + 1);
                    value = str_replace + value;
                    handleSearch("pos_name", value)
                  } else {
                    handleSearch("pos_name", value)
                  }
                }}
                onChange={(value)=>{
                  handleSearch("pos_name", value)
                }}
                onKeyDown={(e)=>{
                  let {key} = e;
                  if(key.toLowerCase() === "enter"){
                    dispatch({
                      type: SEARCH_POSITION,
                      data: search
                    });
                    setIsSearch(true)
                  }
                }}
                placeholder="Chức danh, chức vụ"
            />
            <AutoComplete
                allowClear
                className="auto__complete"
                options={dataOfAutoComplete("pos_type")}
                filterOption={(input, option)=>
                  (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
                }
                onChange={(value)=>{
                  handleSearch("identifier", value)
                }}
                onKeyDown={(e)=>{
                  let {key} = e;
                  if(key.toLowerCase() === "enter"){
                    dispatch({
                      type: SEARCH_POSITION,
                      data: search
                    });
                    setIsSearch(true)
                  }
                }}
                placeholder="Loại chức vụ"
            />
            <AutoComplete
                allowClear
                className="auto__complete"
                options={dataOfAutoComplete("level")}
                filterOption={(input, option)=>{
                  if(typeof +input === "number"){
                    return (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
                  }}
                }
                onChange={(value)=>{
                  handleSearch("level", value)
                }}
                onKeyDown={(e)=>{
                  let {key} = e;
                  if(key.toLowerCase() === "enter"){
                    dispatch({
                      type: SEARCH_POSITION,
                      data: search
                    });
                    setIsSearch(true)
                  }
                }}
                placeholder="Cấp bậc"
            />
        </div>
        <div className="pos__type">
          {  checkUserPermission(userPermission, "tạo loại chức vụ")
            ? 
            <button className="create_acc_profile create_pos_type" onClick={() => {
              setIsShowTypeModal(true)
              setTitleTypeModal("Tạo loại chức vụ")
            }}>
              <AiOutlinePlusCircle />
              Tạo loại chức vụ
            </button>
            : ""
          }
          {  checkUserPermission(userPermission, "sửa loại chức vụ", "xem chi tiết loại chức vụ")
            ? 
            <button className="create_acc_profile update_pos_type" onClick={() => {
              setIsShowTypeModal(true)
              setTitleTypeModal("Sửa loại chức vụ")
            }}>
              Sửa loại chức vụ
            </button>
            : ""
          }
          {  checkUserPermission(userPermission, "xoá loại chức vụ")
            ? 
            <button className="create_acc_profile delete_pos_type" onClick={() => {
              setIsShowTypeModal(true)
              setTitleTypeModal("Xóa loại chức vụ")
            }}>
              Xóa loại chức vụ
            </button>
            : ""
          }
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
          title="Tên chức vụ"
          key="postionName"
          className="table__pos__name"
          render={(text, record) => {
            return record.position.name
          }}
        />
        <Column
          title="Loại chức vụ"
          key="postionType"
          className="table__pos__type"
          render={(text, record) => {
            return record.position_type.identifier
          }}
        />
        <Column
          title=""
          key="thaoTac"
          render={(text, record) => {
            // console.log(record)
            return <div className="thaoTac__Edit">
            {  checkUserPermission(userPermission, "sửa chức vụ", "xem chi tiết chức vụ")
              ? 
              <button className="thaoTac__Edit__btn" onClick={() => {
                setDataToModal(record)
                setIsShowModal(true)
                setTitlePosManageModal("Chỉnh sửa chức vụ")
              }}>
                <MdOutlineModeEditOutline />
              </button>
              : ""
            }
            {  checkUserPermission(userPermission, "xoá chức vụ")
              ? 
                <Popconfirm
                  title="Bạn có chắc muốn thực hiện thao tác này ?"
                  okText="Có"
                  cancelText="Không"
                  icon={<AiFillQuestionCircle />}
                  placement="topRight"
                  onConfirm={() => {
                    let { id, pos_id } = record;
                    dispatch({
                      type: DELETE_POSITION_AND_MANAGEMENT,
                      data: { pos_mana_id: id, pos_id }
                    })
                  }}
                >
                  <button className="thaoTac__Edit__btn thaoTac__Delete__btn">
                    <FiMinusCircle />
                  </button>
                </Popconfirm>
              : ""
            }
            </div>
          }}
        />
      </Table>
      <PosModal
        titlePosManageModal={titlePosManageModal}
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
    } else {
      return <div>{showLoading()}</div>
    }
  }

  return (
    <>
        {renderTable()}
    </>
  )
}
