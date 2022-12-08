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
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.esm.js");
/* harmony import */ var _ultils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ultils/helper */ "./src/ultils/helper.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









function SubMenu() {
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useNavigate)();
  var uri = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_3__.checkMicroFe)() === true ? "profile-service" : "";

  var positionIcon = function positionIcon() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      width: "512.000000pt",
      height: "512.000000pt",
      viewBox: "0 0 512.000000 512.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
        transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
        fill: "currentColor",
        stroke: "none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M2213 5110 c-210 -29 -362 -111 -469 -253 -97 -128 -134 -253 -134 -452 l0 -127 -39 -45 c-143 -162 -59 -399 160 -447 22 -5 30 -17 54 -91 41 -126 148 -268 233 -308 18 -8 22 -18 22 -52 0 -41 -1 -43 -38 -49 -24 -3 -49 -17 -67 -36 -16 -16 -39 -30 -51 -30 -24 0 -421 -153 -492 -189 -54 -27 -127 -111 -147 -169 -10 -30 -20 -112 -27 -233 -12 -209 -7 -232 55 -269 31 -19 56 -20 823 -20 l792 0 12 -29 c15 -38 46 -66 92 -86 32 -13 106 -15 508 -15 442 0 473 1 508 19 46 23 67 46 87 94 12 30 15 91 15 357 0 365 -2 374 -82 427 -39 26 -50 28 -165 32 l-123 3 0 45 c0 57 -32 117 -79 146 -29 17 -55 22 -133 25 -116 5 -182 -9 -221 -46 -41 -38 -57 -74 -57 -127 l0 -45 -119 0 c-116 0 -123 1 -222 40 -57 22 -113 40 -124 40 -12 0 -30 9 -41 21 -24 27 -67 49 -94 49 -17 0 -20 6 -20 43 1 39 4 44 56 82 94 67 193 220 210 324 6 37 10 41 43 47 89 16 174 82 209 163 9 21 16 65 16 106 0 77 -19 126 -74 189 -30 33 -30 35 -30 147 -1 223 -54 356 -151 376 -23 4 -29 13 -43 70 -30 123 -109 201 -250 248 -68 23 -102 28 -211 31 -71 1 -158 -1 -192 -6z m-193 -666 c199 -123 447 -122 631 2 28 19 59 34 69 34 25 0 67 -52 80 -98 16 -57 13 -565 -4 -627 -24 -91 -58 -148 -130 -221 -55 -55 -86 -77 -141 -100 -64 -26 -80 -29 -190 -29 -102 0 -129 4 -178 23 -117 47 -221 152 -269 270 -22 54 -23 71 -26 352 -2 194 0 308 8 332 12 44 55 98 77 98 8 0 41 -16 73 -36z m-270 -389 c0 -154 -1 -165 -19 -165 -54 0 -131 97 -131 165 0 50 40 117 85 142 22 13 46 23 53 23 9 0 12 -40 12 -165z m1224 145 c87 -42 118 -151 67 -234 -25 -40 -74 -76 -103 -76 -16 0 -18 15 -18 165 0 91 3 165 7 165 4 0 25 -9 47 -20z m-754 -899 c63 -15 175 -13 243 3 43 10 59 11 61 2 2 -6 8 -30 13 -53 l10 -42 -86 -85 c-80 -79 -90 -86 -126 -86 -37 0 -47 7 -128 88 -83 84 -87 90 -77 116 5 15 10 39 10 52 0 20 4 24 18 20 9 -3 37 -10 62 -15z m1394 -62 c20 -16 26 -29 26 -60 l0 -39 -145 0 -145 0 0 39 c0 31 6 44 26 60 23 18 41 21 119 21 78 0 96 -3 119 -21z m-1447 -296 l-37 -38 -69 69 c-65 65 -69 71 -74 124 -10 99 3 97 117 -17 l101 -101 -38 -37z m514 154 c-7 -55 -11 -62 -74 -125 l-67 -67 -37 38 -38 37 100 100 c113 114 127 116 116 17z m1300 -86 c19 -15 24 -30 27 -88 l4 -69 -158 -76 c-155 -73 -159 -75 -165 -53 -22 76 -80 123 -163 132 -105 11 -188 -34 -218 -118 l-13 -36 -152 74 -153 75 0 69 c0 118 -40 109 504 109 439 0 465 -1 487 -19z m-1588 -109 l26 -27 -20 -33 c-19 -29 -26 -32 -68 -32 -44 0 -48 2 -63 34 -16 32 -16 34 10 60 36 35 80 35 115 -2z m-295 -101 c13 -7 36 -10 51 -6 25 5 30 2 41 -25 11 -26 11 -56 1 -163 -17 -179 -11 -167 -82 -167 -50 0 -59 3 -59 18 0 10 -9 105 -20 212 -11 107 -20 196 -20 199 0 3 15 -9 33 -26 17 -17 42 -36 55 -42z m538 -148 l-20 -213 -61 0 -61 0 -16 153 c-13 132 -14 156 -1 180 12 24 18 27 44 22 31 -7 79 16 114 55 10 11 19 19 20 18 1 -2 -8 -99 -19 -215z m926 80 c34 -38 34 -115 2 -148 -21 -21 -112 -20 -136 2 -24 22 -25 118 -1 145 22 25 113 25 135 1z m-1189 -107 c4 -40 10 -99 13 -130 l7 -56 -58 0 -58 0 7 78 c17 188 15 182 51 182 l32 0 6 -74z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M2051 4074 c-12 -15 -21 -34 -21 -44 0 -10 9 -29 21 -44 40 -50 119 -24 119 40 0 69 -78 101 -119 48z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M2532 4077 c-44 -46 -14 -117 48 -117 63 0 93 75 47 118 -30 28 -68 28 -95 -1z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M2162 3768 c-7 -7 -12 -24 -12 -39 0 -52 100 -108 196 -109 60 0 147 40 178 82 18 25 18 28 2 52 -21 33 -48 33 -92 -1 -23 -17 -51 -28 -82 -30 -40 -4 -54 0 -92 26 -48 33 -78 39 -98 19z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M2526 2224 c-14 -13 -16 -48 -16 -230 l0 -214 -798 0 c-761 0 -800 -1 -815 -18 -15 -16 -17 -46 -17 -210 0 -202 4 -222 50 -222 44 0 50 22 50 191 l0 159 765 0 765 0 0 -159 c0 -169 6 -191 50 -191 44 0 50 22 50 191 l0 159 765 0 765 0 0 -159 c0 -169 6 -191 50 -191 46 0 50 19 50 224 0 174 -2 195 -18 209 -17 16 -88 17 -815 17 l-797 0 0 214 c0 228 -4 246 -50 246 -10 0 -26 -7 -34 -16z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M850 1211 c-57 -19 -110 -53 -148 -97 -106 -119 -109 -295 -8 -418 l36 -44 -46 -7 c-114 -17 -221 -99 -269 -208 -25 -54 -29 -77 -33 -187 -5 -153 6 -203 51 -230 31 -19 54 -20 507 -20 453 0 476 1 507 20 46 28 57 77 50 231 -4 110 -8 134 -32 187 -48 107 -156 190 -268 207 l-45 7 39 51 c96 126 91 294 -13 411 -60 69 -125 99 -223 102 -44 2 -91 0 -105 -5z m187 -112 c154 -75 163 -299 15 -386 -67 -40 -157 -40 -224 0 -148 87 -139 310 14 386 57 28 137 28 195 0z m219 -576 c52 -28 108 -90 125 -139 8 -24 14 -85 14 -159 l0 -120 -62 -3 -63 -3 0 104 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -103 -230 0 -230 0 0 103 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -104 -62 3 -63 3 0 120 c0 74 6 135 14 159 24 68 94 133 171 157 14 4 142 7 285 6 246 -2 262 -3 301 -24z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M2470 1211 c-57 -19 -110 -53 -148 -97 -106 -119 -109 -295 -8 -418 l36 -44 -46 -7 c-114 -17 -221 -99 -269 -208 -25 -54 -29 -77 -33 -187 -5 -153 6 -203 51 -230 31 -19 54 -20 507 -20 453 0 476 1 507 20 46 28 57 77 50 231 -4 110 -8 134 -32 187 -48 107 -156 190 -268 207 l-45 7 39 51 c96 126 91 294 -13 411 -60 69 -125 99 -223 102 -44 2 -91 0 -105 -5z m187 -112 c154 -75 163 -299 15 -386 -67 -40 -157 -40 -224 0 -148 87 -139 310 14 386 57 28 137 28 195 0z m219 -576 c52 -28 108 -90 125 -139 8 -24 14 -85 14 -159 l0 -120 -62 -3 -63 -3 0 104 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -103 -230 0 -230 0 0 103 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -104 -62 3 -63 3 0 120 c0 74 6 135 14 159 24 68 94 133 171 157 14 4 142 7 285 6 246 -2 262 -3 301 -24z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
          d: "M4090 1211 c-57 -19 -110 -53 -148 -97 -106 -119 -109 -295 -8 -418 l36 -44 -46 -7 c-114 -17 -221 -99 -269 -208 -25 -54 -29 -77 -33 -187 -5 -153 6 -203 51 -230 31 -19 54 -20 507 -20 453 0 476 1 507 20 46 28 57 77 50 231 -4 110 -8 134 -32 187 -48 107 -156 190 -268 207 l-45 7 39 51 c96 126 91 294 -13 411 -60 69 -125 99 -223 102 -44 2 -91 0 -105 -5z m187 -112 c154 -75 163 -299 15 -386 -67 -40 -157 -40 -224 0 -148 87 -139 310 14 386 57 28 137 28 195 0z m219 -576 c52 -28 108 -90 125 -139 8 -24 14 -85 14 -159 l0 -120 -62 -3 -63 -3 0 104 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -103 -230 0 -230 0 0 103 c0 111 -6 127 -50 127 -44 0 -50 -16 -50 -127 l0 -104 -62 3 -63 3 0 120 c0 74 6 135 14 159 24 68 94 133 171 157 14 4 142 7 285 6 246 -2 262 -3 301 -24z"
        })]
      })
    });
  };

  var getItem = function getItem(label, key, icon, children) {
    return {
      label: label,
      key: key,
      icon: icon,
      children: children
    };
  };

  var items = [getItem("Nhân sự", "sub1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdPeopleOutline, {}), [getItem("Hồ sơ", "1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsFileEarmarkFill, {})), getItem("Bộ phận công tác", "2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_7__.FcDepartment, {})), getItem("Chức danh, chức vụ", "3", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_7__.FcDepartment, {}))])];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "sidebar_SubMenu__XZeb6",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu // defaultOpenKeys={[`sub1`]}
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
        }
      }
    })
  });
}

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
      return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNzUwNDExMDg3fQ.uWeEJEXHyNysw85k22m0s6dFNi4nJFAO8NS8leY6fyA";
    } // console.log(tokenCookie);


    return tokenCookie;
  } catch (error) {
    console.log(error);
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRWUsU0FBU08sT0FBVCxHQUFtQjtFQUM5QixJQUFNQyxRQUFRLEdBQUdMLDZEQUFXLEVBQTVCO0VBQ0EsSUFBSU0sR0FBRyxHQUFHSCw0REFBWSxPQUFPLElBQW5CLEdBQTBCLGlCQUExQixHQUE4QyxFQUF4RDs7RUFDQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0lBQ3ZCLG9CQUFPO01BQUssT0FBTyxFQUFDLEtBQWI7TUFBbUIsS0FBSyxFQUFDLDRCQUF6QjtNQUNILEtBQUssRUFBQyxjQURIO01BQ2tCLE1BQU0sRUFBQyxjQUR6QjtNQUN3QyxPQUFPLEVBQUMsMkJBRGhEO01BRUgsbUJBQW1CLEVBQUMsZUFGakI7TUFBQSx1QkFHSDtRQUFHLFNBQVMsRUFBQywwREFBYjtRQUNJLElBQUksRUFBQyxjQURUO1FBQ3dCLE1BQU0sRUFBQyxNQUQvQjtRQUFBLHdCQUVJO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFGSixlQXlDSTtVQUFNLENBQUMsRUFBQztRQUFSLEVBekNKLGVBMkNJO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUEzQ0osZUE2Q0k7VUFBTSxDQUFDLEVBQUM7UUFBUixFQTdDSixlQWdESTtVQUFNLENBQUMsRUFBQztRQUFSLEVBaERKLGVBc0RJO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUF0REosZUFpRUk7VUFBTSxDQUFDLEVBQUM7UUFBUixFQWpFSixlQTRFSTtVQUFNLENBQUMsRUFBQztRQUFSLEVBNUVKO01BQUE7SUFIRyxFQUFQO0VBNEZILENBN0ZEOztFQStGQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBYUMsSUFBYixFQUFtQkMsUUFBbkIsRUFBZ0M7SUFDNUMsT0FBTztN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LElBQUcsQ0FBQ2UsV0FBSixFQUFnQjtNQUNaLE9BQU8scUhBQVA7SUFDSCxDQUpELENBS0E7OztJQUNBLE9BQU9BLFdBQVA7RUFDSCxDQVBELENBT0UsT0FBT1IsS0FBUCxFQUFjO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0VBQ0g7QUFDSixDQVhNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3VsdGlscy9oZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCJcbmltcG9ydCB7IE1kUGVvcGxlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiXG5pbXBvcnQgeyB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBCc0ZpbGVFYXJtYXJrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBGY0RlcGFydG1lbnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIlxuaW1wb3J0IHsgY2hlY2tNaWNyb0ZlIH0gZnJvbSAnLi4vLi4vdWx0aWxzL2hlbHBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Yk1lbnUoKSB7XG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIGxldCB1cmkgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwicHJvZmlsZS1zZXJ2aWNlXCIgOiBcIlwiO1xuICAgIGNvbnN0IHBvc2l0aW9uSWNvbiA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxzdmcgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgd2lkdGg9XCI1MTIuMDAwMDAwcHRcIiBoZWlnaHQ9XCI1MTIuMDAwMDAwcHRcIiB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMjEzIDUxMTAgYy0yMTAgLTI5IC0zNjIgLTExMSAtNDY5IC0yNTMgLTk3IC0xMjggLTEzNCAtMjUzIC0xMzRcbiAgICAgICAgLTQ1MiBsMCAtMTI3IC0zOSAtNDUgYy0xNDMgLTE2MiAtNTkgLTM5OSAxNjAgLTQ0NyAyMiAtNSAzMCAtMTcgNTQgLTkxIDQxXG4gICAgICAgIC0xMjYgMTQ4IC0yNjggMjMzIC0zMDggMTggLTggMjIgLTE4IDIyIC01MiAwIC00MSAtMSAtNDMgLTM4IC00OSAtMjQgLTMgLTQ5XG4gICAgICAgIC0xNyAtNjcgLTM2IC0xNiAtMTYgLTM5IC0zMCAtNTEgLTMwIC0yNCAwIC00MjEgLTE1MyAtNDkyIC0xODkgLTU0IC0yNyAtMTI3XG4gICAgICAgIC0xMTEgLTE0NyAtMTY5IC0xMCAtMzAgLTIwIC0xMTIgLTI3IC0yMzMgLTEyIC0yMDkgLTcgLTIzMiA1NSAtMjY5IDMxIC0xOSA1NlxuICAgICAgICAtMjAgODIzIC0yMCBsNzkyIDAgMTIgLTI5IGMxNSAtMzggNDYgLTY2IDkyIC04NiAzMiAtMTMgMTA2IC0xNSA1MDggLTE1IDQ0MlxuICAgICAgICAwIDQ3MyAxIDUwOCAxOSA0NiAyMyA2NyA0NiA4NyA5NCAxMiAzMCAxNSA5MSAxNSAzNTcgMCAzNjUgLTIgMzc0IC04MiA0MjdcbiAgICAgICAgLTM5IDI2IC01MCAyOCAtMTY1IDMyIGwtMTIzIDMgMCA0NSBjMCA1NyAtMzIgMTE3IC03OSAxNDYgLTI5IDE3IC01NSAyMiAtMTMzXG4gICAgICAgIDI1IC0xMTYgNSAtMTgyIC05IC0yMjEgLTQ2IC00MSAtMzggLTU3IC03NCAtNTcgLTEyNyBsMCAtNDUgLTExOSAwIGMtMTE2IDBcbiAgICAgICAgLTEyMyAxIC0yMjIgNDAgLTU3IDIyIC0xMTMgNDAgLTEyNCA0MCAtMTIgMCAtMzAgOSAtNDEgMjEgLTI0IDI3IC02NyA0OSAtOTRcbiAgICAgICAgNDkgLTE3IDAgLTIwIDYgLTIwIDQzIDEgMzkgNCA0NCA1NiA4MiA5NCA2NyAxOTMgMjIwIDIxMCAzMjQgNiAzNyAxMCA0MSA0M1xuICAgICAgICA0NyA4OSAxNiAxNzQgODIgMjA5IDE2MyA5IDIxIDE2IDY1IDE2IDEwNiAwIDc3IC0xOSAxMjYgLTc0IDE4OSAtMzAgMzMgLTMwXG4gICAgICAgIDM1IC0zMCAxNDcgLTEgMjIzIC01NCAzNTYgLTE1MSAzNzYgLTIzIDQgLTI5IDEzIC00MyA3MCAtMzAgMTIzIC0xMDkgMjAxXG4gICAgICAgIC0yNTAgMjQ4IC02OCAyMyAtMTAyIDI4IC0yMTEgMzEgLTcxIDEgLTE1OCAtMSAtMTkyIC02eiBtLTE5MyAtNjY2IGMxOTkgLTEyM1xuICAgICAgICA0NDcgLTEyMiA2MzEgMiAyOCAxOSA1OSAzNCA2OSAzNCAyNSAwIDY3IC01MiA4MCAtOTggMTYgLTU3IDEzIC01NjUgLTQgLTYyN1xuICAgICAgICAtMjQgLTkxIC01OCAtMTQ4IC0xMzAgLTIyMSAtNTUgLTU1IC04NiAtNzcgLTE0MSAtMTAwIC02NCAtMjYgLTgwIC0yOSAtMTkwXG4gICAgICAgIC0yOSAtMTAyIDAgLTEyOSA0IC0xNzggMjMgLTExNyA0NyAtMjIxIDE1MiAtMjY5IDI3MCAtMjIgNTQgLTIzIDcxIC0yNiAzNTJcbiAgICAgICAgLTIgMTk0IDAgMzA4IDggMzMyIDEyIDQ0IDU1IDk4IDc3IDk4IDggMCA0MSAtMTYgNzMgLTM2eiBtLTI3MCAtMzg5IGMwIC0xNTRcbiAgICAgICAgLTEgLTE2NSAtMTkgLTE2NSAtNTQgMCAtMTMxIDk3IC0xMzEgMTY1IDAgNTAgNDAgMTE3IDg1IDE0MiAyMiAxMyA0NiAyMyA1M1xuICAgICAgICAyMyA5IDAgMTIgLTQwIDEyIC0xNjV6IG0xMjI0IDE0NSBjODcgLTQyIDExOCAtMTUxIDY3IC0yMzQgLTI1IC00MCAtNzQgLTc2XG4gICAgICAgIC0xMDMgLTc2IC0xNiAwIC0xOCAxNSAtMTggMTY1IDAgOTEgMyAxNjUgNyAxNjUgNCAwIDI1IC05IDQ3IC0yMHogbS03NTQgLTg5OVxuICAgICAgICBjNjMgLTE1IDE3NSAtMTMgMjQzIDMgNDMgMTAgNTkgMTEgNjEgMiAyIC02IDggLTMwIDEzIC01MyBsMTAgLTQyIC04NiAtODVcbiAgICAgICAgYy04MCAtNzkgLTkwIC04NiAtMTI2IC04NiAtMzcgMCAtNDcgNyAtMTI4IDg4IC04MyA4NCAtODcgOTAgLTc3IDExNiA1IDE1IDEwXG4gICAgICAgIDM5IDEwIDUyIDAgMjAgNCAyNCAxOCAyMCA5IC0zIDM3IC0xMCA2MiAtMTV6IG0xMzk0IC02MiBjMjAgLTE2IDI2IC0yOSAyNlxuICAgICAgICAtNjAgbDAgLTM5IC0xNDUgMCAtMTQ1IDAgMCAzOSBjMCAzMSA2IDQ0IDI2IDYwIDIzIDE4IDQxIDIxIDExOSAyMSA3OCAwIDk2XG4gICAgICAgIC0zIDExOSAtMjF6IG0tMTQ0NyAtMjk2IGwtMzcgLTM4IC02OSA2OSBjLTY1IDY1IC02OSA3MSAtNzQgMTI0IC0xMCA5OSAzIDk3XG4gICAgICAgIDExNyAtMTcgbDEwMSAtMTAxIC0zOCAtMzd6IG01MTQgMTU0IGMtNyAtNTUgLTExIC02MiAtNzQgLTEyNSBsLTY3IC02NyAtMzdcbiAgICAgICAgMzggLTM4IDM3IDEwMCAxMDAgYzExMyAxMTQgMTI3IDExNiAxMTYgMTd6IG0xMzAwIC04NiBjMTkgLTE1IDI0IC0zMCAyNyAtODhcbiAgICAgICAgbDQgLTY5IC0xNTggLTc2IGMtMTU1IC03MyAtMTU5IC03NSAtMTY1IC01MyAtMjIgNzYgLTgwIDEyMyAtMTYzIDEzMiAtMTA1IDExXG4gICAgICAgIC0xODggLTM0IC0yMTggLTExOCBsLTEzIC0zNiAtMTUyIDc0IC0xNTMgNzUgMCA2OSBjMCAxMTggLTQwIDEwOSA1MDQgMTA5IDQzOVxuICAgICAgICAwIDQ2NSAtMSA0ODcgLTE5eiBtLTE1ODggLTEwOSBsMjYgLTI3IC0yMCAtMzMgYy0xOSAtMjkgLTI2IC0zMiAtNjggLTMyIC00NFxuICAgICAgICAwIC00OCAyIC02MyAzNCAtMTYgMzIgLTE2IDM0IDEwIDYwIDM2IDM1IDgwIDM1IDExNSAtMnogbS0yOTUgLTEwMSBjMTMgLTcgMzZcbiAgICAgICAgLTEwIDUxIC02IDI1IDUgMzAgMiA0MSAtMjUgMTEgLTI2IDExIC01NiAxIC0xNjMgLTE3IC0xNzkgLTExIC0xNjcgLTgyIC0xNjdcbiAgICAgICAgLTUwIDAgLTU5IDMgLTU5IDE4IDAgMTAgLTkgMTA1IC0yMCAyMTIgLTExIDEwNyAtMjAgMTk2IC0yMCAxOTkgMCAzIDE1IC05IDMzXG4gICAgICAgIC0yNiAxNyAtMTcgNDIgLTM2IDU1IC00MnogbTUzOCAtMTQ4IGwtMjAgLTIxMyAtNjEgMCAtNjEgMCAtMTYgMTUzIGMtMTMgMTMyXG4gICAgICAgIC0xNCAxNTYgLTEgMTgwIDEyIDI0IDE4IDI3IDQ0IDIyIDMxIC03IDc5IDE2IDExNCA1NSAxMCAxMSAxOSAxOSAyMCAxOCAxIC0yXG4gICAgICAgIC04IC05OSAtMTkgLTIxNXogbTkyNiA4MCBjMzQgLTM4IDM0IC0xMTUgMiAtMTQ4IC0yMSAtMjEgLTExMiAtMjAgLTEzNiAyIC0yNFxuICAgICAgICAyMiAtMjUgMTE4IC0xIDE0NSAyMiAyNSAxMTMgMjUgMTM1IDF6IG0tMTE4OSAtMTA3IGM0IC00MCAxMCAtOTkgMTMgLTEzMCBsN1xuICAgICAgICAtNTYgLTU4IDAgLTU4IDAgNyA3OCBjMTcgMTg4IDE1IDE4MiA1MSAxODIgbDMyIDAgNiAtNzR6XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjA1MSA0MDc0IGMtMTIgLTE1IC0yMSAtMzQgLTIxIC00NCAwIC0xMCA5IC0yOSAyMSAtNDQgNDAgLTUwIDExOVxuICAgICAgICAtMjQgMTE5IDQwIDAgNjkgLTc4IDEwMSAtMTE5IDQ4elwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI1MzIgNDA3NyBjLTQ0IC00NiAtMTQgLTExNyA0OCAtMTE3IDYzIDAgOTMgNzUgNDcgMTE4IC0zMCAyOCAtNjhcbiAgICAgICAgMjggLTk1IC0xelwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxNjIgMzc2OCBjLTcgLTcgLTEyIC0yNCAtMTIgLTM5IDAgLTUyIDEwMCAtMTA4IDE5NiAtMTA5IDYwIDAgMTQ3XG4gICAgICAgIDQwIDE3OCA4MiAxOCAyNSAxOCAyOCAyIDUyIC0yMSAzMyAtNDggMzMgLTkyIC0xIC0yMyAtMTcgLTUxIC0yOCAtODIgLTMwIC00MFxuICAgICAgICAtNCAtNTQgMCAtOTIgMjYgLTQ4IDMzIC03OCAzOSAtOTggMTl6XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjUyNiAyMjI0IGMtMTQgLTEzIC0xNiAtNDggLTE2IC0yMzAgbDAgLTIxNCAtNzk4IDAgYy03NjEgMCAtODAwXG4gICAgICAgIC0xIC04MTUgLTE4IC0xNSAtMTYgLTE3IC00NiAtMTcgLTIxMCAwIC0yMDIgNCAtMjIyIDUwIC0yMjIgNDQgMCA1MCAyMiA1MFxuICAgICAgICAxOTEgbDAgMTU5IDc2NSAwIDc2NSAwIDAgLTE1OSBjMCAtMTY5IDYgLTE5MSA1MCAtMTkxIDQ0IDAgNTAgMjIgNTAgMTkxIGwwXG4gICAgICAgIDE1OSA3NjUgMCA3NjUgMCAwIC0xNTkgYzAgLTE2OSA2IC0xOTEgNTAgLTE5MSA0NiAwIDUwIDE5IDUwIDIyNCAwIDE3NCAtMlxuICAgICAgICAxOTUgLTE4IDIwOSAtMTcgMTYgLTg4IDE3IC04MTUgMTcgbC03OTcgMCAwIDIxNCBjMCAyMjggLTQgMjQ2IC01MCAyNDYgLTEwIDBcbiAgICAgICAgLTI2IC03IC0zNCAtMTZ6XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNODUwIDEyMTEgYy01NyAtMTkgLTExMCAtNTMgLTE0OCAtOTcgLTEwNiAtMTE5IC0xMDkgLTI5NSAtOCAtNDE4XG4gICAgICAgIGwzNiAtNDQgLTQ2IC03IGMtMTE0IC0xNyAtMjIxIC05OSAtMjY5IC0yMDggLTI1IC01NCAtMjkgLTc3IC0zMyAtMTg3IC01XG4gICAgICAgIC0xNTMgNiAtMjAzIDUxIC0yMzAgMzEgLTE5IDU0IC0yMCA1MDcgLTIwIDQ1MyAwIDQ3NiAxIDUwNyAyMCA0NiAyOCA1NyA3NyA1MFxuICAgICAgICAyMzEgLTQgMTEwIC04IDEzNCAtMzIgMTg3IC00OCAxMDcgLTE1NiAxOTAgLTI2OCAyMDcgbC00NSA3IDM5IDUxIGM5NiAxMjYgOTFcbiAgICAgICAgMjk0IC0xMyA0MTEgLTYwIDY5IC0xMjUgOTkgLTIyMyAxMDIgLTQ0IDIgLTkxIDAgLTEwNSAtNXogbTE4NyAtMTEyIGMxNTQgLTc1XG4gICAgICAgIDE2MyAtMjk5IDE1IC0zODYgLTY3IC00MCAtMTU3IC00MCAtMjI0IDAgLTE0OCA4NyAtMTM5IDMxMCAxNCAzODYgNTcgMjggMTM3XG4gICAgICAgIDI4IDE5NSAweiBtMjE5IC01NzYgYzUyIC0yOCAxMDggLTkwIDEyNSAtMTM5IDggLTI0IDE0IC04NSAxNCAtMTU5IGwwIC0xMjBcbiAgICAgICAgLTYyIC0zIC02MyAtMyAwIDEwNCBjMCAxMTEgLTYgMTI3IC01MCAxMjcgLTQ0IDAgLTUwIC0xNiAtNTAgLTEyNyBsMCAtMTAzXG4gICAgICAgIC0yMzAgMCAtMjMwIDAgMCAxMDMgYzAgMTExIC02IDEyNyAtNTAgMTI3IC00NCAwIC01MCAtMTYgLTUwIC0xMjcgbDAgLTEwNFxuICAgICAgICAtNjIgMyAtNjMgMyAwIDEyMCBjMCA3NCA2IDEzNSAxNCAxNTkgMjQgNjggOTQgMTMzIDE3MSAxNTcgMTQgNCAxNDIgNyAyODUgNlxuICAgICAgICAyNDYgLTIgMjYyIC0zIDMwMSAtMjR6XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQ3MCAxMjExIGMtNTcgLTE5IC0xMTAgLTUzIC0xNDggLTk3IC0xMDYgLTExOSAtMTA5IC0yOTUgLTggLTQxOFxuICAgICAgICBsMzYgLTQ0IC00NiAtNyBjLTExNCAtMTcgLTIyMSAtOTkgLTI2OSAtMjA4IC0yNSAtNTQgLTI5IC03NyAtMzMgLTE4NyAtNVxuICAgICAgICAtMTUzIDYgLTIwMyA1MSAtMjMwIDMxIC0xOSA1NCAtMjAgNTA3IC0yMCA0NTMgMCA0NzYgMSA1MDcgMjAgNDYgMjggNTcgNzcgNTBcbiAgICAgICAgMjMxIC00IDExMCAtOCAxMzQgLTMyIDE4NyAtNDggMTA3IC0xNTYgMTkwIC0yNjggMjA3IGwtNDUgNyAzOSA1MSBjOTYgMTI2IDkxXG4gICAgICAgIDI5NCAtMTMgNDExIC02MCA2OSAtMTI1IDk5IC0yMjMgMTAyIC00NCAyIC05MSAwIC0xMDUgLTV6IG0xODcgLTExMiBjMTU0IC03NVxuICAgICAgICAxNjMgLTI5OSAxNSAtMzg2IC02NyAtNDAgLTE1NyAtNDAgLTIyNCAwIC0xNDggODcgLTEzOSAzMTAgMTQgMzg2IDU3IDI4IDEzN1xuICAgICAgICAyOCAxOTUgMHogbTIxOSAtNTc2IGM1MiAtMjggMTA4IC05MCAxMjUgLTEzOSA4IC0yNCAxNCAtODUgMTQgLTE1OSBsMCAtMTIwXG4gICAgICAgIC02MiAtMyAtNjMgLTMgMCAxMDQgYzAgMTExIC02IDEyNyAtNTAgMTI3IC00NCAwIC01MCAtMTYgLTUwIC0xMjcgbDAgLTEwM1xuICAgICAgICAtMjMwIDAgLTIzMCAwIDAgMTAzIGMwIDExMSAtNiAxMjcgLTUwIDEyNyAtNDQgMCAtNTAgLTE2IC01MCAtMTI3IGwwIC0xMDRcbiAgICAgICAgLTYyIDMgLTYzIDMgMCAxMjAgYzAgNzQgNiAxMzUgMTQgMTU5IDI0IDY4IDk0IDEzMyAxNzEgMTU3IDE0IDQgMTQyIDcgMjg1IDZcbiAgICAgICAgMjQ2IC0yIDI2MiAtMyAzMDEgLTI0elwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQwOTAgMTIxMSBjLTU3IC0xOSAtMTEwIC01MyAtMTQ4IC05NyAtMTA2IC0xMTkgLTEwOSAtMjk1IC04IC00MThcbiAgICAgICAgbDM2IC00NCAtNDYgLTcgYy0xMTQgLTE3IC0yMjEgLTk5IC0yNjkgLTIwOCAtMjUgLTU0IC0yOSAtNzcgLTMzIC0xODcgLTVcbiAgICAgICAgLTE1MyA2IC0yMDMgNTEgLTIzMCAzMSAtMTkgNTQgLTIwIDUwNyAtMjAgNDUzIDAgNDc2IDEgNTA3IDIwIDQ2IDI4IDU3IDc3IDUwXG4gICAgICAgIDIzMSAtNCAxMTAgLTggMTM0IC0zMiAxODcgLTQ4IDEwNyAtMTU2IDE5MCAtMjY4IDIwNyBsLTQ1IDcgMzkgNTEgYzk2IDEyNiA5MVxuICAgICAgICAyOTQgLTEzIDQxMSAtNjAgNjkgLTEyNSA5OSAtMjIzIDEwMiAtNDQgMiAtOTEgMCAtMTA1IC01eiBtMTg3IC0xMTIgYzE1NCAtNzVcbiAgICAgICAgMTYzIC0yOTkgMTUgLTM4NiAtNjcgLTQwIC0xNTcgLTQwIC0yMjQgMCAtMTQ4IDg3IC0xMzkgMzEwIDE0IDM4NiA1NyAyOCAxMzdcbiAgICAgICAgMjggMTk1IDB6IG0yMTkgLTU3NiBjNTIgLTI4IDEwOCAtOTAgMTI1IC0xMzkgOCAtMjQgMTQgLTg1IDE0IC0xNTkgbDAgLTEyMFxuICAgICAgICAtNjIgLTMgLTYzIC0zIDAgMTA0IGMwIDExMSAtNiAxMjcgLTUwIDEyNyAtNDQgMCAtNTAgLTE2IC01MCAtMTI3IGwwIC0xMDNcbiAgICAgICAgLTIzMCAwIC0yMzAgMCAwIDEwMyBjMCAxMTEgLTYgMTI3IC01MCAxMjcgLTQ0IDAgLTUwIC0xNiAtNTAgLTEyNyBsMCAtMTA0XG4gICAgICAgIC02MiAzIC02MyAzIDAgMTIwIGMwIDc0IDYgMTM1IDE0IDE1OSAyNCA2OCA5NCAxMzMgMTcxIDE1NyAxNCA0IDE0MiA3IDI4NSA2XG4gICAgICAgIDI0NiAtMiAyNjIgLTMgMzAxIC0yNHpcIi8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIH1cblxuICAgIGNvbnN0IGdldEl0ZW0gPSAobGFiZWwsIGtleSwgaWNvbiwgY2hpbGRyZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgICAgZ2V0SXRlbShcIk5ow6JuIHPhu7FcIiwgXCJzdWIxXCIsIDxNZFBlb3BsZU91dGxpbmUgLz4sIFtcbiAgICAgICAgICAgIGdldEl0ZW0oXCJI4buTIHPGoVwiLCBcIjFcIiwgPEJzRmlsZUVhcm1hcmtGaWxsIC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oXCJC4buZIHBo4bqtbiBjw7RuZyB0w6FjXCIsIFwiMlwiLCA8RmNEZXBhcnRtZW50IC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oXCJDaOG7qWMgZGFuaCwgY2jhu6ljIHbhu6VcIiwgXCIzXCIsIDxGY0RlcGFydG1lbnQgLz4pLFxuXG4gICAgICAgIF0pXG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17W2BzdWIxYF19XG4gICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZShgJHt1cml9L2hyL3Byb2ZpbGVgKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSBcIjJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGUoYCR7dXJpfS9oci9kZXBhcnRtZW50YClcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlKGAke3VyaX0vaHIvcG9zaXRpb25gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBkb2NDb29raWUgZnJvbSBcImRvYy1jb29raWVzXCJcblxuZXhwb3J0IGxldCBoYW5kbGVEYXRlVGltZSA9IChkYXRlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvbnZlcnQ7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgLy8gY29udmVydCB04burIHPhu5Egc2FuZyBjaHXhu5dpIERELU1NLVlZWVlcbiAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBsZXQgY29udmVydFRvTnVtYmVyID0gRGF0ZS5wYXJzZShkYXRlKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udmVydFRvTnVtYmVyKVxuICAgICAgICAgICAgbGV0IGNvbnZlcnQxID0gbW9tZW50KG5ldyBEYXRlKGRhdGUpKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb252ZXJ0MSlcbiAgICAgICAgICAgIGNvbnZlcnQgPSBtb21lbnQoY29udmVydDEsIFwiREQtTU0tWVlZWVwiKVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnZlcnQpXG4gICAgICAgIHJldHVybiBjb252ZXJ0XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGNoZWNrTWljcm9GZSA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIzMDAwXCIpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwicHJvZmlsZXNlcnZpY2VcIikgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIzMDAxXCIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgZ2V0VG9rZW5JbkNvb2tpZSA9ICgpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHRva2VuQ29va2llID0gZG9jQ29va2llLmdldEl0ZW0oXCJ1c2VydG9rZW5cIilcbiAgICAgICAgaWYoIXRva2VuQ29va2llKXtcbiAgICAgICAgICAgIHJldHVybiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk1Td2laWGh3SWpveU56VXdOREV4TURnM2ZRLnVXZUVKRVhIeU55c3c4NWsyMm0wczZkRk5pNG5KRkFPOE5TOGxlWTZmeUFcIlxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuQ29va2llKTtcbiAgICAgICAgcmV0dXJuIHRva2VuQ29va2llXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJNZFBlb3BsZU91dGxpbmUiLCJ1c2VOYXZpZ2F0ZSIsIkJzRmlsZUVhcm1hcmtGaWxsIiwiRmNEZXBhcnRtZW50IiwiY2hlY2tNaWNyb0ZlIiwiU3ViTWVudSIsIm5hdmlnYXRlIiwidXJpIiwicG9zaXRpb25JY29uIiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwiaXRlbXMiLCJlIiwibW9tZW50IiwiZG9jQ29va2llIiwiaGFuZGxlRGF0ZVRpbWUiLCJkYXRlIiwiY29udmVydCIsImNvbnZlcnQxIiwiRGF0ZSIsImZvcm1hdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImluY2x1ZGVzIiwiZ2V0VG9rZW5JbkNvb2tpZSIsInRva2VuQ29va2llIl0sInNvdXJjZVJvb3QiOiIifQ==