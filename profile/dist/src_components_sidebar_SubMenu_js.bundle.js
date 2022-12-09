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
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.esm.js");
/* harmony import */ var _ultils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ultils/helper */ "./src/ultils/helper.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "webpack/sharing/consume/default/jwt-decode/jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../title/title */ "./src/title/title.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_Slice_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/Slice/loading */ "./src/redux/Slice/loading.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














function SubMenu() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
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
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("svg", {
      stroke: "currentColor",
      fill: "currentColor",
      color: "currentColor",
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512.000000 512.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("g", {
        transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
        stroke: "none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
          d: "M4310 4783 c-105 -18 -229 -80 -299 -152 -100 -100 -141 -208 -141 -367 0 -325 178 -563 452 -605 237 -37 466 112 555 362 22 62 27 96 31 206 4 115 1 141 -17 203 -28 93 -70 158 -138 219 -118 105 -295 159 -443 134z m144 -238 c59 -10 130 -49 165 -92 97 -117 74 -369 -44 -488 -50 -49 -90 -67 -165 -73 -155 -11 -268 97 -300 288 -26 154 15 267 119 328 45 26 142 53 171 47 8 -2 33 -6 54 -10z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
          d: "M2420 4114 c-180 -48 -322 -184 -364 -349 -20 -75 -20 -237 -1 -330 22 -106 76 -206 154 -285 101 -103 212 -150 351 -150 139 0 250 47 351 150 115 117 169 262 169 454 0 161 -43 276 -141 374 -63 63 -152 113 -245 137 -73 19 -201 18 -274 -1z m267 -244 c134 -57 188 -195 149 -375 -35 -164 -137 -260 -276 -260 -169 0 -288 153 -290 371 -1 219 210 353 417 264z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
          d: "M655 3474 c-152 -37 -223 -72 -306 -154 -106 -105 -138 -192 -139 -375 0 -131 18 -213 67 -313 99 -200 318 -319 526 -284 272 47 447 283 447 606 0 245 -115 408 -345 492 -64 23 -205 39 -250 28z m140 -239 c84 -14 169 -80 202 -156 32 -75 23 -232 -19 -327 -29 -64 -90 -126 -150 -152 -42 -18 -65 -21 -118 -18 -75 6 -115 24 -165 73 -118 119 -141 371 -44 488 17 21 50 47 72 59 45 23 142 48 167 43 8 -2 33 -6 55 -10z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
          d: "M4216 3434 c-164 -41 -310 -142 -385 -266 -40 -68 -58 -135 -115 -443 -62 -336 -62 -353 4 -398 22 -15 64 -17 403 -17 415 0 421 1 452 60 19 37 19 73 0 110 -30 57 -45 60 -365 60 l-290 0 5 23 c2 12 21 110 40 217 40 217 63 277 125 334 191 172 563 124 667 -86 14 -27 42 -152 78 -343 31 -164 61 -307 66 -316 43 -82 174 -75 209 11 12 30 10 52 -19 214 -73 401 -88 467 -126 543 -64 129 -192 232 -350 283 -90 29 -308 37 -399 14z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
          d: "M2425 2786 c-231 -46 -395 -173 -463 -358 -12 -31 -47 -195 -78 -365 l-57 -307 19 -36 c37 -69 46 -70 444 -69 248 0 365 4 390 12 40 14 80 67 80 107 0 40 -40 93 -80 107 -24 8 -125 12 -313 12 l-279 1 6 28 c3 15 22 111 41 214 40 210 43 222 85 283 62 91 190 145 340 145 157 0 280 -55 347 -156 37 -56 46 -92 128 -536 30 -166 44 -191 106 -208 53 -14 106 10 133 60 l19 36 -57 307 c-60 326 -78 391 -134 475 -69 106 -209 199 -357 237 -86 22 -236 27 -320 11z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
          d: "M543 2120 c-200 -52 -350 -178 -412 -345 -18 -49 -131 -623 -131 -667 0 -32 29 -77 60 -93 24 -13 89 -15 405 -15 334 0 380 2 405 17 73 43 73 153 0 196 -24 15 -65 17 -319 17 -160 0 -291 3 -291 7 0 44 86 448 103 481 126 254 609 253 731 -1 18 -37 40 -133 76 -327 63 -347 56 -318 95 -357 43 -43 98 -46 144 -7 56 46 55 64 -5 387 -30 161 -62 316 -71 346 -53 172 -235 322 -442 366 -100 21 -258 19 -348 -5z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("path", {
          d: "M3738 1879 c-14 -6 -159 -153 -323 -330 l-296 -319 -599 0 c-399 0 -607 -4 -622 -11 -13 -5 -153 -154 -313 -329 l-290 -319 -590 -1 c-429 -1 -599 -4 -624 -13 -48 -17 -76 -58 -76 -113 0 -36 6 -49 33 -76 l32 -33 642 -3 c477 -2 650 0 671 9 16 7 156 152 324 336 l295 323 602 0 602 0 31 23 c17 12 156 157 309 322 l278 300 606 5 c679 6 645 2 677 78 13 32 14 42 2 76 -8 22 -27 49 -42 60 -28 21 -36 21 -665 23 -401 1 -647 -2 -664 -8z"
        })]
      })
    });
  };

  var items = [getItem("Nhân sự", "sub1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdPeopleOutline, {}), [getItem("Hồ sơ", "1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsFileEarmarkFill, {})), getItem("Bộ phận công tác", "2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_11__.FcDepartment, {})), getItem("Chức danh, chức vụ", "3", positionItem()), getItem("Thông tin cá nhân", "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_12__.ImProfile, {}))])];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
    className: "sidebar_SubMenu__XZeb6",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu // defaultOpenKeys={[`sub1`]}
    , {
      mode: "inline",
      items: items,
      onClick: function onClick(e) {
        if (e.key === "1") {
          navigate("".concat(uri, "/hr/profile"));
        } else if (e.key === "2") {
          navigate("".concat(uri, "/hr/department"));
        } else if (e.key === "3") {
          navigate("".concat(uri, "/hr/position"));
        } else if (e.key === "4") {
          var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN);
          var id = decoded.id;
          navigate("".concat(uri, "/myprofile/").concat(id));
        }
      }
    })
  });
}

