import { Table, Select, AutoComplete, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_DEP_POS_TO_SEARCH, GET_USER_LIST, SEARCH } from '../../title/title';
import { MdOutlineModeEditOutline,MdCloudDownload } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai"
import { setIsLoading } from '../../redux/Slice/loading';
import docCookies from 'doc-cookies';
import Loading from '../Loading';
import { useHref, useLocation, useHistory } from 'react-router-dom';
import { removePBCV, setEmailPhone, setIsCreateProfile, setValues } from '../../redux/Steps/step1/step1Slice';
import { userInforEmpty } from '../../ultils/defaultUserInfor';
import maleIMG from "../../img/user-male.png"
import femaleIMG from "../../img/user-female.png"
import programmer from "../../img/programmer.png"
import programmerNam from "../../img/programmerNam.png"
import { checkMicroFe, checkUserPermission } from '../../ultils/helper';
import axios from "axios"
import FileSaver from "file-saver"
import {local , TOKEN} from "../../title/title"

export default function TableProfiles() {
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
  })
  const [isSearch, setIsSearch] = useState(false)
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
    return <img className="avatarUser" src={programmer} alt="avatar female" />
  }

  const maleAvatar = () => {
    return <img src={programmerNam} alt="avatar male" />
  }

  const unknownSexAvatar = () => {
    return <img className="avatarUser" src={maleIMG} alt="avatar unknown gender" />
  }
  const axiosConfig = axios.create({
    // headers: {
    //   "content-type": "application/json",
    // },
  });
const handleExportNV=(e)=>{
  try {
    return axiosConfig.get( `${local}/api/users/exportation/xlxs`,{
      responseType: "arraybuffer",
      headers:{
        'Content-Type': 'multipart/form-data'}
    }).then((data)=>{
      const blob=new Blob([data.data],{
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
        encoding: "UTF-8",
      })
      const fileExtension = ".xlsx";
      FileSaver.saveAs(blob, "Danh sach nhân viên " + fileExtension);
      // return data
    })
  } catch (error) {
    console.log(error)
  }
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
              // history.push(`${uri}/hr/profile/create`)
              history.push(checkMicroFe()===true?'/profile-service/profile/create':'/hr/profile/create')
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
            {/*
              <Select
              showSearch
              allowClear
              className="tool__search"
              placeholder="Bộ phận công tác"
              filterOption={(input, option) =>
                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
              }
              onChange={(value)=>{
                  handleChangeSearch("dep_ids",value)
              }}
              onKeyDown={(e)=>{
                let {key} = e;
                if(key.toLowerCase() === "enter"){
                  setIsSearch(true)
                    dispatch({
                      type: SEARCH,
                      data: {search, page, pageNumber}
                  })
                }
              }}
          >
                {renderDepListOption()}
          </Select>
          <Select
              showSearch
              allowClear
              className="tool__search"
              placeholder="Chức danh, chức vụ"
              filterOption={(input, option) =>
                (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
              }
              onChange={(value)=>{
                  handleChangeSearch("pos_management_ids",value)
              }}
              onKeyDown={(e)=>{
                let {key} = e;
                if(key.toLowerCase() === "enter"){
                  setIsSearch(true)
                    dispatch({
                      type: SEARCH,
                      data: {search, page, pageNumber}
                  })
                }
              }}
          >
                {renderPosListOption()}
          </Select>
              */}
          </div>
          <div></div>
          <div className="tableProfiles__search__btn">
          <button
          onClick={(e)=>handleExportNV(e)}
          className='export-excel'>Xuất DS nhân viên <MdCloudDownload/></button>
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
              try {
                if (record?.user_resources?.length > 0) {
                  // let avatar = record?.user_resources.find(type => type.type === "3x4");
                  // console.log(avatar)
                  // Thằng Đăng BE lại sửa data phía BE nên phải code lại
                  // let index = record.resources.length - 1;
                  // let avatarRender = record.resources[index].resource?.content;
                  // code lại hiển thị hình ảnh user do thằng Đăng trả data lung tung lúc này lúc khác
                  let user_resources=record?.user_resources
                  let avatarRender = user_resources.findLastIndex(img => img.type === "3x4");
                  let a =user_resources[avatarRender]?.path
                  let pathImage= JSON.parse(a).toString()
                  // if (avatarRender !== undefined) {
                    if ((avatarRender !== -1 && user_resources[avatarRender] !== undefined)||avatarRender !== undefined ) {
                      return <img src={`http://192.168.61.116:8017${pathImage}`} alt="avatar of user" />
                    // return <img src={`data:image/png;base64,${avatarRender?.resource.content}`} alt="avatar of user" />
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
              } catch (error) {
                console.log(error)
              }
             
            }} />
          <Column className="tableProfiles__hoTen" title="Họ và tên" dataIndex="full_name" key="hoTen" />
          <Column className="tableProfiles__phongBan" title="Bộ phận công táczzzz" key="phongBan"
            render={(text, record, index) => {
              let tenPB = [];
              for (let PB of record.user_dep_pos) {
                tenPB.push(<p>{PB.department_name}</p>)
              }
              return tenPB
            }} />
              <Column className="tableProfiles__chucVu" title="Sub/Label" key="chucVu"
            render={(text, record, index) => {
              let tenLabel = [];
              for (let PB of record.user_dep_pos) {
                tenLabel.push(<p>{PB?.label}</p>)
              }
              return tenLabel
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
          <Column className="tableProfiles__thaoTac" key="thaoTac"
            render={(text, record, index) => {
              if (record.profile !== null) {
                let { email, phone } = record;
                let id = record.profile?.id;
                if (checkUserPermission(userPermission, "sửa hồ sơ", "xem chi tiết hồ sơ")) {
                  if (id && typeof id === "number" && id !== null) {
                    return <div>
                      <button
                      style={{color:"#fff"}}
                      title='Sửa hồ sơ'
                      onClick={() => {
                        dispatch(setIsCreateProfile(false))
                        dispatch(setEmailPhone({ email, soDienThoai: phone }))
                        history.push(`${uri}/hr/profile/${id}`)
                      }}>
                        <MdOutlineModeEditOutline className='button-editprofile'/>
                      </button>
                    </div>
                  }
                }

              } else {
                // console.log(record)
                let { email, phone, full_name } = record;
                let { id } = record;
                let newData = { ...userInforEmpty }
                newData.hoTen = full_name;
                newData.email = email;
                newData.soDienThoai = phone;
                if (checkUserPermission(userPermission, "sửa hồ sơ", "xem chi tiết hồ sơ", "tạo hồ sơ")) {
                  return <div>
                    <button
                    title='Tạo hồ sơ'
                    style={{background:"red",height:28, width:28}}
                    onClick={() => {
                      dispatch(setValues(newData))
                      dispatch(setIsCreateProfile(false))
                      history.push(`${uri}/hr/profile/create/${id}`)
                    }}>
                      <AiFillFileAdd />
                    </button>
                  </div>
                }
              }
            }} />
        </Table>
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