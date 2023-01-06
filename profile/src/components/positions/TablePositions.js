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

export default function TablePositions() {

  const { Column } = Table;
  const dispatch = useDispatch()

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

  useEffect(() => {
    dispatch({
      type: GET_POSITIONS_MANA_LIST,
      table: { page, pageNumber }
    })
    dispatch({
      type: GET_POS_LIST
    });
    dispatch(setLoading(true))
  }, [page, pageNumber, dispatch])

  useEffect(() => {
    return () => {
      dispatch(setMessage({}))
    }
  }, [])

  useEffect(()=>{
    if(search?.pos_name === "" && search?.identifier === "" && search?.level === "" && isSearch === true){
      dispatch({
        type: GET_POSITIONS_MANA_LIST,
        table: { page, pageNumber }
      })
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

  return (
    <div className="tableProfiles table__position">
      {showLoading()}
      <div className="tools">
        <button className="create_acc_profile" onClick={() => {
          setDataToModal({})
          setIsShowModal(true)
          setTitlePosManageModal("Thêm chức vụ")
        }}>
          <AiOutlinePlusCircle />
          Tạo
        </button>
        <div className="search__tool">
            <AutoComplete
                allowClear
                className="auto__complete"
                options={dataOfAutoComplete("pos")}
                filterOption={(input, option)=>
                  (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
                }
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
          <button className="create_acc_profile create_pos_type" onClick={() => {
            setIsShowTypeModal(true)
            setTitleTypeModal("Tạo loại chức vụ")
          }}>
            <AiOutlinePlusCircle />
            Tạo loại chức vụ
          </button>
          <button className="create_acc_profile update_pos_type" onClick={() => {
            setIsShowTypeModal(true)
            setTitleTypeModal("Sửa loại chức vụ")
          }}>
            Sửa loại chức vụ
          </button>
          <button className="create_acc_profile delete_pos_type" onClick={() => {
            setIsShowTypeModal(true)
            setTitleTypeModal("Xóa loại chức vụ")
          }}>
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
              <button className="thaoTac__Edit__btn" onClick={() => {
                setDataToModal(record)
                setIsShowModal(true)
                setTitlePosManageModal("Chỉnh sửa chức vụ")
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
  )
}