/***/ }),

/***/ "./src/redux/Slice/loading.js":
/*!************************************!*\
  !*** ./src/redux/Slice/loading.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setIsLoading": function() { return /* binding */ setIsLoading; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "webpack/sharing/consume/default/@reduxjs/toolkit/@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  isLoading: false
};
var loadingSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "loadingSlice",
  initialState: initialState,
  reducers: {
    setIsLoading: function setIsLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
});
var setIsLoading = loadingSlice.actions.setIsLoading;

/* harmony default export */ __webpack_exports__["default"] = (loadingSlice.reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFZSxTQUFTWSxPQUFULEdBQW1CO0VBQzlCLElBQU1DLFFBQVEsR0FBR1YsNkRBQVcsRUFBNUI7RUFDQSxJQUFNVyxRQUFRLEdBQUdKLHdEQUFXLEVBQTVCO0VBQ0EsSUFBSUssR0FBRyxHQUFHVCw0REFBWSxPQUFPLElBQW5CLEdBQTBCLGlCQUExQixHQUE4QyxFQUF4RDs7RUFFQSxJQUFNVSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBYUMsSUFBYixFQUFtQkMsUUFBbkIsRUFBZ0M7SUFDNUMsT0FBTztNQUNISCxLQUFLLEVBQUxBLEtBREc7TUFFSEMsR0FBRyxFQUFIQSxHQUZHO01BR0hDLElBQUksRUFBSkEsSUFIRztNQUlIQyxRQUFRLEVBQVJBO0lBSkcsQ0FBUDtFQU1ILENBUEQ7O0VBU0EsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWU7SUFBQSxvQkFDYjtNQUFLLE1BQU0sRUFBQyxjQUFaO01BQTJCLElBQUksRUFBQyxjQUFoQztNQUErQyxLQUFLLEVBQUMsY0FBckQ7TUFBb0UsT0FBTyxFQUFDLEtBQTVFO01BQWtGLEtBQUssRUFBQyw0QkFBeEY7TUFDUCxPQUFPLEVBQUMsMkJBREQ7TUFFUixtQkFBbUIsRUFBQyxlQUZaO01BQUEsdUJBR0o7UUFBRyxTQUFTLEVBQUMsMERBQWI7UUFBd0UsTUFBTSxFQUFDLE1BQS9FO1FBQUEsd0JBQ0E7VUFBTSxDQUFDLEVBQUM7UUFBUixFQURBLGVBT0E7VUFBTSxDQUFDLEVBQUM7UUFBUixFQVBBLGVBWUE7VUFBTSxDQUFDLEVBQUM7UUFBUixFQVpBLGVBa0JBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFs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O01BQ0E7SUFDSCxDQVJELENBU0E7OztJQUNBLE9BQU9BLFdBQVA7RUFDSCxDQVhELENBV0UsT0FBT1AsS0FBUCxFQUFjO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0VBQ0g7QUFDSixDQWZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3JlZHV4L1NsaWNlL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy90aXRsZS90aXRsZS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3VsdGlscy9oZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCJcbmltcG9ydCB7IE1kUGVvcGxlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBCc0ZpbGVFYXJtYXJrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBGY0RlcGFydG1lbnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIlxuaW1wb3J0IHsgY2hlY2tNaWNyb0ZlIH0gZnJvbSAnLi4vLi4vdWx0aWxzL2hlbHBlcic7XG5pbXBvcnQge0ltUHJvZmlsZX0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQge1RPS0VOfSBmcm9tIFwiLi4vLi4vdGl0bGUvdGl0bGVcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRJc0xvYWRpbmcgfSBmcm9tICcuLi8uLi9yZWR1eC9TbGljZS9sb2FkaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3ViTWVudSgpIHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgbGV0IHVyaSA9IGNoZWNrTWljcm9GZSgpID09PSB0cnVlID8gXCJwcm9maWxlLXNlcnZpY2VcIiA6IFwiXCI7XG5cbiAgICBjb25zdCBnZXRJdGVtID0gKGxhYmVsLCBrZXksIGljb24sIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcG9zaXRpb25JdGVtID0gKCk9PihcbiAgICAgICAgICAgIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNDMxMCA0NzgzIGMtMTA1IC0xOCAtMjI5IC04MCAtMjk5IC0xNTIgLTEwMCAtMTAwIC0xNDEgLTIwOCAtMTQxXG4gICAgICAgIC0zNjcgMCAtMzI1IDE3OCAtNTYzIDQ1MiAtNjA1IDIzNyAtMzcgNDY2IDExMiA1NTUgMzYyIDIyIDYyIDI3IDk2IDMxIDIwNiA0XG4gICAgICAgIDExNSAxIDE0MSAtMTcgMjAzIC0yOCA5MyAtNzAgMTU4IC0xMzggMjE5IC0xMTggMTA1IC0yOTUgMTU5IC00NDMgMTM0eiBtMTQ0XG4gICAgICAgIC0yMzggYzU5IC0xMCAxMzAgLTQ5IDE2NSAtOTIgOTcgLTExNyA3NCAtMzY5IC00NCAtNDg4IC01MCAtNDkgLTkwIC02NyAtMTY1XG4gICAgICAgIC03MyAtMTU1IC0xMSAtMjY4IDk3IC0zMDAgMjg4IC0yNiAxNTQgMTUgMjY3IDExOSAzMjggNDUgMjYgMTQyIDUzIDE3MSA0NyA4XG4gICAgICAgIC0yIDMzIC02IDU0IC0xMHpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjQyMCA0MTE0IGMtMTgwIC00OCAtMzIyIC0xODQgLTM2NCAtMzQ5IC0yMCAtNzUgLTIwIC0yMzcgLTEgLTMzMFxuICAgICAgICAyMiAtMTA2IDc2IC0yMDYgMTU0IC0yODUgMTAxIC0xMDMgMjEyIC0xNTAgMzUxIC0xNTAgMTM5IDAgMjUwIDQ3IDM1MSAxNTBcbiAgICAgICAgMTE1IDExNyAxNjkgMjYyIDE2OSA0NTQgMCAxNjEgLTQzIDI3NiAtMTQxIDM3NCAtNjMgNjMgLTE1MiAxMTMgLTI0NSAxMzcgLTczXG4gICAgICAgIDE5IC0yMDEgMTggLTI3NCAtMXogbTI2NyAtMjQ0IGMxMzQgLTU3IDE4OCAtMTk1IDE0OSAtMzc1IC0zNSAtMTY0IC0xMzcgLTI2MFxuICAgICAgICAtMjc2IC0yNjAgLTE2OSAwIC0yODggMTUzIC0yOTAgMzcxIC0xIDIxOSAyMTAgMzUzIDQxNyAyNjR6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTY1NSAzNDc0IGMtMTUyIC0zNyAtMjIzIC03MiAtMzA2IC0xNTQgLTEwNiAtMTA1IC0xMzggLTE5MiAtMTM5XG4gICAgICAgIC0zNzUgMCAtMTMxIDE4IC0yMTMgNjcgLTMxMyA5OSAtMjAwIDMxOCAtMzE5IDUyNiAtMjg0IDI3MiA0NyA0NDcgMjgzIDQ0N1xuICAgICAgICA2MDYgMCAyNDUgLTExNSA0MDggLTM0NSA0OTIgLTY0IDIzIC0yMDUgMzkgLTI1MCAyOHogbTE0MCAtMjM5IGM4NCAtMTQgMTY5XG4gICAgICAgIC04MCAyMDIgLTE1NiAzMiAtNzUgMjMgLTIzMiAtMTkgLTMyNyAtMjkgLTY0IC05MCAtMTI2IC0xNTAgLTE1MiAtNDIgLTE4IC02NVxuICAgICAgICAtMjEgLTExOCAtMTggLTc1IDYgLTExNSAyNCAtMTY1IDczIC0xMTggMTE5IC0xNDEgMzcxIC00NCA0ODggMTcgMjEgNTAgNDcgNzJcbiAgICAgICAgNTkgNDUgMjMgMTQyIDQ4IDE2NyA0MyA4IC0yIDMzIC02IDU1IC0xMHpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNDIxNiAzNDM0IGMtMTY0IC00MSAtMzEwIC0xNDIgLTM4NSAtMjY2IC00MCAtNjggLTU4IC0xMzUgLTExNVxuICAgICAgICAtNDQzIC02MiAtMzM2IC02MiAtMzUzIDQgLTM5OCAyMiAtMTUgNjQgLTE3IDQwMyAtMTcgNDE1IDAgNDIxIDEgNDUyIDYwIDE5XG4gICAgICAgIDM3IDE5IDczIDAgMTEwIC0zMCA1NyAtNDUgNjAgLTM2NSA2MCBsLTI5MCAwIDUgMjMgYzIgMTIgMjEgMTEwIDQwIDIxNyA0MFxuICAgICAgICAyMTcgNjMgMjc3IDEyNSAzMzQgMTkxIDE3MiA1NjMgMTI0IDY2NyAtODYgMTQgLTI3IDQyIC0xNTIgNzggLTM0MyAzMSAtMTY0XG4gICAgICAgIDYxIC0zMDcgNjYgLTMxNiA0MyAtODIgMTc0IC03NSAyMDkgMTEgMTIgMzAgMTAgNTIgLTE5IDIxNCAtNzMgNDAxIC04OCA0NjdcbiAgICAgICAgLTEyNiA1NDMgLTY0IDEyOSAtMTkyIDIzMiAtMzUwIDI4MyAtOTAgMjkgLTMwOCAzNyAtMzk5IDE0elwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0yNDI1IDI3ODYgYy0yMzEgLTQ2IC0zOTUgLTE3MyAtNDYzIC0zNTggLTEyIC0zMSAtNDcgLTE5NSAtNzggLTM2NVxuICAgICAgICBsLTU3IC0zMDcgMTkgLTM2IGMzNyAtNjkgNDYgLTcwIDQ0NCAtNjkgMjQ4IDAgMzY1IDQgMzkwIDEyIDQwIDE0IDgwIDY3IDgwXG4gICAgICAgIDEwNyAwIDQwIC00MCA5MyAtODAgMTA3IC0yNCA4IC0xMjUgMTIgLTMxMyAxMiBsLTI3OSAxIDYgMjggYzMgMTUgMjIgMTExIDQxXG4gICAgICAgIDIxNCA0MCAyMTAgNDMgMjIyIDg1IDI4MyA2MiA5MSAxOTAgMTQ1IDM0MCAxNDUgMTU3IDAgMjgwIC01NSAzNDcgLTE1NiAzN1xuICAgICAgICAtNTYgNDYgLTkyIDEyOCAtNTM2IDMwIC0xNjYgNDQgLTE5MSAxMDYgLTIwOCA1MyAtMTQgMTA2IDEwIDEzMyA2MCBsMTkgMzZcbiAgICAgICAgLTU3IDMwNyBjLTYwIDMyNiAtNzggMzkxIC0xMzQgNDc1IC02OSAxMDYgLTIwOSAxOTkgLTM1NyAyMzcgLTg2IDIyIC0yMzYgMjdcbiAgICAgICAgLTMyMCAxMXpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNTQzIDIxMjAgYy0yMDAgLTUyIC0zNTAgLTE3OCAtNDEyIC0zNDUgLTE4IC00OSAtMTMxIC02MjMgLTEzMVxuICAgICAgICAtNjY3IDAgLTMyIDI5IC03NyA2MCAtOTMgMjQgLTEzIDg5IC0xNSA0MDUgLTE1IDMzNCAwIDM4MCAyIDQwNSAxNyA3MyA0MyA3M1xuICAgICAgICAxNTMgMCAxOTYgLTI0IDE1IC02NSAxNyAtMzE5IDE3IC0xNjAgMCAtMjkxIDMgLTI5MSA3IDAgNDQgODYgNDQ4IDEwMyA0ODFcbiAgICAgICAgMTI2IDI1NCA2MDkgMjUzIDczMSAtMSAxOCAtMzcgNDAgLTEzMyA3NiAtMzI3IDYzIC0zNDcgNTYgLTMxOCA5NSAtMzU3IDQzXG4gICAgICAgIC00MyA5OCAtNDYgMTQ0IC03IDU2IDQ2IDU1IDY0IC01IDM4NyAtMzAgMTYxIC02MiAzMTYgLTcxIDM0NiAtNTMgMTcyIC0yMzVcbiAgICAgICAgMzIyIC00NDIgMzY2IC0xMDAgMjEgLTI1OCAxOSAtMzQ4IC01elwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0zNzM4IDE4NzkgYy0xNCAtNiAtMTU5IC0xNTMgLTMyMyAtMzMwIGwtMjk2IC0zMTkgLTU5OSAwIGMtMzk5IDBcbiAgICAgICAgLTYwNyAtNCAtNjIyIC0xMSAtMTMgLTUgLTE1MyAtMTU0IC0zMTMgLTMyOSBsLTI5MCAtMzE5IC01OTAgLTEgYy00MjkgLTFcbiAgICAgICAgLTU5OSAtNCAtNjI0IC0xMyAtNDggLTE3IC03NiAtNTggLTc2IC0xMTMgMCAtMzYgNiAtNDkgMzMgLTc2IGwzMiAtMzMgNjQyIC0zXG4gICAgICAgIGM0NzcgLTIgNjUwIDAgNjcxIDkgMTYgNyAxNTYgMTUyIDMyNCAzMzYgbDI5NSAzMjMgNjAyIDAgNjAyIDAgMzEgMjMgYzE3IDEyXG4gICAgICAgIDE1NiAxNTcgMzA5IDMyMiBsMjc4IDMwMCA2MDYgNSBjNjc5IDYgNjQ1IDIgNjc3IDc4IDEzIDMyIDE0IDQyIDIgNzYgLTggMjJcbiAgICAgICAgLTI3IDQ5IC00MiA2MCAtMjggMjEgLTM2IDIxIC02NjUgMjMgLTQwMSAxIC02NDcgLTIgLTY2NCAtOHpcIi8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIGdldEl0ZW0oXCJOaMOibiBz4buxXCIsIFwic3ViMVwiLCA8TWRQZW9wbGVPdXRsaW5lIC8+LCBbXG4gICAgICAgICAgICBnZXRJdGVtKFwiSOG7kyBzxqFcIiwgXCIxXCIsIDxCc0ZpbGVFYXJtYXJrRmlsbCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKFwiQuG7mSBwaOG6rW4gY8O0bmcgdMOhY1wiLCBcIjJcIiwgPEZjRGVwYXJ0bWVudCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKFwiQ2jhu6ljIGRhbmgsIGNo4bupYyB24bulXCIsIFwiM1wiLCBwb3NpdGlvbkl0ZW0oKSksXG4gICAgICAgICAgICBnZXRJdGVtKFwiVGjDtG5nIHRpbiBjw6EgbmjDom5cIiwgXCI0XCIsIDxJbVByb2ZpbGUgLz4pXG4gICAgICAgIF0pXG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17W2BzdWIxYF19XG4gICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShgJHt1cml9L2hyL3Byb2ZpbGVgKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIjJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYCR7dXJpfS9oci9kZXBhcnRtZW50YClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAke3VyaX0vaHIvcG9zaXRpb25gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGUua2V5ID09PSBcIjRcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZCA9IGp3dF9kZWNvZGUoVE9LRU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHtpZH0gPSBkZWNvZGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYCR7dXJpfS9teXByb2ZpbGUvJHtpZH1gKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCB7Y3JlYXRlU2xpY2V9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxufVxuXG5jb25zdCBsb2FkaW5nU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJsb2FkaW5nU2xpY2VcIixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6e1xuICAgICAgICBzZXRJc0xvYWRpbmc6IChzdGF0ZSxhY3Rpb24pPT57XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7c2V0SXNMb2FkaW5nfSA9IGxvYWRpbmdTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1NsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IHsgY2hlY2tNaWNyb0ZlLCBnZXRUb2tlbkluQ29va2llIH0gZnJvbSBcIi4uL3VsdGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gZ2V0VG9rZW5JbkNvb2tpZSgpO1xuXG4vLyBUT0tFTiBBRE1JTiwgTkjDgk4gU+G7sFxuLy8gZXhwb3J0IGNvbnN0IFRPS0VOID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNU3dpWlhod0lqb3lOelV3TkRFeE1EZzNmUS51V2VFSkVYSHlOeXN3ODVrMjJtMHM2ZEZOaTRuSkZBTzhOUzhsZVk2ZnlBXCI7XG4vLyBUT0tFTiB1c2VyXG4vLyBleHBvcnQgY29uc3QgVE9LRU4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk5pd2laWGh3SWpveU56VXdORFkzTURrd2ZRLmpTMkxwU3JwQ1Nvc2p1TUxUMU1KY3VvMU5JZW1tZnYtaGtxbzR5Y2lOeThcIlxuZXhwb3J0IGNvbnN0IGxvY2FsID0gY2hlY2tNaWNyb0ZlKCkgPT09IHRydWUgPyBcImh0dHBzOi8vcHJvZmlsZXNlcnZpY2UudHVvaXRyZS52blwiIDogXCJcIlxuXG5cbmV4cG9ydCBjb25zdCBxdWFUcmluaExWSFQgPSBcIlF1w6EgdHLDrG5oIGzDoG0gdmnhu4djIHbDoCBo4buNYyB04bqtcFwiO1xuZXhwb3J0IGNvbnN0IHRoYW1HaWFUb0NodWNDVCA9IFwiVGhhbSBnaWEgY8OhYyB04buVIGNo4bupYyBjaMOtbmggdHLhu4ssIGPDoWMgaMO04buLIG5naOG7gSBuZ2hp4buHcFwiO1xuZXhwb3J0IGNvbnN0IGRhb1RhbyA9IFwixJDDoG8gdOG6oW9cIjtcbmV4cG9ydCBjb25zdCBib2lEdW9uZyA9IFwiQuG7k2kgZMaw4buhbmdcIjtcbmV4cG9ydCBjb25zdCBraGVuVGh1b25nID0gXCJLaGVuIHRoxrDhu59uZ1wiO1xuZXhwb3J0IGNvbnN0IGt5THVhdCA9IFwiS+G7tyBsdeG6rXRcIjtcbmV4cG9ydCBjb25zdCBsaWNoU3VCYW5UaGFuID0gXCJM4buLY2ggc+G7rSBi4bqjbiB0aMOiblwiO1xuZXhwb3J0IGNvbnN0IHF1YW5IZUdpYURpbmggPSBcIlF1YW4gaOG7hyBnaWEgxJHDrG5oXCI7XG5leHBvcnQgY29uc3Qgbm9pU2luaF9TdGVwMSA9IFwiTsahaSBzaW5oXCJcbmV4cG9ydCBjb25zdCBxdWVRdWFuX1N0ZXAxID0gXCJRdcOqIHF1w6FuXCJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9JRCA9IFwiR0VUX1BST0ZJTEVfQllfSURcIjtcbmV4cG9ydCBjb25zdCBHRVRfUFJPVklOQ0VTID0gXCJHRVRfUFJPVklOQ0VTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRSA9IFwiR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfSE9NRV9UT1dOID0gXCJHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfQUREUkVTUyA9IFwiR0VUX0RJU1RSSUNUU19BRERSRVNTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19IT0tIQVUgPSBcIkdFVF9ESVNUUklDVFNfSE9LSEFVXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQOCA9IFwiR0VUX0RJU1RSSUNUU19TVEVQOFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDcgPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA5ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA5XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQN19DT04gPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0ZJTEUgPSBcIlVQREFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BST0ZJTEUgPSBcIkNSRUFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgT05MWV9DUkVBVEVfUFJPRklMRSA9IFwiT05MWV9DUkVBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xJU1QgPSBcIkdFVF9VU0VSX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9JTkZPUk1BVElPTiA9IFwiR0VUX1VTRVJfSU5GT1JNQVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQX1BPUyA9IFwiR0VUX0RFUEFSVE1FTlRfUE9TSVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfUEFSVCA9IFwiR0VUX1BBUlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfQVZBVEFSID0gXCJHRVRfQVZBVEFSXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RFUF9QT1MgPSBcIkRFTEVURV9ERVBfUE9TXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUEFSVE1FTlRfTElTVCA9IFwiR0VUX0RFUEFSVE1FTlRfTElTVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ERVBBUlRNRU5UID0gXCJVUERBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UX0lORk9SID0gXCJHRVRfREVQQVJUTUVOVF9JTkZPUlwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9ERVBBUlRNRU5UID0gXCJDUkVBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NJVElPTlNfTElTVCA9IFwiR0VUX1BPU0lUSU9OU19MSVNUXCI7XG5leHBvcnQgY29uc3QgR0VUX1BPU0lUSU9OX1RZUEVfTElTVCA9IFwiR0VUX1BPU0lUSU9OX1RZUEVfTElTVFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NJVElPTl9UWVBFID0gXCJDUkVBVEVfUE9TSVRJT05fVFlQRVwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NJVElPTl9UWVBFID0gXCJVUERBVEVfUE9TSVRJT05fVFlQRVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NJVElPTl9UWVBFID0gXCJERUxFVEVfUE9TSVRJT05fVFlQRVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIkRFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJTT05BTF9ISVNUT1JZID0gXCJHRVRfUEVSU09OQUxfSElTVE9SWVwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUllcIlxuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJTT05BTF9ISVNUT1JZID0gXCJERUxFVEVfUEVSU09OQUxfSElTVE9SWVwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBUlRZID0gXCJDUkVBVEVfUEFSVFlcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9QQVJUWSA9IFwiVVBEQVRFX1BBUlRZXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfT1JHQU5JWkFUSU9OID0gXCJDUkVBVEVfT1JHQU5JWkFUSU9OXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfT1JHQU5JWkFUSU9OID0gXCJVUERBVEVfT1JHQU5JWkFUSU9OXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfT1JHQU5JWkFUSU9OID0gXCJERUxFVEVfT1JHQU5JWkFUSU9OXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfVFJBSU5JTkcgPSBcIkNSRUFURV9UUkFJTklOR1wiXG5leHBvcnQgY29uc3QgVVBEQVRFX1RSQUlOSU5HID0gXCJVUERBVEVfVFJBSU5JTkdcIlxuZXhwb3J0IGNvbnN0IERFTEVURV9UUkFJTklORyA9IFwiREVMRVRFX1RSQUlOSU5HXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIkNSRUFURV9SRVdBUkRfRElTQ0lQTElORVwiXG5leHBvcnQgY29uc3QgREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJERUxFVEVfUkVXQVJEX0RJU0NJUExJTkVcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCA9IFwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQID0gXCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUFwiXG5leHBvcnQgY29uc3QgR0VUX0RFUF9QT1NfVE9fU0VBUkNIID0gXCJHRVRfREVQX1BPU19UT19TRUFSQ0hcIlxuZXhwb3J0IGNvbnN0IFNFQVJDSCA9IFwiU0VBUkNIXCJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9VU0VSX0lEID0gXCJHRVRfUFJPRklMRV9CWV9VU0VSX0lEXCJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9UT0tFTiA9IFwiR0VUX1BST0ZJTEVfQllfVE9LRU5cIiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IGRvY0Nvb2tpZSBmcm9tIFwiZG9jLWNvb2tpZXNcIlxuXG5leHBvcnQgbGV0IGhhbmRsZURhdGVUaW1lID0gKGRhdGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgY29udmVydDtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHThu6sgc+G7kSBzYW5nIGNodeG7l2kgREQtTU0tWVlZWVxuICAgICAgICAgICAgbGV0IGNvbnZlcnQxID0gbW9tZW50KG5ldyBEYXRlKGRhdGUpKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxldCBjb252ZXJ0VG9OdW1iZXIgPSBEYXRlLnBhcnNlKGRhdGUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb252ZXJ0VG9OdW1iZXIpXG4gICAgICAgICAgICBsZXQgY29udmVydDEgPSBtb21lbnQobmV3IERhdGUoZGF0ZSkpLmZvcm1hdChcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnZlcnQxKVxuICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udmVydClcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgY2hlY2tNaWNyb0ZlID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjMwMDBcIikgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJwcm9maWxlc2VydmljZVwiKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjMwMDFcIikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGxldCBnZXRUb2tlbkluQ29va2llID0gKCk9PntcbiAgICB0cnkge1xuICAgICAgICBsZXQgdG9rZW5Db29raWUgPSBkb2NDb29raWUuZ2V0SXRlbShcInVzZXJ0b2tlblwiKVxuICAgICAgICBpZighdG9rZW5Db29raWUpe1xuICAgICAgICAgICAgLy8ga2hpIHB1c2ggY29kZSBsw6puIHNlcnZlclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIC8vIEtoaSB0ZXN0IHRyw6puIGxvY2FsXG4gICAgICAgICAgICAvLyByZXR1cm4gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNelUyTENKbGVIQWlPakkzTlRBMU5UUTNNekI5LmRyQk9fRzdGOUpDRGk3WG1MUm1mMTRRdlVxWWU4Y1c0aW5CSWJRc21SWUlcIlxuICAgICAgICAgICAgLy8gcmV0dXJuIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TVN3aVpYaHdJam95TnpVd05ERXhNRGczZlEudVdlRUpFWEh5Tnlzdzg1azIybTBzNmRGTmk0bkpGQU84TlM4bGVZNmZ5QVwiXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codG9rZW5Db29raWUpO1xuICAgICAgICByZXR1cm4gdG9rZW5Db29raWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIk1kUGVvcGxlT3V0bGluZSIsInVzZU5hdmlnYXRlIiwiQnNGaWxlRWFybWFya0ZpbGwiLCJGY0RlcGFydG1lbnQiLCJjaGVja01pY3JvRmUiLCJJbVByb2ZpbGUiLCJqd3RfZGVjb2RlIiwiVE9LRU4iLCJ1c2VEaXNwYXRjaCIsInNldElzTG9hZGluZyIsIlN1Yk1lbnUiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXJpIiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwicG9zaXRpb25JdGVtIiwiaXRlbXMiLCJlIiwiZGVjb2RlZCIsImlkIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciLCJsb2FkaW5nU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciIsImdldFRva2VuSW5Db29raWUiLCJsb2NhbCIsInF1YVRyaW5oTFZIVCIsInRoYW1HaWFUb0NodWNDVCIsImRhb1RhbyIsImJvaUR1b25nIiwia2hlblRodW9uZyIsImt5THVhdCIsImxpY2hTdUJhblRoYW4iLCJxdWFuSGVHaWFEaW5oIiwibm9pU2luaF9TdGVwMSIsInF1ZVF1YW5fU3RlcDEiLCJHRVRfUFJPRklMRV9CWV9JRCIsIkdFVF9QUk9WSU5DRVMiLCJHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFIiwiR0VUX0RJU1RSSUNUU19IT01FX1RPV04iLCJHRVRfRElTVFJJQ1RTX0FERFJFU1MiLCJHRVRfRElTVFJJQ1RTX0hPS0hBVSIsIkdFVF9ESVNUUklDVFNfU1RFUDgiLCJHRVRfRElTVFJJQ1RTX1NURVA3IiwiR0VUX0RJU1RSSUNUU19TVEVQOSIsIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OIiwiVVBEQVRFX1BST0ZJTEUiLCJDUkVBVEVfUFJPRklMRSIsIk9OTFlfQ1JFQVRFX1BST0ZJTEUiLCJHRVRfVVNFUl9MSVNUIiwiR0VUX1VTRVJfSU5GT1JNQVRJT04iLCJHRVRfREVQX1BPUyIsIkdFVF9QQVJUIiwiR0VUX0FWQVRBUiIsIkRFTEVURV9ERVBfUE9TIiwiR0VUX0RFUEFSVE1FTlRfTElTVCIsIlVQREFURV9ERVBBUlRNRU5UIiwiR0VUX0RFUEFSVE1FTlRfSU5GT1IiLCJDUkVBVEVfREVQQVJUTUVOVCIsIkdFVF9QT1NJVElPTlNfTElTVCIsIkdFVF9QT1NJVElPTl9UWVBFX0xJU1QiLCJDUkVBVEVfUE9TSVRJT05fVFlQRSIsIlVQREFURV9QT1NJVElPTl9UWVBFIiwiREVMRVRFX1BPU0lUSU9OX1RZUEUiLCJDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJHRVRfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZIiwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJERUxFVEVfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QQVJUWSIsIlVQREFURV9QQVJUWSIsIkNSRUFURV9PUkdBTklaQVRJT04iLCJVUERBVEVfT1JHQU5JWkFUSU9OIiwiREVMRVRFX09SR0FOSVpBVElPTiIsIkNSRUFURV9UUkFJTklORyIsIlVQREFURV9UUkFJTklORyIsIkRFTEVURV9UUkFJTklORyIsIkNSRUFURV9SRVdBUkRfRElTQ0lQTElORSIsIkRFTEVURV9SRVdBUkRfRElTQ0lQTElORSIsIlVQREFURV9SRVdBUkRfRElTQ0lQTElORSIsIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQIiwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAiLCJHRVRfREVQX1BPU19UT19TRUFSQ0giLCJTRUFSQ0giLCJHRVRfUFJPRklMRV9CWV9VU0VSX0lEIiwiR0VUX1BST0ZJTEVfQllfVE9LRU4iLCJtb21lbnQiLCJkb2NDb29raWUiLCJoYW5kbGVEYXRlVGltZSIsImRhdGUiLCJjb252ZXJ0IiwiY29udmVydDEiLCJEYXRlIiwiZm9ybWF0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5jbHVkZXMiLCJ0b2tlbkNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=