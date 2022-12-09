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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNZLE9BQVQsR0FBbUI7RUFDOUIsSUFBTUMsUUFBUSxHQUFHViw2REFBVyxFQUE1QjtFQUNBLElBQU1XLFFBQVEsR0FBR0osd0RBQVcsRUFBNUI7RUFDQSxJQUFJSyxHQUFHLEdBQUdULDREQUFZLE9BQU8sSUFBbkIsR0FBMEIsaUJBQTFCLEdBQThDLEVBQXhEOztFQUVBLElBQU1VLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFhQyxJQUFiLEVBQW1CQyxRQUFuQixFQUFnQztJQUM1QyxPQUFPO01BQ0hILEtBQUssRUFBTEEsS0FERztNQUVIQyxHQUFHLEVBQUhBLEdBRkc7TUFHSEMsSUFBSSxFQUFKQSxJQUhHO01BSUhDLFFBQVEsRUFBUkE7SUFKRyxDQUFQO0VBTUgsQ0FQRDs7RUFTQSxJQUFNQyxLQUFLLEdBQUcsQ0FDVkwsT0FBTyxDQUFDLFNBQUQsRUFBWSxNQUFaLGVBQW9CLHVEQUFDLDJEQUFELEtBQXBCLEVBQXlDLENBQzVDQSxPQUFPLENBQUMsT0FBRCxFQUFVLEdBQVYsZUFBZSx1REFBQyw4REFBRCxLQUFmLENBRHFDLEVBRTVDQSxPQUFPLENBQUMsa0JBQUQsRUFBcUIsR0FBckIsZUFBMEIsdURBQUMseURBQUQsS0FBMUIsQ0FGcUMsRUFHNUNBLE9BQU8sQ0FBQyxvQkFBRCxFQUF1QixHQUF2QixlQUE0Qix1REFBQyx5REFBRCxLQUE1QixDQUhxQyxFQUk1Q0EsT0FBTyxDQUFDLG1CQUFELEVBQXNCLEdBQXRCLGVBQTJCLHVEQUFDLHNEQUFELEtBQTNCLENBSnFDLENBQXpDLENBREcsQ0FBZDtFQVNBLG9CQUNJO0lBQUssU0FBUyxF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QUFnQkMsSUFBaEIsQ0FBcUJDLFFBQXJCLENBQThCLE1BQTlCLEtBQXlDSCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxRQUFyQixDQUE4QixnQkFBOUIsQ0FBekMsSUFBNEZILE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFFBQXJCLENBQThCLE1BQTlCLENBQWhHLEVBQXVJO0lBQ25JLE9BQU8sS0FBUDtFQUNILENBRkQsTUFFTztJQUNILE9BQU8sSUFBUDtFQUNIO0FBQ0osQ0FOTTtBQVFBLElBQUk5RSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQUk7RUFDOUIsSUFBSTtJQUNBLElBQUkrRSxXQUFXLEdBQUdkLDBEQUFBLENBQWtCLFdBQWxCLENBQWxCOztJQUNBLElBQUcsQ0FBQ2MsV0FBSixFQUFnQjtNQUNaO01BQ0EsT0FBTyxJQUFQLENBRlksQ0FHWjtNQUNBO01BQ0E7SUFDSCxDQVJELENBU0E7OztJQUNBLE9BQU9BLFdBQVA7RUFDSCxDQVhELENBV0UsT0FBT1AsS0FBUCxFQUFjO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0VBQ0g7QUFDSixDQWZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3JlZHV4L1NsaWNlL2xvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy90aXRsZS90aXRsZS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3VsdGlscy9oZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCJcbmltcG9ydCB7IE1kUGVvcGxlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBCc0ZpbGVFYXJtYXJrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBGY0RlcGFydG1lbnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIlxuaW1wb3J0IHsgY2hlY2tNaWNyb0ZlIH0gZnJvbSAnLi4vLi4vdWx0aWxzL2hlbHBlcic7XG5pbXBvcnQge0ltUHJvZmlsZX0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQge1RPS0VOfSBmcm9tIFwiLi4vLi4vdGl0bGUvdGl0bGVcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBzZXRJc0xvYWRpbmcgfSBmcm9tICcuLi8uLi9yZWR1eC9TbGljZS9sb2FkaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3ViTWVudSgpIHtcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IHVzZU5hdmlnYXRlKCk7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgbGV0IHVyaSA9IGNoZWNrTWljcm9GZSgpID09PSB0cnVlID8gXCJwcm9maWxlLXNlcnZpY2VcIiA6IFwiXCI7XG5cbiAgICBjb25zdCBnZXRJdGVtID0gKGxhYmVsLCBrZXksIGljb24sIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIGdldEl0ZW0oXCJOaMOibiBz4buxXCIsIFwic3ViMVwiLCA8TWRQZW9wbGVPdXRsaW5lIC8+LCBbXG4gICAgICAgICAgICBnZXRJdGVtKFwiSOG7kyBzxqFcIiwgXCIxXCIsIDxCc0ZpbGVFYXJtYXJrRmlsbCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKFwiQuG7mSBwaOG6rW4gY8O0bmcgdMOhY1wiLCBcIjJcIiwgPEZjRGVwYXJ0bWVudCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKFwiQ2jhu6ljIGRhbmgsIGNo4bupYyB24bulXCIsIFwiM1wiLCA8RmNEZXBhcnRtZW50IC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oXCJUaMO0bmcgdGluIGPDoSBuaMOiblwiLCBcIjRcIiwgPEltUHJvZmlsZSAvPilcbiAgICAgICAgXSlcbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfU3ViTWVudV9fWFplYjZcIj5cbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdE9wZW5LZXlzPXtbYHN1YjFgXX1cbiAgICAgICAgICAgICAgICBtb2RlPSdpbmxpbmUnXG4gICAgICAgICAgICAgICAgaXRlbXM9e2l0ZW1zfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAke3VyaX0vaHIvcHJvZmlsZWApXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiMlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShgJHt1cml9L2hyL2RlcGFydG1lbnRgKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIjNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYCR7dXJpfS9oci9wb3NpdGlvbmApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZS5rZXkgPT09IFwiNFwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZWNvZGVkID0gand0X2RlY29kZShUT0tFTik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQge2lkfSA9IGRlY29kZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShgJHt1cml9L215cHJvZmlsZS8ke2lkfWApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiaW1wb3J0IHtjcmVhdGVTbGljZX0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlzTG9hZGluZzogZmFsc2UsXG59XG5cbmNvbnN0IGxvYWRpbmdTbGljZSA9IGNyZWF0ZVNsaWNlKHtcbiAgICBuYW1lOiBcImxvYWRpbmdTbGljZVwiLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczp7XG4gICAgICAgIHNldElzTG9hZGluZzogKHN0YXRlLGFjdGlvbik9PntcbiAgICAgICAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgICB9XG4gICAgfVxufSlcblxuZXhwb3J0IGNvbnN0IHtzZXRJc0xvYWRpbmd9ID0gbG9hZGluZ1NsaWNlLmFjdGlvbnM7XG5leHBvcnQgZGVmYXVsdCBsb2FkaW5nU2xpY2UucmVkdWNlcjsiLCJpbXBvcnQgeyBjaGVja01pY3JvRmUsIGdldFRva2VuSW5Db29raWUgfSBmcm9tIFwiLi4vdWx0aWxzL2hlbHBlclwiO1xuXG5leHBvcnQgY29uc3QgVE9LRU4gPSBnZXRUb2tlbkluQ29va2llKCk7XG5cbi8vIFRPS0VOIEFETUlOLCBOSMOCTiBT4buwXG4vLyBleHBvcnQgY29uc3QgVE9LRU4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk1Td2laWGh3SWpveU56VXdOREV4TURnM2ZRLnVXZUVKRVhIeU55c3c4NWsyMm0wczZkRk5pNG5KRkFPOE5TOGxlWTZmeUFcIjtcbi8vIFRPS0VOIHVzZXJcbi8vIGV4cG9ydCBjb25zdCBUT0tFTiA9IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2Tml3aVpYaHdJam95TnpVd05EWTNNRGt3ZlEualMyTHBTcnBDU29zanVNTFQxTUpjdW8xTkllbW1mdi1oa3FvNHljaU55OFwiXG5leHBvcnQgY29uc3QgbG9jYWwgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwiaHR0cHM6Ly9wcm9maWxlc2VydmljZS50dW9pdHJlLnZuXCIgOiBcIlwiXG5cblxuZXhwb3J0IGNvbnN0IHF1YVRyaW5oTFZIVCA9IFwiUXXDoSB0csOsbmggbMOgbSB2aeG7h2MgdsOgIGjhu41jIHThuq1wXCI7XG5leHBvcnQgY29uc3QgdGhhbUdpYVRvQ2h1Y0NUID0gXCJUaGFtIGdpYSBjw6FjIHThu5UgY2jhu6ljIGNow61uaCB0cuG7iywgY8OhYyBow7Thu4sgbmdo4buBIG5naGnhu4dwXCI7XG5leHBvcnQgY29uc3QgZGFvVGFvID0gXCLEkMOgbyB04bqhb1wiO1xuZXhwb3J0IGNvbnN0IGJvaUR1b25nID0gXCJC4buTaSBkxrDhu6FuZ1wiO1xuZXhwb3J0IGNvbnN0IGtoZW5UaHVvbmcgPSBcIktoZW4gdGjGsOG7n25nXCI7XG5leHBvcnQgY29uc3Qga3lMdWF0ID0gXCJL4bu3IGx14bqtdFwiO1xuZXhwb3J0IGNvbnN0IGxpY2hTdUJhblRoYW4gPSBcIkzhu4tjaCBz4butIGLhuqNuIHRow6JuXCI7XG5leHBvcnQgY29uc3QgcXVhbkhlR2lhRGluaCA9IFwiUXVhbiBo4buHIGdpYSDEkcOsbmhcIjtcbmV4cG9ydCBjb25zdCBub2lTaW5oX1N0ZXAxID0gXCJOxqFpIHNpbmhcIlxuZXhwb3J0IGNvbnN0IHF1ZVF1YW5fU3RlcDEgPSBcIlF1w6ogcXXDoW5cIlxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0JZX0lEID0gXCJHRVRfUFJPRklMRV9CWV9JRFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9WSU5DRVMgPSBcIkdFVF9QUk9WSU5DRVNcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFID0gXCJHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19IT01FX1RPV04gPSBcIkdFVF9ESVNUUklDVFNfSE9NRV9UT1dOXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19BRERSRVNTID0gXCJHRVRfRElTVFJJQ1RTX0FERFJFU1NcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0hPS0hBVSA9IFwiR0VUX0RJU1RSSUNUU19IT0tIQVVcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA4ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA4XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQNyA9IFwiR0VUX0RJU1RSSUNUU19TVEVQN1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDkgPSBcIkdFVF9ESVNUUklDVFNfU1RFUDlcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA3X0NPTiA9IFwiR0VUX0RJU1RSSUNUU19TVEVQN19DT05cIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPRklMRSA9IFwiVVBEQVRFX1BST0ZJTEVcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUFJPRklMRSA9IFwiQ1JFQVRFX1BST0ZJTEVcIjtcbmV4cG9ydCBjb25zdCBPTkxZX0NSRUFURV9QUk9GSUxFID0gXCJPTkxZX0NSRUFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgR0VUX1VTRVJfTElTVCA9IFwiR0VUX1VTRVJfTElTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0lORk9STUFUSU9OID0gXCJHRVRfVVNFUl9JTkZPUk1BVElPTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBfUE9TID0gXCJHRVRfREVQQVJUTUVOVF9QT1NJVElPTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QQVJUID0gXCJHRVRfUEFSVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9BVkFUQVIgPSBcIkdFVF9BVkFUQVJcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfREVQX1BPUyA9IFwiREVMRVRFX0RFUF9QT1NcIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQQVJUTUVOVF9MSVNUID0gXCJHRVRfREVQQVJUTUVOVF9MSVNUXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0RFUEFSVE1FTlQgPSBcIlVQREFURV9ERVBBUlRNRU5UXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUEFSVE1FTlRfSU5GT1IgPSBcIkdFVF9ERVBBUlRNRU5UX0lORk9SXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0RFUEFSVE1FTlQgPSBcIkNSRUFURV9ERVBBUlRNRU5UXCI7XG5leHBvcnQgY29uc3QgR0VUX1BPU0lUSU9OU19MSVNUID0gXCJHRVRfUE9TSVRJT05TX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfUE9TSVRJT05fVFlQRV9MSVNUID0gXCJHRVRfUE9TSVRJT05fVFlQRV9MSVNUXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU0lUSU9OX1RZUEUgPSBcIkNSRUFURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU0lUSU9OX1RZUEUgPSBcIlVQREFURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BPU0lUSU9OX1RZUEUgPSBcIkRFTEVURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIlVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkdFVF9QRVJTT05BTF9ISVNUT1JZXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUllcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9QRVJTT05BTF9ISVNUT1JZID0gXCJVUERBVEVfUEVSU09OQUxfSElTVE9SWVwiXG5leHBvcnQgY29uc3QgREVMRVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkRFTEVURV9QRVJTT05BTF9ISVNUT1JZXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFSVFkgPSBcIkNSRUFURV9QQVJUWVwiXG5leHBvcnQgY29uc3QgVVBEQVRFX1BBUlRZID0gXCJVUERBVEVfUEFSVFlcIlxuZXhwb3J0IGNvbnN0IENSRUFURV9PUkdBTklaQVRJT04gPSBcIkNSRUFURV9PUkdBTklaQVRJT05cIlxuZXhwb3J0IGNvbnN0IFVQREFURV9PUkdBTklaQVRJT04gPSBcIlVQREFURV9PUkdBTklaQVRJT05cIlxuZXhwb3J0IGNvbnN0IERFTEVURV9PUkdBTklaQVRJT04gPSBcIkRFTEVURV9PUkdBTklaQVRJT05cIlxuZXhwb3J0IGNvbnN0IENSRUFURV9UUkFJTklORyA9IFwiQ1JFQVRFX1RSQUlOSU5HXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfVFJBSU5JTkcgPSBcIlVQREFURV9UUkFJTklOR1wiXG5leHBvcnQgY29uc3QgREVMRVRFX1RSQUlOSU5HID0gXCJERUxFVEVfVFJBSU5JTkdcIlxuZXhwb3J0IGNvbnN0IENSRUFURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIkRFTEVURV9SRVdBUkRfRElTQ0lQTElORVwiXG5leHBvcnQgY29uc3QgVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJVUERBVEVfUkVXQVJEX0RJU0NJUExJTkVcIlxuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQID0gXCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUFwiXG5leHBvcnQgY29uc3QgVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAgPSBcIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQXCJcbmV4cG9ydCBjb25zdCBHRVRfREVQX1BPU19UT19TRUFSQ0ggPSBcIkdFVF9ERVBfUE9TX1RPX1NFQVJDSFwiXG5leHBvcnQgY29uc3QgU0VBUkNIID0gXCJTRUFSQ0hcIlxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0JZX1VTRVJfSUQgPSBcIkdFVF9QUk9GSUxFX0JZX1VTRVJfSURcIlxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0JZX1RPS0VOID0gXCJHRVRfUFJPRklMRV9CWV9UT0tFTlwiIiwiaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgZG9jQ29va2llIGZyb20gXCJkb2MtY29va2llc1wiXG5cbmV4cG9ydCBsZXQgaGFuZGxlRGF0ZVRpbWUgPSAoZGF0ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCBjb252ZXJ0O1xuICAgICAgICBpZiAodHlwZW9mIGRhdGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdOG7qyBz4buRIHNhbmcgY2h14buXaSBERC1NTS1ZWVlZXG4gICAgICAgICAgICBsZXQgY29udmVydDEgPSBtb21lbnQobmV3IERhdGUoZGF0ZSkpLmZvcm1hdChcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgIGNvbnZlcnQgPSBtb21lbnQoY29udmVydDEsIFwiREQtTU0tWVlZWVwiKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbGV0IGNvbnZlcnRUb051bWJlciA9IERhdGUucGFyc2UoZGF0ZSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnZlcnRUb051bWJlcilcbiAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udmVydDEpXG4gICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb252ZXJ0KVxuICAgICAgICByZXR1cm4gY29udmVydFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGxldCBjaGVja01pY3JvRmUgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMzAwMFwiKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcInByb2ZpbGVzZXJ2aWNlXCIpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMzAwMVwiKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGdldFRva2VuSW5Db29raWUgPSAoKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB0b2tlbkNvb2tpZSA9IGRvY0Nvb2tpZS5nZXRJdGVtKFwidXNlcnRva2VuXCIpXG4gICAgICAgIGlmKCF0b2tlbkNvb2tpZSl7XG4gICAgICAgICAgICAvLyBraGkgcHVzaCBjb2RlIGzDqm4gc2VydmVyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgLy8gS2hpIHRlc3QgdHLDqm4gbG9jYWxcbiAgICAgICAgICAgIC8vIHJldHVybiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk16VTJMQ0psZUhBaU9qSTNOVEExTlRRM016QjkuZHJCT19HN0Y5SkNEaTdYbUxSbWYxNFF2VXFZZThjVzRpbkJJYlFzbVJZSVwiXG4gICAgICAgICAgICAvLyByZXR1cm4gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNU3dpWlhod0lqb3lOelV3TkRFeE1EZzNmUS51V2VFSkVYSHlOeXN3ODVrMjJtMHM2ZEZOaTRuSkZBTzhOUzhsZVk2ZnlBXCJcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbkNvb2tpZSk7XG4gICAgICAgIHJldHVybiB0b2tlbkNvb2tpZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwiTWRQZW9wbGVPdXRsaW5lIiwidXNlTmF2aWdhdGUiLCJCc0ZpbGVFYXJtYXJrRmlsbCIsIkZjRGVwYXJ0bWVudCIsImNoZWNrTWljcm9GZSIsIkltUHJvZmlsZSIsImp3dF9kZWNvZGUiLCJUT0tFTiIsInVzZURpc3BhdGNoIiwic2V0SXNMb2FkaW5nIiwiU3ViTWVudSIsIm5hdmlnYXRlIiwiZGlzcGF0Y2giLCJ1cmkiLCJnZXRJdGVtIiwibGFiZWwiLCJrZXkiLCJpY29uIiwiY2hpbGRyZW4iLCJpdGVtcyIsImUiLCJkZWNvZGVkIiwiaWQiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImlzTG9hZGluZyIsImxvYWRpbmdTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIiwiZ2V0VG9rZW5JbkNvb2tpZSIsImxvY2FsIiwicXVhVHJpbmhMVkhUIiwidGhhbUdpYVRvQ2h1Y0NUIiwiZGFvVGFvIiwiYm9pRHVvbmciLCJraGVuVGh1b25nIiwia3lMdWF0IiwibGljaFN1QmFuVGhhbiIsInF1YW5IZUdpYURpbmgiLCJub2lTaW5oX1N0ZXAxIiwicXVlUXVhbl9TdGVwMSIsIkdFVF9QUk9GSUxFX0JZX0lEIiwiR0VUX1BST1ZJTkNFUyIsIkdFVF9ESVNUUklDVFNfQklSVEhfUExBQ0UiLCJHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTiIsIkdFVF9ESVNUUklDVFNfQUREUkVTUyIsIkdFVF9ESVNUUklDVFNfSE9LSEFVIiwiR0VUX0RJU1RSSUNUU19TVEVQOCIsIkdFVF9ESVNUUklDVFNfU1RFUDciLCJHRVRfRElTVFJJQ1RTX1NURVA5IiwiR0VUX0RJU1RSSUNUU19TVEVQN19DT04iLCJVUERBVEVfUFJPRklMRSIsIkNSRUFURV9QUk9GSUxFIiwiT05MWV9DUkVBVEVfUFJPRklMRSIsIkdFVF9VU0VSX0xJU1QiLCJHRVRfVVNFUl9JTkZPUk1BVElPTiIsIkdFVF9ERVBfUE9TIiwiR0VUX1BBUlQiLCJHRVRfQVZBVEFSIiwiREVMRVRFX0RFUF9QT1MiLCJHRVRfREVQQVJUTUVOVF9MSVNUIiwiVVBEQVRFX0RFUEFSVE1FTlQiLCJHRVRfREVQQVJUTUVOVF9JTkZPUiIsIkNSRUFURV9ERVBBUlRNRU5UIiwiR0VUX1BPU0lUSU9OU19MSVNUIiwiR0VUX1BPU0lUSU9OX1RZUEVfTElTVCIsIkNSRUFURV9QT1NJVElPTl9UWVBFIiwiVVBEQVRFX1BPU0lUSU9OX1RZUEUiLCJERUxFVEVfUE9TSVRJT05fVFlQRSIsIkNSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCIsIlVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCIsIkRFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCIsIkdFVF9QRVJTT05BTF9ISVNUT1JZIiwiQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJVUERBVEVfUEVSU09OQUxfSElTVE9SWSIsIkRFTEVURV9QRVJTT05BTF9ISVNUT1JZIiwiQ1JFQVRFX1BBUlRZIiwiVVBEQVRFX1BBUlRZIiwiQ1JFQVRFX09SR0FOSVpBVElPTiIsIlVQREFURV9PUkdBTklaQVRJT04iLCJERUxFVEVfT1JHQU5JWkFUSU9OIiwiQ1JFQVRFX1RSQUlOSU5HIiwiVVBEQVRFX1RSQUlOSU5HIiwiREVMRVRFX1RSQUlOSU5HIiwiQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FIiwiREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FIiwiVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FIiwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAiLCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCIsIkdFVF9ERVBfUE9TX1RPX1NFQVJDSCIsIlNFQVJDSCIsIkdFVF9QUk9GSUxFX0JZX1VTRVJfSUQiLCJHRVRfUFJPRklMRV9CWV9UT0tFTiIsIm1vbWVudCIsImRvY0Nvb2tpZSIsImhhbmRsZURhdGVUaW1lIiwiZGF0ZSIsImNvbnZlcnQiLCJjb252ZXJ0MSIsIkRhdGUiLCJmb3JtYXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJpbmNsdWRlcyIsInRva2VuQ29va2llIl0sInNvdXJjZVJvb3QiOiIifQ==