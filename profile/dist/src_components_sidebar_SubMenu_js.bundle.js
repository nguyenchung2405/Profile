"use strict";
(self["webpackChunkprofile"] = self["webpackChunkprofile"] || []).push([["src_components_sidebar_SubMenu_js"],{

/***/ "./src/components/sidebar/SubMenu.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/SubMenu.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SubMenu; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "webpack/sharing/consume/default/antd/antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.esm.js");
/* harmony import */ var _ultils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ultils/helper */ "./src/ultils/helper.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "webpack/sharing/consume/default/jwt-decode/jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../title/title */ "./src/title/title.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");













function SubMenu() {
  var _jwt_decode;

  var uri = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_3__.checkMicroFe)() === true ? "profile-service" : "";

  var getItem = function getItem(label, key, icon, children) {
    return {
      label: label,
      key: key,
      icon: icon,
      children: children
    };
  };

  var positionItem = function positionItem() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
      stroke: "currentColor",
      fill: "currentColor",
      color: "currentColor",
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512.000000 512.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("g", {
        transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
        stroke: "none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M4310 4783 c-105 -18 -229 -80 -299 -152 -100 -100 -141 -208 -141 -367 0 -325 178 -563 452 -605 237 -37 466 112 555 362 22 62 27 96 31 206 4 115 1 141 -17 203 -28 93 -70 158 -138 219 -118 105 -295 159 -443 134z m144 -238 c59 -10 130 -49 165 -92 97 -117 74 -369 -44 -488 -50 -49 -90 -67 -165 -73 -155 -11 -268 97 -300 288 -26 154 15 267 119 328 45 26 142 53 171 47 8 -2 33 -6 54 -10z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M2420 4114 c-180 -48 -322 -184 -364 -349 -20 -75 -20 -237 -1 -330 22 -106 76 -206 154 -285 101 -103 212 -150 351 -150 139 0 250 47 351 150 115 117 169 262 169 454 0 161 -43 276 -141 374 -63 63 -152 113 -245 137 -73 19 -201 18 -274 -1z m267 -244 c134 -57 188 -195 149 -375 -35 -164 -137 -260 -276 -260 -169 0 -288 153 -290 371 -1 219 210 353 417 264z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M655 3474 c-152 -37 -223 -72 -306 -154 -106 -105 -138 -192 -139 -375 0 -131 18 -213 67 -313 99 -200 318 -319 526 -284 272 47 447 283 447 606 0 245 -115 408 -345 492 -64 23 -205 39 -250 28z m140 -239 c84 -14 169 -80 202 -156 32 -75 23 -232 -19 -327 -29 -64 -90 -126 -150 -152 -42 -18 -65 -21 -118 -18 -75 6 -115 24 -165 73 -118 119 -141 371 -44 488 17 21 50 47 72 59 45 23 142 48 167 43 8 -2 33 -6 55 -10z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M4216 3434 c-164 -41 -310 -142 -385 -266 -40 -68 -58 -135 -115 -443 -62 -336 -62 -353 4 -398 22 -15 64 -17 403 -17 415 0 421 1 452 60 19 37 19 73 0 110 -30 57 -45 60 -365 60 l-290 0 5 23 c2 12 21 110 40 217 40 217 63 277 125 334 191 172 563 124 667 -86 14 -27 42 -152 78 -343 31 -164 61 -307 66 -316 43 -82 174 -75 209 11 12 30 10 52 -19 214 -73 401 -88 467 -126 543 -64 129 -192 232 -350 283 -90 29 -308 37 -399 14z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M2425 2786 c-231 -46 -395 -173 -463 -358 -12 -31 -47 -195 -78 -365 l-57 -307 19 -36 c37 -69 46 -70 444 -69 248 0 365 4 390 12 40 14 80 67 80 107 0 40 -40 93 -80 107 -24 8 -125 12 -313 12 l-279 1 6 28 c3 15 22 111 41 214 40 210 43 222 85 283 62 91 190 145 340 145 157 0 280 -55 347 -156 37 -56 46 -92 128 -536 30 -166 44 -191 106 -208 53 -14 106 10 133 60 l19 36 -57 307 c-60 326 -78 391 -134 475 -69 106 -209 199 -357 237 -86 22 -236 27 -320 11z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M543 2120 c-200 -52 -350 -178 -412 -345 -18 -49 -131 -623 -131 -667 0 -32 29 -77 60 -93 24 -13 89 -15 405 -15 334 0 380 2 405 17 73 43 73 153 0 196 -24 15 -65 17 -319 17 -160 0 -291 3 -291 7 0 44 86 448 103 481 126 254 609 253 731 -1 18 -37 40 -133 76 -327 63 -347 56 -318 95 -357 43 -43 98 -46 144 -7 56 46 55 64 -5 387 -30 161 -62 316 -71 346 -53 172 -235 322 -442 366 -100 21 -258 19 -348 -5z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M3738 1879 c-14 -6 -159 -153 -323 -330 l-296 -319 -599 0 c-399 0 -607 -4 -622 -11 -13 -5 -153 -154 -313 -329 l-290 -319 -590 -1 c-429 -1 -599 -4 -624 -13 -48 -17 -76 -58 -76 -113 0 -36 6 -49 33 -76 l32 -33 642 -3 c477 -2 650 0 671 9 16 7 156 152 324 336 l295 323 602 0 602 0 31 23 c17 12 156 157 309 322 l278 300 606 5 c679 6 645 2 677 78 13 32 14 42 2 76 -8 22 -27 49 -42 60 -28 21 -36 21 -665 23 -401 1 -647 -2 -664 -8z"
        })]
      })
    });
  };

  var items = [getItem("Nhân sự", "sub1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdPeopleOutline, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/profile"),
    children: "H\u1ED3 s\u01A1"
  }), "1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsFileEarmarkFill, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/department"),
    children: "B\u1ED9 ph\u1EADn c\xF4ng t\xE1c"
  }), "2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_9__.FcDepartment, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/position"),
    children: "Ch\u1EE9c danh, ch\u1EE9c v\u1EE5"
  }), "3", positionItem()), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/myprofile/").concat((_jwt_decode = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode === void 0 ? void 0 : _jwt_decode.id),
    children: "Th\xF4ng tin c\xE1 nh\xE2n"
  }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_10__.ImProfile, {}))])];

  var renderSubMenu = function renderSubMenu() {
    if (uri === "profile-service") {
      return items;
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "sidebar_SubMenu__XZeb6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu // defaultOpenKeys={[`sub1`]}
        , {
          mode: "inline",
          items: items
        })
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: renderSubMenu()
  });
}

/***/ }),

/***/ "./src/title/title.js":
/*!****************************!*\
  !*** ./src/title/title.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATE_DEPARTMENT": function() { return /* binding */ CREATE_DEPARTMENT; },
