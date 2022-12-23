import React, { useEffect, useState } from 'react'
import { Table, message, Select } from 'antd'
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../redux/Slice/loading';
import { GET_DEPARTMENT_LIST, SEARCH_DEPARTMENT } from '../../title/title';
import "./department.css"
import {MdOutlineModeEditOutline} from "react-icons/md"
import {AiOutlineUserAdd} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';
import DepInfor from './DepInfor';

export default function TableDep() {

    const {Column} = Table;
    const {Option} = Select;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(10);
    const {isLoading} = useSelector(state => state.loadingReducer);
    const {tableDepList, message: status} = useSelector(state => state.departmentsReducer)
    let [newTableDepList, setNewTableDepList] = useState([]);
    let [dataTable, setDataTable] = useState([]);
    let [search, setSearch] = useState([]);
    let [isShowModal, setIsShowModal] = useState(false);
    let [dataToModal, setDataToModal] = useState()
    // console.log(tableDepList)
    useEffect(()=>{
        /* lấy danh sách user về và render ra Table */
        dispatch({
            type: GET_DEPARTMENT_LIST,
            table: {page:1,pageNumber:500}
        })
        dispatch(setIsLoading(true));
    },[dispatch])

    useEffect(()=>{
      dataOfTable()
    }, [newTableDepList])

    useEffect(()=>{
      if(dataTable.length >= 75){
        setSearch([...dataTable]);
      }
    }, [dataTable]);

    useEffect(()=>{
      let addKeyToData = tableDepList.map((child,index)=>{
        let {children, ...rest} = child;
        let childrenss =[]
          if(children?.length>0) {
            childrenss = children.map((item,index)=>{
              return {
                ...item,
                key: index+100+ child.id
              }
            })
          }
          return {
            ...rest,
            childrens: [...childrenss],
            key: index
          }
      });
      setNewTableDepList([...addKeyToData])
    }, [tableDepList])

    useEffect(()=>{
      if(status.message !== "" && status.message === "thành công"){
        message.success("Thao tác thành công")
      } else if(status.message !== "" && status.message === "thất bại") {
        message.error("Thao tác thất bại")
      }
    }, [status])
    
    const showLoading = ()=>{
        if(isLoading){
          return <Loading />
        }
    }

    const dataOfTable = ()=>{
      let arrDepReturn =[];
      if(newTableDepList.length > 0){
        for(let dep of newTableDepList){
          if(dep?.parent_id === null){
            arrDepReturn.push(dep)
          }
        }
      } else {
        return null;
      }
      setDataTable([...arrDepReturn]);
    };

    const renderOption = ()=>{
      if(search?.length > 0){
        return search.map((PB,index)=>{
          return <Option value={PB?.name} key={index}>{PB?.name}</Option>
        })
      }
    };

  return (
    <div className="table__dep tableProfiles">
        {showLoading()}
        <div className="tools">
          <button className="create_acc_profile table__dep__btn" onClick={()=>{
            setDataToModal({
              name: "",
              address: "",
              phone: "",
              note: "",
              title: "Tạo phòng ban"
            })
            setIsShowModal(true)
          }}>
            Tạo phòng ban
          </button>
          <button className="create_acc_profile table__dep__btn" onClick={()=>{
            setDataToModal({
              name: "",
              address: "",
              phone: "",
              note: "",
              title: "Tạo tổ"
            })
            setIsShowModal(true)
          }}>
            Tạo tổ
          </button>
          <div className="tableProfiles__search">
            <Select
                showSearch
                allowClear
                className="tool__search"
                placeholder="Phòng ban"
                filterOption={(input, option) =>
                  (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
                }
                onChange={(value)=>{
                  if(value !== undefined){
                    dispatch({
                      type: SEARCH_DEPARTMENT,
                      table: {page:1,pageNumber:500, value}
                    })
                  } else {
                    dispatch({
                      type: GET_DEPARTMENT_LIST,
                      table: {page:1,pageNumber:500}
                    })
                  }
                }}
            >
                  {renderOption()}
            </Select>
          </div>
        </div>
        <Table
          dataSource = {dataTable}
          expandable={{
            expandedRowRender: (record)=>{
              if(record.childrens.length > 0){
                return record.childrens.map((child, index)=>{
                  return <div className="dep__children__div" key={index + child.id}>
                      <div className="dep__children__infor">
                          <p className="dep__children" >
                            {child.name}
                          </p>  
                          <p className="dep__children">
                            {child.address}
                          </p>  
                          <p className="dep__children">
                            {child.phone}
                          </p>    
                      </div>
                      <div className="thaoTac__Edit">
                          <button className="thaoTac__Edit__btn" onClick={()=>{
                              // navigate(`/hr/department/${child.id}`);
                              child.title = "Chỉnh sửa phòng ban"
                              setDataToModal(child)
                              setIsShowModal(true)
                          }}>
                            <MdOutlineModeEditOutline/>
                          </button>
                      </div>
                  </div>
                })
              }
            },
            expandRowByClick: false,
            showExpandColumn: true,
            rowExpandable: (record)=>{
              // console.log(record)
              return record?.childrens.length > 0
            }
          }}
          pagination={{
              position: ["bottomLeft"],
              defaultPageSize: 10,
              locale: { items_per_page: "" },
              defaultCurrent: 1,
              showSizeChanger: true,
              total: dataTable?.length,
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
           <Column className="table__dep__name" dataIndex= "name" key="name" title="Tên phòng ban" />
           <Column className="table__dep__address" dataIndex= "address" key="address" title="Địa chỉ" />
           <Column className="table__dep__phone" dataIndex= "phone" key="phone" title="Số điện thoại" />
           <Column className="table__dep__children" key="children" title="Phòng ban con"
             render={(text,record,index)=>{
               if(record?.childrens.length > 0){
                 return record.childrens.map((child, index)=>{
                   return <p className="dep__children" key={index + child.id}>
                        {child.name}
                      </p>
                 })
               }
             }}
           />
           <Column className="table__dep__thaoTac" key="thao tac" render={(text,record,index)=>{
               return <div className="thaoTac__Edit">
                     <button className="thaoTac__Edit__btn" onClick={()=>{
                        // navigate(`/hr/department/${record.id}`);
                        record.title = "Chỉnh sửa phòng ban"
                        setDataToModal(record)
                        setIsShowModal(true)
                      }}>
                         <MdOutlineModeEditOutline/>
                     </button>
               </div>
           }} />
          </Table>
          <DepInfor isShowModal={isShowModal} setIsShowModal={setIsShowModal} dataToModal={dataToModal} />
    </div>
  )
}