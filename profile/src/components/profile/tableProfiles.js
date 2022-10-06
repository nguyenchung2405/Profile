import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_LIST } from '../../title/title';
import {MdOutlineModeEditOutline} from "react-icons/md";
import {AiOutlineUserAdd} from "react-icons/ai"
import { setIsLoading } from '../../redux/Slice/loading';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';
import { removePBCV, setIsCreateProfile, setValues } from '../../redux/Steps/step1/step1Slice';
import { userInforEmpty } from '../../ultils/defaultUserInfor';

export default function TableProfiles() {

    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(10);
    const {userList, total} = useSelector(state => state.userListReducer)
    const {isLoading} = useSelector(state => state.loadingReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {Column} = Table;

    useEffect(()=>{
        /* lấy danh sách user về và render ra Table */
        dispatch({
            type: GET_USER_LIST,
            table: {page,pageNumber}
        })
        dispatch(setIsLoading(true));
    },[page,pageNumber])

    const showLoading = ()=>{
      if(isLoading){
        return <Loading />
      }
    }

  return (
    <div className="tableProfiles">
        <div className="tools">
          <button className="create_acc_profile" onClick={()=>{
            dispatch(setIsCreateProfile(true))
            dispatch(removePBCV("all"))
            dispatch(setValues(userInforEmpty))
            navigate("/hr/profile/create")
          }}>
            <AiOutlineUserAdd />
            Tạo
          </button>
        </div>
        <Table 
        dataSource={userList.length > 0 ? userList : ""}
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
          <Column className="tableProfiles__avatar" title="" dataIndex={""} key="avatar" />
          <Column className="tableProfiles__hoTen" title="Họ và tên" dataIndex= "full_name" key= "hoTen" />
          <Column className="tableProfiles__phongBan" title="Phòng ban" key="phongBan"
            render={(text,record,index)=>{
                if(record.departments !== undefined && typeof record.departments === "object"){
                    return record.departments.data[0].dep_name;
                }
            }} />
          <Column className="tableProfiles__chucVu" title= "Chức vụ" key= "chucVu"
          render={(text,record,index)=>{
            if(record.departments !== undefined && typeof record.departments === "object"){
                return record.departments.data[0].pos_name;
            }
            }} />
          <Column className="tableProfiles__soDienThoai" title="Số điện thoại" dataIndex="phone" key="soDienThoai" />
          <Column className="tableProfiles__thaoTac" key="thaoTac"
          render={(text,record,index)=>{
            let {id} = record;
            return <div>
                <button onClick={()=>{
                  dispatch(setIsCreateProfile(false))
                  navigate(`/hr/profile/${id}`)
              }}>
                  <MdOutlineModeEditOutline/>
              </button>
            </div>
          }} />
        </Table>
        {showLoading()}
    </div>
  )
}