/* harmony export */   "CREATE_FAMILY_RELATIONSHIP": function() { return /* binding */ CREATE_FAMILY_RELATIONSHIP; },
/* harmony export */   "CREATE_ORGANIZATION": function() { return /* binding */ CREATE_ORGANIZATION; },
/* harmony export */   "CREATE_PARTY": function() { return /* binding */ CREATE_PARTY; },
/* harmony export */   "CREATE_PERSONAL_HISTORY": function() { return /* binding */ CREATE_PERSONAL_HISTORY; },
/* harmony export */   "CREATE_POSITION_AND_MANAGEMENT": function() { return /* binding */ CREATE_POSITION_AND_MANAGEMENT; },
/* harmony export */   "CREATE_POSITION_TYPE": function() { return /* binding */ CREATE_POSITION_TYPE; },
/* harmony export */   "CREATE_PROFILE": function() { return /* binding */ CREATE_PROFILE; },
/* harmony export */   "CREATE_REWARD_DISCIPLINE": function() { return /* binding */ CREATE_REWARD_DISCIPLINE; },
/* harmony export */   "CREATE_TRAINING": function() { return /* binding */ CREATE_TRAINING; },
/* harmony export */   "DELETE_DEP_POS": function() { return /* binding */ DELETE_DEP_POS; },
/* harmony export */   "DELETE_ORGANIZATION": function() { return /* binding */ DELETE_ORGANIZATION; },
/* harmony export */   "DELETE_PERSONAL_HISTORY": function() { return /* binding */ DELETE_PERSONAL_HISTORY; },
/* harmony export */   "DELETE_POSITION_AND_MANAGEMENT": function() { return /* binding */ DELETE_POSITION_AND_MANAGEMENT; },
/* harmony export */   "DELETE_POSITION_TYPE": function() { return /* binding */ DELETE_POSITION_TYPE; },
/* harmony export */   "DELETE_REWARD_DISCIPLINE": function() { return /* binding */ DELETE_REWARD_DISCIPLINE; },
/* harmony export */   "DELETE_TRAINING": function() { return /* binding */ DELETE_TRAINING; },
/* harmony export */   "GET_AVATAR": function() { return /* binding */ GET_AVATAR; },
/* harmony export */   "GET_DEPARTMENT_INFOR": function() { return /* binding */ GET_DEPARTMENT_INFOR; },
/* harmony export */   "GET_DEPARTMENT_LIST": function() { return /* binding */ GET_DEPARTMENT_LIST; },
/* harmony export */   "GET_DEP_POS": function() { return /* binding */ GET_DEP_POS; },
/* harmony export */   "GET_DEP_POS_TO_SEARCH": function() { return /* binding */ GET_DEP_POS_TO_SEARCH; },
/* harmony export */   "GET_DISTRICTS_ADDRESS": function() { return /* binding */ GET_DISTRICTS_ADDRESS; },
/* harmony export */   "GET_DISTRICTS_BIRTH_PLACE": function() { return /* binding */ GET_DISTRICTS_BIRTH_PLACE; },
/* harmony export */   "GET_DISTRICTS_HOKHAU": function() { return /* binding */ GET_DISTRICTS_HOKHAU; },
/* harmony export */   "GET_DISTRICTS_HOME_TOWN": function() { return /* binding */ GET_DISTRICTS_HOME_TOWN; },
/* harmony export */   "GET_DISTRICTS_STEP7": function() { return /* binding */ GET_DISTRICTS_STEP7; },
/* harmony export */   "GET_DISTRICTS_STEP7_CON": function() { return /* binding */ GET_DISTRICTS_STEP7_CON; },
/* harmony export */   "GET_DISTRICTS_STEP8": function() { return /* binding */ GET_DISTRICTS_STEP8; },
/* harmony export */   "GET_DISTRICTS_STEP9": function() { return /* binding */ GET_DISTRICTS_STEP9; },
/* harmony export */   "GET_PART": function() { return /* binding */ GET_PART; },
/* harmony export */   "GET_PERSONAL_HISTORY": function() { return /* binding */ GET_PERSONAL_HISTORY; },
/* harmony export */   "GET_POSITIONS_LIST": function() { return /* binding */ GET_POSITIONS_LIST; },
/* harmony export */   "GET_POSITION_TYPE_LIST": function() { return /* binding */ GET_POSITION_TYPE_LIST; },
/* harmony export */   "GET_PROFILE_BY_ID": function() { return /* binding */ GET_PROFILE_BY_ID; },
/* harmony export */   "GET_PROFILE_BY_TOKEN": function() { return /* binding */ GET_PROFILE_BY_TOKEN; },
/* harmony export */   "GET_PROFILE_BY_USER_ID": function() { return /* binding */ GET_PROFILE_BY_USER_ID; },
/* harmony export */   "GET_PROVINCES": function() { return /* binding */ GET_PROVINCES; },
/* harmony export */   "GET_USER_INFORMATION": function() { return /* binding */ GET_USER_INFORMATION; },
/* harmony export */   "GET_USER_LIST": function() { return /* binding */ GET_USER_LIST; },
/* harmony export */   "ONLY_CREATE_PROFILE": function() { return /* binding */ ONLY_CREATE_PROFILE; },
/* harmony export */   "SEARCH": function() { return /* binding */ SEARCH; },
/* harmony export */   "TOKEN": function() { return /* binding */ TOKEN; },
/* harmony export */   "UPDATE_DEPARTMENT": function() { return /* binding */ UPDATE_DEPARTMENT; },
/* harmony export */   "UPDATE_FAMILY_RELATIONSHIP": function() { return /* binding */ UPDATE_FAMILY_RELATIONSHIP; },
/* harmony export */   "UPDATE_ORGANIZATION": function() { return /* binding */ UPDATE_ORGANIZATION; },
/* harmony export */   "UPDATE_PARTY": function() { return /* binding */ UPDATE_PARTY; },
/* harmony export */   "UPDATE_PERSONAL_HISTORY": function() { return /* binding */ UPDATE_PERSONAL_HISTORY; },
/* harmony export */   "UPDATE_POSITION_AND_MANAGEMENT": function() { return /* binding */ UPDATE_POSITION_AND_MANAGEMENT; },
/* harmony export */   "UPDATE_POSITION_TYPE": function() { return /* binding */ UPDATE_POSITION_TYPE; },
/* harmony export */   "UPDATE_PROFILE": function() { return /* binding */ UPDATE_PROFILE; },
/* harmony export */   "UPDATE_PROFILE_ACTIVE": function() { return /* binding */ UPDATE_PROFILE_ACTIVE; },
/* harmony export */   "UPDATE_REWARD_DISCIPLINE": function() { return /* binding */ UPDATE_REWARD_DISCIPLINE; },
/* harmony export */   "UPDATE_TRAINING": function() { return /* binding */ UPDATE_TRAINING; },
/* harmony export */   "boiDuong": function() { return /* binding */ boiDuong; },
/* harmony export */   "daoTao": function() { return /* binding */ daoTao; },
/* harmony export */   "khenThuong": function() { return /* binding */ khenThuong; },
/* harmony export */   "kyLuat": function() { return /* binding */ kyLuat; },
/* harmony export */   "lichSuBanThan": function() { return /* binding */ lichSuBanThan; },
/* harmony export */   "local": function() { return /* binding */ local; },
/* harmony export */   "noiSinh_Step1": function() { return /* binding */ noiSinh_Step1; },
/* harmony export */   "quaTrinhLVHT": function() { return /* binding */ quaTrinhLVHT; },
/* harmony export */   "quanHeGiaDinh": function() { return /* binding */ quanHeGiaDinh; },
/* harmony export */   "queQuan_Step1": function() { return /* binding */ queQuan_Step1; },
/* harmony export */   "thamGiaToChucCT": function() { return /* binding */ thamGiaToChucCT; }
/* harmony export */ });
/* harmony import */ var _ultils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ultils/helper */ "./src/ultils/helper.js");

