import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../redux/Slice/loading';
import { GET_DEPARTMENT_LIST } from '../../title/title';
import "./department.css"
import {MdOutlineModeEditOutline} from "react-icons/md"
import {AiOutlineUserAdd} from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

export default function TableDep() {

    const {Column} = Table;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(10);
    const {isLoading} = useSelector(state => state.loadingReducer);
    const {tableDepList} = useSelector(state => state.departmentsReducer)
    let [newTableDepList, setNewTableDepList] = useState([]);
    // console.log(newTableDepList)
    useEffect(()=>{
        /* lấy danh sách user về và render ra Table */
        dispatch({
            type: GET_DEPARTMENT_LIST,
            table: {page,pageNumber}
        })
        dispatch(setIsLoading(true));
    },[page,pageNumber,dispatch])

    useEffect(()=>{
      let addKeyToData = tableDepList.map((child,index)=>{
        let {children, ...rest} = child;
        let childrenss =[]
          if(children.length>0) {
            childrenss = children.map((item,index)=>{
              return {
                ...item,
                key: index+100
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
    
    const showLoading = ()=>{
        if(isLoading){
          return <Loading />
        }
    }

    const dataOfTable = ()=>{
      let arrDepReturn =[];
      if(newTableDepList.length > 0){
        for(let dep of newTableDepList){
          if(dep.parent_id === null){
            arrDepReturn.push(dep)
          }
        }
      } else {
        return null;
      }
      return arrDepReturn
    }

  return (
    <div className="table__dep tableProfiles">
        {showLoading()}
        <div className="tools">
          <button className="create_acc_profile" onClick={()=>{
            navigate("/hr/department/create")
          }}>
            <AiOutlineUserAdd />
            Tạo
          </button>
        </div>
        <Table
          dataSource = {dataOfTable() }
          expandable={{
            expandedRowRender: (record)=>{
              if(record.childrens.length > 0){
                return record.childrens.map((child, index)=>{
                  return <div className="dep__children__div">
                      <div className="dep__children__infor">
                          <p className="dep__children" key={index}>
                            {child.name}
                          </p>  
                          <p className="dep__children" key={index}>
                            {child.address}
                          </p>  
                          <p className="dep__children" key={index}>
                            {child.phone}
                          </p>    
                      </div>
                      <div className="thaoTac__Edit">
                          <button className="thaoTac__Edit__btn" onClick={()=>{
                              navigate(`/hr/department/${child.id}`);
                          }}>
                            <MdOutlineModeEditOutline/>
                          </button>
                      </div>
                  </div>
                })
              }
            },
            expandRowByClick: true,
            showExpandColumn: true,
            rowExpandable: (record)=>{
              // console.log(record)
              return record.childrens.length > 0
            }
          }}
          pagination={{
              position: ["bottomLeft"],
              defaultPageSize: 10,
              locale: { items_per_page: "" },
              defaultCurrent: 1,
              showSizeChanger: true,
              total: dataOfTable()?.length,
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
               if(record.childrens.length > 0){
                 return record.childrens.map((child, index)=>{
                   return <p className="dep__children" key={index}>
                        {child.name}
                      </p>
                 })
               }
             }}
           />
           <Column className="table__dep__thaoTac" key="thao tac" render={(text,record,index)=>{
               return <div className="thaoTac__Edit">
                     <button className="thaoTac__Edit__btn" onClick={()=>{
                        navigate(`/hr/department/${record.id}`);
                      }}>
                         <MdOutlineModeEditOutline/>
                     </button>
               </div>
           }} />
          </Table>
    </div>
  )
}