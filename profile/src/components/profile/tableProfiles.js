import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_LIST } from '../../title/title';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai"
import { setIsLoading } from '../../redux/Slice/loading';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';
import { removePBCV, setEmailPhone, setIsCreateProfile, setValues } from '../../redux/Steps/step1/step1Slice';
import { userInforEmpty } from '../../ultils/defaultUserInfor';
import maleIMG from "../../img/user-male.png"
import femaleIMG from "../../img/user-female.png"
import unknownGenderIMG from "../../img/unknownGender.png"

export default function TableProfiles() {

  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(10);
  const { userList, total } = useSelector(state => state.userListReducer)
  const { isLoading } = useSelector(state => state.loadingReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Column } = Table;

  useEffect(() => {
    /* lấy danh sách user về và render ra Table */
    dispatch({
      type: GET_USER_LIST,
      table: { page, pageNumber }
    })
    dispatch(setIsLoading(true));
  }, [page, pageNumber])

  const showLoading = () => {
    if (isLoading) {
      return <Loading />
    }
  }

  const femaleAvatar = () => {
    return <img className="avatarUser" src={femaleIMG} alt="avatar female" />
  }

  const maleAvatar = () => {
    return <img src={maleIMG} alt="avatar male" />
  }

  const unknownSexAvatar = () => {
    return <img className="avatarUser" src={unknownGenderIMG} alt="avatar unknown gender" />
  }

  return (
    <div className="tableProfiles">
      <div className="tools">
        <button className="create_acc_profile" onClick={() => {
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
        <Column className="tableProfiles__avatar" title="" key="avatar"
          render={(text, record, index) => {
            if (record?.userResource?.data.length > 0) {
              let avatar = record?.userResource.data.find(type => type.type === "3x4");
              let index = avatar.content.length - 1;
              let avatarRender = avatar.content[index].content;
              return <img src={`data:image/png;base64,${avatarRender}`} alt="avatar of user" />
            } else {
              if (record.profiles?.data.gender === 1) {
                return maleAvatar()
              } else if (record.profiles?.data.gender === 2) {
                return femaleAvatar()
              } else {
                return unknownSexAvatar()
              }
            }
          }} />
        <Column className="tableProfiles__hoTen" title="Họ và tên" dataIndex="full_name" key="hoTen" />
        <Column className="tableProfiles__phongBan" title="Phòng ban" key="phongBan"
          render={(text, record, index) => {
            // console.log(record)
            if (record.primaryDepartment?.data !== undefined && typeof record.primaryDepartment === "object") {
              return record.primaryDepartment.data.department_name;
            }
          }} />
        <Column className="tableProfiles__chucVu" title="Chức vụ" key="chucVu"
          render={(text, record, index) => {
            if (record.primaryDepartment !== undefined && typeof record.primaryDepartment === "object") {
              return record.primaryDepartment?.data.position.pos_name;
            }
          }} />
        <Column className="tableProfiles__soDienThoai" title="Số điện thoại" dataIndex="phone" key="soDienThoai" />
        <Column className="tableProfiles__thaoTac" key="thaoTac"
          render={(text, record, index) => {
            if (record.profiles !== null) {
              // console.log(record)
              let { email, phone } = record;
              let { id } = record?.profiles?.data;
              if (id && typeof id === "number") {
                return <div>
                  <button onClick={() => {
                    dispatch(setIsCreateProfile(false))
                    dispatch(setEmailPhone({ email, soDienThoai: phone }))
                    navigate(`/hr/profile/${id}`)
                  }}>
                    <MdOutlineModeEditOutline />
                  </button>
                </div>
              }
            } else {
              // console.log(record)
              let { email, phone, full_name } = record;
              let { id } = record;
              let newData = { ...userInforEmpty }
              newData.hoTen = full_name;
              newData.email = email;
              newData.soDienThoai = phone;
              return <div>
                <button onClick={() => {
                  dispatch(setValues(newData))
                  dispatch(setIsCreateProfile(false))
                  navigate(`/hr/profile/create/${id}`)
                }}>
                  <AiFillFileAdd />
                </button>
              </div>

            }
          }} />
      </Table>
      {showLoading()}
    </div>
  )
}
