import React from 'react'
import { Menu } from "antd"
import { MdPeopleOutline } from "react-icons/md"
import { Link } from "react-router-dom";
import { BsFileEarmarkFill } from "react-icons/bs"
import { FcDepartment } from "react-icons/fc"
import { checkMicroFe } from '../../ultils/helper';
import { ImProfile } from "react-icons/im"
import jwt_decode from "jwt-decode";
import { TOKEN } from "../../title/title"
import { useSelector } from 'react-redux';
let userPermissionApi = []
let userPermission = [];
export default function SubMenu(permission) {
    let uri = checkMicroFe() === true ? "profile-service" : "";
    if (permission !== undefined) {
        userPermissionApi = permission[2];
    }
    if (uri === "") {
        userPermission = useSelector(state => state.permissionReducer.userPermission);
    }

    const getItem = (label, key, icon, children) => {
        return {
            label,
            key,
            icon,
            children
        }
    }

    const PositionItem = () => (
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

    const PermissionMenu = () => (
        <svg height="1em" width="1em" className='ant-menu-item-icon' stroke="currentColor" color="currentColor" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
            <g><path d="M211.1,990l-89.6-1.4c-15.5,0-22.2-13.7-28.5-38.4l-1.3,0.2l-3-17.1c-0.3-1.6-0.5-3-0.7-4.4l-0.3-1.7l0.1,0l-7.5-42.6c-3.8-22,2.9-52.4,15.5-70.8L356.3,438c-17.3-37.2-31-83.7-36.1-113.1c-29-166.4,112.4-284.1,260.1-310.5c16.7-3,33.7-4.5,50.4-4.5C771.1,10,890.6,111.4,915,251.1c26.1,149.2-35.1,323.6-199.9,353c-21.6,3.9-50,6.1-77.9,6.1h0c-17.7,0-34.4-0.9-49-2.7L465.5,800.1l-92.2-7.2L273.1,949.4c-12.2,19.1-38.1,36.4-60.2,40.3L211.1,990z M132.7,951.1l75.2,1.1c11.5-2.7,27.3-13.5,33.4-23.2l106.8-166.7l6.2-7.7l10.7-0.3l80.8,6.3l123.8-194.2l12.3,2.1c15.1,2.6,34.2,4,55.1,4h0c25.4,0,52-2.1,71.3-5.5C849.3,542,900.8,388.9,877.8,257.6C856.6,136,752.7,47.7,630.7,47.7c-14.6,0-29.3,1.3-43.8,3.9C457,74.7,332.4,176.1,357.3,318.5c5.1,29.4,19.7,77.5,37.6,112.7l5.1,10l-273.1,394c-7,10.2-11.5,30.6-9.4,42.9l7.4,42.2c0.1,0.6,0.3,1.3,0.5,2C128.6,937.3,131,946.1,132.7,951.1z M722,378.2c-29,0-56.2-19.8-87.6-42.8c-5.9-4.3-12-8.8-18.3-13.3c-6.3-4.4-12.5-8.7-18.5-12.8C562,285,531.3,264,525.3,231.3c-3.5-18.8,2-38.3,16.6-59.4c27.4-39.5,72.3-63.1,120.1-63.1c30.1,0,59.2,9.3,83.9,26.8c66.1,46.7,82.2,138.9,35.9,205.6C764.5,366.1,744.9,378.2,722,378.2z M662,146.5c-35.4,0-68.8,17.5-89.1,46.9c-8.6,12.5-12.1,22.6-10.5,31.1c3.2,17.3,27.9,34.2,56.5,53.8c6.2,4.2,12.6,8.6,19,13.2c6.5,4.6,12.8,9.2,18.8,13.6c25,18.3,48.6,35.5,65.3,35.5c6.2,0,15.9-2.2,28.9-20.8c34.5-49.7,22.5-118.5-26.7-153.3C705.7,153.4,684.3,146.5,662,146.5z" /></g>
        </svg>
    )

    const PermissionPosition = () => (
        <svg stroke="currentColor" color="currentColor" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
            <g><path d="M601.8,423.2c40.8-17.2,83.8-26,128.4-26c4.4,0,8.8,0.2,13.2,0.2c20.9-52.8,26.2-115.2,15.7-175.9C734.9,82.3,603.6-10.7,465.6,13.8C327.7,38.3,211.4,145.5,235.9,284.6c5.2,30.1,19.7,76.9,36.9,110.8L22.5,756.6c-9.2,13.2-14.5,37.1-11.7,53.4l10.9,61.8c-10.3-59.5,2.9,21.4,10.9,21.2l82.5,1.1c15.9-2.9,35.8-16.3,44.6-29.9l99-154.8l1-1l86.5,6.9l115.6-181.3c0.4,0,0.8,0.2,1.1,0.2c10.3-14.2,21.6-27.6,34.3-40.2C527.2,463.6,562.6,439.8,601.8,423.2z M76.6,794.7l-12.3,5.2l1.3-13.4l239.8-348.2l14.4,13.4L76.6,794.7z M441.1,154.1c37.9-54.6,112.5-68.1,166.5-29.7c54.2,38.5,67.4,113.9,29.5,168.4c-37.9,54.5-76.6,16.1-130.7-22.2C452.3,232.2,403.2,208.8,441.1,154.1z" /><path d="M727,464.2c-145.3,0-263,117.7-263,263s117.7,263,263,263c145.3,0,263-117.7,263-263C990,581.9,872.3,464.2,727,464.2z M879,835.1c0,39.2-75.2,48.2-145.8,48.2c-70.6,0-146.8-9-146.8-48.2v-10.9c0-28.9,52.1-58.2,96.3-74.1c3.3-1.1,18.6-9.6,10-32c-22-22.4-38.5-58.8-38.5-94.6c0-54.7,36.2-83.5,78.7-83.5c42.3,0,78.9,28.7,78.9,83.5c0,35.6-16.7,71.8-38.5,94.4h0.2c-8.4,25.5,5,31.6,7.1,32.2c46.5,15.3,98.8,44.4,98.8,74.1L879,835.1L879,835.1z" /></g>
        </svg>
    )

    const PermissionDepPos = () => (
        <svg stroke="currentColor" color="currentColor" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
            <g><path d="M446.1,154.9c38.5-54.6,114.1-68.6,168.7-30.1c54.6,39.2,68,114.7,29.4,169.4c-37.8,55.3-77,16.1-132.4-22.4C457.2,233.2,407.5,210.1,446.1,154.9z M77.2,798.8l-11.9,4.9l1.5-13.3l242.1-350l14.7,13.3L77.2,798.8z M468.5,536.9c10.5-13.9,21.7-27.2,34.3-40.5c30.8-30.2,66.5-54.6,105.7-70.8c41.3-17.5,85.4-26.5,130.2-26.5h13.3c21.1-52.4,26.7-115.5,16.2-176.4C743.6,82.8,610.6-11,470.6,14.2C331.3,38.7,213.8,146.5,238.1,286.4c5.7,30.1,20.3,77,37.8,111.3L22.6,760.4c-9.1,13.3-14.7,37.7-11.9,53.8L22,876.5c-2.9-16.1-4.2-22.3-4.2-22.3c0.7,0,9,43.3,15.4,43.3l83.3,1.5c16.1-2.8,36.4-16.1,44.8-30.2l100-155.3l1.5-1.5l87.4,7.1l116.9-182.1H468.5z M813.6,764.4c-20.4,47.7-75.6,70-123.9,50.5c-48.4-20.3-70.7-75.6-50.4-123.3c19.6-48.3,75.6-70.7,123.2-50.4C810.7,661.6,833.8,716.2,813.6,764.4z M920.6,699.3l69.4-43.3l-25.9-62.3l-79.2,18.8c-11.2-16.1-25.2-29.4-41.2-41.3l18.2-79l-63.1-26l-42.6,68c-19.6-2.8-39.2-2.8-58.1,0l-42.8-68.6l-62.9,25.2l17.5,79.2c-16.1,11.2-30.2,25.1-42,40.6l-78.4-18.2l-26.6,62.3l67.9,43.4c-2.7,19.5-2.7,39.2,0,58.1l-68.6,42.7l25.9,62.3l79.2-17.5c11.2,15.4,25.2,29.4,41.2,41.2l-18.8,78.5l62.9,25.9l44.2-68c19.6,2.9,39.2,2.9,58.1,0l43.3,68.7l63-25.9L843,884.9c15.4-11.2,28.7-24.4,40.6-40.6l79.7,18.2l26.6-62.3l-69.4-42.7C923.4,737.9,923.4,719,920.6,699.3z" /></g>
        </svg>
    )

    const PermissionManagement = () => {
        return <svg stroke="currentColor" color="currentColor" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000"
            enableBackground="new 0 0 1000 1000" xmlSpace="preserve">
            <g><path d="M968.9,481.4c-1.3,10.5-2.9,21.4-5,31.8l-5.2,24.8l-25.3-1.1c-3.3-0.1-6.6-0.2-10-0.2c-72.2,0-140.6,33.6-193.6,81c-4.3,3.8-8.9,9.9-12.4,14.5c-6.9,8.9-13.5,18.2-19.9,27.4c-17.4,24.9-34.2,50.3-50.7,75.8c-16.7,25.7-33.1,51.6-49.3,77.6l-9.5,15.3l-80.6-5.5L405.3,973.2l-7.5,3.5C373.7,987.9,340,990,313.6,990c-9.9,0-20-0.2-29.9-1l-17.7-1.4l-7.3-16.2c-14.3-31.8-19.2-70.8-22.3-105.2c-0.2-1.9-0.3-3.9-0.5-5.8c-0.4-2.3-0.6-4.7-0.4-7l-23.4,34.5l-9.9,4.6c-25.6,12-60.3,14.2-88.2,14.2c-10.1,0-20.5-0.2-30.6-1l-23.3-1.8l-9.6-21.3c-14.7-32.9-19.9-72.7-23.1-108.3c-0.2-1.7-0.3-3.5-0.5-5.3c-3-17.7,6.6-30.6,15.8-44.7c9-13.8,18.2-27.5,27.4-41.1c27.3-40.3,55-80.4,82.7-120.4c35.6-51.4,71.4-102.7,107.2-154c-20.6-46.3-32.4-97.1-29-148c1.4-20.7,6-47.7,15-66.9c31.1-66.2,78.4-119.6,144.4-152C434,20.6,482.7,10,531,10c13.1,0,26.9,0.7,39.9,2.8c66,10.9,121.3,42.3,159.2,97.8c0.4,0.6,0.8,1.1,1.1,1.7c12.4,0,25.4,0.7,37.6,2.7c63.4,10.5,116.4,40.4,152.9,93.8c39.3,57.4,51.6,129.7,51.8,198.1C973.6,431.8,972,456.8,968.9,481.4z M561.1,71.8c-2.9-0.5-13.7-2-30.1-2c-59.9,0-169.6,19.4-230.7,149.6c-0.3,0.7-8.4,19.2-9.7,50.5c-1.2,29.3,3.6,76.3,33.2,133.3l5.7,10.9l-7.1,10.1C239.3,542.8,106.9,733.4,86.9,766.4c0.1,0.8,0.1,1.6,0.2,2.6c1.4,15.9,4.5,50.4,13.7,77.8c3.8,0.1,8.4,0.2,13.3,0.2c25.2,0,45.5-2.4,58.2-6.7l110.2-162.3l63.2,4.3c4.9-7.1,9.8-14.1,14.7-21.2c36.6-52.9,73.4-105.7,110.3-158.4c-21.4-46.2-33.8-97.2-30.4-148.3c1-15,3.4-30.1,7.4-44.5c-3.4-2.8-6.9-5.5-10.3-8.3c-23.1-18.5-55.1-41.6-57.7-73.6c-1.2-14.8,3.8-28.8,13.8-39.8c38.2-42.5,94.1-74.2,152.3-74.2c25.6,0,50.4,6.2,71.8,19.4c14-5.4,28.4-9.8,43.1-13.1C635,94.7,601.7,78.5,561.1,71.8z M474.1,254.3c19.3-31.2,43-58.5,71.7-80.7c-35.8,0-74.7,19.1-104.9,51.2C446.3,232,461.9,244.6,474.1,254.3z M880.2,237.1c-27-39.5-67.3-63.9-119.5-72.5c-2.9-0.5-13.7-2-30.1-2c-59.9,0-169.6,19.4-230.7,149.6c-0.3,0.7-8.4,19.2-9.7,50.5c-1.2,29.3,3.6,76.3,33.2,133.3l5.7,10.9l-7.1,10.1c-83.1,118.6-215.5,309.2-235.5,342.2c0.1,0.8,0.1,1.6,0.2,2.6c1.4,15.9,4.5,50.4,13.7,77.8c3.8,0.1,8.4,0.2,13.3,0.2c25.2,0,45.5-2.4,58.2-6.7l110.2-162.3l79.3,5.4c25.5-40.8,108.6-172.3,135-195.8c38.4-34.4,117.7-91.5,221.1-93.7C924,442.4,935.8,318.2,880.2,237.1z M812.2,477.2c-8.7,9.7-20.2,15.3-33.3,15.3c-2.4,0-4.8-0.2-7.2-0.6c-12-1.9-22.3-8.3-31.6-15.9c-10.8-8.8-20.7-19.3-30.4-29.3c-10.7-11.1-21.4-22.2-32.9-32.5c-11-9.8-22.4-19.1-33.9-28.3c-11.6-9.3-23.8-18.8-34.1-29.4c-8.7-8.9-16.4-19.3-19.1-31.7c-0.4-1.9-0.7-3.9-0.9-5.9c-1-12.2,3.2-23.6,11.4-32.7c36.3-40.4,89.7-71,145.2-71c30.7,0,60.1,9.5,83.1,30.2c31.2,28,42.8,70.2,39.1,111C863.4,401.5,842.1,444,812.2,477.2z M794.8,283c-12.6-11.4-29.8-17.4-49.6-17.4c-35.8,0-74.7,19.1-104.9,51.2c5.6,7.3,21.7,20.2,33.9,30c11.1,8.9,23.6,18.9,36.1,30.1c13.3,12,25.1,24.2,35.5,35c10.3,10.6,23.8,24.7,31.2,29.2c23.3-26.8,37.6-58.3,40.4-89C820.1,323,812.1,298.5,794.8,283z M562.7,593.4L562.7,593.4L413.8,802c-0.1,0.1-0.1,0.2-0.2,0.3c-9.8,13.5-29,19.3-43.3,9.2c-14.3-10.2-15.1-30.3-5.3-44l149.2-208.9c9.7-13.6,29.1-19.5,43.4-9.3c14.3,10.2,15.1,30.3,5.3,44L562.7,593.4z M382.9,508.9l-0.3,0.4l0,0.1L233.8,717.8c-0.1,0.1-0.1,0.2-0.2,0.3c-12.9,17.8-38,24.6-56.6,11.3c-18.7-13.3-20.4-39.3-7.5-57.4l149.2-208.9c12.8-17.9,38.1-24.8,56.7-11.5C394,464.9,395.8,490.9,382.9,508.9z" /></g>
        </svg>
    }

    const items = [
        getItem("Nhân sự", "sub-menu-1", <MdPeopleOutline />, [
            getItem(<Link to={`${uri}/hr/profile`}>Hồ sơ</Link>, "1", <BsFileEarmarkFill />),
            getItem(<Link to={`${uri}/hr/department`}>Bộ phận công tác</Link>, "2", <FcDepartment />),
            getItem(<Link to={`${uri}/hr/position`}>Chức danh, chức vụ</Link>, "3", <PositionItem />),
            getItem(<Link to={`${uri}/myprofile/${jwt_decode(TOKEN)?.id}`}>Thông tin cá nhân</Link>, "4", <ImProfile />),
        ]),
        getItem("Quyền", "sub-menu-2", <PermissionMenu />, [
            getItem(<Link to={`${uri}/hr/permission/manage`}>Quản lý quyền</Link>, "5", <PermissionManagement />),
            getItem(<Link to={`${uri}/hr/permission/position`}>Quyền chức vụ</Link>, "6", <PermissionPosition />),
            getItem(<Link to={`${uri}/hr/permission/department-position`}>Quyền PB - CV</Link>, "7", <PermissionDepPos />),
        ])
    ];

    const items_user = [
        getItem("Nhânn sự", "sub-menu-1", <MdPeopleOutline />, [
            getItem(<Link to={`${uri}/myprofile/${jwt_decode(TOKEN)?.id}`}>Thông tin cá nhân</Link>, "4", <ImProfile />),
        ])
    ];

    const renderSubMenu = () => {
        // return items;
        let subMenu = [];
        let menu_profile = [getItem("Nhân sự", "sub-menu-1", <MdPeopleOutline />, subMenu)];
        let subMenu_Per = [];
        let menu_permission = [getItem("Quyền", "sub-menu-2", <PermissionMenu />, subMenu_Per)];
        if (uri !== "") {
            for (let item of userPermissionApi) {
                for (let itemHave of item.groups) {
                    for (let perUser of itemHave.permission) {
                        userPermission.push(perUser.name.toLowerCase())
                    }
                }
            }
        }

        if (userPermission.length > 0) {
            if (uri === "profile-service") {
                if (userPermission.includes("xem danh sách user")) {
                    subMenu.push(getItem(<Link to={`${uri}/hr/profile`}>Hồ sơ</Link>, "1", <BsFileEarmarkFill />))
                }
                if (userPermission.includes("xem danh sách phòng ban")) {
                    subMenu.push(getItem(<Link to={`${uri}/hr/department`}>Bộ phận công tác</Link>, "2", <FcDepartment />))
                }
                if (userPermission.includes("xem danh sách chức vụ")) {
                    subMenu.push(getItem(<Link to={`${uri}/hr/position`}>Chức danh, chức vụ</Link>, "3", <PositionItem />))
                }
                if (userPermission.includes("xem danh sách quyền")) {
                    subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/manage`}>Quản lý quyền</Link>, "5", <PermissionManagement />))
                }
                if (userPermission.includes("xem danh sách chức vu đã được gán quyền")) {
                    subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/position`}>Quyền chức vụ</Link>, "6", <PermissionPosition />))
                }
                if (userPermission.includes("xem danh sách chức vụ và phòng ban đã được gán quyền")) {
                    subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/department-position`}>Quyền PB - CV</Link>, "7", <PermissionDepPos />))
                }
                subMenu.push(getItem(<Link to={`${uri}/myprofile/${jwt_decode(TOKEN)?.id}`}>Thông tin cá nhân</Link>, "4", <ImProfile />))
                return menu_profile.concat(menu_permission)

            } else {

                if (userPermission.includes("xem danh sách user")) {
                    subMenu.push(getItem(<Link to={`${uri}/hr/profile`}>Hồ sơ</Link>, "1", <BsFileEarmarkFill />))
                }
                if (userPermission.includes("xem danh sách phòng ban")) {
                    subMenu.push(getItem(<Link to={`${uri}/hr/department`}>Bộ phận công tác</Link>, "2", <FcDepartment />))
                }
                if (userPermission.includes("xem danh sách chức vụ")) {
                    subMenu.push(getItem(<Link to={`${uri}/hr/position`}>Chức danh, chức vụ</Link>, "3", <PositionItem />))
                }
                if (userPermission.includes("xem danh sách quyền")) {
                    subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/manage`}>Quản lý quyền</Link>, "5", <PermissionManagement />))
                }
                if (userPermission.includes("xem danh sách chức vu đã được gán quyền")) {
                    subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/position`}>Quyền chức vụ</Link>, "6", <PermissionPosition />))
                }
                if (userPermission.includes("xem danh sách chức vụ và phòng ban đã được gán quyền")) {
                    subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/department-position`}>Quyền PB - CV</Link>, "7", <PermissionDepPos />))
                }
                subMenu.push(getItem(<Link to={`${uri}/myprofile/${jwt_decode(TOKEN)?.id}`}>Thông tin cá nhân</Link>, "4", <ImProfile />))
                
                    return <div className="sidebar_SubMenu__XZeb6">
                        <Menu
                            // defaultOpenKeys={[`sub1`]}
                            mode='inline'
                            items={menu_profile.concat(menu_permission)}
                        />
                    </div>
                

            }
        } else {
            if (uri !== "") {
                return items_user;
            } else {
                return <div className="sidebar_SubMenu__XZeb6">
                    <Menu
                        // defaultOpenKeys={[`sub1`]}
                        mode='inline'
                        items={menu_profile.concat(menu_permission)}
                    />
                </div>
            }


        }
    }

    return (
        <>{renderSubMenu()}</>
    )
}
