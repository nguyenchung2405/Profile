import { Table, Select, AutoComplete, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_DEP_POS_TO_SEARCH, GET_USER_LIST, SEARCH } from '../../../title/title';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai"
import { setIsLoading } from '../../../redux/Slice/loading';
import Loading from '../../Loading';
import { useHistory } from 'react-router-dom';
import { removePBCV, setEmailPhone, setIsCreateProfile, setValues } from '../../../redux/Steps/step1/step1Slice';
import { userInforEmpty } from '../../../ultils/defaultUserInfor';
import maleIMG from "../../../img/user-male.png"
import femaleIMG from "../../../img/user-female.png"
import { checkMicroFe, checkUserPermission } from '../../../ultils/helper';
import UserPerModal from './UserPerModal';

export default function UserTablePermission() {
  let uri = checkMicroFe() === true ? "/profile-service" : "";
  const history = useHistory();
  const dispatch = useDispatch();
  const { Column } = Table;
  const { Option } = Select;
  const [page, setPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(10);
  const [search, setSearch] = useState({
    full_name: "",
    dep_names: "",
    pos_names: ""
  });
  const [isSearch, setIsSearch] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
  const [dataToModal, setDataToModal] = useState("")
  const { userList, total } = useSelector(state => state.userListReducer)
  const { isLoading } = useSelector(state => state.loadingReducer);
  const { depList, posList } = useSelector(state => state.tableReducer);
  const { userPermission } = useSelector(state => state.permissionReducer);
  let { messageAlert } = useSelector(state => state.stepsReducer);

  useEffect(() => {
    let { type, msg } = messageAlert;
    if (type !== "" && msg !== "") {
      message[type](msg)
    }
  }, [messageAlert])

  useEffect(() => {
    if (!userPermission.includes("xem danh sách user") && userPermission.length > 0) {
      history.push("/404notfound", { replace: true })
    } else if (userPermission.length === 0) {
      dispatch(setIsLoading(true));
    }
  }, [userPermission])

  useEffect(() => {
    /* lấy danh sách user về và render ra Table */
    if (isSearch === true) {
      // console.log("call tìm kiếm")
      dispatch({
        type: SEARCH,
        data: { search, page, pageNumber }
      })
    } else {
      // console.log("call tại đây")
      dispatch({
        type: GET_USER_LIST,
        table: { page, pageNumber }
      })
    }
    dispatch(setIsLoading(true));
  }, [page, pageNumber, isSearch])

  useEffect(() => {
    if (search?.full_name === "" && search?.dep_names === "" && search?.pos_names === "" && isSearch === true) {
      dispatch({
        type: GET_USER_LIST,
        table: { page, pageNumber }
      })
      setIsSearch(false)
    }
  }, [search])

  useEffect(() => {
    dispatch({
      type: GET_DEP_POS_TO_SEARCH
    })
  }, [])

  const showLoading = () => {
    if (isLoading) {
      return <Loading />
    }
  }

  const handleChangeSearch = (name, value) => {
    setSearch({
      ...search,
      [name]: value
    })
  }

  const SetPermissionIcon = () => (
    <svg stroke="currentColor" color="currentColor" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
      <g><path d="M601.8,423.2c40.8-17.2,83.8-26,128.4-26c4.4,0,8.8,0.2,13.2,0.2c20.9-52.8,26.2-115.2,15.7-175.9C734.9,82.3,603.6-10.7,465.6,13.8C327.7,38.3,211.4,145.5,235.9,284.6c5.2,30.1,19.7,76.9,36.9,110.8L22.5,756.6c-9.2,13.2-14.5,37.1-11.7,53.4l10.9,61.8c-10.3-59.5,2.9,21.4,10.9,21.2l82.5,1.1c15.9-2.9,35.8-16.3,44.6-29.9l99-154.8l1-1l86.5,6.9l115.6-181.3c0.4,0,0.8,0.2,1.1,0.2c10.3-14.2,21.6-27.6,34.3-40.2C527.2,463.6,562.6,439.8,601.8,423.2z M76.6,794.7l-12.3,5.2l1.3-13.4l239.8-348.2l14.4,13.4L76.6,794.7z M441.1,154.1c37.9-54.6,112.5-68.1,166.5-29.7c54.2,38.5,67.4,113.9,29.5,168.4c-37.9,54.5-76.6,16.1-130.7-22.2C452.3,232.2,403.2,208.8,441.1,154.1z" /><path d="M727,464.2c-145.3,0-263,117.7-263,263s117.7,263,263,263c145.3,0,263-117.7,263-263C990,581.9,872.3,464.2,727,464.2z M827.7,809.6H626.3c-51.1,0-92.4-41.3-92.4-92.4c0-51.1,41.3-92.4,92.4-92.4h201.4c51.1,0,92.4,41.3,92.4,92.4C920.1,768.3,878.8,809.6,827.7,809.6z" /><path d="M755.5,718.9c0,38.7,31.4,70.1,70.1,70.1c38.7,0,70.1-31.4,70.1-70.1c0-38.7-31.4-70.1-70.1-70.1C786.9,648.9,755.5,680.2,755.5,718.9z" /></g>
    </svg>
  )

  const renderDepListOption = () => {
    if (depList.length > 0) {
      return depList.map((dep, index) => {
        return <Option value={dep.id} >{dep.name}</Option>
      })
    }
  }

  const renderPosListOption = () => {
    if (posList.length > 0) {
      return posList.map((pos, index) => {
        return <Option value={pos.id} key={index}>{`${pos.position?.name} - ${pos.position_type.identifier}`}</Option>
      })
    }
  }

  const femaleAvatar = () => {
    return <img className="avatarUser" src={femaleIMG} alt="avatar female" />
  }

  const maleAvatar = () => {
    return <img src={maleIMG} alt="avatar male" />
  }

  const unknownSexAvatar = () => {
    return <img className="avatarUser" src={maleIMG} alt="avatar unknown gender" />
  }

  const dataOfAutoComplete = (name) => {
    if (name === "dep") {
      return depList.map(item => {
        return {
          label: item.name,
          value: item.name
        }
      })
    } else if (name === "pos") {
      let arrName = posList.map(item => {
        let { name } = item.position;
        return name;
      });
      let nameUniqueArr = [... new Set(arrName)];
      return nameUniqueArr.map(item => {
        return {
          label: item,
          value: item
        }
      })
    }
  }

  const renderTable = () => {
    if (userPermission.length > 0) {
      return <div className="tableProfiles">
        <div className="tools">
          {checkUserPermission(userPermission, "tạo hồ sơ")
            ?
            <button className="create_acc_profile" onClick={() => {
              dispatch(removePBCV("all"))
              dispatch(setValues(userInforEmpty))
              history.push(`${uri}/hr/profile/create`)
            }}>
              <AiOutlineUserAdd />
              Tạo
            </button>
            : ""
          }
          <div className="tableProfiles__search">
            <input
              className="tool__search tools__name"
              placeholder="Họ và tên"
              onChange={(e) => {
                let { value } = e.target;
                handleChangeSearch("full_name", value)
              }}
              onKeyDown={(e) => {
                let { key } = e;
                if (key.toLowerCase() === "enter") {
                  setIsSearch(true)
                  dispatch({
                    type: SEARCH,
                    data: { search, page, pageNumber }
                  })
                }
              }}
            />
            <AutoComplete
              allowClear
              className="auto__complete"
              value={search.dep_names}
              options={dataOfAutoComplete("dep")}
              filterOption={(input, option) => {
                let index = input.lastIndexOf(";");
                let str_replace = input.slice(0, index + 1);
                input = input.replace(str_replace, "");
                return (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
              }
              }
              onSelect={(value) => {
                if (search.dep_names !== "") {
                  let index = search.dep_names.lastIndexOf(";");
                  let str_replace = search.dep_names.slice(0, index + 1);
                  value = str_replace + value;
                  handleChangeSearch("dep_names", value)
                } else {
                  handleChangeSearch("dep_names", value)
                }
              }}
              onChange={(value) => {
                handleChangeSearch("dep_names", value)
              }}
              onKeyDown={(e) => {
                let { key } = e;
                if (key.toLowerCase() === "enter") {
                  setIsSearch(true)
                  dispatch({
                    type: SEARCH,
                    data: { search, page, pageNumber }
                  })
                }
              }}
              placeholder="Bộ phận công tác"
            />
            <AutoComplete
              allowClear
              className="auto__complete"
              value={search.pos_names}
              options={dataOfAutoComplete("pos")}
              filterOption={(input, option) => {
                let index = input.lastIndexOf(";");
                let str_replace = input.slice(0, index + 1);
                input = input.replace(str_replace, "");
                return (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
              }
              }
              onSelect={(value) => {
                if (search.pos_names !== "") {
                  let index = search.pos_names.lastIndexOf(";");
                  let str_replace = search.pos_names.slice(0, index + 1);
                  value = str_replace + value;
                  handleChangeSearch("pos_names", value)
                } else {
                  handleChangeSearch("pos_names", value)
                }
              }}
              onChange={(value) => {
                handleChangeSearch("pos_names", value)
              }}
              onKeyDown={(e) => {
                let { key } = e;
                if (key.toLowerCase() === "enter") {
                  setIsSearch(true)
                  dispatch({
                    type: SEARCH,
                    data: { search, page, pageNumber }
                  })
                }
              }}
              placeholder="Chức danh, chức vụ"
            />
          </div>
          <div className="tableProfiles__search__btn">
            <button className="create_acc_profile btn__search"
              onClick={() => {
                if (!search?.full_name && !search?.dep_names && !search?.pos_names) {
                  alert("Vui lòng nhập thông tin cần tìm");
                } else {
                  setIsSearch(true)
                  dispatch({
                    type: SEARCH,
                    data: { search, page, pageNumber }
                  })
                }

              }} >Tìm kiếm</button>
          </div>
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
              // console.log(record)
              if (record?.resources?.length > 0) {
                // let avatar = record?.user_resources.find(type => type.type === "3x4");
                // console.log(avatar)
                // Thằng Đăng BE lại sửa data phía BE nên phải code lại
                // let index = record.resources.length - 1;
                // let avatarRender = record.resources[index].resource?.content;
                // code lại hiển thị hình ảnh user do thằng Đăng trả data lung tung lúc này lúc khác
                let avatarRender = record.resources.find(img => img.type === "3x4");
                if (avatarRender !== undefined) {
                  return <img src={`data:image/png;base64,${avatarRender?.resource.content}`} alt="avatar of user" />
                } else {
                  if (record.profile?.gender === 1) {
                    return maleAvatar()
                  } else if (record.profile?.gender === 2) {
                    return femaleAvatar()
                  } else {
                    return unknownSexAvatar()
                  }
                }
              } else {
                if (record.profile?.gender === 1) {
                  return maleAvatar()
                } else if (record.profile?.gender === 2) {
                  return femaleAvatar()
                } else {
                  return unknownSexAvatar()
                }
              }
            }} />
          <Column className="tableProfiles__hoTen" title="Họ và tên" dataIndex="full_name" key="hoTen" />
          <Column className="tableProfiles__phongBan" title="Bộ phận công tác" key="phongBan"
            render={(text, record, index) => {
              let tenPB = [];
              for (let PB of record.user_dep_pos) {
                tenPB.push(<p>{PB.department_name}</p>)
              }
              return tenPB
            }} />
          <Column className="tableProfiles__chucVu" title="Chức danh, chức vụ" key="chucVu"
            render={(text, record, index) => {
              let tenCV = [];
              for (let PB of record.user_dep_pos) {
                tenCV.push(<p>{PB.position.pos_name}</p>)
              }
              return tenCV
            }} />
          <Column className="tableProfiles__soDienThoai" title="Số điện thoại" dataIndex="phone" key="soDienThoai" />
          <Column className="tableProfiles__thaoTac " key="thaoTac"
            render={(text, record, index) => {
              return <button className="thaoTac__Edit__btn" onClick={() => {
                setIsShowModal(true)
                setDataToModal(record.id)
              }}>
                <SetPermissionIcon />
              </button>
            }} />
        </Table>
        <UserPerModal dataToModal={dataToModal} isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
        {showLoading()}
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