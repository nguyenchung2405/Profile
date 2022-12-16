import React, { useEffect, useState } from 'react'
import Loading from '../../Loading'
import { AiFillQuestionCircle } from "react-icons/ai"
import { FiMinusCircle } from "react-icons/fi"
import { Table, Popconfirm } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_POSITION_AND_MANAGEMENT, GET_POSITIONS_LIST } from "../../../title/title"
import { setLoading, setMessage } from '../../../redux/Slice/positions.slice'
import PermissionPosition from './PermissionPosition'

export default function TablePositionsPermission() {

    const { Column } = Table;
    const dispatch = useDispatch()

    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(10);
    // State quản lý component PosModal 
    const [isShowModal, setIsShowModal] = useState(false)
    const [dataToModal, setDataToModal] = useState("");

    let { tablePosList, total, showLoading: showLoadingComponent } = useSelector(state => state.positionReducer)

    useEffect(() => {
      dispatch({
        type: GET_POSITIONS_LIST,
        table: { page, pageNumber }
      })
      dispatch(setLoading(true))
    }, [page, pageNumber, dispatch])

    useEffect(() => {
      return () => {
        dispatch(setMessage({}))
      }
    }, [])

    const SetPermissionIcon = ()=>(
      <svg stroke="currentColor" color="currentColor" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
      x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
      <g><path d="M601.8,423.2c40.8-17.2,83.8-26,128.4-26c4.4,0,8.8,0.2,13.2,0.2c20.9-52.8,26.2-115.2,15.7-175.9C734.9,82.3,603.6-10.7,465.6,13.8C327.7,38.3,211.4,145.5,235.9,284.6c5.2,30.1,19.7,76.9,36.9,110.8L22.5,756.6c-9.2,13.2-14.5,37.1-11.7,53.4l10.9,61.8c-10.3-59.5,2.9,21.4,10.9,21.2l82.5,1.1c15.9-2.9,35.8-16.3,44.6-29.9l99-154.8l1-1l86.5,6.9l115.6-181.3c0.4,0,0.8,0.2,1.1,0.2c10.3-14.2,21.6-27.6,34.3-40.2C527.2,463.6,562.6,439.8,601.8,423.2z M76.6,794.7l-12.3,5.2l1.3-13.4l239.8-348.2l14.4,13.4L76.6,794.7z M441.1,154.1c37.9-54.6,112.5-68.1,166.5-29.7c54.2,38.5,67.4,113.9,29.5,168.4c-37.9,54.5-76.6,16.1-130.7-22.2C452.3,232.2,403.2,208.8,441.1,154.1z"/><path d="M727,464.2c-145.3,0-263,117.7-263,263s117.7,263,263,263c145.3,0,263-117.7,263-263C990,581.9,872.3,464.2,727,464.2z M827.7,809.6H626.3c-51.1,0-92.4-41.3-92.4-92.4c0-51.1,41.3-92.4,92.4-92.4h201.4c51.1,0,92.4,41.3,92.4,92.4C920.1,768.3,878.8,809.6,827.7,809.6z"/><path d="M755.5,718.9c0,38.7,31.4,70.1,70.1,70.1c38.7,0,70.1-31.4,70.1-70.1c0-38.7-31.4-70.1-70.1-70.1C786.9,648.9,755.5,680.2,755.5,718.9z"/></g>
      </svg>
    )

    const showLoading = () => {
      if (showLoadingComponent) {
        return <Loading />
      }
    }

    return (
      <div className="tableProfiles table__position">
        {showLoading()}
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
              return <div className="thaoTac__Edit">
                <button className="thaoTac__Edit__btn" onClick={() => {
                    setDataToModal(record.id)
                    setIsShowModal(true)
                }}>
                  <SetPermissionIcon />
                </button>
                <Popconfirm
                  title="Bạn có chắc muốn thực hiện thao tác này ?"
                  okText="Có"
                  cancelText="Không"
                  icon={<AiFillQuestionCircle />}
                  placement="topRight"
                  onConfirm={() => {
                  //   let { id, pos_id } = record;
                  //   dispatch({
                  //     type: DELETE_POSITION_AND_MANAGEMENT,
                  //     data: { pos_mana_id: id, pos_id }
                  //   })
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
        <PermissionPosition
        pos_mana_id={dataToModal}
        isShowModal={isShowModal} 
        setIsShowModal={setIsShowModal} />
      </div>
    )
}