var TOKEN = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_0__.getTokenInCookie)(); // TOKEN ADMIN, NHÂN SỰ
// export const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNzUwNDExMDg3fQ.uWeEJEXHyNysw85k22m0s6dFNi4nJFAO8NS8leY6fyA";
// TOKEN user
// export const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZXhwIjoyNzUwNDY3MDkwfQ.jS2LpSrpCSosjuMLT1MJcuo1NIemmfv-hkqo4yciNy8"

var local = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_0__.checkMicroFe)() === true ? "https://profileservice.tuoitre.vn" : "";
var quaTrinhLVHT = "Quá trình làm việc và học tập";
var thamGiaToChucCT = "Tham gia các tổ chức chính trị, các hôị nghề nghiệp";
var daoTao = "Đào tạo";
var boiDuong = "Bồi dưỡng";
var khenThuong = "Khen thưởng";
var kyLuat = "Kỷ luật";
var lichSuBanThan = "Lịch sử bản thân";
var quanHeGiaDinh = "Quan hệ gia đình";
var noiSinh_Step1 = "Nơi sinh";
var queQuan_Step1 = "Quê quán";
var GET_PROFILE_BY_ID = "GET_PROFILE_BY_ID";
var GET_PROVINCES = "GET_PROVINCES";
var GET_DISTRICTS_BIRTH_PLACE = "GET_DISTRICTS_BIRTH_PLACE";
var GET_DISTRICTS_HOME_TOWN = "GET_DISTRICTS_HOME_TOWN";
var GET_DISTRICTS_ADDRESS = "GET_DISTRICTS_ADDRESS";
var GET_DISTRICTS_HOKHAU = "GET_DISTRICTS_HOKHAU";
var GET_DISTRICTS_STEP8 = "GET_DISTRICTS_STEP8";
var GET_DISTRICTS_STEP7 = "GET_DISTRICTS_STEP7";
var GET_DISTRICTS_STEP9 = "GET_DISTRICTS_STEP9";
var GET_DISTRICTS_STEP7_CON = "GET_DISTRICTS_STEP7_CON";
var UPDATE_PROFILE = "UPDATE_PROFILE";
var CREATE_PROFILE = "CREATE_PROFILE";
var ONLY_CREATE_PROFILE = "ONLY_CREATE_PROFILE";
var GET_USER_LIST = "GET_USER_LIST";
var GET_USER_INFORMATION = "GET_USER_INFORMATION";
var GET_DEP_POS = "GET_DEPARTMENT_POSITION";
var GET_PART = "GET_PART";
var GET_AVATAR = "GET_AVATAR";
var DELETE_DEP_POS = "DELETE_DEP_POS";
var GET_DEPARTMENT_LIST = "GET_DEPARTMENT_LIST";
var UPDATE_DEPARTMENT = "UPDATE_DEPARTMENT";
var GET_DEPARTMENT_INFOR = "GET_DEPARTMENT_INFOR";
var CREATE_DEPARTMENT = "CREATE_DEPARTMENT";
var GET_POSITIONS_LIST = "GET_POSITIONS_LIST";
var GET_POSITION_TYPE_LIST = "GET_POSITION_TYPE_LIST";
var CREATE_POSITION_TYPE = "CREATE_POSITION_TYPE";
var UPDATE_POSITION_TYPE = "UPDATE_POSITION_TYPE";
var DELETE_POSITION_TYPE = "DELETE_POSITION_TYPE";
var CREATE_POSITION_AND_MANAGEMENT = "CREATE_POSITION_AND_MANAGEMENT";
var UPDATE_POSITION_AND_MANAGEMENT = "UPDATE_POSITION_AND_MANAGEMENT";
var DELETE_POSITION_AND_MANAGEMENT = "DELETE_POSITION_AND_MANAGEMENT";
var GET_PERSONAL_HISTORY = "GET_PERSONAL_HISTORY";
var CREATE_PERSONAL_HISTORY = "CREATE_PERSONAL_HISTORY";
var UPDATE_PERSONAL_HISTORY = "UPDATE_PERSONAL_HISTORY";
var DELETE_PERSONAL_HISTORY = "DELETE_PERSONAL_HISTORY";
var CREATE_PARTY = "CREATE_PARTY";
var UPDATE_PARTY = "UPDATE_PARTY";
var CREATE_ORGANIZATION = "CREATE_ORGANIZATION";
var UPDATE_ORGANIZATION = "UPDATE_ORGANIZATION";
var DELETE_ORGANIZATION = "DELETE_ORGANIZATION";
var CREATE_TRAINING = "CREATE_TRAINING";
var UPDATE_TRAINING = "UPDATE_TRAINING";
var DELETE_TRAINING = "DELETE_TRAINING";
var CREATE_REWARD_DISCIPLINE = "CREATE_REWARD_DISCIPLINE";
var DELETE_REWARD_DISCIPLINE = "DELETE_REWARD_DISCIPLINE";
var UPDATE_REWARD_DISCIPLINE = "UPDATE_REWARD_DISCIPLINE";
var CREATE_FAMILY_RELATIONSHIP = "CREATE_FAMILY_RELATIONSHIP";
var UPDATE_FAMILY_RELATIONSHIP = "UPDATE_FAMILY_RELATIONSHIP";
var GET_DEP_POS_TO_SEARCH = "GET_DEP_POS_TO_SEARCH";
var SEARCH = "SEARCH";
var GET_PROFILE_BY_USER_ID = "GET_PROFILE_BY_USER_ID";
var GET_PROFILE_BY_TOKEN = "GET_PROFILE_BY_TOKEN";
var UPDATE_PROFILE_ACTIVE = "UPDATE_PROFILE_ACTIVE";

