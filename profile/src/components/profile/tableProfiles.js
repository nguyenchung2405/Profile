import { Table, Select, AutoComplete } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GET_DEP_POS_TO_SEARCH, GET_USER_LIST, SEARCH } from '../../title/title';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai"
import { setIsLoading } from '../../redux/Slice/loading';
import Loading from '../Loading';
import { useHref, useLocation, useNavigate } from 'react-router-dom';
import { removePBCV, setEmailPhone, setIsCreateProfile, setValues } from '../../redux/Steps/step1/step1Slice';
import { userInforEmpty } from '../../ultils/defaultUserInfor';
import maleIMG from "../../img/user-male.png"
import femaleIMG from "../../img/user-female.png"
import { checkMicroFe, checkUserPermission } from '../../ultils/helper';

export default function TableProfiles() {
    let uri = checkMicroFe() === true ? "/profile-service" : "";
    const navigate = useNavigate();
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
    const {depList, posList} = useSelector(state => state.tableReducer);
    const {userPermission} = useSelector(state => state.permissionReducer);
    
    useEffect(()=>{
      if(!userPermission.includes("xem danh sách hồ sơ")){
          navigate("/404notfound", {replace: true})
      }
    } , [])

    useEffect(() => {
      /* lấy danh sách user về và render ra Table */
      if(isSearch === true){
          // console.log("call tìm kiếm")
          dispatch({
            type: SEARCH,
            data: {search, page, pageNumber}
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

    useEffect(()=>{
        if(search?.full_name === "" && search?.dep_names === "" && search?.pos_names === "" && isSearch === true){
          dispatch({
            type: GET_USER_LIST,
            table: { page, pageNumber }
          })
          setIsSearch(false)
        }
    }, [search])

    useEffect(()=>{
        dispatch({
          type: GET_DEP_POS_TO_SEARCH
        })
    }, [])

    const showLoading = () => {
      if (isLoading) {
        return <Loading />
      }
    }
    
    const handleChangeSearch = (name, value)=>{
        setSearch({
          ...search,
          [name]: value
        })
    }

    const renderDepListOption = ()=>{
      if(depList.length > 0){
          return depList.map((dep, index)=>{
              return <Option value={dep.id} >{dep.name}</Option>
          })
      }
    }

    const renderPosListOption = ()=>{
      if(posList.length > 0){
          return posList.map((pos, index)=>{
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
    
    const dataOfAutoComplete = (name)=>{
      if(name === "dep"){
        return depList.map(item => {
          return {
            label: item.name,
            value: item.name
          }
        })
      } else if(name === "pos") {
        let arrName = posList.map(item => {
          let {name} = item.position;
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
    
    return (
      <div className="tableProfiles">
        <div className="tools">
          {  checkUserPermission(userPermission, "tạo hồ sơ")
            ?
            <button className="create_acc_profile" onClick={() => {
            dispatch(removePBCV("all"))
            dispatch(setValues(userInforEmpty))
            navigate(`${uri}/hr/profile/create`)
          }}>
            <AiOutlineUserAdd />
            Tạo
          </button>
          : ""
        }
          { /*
          <button className="create_acc_profile" onClick={() => {
            dispatch(removePBCV("all"))
            dispatch(setValues(userInforEmpty))
            navigate(`${uri}/hr/profile/create`)
          }}>
            <AiOutlineUserAdd />
            Tạo
          </button>
        */}
          <div className="tableProfiles__search">
              <input 
              className="tool__search tools__name"
              placeholder="Họ và tên"
              onChange={(e)=>{
                  let {value} = e.target;
                  handleChangeSearch("full_name",value)
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
              />
              <AutoComplete
                allowClear
                className="auto__complete"
                options={dataOfAutoComplete("dep")}
                filterOption={(input, option)=>
                  (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
                }
                onChange={(value)=>{
                  handleChangeSearch("dep_names",value)
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
                placeholder="Bộ phận công tác"
              />
              <AutoComplete
                allowClear
                className="auto__complete"
                options={dataOfAutoComplete("pos")}
                filterOption={(input, option)=>
                  (option?.value ?? '').toLowerCase().includes(input.toLowerCase())
                }
                onChange={(value)=>{
                  handleChangeSearch("pos_names",value)
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
          <div className="tableProfiles__search__btn">
                <button className="create_acc_profile btn__search"
                onClick={()=>{
                    if(!search?.full_name && !search?.dep_names && !search?.pos_names){
                        alert("Vui lòng nhập thông tin cần tìm");
                    } else {
                        setIsSearch(true)
                        dispatch({
                          type: SEARCH,
                          data: {search, page, pageNumber}
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
                if(avatarRender !== undefined){
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
                for(let PB of record.user_dep_pos){
                    tenPB.push(<p>{PB.department_name}</p>) 
                }
                return tenPB
            }} />
          <Column className="tableProfiles__chucVu" title="Chức danh, chức vụ" key="chucVu"
            render={(text, record, index) => {
              let tenCV = [];
                for(let PB of record.user_dep_pos){
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
                if(checkUserPermission(userPermission, "sửa hồ sơ", "xem chi tiết hồ sơ")){
                  if (id && typeof id === "number" && id !== null) {
                    return <div>
                      <button onClick={() => {
                        dispatch(setIsCreateProfile(false))
                        dispatch(setEmailPhone({ email, soDienThoai: phone }))
                        navigate(`${uri}/hr/profile/${id}`)
                      }}>
                        <MdOutlineModeEditOutline />
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
                if(checkUserPermission(userPermission, "sửa hồ sơ", "xem chi tiết hồ sơ", "tạo hồ sơ")){
                  return <div>
                  <button onClick={() => {
                    dispatch(setValues(newData))
                    dispatch(setIsCreateProfile(false))
                    navigate(`${uri}/hr/profile/create/${id}`)
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
    )
  }