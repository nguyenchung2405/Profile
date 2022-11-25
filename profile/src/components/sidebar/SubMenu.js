import React from 'react'
import { Menu } from "antd"
import { MdPeopleOutline } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { BsFileEarmarkFill } from "react-icons/bs"
import { FcDepartment } from "react-icons/fc"
import { checkMicroFe } from '../../ultils/helper';

export default function SubMenu() {
    const navigate = useNavigate();
    let uri = checkMicroFe() === true ? "profile-service" : "";
    const positionIcon = () => {
        return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="currentColor" stroke="none">
                <path d="M2213 5110 c-210 -29 -362 -111 -469 -253 -97 -128 -134 -253 -134
        -452 l0 -127 -39 -45 c-143 -162 -59 -399 160 -447 22 -5 30 -17 54 -91 41
        -126 148 -268 233 -308 18 -8 22 -18 22 -52 0 -41 -1 -43 -38 -49 -24 -3 -49
        -17 -67 -36 -16 -16 -39 -30 -51 -30 -24 0 -421 -153 -492 -189 -54 -27 -127
        -111 -147 -169 -10 -30 -20 -112 -27 -233 -12 -209 -7 -232 55 -269 31 -19 56
        -20 823 -20 l792 0 12 -29 c15 -38 46 -66 92 -86 32 -13 106 -15 508 -15 442
        0 473 1 508 19 46 23 67 46 87 94 12 30 15 91 15 357 0 365 -2 374 -82 427
        -39 26 -50 28 -165 32 l-123 3 0 45 c0 57 -32 117 -79 146 -29 17 -55 22 -133
        25 -116 5 -182 -9 -221 -46 -41 -38 -57 -74 -57 -127 l0 -45 -119 0 c-116 0
        -123 1 -222 40 -57 22 -113 40 -124 40 -12 0 -30 9 -41 21 -24 27 -67 49 -94
        49 -17 0 -20 6 -20 43 1 39 4 44 56 82 94 67 193 220 210 324 6 37 10 41 43
        47 89 16 174 82 209 163 9 21 16 65 16 106 0 77 -19 126 -74 189 -30 33 -30
        35 -30 147 -1 223 -54 356 -151 376 -23 4 -29 13 -43 70 -30 123 -109 201
        -250 248 -68 23 -102 28 -211 31 -71 1 -158 -1 -192 -6z m-193 -666 c199 -123
        447 -122 631 2 28 19 59 34 69 34 25 0 67 -52 80 -98 16 -57 13 -565 -4 -627
        -24 -91 -58 -148 -130 -221 -55 -55 -86 -77 -141 -100 -64 -26 -80 -29 -190
        -29 -102 0 -129 4 -178 23 -117 47 -221 152 -269 270 -22 54 -23 71 -26 352
        -2 194 0 308 8 332 12 44 55 98 77 98 8 0 41 -16 73 -36z m-270 -389 c0 -154
        -1 -165 -19 -165 -54 0 -131 97 -131 165 0 50 40 117 85 142 22 13 46 23 53
        23 9 0 12 -40 12 -165z m1224 145 c87 -42 118 -151 67 -234 -25 -40 -74 -76
        -103 -76 -16 0 -18 15 -18 165 0 91 3 165 7 165 4 0 25 -9 47 -20z m-754 -899
        c63 -15 175 -13 243 3 43 10 59 11 61 2 2 -6 8 -30 13 -53 l10 -42 -86 -85
        c-80 -79 -90 -86 -126 -86 -37 0 -47 7 -128 88 -83 84 -87 90 -77 116 5 15 10
        39 10 52 0 20 4 24 18 20 9 -3 37 -10 62 -15z m1394 -62 c20 -16 26 -29 26
        -60 l0 -39 -145 0 -145 0 0 39 c0 31 6 44 26 60 23 18 41 21 119 21 78 0 96
        -3 119 -21z m-1447 -296 l-37 -38 -69 69 c-65 65 -69 71 -74 124 -10 99 3 97
        117 -17 l101 -101 -38 -37z m514 154 c-7 -55 -11 -62 -74 -125 l-67 -67 -37
        38 -38 37 100 100 c113 114 127 116 116 17z m1300 -86 c19 -15 24 -30 27 -88
        l4 -69 -158 -76 c-155 -73 -159 -75 -165 -53 -22 76 -80 123 -163 132 -105 11
        -188 -34 -218 -118 l-13 -36 -152 74 -153 75 0 69 c0 118 -40 109 504 109 439
        0 465 -1 487 -19z m-1588 -109 l26 -27 -20 -33 c-19 -29 -26 -32 -68 -32 -44
        0 -48 2 -63 34 -16 32 -16 34 10 60 36 35 80 35 115 -2z m-295 -101 c13 -7 36
        -10 51 -6 25 5 30 2 41 -25 11 -26 11 -56 1 -163 -17 -179 -11 -167 -82 -167
        -50 0 -59 3 -59 18 0 10 -9 105 -20 212 -11 107 -20 196 -20 199 0 3 15 -9 33
        -26 17 -17 42 -36 55 -42z m538 -148 l-20 -213 -61 0 -61 0 -16 153 c-13 132
        -14 156 -1 180 12 24 18 27 44 22 31 -7 79 16 114 55 10 11 19 19 20 18 1 -2
        -8 -99 -19 -215z m926 80 c34 -38 34 -115 2 -148 -21 -21 -112 -20 -136 2 -24
        22 -25 118 -1 145 22 25 113 25 135 1z m-1189 -107 c4 -40 10 -99 13 -130 l7
        -56 -58 0 -58 0 7 78 c17 188 15 182 51 182 l32 0 6 -74z"/>
                <path d="M2051 4074 c-12 -15 -21 -34 -21 -44 0 -10 9 -29 21 -44 40 -50 119
        -24 119 40 0 69 -78 101 -119 48z"/>
                <path d="M2532 4077 c-44 -46 -14 -117 48 -117 63 0 93 75 47 118 -30 28 -68
        28 -95 -1z"/>
                <path d="M2162 3768 c-7 -7 -12 -24 -12 -39 0 -52 100 -108 196 -109 60 0 147
        40 178 82 18 25 18 28 2 52 -21 33 -48 33 -92 -1 -23 -17 -51 -28 -82 -30 -40
        -4 -54 0 -92 26 -48 33 -78 39 -98 19z"/>
                <path d="M2526 2224 c-14 -13 -16 -48 -16 -230 l0 -214 -798 0 c-761 0 -800
        -1 -815 -18 -15 -16 -17 -46 -17 -210 0 -202 4 -222 50 -222 44 0 50 22 50
        191 l0 159 765 0 765 0 0 -159 c0 -169 6 -191 50 -191 44 0 50 22 50 191 l0
        159 765 0 765 0 0 -159 c0 -169 6 -191 50 -191 46 0 50 19 50 224 0 174 -2
        195 -18 209 -17 16 -88 17 -815 17 l-797 0 0 214 c0 228 -4 246 -50 246 -10 0
        -26 -7 -34 -16z"/>
                <path d="M850 1211 c-57 -19 -110 -53 -148 -97 -106 -119 -109 -295 -8 -418
        l36 -44 -46 -7 c-114 -17 -221 -99 -269 -208 -25 -54 -29 -77 -33 -187 -5
        -153 6 -203 51 -230 31 -19 54 -20 507 -20 453 0 476 1 507 20 46 28 57 77 50
        231 -4 110 -8 134 -32 187 -48 107 -156 190 -268 207 l-45 7 39 51 c96 126 91
        294 -13 411 -60 69 -125 99 -223 102 -44 2 -91 0 -105 -5z m187 -112 c154 -75
        163 -299 15 -386 -67 -40 -157 -40 -224 0 -148 87 -139 310 14 386 57 28 137
        28 195 0z m219 -576 c52 -28 108 -90 125 -139 8 -24 14 -85 14 -159 l0 -120
        -62 -3 -63 -3 0 104 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -103
        -230 0 -230 0 0 103 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -104
        -62 3 -63 3 0 120 c0 74 6 135 14 159 24 68 94 133 171 157 14 4 142 7 285 6
        246 -2 262 -3 301 -24z"/>
                <path d="M2470 1211 c-57 -19 -110 -53 -148 -97 -106 -119 -109 -295 -8 -418
        l36 -44 -46 -7 c-114 -17 -221 -99 -269 -208 -25 -54 -29 -77 -33 -187 -5
        -153 6 -203 51 -230 31 -19 54 -20 507 -20 453 0 476 1 507 20 46 28 57 77 50
        231 -4 110 -8 134 -32 187 -48 107 -156 190 -268 207 l-45 7 39 51 c96 126 91
        294 -13 411 -60 69 -125 99 -223 102 -44 2 -91 0 -105 -5z m187 -112 c154 -75
        163 -299 15 -386 -67 -40 -157 -40 -224 0 -148 87 -139 310 14 386 57 28 137
        28 195 0z m219 -576 c52 -28 108 -90 125 -139 8 -24 14 -85 14 -159 l0 -120
        -62 -3 -63 -3 0 104 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -103
        -230 0 -230 0 0 103 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -104
        -62 3 -63 3 0 120 c0 74 6 135 14 159 24 68 94 133 171 157 14 4 142 7 285 6
        246 -2 262 -3 301 -24z"/>
                <path d="M4090 1211 c-57 -19 -110 -53 -148 -97 -106 -119 -109 -295 -8 -418
        l36 -44 -46 -7 c-114 -17 -221 -99 -269 -208 -25 -54 -29 -77 -33 -187 -5
        -153 6 -203 51 -230 31 -19 54 -20 507 -20 453 0 476 1 507 20 46 28 57 77 50
        231 -4 110 -8 134 -32 187 -48 107 -156 190 -268 207 l-45 7 39 51 c96 126 91
        294 -13 411 -60 69 -125 99 -223 102 -44 2 -91 0 -105 -5z m187 -112 c154 -75
        163 -299 15 -386 -67 -40 -157 -40 -224 0 -148 87 -139 310 14 386 57 28 137
        28 195 0z m219 -576 c52 -28 108 -90 125 -139 8 -24 14 -85 14 -159 l0 -120
        -62 -3 -63 -3 0 104 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -103
        -230 0 -230 0 0 103 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -104
        -62 3 -63 3 0 120 c0 74 6 135 14 159 24 68 94 133 171 157 14 4 142 7 285 6
        246 -2 262 -3 301 -24z"/>
            </g>
        </svg>
    }

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

        ])
    ]

    return (
        <div className="sidebar_SubMenu__XZeb6">
            <Menu
                defaultOpenKeys={[`sub1`]}
                mode='inline'
                items={items}
                onClick={(e) => {
                    if (e.key === "1") {
                        navigate(`${uri}/hr/profile`)
                    } else if (e.key === "2") {
                        navigate(`${uri}/hr/department`)
                    } else if (e.key === "3") {
                        navigate(`${uri}/hr/position`);
                    }
                }}
            />
        </div>
    )
}