/***/ }),

/***/ "./src/ultils/helper.js":
/*!******************************!*\
  !*** ./src/ultils/helper.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkMicroFe": function() { return /* binding */ checkMicroFe; },
/* harmony export */   "getTokenInCookie": function() { return /* binding */ getTokenInCookie; },
/* harmony export */   "handleDateTime": function() { return /* binding */ handleDateTime; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "webpack/sharing/consume/default/moment/moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var doc_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! doc-cookies */ "./node_modules/doc-cookies/cookies.js");
/* harmony import */ var doc_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(doc_cookies__WEBPACK_IMPORTED_MODULE_1__);


var handleDateTime = function handleDateTime(date) {
  try {
    var convert;

    if (typeof date === "number") {
      // convert từ số sang chuỗi DD-MM-YYYY
      var convert1 = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date)).format("DD-MM-YYYY");
      convert = moment__WEBPACK_IMPORTED_MODULE_0___default()(convert1, "DD-MM-YYYY");
    } else {
      // let convertToNumber = Date.parse(date)
      // console.log(convertToNumber)
      var _convert = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date)).format("DD-MM-YYYY"); // console.log(convert1)


      convert = moment__WEBPACK_IMPORTED_MODULE_0___default()(_convert, "DD-MM-YYYY");
    } // console.log(convert)


    return convert;
  } catch (error) {
    console.log(error);
  }
};
var checkMicroFe = function checkMicroFe() {
  if (window.location.href.includes("3000") || window.location.href.includes("profileservice") || window.location.href.includes("3001")) {
    return false;
  } else {
    return true;
  }
};
var getTokenInCookie = function getTokenInCookie() {
  try {
    var tokenCookie = doc_cookies__WEBPACK_IMPORTED_MODULE_1___default().getItem("usertoken");

    if (!tokenCookie) {
      // khi push code lên server
      return null; // Khi test trên local
      // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzU2LCJleHAiOjI3NTA1NTQ3MzB9.drBO_G7F9JCDi7XmLRmf14QvUqYe8cW4inBIbQsmRYI"
      // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNzUwNDExMDg3fQ.uWeEJEXHyNysw85k22m0s6dFNi4nJFAO8NS8leY6fyA"
    } // console.log(tokenCookie);


    return tokenCookie;
  } catch (error) {
    console.log(error);
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFZSxTQUFTVSxPQUFULEdBQW1CO0VBQUE7O0VBRTlCLElBQUlDLEdBQUcsR0FBR0wsNERBQVksT0FBTyxJQUFuQixHQUEwQixpQkFBMUIsR0FBOEMsRUFBeEQ7O0VBRUEsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBbUJDLFFBQW5CLEVBQWdDO0lBQzVDLE9BQU87TUFDSEgsS0FBSyxFQUFMQSxLQURHO01BRUhDLEdBQUcsRUFBSEEsR0FGRztNQUdIQyxJQUFJLEVBQUpBLElBSEc7TUFJSEMsUUFBUSxFQUFSQTtJQUpHLENBQVA7RUFNSCxDQVBEOztFQVNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0lBQUEsb0JBQ2I7TUFBSyxNQUFNLEVBQUMsY0FBWjtNQUEyQixJQUFJLEVBQUMsY0FBaEM7TUFBK0MsS0FBSyxFQUFDLGNBQXJEO01BQW9FLE9BQU8sRUFBQyxLQUE1RTtNQUFrRixLQUFLLEVBQUMsNEJBQXhGO01BQ1AsT0FBTyxFQUFDLDJCQUREO01BRVIsbUJBQW1CLEVBQUMsZUFGWjtNQUFBLHVCQUdKO1FBQUcsU0FBUyxFQUFDLDBEQUFiO1FBQXdFLE1BQU0sRUFBQyxNQUEvRTtRQUFBLHdCQUNBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFEQSxlQU9BO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFQQSxlQVlBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFaQSxlQWtCQTtVQUFNLENBQUMsRUFBQztRQUFSLEVBbEJBLGVBd0JBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUF4QkEsZUErQkE7VUFBTSxDQUFDLEVBQUM7UUFBUixFQS9CQSxlQXFDQTtV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QUFJMkYsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsUUFBckIsQ0FBOEIsTUFBOUIsS0FBeUNILE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFFBQXJCLENBQThCLGdCQUE5QixDQUF6QyxJQUE0RkgsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsUUFBckIsQ0FBOEIsTUFBOUIsQ0FBaEcsRUFBdUk7SUFDbkksT0FBTyxLQUFQO0VBQ0gsQ0FGRCxNQUVPO0lBQ0gsT0FBTyxJQUFQO0VBQ0g7QUFDSixDQU5NO0FBUUEsSUFBSS9FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBSTtFQUM5QixJQUFJO0lBQ0EsSUFBSWdGLFdBQVcsR0FBR2QsMERBQUEsQ0FBa0IsV0FBbEIsQ0FBbEI7O0lBQ0EsSUFBRyxDQUFDYyxXQUFKLEVBQWdCO01BQ1o7TUFDQSxPQUFPLElBQVAsQ0FGWSxDQUdaO01BQ0E7TUFDQTtJQUNILENBUkQsQ0FTQTs7O0lBQ0EsT0FBT0EsV0FBUDtFQUNILENBWEQsQ0FXRSxPQUFPUCxLQUFQLEVBQWM7SUFDWkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7RUFDSDtBQUNKLENBZk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9TdWJNZW51LmpzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvdGl0bGUvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy91bHRpbHMvaGVscGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiXG5pbXBvcnQgeyBNZFBlb3BsZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBCc0ZpbGVFYXJtYXJrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBGY0RlcGFydG1lbnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIlxuaW1wb3J0IHsgY2hlY2tNaWNyb0ZlIH0gZnJvbSAnLi4vLi4vdWx0aWxzL2hlbHBlcic7XG5pbXBvcnQge0ltUHJvZmlsZX0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQge1RPS0VOfSBmcm9tIFwiLi4vLi4vdGl0bGUvdGl0bGVcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJNZW51KCkge1xuICAgIFxuICAgIGxldCB1cmkgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwicHJvZmlsZS1zZXJ2aWNlXCIgOiBcIlwiO1xuXG4gICAgY29uc3QgZ2V0SXRlbSA9IChsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uSXRlbSA9ICgpPT4oXG4gICAgICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgdmlld0JveD1cIjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDBcIlxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cGF0aCBkPVwiTTQzMTAgNDc4MyBjLTEwNSAtMTggLTIyOSAtODAgLTI5OSAtMTUyIC0xMDAgLTEwMCAtMTQxIC0yMDggLTE0MVxuICAgICAgICAtMzY3IDAgLTMyNSAxNzggLTU2MyA0NTIgLTYwNSAyMzcgLTM3IDQ2NiAxMTIgNTU1IDM2MiAyMiA2MiAyNyA5NiAzMSAyMDYgNFxuICAgICAgICAxMTUgMSAxNDEgLTE3IDIwMyAtMjggOTMgLTcwIDE1OCAtMTM4IDIxOSAtMTE4IDEwNSAtMjk1IDE1OSAtNDQzIDEzNHogbTE0NFxuICAgICAgICAtMjM4IGM1OSAtMTAgMTMwIC00OSAxNjUgLTkyIDk3IC0xMTcgNzQgLTM2OSAtNDQgLTQ4OCAtNTAgLTQ5IC05MCAtNjcgLTE2NVxuICAgICAgICAtNzMgLTE1NSAtMTEgLTI2OCA5NyAtMzAwIDI4OCAtMjYgMTU0IDE1IDI2NyAxMTkgMzI4IDQ1IDI2IDE0MiA1MyAxNzEgNDcgOFxuICAgICAgICAtMiAzMyAtNiA1NCAtMTB6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTI0MjAgNDExNCBjLTE4MCAtNDggLTMyMiAtMTg0IC0zNjQgLTM0OSAtMjAgLTc1IC0yMCAtMjM3IC0xIC0zMzBcbiAgICAgICAgMjIgLTEwNiA3NiAtMjA2IDE1NCAtMjg1IDEwMSAtMTAzIDIxMiAtMTUwIDM1MSAtMTUwIDEzOSAwIDI1MCA0NyAzNTEgMTUwXG4gICAgICAgIDExNSAxMTcgMTY5IDI2MiAxNjkgNDU0IDAgMTYxIC00MyAyNzYgLTE0MSAzNzQgLTYzIDYzIC0xNTIgMTEzIC0yNDUgMTM3IC03M1xuICAgICAgICAxOSAtMjAxIDE4IC0yNzQgLTF6IG0yNjcgLTI0NCBjMTM0IC01NyAxODggLTE5NSAxNDkgLTM3NSAtMzUgLTE2NCAtMTM3IC0yNjBcbiAgICAgICAgLTI3NiAtMjYwIC0xNjkgMCAtMjg4IDE1MyAtMjkwIDM3MSAtMSAyMTkgMjEwIDM1MyA0MTcgMjY0elwiLz5cbiAgICAgICAgPHBhdGggZD1cIk02NTUgMzQ3NCBjLTE1MiAtMzcgLTIyMyAtNzIgLTMwNiAtMTU0IC0xMDYgLTEwNSAtMTM4IC0xOTIgLTEzOVxuICAgICAgICAtMzc1IDAgLTEzMSAxOCAtMjEzIDY3IC0zMTMgOTkgLTIwMCAzMTggLTMxOSA1MjYgLTI4NCAyNzIgNDcgNDQ3IDI4MyA0NDdcbiAgICAgICAgNjA2IDAgMjQ1IC0xMTUgNDA4IC0zNDUgNDkyIC02NCAyMyAtMjA1IDM5IC0yNTAgMjh6IG0xNDAgLTIzOSBjODQgLTE0IDE2OVxuICAgICAgICAtODAgMjAyIC0xNTYgMzIgLTc1IDIzIC0yMzIgLTE5IC0zMjcgLTI5IC02NCAtOTAgLTEyNiAtMTUwIC0xNTIgLTQyIC0xOCAtNjVcbiAgICAgICAgLTIxIC0xMTggLTE4IC03NSA2IC0xMTUgMjQgLTE2NSA3MyAtMTE4IDExOSAtMTQxIDM3MSAtNDQgNDg4IDE3IDIxIDUwIDQ3IDcyXG4gICAgICAgIDU5IDQ1IDIzIDE0MiA0OCAxNjcgNDMgOCAtMiAzMyAtNiA1NSAtMTB6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTQyMTYgMzQzNCBjLTE2NCAtNDEgLTMxMCAtMTQyIC0zODUgLTI2NiAtNDAgLTY4IC01OCAtMTM1IC0xMTVcbiAgICAgICAgLTQ0MyAtNjIgLTMzNiAtNjIgLTM1MyA0IC0zOTggMjIgLTE1IDY0IC0xNyA0MDMgLTE3IDQxNSAwIDQyMSAxIDQ1MiA2MCAxOVxuICAgICAgICAzNyAxOSA3MyAwIDExMCAtMzAgNTcgLTQ1IDYwIC0zNjUgNjAgbC0yOTAgMCA1IDIzIGMyIDEyIDIxIDExMCA0MCAyMTcgNDBcbiAgICAgICAgMjE3IDYzIDI3NyAxMjUgMzM0IDE5MSAxNzIgNTYzIDEyNCA2NjcgLTg2IDE0IC0yNyA0MiAtMTUyIDc4IC0zNDMgMzEgLTE2NFxuICAgICAgICA2MSAtMzA3IDY2IC0zMTYgNDMgLTgyIDE3NCAtNzUgMjA5IDExIDEyIDMwIDEwIDUyIC0xOSAyMTQgLTczIDQwMSAtODggNDY3XG4gICAgICAgIC0xMjYgNTQzIC02NCAxMjkgLTE5MiAyMzIgLTM1MCAyODMgLTkwIDI5IC0zMDggMzcgLTM5OSAxNHpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjQyNSAyNzg2IGMtMjMxIC00NiAtMzk1IC0xNzMgLTQ2MyAtMzU4IC0xMiAtMzEgLTQ3IC0xOTUgLTc4IC0zNjVcbiAgICAgICAgbC01NyAtMzA3IDE5IC0zNiBjMzcgLTY5IDQ2IC03MCA0NDQgLTY5IDI0OCAwIDM2NSA0IDM5MCAxMiA0MCAxNCA4MCA2NyA4MFxuICAgICAgICAxMDcgMCA0MCAtNDAgOTMgLTgwIDEwNyAtMjQgOCAtMTI1IDEyIC0zMTMgMTIgbC0yNzkgMSA2IDI4IGMzIDE1IDIyIDExMSA0MVxuICAgICAgICAyMTQgNDAgMjEwIDQzIDIyMiA4NSAyODMgNjIgOTEgMTkwIDE0NSAzNDAgMTQ1IDE1NyAwIDI4MCAtNTUgMzQ3IC0xNTYgMzdcbiAgICAgICAgLTU2IDQ2IC05MiAxMjggLTUzNiAzMCAtMTY2IDQ0IC0xOTEgMTA2IC0yMDggNTMgLTE0IDEwNiAxMCAxMzMgNjAgbDE5IDM2XG4gICAgICAgIC01NyAzMDcgYy02MCAzMjYgLTc4IDM5MSAtMTM0IDQ3NSAtNjkgMTA2IC0yMDkgMTk5IC0zNTcgMjM3IC04NiAyMiAtMjM2IDI3XG4gICAgICAgIC0zMjAgMTF6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTU0MyAyMTIwIGMtMjAwIC01MiAtMzUwIC0xNzggLTQxMiAtMzQ1IC0xOCAtNDkgLTEzMSAtNjIzIC0xMzFcbiAgICAgICAgLTY2NyAwIC0zMiAyOSAtNzcgNjAgLTkzIDI0IC0xMyA4OSAtMTUgNDA1IC0xNSAzMzQgMCAzODAgMiA0MDUgMTcgNzMgNDMgNzNcbiAgICAgICAgMTUzIDAgMTk2IC0yNCAxNSAtNjUgMTcgLTMxOSAxNyAtMTYwIDAgLTI5MSAzIC0yOTEgNyAwIDQ0IDg2IDQ0OCAxMDMgNDgxXG4gICAgICAgIDEyNiAyNTQgNjA5IDI1MyA3MzEgLTEgMTggLTM3IDQwIC0xMzMgNzYgLTMyNyA2MyAtMzQ3IDU2IC0zMTggOTUgLTM1NyA0M1xuICAgICAgICAtNDMgOTggLTQ2IDE0NCAtNyA1NiA0NiA1NSA2NCAtNSAzODcgLTMwIDE2MSAtNjIgMzE2IC03MSAzNDYgLTUzIDE3MiAtMjM1XG4gICAgICAgIDMyMiAtNDQyIDM2NiAtMTAwIDIxIC0yNTggMTkgLTM0OCAtNXpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMzczOCAxODc5IGMtMTQgLTYgLTE1OSAtMTUzIC0zMjMgLTMzMCBsLTI5NiAtMzE5IC01OTkgMCBjLTM5OSAwXG4gICAgICAgIC02MDcgLTQgLTYyMiAtMTEgLTEzIC01IC0xNTMgLTE1NCAtMzEzIC0zMjkgbC0yOTAgLTMxOSAtNTkwIC0xIGMtNDI5IC0xXG4gICAgICAgIC01OTkgLTQgLTYyNCAtMTMgLTQ4IC0xNyAtNzYgLTU4IC03NiAtMTEzIDAgLTM2IDYgLTQ5IDMzIC03NiBsMzIgLTMzIDY0MiAtM1xuICAgICAgICBjNDc3IC0yIDY1MCAwIDY3MSA5IDE2IDcgMTU2IDE1MiAzMjQgMzM2IGwyOTUgMzIzIDYwMiAwIDYwMiAwIDMxIDIzIGMxNyAxMlxuICAgICAgICAxNTYgMTU3IDMwOSAzMjIgbDI3OCAzMDAgNjA2IDUgYzY3OSA2IDY0NSAyIDY3NyA3OCAxMyAzMiAxNCA0MiAyIDc2IC04IDIyXG4gICAgICAgIC0yNyA0OSAtNDIgNjAgLTI4IDIxIC0zNiAyMSAtNjY1IDIzIC00MDEgMSAtNjQ3IC0yIC02NjQgLTh6XCIvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICBnZXRJdGVtKFwiTmjDom4gc+G7sVwiLCBcInN1YjFcIiwgPE1kUGVvcGxlT3V0bGluZSAvPiwgW1xuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wcm9maWxlYH0+SOG7kyBzxqE8L0xpbms+LCBcIjFcIiwgPEJzRmlsZUVhcm1hcmtGaWxsIC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvZGVwYXJ0bWVudGB9PkLhu5kgcGjhuq1uIGPDtG5nIHTDoWM8L0xpbms+LCBcIjJcIiwgPEZjRGVwYXJ0bWVudCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Bvc2l0aW9uYH0+Q2jhu6ljIGRhbmgsIGNo4bupYyB24bulPC9MaW5rPiwgXCIzXCIsIHBvc2l0aW9uSXRlbSgpKSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vbXlwcm9maWxlLyR7and0X2RlY29kZShUT0tFTik/LmlkfWB9PlRow7RuZyB0aW4gY8OhIG5ow6JuPC9MaW5rPiwgXCI0XCIsIDxJbVByb2ZpbGUgLz4pXG4gICAgICAgIF0pXG4gICAgXVxuXG4gICAgY29uc3QgcmVuZGVyU3ViTWVudSAgPSAoKT0+e1xuICAgICAgICBpZih1cmkgPT09IFwicHJvZmlsZS1zZXJ2aWNlXCIpe1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9TdWJNZW51X19YWmViNlwiPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0T3BlbktleXM9e1tgc3ViMWBdfVxuICAgICAgICAgICAgICAgIG1vZGU9J2lubGluZSdcbiAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgIDw+e3JlbmRlclN1Yk1lbnUoKX08Lz5cbiAgICApXG59XG4iLCJpbXBvcnQgeyBjaGVja01pY3JvRmUsIGdldFRva2VuSW5Db29raWUgfSBmcm9tIFwiLi4vdWx0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgVE9LRU4gPSBnZXRUb2tlbkluQ29va2llKCk7XG5cbi8vIFRPS0VOIEFETUlOLCBOSMOCTiBT4buwXG4vLyBleHBvcnQgY29uc3QgVE9LRU4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk1Td2laWGh3SWpveU56VXdOREV4TURnM2ZRLnVXZUVKRVhIeU55c3c4NWsyMm0wczZkRk5pNG5KRkFPOE5TOGxlWTZmeUFcIjtcbi8vIFRPS0VOIHVzZXJcbi8vIGV4cG9ydCBjb25zdCBUT0tFTiA9IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2Tml3aVpYaHdJam95TnpVd05EWTNNRGt3ZlEualMyTHBTcnBDU29zanVNTFQxTUpjdW8xTkllbW1mdi1oa3FvNHljaU55OFwiXG5leHBvcnQgY29uc3QgbG9jYWwgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwiaHR0cHM6Ly9wcm9maWxlc2VydmljZS50dW9pdHJlLnZuXCIgOiBcIlwiXG5cblxuZXhwb3J0IGNvbnN0IHF1YVRyaW5oTFZIVCA9IFwiUXXDoSB0csOsbmggbMOgbSB2aeG7h2MgdsOgIGjhu41jIHThuq1wXCI7XG5leHBvcnQgY29uc3QgdGhhbUdpYVRvQ2h1Y0NUID0gXCJUaGFtIGdpYSBjw6FjIHThu5UgY2jhu6ljIGNow61uaCB0cuG7iywgY8OhYyBow7Thu4sgbmdo4buBIG5naGnhu4dwXCI7XG5leHBvcnQgY29uc3QgZGFvVGFvID0gXCLEkMOgbyB04bqhb1wiO1xuZXhwb3J0IGNvbnN0IGJvaUR1b25nID0gXCJC4buTaSBkxrDhu6FuZ1wiO1xuZXhwb3J0IGNvbnN0IGtoZW5UaHVvbmcgPSBcIktoZW4gdGjGsOG7n25nXCI7XG5leHBvcnQgY29uc3Qga3lMdWF0ID0gXCJL4bu3IGx14bqtdFwiO1xuZXhwb3J0IGNvbnN0IGxpY2hTdUJhblRoYW4gPSBcIkzhu4tjaCBz4butIGLhuqNuIHRow6JuXCI7XG5leHBvcnQgY29uc3QgcXVhbkhlR2lhRGluaCA9IFwiUXVhbiBo4buHIGdpYSDEkcOsbmhcIjtcbmV4cG9ydCBjb25zdCBub2lTaW5oX1N0ZXAxID0gXCJOxqFpIHNpbmhcIlxuZXhwb3J0IGNvbnN0IHF1ZVF1YW5fU3RlcDEgPSBcIlF1w6ogcXXDoW5cIlxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0JZX0lEID0gXCJHRVRfUFJPRklMRV9CWV9JRFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9WSU5DRVMgPSBcIkdFVF9QUk9WSU5DRVNcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFID0gXCJHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19IT01FX1RPV04gPSBcIkdFVF9ESVNUUklDVFNfSE9NRV9UT1dOXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19BRERSRVNTID0gXCJHRVRfRElTVFJJQ1RTX0FERFJFU1NcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0hPS0hBVSA9IFwiR0VUX0RJU1RSSUNUU19IT0tIQVVcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA4ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA4XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQNyA9IFwiR0VUX0RJU1RSSUNUU19TVEVQN1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDkgPSBcIkdFVF9ESVNUUklDVFNfU1RFUDlcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA3X0NPTiA9IFwiR0VUX0RJU1RSSUNUU19TVEVQN19DT05cIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPRklMRSA9IFwiVVBEQVRFX1BST0ZJTEVcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUFJPRklMRSA9IFwiQ1JFQVRFX1BST0ZJTEVcIjtcbmV4cG9ydCBjb25zdCBPTkxZX0NSRUFURV9QUk9GSUxFID0gXCJPTkxZX0NSRUFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgR0VUX1VTRVJfTElTVCA9IFwiR0VUX1VTRVJfTElTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0lORk9STUFUSU9OID0gXCJHRVRfVVNFUl9JTkZPUk1BVElPTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBfUE9TID0gXCJHRVRfREVQQVJUTUVOVF9QT1NJVElPTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QQVJUID0gXCJHRVRfUEFSVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9BVkFUQVIgPSBcIkdFVF9BVkFUQVJcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfREVQX1BPUyA9IFwiREVMRVRFX0RFUF9QT1NcIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQQVJUTUVOVF9MSVNUID0gXCJHRVRfREVQQVJUTUVOVF9MSVNUXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0RFUEFSVE1FTlQgPSBcIlVQREFURV9ERVBBUlRNRU5UXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUEFSVE1FTlRfSU5GT1IgPSBcIkdFVF9ERVBBUlRNRU5UX0lORk9SXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0RFUEFSVE1FTlQgPSBcIkNSRUFURV9ERVBBUlRNRU5UXCI7XG5leHBvcnQgY29uc3QgR0VUX1BPU0lUSU9OU19MSVNUID0gXCJHRVRfUE9TSVRJT05TX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfUE9TSVRJT05fVFlQRV9MSVNUID0gXCJHRVRfUE9TSVRJT05fVFlQRV9MSVNUXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU0lUSU9OX1RZUEUgPSBcIkNSRUFURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU0lUSU9OX1RZUEUgPSBcIlVQREFURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BPU0lUSU9OX1RZUEUgPSBcIkRFTEVURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIlVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkdFVF9QRVJTT05BTF9ISVNUT1JZXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUllcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9QRVJTT05BTF9ISVNUT1JZID0gXCJVUERBVEVfUEVSU09OQUxfSElTVE9SWVwiXG5leHBvcnQgY29uc3QgREVMRVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkRFTEVURV9QRVJTT05BTF9ISVNUT1JZXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFSVFkgPSBcIkNSRUFURV9QQVJUWVwiXG5leHBvcnQgY29uc3QgVVBEQVRFX1BBUlRZID0gXCJVUERBVEVfUEFSVFlcIlxuZXhwb3J0IGNvbnN0IENSRUFURV9PUkdBTklaQVRJT04gPSBcIkNSRUFURV9PUkdBTklaQVRJT05cIlxuZXhwb3J0IGNvbnN0IFVQREFURV9PUkdBTklaQVRJT04gPSBcIlVQREFURV9PUkdBTklaQVRJT05cIlxuZXhwb3J0IGNvbnN0IERFTEVURV9PUkdBTklaQVRJT04gPSBcIkRFTEVURV9PUkdBTklaQVRJT05cIlxuZXhwb3J0IGNvbnN0IENSRUFURV9UUkFJTklORyA9IFwiQ1JFQVRFX1RSQUlOSU5HXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfVFJBSU5JTkcgPSBcIlVQREFURV9UUkFJTklOR1wiXG5leHBvcnQgY29uc3QgREVMRVRFX1RSQUlOSU5HID0gXCJERUxFVEVfVFJBSU5JTkdcIlxuZXhwb3J0IGNvbnN0IENSRUFURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIkRFTEVURV9SRVdBUkRfRElTQ0lQTElORVwiXG5leHBvcnQgY29uc3QgVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJVUERBVEVfUkVXQVJEX0RJU0NJUExJTkVcIlxuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQID0gXCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUFwiXG5leHBvcnQgY29uc3QgVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAgPSBcIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQXCJcbmV4cG9ydCBjb25zdCBHRVRfREVQX1BPU19UT19TRUFSQ0ggPSBcIkdFVF9ERVBfUE9TX1RPX1NFQVJDSFwiXG5leHBvcnQgY29uc3QgU0VBUkNIID0gXCJTRUFSQ0hcIlxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0JZX1VTRVJfSUQgPSBcIkdFVF9QUk9GSUxFX0JZX1VTRVJfSURcIlxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0JZX1RPS0VOID0gXCJHRVRfUFJPRklMRV9CWV9UT0tFTlwiXG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0ZJTEVfQUNUSVZFID0gXCJVUERBVEVfUFJPRklMRV9BQ1RJVkVcIiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IGRvY0Nvb2tpZSBmcm9tIFwiZG9jLWNvb2tpZXNcIlxuXG5leHBvcnQgbGV0IGhhbmRsZURhdGVUaW1lID0gKGRhdGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgY29udmVydDtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHThu6sgc+G7kSBzYW5nIGNodeG7l2kgREQtTU0tWVlZWVxuICAgICAgICAgICAgbGV0IGNvbnZlcnQxID0gbW9tZW50KG5ldyBEYXRlKGRhdGUpKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxldCBjb252ZXJ0VG9OdW1iZXIgPSBEYXRlLnBhcnNlKGRhdGUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb252ZXJ0VG9OdW1iZXIpXG4gICAgICAgICAgICBsZXQgY29udmVydDEgPSBtb21lbnQobmV3IERhdGUoZGF0ZSkpLmZvcm1hdChcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnZlcnQxKVxuICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udmVydClcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgY2hlY2tNaWNyb0ZlID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjMwMDBcIikgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJwcm9maWxlc2VydmljZVwiKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjMwMDFcIikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGxldCBnZXRUb2tlbkluQ29va2llID0gKCk9PntcbiAgICB0cnkge1xuICAgICAgICBsZXQgdG9rZW5Db29raWUgPSBkb2NDb29raWUuZ2V0SXRlbShcInVzZXJ0b2tlblwiKVxuICAgICAgICBpZighdG9rZW5Db29raWUpe1xuICAgICAgICAgICAgLy8ga2hpIHB1c2ggY29kZSBsw6puIHNlcnZlclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIC8vIEtoaSB0ZXN0IHRyw6puIGxvY2FsXG4gICAgICAgICAgICAvLyByZXR1cm4gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNelUyTENKbGVIQWlPakkzTlRBMU5UUTNNekI5LmRyQk9fRzdGOUpDRGk3WG1MUm1mMTRRdlVxWWU4Y1c0aW5CSWJRc21SWUlcIlxuICAgICAgICAgICAgLy8gcmV0dXJuIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TVN3aVpYaHdJam95TnpVd05ERXhNRGczZlEudVdlRUpFWEh5Tnlzdzg1azIybTBzNmRGTmk0bkpGQU84TlM4bGVZNmZ5QVwiXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codG9rZW5Db29raWUpO1xuICAgICAgICByZXR1cm4gdG9rZW5Db29raWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIk1kUGVvcGxlT3V0bGluZSIsIkxpbmsiLCJCc0ZpbGVFYXJtYXJrRmlsbCIsIkZjRGVwYXJ0bWVudCIsImNoZWNrTWljcm9GZSIsIkltUHJvZmlsZSIsImp3dF9kZWNvZGUiLCJUT0tFTiIsIlN1Yk1lbnUiLCJ1cmkiLCJnZXRJdGVtIiwibGFiZWwiLCJrZXkiLCJpY29uIiwiY2hpbGRyZW4iLCJwb3NpdGlvbkl0ZW0iLCJpdGVtcyIsImlkIiwicmVuZGVyU3ViTWVudSIsImdldFRva2VuSW5Db29raWUiLCJsb2NhbCIsInF1YVRyaW5oTFZIVCIsInRoYW1HaWFUb0NodWNDVCIsImRhb1RhbyIsImJvaUR1b25nIiwia2hlblRodW9uZyIsImt5THVhdCIsImxpY2hTdUJhblRoYW4iLCJxdWFuSGVHaWFEaW5oIiwibm9pU2luaF9TdGVwMSIsInF1ZVF1YW5fU3RlcDEiLCJHRVRfUFJPRklMRV9CWV9JRCIsIkdFVF9QUk9WSU5DRVMiLCJHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFIiwiR0VUX0RJU1RSSUNUU19IT01FX1RPV04iLCJHRVRfRElTVFJJQ1RTX0FERFJFU1MiLCJHRVRfRElTVFJJQ1RTX0hPS0hBVSIsIkdFVF9ESVNUUklDVFNfU1RFUDgiLCJHRVRfRElTVFJJQ1RTX1NURVA3IiwiR0VUX0RJU1RSSUNUU19TVEVQOSIsIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OIiwiVVBEQVRFX1BST0ZJTEUiLCJDUkVBVEVfUFJPRklMRSIsIk9OTFlfQ1JFQVRFX1BST0ZJTEUiLCJHRVRfVVNFUl9MSVNUIiwiR0VUX1VTRVJfSU5GT1JNQVRJT04iLCJHRVRfREVQX1BPUyIsIkdFVF9QQVJUIiwiR0VUX0FWQVRBUiIsIkRFTEVURV9ERVBfUE9TIiwiR0VUX0RFUEFSVE1FTlRfTElTVCIsIlVQREFURV9ERVBBUlRNRU5UIiwiR0VUX0RFUEFSVE1FTlRfSU5GT1IiLCJDUkVBVEVfREVQQVJUTUVOVCIsIkdFVF9QT1NJVElPTlNfTElTVCIsIkdFVF9QT1NJVElPTl9UWVBFX0xJU1QiLCJDUkVBVEVfUE9TSVRJT05fVFlQRSIsIlVQREFURV9QT1NJVElPTl9UWVBFIiwiREVMRVRFX1BPU0lUSU9OX1RZUEUiLCJDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJHRVRfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZIiwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJERUxFVEVfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QQVJUWSIsIlVQREFURV9QQVJUWSIsIkNSRUFURV9PUkdBTklaQVRJT04iLCJVUERBVEVfT1JHQU5JWkFUSU9OIiwiREVMRVRFX09SR0FOSVpBVElPTiIsIkNSRUFURV9UUkFJTklORyIsIlVQREFURV9UUkFJTklORyIsIkRFTEVURV9UUkFJTklORyIsIkNSRUFURV9SRVdBUkRfRElTQ0lQTElORSIsIkRFTEVURV9SRVdBUkRfRElTQ0lQTElORSIsIlVQREFURV9SRVdBUkRfRElTQ0lQTElORSIsIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQIiwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAiLCJHRVRfREVQX1BPU19UT19TRUFSQ0giLCJTRUFSQ0giLCJHRVRfUFJPRklMRV9CWV9VU0VSX0lEIiwiR0VUX1BST0ZJTEVfQllfVE9LRU4iLCJVUERBVEVfUFJPRklMRV9BQ1RJVkUiLCJtb21lbnQiLCJkb2NDb29raWUiLCJoYW5kbGVEYXRlVGltZSIsImRhdGUiLCJjb252ZXJ0IiwiY29udmVydDEiLCJEYXRlIiwiZm9ybWF0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5jbHVkZXMiLCJ0b2tlbkNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=