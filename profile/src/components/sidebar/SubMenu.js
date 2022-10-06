import React from 'react'
import {Menu} from "antd"
import style from "./sidebar.module.css";
import {MdPeopleOutline} from "react-icons/md"
import { useNavigate } from "react-router-dom";

export default function SubMenu() {
    const navigate = useNavigate();
    const getItem = (label, key, icon, children)=>{
        return {
            label,
            key,
            icon,
            children
        }
    }

    const items = [
        getItem("Nhân sự","sub1", <MdPeopleOutline />,[
            getItem("Hồ sơ", "1"),
            getItem("Bộ phận công tác", "2"),
            getItem("Chức danh, chức vụ", "3"),
        ])
    ]

  return (
    <div className={style.SubMenu}>
        <Menu
         mode='inline'
         items={items}
         onClick={(e)=>{
            if(e.key === "1"){
                navigate("/hr/profile")
            }
         }}
        />
    </div>
  )
}
