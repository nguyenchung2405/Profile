import React from 'react'
import { Menu } from "antd"
import { MdPeopleOutline } from "react-icons/md"
import { Link } from "react-router-dom";
import { BsFileEarmarkFill } from "react-icons/bs"
import { FcDepartment } from "react-icons/fc"
import { checkMicroFe } from '../../ultils/helper';
import {ImProfile} from "react-icons/im"
import jwt_decode from "jwt-decode";
import {TOKEN} from "../../title/title"

export default function SubMenu() {
    
    let uri = checkMicroFe() === true ? "profile-service" : "";

    const getItem = (label, key, icon, children) => {
        return {
            label,
            key,
            icon,
            children
        }
    }

    const positionItem = ()=>(
            <svg stroke="currentColor" fill="currentColor" color="currentColor" version="1.0" xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 512.000000 512.000000"
    preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M4310 4783 c-105 -18 -229 -80 -299 -152 -100 -100 -141 -208 -141
        -367 0 -325 178 -563 452 -605 237 -37 466 112 555 362 22 62 27 96 31 206 4
        115 1 141 -17 203 -28 93 -70 158 -138 219 -118 105 -295 159 -443 134z m144
        -238 c59 -10 130 -49 165 -92 97 -117 74 -369 -44 -488 -50 -49 -90 -67 -165
        -73 -155 -11 -268 97 -300 288 -26 154 15 267 119 328 45 26 142 53 171 47 8
        -2 33 -6 54 -10z"/>
        <path d="M2420 4114 c-180 -48 -322 -184 -364 -349 -20 -75 -20 -237 -1 -330
        22 -106 76 -206 154 -285 101 -103 212 -150 351 -150 139 0 250 47 351 150
        115 117 169 262 169 454 0 161 -43 276 -141 374 -63 63 -152 113 -245 137 -73
        19 -201 18 -274 -1z m267 -244 c134 -57 188 -195 149 -375 -35 -164 -137 -260
        -276 -260 -169 0 -288 153 -290 371 -1 219 210 353 417 264z"/>
        <path d="M655 3474 c-152 -37 -223 -72 -306 -154 -106 -105 -138 -192 -139
        -375 0 -131 18 -213 67 -313 99 -200 318 -319 526 -284 272 47 447 283 447
        606 0 245 -115 408 -345 492 -64 23 -205 39 -250 28z m140 -239 c84 -14 169
        -80 202 -156 32 -75 23 -232 -19 -327 -29 -64 -90 -126 -150 -152 -42 -18 -65
        -21 -118 -18 -75 6 -115 24 -165 73 -118 119 -141 371 -44 488 17 21 50 47 72
        59 45 23 142 48 167 43 8 -2 33 -6 55 -10z"/>
        <path d="M4216 3434 c-164 -41 -310 -142 -385 -266 -40 -68 -58 -135 -115
        -443 -62 -336 -62 -353 4 -398 22 -15 64 -17 403 -17 415 0 421 1 452 60 19
        37 19 73 0 110 -30 57 -45 60 -365 60 l-290 0 5 23 c2 12 21 110 40 217 40
        217 63 277 125 334 191 172 563 124 667 -86 14 -27 42 -152 78 -343 31 -164
        61 -307 66 -316 43 -82 174 -75 209 11 12 30 10 52 -19 214 -73 401 -88 467
        -126 543 -64 129 -192 232 -350 283 -90 29 -308 37 -399 14z"/>
        <path d="M2425 2786 c-231 -46 -395 -173 -463 -358 -12 -31 -47 -195 -78 -365
        l-57 -307 19 -36 c37 -69 46 -70 444 -69 248 0 365 4 390 12 40 14 80 67 80
        107 0 40 -40 93 -80 107 -24 8 -125 12 -313 12 l-279 1 6 28 c3 15 22 111 41
        214 40 210 43 222 85 283 62 91 190 145 340 145 157 0 280 -55 347 -156 37
        -56 46 -92 128 -536 30 -166 44 -191 106 -208 53 -14 106 10 133 60 l19 36
        -57 307 c-60 326 -78 391 -134 475 -69 106 -209 199 -357 237 -86 22 -236 27
        -320 11z"/>
        <path d="M543 2120 c-200 -52 -350 -178 -412 -345 -18 -49 -131 -623 -131
        -667 0 -32 29 -77 60 -93 24 -13 89 -15 405 -15 334 0 380 2 405 17 73 43 73
        153 0 196 -24 15 -65 17 -319 17 -160 0 -291 3 -291 7 0 44 86 448 103 481
        126 254 609 253 731 -1 18 -37 40 -133 76 -327 63 -347 56 -318 95 -357 43
        -43 98 -46 144 -7 56 46 55 64 -5 387 -30 161 -62 316 -71 346 -53 172 -235
        322 -442 366 -100 21 -258 19 -348 -5z"/>
        <path d="M3738 1879 c-14 -6 -159 -153 -323 -330 l-296 -319 -599 0 c-399 0
        -607 -4 -622 -11 -13 -5 -153 -154 -313 -329 l-290 -319 -590 -1 c-429 -1
        -599 -4 -624 -13 -48 -17 -76 -58 -76 -113 0 -36 6 -49 33 -76 l32 -33 642 -3
        c477 -2 650 0 671 9 16 7 156 152 324 336 l295 323 602 0 602 0 31 23 c17 12
        156 157 309 322 l278 300 606 5 c679 6 645 2 677 78 13 32 14 42 2 76 -8 22
        -27 49 -42 60 -28 21 -36 21 -665 23 -401 1 -647 -2 -664 -8z"/>
        </g>
        </svg>
    )

    const items = [
        getItem("Nhân sự", "sub1", <MdPeopleOutline />, [
            getItem(<Link to={`${uri}/hr/profile`}>Hồ sơ</Link>, "1", <BsFileEarmarkFill />),
            getItem(<Link to={`${uri}/hr/department`}>Bộ phận công tác</Link>, "2", <FcDepartment />),
            getItem(<Link to={`${uri}/hr/position`}>Chức danh, chức vụ</Link>, "3", positionItem()),
            getItem(<Link to={`${uri}/myprofile/${jwt_decode(TOKEN)?.id}`}>Thông tin cá nhân</Link>, "4", <ImProfile />)
        ])
    ]

    const renderSubMenu  = ()=>{
        if(uri === "profile-service"){
            return items;
        } else {
            return <div className="sidebar_SubMenu__XZeb6">
            <Menu
                // defaultOpenKeys={[`sub1`]}
                mode='inline'
                items={items}
            />
            </div>
        }
    }

    return (
       <>{renderSubMenu()}</>
    )
}
