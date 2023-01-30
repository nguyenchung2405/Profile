import React, { useEffect, useState } from 'react'
import {Table, message} from "antd"
import { useDispatch, useSelector } from 'react-redux';
import { GET_DEP_POS_TO_SEARCH, GET_PERMISSION_DEP_POS_LIST } from '../../../title/title';
import ModalPerDepPos from './ModalPerDepPos';

export default function DepartmentPermissionTable() {

    const {Column} = Table;
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(10);
    const [isShowModal, setIsShowModal] = useState(false)
    const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
    const [dataToModal, setDataToModal] = useState({});
    const {depList, posList, permissionDepPosList, totalDepPos, messageAlert} = useSelector(state => state.permissionReducer);
    
    useEffect(()=>{
        dispatch({
          type: GET_DEP_POS_TO_SEARCH
        })
    }, [dispatch])

    useEffect(()=>{
        if(!isShowModal){
          setTimeout(()=>{
            dispatch({
              type: GET_PERMISSION_DEP_POS_LIST,
              data: {page, pageNumber}
            })
          }, 1000)
        }
    }, [isShowModal])

    useEffect(()=>{
      dispatch({
        type: GET_PERMISSION_DEP_POS_LIST,
        data: {page, pageNumber}
      })
    }, [page, pageNumber])

    useEffect(()=>{
      let {type, msg} = messageAlert;
        if(type !== "" && msg !== ""){
            message[type](msg)
        }
    } , [messageAlert])

    const SetPermissionIcon = ()=>(
      <svg stroke="currentColor" color="currentColor" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
      x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
      <g><path d="M601.8,423.2c40.8-17.2,83.8-26,128.4-26c4.4,0,8.8,0.2,13.2,0.2c20.9-52.8,26.2-115.2,15.7-175.9C734.9,82.3,603.6-10.7,465.6,13.8C327.7,38.3,211.4,145.5,235.9,284.6c5.2,30.1,19.7,76.9,36.9,110.8L22.5,756.6c-9.2,13.2-14.5,37.1-11.7,53.4l10.9,61.8c-10.3-59.5,2.9,21.4,10.9,21.2l82.5,1.1c15.9-2.9,35.8-16.3,44.6-29.9l99-154.8l1-1l86.5,6.9l115.6-181.3c0.4,0,0.8,0.2,1.1,0.2c10.3-14.2,21.6-27.6,34.3-40.2C527.2,463.6,562.6,439.8,601.8,423.2z M76.6,794.7l-12.3,5.2l1.3-13.4l239.8-348.2l14.4,13.4L76.6,794.7z M441.1,154.1c37.9-54.6,112.5-68.1,166.5-29.7c54.2,38.5,67.4,113.9,29.5,168.4c-37.9,54.5-76.6,16.1-130.7-22.2C452.3,232.2,403.2,208.8,441.1,154.1z"/><path d="M727,464.2c-145.3,0-263,117.7-263,263s117.7,263,263,263c145.3,0,263-117.7,263-263C990,581.9,872.3,464.2,727,464.2z M827.7,809.6H626.3c-51.1,0-92.4-41.3-92.4-92.4c0-51.1,41.3-92.4,92.4-92.4h201.4c51.1,0,92.4,41.3,92.4,92.4C920.1,768.3,878.8,809.6,827.7,809.6z"/><path d="M755.5,718.9c0,38.7,31.4,70.1,70.1,70.1c38.7,0,70.1-31.4,70.1-70.1c0-38.7-31.4-70.1-70.1-70.1C786.9,648.9,755.5,680.2,755.5,718.9z"/></g>
      </svg>
    )

    const PermissionAdd = ()=>(
      <svg class="svg-icon" stroke="currentColor" color="currentColor" fill="currentColor"
      style={{width: "1em", height: "1em",verticalAlign: "middle",overflow: "hidden"}} 
      viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M776.68864 226.46784c-24.54528-141.58336-158.12096-236.032-298.28608-211.13344-139.9808 24.90368-258.26304 133.93408-233.53856 275.33824 5.33504 30.592 20.096 78.26432 37.5296 112.59392L28.04224 770.20672c-9.42592 13.5168-14.76608 37.888-11.91936 54.25152l11.02848 62.78656c-10.496-60.47232 2.84672 21.87776 11.02336 21.51936l83.77344 1.24416c16.18944-2.8416 36.46464-16.54272 45.35808-30.4128l100.67456-157.4144 0.88576-1.07008 87.86944 6.9376 117.57056-184.27392s26.16832-53.53984 123.07456-105.05728c88.69376-41.06752 163.04128-32.49152 163.04128-32.49152 21.57056-53.99552 27.20256-117.66784 16.26624-179.75808zM96.86528 795.38176l-22.00064 13.8496 5.12512-24.8832 238.70464-341.62688 16.50688 11.56096-238.336 341.09952zM652.71296 298.8544c-38.59456 55.49568-77.90592 16.36864-132.864-22.58944-54.9632-38.95296-104.94464-62.78144-66.34496-118.45632 38.59456-55.49056 114.36544-69.18656 169.32864-30.23872 54.95808 39.13216 68.47488 115.79392 29.88032 171.28448z" fill="" /><path d="M1013.38112 742.5024c0 148.32128-120.23808 268.55424-268.55424 268.55424s-268.55424-120.23808-268.55424-268.55424 120.23808-268.55424 268.55424-268.55424 268.55424 120.23808 268.55424 268.55424z m-309.00224-136.2432c-0.10752 1.77152 0 96.01024 0 96.01024H606.6688c-43.16672 2.54464-42.37312 40.23296-42.37312 40.23296s0 37.9392 42.37312 40.23296h97.70496v96.01024c3.01056 42.9568 40.23296 42.37312 40.23296 42.37312s38.15424 0 40.23296-42.37312v-96.01024h94.31552c42.37312-2.42176 42.37312-40.23296 42.37312-40.23296s0-37.56032-42.37312-40.23296h-94.3104V606.2592c-2.26816-42.37312-40.23296-42.37312-40.23296-42.37312s-37.71904-0.00512-40.23296 42.37312z" fill="" /></svg>
    )

  return (
    <div className="tableProfiles table__permission__deppos">
        <div className="tools">
            <button className="create_acc_profile" onClick={() => {
              // dispatch(removePBCV("all"))
              // dispatch(setValues(userInforEmpty))
              // navigate(`${uri}/hr/profile/create`)
              setIsShowModal(true)
            }}>
              <PermissionAdd />
              Tạo
            </button>
        </div>
        <Table
          dataSource={permissionDepPosList}
          pagination={{
            position: ["bottomLeft"],
            defaultPageSize: 10,
            locale: { items_per_page: "" },
            defaultCurrent: 1,
            showSizeChanger: true,
            total: totalDepPos,
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
            title="Tên bộ phận công tác"
            key="postionName"
            className="table__pos__name"
            render={(text, record) => {
              return record?.department?.name
            }}
          />
          <Column
            title="Tên chức danh, chức vụ"
            key="postionType"
            className="table__pos__type"
            render={(text, record) => {
              return record?.position_management?.position?.name
            }}
          />
          <Column
            title=""
            key="thaoTac"
            render={(text, record) => {
              return <div className="thaoTac__Edit">
                <button className="thaoTac__Edit__btn" onClick={() => {
                    let data = {
                      dep_id: record?.department?.id,
                      pos_id: record?.position_management?.id
                    }
                    setDataToModal({...data})
                    setIsShowModalUpdate(true)
                }}>
                  <SetPermissionIcon />
                </button>
                {/*
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
              */}
              </div>
            }}
          />
        </Table>
        <ModalPerDepPos
        isShowModal={isShowModal} 
        setIsShowModal={setIsShowModal}
        depList={depList}
        posList={posList}
        isUpdate={isShowModalUpdate}
        />
        <ModalPerDepPos
          isShowModal={isShowModalUpdate} 
          setIsShowModal={setIsShowModalUpdate}
          pos_dep_mana_id={dataToModal}
          isUpdate={isShowModalUpdate}
          depList={depList}
          posList={posList}
        />
    </div>
  )
}