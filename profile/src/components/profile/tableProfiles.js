import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { GET_USER_LIST } from '../../title/title';

export default function TableProfiles() {

    const dispatch = useDispatch();
    const data = "";
    const column = [
        {
            title: "",
            dataIndex: "",
            key: "avatar",
        },
        {
            title: "",
            dataIndex: "",
            key: "avatar",
        },
        {
            title: "",
            dataIndex: "",
            key: "avatar",
        },
        {
            title: "",
            dataIndex: "",
            key: "avatar",
        },
        {
            title: "",
            dataIndex: "",
            key: "avatar",
        },
        {
            title: "",
            dataIndex: "",
            key: "avatar",
        },
    ]

    useEffect(()=>{
        dispatch({
            type: GET_USER_LIST
        })
    },[])

  return (
    <div className="tableProfiles">
        <Table 
        columns={column}
        />
    </div>
  )
}
