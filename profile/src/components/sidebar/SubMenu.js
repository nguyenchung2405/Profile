import React from 'react'
import { Menu } from "antd"
import { MdPeopleOutline } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { BsFileEarmarkFill } from "react-icons/bs"
import { FcDepartment } from "react-icons/fc"
import { checkMicroFe } from '../../ultils/helper';
import {ImProfile} from "react-icons/im"
import jwt_decode from "jwt-decode";
import {TOKEN} from "../../title/title"
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../redux/Slice/loading';

export default function SubMenu() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    let uri = checkMicroFe() === true ? "profile-service" : "";

    const getItem = (label, key, icon, children) => {
        return {
            label,
            key,
            icon,
            children
        }
    }

    const items = [
        getItem("Nhân sự", "sub1", <MdPeopleOutline />, [
            getItem("Hồ sơ", "1", <BsFileEarmarkFill />),
            getItem("Bộ phận công tác", "2", <FcDepartment />),
            getItem("Chức danh, chức vụ", "3", <FcDepartment />),
            getItem("Thông tin cá nhân", "4", <ImProfile />)
        ])
    ]

    return (
        <div className="sidebar_SubMenu__XZeb6">
            <Menu
                // defaultOpenKeys={[`sub1`]}
                mode='inline'
                items={items}
                onClick={(e) => {
                    if (e.key === "1") {
                        navigate(`${uri}/hr/profile`)
                    } else if (e.key === "2") {
                        navigate(`${uri}/hr/department`)
                    } else if (e.key === "3") {
                        navigate(`${uri}/hr/position`);
                    } else if(e.key === "4"){
                        let decoded = jwt_decode(TOKEN);
                        let {id} = decoded;
                        navigate(`${uri}/myprofile/${id}`)
                        dispatch(setIsLoading(true))
                    }
                }}
            />
        </div>
    )
}
