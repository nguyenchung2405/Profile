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

  var items = [getItem("Nhân sự", "sub1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdPeopleOutline, {}), [getItem("Hồ sơ", "1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_10__.BsFileEarmarkFill, {})), getItem("Bộ phận công tác", "2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_11__.FcDepartment, {})), getItem("Chức danh, chức vụ", "3", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_11__.FcDepartment, {})), getItem("Thông tin cá nhân", "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_12__.ImProfile, {}))])];
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
          dispatch((0,_redux_Slice_loading__WEBPACK_IMPORTED_MODULE_7__.setIsLoading)(true));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNZLE9BQVQsR0FBbUI7RUFDOUIsSUFBTUMsUUFBUSxHQUFHViw2REFBVyxFQUE1QjtFQUNBLElBQU1XLFFBQVEsR0FBR0osd0RBQVcsRUFBNUI7RUFDQSxJQUFJSyxHQUFHLEdBQUdULDREQUFZLE9BQU8sSUFBbkIsR0FBMEIsaUJBQTFCLEdBQThDLEVBQXhEOztFQUVBLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFhQyxJQUFiLEVBQW1CQyxRQUFuQixFQUFnQztJQUM1QyxPQUFPO01BQ0hILEtBQUssRUFBTEEsS0FERztNQUVIQyxHQUFHLEVBQUhBLEdBRkc7TUFHSEMsSUFBSSxFQUFKQSxJQUhHO01BSUhDLFFBQVEsRUFBUkE7SUFKRyxDQUFQO0VBTUgsQ0FQRDs7RUFTQSxJQUFNQyxLQUFLLEdBQUcsQ0FDVkwsT0FBTyxDQUFDLFNBQUQsRUFBWSxNQUFaLGVBQW9CLHVEQUFDLDJEQUFELEtBQXBCLEVBQXlDLENBQzVDQSxPQUFPLENBQUMsT0FBRCxFQUFVLEdBQVYsZUFBZSx1REFBQyw4REFBRCxLQUFmLENBRHFDLEVBRTVDQSxPQUFPLENBQUMsa0JBQUQsRUFBcUIsR0FBckIsZUFBMEIsdURBQUMseURBQUQsS0FBMUIsQ0FGcUMsRUFHNUNBLE9BQU8sQ0FBQyxvQkFBRCxFQUF1QixHQUF2QixlQUE0Qix1REFBQyx5REFBRCxLQUE1QixDQUhxQyxFQUk1Q0EsT0FBTyxDQUFDLG1CQUFELEVBQXNCLEdBQXRCLGVBQTJCLHVEQUFDLHNEQUFELEtBQTNCLENBSnFDLENBQXpDLENBREcsQ0FBZDtFQVNBLG9CQUNJO0lBQUssU0FBUyxF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ZkEsWUFBZSxHQUFNO0VBQzVCLElBQUl5RyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxRQUFyQixDQUE4QixNQUE5QixLQUF5Q0gsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsUUFBckIsQ0FBOEIsZ0JBQTlCLENBQXpDLElBQTRGSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxRQUFyQixDQUE4QixNQUE5QixDQUFoRyxFQUF1STtJQUNuSSxPQUFPLEtBQVA7RUFDSCxDQUZELE1BRU87SUFDSCxPQUFPLElBQVA7RUFDSDtBQUNKLENBTk07QUFRQSxJQUFJOUUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFJO0VBQzlCLElBQUk7SUFDQSxJQUFJK0UsV0FBVyxHQUFHZCwwREFBQSxDQUFrQixXQUFsQixDQUFsQjs7SUFDQSxJQUFHLENBQUNjLFdBQUosRUFBZ0I7TUFDWjtNQUNBLE9BQU8sSUFBUCxDQUZZLENBR1o7TUFDQTtNQUNBO0lBQ0gsQ0FSRCxDQVNBOzs7SUFDQSxPQUFPQSxXQUFQO0VBQ0gsQ0FYRCxDQVdFLE9BQU9QLEtBQVAsRUFBYztJQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtFQUNIO0FBQ0osQ0FmTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9yZWR1eC9TbGljZS9sb2FkaW5nLmpzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvdGl0bGUvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy91bHRpbHMvaGVscGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiXG5pbXBvcnQgeyBNZFBlb3BsZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnNGaWxlRWFybWFya0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHsgRmNEZXBhcnRtZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCJcbmltcG9ydCB7IGNoZWNrTWljcm9GZSB9IGZyb20gJy4uLy4uL3VsdGlscy9oZWxwZXInO1xuaW1wb3J0IHtJbVByb2ZpbGV9IGZyb20gXCJyZWFjdC1pY29ucy9pbVwiXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IHtUT0tFTn0gZnJvbSBcIi4uLy4uL3RpdGxlL3RpdGxlXCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2V0SXNMb2FkaW5nIH0gZnJvbSAnLi4vLi4vcmVkdXgvU2xpY2UvbG9hZGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Yk1lbnUoKSB7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGxldCB1cmkgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwicHJvZmlsZS1zZXJ2aWNlXCIgOiBcIlwiO1xuXG4gICAgY29uc3QgZ2V0SXRlbSA9IChsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICBnZXRJdGVtKFwiTmjDom4gc+G7sVwiLCBcInN1YjFcIiwgPE1kUGVvcGxlT3V0bGluZSAvPiwgW1xuICAgICAgICAgICAgZ2V0SXRlbShcIkjhu5Mgc8ahXCIsIFwiMVwiLCA8QnNGaWxlRWFybWFya0ZpbGwgLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbShcIkLhu5kgcGjhuq1uIGPDtG5nIHTDoWNcIiwgXCIyXCIsIDxGY0RlcGFydG1lbnQgLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbShcIkNo4bupYyBkYW5oLCBjaOG7qWMgduG7pVwiLCBcIjNcIiwgPEZjRGVwYXJ0bWVudCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKFwiVGjDtG5nIHRpbiBjw6EgbmjDom5cIiwgXCI0XCIsIDxJbVByb2ZpbGUgLz4pXG4gICAgICAgIF0pXG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17W2BzdWIxYF19XG4gICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShgJHt1cml9L2hyL3Byb2ZpbGVgKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIjJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYCR7dXJpfS9oci9kZXBhcnRtZW50YClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAke3VyaX0vaHIvcG9zaXRpb25gKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGUua2V5ID09PSBcIjRcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGVjb2RlZCA9IGp3dF9kZWNvZGUoVE9LRU4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHtpZH0gPSBkZWNvZGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYCR7dXJpfS9teXByb2ZpbGUvJHtpZH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0SXNMb2FkaW5nKHRydWUpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCB7Y3JlYXRlU2xpY2V9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxufVxuXG5jb25zdCBsb2FkaW5nU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJsb2FkaW5nU2xpY2VcIixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgcmVkdWNlcnM6e1xuICAgICAgICBzZXRJc0xvYWRpbmc6IChzdGF0ZSxhY3Rpb24pPT57XG4gICAgICAgICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbmV4cG9ydCBjb25zdCB7c2V0SXNMb2FkaW5nfSA9IGxvYWRpbmdTbGljZS5hY3Rpb25zO1xuZXhwb3J0IGRlZmF1bHQgbG9hZGluZ1NsaWNlLnJlZHVjZXI7IiwiaW1wb3J0IHsgY2hlY2tNaWNyb0ZlLCBnZXRUb2tlbkluQ29va2llIH0gZnJvbSBcIi4uL3VsdGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gZ2V0VG9rZW5JbkNvb2tpZSgpO1xuXG4vLyBUT0tFTiBBRE1JTiwgTkjDgk4gU+G7sFxuLy8gZXhwb3J0IGNvbnN0IFRPS0VOID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNU3dpWlhod0lqb3lOelV3TkRFeE1EZzNmUS51V2VFSkVYSHlOeXN3ODVrMjJtMHM2ZEZOaTRuSkZBTzhOUzhsZVk2ZnlBXCI7XG4vLyBUT0tFTiB1c2VyXG4vLyBleHBvcnQgY29uc3QgVE9LRU4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk5pd2laWGh3SWpveU56VXdORFkzTURrd2ZRLmpTMkxwU3JwQ1Nvc2p1TUxUMU1KY3VvMU5JZW1tZnYtaGtxbzR5Y2lOeThcIlxuZXhwb3J0IGNvbnN0IGxvY2FsID0gY2hlY2tNaWNyb0ZlKCkgPT09IHRydWUgPyBcImh0dHBzOi8vcHJvZmlsZXNlcnZpY2UudHVvaXRyZS52blwiIDogXCJcIlxuXG5cbmV4cG9ydCBjb25zdCBxdWFUcmluaExWSFQgPSBcIlF1w6EgdHLDrG5oIGzDoG0gdmnhu4djIHbDoCBo4buNYyB04bqtcFwiO1xuZXhwb3J0IGNvbnN0IHRoYW1HaWFUb0NodWNDVCA9IFwiVGhhbSBnaWEgY8OhYyB04buVIGNo4bupYyBjaMOtbmggdHLhu4ssIGPDoWMgaMO04buLIG5naOG7gSBuZ2hp4buHcFwiO1xuZXhwb3J0IGNvbnN0IGRhb1RhbyA9IFwixJDDoG8gdOG6oW9cIjtcbmV4cG9ydCBjb25zdCBib2lEdW9uZyA9IFwiQuG7k2kgZMaw4buhbmdcIjtcbmV4cG9ydCBjb25zdCBraGVuVGh1b25nID0gXCJLaGVuIHRoxrDhu59uZ1wiO1xuZXhwb3J0IGNvbnN0IGt5THVhdCA9IFwiS+G7tyBsdeG6rXRcIjtcbmV4cG9ydCBjb25zdCBsaWNoU3VCYW5UaGFuID0gXCJM4buLY2ggc+G7rSBi4bqjbiB0aMOiblwiO1xuZXhwb3J0IGNvbnN0IHF1YW5IZUdpYURpbmggPSBcIlF1YW4gaOG7hyBnaWEgxJHDrG5oXCI7XG5leHBvcnQgY29uc3Qgbm9pU2luaF9TdGVwMSA9IFwiTsahaSBzaW5oXCJcbmV4cG9ydCBjb25zdCBxdWVRdWFuX1N0ZXAxID0gXCJRdcOqIHF1w6FuXCJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9JRCA9IFwiR0VUX1BST0ZJTEVfQllfSURcIjtcbmV4cG9ydCBjb25zdCBHRVRfUFJPVklOQ0VTID0gXCJHRVRfUFJPVklOQ0VTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRSA9IFwiR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfSE9NRV9UT1dOID0gXCJHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfQUREUkVTUyA9IFwiR0VUX0RJU1RSSUNUU19BRERSRVNTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19IT0tIQVUgPSBcIkdFVF9ESVNUUklDVFNfSE9LSEFVXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQOCA9IFwiR0VUX0RJU1RSSUNUU19TVEVQOFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDcgPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA5ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA5XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQN19DT04gPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0ZJTEUgPSBcIlVQREFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BST0ZJTEUgPSBcIkNSRUFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgT05MWV9DUkVBVEVfUFJPRklMRSA9IFwiT05MWV9DUkVBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xJU1QgPSBcIkdFVF9VU0VSX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9JTkZPUk1BVElPTiA9IFwiR0VUX1VTRVJfSU5GT1JNQVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQX1BPUyA9IFwiR0VUX0RFUEFSVE1FTlRfUE9TSVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfUEFSVCA9IFwiR0VUX1BBUlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfQVZBVEFSID0gXCJHRVRfQVZBVEFSXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RFUF9QT1MgPSBcIkRFTEVURV9ERVBfUE9TXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUEFSVE1FTlRfTElTVCA9IFwiR0VUX0RFUEFSVE1FTlRfTElTVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ERVBBUlRNRU5UID0gXCJVUERBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UX0lORk9SID0gXCJHRVRfREVQQVJUTUVOVF9JTkZPUlwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9ERVBBUlRNRU5UID0gXCJDUkVBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NJVElPTlNfTElTVCA9IFwiR0VUX1BPU0lUSU9OU19MSVNUXCI7XG5leHBvcnQgY29uc3QgR0VUX1BPU0lUSU9OX1RZUEVfTElTVCA9IFwiR0VUX1BPU0lUSU9OX1RZUEVfTElTVFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NJVElPTl9UWVBFID0gXCJDUkVBVEVfUE9TSVRJT05fVFlQRVwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NJVElPTl9UWVBFID0gXCJVUERBVEVfUE9TSVRJT05fVFlQRVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NJVElPTl9UWVBFID0gXCJERUxFVEVfUE9TSVRJT05fVFlQRVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIkRFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJTT05BTF9ISVNUT1JZID0gXCJHRVRfUEVSU09OQUxfSElTVE9SWVwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUllcIlxuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJTT05BTF9ISVNUT1JZID0gXCJERUxFVEVfUEVSU09OQUxfSElTVE9SWVwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBUlRZID0gXCJDUkVBVEVfUEFSVFlcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9QQVJUWSA9IFwiVVBEQVRFX1BBUlRZXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfT1JHQU5JWkFUSU9OID0gXCJDUkVBVEVfT1JHQU5JWkFUSU9OXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfT1JHQU5JWkFUSU9OID0gXCJVUERBVEVfT1JHQU5JWkFUSU9OXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfT1JHQU5JWkFUSU9OID0gXCJERUxFVEVfT1JHQU5JWkFUSU9OXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfVFJBSU5JTkcgPSBcIkNSRUFURV9UUkFJTklOR1wiXG5leHBvcnQgY29uc3QgVVBEQVRFX1RSQUlOSU5HID0gXCJVUERBVEVfVFJBSU5JTkdcIlxuZXhwb3J0IGNvbnN0IERFTEVURV9UUkFJTklORyA9IFwiREVMRVRFX1RSQUlOSU5HXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIkNSRUFURV9SRVdBUkRfRElTQ0lQTElORVwiXG5leHBvcnQgY29uc3QgREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJERUxFVEVfUkVXQVJEX0RJU0NJUExJTkVcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCA9IFwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQID0gXCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUFwiXG5leHBvcnQgY29uc3QgR0VUX0RFUF9QT1NfVE9fU0VBUkNIID0gXCJHRVRfREVQX1BPU19UT19TRUFSQ0hcIlxuZXhwb3J0IGNvbnN0IFNFQVJDSCA9IFwiU0VBUkNIXCJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9VU0VSX0lEID0gXCJHRVRfUFJPRklMRV9CWV9VU0VSX0lEXCJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9UT0tFTiA9IFwiR0VUX1BST0ZJTEVfQllfVE9LRU5cIiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IGRvY0Nvb2tpZSBmcm9tIFwiZG9jLWNvb2tpZXNcIlxuXG5leHBvcnQgbGV0IGhhbmRsZURhdGVUaW1lID0gKGRhdGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgY29udmVydDtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHThu6sgc+G7kSBzYW5nIGNodeG7l2kgREQtTU0tWVlZWVxuICAgICAgICAgICAgbGV0IGNvbnZlcnQxID0gbW9tZW50KG5ldyBEYXRlKGRhdGUpKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxldCBjb252ZXJ0VG9OdW1iZXIgPSBEYXRlLnBhcnNlKGRhdGUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb252ZXJ0VG9OdW1iZXIpXG4gICAgICAgICAgICBsZXQgY29udmVydDEgPSBtb21lbnQobmV3IERhdGUoZGF0ZSkpLmZvcm1hdChcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnZlcnQxKVxuICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udmVydClcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgY2hlY2tNaWNyb0ZlID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjMwMDBcIikgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJwcm9maWxlc2VydmljZVwiKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjMwMDFcIikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGxldCBnZXRUb2tlbkluQ29va2llID0gKCk9PntcbiAgICB0cnkge1xuICAgICAgICBsZXQgdG9rZW5Db29raWUgPSBkb2NDb29raWUuZ2V0SXRlbShcInVzZXJ0b2tlblwiKVxuICAgICAgICBpZighdG9rZW5Db29raWUpe1xuICAgICAgICAgICAgLy8ga2hpIHB1c2ggY29kZSBsw6puIHNlcnZlclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIC8vIEtoaSB0ZXN0IHRyw6puIGxvY2FsXG4gICAgICAgICAgICAvLyByZXR1cm4gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNelUyTENKbGVIQWlPakkzTlRBMU5UUTNNekI5LmRyQk9fRzdGOUpDRGk3WG1MUm1mMTRRdlVxWWU4Y1c0aW5CSWJRc21SWUlcIlxuICAgICAgICAgICAgLy8gcmV0dXJuIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TVN3aVpYaHdJam95TnpVd05ERXhNRGczZlEudVdlRUpFWEh5Tnlzdzg1azIybTBzNmRGTmk0bkpGQU84TlM4bGVZNmZ5QVwiXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codG9rZW5Db29raWUpO1xuICAgICAgICByZXR1cm4gdG9rZW5Db29raWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIk1kUGVvcGxlT3V0bGluZSIsInVzZU5hdmlnYXRlIiwiQnNGaWxlRWFybWFya0ZpbGwiLCJGY0RlcGFydG1lbnQiLCJjaGVja01pY3JvRmUiLCJJbVByb2ZpbGUiLCJqd3RfZGVjb2RlIiwiVE9LRU4iLCJ1c2VEaXNwYXRjaCIsInNldElzTG9hZGluZyIsIlN1Yk1lbnUiLCJuYXZpZ2F0ZSIsImRpc3BhdGNoIiwidXJpIiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwiaXRlbXMiLCJlIiwiZGVjb2RlZCIsImlkIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJpc0xvYWRpbmciLCJsb2FkaW5nU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciIsImdldFRva2VuSW5Db29raWUiLCJsb2NhbCIsInF1YVRyaW5oTFZIVCIsInRoYW1HaWFUb0NodWNDVCIsImRhb1RhbyIsImJvaUR1b25nIiwia2hlblRodW9uZyIsImt5THVhdCIsImxpY2hTdUJhblRoYW4iLCJxdWFuSGVHaWFEaW5oIiwibm9pU2luaF9TdGVwMSIsInF1ZVF1YW5fU3RlcDEiLCJHRVRfUFJPRklMRV9CWV9JRCIsIkdFVF9QUk9WSU5DRVMiLCJHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFIiwiR0VUX0RJU1RSSUNUU19IT01FX1RPV04iLCJHRVRfRElTVFJJQ1RTX0FERFJFU1MiLCJHRVRfRElTVFJJQ1RTX0hPS0hBVSIsIkdFVF9ESVNUUklDVFNfU1RFUDgiLCJHRVRfRElTVFJJQ1RTX1NURVA3IiwiR0VUX0RJU1RSSUNUU19TVEVQOSIsIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OIiwiVVBEQVRFX1BST0ZJTEUiLCJDUkVBVEVfUFJPRklMRSIsIk9OTFlfQ1JFQVRFX1BST0ZJTEUiLCJHRVRfVVNFUl9MSVNUIiwiR0VUX1VTRVJfSU5GT1JNQVRJT04iLCJHRVRfREVQX1BPUyIsIkdFVF9QQVJUIiwiR0VUX0FWQVRBUiIsIkRFTEVURV9ERVBfUE9TIiwiR0VUX0RFUEFSVE1FTlRfTElTVCIsIlVQREFURV9ERVBBUlRNRU5UIiwiR0VUX0RFUEFSVE1FTlRfSU5GT1IiLCJDUkVBVEVfREVQQVJUTUVOVCIsIkdFVF9QT1NJVElPTlNfTElTVCIsIkdFVF9QT1NJVElPTl9UWVBFX0xJU1QiLCJDUkVBVEVfUE9TSVRJT05fVFlQRSIsIlVQREFURV9QT1NJVElPTl9UWVBFIiwiREVMRVRFX1BPU0lUSU9OX1RZUEUiLCJDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJHRVRfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZIiwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJERUxFVEVfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QQVJUWSIsIlVQREFURV9QQVJUWSIsIkNSRUFURV9PUkdBTklaQVRJT04iLCJVUERBVEVfT1JHQU5JWkFUSU9OIiwiREVMRVRFX09SR0FOSVpBVElPTiIsIkNSRUFURV9UUkFJTklORyIsIlVQREFURV9UUkFJTklORyIsIkRFTEVURV9UUkFJTklORyIsIkNSRUFURV9SRVdBUkRfRElTQ0lQTElORSIsIkRFTEVURV9SRVdBUkRfRElTQ0lQTElORSIsIlVQREFURV9SRVdBUkRfRElTQ0lQTElORSIsIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQIiwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAiLCJHRVRfREVQX1BPU19UT19TRUFSQ0giLCJTRUFSQ0giLCJHRVRfUFJPRklMRV9CWV9VU0VSX0lEIiwiR0VUX1BST0ZJTEVfQllfVE9LRU4iLCJtb21lbnQiLCJkb2NDb29raWUiLCJoYW5kbGVEYXRlVGltZSIsImRhdGUiLCJjb252ZXJ0IiwiY29udmVydDEiLCJEYXRlIiwiZm9ybWF0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5jbHVkZXMiLCJ0b2tlbkNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=