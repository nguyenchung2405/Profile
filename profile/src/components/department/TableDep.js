import React, { useEffect, useState } from 'react'
import { Col, Table } from 'antd'
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '../../redux/Slice/loading';
import { GET_DEPARTMENT_LIST } from '../../title/title';
import "./department.css"
import {MdOutlineModeEditOutline} from "react-icons/md"
const columnss = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'parent_id',
    dataIndex: 'parent_id',
    key: 'parent_id',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a>Delete</a>,
  },
];
export default function TableDep() {

    const {Column} = Table;
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [pageNumber, setPageNumber] = useState(10);
    const {isLoading} = useSelector(state => state.loadingReducer);
    const {tableDepList, total} = useSelector(state => state.departmentsReducer)
    let [newTableDepList, setNewTableDepList] = useState([]);

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
        let childrenss =[]
        if(child.parent_id=== null) {
          if(child.children.length>0) {
            childrenss = child.children.map((item,index)=>{
              return {
                ...item,
                key: index+100
              }
            })
          }
          
          return {
            ...child,
            name: child.name + index,
            children:childrenss,
            key: index+1
          }
        }
      
      });
      setNewTableDepList([...addKeyToData])
      // console.log(addKeyToData)
    }, [tableDepList])
    
    const showLoading = ()=>{
        if(isLoading){
          return <Loading />
        }
    }

  
    const data = [
      {
        key: 1,
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
      },
      {
        key: 2,
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
      },
      {
        key: 3,
        name: 'Not Expandable',
        age: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
      },
      {
        key: 4,
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
      },
    ];
  return (
    
    
    <div className="table__dep tableProfiles">
        {showLoading()}
        {console.log(newTableDepList)}
        <Table
        columns={columnss}
        // dataSource ={data}
          dataSource = {newTableDepList.length > 0 ? newTableDepList : ""}
          // dataSource = {tableDepList.map((item,index)=>{

          //     return {
          //       key:index,
          //       ...item
          //     }
          // })}
          expandable={{
            expandedRowRender: (record)=>{
              // return <Table columns={columnss} dataSource={record.children} pagination={false} />;
             return record.name
              // if(record.children.length > 0){
              //   return record.children.map((child, index)=>{
              //     return <p className="dep__children" key={index}>
              //       {child.name}
              //     </p>  
              //   })
              // }
              // console.log(record)

              // let htmlRender= [];
              // for(let property in record){
              //   // console.log(child)
              //   if(property === "children" && record[property].length > 0){
              //     for(let child of record[property]){
              //       let html = <p className="dep__children">{child.name}</p>;
              //       htmlRender.push(html);
              //     }
                  
              //   }
              // }
              // if(htmlRender.length > 0){
              //   console.log(htmlRender)
              //   return htmlRender;
              // }
            },
            // expandRowByClick: true,
            // showExpandColumn: true,
            rowExpandable: (record)=>{
              return record.name !=="Not Expandable"
              // return record?.children?.length > 0
            }
          }}
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
        
          </Table>
    </div>
  )
}
