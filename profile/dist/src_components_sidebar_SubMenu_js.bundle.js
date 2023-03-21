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
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "webpack/sharing/consume/default/react-router-dom/react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fc */ "./node_modules/react-icons/fc/index.esm.js");
/* harmony import */ var _ultils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ultils/helper */ "./src/ultils/helper.js");
/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/im */ "./node_modules/react-icons/im/index.esm.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ "webpack/sharing/consume/default/jwt-decode/jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../title/title */ "./src/title/title.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }














var userPermissionApi = [];
var userPermission = [];
function SubMenu(permission) {
  var _jwt_decode, _jwt_decode2;
  var uri = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_3__.checkMicroFe)() === true ? "profile-service" : "";
  if (permission !== undefined) {
    userPermissionApi = permission[2];
  }
  if (uri === "") {
    userPermission = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
      return state.permissionReducer.userPermission;
    });
  }
  var getItem = function getItem(label, key, icon, children) {
    return {
      label: label,
      key: key,
      icon: icon,
      children: children
    };
  };
  var PositionItem = function PositionItem() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      stroke: "currentColor",
      fill: "currentColor",
      color: "currentColor",
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512.000000 512.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("g", {
        transform: "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
        stroke: "none",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M4310 4783 c-105 -18 -229 -80 -299 -152 -100 -100 -141 -208 -141 -367 0 -325 178 -563 452 -605 237 -37 466 112 555 362 22 62 27 96 31 206 4 115 1 141 -17 203 -28 93 -70 158 -138 219 -118 105 -295 159 -443 134z m144 -238 c59 -10 130 -49 165 -92 97 -117 74 -369 -44 -488 -50 -49 -90 -67 -165 -73 -155 -11 -268 97 -300 288 -26 154 15 267 119 328 45 26 142 53 171 47 8 -2 33 -6 54 -10z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M2420 4114 c-180 -48 -322 -184 -364 -349 -20 -75 -20 -237 -1 -330 22 -106 76 -206 154 -285 101 -103 212 -150 351 -150 139 0 250 47 351 150 115 117 169 262 169 454 0 161 -43 276 -141 374 -63 63 -152 113 -245 137 -73 19 -201 18 -274 -1z m267 -244 c134 -57 188 -195 149 -375 -35 -164 -137 -260 -276 -260 -169 0 -288 153 -290 371 -1 219 210 353 417 264z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M655 3474 c-152 -37 -223 -72 -306 -154 -106 -105 -138 -192 -139 -375 0 -131 18 -213 67 -313 99 -200 318 -319 526 -284 272 47 447 283 447 606 0 245 -115 408 -345 492 -64 23 -205 39 -250 28z m140 -239 c84 -14 169 -80 202 -156 32 -75 23 -232 -19 -327 -29 -64 -90 -126 -150 -152 -42 -18 -65 -21 -118 -18 -75 6 -115 24 -165 73 -118 119 -141 371 -44 488 17 21 50 47 72 59 45 23 142 48 167 43 8 -2 33 -6 55 -10z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M4216 3434 c-164 -41 -310 -142 -385 -266 -40 -68 -58 -135 -115 -443 -62 -336 -62 -353 4 -398 22 -15 64 -17 403 -17 415 0 421 1 452 60 19 37 19 73 0 110 -30 57 -45 60 -365 60 l-290 0 5 23 c2 12 21 110 40 217 40 217 63 277 125 334 191 172 563 124 667 -86 14 -27 42 -152 78 -343 31 -164 61 -307 66 -316 43 -82 174 -75 209 11 12 30 10 52 -19 214 -73 401 -88 467 -126 543 -64 129 -192 232 -350 283 -90 29 -308 37 -399 14z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M2425 2786 c-231 -46 -395 -173 -463 -358 -12 -31 -47 -195 -78 -365 l-57 -307 19 -36 c37 -69 46 -70 444 -69 248 0 365 4 390 12 40 14 80 67 80 107 0 40 -40 93 -80 107 -24 8 -125 12 -313 12 l-279 1 6 28 c3 15 22 111 41 214 40 210 43 222 85 283 62 91 190 145 340 145 157 0 280 -55 347 -156 37 -56 46 -92 128 -536 30 -166 44 -191 106 -208 53 -14 106 10 133 60 l19 36 -57 307 c-60 326 -78 391 -134 475 -69 106 -209 199 -357 237 -86 22 -236 27 -320 11z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M543 2120 c-200 -52 -350 -178 -412 -345 -18 -49 -131 -623 -131 -667 0 -32 29 -77 60 -93 24 -13 89 -15 405 -15 334 0 380 2 405 17 73 43 73 153 0 196 -24 15 -65 17 -319 17 -160 0 -291 3 -291 7 0 44 86 448 103 481 126 254 609 253 731 -1 18 -37 40 -133 76 -327 63 -347 56 -318 95 -357 43 -43 98 -46 144 -7 56 46 55 64 -5 387 -30 161 -62 316 -71 346 -53 172 -235 322 -442 366 -100 21 -258 19 -348 -5z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M3738 1879 c-14 -6 -159 -153 -323 -330 l-296 -319 -599 0 c-399 0 -607 -4 -622 -11 -13 -5 -153 -154 -313 -329 l-290 -319 -590 -1 c-429 -1 -599 -4 -624 -13 -48 -17 -76 -58 -76 -113 0 -36 6 -49 33 -76 l32 -33 642 -3 c477 -2 650 0 671 9 16 7 156 152 324 336 l295 323 602 0 602 0 31 23 c17 12 156 157 309 322 l278 300 606 5 c679 6 645 2 677 78 13 32 14 42 2 76 -8 22 -27 49 -42 60 -28 21 -36 21 -665 23 -401 1 -647 -2 -664 -8z"
        })]
      })
    });
  };
  var PermissionMenu = function PermissionMenu() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      height: "1em",
      width: "1em",
      className: "ant-menu-item-icon",
      stroke: "currentColor",
      color: "currentColor",
      fill: "currentColor",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 1000 1000",
      enableBackground: "new 0 0 1000 1000",
      xmlSpace: "preserve",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("g", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M211.1,990l-89.6-1.4c-15.5,0-22.2-13.7-28.5-38.4l-1.3,0.2l-3-17.1c-0.3-1.6-0.5-3-0.7-4.4l-0.3-1.7l0.1,0l-7.5-42.6c-3.8-22,2.9-52.4,15.5-70.8L356.3,438c-17.3-37.2-31-83.7-36.1-113.1c-29-166.4,112.4-284.1,260.1-310.5c16.7-3,33.7-4.5,50.4-4.5C771.1,10,890.6,111.4,915,251.1c26.1,149.2-35.1,323.6-199.9,353c-21.6,3.9-50,6.1-77.9,6.1h0c-17.7,0-34.4-0.9-49-2.7L465.5,800.1l-92.2-7.2L273.1,949.4c-12.2,19.1-38.1,36.4-60.2,40.3L211.1,990z M132.7,951.1l75.2,1.1c11.5-2.7,27.3-13.5,33.4-23.2l106.8-166.7l6.2-7.7l10.7-0.3l80.8,6.3l123.8-194.2l12.3,2.1c15.1,2.6,34.2,4,55.1,4h0c25.4,0,52-2.1,71.3-5.5C849.3,542,900.8,388.9,877.8,257.6C856.6,136,752.7,47.7,630.7,47.7c-14.6,0-29.3,1.3-43.8,3.9C457,74.7,332.4,176.1,357.3,318.5c5.1,29.4,19.7,77.5,37.6,112.7l5.1,10l-273.1,394c-7,10.2-11.5,30.6-9.4,42.9l7.4,42.2c0.1,0.6,0.3,1.3,0.5,2C128.6,937.3,131,946.1,132.7,951.1z M722,378.2c-29,0-56.2-19.8-87.6-42.8c-5.9-4.3-12-8.8-18.3-13.3c-6.3-4.4-12.5-8.7-18.5-12.8C562,285,531.3,264,525.3,231.3c-3.5-18.8,2-38.3,16.6-59.4c27.4-39.5,72.3-63.1,120.1-63.1c30.1,0,59.2,9.3,83.9,26.8c66.1,46.7,82.2,138.9,35.9,205.6C764.5,366.1,744.9,378.2,722,378.2z M662,146.5c-35.4,0-68.8,17.5-89.1,46.9c-8.6,12.5-12.1,22.6-10.5,31.1c3.2,17.3,27.9,34.2,56.5,53.8c6.2,4.2,12.6,8.6,19,13.2c6.5,4.6,12.8,9.2,18.8,13.6c25,18.3,48.6,35.5,65.3,35.5c6.2,0,15.9-2.2,28.9-20.8c34.5-49.7,22.5-118.5-26.7-153.3C705.7,153.4,684.3,146.5,662,146.5z"
        })
      })
    });
  };
  var PermissionPosition = function PermissionPosition() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      stroke: "currentColor",
      color: "currentColor",
      fill: "currentColor",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 1000 1000",
      enableBackground: "new 0 0 1000 1000",
      xmlSpace: "preserve",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("g", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M601.8,423.2c40.8-17.2,83.8-26,128.4-26c4.4,0,8.8,0.2,13.2,0.2c20.9-52.8,26.2-115.2,15.7-175.9C734.9,82.3,603.6-10.7,465.6,13.8C327.7,38.3,211.4,145.5,235.9,284.6c5.2,30.1,19.7,76.9,36.9,110.8L22.5,756.6c-9.2,13.2-14.5,37.1-11.7,53.4l10.9,61.8c-10.3-59.5,2.9,21.4,10.9,21.2l82.5,1.1c15.9-2.9,35.8-16.3,44.6-29.9l99-154.8l1-1l86.5,6.9l115.6-181.3c0.4,0,0.8,0.2,1.1,0.2c10.3-14.2,21.6-27.6,34.3-40.2C527.2,463.6,562.6,439.8,601.8,423.2z M76.6,794.7l-12.3,5.2l1.3-13.4l239.8-348.2l14.4,13.4L76.6,794.7z M441.1,154.1c37.9-54.6,112.5-68.1,166.5-29.7c54.2,38.5,67.4,113.9,29.5,168.4c-37.9,54.5-76.6,16.1-130.7-22.2C452.3,232.2,403.2,208.8,441.1,154.1z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M727,464.2c-145.3,0-263,117.7-263,263s117.7,263,263,263c145.3,0,263-117.7,263-263C990,581.9,872.3,464.2,727,464.2z M879,835.1c0,39.2-75.2,48.2-145.8,48.2c-70.6,0-146.8-9-146.8-48.2v-10.9c0-28.9,52.1-58.2,96.3-74.1c3.3-1.1,18.6-9.6,10-32c-22-22.4-38.5-58.8-38.5-94.6c0-54.7,36.2-83.5,78.7-83.5c42.3,0,78.9,28.7,78.9,83.5c0,35.6-16.7,71.8-38.5,94.4h0.2c-8.4,25.5,5,31.6,7.1,32.2c46.5,15.3,98.8,44.4,98.8,74.1L879,835.1L879,835.1z"
        })]
      })
    });
  };
  var PermissionDepPos = function PermissionDepPos() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      stroke: "currentColor",
      color: "currentColor",
      fill: "currentColor",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 1000 1000",
      enableBackground: "new 0 0 1000 1000",
      xmlSpace: "preserve",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("g", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M446.1,154.9c38.5-54.6,114.1-68.6,168.7-30.1c54.6,39.2,68,114.7,29.4,169.4c-37.8,55.3-77,16.1-132.4-22.4C457.2,233.2,407.5,210.1,446.1,154.9z M77.2,798.8l-11.9,4.9l1.5-13.3l242.1-350l14.7,13.3L77.2,798.8z M468.5,536.9c10.5-13.9,21.7-27.2,34.3-40.5c30.8-30.2,66.5-54.6,105.7-70.8c41.3-17.5,85.4-26.5,130.2-26.5h13.3c21.1-52.4,26.7-115.5,16.2-176.4C743.6,82.8,610.6-11,470.6,14.2C331.3,38.7,213.8,146.5,238.1,286.4c5.7,30.1,20.3,77,37.8,111.3L22.6,760.4c-9.1,13.3-14.7,37.7-11.9,53.8L22,876.5c-2.9-16.1-4.2-22.3-4.2-22.3c0.7,0,9,43.3,15.4,43.3l83.3,1.5c16.1-2.8,36.4-16.1,44.8-30.2l100-155.3l1.5-1.5l87.4,7.1l116.9-182.1H468.5z M813.6,764.4c-20.4,47.7-75.6,70-123.9,50.5c-48.4-20.3-70.7-75.6-50.4-123.3c19.6-48.3,75.6-70.7,123.2-50.4C810.7,661.6,833.8,716.2,813.6,764.4z M920.6,699.3l69.4-43.3l-25.9-62.3l-79.2,18.8c-11.2-16.1-25.2-29.4-41.2-41.3l18.2-79l-63.1-26l-42.6,68c-19.6-2.8-39.2-2.8-58.1,0l-42.8-68.6l-62.9,25.2l17.5,79.2c-16.1,11.2-30.2,25.1-42,40.6l-78.4-18.2l-26.6,62.3l67.9,43.4c-2.7,19.5-2.7,39.2,0,58.1l-68.6,42.7l25.9,62.3l79.2-17.5c11.2,15.4,25.2,29.4,41.2,41.2l-18.8,78.5l62.9,25.9l44.2-68c19.6,2.9,39.2,2.9,58.1,0l43.3,68.7l63-25.9L843,884.9c15.4-11.2,28.7-24.4,40.6-40.6l79.7,18.2l26.6-62.3l-69.4-42.7C923.4,737.9,923.4,719,920.6,699.3z"
        })
      })
    });
  };
  var PermissionManagement = function PermissionManagement() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("svg", {
      stroke: "currentColor",
      color: "currentColor",
      fill: "currentColor",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 1000 1000",
      enableBackground: "new 0 0 1000 1000",
      xmlSpace: "preserve",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("g", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M968.9,481.4c-1.3,10.5-2.9,21.4-5,31.8l-5.2,24.8l-25.3-1.1c-3.3-0.1-6.6-0.2-10-0.2c-72.2,0-140.6,33.6-193.6,81c-4.3,3.8-8.9,9.9-12.4,14.5c-6.9,8.9-13.5,18.2-19.9,27.4c-17.4,24.9-34.2,50.3-50.7,75.8c-16.7,25.7-33.1,51.6-49.3,77.6l-9.5,15.3l-80.6-5.5L405.3,973.2l-7.5,3.5C373.7,987.9,340,990,313.6,990c-9.9,0-20-0.2-29.9-1l-17.7-1.4l-7.3-16.2c-14.3-31.8-19.2-70.8-22.3-105.2c-0.2-1.9-0.3-3.9-0.5-5.8c-0.4-2.3-0.6-4.7-0.4-7l-23.4,34.5l-9.9,4.6c-25.6,12-60.3,14.2-88.2,14.2c-10.1,0-20.5-0.2-30.6-1l-23.3-1.8l-9.6-21.3c-14.7-32.9-19.9-72.7-23.1-108.3c-0.2-1.7-0.3-3.5-0.5-5.3c-3-17.7,6.6-30.6,15.8-44.7c9-13.8,18.2-27.5,27.4-41.1c27.3-40.3,55-80.4,82.7-120.4c35.6-51.4,71.4-102.7,107.2-154c-20.6-46.3-32.4-97.1-29-148c1.4-20.7,6-47.7,15-66.9c31.1-66.2,78.4-119.6,144.4-152C434,20.6,482.7,10,531,10c13.1,0,26.9,0.7,39.9,2.8c66,10.9,121.3,42.3,159.2,97.8c0.4,0.6,0.8,1.1,1.1,1.7c12.4,0,25.4,0.7,37.6,2.7c63.4,10.5,116.4,40.4,152.9,93.8c39.3,57.4,51.6,129.7,51.8,198.1C973.6,431.8,972,456.8,968.9,481.4z M561.1,71.8c-2.9-0.5-13.7-2-30.1-2c-59.9,0-169.6,19.4-230.7,149.6c-0.3,0.7-8.4,19.2-9.7,50.5c-1.2,29.3,3.6,76.3,33.2,133.3l5.7,10.9l-7.1,10.1C239.3,542.8,106.9,733.4,86.9,766.4c0.1,0.8,0.1,1.6,0.2,2.6c1.4,15.9,4.5,50.4,13.7,77.8c3.8,0.1,8.4,0.2,13.3,0.2c25.2,0,45.5-2.4,58.2-6.7l110.2-162.3l63.2,4.3c4.9-7.1,9.8-14.1,14.7-21.2c36.6-52.9,73.4-105.7,110.3-158.4c-21.4-46.2-33.8-97.2-30.4-148.3c1-15,3.4-30.1,7.4-44.5c-3.4-2.8-6.9-5.5-10.3-8.3c-23.1-18.5-55.1-41.6-57.7-73.6c-1.2-14.8,3.8-28.8,13.8-39.8c38.2-42.5,94.1-74.2,152.3-74.2c25.6,0,50.4,6.2,71.8,19.4c14-5.4,28.4-9.8,43.1-13.1C635,94.7,601.7,78.5,561.1,71.8z M474.1,254.3c19.3-31.2,43-58.5,71.7-80.7c-35.8,0-74.7,19.1-104.9,51.2C446.3,232,461.9,244.6,474.1,254.3z M880.2,237.1c-27-39.5-67.3-63.9-119.5-72.5c-2.9-0.5-13.7-2-30.1-2c-59.9,0-169.6,19.4-230.7,149.6c-0.3,0.7-8.4,19.2-9.7,50.5c-1.2,29.3,3.6,76.3,33.2,133.3l5.7,10.9l-7.1,10.1c-83.1,118.6-215.5,309.2-235.5,342.2c0.1,0.8,0.1,1.6,0.2,2.6c1.4,15.9,4.5,50.4,13.7,77.8c3.8,0.1,8.4,0.2,13.3,0.2c25.2,0,45.5-2.4,58.2-6.7l110.2-162.3l79.3,5.4c25.5-40.8,108.6-172.3,135-195.8c38.4-34.4,117.7-91.5,221.1-93.7C924,442.4,935.8,318.2,880.2,237.1z M812.2,477.2c-8.7,9.7-20.2,15.3-33.3,15.3c-2.4,0-4.8-0.2-7.2-0.6c-12-1.9-22.3-8.3-31.6-15.9c-10.8-8.8-20.7-19.3-30.4-29.3c-10.7-11.1-21.4-22.2-32.9-32.5c-11-9.8-22.4-19.1-33.9-28.3c-11.6-9.3-23.8-18.8-34.1-29.4c-8.7-8.9-16.4-19.3-19.1-31.7c-0.4-1.9-0.7-3.9-0.9-5.9c-1-12.2,3.2-23.6,11.4-32.7c36.3-40.4,89.7-71,145.2-71c30.7,0,60.1,9.5,83.1,30.2c31.2,28,42.8,70.2,39.1,111C863.4,401.5,842.1,444,812.2,477.2z M794.8,283c-12.6-11.4-29.8-17.4-49.6-17.4c-35.8,0-74.7,19.1-104.9,51.2c5.6,7.3,21.7,20.2,33.9,30c11.1,8.9,23.6,18.9,36.1,30.1c13.3,12,25.1,24.2,35.5,35c10.3,10.6,23.8,24.7,31.2,29.2c23.3-26.8,37.6-58.3,40.4-89C820.1,323,812.1,298.5,794.8,283z M562.7,593.4L562.7,593.4L413.8,802c-0.1,0.1-0.1,0.2-0.2,0.3c-9.8,13.5-29,19.3-43.3,9.2c-14.3-10.2-15.1-30.3-5.3-44l149.2-208.9c9.7-13.6,29.1-19.5,43.4-9.3c14.3,10.2,15.1,30.3,5.3,44L562.7,593.4z M382.9,508.9l-0.3,0.4l0,0.1L233.8,717.8c-0.1,0.1-0.1,0.2-0.2,0.3c-12.9,17.8-38,24.6-56.6,11.3c-18.7-13.3-20.4-39.3-7.5-57.4l149.2-208.9c12.8-17.9,38.1-24.8,56.7-11.5C394,464.9,395.8,490.9,382.9,508.9z"
        })
      })
    });
  };
  var items = [getItem("Nhân sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdPeopleOutline, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/profile"),
    children: "H\u1ED3 s\u01A1"
  }), "1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsFileEarmarkFill, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/department"),
    children: "B\u1ED9 ph\u1EADn c\xF4ng t\xE1c"
  }), "2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_10__.FcDepartment, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/position"),
    children: "Ch\u1EE9c danh, ch\u1EE9c v\u1EE5"
  }), "3", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PositionItem, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/myprofile/").concat((_jwt_decode = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode === void 0 ? void 0 : _jwt_decode.id),
    children: "Th\xF4ng tin c\xE1 nh\xE2n"
  }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_11__.ImProfile, {}))]), getItem("Quyền", "sub-menu-2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionMenu, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/permission/manage"),
    children: "Qu\u1EA3n l\xFD quy\u1EC1n"
  }), "5", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionManagement, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/permission/position"),
    children: "Quy\u1EC1n ch\u1EE9c v\u1EE5"
  }), "6", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionPosition, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/permission/department-position"),
    children: "Quy\u1EC1n PB - CV"
  }), "7", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionDepPos, {}))])];
  var items_user = [getItem("Nhânn sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdPeopleOutline, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/myprofile/").concat((_jwt_decode2 = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode2 === void 0 ? void 0 : _jwt_decode2.id),
    children: "Th\xF4ng tin c\xE1 nh\xE2n"
  }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_11__.ImProfile, {}))])];
  var renderSubMenu = function renderSubMenu() {
    // return items;
    var subMenu = [];
    var menu_profile = [getItem("Nhân sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdPeopleOutline, {}), subMenu)];
    var subMenu_Per = [];
    var menu_permission = [getItem("Quyền", "sub-menu-2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionMenu, {}), subMenu_Per)];
    if (uri !== "") {
      var _iterator = _createForOfIteratorHelper(userPermissionApi),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var _iterator2 = _createForOfIteratorHelper(item.groups),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var itemHave = _step2.value;
              var _iterator3 = _createForOfIteratorHelper(itemHave.permission),
                _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var perUser = _step3.value;
                  userPermission.push(perUser.name.toLowerCase());
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (userPermission.length > 0) {
      if (uri === "profile-service") {
        var _jwt_decode3;
        if (userPermission.includes("xem danh sách user")) {
          subMenu.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/profile"),
            children: "H\u1ED3 s\u01A1"
          }), "1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsFileEarmarkFill, {})));
        }
        if (userPermission.includes("xem danh sách phòng ban")) {
          subMenu.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/department"),
            children: "B\u1ED9 ph\u1EADn c\xF4ng t\xE1c"
          }), "2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_10__.FcDepartment, {})));
        }
        if (userPermission.includes("xem danh sách chức vụ")) {
          subMenu.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/position"),
            children: "Ch\u1EE9c danh, ch\u1EE9c v\u1EE5"
          }), "3", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PositionItem, {})));
        }
        if (userPermission.includes("xem danh sách quyền")) {
          subMenu_Per.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/permission/manage"),
            children: "Qu\u1EA3n l\xFD quy\u1EC1n"
          }), "5", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionManagement, {})));
        }
        if (userPermission.includes("xem danh sách chức vu đã được gán quyền")) {
          subMenu_Per.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/permission/position"),
            children: "Quy\u1EC1n ch\u1EE9c v\u1EE5"
          }), "6", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionPosition, {})));
        }
        if (userPermission.includes("xem danh sách chức vụ và phòng ban đã được gán quyền")) {
          subMenu_Per.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/permission/department-position"),
            children: "Quy\u1EC1n PB - CV"
          }), "7", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionDepPos, {})));
        }
        subMenu.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "".concat(uri, "/myprofile/").concat((_jwt_decode3 = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode3 === void 0 ? void 0 : _jwt_decode3.id),
          children: "Th\xF4ng tin c\xE1 nh\xE2n"
        }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_11__.ImProfile, {})));
        return menu_profile.concat(menu_permission);
      } else {
        var _jwt_decode4;
        if (userPermission.includes("xem danh sách user")) {
          subMenu.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/profile"),
            children: "H\u1ED3 s\u01A1"
          }), "1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsFileEarmarkFill, {})));
        }
        if (userPermission.includes("xem danh sách phòng ban")) {
          subMenu.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/department"),
            children: "B\u1ED9 ph\u1EADn c\xF4ng t\xE1c"
          }), "2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_10__.FcDepartment, {})));
        }
        if (userPermission.includes("xem danh sách chức vụ")) {
          subMenu.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/position"),
            children: "Ch\u1EE9c danh, ch\u1EE9c v\u1EE5"
          }), "3", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PositionItem, {})));
        }
        if (userPermission.includes("xem danh sách quyền")) {
          subMenu_Per.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/permission/manage"),
            children: "Qu\u1EA3n l\xFD quy\u1EC1n"
          }), "5", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionManagement, {})));
        }
        if (userPermission.includes("xem danh sách chức vu đã được gán quyền")) {
          subMenu_Per.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/permission/position"),
            children: "Quy\u1EC1n ch\u1EE9c v\u1EE5"
          }), "6", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionPosition, {})));
        }
        if (userPermission.includes("xem danh sách chức vụ và phòng ban đã được gán quyền")) {
          subMenu_Per.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
            to: "".concat(uri, "/hr/permission/department-position"),
            children: "Quy\u1EC1n PB - CV"
          }), "7", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionDepPos, {})));
        }
        subMenu.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "".concat(uri, "/myprofile/").concat((_jwt_decode4 = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode4 === void 0 ? void 0 : _jwt_decode4.id),
          children: "Th\xF4ng tin c\xE1 nh\xE2n"
        }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_11__.ImProfile, {})));
        subMenu_Per.push(getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
          to: "".concat(uri, "/hr/permission/users"),
          children: "Quy\u1EC1n c\xE1 nh\xE2n"
        }), "8", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionMenu, {})));
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "sidebar_SubMenu__XZeb6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu
          // defaultOpenKeys={[`sub1`]}
          , {
            mode: "inline",
            items: menu_profile.concat(menu_permission)
          })
        });
      }
    } else {
      if (uri !== "") {
        return items_user;
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "sidebar_SubMenu__XZeb6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu
          // defaultOpenKeys={[`sub1`]}
          , {
            mode: "inline",
            items: menu_profile.concat(menu_permission)
          })
        });
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
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
/* harmony export */   "CREATE_FAMILY_RELATIONSHIP_CON_STEP7": function() { return /* binding */ CREATE_FAMILY_RELATIONSHIP_CON_STEP7; },
/* harmony export */   "CREATE_FAMILY_RELATIONSHIP_STEP7": function() { return /* binding */ CREATE_FAMILY_RELATIONSHIP_STEP7; },
/* harmony export */   "CREATE_ORGANIZATION": function() { return /* binding */ CREATE_ORGANIZATION; },
/* harmony export */   "CREATE_PARTY": function() { return /* binding */ CREATE_PARTY; },
/* harmony export */   "CREATE_PERMISSION": function() { return /* binding */ CREATE_PERMISSION; },
/* harmony export */   "CREATE_PERSONAL_HISTORY": function() { return /* binding */ CREATE_PERSONAL_HISTORY; },
/* harmony export */   "CREATE_POSITION_AND_MANAGEMENT": function() { return /* binding */ CREATE_POSITION_AND_MANAGEMENT; },
/* harmony export */   "CREATE_POSITION_TYPE": function() { return /* binding */ CREATE_POSITION_TYPE; },
/* harmony export */   "CREATE_PROFILE": function() { return /* binding */ CREATE_PROFILE; },
/* harmony export */   "CREATE_REWARD_DISCIPLINE": function() { return /* binding */ CREATE_REWARD_DISCIPLINE; },
/* harmony export */   "CREATE_TRAINING": function() { return /* binding */ CREATE_TRAINING; },
/* harmony export */   "DELETE_DEPARTMENT": function() { return /* binding */ DELETE_DEPARTMENT; },
/* harmony export */   "DELETE_DEP_POS": function() { return /* binding */ DELETE_DEP_POS; },
/* harmony export */   "DELETE_ORGANIZATION": function() { return /* binding */ DELETE_ORGANIZATION; },
/* harmony export */   "DELETE_PERMISSION": function() { return /* binding */ DELETE_PERMISSION; },
/* harmony export */   "DELETE_PERMISSION_DEP_POS": function() { return /* binding */ DELETE_PERMISSION_DEP_POS; },
/* harmony export */   "DELETE_PERMISSION_POS": function() { return /* binding */ DELETE_PERMISSION_POS; },
/* harmony export */   "DELETE_PERSONAL_HISTORY": function() { return /* binding */ DELETE_PERSONAL_HISTORY; },
/* harmony export */   "DELETE_POSITION_AND_MANAGEMENT": function() { return /* binding */ DELETE_POSITION_AND_MANAGEMENT; },
/* harmony export */   "DELETE_POSITION_TYPE": function() { return /* binding */ DELETE_POSITION_TYPE; },
/* harmony export */   "DELETE_RESOURCE": function() { return /* binding */ DELETE_RESOURCE; },
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
/* harmony export */   "GET_PERMISSION_DEP_POS": function() { return /* binding */ GET_PERMISSION_DEP_POS; },
/* harmony export */   "GET_PERMISSION_DEP_POS_LIST": function() { return /* binding */ GET_PERMISSION_DEP_POS_LIST; },
/* harmony export */   "GET_PERMISSION_LIST": function() { return /* binding */ GET_PERMISSION_LIST; },
/* harmony export */   "GET_PERMISSION_OF_USER": function() { return /* binding */ GET_PERMISSION_OF_USER; },
/* harmony export */   "GET_PERMISSION_POSITION": function() { return /* binding */ GET_PERMISSION_POSITION; },
/* harmony export */   "GET_PERMISSION_POS_LIST": function() { return /* binding */ GET_PERMISSION_POS_LIST; },
/* harmony export */   "GET_PERSONAL_HISTORY": function() { return /* binding */ GET_PERSONAL_HISTORY; },
/* harmony export */   "GET_POSITIONS_MANA_LIST": function() { return /* binding */ GET_POSITIONS_MANA_LIST; },
/* harmony export */   "GET_POSITION_TYPE_LIST": function() { return /* binding */ GET_POSITION_TYPE_LIST; },
/* harmony export */   "GET_POS_LIST": function() { return /* binding */ GET_POS_LIST; },
/* harmony export */   "GET_PROFILE_BY_ID": function() { return /* binding */ GET_PROFILE_BY_ID; },
/* harmony export */   "GET_PROFILE_BY_TOKEN": function() { return /* binding */ GET_PROFILE_BY_TOKEN; },
/* harmony export */   "GET_PROFILE_BY_USER_ID": function() { return /* binding */ GET_PROFILE_BY_USER_ID; },
/* harmony export */   "GET_PROVINCES": function() { return /* binding */ GET_PROVINCES; },
/* harmony export */   "GET_TABLE_MANAGEMENT": function() { return /* binding */ GET_TABLE_MANAGEMENT; },
/* harmony export */   "GET_USER_INFORMATION": function() { return /* binding */ GET_USER_INFORMATION; },
/* harmony export */   "GET_USER_LIST": function() { return /* binding */ GET_USER_LIST; },
/* harmony export */   "ONLY_CREATE_PROFILE": function() { return /* binding */ ONLY_CREATE_PROFILE; },
/* harmony export */   "POST_PERMISSION_DEP_POS": function() { return /* binding */ POST_PERMISSION_DEP_POS; },
/* harmony export */   "POST_PERMISSION_POS": function() { return /* binding */ POST_PERMISSION_POS; },
/* harmony export */   "SEARCH": function() { return /* binding */ SEARCH; },
/* harmony export */   "SEARCH_DEPARTMENT": function() { return /* binding */ SEARCH_DEPARTMENT; },
/* harmony export */   "SEARCH_POSITION": function() { return /* binding */ SEARCH_POSITION; },
/* harmony export */   "TOKEN": function() { return /* binding */ TOKEN; },
/* harmony export */   "UPDATE_DEPARTMENT": function() { return /* binding */ UPDATE_DEPARTMENT; },
/* harmony export */   "UPDATE_FAMILY_RELATIONSHIP": function() { return /* binding */ UPDATE_FAMILY_RELATIONSHIP; },
/* harmony export */   "UPDATE_FAMILY_RELATIONSHIP_CON_STEP7": function() { return /* binding */ UPDATE_FAMILY_RELATIONSHIP_CON_STEP7; },
/* harmony export */   "UPDATE_FAMILY_RELATIONSHIP_STEP7": function() { return /* binding */ UPDATE_FAMILY_RELATIONSHIP_STEP7; },
/* harmony export */   "UPDATE_ORGANIZATION": function() { return /* binding */ UPDATE_ORGANIZATION; },
/* harmony export */   "UPDATE_PARTY": function() { return /* binding */ UPDATE_PARTY; },
/* harmony export */   "UPDATE_PERMISSION": function() { return /* binding */ UPDATE_PERMISSION; },
/* harmony export */   "UPDATE_PERSONAL_HISTORY": function() { return /* binding */ UPDATE_PERSONAL_HISTORY; },
/* harmony export */   "UPDATE_POSITION_AND_MANAGEMENT": function() { return /* binding */ UPDATE_POSITION_AND_MANAGEMENT; },
/* harmony export */   "UPDATE_POSITION_TYPE": function() { return /* binding */ UPDATE_POSITION_TYPE; },
/* harmony export */   "UPDATE_PROFILE": function() { return /* binding */ UPDATE_PROFILE; },
/* harmony export */   "UPDATE_PROFILE_ACTIVE": function() { return /* binding */ UPDATE_PROFILE_ACTIVE; },
/* harmony export */   "UPDATE_REWARD_DISCIPLINE": function() { return /* binding */ UPDATE_REWARD_DISCIPLINE; },
/* harmony export */   "UPDATE_TRAINING": function() { return /* binding */ UPDATE_TRAINING; },
/* harmony export */   "UPLOAD_PDF_STEP7": function() { return /* binding */ UPLOAD_PDF_STEP7; },
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
/* harmony export */   "regexEmail": function() { return /* binding */ regexEmail; },
/* harmony export */   "regexPhone": function() { return /* binding */ regexPhone; },
/* harmony export */   "thamGiaToChucCT": function() { return /* binding */ thamGiaToChucCT; }
/* harmony export */ });
/* harmony import */ var _ultils_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ultils/helper */ "./src/ultils/helper.js");

var TOKEN = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_0__.getTokenInCookie)();
var local = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_0__.checkMicroFe)() === true ? window.location.href.includes("staging") ? "https://profileservice-staging.tuoitre.vn" : "https://profileservice.tuoitre.vn" : "";

// Regex
var regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var regexPhone = /(84[3|5|7|8|9]|0[3|5|7|8|9])+([0-9]{8}|[0-9]{9})\b/;
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
var DELETE_DEPARTMENT = "DELETE_DEPARTMENT";
var GET_POSITIONS_MANA_LIST = "GET_POSITIONS_MANA_LIST";
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
var CREATE_FAMILY_RELATIONSHIP_STEP7 = "CREATE_FAMILY_RELATIONSHIP_STEP7";
var CREATE_FAMILY_RELATIONSHIP_CON_STEP7 = "CREATE_FAMILY_RELATIONSHIP_CON_STEP7";
var UPDATE_FAMILY_RELATIONSHIP_STEP7 = "UPDATE_FAMILY_RELATIONSHIP_STEP7";
var UPDATE_FAMILY_RELATIONSHIP_CON_STEP7 = "UPDATE_FAMILY_RELATIONSHIP_CON_STEP7";
var UPDATE_FAMILY_RELATIONSHIP = "UPDATE_FAMILY_RELATIONSHIP";
var GET_DEP_POS_TO_SEARCH = "GET_DEP_POS_TO_SEARCH";
var SEARCH = "SEARCH";
var GET_PROFILE_BY_USER_ID = "GET_PROFILE_BY_USER_ID";
var GET_PROFILE_BY_TOKEN = "GET_PROFILE_BY_TOKEN";
var UPDATE_PROFILE_ACTIVE = "UPDATE_PROFILE_ACTIVE";
var GET_PERMISSION_LIST = "GET_PERMISSION_LIST";
var CREATE_PERMISSION = "CREATE_PERMISSION";
var UPDATE_PERMISSION = "UPDATE_PERMISSION";
var DELETE_PERMISSION = "DELETE_PERMISSION";
var GET_PERMISSION_POSITION = "GET_PERMISSION_POSITION";
var GET_TABLE_MANAGEMENT = "GET_TABLE_MANAGEMENT";
var SEARCH_DEPARTMENT = "SEARCH_DEPARTMENT";
var SEARCH_POSITION = "SEARCH_POSITION";
var GET_POS_LIST = "GET_POS_LIST";
var DELETE_RESOURCE = "DELETE_RESOURCE";
var DELETE_PERMISSION_POS = "DELETE_PERMISSION_POS";
var POST_PERMISSION_POS = "POST_PERMISSION_POS";
var DELETE_PERMISSION_DEP_POS = "DELETE_PERMISSION_DEP_POS";
var POST_PERMISSION_DEP_POS = "POST_PERMISSION_DEP_POS";
var GET_PERMISSION_DEP_POS = "GET_PERMISSION_DEP_POS";
var GET_PERMISSION_DEP_POS_LIST = "GET_PERMISSION_DEP_POS_LIST";
var GET_PERMISSION_POS_LIST = "GET_PERMISSION_POS_LIST";
var GET_PERMISSION_OF_USER = "GET_PERMISSION_OF_USER";
var UPLOAD_PDF_STEP7 = "UPLOAD_PDF_STEP7";

/***/ }),

/***/ "./src/ultils/helper.js":
/*!******************************!*\
  !*** ./src/ultils/helper.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkMicroFe": function() { return /* binding */ checkMicroFe; },
/* harmony export */   "checkUserPermission": function() { return /* binding */ checkUserPermission; },
/* harmony export */   "getTokenInCookie": function() { return /* binding */ getTokenInCookie; },
/* harmony export */   "handleDateTime": function() { return /* binding */ handleDateTime; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "webpack/sharing/consume/default/moment/moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var doc_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! doc-cookies */ "webpack/sharing/consume/default/doc-cookies/doc-cookies");
/* harmony import */ var doc_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(doc_cookies__WEBPACK_IMPORTED_MODULE_1__);


var handleDateTime = function handleDateTime(date) {
  try {
    var convert;
    if (typeof date === "number") {
      // convert từ số sang chuỗi DD-MM-YYYY
      var convert1 = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date)).format("DD-MM-YYYY");
      convert = moment__WEBPACK_IMPORTED_MODULE_0___default()(convert1, "DD-MM-YYYY");
    } else {
      if (date.includes(".000Z")) {
        var _convert = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date)).format("DD-MM-YYYY");
        convert = moment__WEBPACK_IMPORTED_MODULE_0___default()(_convert, "DD-MM-YYYY");
      } else {
        var _convert2 = moment__WEBPACK_IMPORTED_MODULE_0___default()(new Date(date.concat(".000Z"))).format("DD-MM-YYYY");
        convert = moment__WEBPACK_IMPORTED_MODULE_0___default()(_convert2, "DD-MM-YYYY");
      }
    }
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
      return null;
      // Khi test trên local
      // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzU2LCJleHAiOjI3NTA1NTQ3MzB9.drBO_G7F9JCDi7XmLRmf14QvUqYe8cW4inBIbQsmRYI"
      // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZXhwIjoyNzUwNDExMDg3fQ.uWeEJEXHyNysw85k22m0s6dFNi4nJFAO8NS8leY6fyA"
    }
    // console.log(tokenCookie);
    return tokenCookie;
  } catch (error) {
    console.log(error);
  }
};
var checkUserPermission = function checkUserPermission(permissionList) {
  try {
    var result = true;
    for (var _len = arguments.length, namePermission = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      namePermission[_key - 1] = arguments[_key];
    }
    for (var _i = 0, _namePermission = namePermission; _i < _namePermission.length; _i++) {
      var perName = _namePermission[_i];
      if (!permissionList.includes(perName)) {
        result = false;
      }
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRTtBQUNxQjtBQUNSO0FBQ1U7QUFDTDtBQUNNO0FBQ1Q7QUFDTjtBQUNLO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFDMUMsSUFBSVcsaUJBQWlCLEdBQUcsRUFBRTtBQUMxQixJQUFJQyxjQUFjLEdBQUcsRUFBRTtBQUNSLFNBQVNDLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFO0VBQUE7RUFDeEMsSUFBSUMsR0FBRyxHQUFHVCw0REFBWSxFQUFFLEtBQUssSUFBSSxHQUFHLGlCQUFpQixHQUFHLEVBQUU7RUFDMUQsSUFBSVEsVUFBVSxLQUFLRSxTQUFTLEVBQUU7SUFDMUJMLGlCQUFpQixHQUFHRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQ3JDO0VBQ0EsSUFBSUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtJQUNaSCxjQUFjLEdBQUdGLHdEQUFXLENBQUMsVUFBQU8sS0FBSztNQUFBLE9BQUlBLEtBQUssQ0FBQ0MsaUJBQWlCLENBQUNOLGNBQWM7SUFBQSxFQUFDO0VBQ2pGO0VBRUEsSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQU8sQ0FBSUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFLO0lBQzVDLE9BQU87TUFDSEgsS0FBSyxFQUFMQSxLQUFLO01BQ0xDLEdBQUcsRUFBSEEsR0FBRztNQUNIQyxJQUFJLEVBQUpBLElBQUk7TUFDSkMsUUFBUSxFQUFSQTtJQUNKLENBQUM7RUFDTCxDQUFDO0VBRUQsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVk7SUFBQSxvQkFDZDtNQUFLLE1BQU0sRUFBQyxjQUFjO01BQUMsSUFBSSxFQUFDLGNBQWM7TUFBQyxLQUFLLEVBQUMsY0FBYztNQUFDLE9BQU8sRUFBQyxLQUFLO01BQUMsS0FBSyxFQUFDLDRCQUE0QjtNQUNoSCxPQUFPLEVB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LEdBQUcsSUFBSTtJQUFDLGtDQUYyQkMsY0FBYztNQUFkQSxjQUFjO0lBQUE7SUFHM0QsbUNBQW1CQSxjQUFjLHFDQUFDO01BQTlCLElBQUlDLE9BQU87TUFDWCxJQUFHLENBQUNILGNBQWMsQ0FBQzdHLFFBQVEsQ0FBQ2dILE9BQU8sQ0FBQyxFQUFDO1FBQ2pDRixNQUFNLEdBQUcsS0FBSztNQUNsQjtJQUNKO0lBQ0EsT0FBT0EsTUFBTTtFQUNqQixDQUFDLENBQUMsT0FBT04sS0FBSyxFQUFFO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUM7RUFDdEI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3RpdGxlL3RpdGxlLmpzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvdWx0aWxzL2hlbHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIlxuaW1wb3J0IHsgTWRQZW9wbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnNGaWxlRWFybWFya0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHsgRmNEZXBhcnRtZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCJcbmltcG9ydCB7IGNoZWNrTWljcm9GZSB9IGZyb20gJy4uLy4uL3VsdGlscy9oZWxwZXInO1xuaW1wb3J0IHsgSW1Qcm9maWxlIH0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gXCIuLi8uLi90aXRsZS90aXRsZVwiXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmxldCB1c2VyUGVybWlzc2lvbkFwaSA9IFtdXG5sZXQgdXNlclBlcm1pc3Npb24gPSBbXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Yk1lbnUocGVybWlzc2lvbikge1xuICAgIGxldCB1cmkgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwicHJvZmlsZS1zZXJ2aWNlXCIgOiBcIlwiO1xuICAgIGlmIChwZXJtaXNzaW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdXNlclBlcm1pc3Npb25BcGkgPSBwZXJtaXNzaW9uWzJdO1xuICAgIH1cbiAgICBpZiAodXJpID09PSBcIlwiKSB7XG4gICAgICAgIHVzZXJQZXJtaXNzaW9uID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGVybWlzc2lvblJlZHVjZXIudXNlclBlcm1pc3Npb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGdldEl0ZW0gPSAobGFiZWwsIGtleSwgaWNvbiwgY2hpbGRyZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBQb3NpdGlvbkl0ZW0gPSAoKSA9PiAoXG4gICAgICAgIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDBcIlxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDMxMCA0NzgzIGMtMTA1IC0xOCAtMjI5IC04MCAtMjk5IC0xNTIgLTEwMCAtMTAwIC0xNDEgLTIwOCAtMTQxXG4gICAgICAgIC0zNjcgMCAtMzI1IDE3OCAtNTYzIDQ1MiAtNjA1IDIzNyAtMzcgNDY2IDExMiA1NTUgMzYyIDIyIDYyIDI3IDk2IDMxIDIwNiA0XG4gICAgICAgIDExNSAxIDE0MSAtMTcgMjAzIC0yOCA5MyAtNzAgMTU4IC0xMzggMjE5IC0xMTggMTA1IC0yOTUgMTU5IC00NDMgMTM0eiBtMTQ0XG4gICAgICAgIC0yMzggYzU5IC0xMCAxMzAgLTQ5IDE2NSAtOTIgOTcgLTExNyA3NCAtMzY5IC00NCAtNDg4IC01MCAtNDkgLTkwIC02NyAtMTY1XG4gICAgICAgIC03MyAtMTU1IC0xMSAtMjY4IDk3IC0zMDAgMjg4IC0yNiAxNTQgMTUgMjY3IDExOSAzMjggNDUgMjYgMTQyIDUzIDE3MSA0NyA4XG4gICAgICAgIC0yIDMzIC02IDU0IC0xMHpcIi8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNDIwIDQxMTQgYy0xODAgLTQ4IC0zMjIgLTE4NCAtMzY0IC0zNDkgLTIwIC03NSAtMjAgLTIzNyAtMSAtMzMwXG4gICAgICAgIDIyIC0xMDYgNzYgLTIwNiAxNTQgLTI4NSAxMDEgLTEwMyAyMTIgLTE1MCAzNTEgLTE1MCAxMzkgMCAyNTAgNDcgMzUxIDE1MFxuICAgICAgICAxMTUgMTE3IDE2OSAyNjIgMTY5IDQ1NCAwIDE2MSAtNDMgMjc2IC0xNDEgMzc0IC02MyA2MyAtMTUyIDExMyAtMjQ1IDEzNyAtNzNcbiAgICAgICAgMTkgLTIwMSAxOCAtMjc0IC0xeiBtMjY3IC0yNDQgYzEzNCAtNTcgMTg4IC0xOTUgMTQ5IC0zNzUgLTM1IC0xNjQgLTEzNyAtMjYwXG4gICAgICAgIC0yNzYgLTI2MCAtMTY5IDAgLTI4OCAxNTMgLTI5MCAzNzEgLTEgMjE5IDIxMCAzNTMgNDE3IDI2NHpcIi8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk02NTUgMzQ3NCBjLTE1MiAtMzcgLTIyMyAtNzIgLTMwNiAtMTU0IC0xMDYgLTEwNSAtMTM4IC0xOTIgLTEzOVxuICAgICAgICAtMzc1IDAgLTEzMSAxOCAtMjEzIDY3IC0zMTMgOTkgLTIwMCAzMTggLTMxOSA1MjYgLTI4NCAyNzIgNDcgNDQ3IDI4MyA0NDdcbiAgICAgICAgNjA2IDAgMjQ1IC0xMTUgNDA4IC0zNDUgNDkyIC02NCAyMyAtMjA1IDM5IC0yNTAgMjh6IG0xNDAgLTIzOSBjODQgLTE0IDE2OVxuICAgICAgICAtODAgMjAyIC0xNTYgMzIgLTc1IDIzIC0yMzIgLTE5IC0zMjcgLTI5IC02NCAtOTAgLTEyNiAtMTUwIC0xNTIgLTQyIC0xOCAtNjVcbiAgICAgICAgLTIxIC0xMTggLTE4IC03NSA2IC0xMTUgMjQgLTE2NSA3MyAtMTE4IDExOSAtMTQxIDM3MSAtNDQgNDg4IDE3IDIxIDUwIDQ3IDcyXG4gICAgICAgIDU5IDQ1IDIzIDE0MiA0OCAxNjcgNDMgOCAtMiAzMyAtNiA1NSAtMTB6XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDIxNiAzNDM0IGMtMTY0IC00MSAtMzEwIC0xNDIgLTM4NSAtMjY2IC00MCAtNjggLTU4IC0xMzUgLTExNVxuICAgICAgICAtNDQzIC02MiAtMzM2IC02MiAtMzUzIDQgLTM5OCAyMiAtMTUgNjQgLTE3IDQwMyAtMTcgNDE1IDAgNDIxIDEgNDUyIDYwIDE5XG4gICAgICAgIDM3IDE5IDczIDAgMTEwIC0zMCA1NyAtNDUgNjAgLTM2NSA2MCBsLTI5MCAwIDUgMjMgYzIgMTIgMjEgMTEwIDQwIDIxNyA0MFxuICAgICAgICAyMTcgNjMgMjc3IDEyNSAzMzQgMTkxIDE3MiA1NjMgMTI0IDY2NyAtODYgMTQgLTI3IDQyIC0xNTIgNzggLTM0MyAzMSAtMTY0XG4gICAgICAgIDYxIC0zMDcgNjYgLTMxNiA0MyAtODIgMTc0IC03NSAyMDkgMTEgMTIgMzAgMTAgNTIgLTE5IDIxNCAtNzMgNDAxIC04OCA0NjdcbiAgICAgICAgLTEyNiA1NDMgLTY0IDEyOSAtMTkyIDIzMiAtMzUwIDI4MyAtOTAgMjkgLTMwOCAzNyAtMzk5IDE0elwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0MjUgMjc4NiBjLTIzMSAtNDYgLTM5NSAtMTczIC00NjMgLTM1OCAtMTIgLTMxIC00NyAtMTk1IC03OCAtMzY1XG4gICAgICAgIGwtNTcgLTMwNyAxOSAtMzYgYzM3IC02OSA0NiAtNzAgNDQ0IC02OSAyNDggMCAzNjUgNCAzOTAgMTIgNDAgMTQgODAgNjcgODBcbiAgICAgICAgMTA3IDAgNDAgLTQwIDkzIC04MCAxMDcgLTI0IDggLTEyNSAxMiAtMzEzIDEyIGwtMjc5IDEgNiAyOCBjMyAxNSAyMiAxMTEgNDFcbiAgICAgICAgMjE0IDQwIDIxMCA0MyAyMjIgODUgMjgzIDYyIDkxIDE5MCAxNDUgMzQwIDE0NSAxNTcgMCAyODAgLTU1IDM0NyAtMTU2IDM3XG4gICAgICAgIC01NiA0NiAtOTIgMTI4IC01MzYgMzAgLTE2NiA0NCAtMTkxIDEwNiAtMjA4IDUzIC0xNCAxMDYgMTAgMTMzIDYwIGwxOSAzNlxuICAgICAgICAtNTcgMzA3IGMtNjAgMzI2IC03OCAzOTEgLTEzNCA0NzUgLTY5IDEwNiAtMjA5IDE5OSAtMzU3IDIzNyAtODYgMjIgLTIzNiAyN1xuICAgICAgICAtMzIwIDExelwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTU0MyAyMTIwIGMtMjAwIC01MiAtMzUwIC0xNzggLTQxMiAtMzQ1IC0xOCAtNDkgLTEzMSAtNjIzIC0xMzFcbiAgICAgICAgLTY2NyAwIC0zMiAyOSAtNzcgNjAgLTkzIDI0IC0xMyA4OSAtMTUgNDA1IC0xNSAzMzQgMCAzODAgMiA0MDUgMTcgNzMgNDMgNzNcbiAgICAgICAgMTUzIDAgMTk2IC0yNCAxNSAtNjUgMTcgLTMxOSAxNyAtMTYwIDAgLTI5MSAzIC0yOTEgNyAwIDQ0IDg2IDQ0OCAxMDMgNDgxXG4gICAgICAgIDEyNiAyNTQgNjA5IDI1MyA3MzEgLTEgMTggLTM3IDQwIC0xMzMgNzYgLTMyNyA2MyAtMzQ3IDU2IC0zMTggOTUgLTM1NyA0M1xuICAgICAgICAtNDMgOTggLTQ2IDE0NCAtNyA1NiA0NiA1NSA2NCAtNSAzODcgLTMwIDE2MSAtNjIgMzE2IC03MSAzNDYgLTUzIDE3MiAtMjM1XG4gICAgICAgIDMyMiAtNDQyIDM2NiAtMTAwIDIxIC0yNTggMTkgLTM0OCAtNXpcIi8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNzM4IDE4NzkgYy0xNCAtNiAtMTU5IC0xNTMgLTMyMyAtMzMwIGwtMjk2IC0zMTkgLTU5OSAwIGMtMzk5IDBcbiAgICAgICAgLTYwNyAtNCAtNjIyIC0xMSAtMTMgLTUgLTE1MyAtMTU0IC0zMTMgLTMyOSBsLTI5MCAtMzE5IC01OTAgLTEgYy00MjkgLTFcbiAgICAgICAgLTU5OSAtNCAtNjI0IC0xMyAtNDggLTE3IC03NiAtNTggLTc2IC0xMTMgMCAtMzYgNiAtNDkgMzMgLTc2IGwzMiAtMzMgNjQyIC0zXG4gICAgICAgIGM0NzcgLTIgNjUwIDAgNjcxIDkgMTYgNyAxNTYgMTUyIDMyNCAzMzYgbDI5NSAzMjMgNjAyIDAgNjAyIDAgMzEgMjMgYzE3IDEyXG4gICAgICAgIDE1NiAxNTcgMzA5IDMyMiBsMjc4IDMwMCA2MDYgNSBjNjc5IDYgNjQ1IDIgNjc3IDc4IDEzIDMyIDE0IDQyIDIgNzYgLTggMjJcbiAgICAgICAgLTI3IDQ5IC00MiA2MCAtMjggMjEgLTM2IDIxIC02NjUgMjMgLTQwMSAxIC02NDcgLTIgLTY2NCAtOHpcIi8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcblxuICAgIGNvbnN0IFBlcm1pc3Npb25NZW51ID0gKCkgPT4gKFxuICAgICAgICA8c3ZnIGhlaWdodD1cIjFlbVwiIHdpZHRoPVwiMWVtXCIgY2xhc3NOYW1lPSdhbnQtbWVudS1pdGVtLWljb24nIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgPGc+PHBhdGggZD1cIk0yMTEuMSw5OTBsLTg5LjYtMS40Yy0xNS41LDAtMjIuMi0xMy43LTI4LjUtMzguNGwtMS4zLDAuMmwtMy0xNy4xYy0wLjMtMS42LTAuNS0zLTAuNy00LjRsLTAuMy0xLjdsMC4xLDBsLTcuNS00Mi42Yy0zLjgtMjIsMi45LTUyLjQsMTUuNS03MC44TDM1Ni4zLDQzOGMtMTcuMy0zNy4yLTMxLTgzLjctMzYuMS0xMTMuMWMtMjktMTY2LjQsMTEyLjQtMjg0LjEsMjYwLjEtMzEwLjVjMTYuNy0zLDMzLjctNC41LDUwLjQtNC41Qzc3MS4xLDEwLDg5MC42LDExMS40LDkxNSwyNTEuMWMyNi4xLDE0OS4yLTM1LjEsMzIzLjYtMTk5LjksMzUzYy0yMS42LDMuOS01MCw2LjEtNzcuOSw2LjFoMGMtMTcuNywwLTM0LjQtMC45LTQ5LTIuN0w0NjUuNSw4MDAuMWwtOTIuMi03LjJMMjczLjEsOTQ5LjRjLTEyLjIsMTkuMS0zOC4xLDM2LjQtNjAuMiw0MC4zTDIxMS4xLDk5MHogTTEzMi43LDk1MS4xbDc1LjIsMS4xYzExLjUtMi43LDI3LjMtMTMuNSwzMy40LTIzLjJsMTA2LjgtMTY2LjdsNi4yLTcuN2wxMC43LTAuM2w4MC44LDYuM2wxMjMuOC0xOTQuMmwxMi4zLDIuMWMxNS4xLDIuNiwzNC4yLDQsNTUuMSw0aDBjMjUuNCwwLDUyLTIuMSw3MS4zLTUuNUM4NDkuMyw1NDIsOTAwLjgsMzg4LjksODc3LjgsMjU3LjZDODU2LjYsMTM2LDc1Mi43LDQ3LjcsNjMwLjcsNDcuN2MtMTQuNiwwLTI5LjMsMS4zLTQzLjgsMy45QzQ1Nyw3NC43LDMzMi40LDE3Ni4xLDM1Ny4zLDMxOC41YzUuMSwyOS40LDE5LjcsNzcuNSwzNy42LDExMi43bDUuMSwxMGwtMjczLjEsMzk0Yy03LDEwLjItMTEuNSwzMC42LTkuNCw0Mi45bDcuNCw0Mi4yYzAuMSwwLjYsMC4zLDEuMywwLjUsMkMxMjguNiw5MzcuMywxMzEsOTQ2LjEsMTMyLjcsOTUxLjF6IE03MjIsMzc4LjJjLTI5LDAtNTYuMi0xOS44LTg3LjYtNDIuOGMtNS45LTQuMy0xMi04LjgtMTguMy0xMy4zYy02LjMtNC40LTEyLjUtOC43LTE4LjUtMTIuOEM1NjIsMjg1LDUzMS4zLDI2NCw1MjUuMywyMzEuM2MtMy41LTE4LjgsMi0zOC4zLDE2LjYtNTkuNGMyNy40LTM5LjUsNzIuMy02My4xLDEyMC4xLTYzLjFjMzAuMSwwLDU5LjIsOS4zLDgzLjksMjYuOGM2Ni4xLDQ2LjcsODIuMiwxMzguOSwzNS45LDIwNS42Qzc2NC41LDM2Ni4xLDc0NC45LDM3OC4yLDcyMiwzNzguMnogTTY2MiwxNDYuNWMtMzUuNCwwLTY4LjgsMTcuNS04OS4xLDQ2LjljLTguNiwxMi41LTEyLjEsMjIuNi0xMC41LDMxLjFjMy4yLDE3LjMsMjcuOSwzNC4yLDU2LjUsNTMuOGM2LjIsNC4yLDEyLjYsOC42LDE5LDEzLjJjNi41LDQuNiwxMi44LDkuMiwxOC44LDEzLjZjMjUsMTguMyw0OC42LDM1LjUsNjUuMywzNS41YzYuMiwwLDE1LjktMi4yLDI4LjktMjAuOGMzNC41LTQ5LjcsMjIuNS0xMTguNS0yNi43LTE1My4zQzcwNS43LDE1My40LDY4NC4zLDE0Ni41LDY2MiwxNDYuNXpcIiAvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgUGVybWlzc2lvblBvc2l0aW9uID0gKCkgPT4gKFxuICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgPGc+PHBhdGggZD1cIk02MDEuOCw0MjMuMmM0MC44LTE3LjIsODMuOC0yNiwxMjguNC0yNmM0LjQsMCw4LjgsMC4yLDEzLjIsMC4yYzIwLjktNTIuOCwyNi4yLTExNS4yLDE1LjctMTc1LjlDNzM0LjksODIuMyw2MDMuNi0xMC43LDQ2NS42LDEzLjhDMzI3LjcsMzguMywyMTEuNCwxNDUuNSwyMzUuOSwyODQuNmM1LjIsMzAuMSwxOS43LDc2LjksMzYuOSwxMTAuOEwyMi41LDc1Ni42Yy05LjIsMTMuMi0xNC41LDM3LjEtMTEuNyw1My40bDEwLjksNjEuOGMtMTAuMy01OS41LDIuOSwyMS40LDEwLjksMjEuMmw4Mi41LDEuMWMxNS45LTIuOSwzNS44LTE2LjMsNDQuNi0yOS45bDk5LTE1NC44bDEtMWw4Ni41LDYuOWwxMTUuNi0xODEuM2MwLjQsMCwwLjgsMC4yLDEuMSwwLjJjMTAuMy0xNC4yLDIxLjYtMjcuNiwzNC4zLTQwLjJDNTI3LjIsNDYzLjYsNTYyLjYsNDM5LjgsNjAxLjgsNDIzLjJ6IE03Ni42LDc5NC43bC0xMi4zLDUuMmwxLjMtMTMuNGwyMzkuOC0zNDguMmwxNC40LDEzLjRMNzYuNiw3OTQuN3ogTTQ0MS4xLDE1NC4xYzM3LjktNTQuNiwxMTIuNS02OC4xLDE2Ni41LTI5LjdjNTQuMiwzOC41LDY3LjQsMTEzLjksMjkuNSwxNjguNGMtMzcuOSw1NC41LTc2LjYsMTYuMS0xMzAuNy0yMi4yQzQ1Mi4zLDIzMi4yLDQwMy4yLDIwOC44LDQ0MS4xLDE1NC4xelwiIC8+PHBhdGggZD1cIk03MjcsNDY0LjJjLTE0NS4zLDAtMjYzLDExNy43LTI2MywyNjNzMTE3LjcsMjYzLDI2MywyNjNjMTQ1LjMsMCwyNjMtMTE3LjcsMjYzLTI2M0M5OTAsNTgxLjksODcyLjMsNDY0LjIsNzI3LDQ2NC4yeiBNODc5LDgzNS4xYzAsMzkuMi03NS4yLDQ4LjItMTQ1LjgsNDguMmMtNzAuNiwwLTE0Ni44LTktMTQ2LjgtNDguMnYtMTAuOWMwLTI4LjksNTIuMS01OC4yLDk2LjMtNzQuMWMzLjMtMS4xLDE4LjYtOS42LDEwLTMyYy0yMi0yMi40LTM4LjUtNTguOC0zOC41LTk0LjZjMC01NC43LDM2LjItODMuNSw3OC43LTgzLjVjNDIuMywwLDc4LjksMjguNyw3OC45LDgzLjVjMCwzNS42LTE2LjcsNzEuOC0zOC41LDk0LjRoMC4yYy04LjQsMjUuNSw1LDMxLjYsNy4xLDMyLjJjNDYuNSwxNS4zLDk4LjgsNDQuNCw5OC44LDc0LjFMODc5LDgzNS4xTDg3OSw4MzUuMXpcIiAvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgUGVybWlzc2lvbkRlcFBvcyA9ICgpID0+IChcbiAgICAgICAgPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDEwMDAgMTAwMFwiIHhtbFNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgIDxnPjxwYXRoIGQ9XCJNNDQ2LjEsMTU0LjljMzguNS01NC42LDExNC4xLTY4LjYsMTY4LjctMzAuMWM1NC42LDM5LjIsNjgsMTE0LjcsMjkuNCwxNjkuNGMtMzcuOCw1NS4zLTc3LDE2LjEtMTMyLjQtMjIuNEM0NTcuMiwyMzMuMiw0MDcuNSwyMTAuMSw0NDYuMSwxNTQuOXogTTc3LjIsNzk4LjhsLTExLjksNC45bDEuNS0xMy4zbDI0Mi4xLTM1MGwxNC43LDEzLjNMNzcuMiw3OTguOHogTTQ2OC41LDUzNi45YzEwLjUtMTMuOSwyMS43LTI3LjIsMzQuMy00MC41YzMwLjgtMzAuMiw2Ni41LTU0LjYsMTA1LjctNzAuOGM0MS4zLTE3LjUsODUuNC0yNi41LDEzMC4yLTI2LjVoMTMuM2MyMS4xLTUyLjQsMjYuNy0xMTUuNSwxNi4yLTE3Ni40Qzc0My42LDgyLjgsNjEwLjYtMTEsNDcwLjYsMTQuMkMzMzEuMywzOC43LDIxMy44LDE0Ni41LDIzOC4xLDI4Ni40YzUuNywzMC4xLDIwLjMsNzcsMzcuOCwxMTEuM0wyMi42LDc2MC40Yy05LjEsMTMuMy0xNC43LDM3LjctMTEuOSw1My44TDIyLDg3Ni41Yy0yLjktMTYuMS00LjItMjIuMy00LjItMjIuM2MwLjcsMCw5LDQzLjMsMTUuNCw0My4zbDgzLjMsMS41YzE2LjEtMi44LDM2LjQtMTYuMSw0NC44LTMwLjJsMTAwLTE1NS4zbDEuNS0xLjVsODcuNCw3LjFsMTE2LjktMTgyLjFINDY4LjV6IE04MTMuNiw3NjQuNGMtMjAuNCw0Ny43LTc1LjYsNzAtMTIzLjksNTAuNWMtNDguNC0yMC4zLTcwLjctNzUuNi01MC40LTEyMy4zYzE5LjYtNDguMyw3NS42LTcwLjcsMTIzLjItNTAuNEM4MTAuNyw2NjEuNiw4MzMuOCw3MTYuMiw4MTMuNiw3NjQuNHogTTkyMC42LDY5OS4zbDY5LjQtNDMuM2wtMjUuOS02Mi4zbC03OS4yLDE4LjhjLTExLjItMTYuMS0yNS4yLTI5LjQtNDEuMi00MS4zbDE4LjItNzlsLTYzLjEtMjZsLTQyLjYsNjhjLTE5LjYtMi44LTM5LjItMi44LTU4LjEsMGwtNDIuOC02OC42bC02Mi45LDI1LjJsMTcuNSw3OS4yYy0xNi4xLDExLjItMzAuMiwyNS4xLTQyLDQwLjZsLTc4LjQtMTguMmwtMjYuNiw2Mi4zbDY3LjksNDMuNGMtMi43LDE5LjUtMi43LDM5LjIsMCw1OC4xbC02OC42LDQyLjdsMjUuOSw2Mi4zbDc5LjItMTcuNWMxMS4yLDE1LjQsMjUuMiwyOS40LDQxLjIsNDEuMmwtMTguOCw3OC41bDYyLjksMjUuOWw0NC4yLTY4YzE5LjYsMi45LDM5LjIsMi45LDU4LjEsMGw0My4zLDY4LjdsNjMtMjUuOUw4NDMsODg0LjljMTUuNC0xMS4yLDI4LjctMjQuNCw0MC42LTQwLjZsNzkuNywxOC4ybDI2LjYtNjIuM2wtNjkuNC00Mi43QzkyMy40LDczNy45LDkyMy40LDcxOSw5MjAuNiw2OTkuM3pcIiAvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgUGVybWlzc2lvbk1hbmFnZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCJcbiAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDEwMDAgMTAwMFwiIHhtbFNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgIDxnPjxwYXRoIGQ9XCJNOTY4LjksNDgxLjRjLTEuMywxMC41LTIuOSwyMS40LTUsMzEuOGwtNS4yLDI0LjhsLTI1LjMtMS4xYy0zLjMtMC4xLTYuNi0wLjItMTAtMC4yYy03Mi4yLDAtMTQwLjYsMzMuNi0xOTMuNiw4MWMtNC4zLDMuOC04LjksOS45LTEyLjQsMTQuNWMtNi45LDguOS0xMy41LDE4LjItMTkuOSwyNy40Yy0xNy40LDI0LjktMzQuMiw1MC4zLTUwLjcsNzUuOGMtMTYuNywyNS43LTMzLjEsNTEuNi00OS4zLDc3LjZsLTkuNSwxNS4zbC04MC42LTUuNUw0MDUuMyw5NzMuMmwtNy41LDMuNUMzNzMuNyw5ODcuOSwzNDAsOTkwLDMxMy42LDk5MGMtOS45LDAtMjAtMC4yLTI5LjktMWwtMTcuNy0xLjRsLTcuMy0xNi4yYy0xNC4zLTMxLjgtMTkuMi03MC44LTIyLjMtMTA1LjJjLTAuMi0xLjktMC4zLTMuOS0wLjUtNS44Yy0wLjQtMi4zLTAuNi00LjctMC40LTdsLTIzLjQsMzQuNWwtOS45LDQuNmMtMjUuNiwxMi02MC4zLDE0LjItODguMiwxNC4yYy0xMC4xLDAtMjAuNS0wLjItMzAuNi0xbC0yMy4zLTEuOGwtOS42LTIxLjNjLTE0LjctMzIuOS0xOS45LTcyLjctMjMuMS0xMDguM2MtMC4yLTEuNy0wLjMtMy41LTAuNS01LjNjLTMtMTcuNyw2LjYtMzAuNiwxNS44LTQ0LjdjOS0xMy44LDE4LjItMjcuNSwyNy40LTQxLjFjMjcuMy00MC4zLDU1LTgwLjQsODIuNy0xMjAuNGMzNS42LTUxLjQsNzEuNC0xMDIuNywxMDcuMi0xNTRjLTIwLjYtNDYuMy0zMi40LTk3LjEtMjktMTQ4YzEuNC0yMC43LDYtNDcuNywxNS02Ni45YzMxLjEtNjYuMiw3OC40LTExOS42LDE0NC40LTE1MkM0MzQsMjAuNiw0ODIuNywxMCw1MzEsMTBjMTMuMSwwLDI2LjksMC43LDM5LjksMi44YzY2LDEwLjksMTIxLjMsNDIuMywxNTkuMiw5Ny44YzAuNCwwLjYsMC44LDEuMSwxLjEsMS43YzEyLjQsMCwyNS40LDAuNywzNy42LDIuN2M2My40LDEwLjUsMTE2LjQsNDAuNCwxNTIuOSw5My44YzM5LjMsNTcuNCw1MS42LDEyOS43LDUxLjgsMTk4LjFDOTczLjYsNDMxLjgsOTcyLDQ1Ni44LDk2OC45LDQ4MS40eiBNNTYxLjEsNzEuOGMtMi45LTAuNS0xMy43LTItMzAuMS0yYy01OS45LDAtMTY5LjYsMTkuNC0yMzAuNywxNDkuNmMtMC4zLDAuNy04LjQsMTkuMi05LjcsNTAuNWMtMS4yLDI5LjMsMy42LDc2LjMsMzMuMiwxMzMuM2w1LjcsMTAuOWwtNy4xLDEwLjFDMjM5LjMsNTQyLjgsMTA2LjksNzMzLjQsODYuOSw3NjYuNGMwLjEsMC44LDAuMSwxLjYsMC4yLDIuNmMxLjQsMTUuOSw0LjUsNTAuNCwxMy43LDc3LjhjMy44LDAuMSw4LjQsMC4yLDEzLjMsMC4yYzI1LjIsMCw0NS41LTIuNCw1OC4yLTYuN2wxMTAuMi0xNjIuM2w2My4yLDQuM2M0LjktNy4xLDkuOC0xNC4xLDE0LjctMjEuMmMzNi42LTUyLjksNzMuNC0xMDUuNywxMTAuMy0xNTguNGMtMjEuNC00Ni4yLTMzLjgtOTcuMi0zMC40LTE0OC4zYzEtMTUsMy40LTMwLjEsNy40LTQ0LjVjLTMuNC0yLjgtNi45LTUuNS0xMC4zLTguM2MtMjMuMS0xOC41LTU1LjEtNDEuNi01Ny43LTczLjZjLTEuMi0xNC44LDMuOC0yOC44LDEzLjgtMzkuOGMzOC4yLTQyLjUsOTQuMS03NC4yLDE1Mi4zLTc0LjJjMjUuNiwwLDUwLjQsNi4yLDcxLjgsMTkuNGMxNC01LjQsMjguNC05LjgsNDMuMS0xMy4xQzYzNSw5NC43LDYwMS43LDc4LjUsNTYxLjEsNzEuOHogTTQ3NC4xLDI1NC4zYzE5LjMtMzEuMiw0My01OC41LDcxLjctODAuN2MtMzUuOCwwLTc0LjcsMTkuMS0xMDQuOSw1MS4yQzQ0Ni4zLDIzMiw0NjEuOSwyNDQuNiw0NzQuMSwyNTQuM3ogTTg4MC4yLDIzNy4xYy0yNy0zOS41LTY3LjMtNjMuOS0xMTkuNS03Mi41Yy0yLjktMC41LTEzLjctMi0zMC4xLTJjLTU5LjksMC0xNjkuNiwxOS40LTIzMC43LDE0OS42Yy0wLjMsMC43LTguNCwxOS4yLTkuNyw1MC41Yy0xLjIsMjkuMywzLjYsNzYuMywzMy4yLDEzMy4zbDUuNywxMC45bC03LjEsMTAuMWMtODMuMSwxMTguNi0yMTUuNSwzMDkuMi0yMzUuNSwzNDIuMmMwLjEsMC44LDAuMSwxLjYsMC4yLDIuNmMxLjQsMTUuOSw0LjUsNTAuNCwxMy43LDc3LjhjMy44LDAuMSw4LjQsMC4yLDEzLjMsMC4yYzI1LjIsMCw0NS41LTIuNCw1OC4yLTYuN2wxMTAuMi0xNjIuM2w3OS4zLDUuNGMyNS41LTQwLjgsMTA4LjYtMTcyLjMsMTM1LTE5NS44YzM4LjQtMzQuNCwxMTcuNy05MS41LDIyMS4xLTkzLjdDOTI0LDQ0Mi40LDkzNS44LDMxOC4yLDg4MC4yLDIzNy4xeiBNODEyLjIsNDc3LjJjLTguNyw5LjctMjAuMiwxNS4zLTMzLjMsMTUuM2MtMi40LDAtNC44LTAuMi03LjItMC42Yy0xMi0xLjktMjIuMy04LjMtMzEuNi0xNS45Yy0xMC44LTguOC0yMC43LTE5LjMtMzAuNC0yOS4zYy0xMC43LTExLjEtMjEuNC0yMi4yLTMyLjktMzIuNWMtMTEtOS44LTIyLjQtMTkuMS0zMy45LTI4LjNjLTExLjYtOS4zLTIzLjgtMTguOC0zNC4xLTI5LjRjLTguNy04LjktMTYuNC0xOS4zLTE5LjEtMzEuN2MtMC40LTEuOS0wLjctMy45LTAuOS01LjljLTEtMTIuMiwzLjItMjMuNiwxMS40LTMyLjdjMzYuMy00MC40LDg5LjctNzEsMTQ1LjItNzFjMzAuNywwLDYwLjEsOS41LDgzLjEsMzAuMmMzMS4yLDI4LDQyLjgsNzAuMiwzOS4xLDExMUM4NjMuNCw0MDEuNSw4NDIuMSw0NDQsODEyLjIsNDc3LjJ6IE03OTQuOCwyODNjLTEyLjYtMTEuNC0yOS44LTE3LjQtNDkuNi0xNy40Yy0zNS44LDAtNzQuNywxOS4xLTEwNC45LDUxLjJjNS42LDcuMywyMS43LDIwLjIsMzMuOSwzMGMxMS4xLDguOSwyMy42LDE4LjksMzYuMSwzMC4xYzEzLjMsMTIsMjUuMSwyNC4yLDM1LjUsMzVjMTAuMywxMC42LDIzLjgsMjQuNywzMS4yLDI5LjJjMjMuMy0yNi44LDM3LjYtNTguMyw0MC40LTg5QzgyMC4xLDMyMyw4MTIuMSwyOTguNSw3OTQuOCwyODN6IE01NjIuNyw1OTMuNEw1NjIuNyw1OTMuNEw0MTMuOCw4MDJjLTAuMSwwLjEtMC4xLDAuMi0wLjIsMC4zYy05LjgsMTMuNS0yOSwxOS4zLTQzLjMsOS4yYy0xNC4zLTEwLjItMTUuMS0zMC4zLTUuMy00NGwxNDkuMi0yMDguOWM5LjctMTMuNiwyOS4xLTE5LjUsNDMuNC05LjNjMTQuMywxMC4yLDE1LjEsMzAuMyw1LjMsNDRMNTYyLjcsNTkzLjR6IE0zODIuOSw1MDguOWwtMC4zLDAuNGwwLDAuMUwyMzMuOCw3MTcuOGMtMC4xLDAuMS0wLjEsMC4yLTAuMiwwLjNjLTEyLjksMTcuOC0zOCwyNC42LTU2LjYsMTEuM2MtMTguNy0xMy4zLTIwLjQtMzkuMy03LjUtNTcuNGwxNDkuMi0yMDguOWMxMi44LTE3LjksMzguMS0yNC44LDU2LjctMTEuNUMzOTQsNDY0LjksMzk1LjgsNDkwLjksMzgyLjksNTA4Ljl6XCIgLz48L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICBnZXRJdGVtKFwiTmjDom4gc+G7sVwiLCBcInN1Yi1tZW51LTFcIiwgPE1kUGVvcGxlT3V0bGluZSAvPiwgW1xuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wcm9maWxlYH0+SOG7kyBzxqE8L0xpbms+LCBcIjFcIiwgPEJzRmlsZUVhcm1hcmtGaWxsIC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvZGVwYXJ0bWVudGB9PkLhu5kgcGjhuq1uIGPDtG5nIHTDoWM8L0xpbms+LCBcIjJcIiwgPEZjRGVwYXJ0bWVudCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Bvc2l0aW9uYH0+Q2jhu6ljIGRhbmgsIGNo4bupYyB24bulPC9MaW5rPiwgXCIzXCIsIDxQb3NpdGlvbkl0ZW0gLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9teXByb2ZpbGUvJHtqd3RfZGVjb2RlKFRPS0VOKT8uaWR9YH0+VGjDtG5nIHRpbiBjw6EgbmjDom48L0xpbms+LCBcIjRcIiwgPEltUHJvZmlsZSAvPiksXG4gICAgICAgIF0pLFxuICAgICAgICBnZXRJdGVtKFwiUXV54buBblwiLCBcInN1Yi1tZW51LTJcIiwgPFBlcm1pc3Npb25NZW51IC8+LCBbXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vbWFuYWdlYH0+UXXhuqNuIGzDvSBxdXnhu4FuPC9MaW5rPiwgXCI1XCIsIDxQZXJtaXNzaW9uTWFuYWdlbWVudCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vcG9zaXRpb25gfT5RdXnhu4FuIGNo4bupYyB24bulPC9MaW5rPiwgXCI2XCIsIDxQZXJtaXNzaW9uUG9zaXRpb24gLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL2RlcGFydG1lbnQtcG9zaXRpb25gfT5RdXnhu4FuIFBCIC0gQ1Y8L0xpbms+LCBcIjdcIiwgPFBlcm1pc3Npb25EZXBQb3MgLz4pLFxuICAgICAgICBdKVxuICAgIF07XG5cbiAgICBjb25zdCBpdGVtc191c2VyID0gW1xuICAgICAgICBnZXRJdGVtKFwiTmjDom5uIHPhu7FcIiwgXCJzdWItbWVudS0xXCIsIDxNZFBlb3BsZU91dGxpbmUgLz4sIFtcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vbXlwcm9maWxlLyR7and0X2RlY29kZShUT0tFTik/LmlkfWB9PlRow7RuZyB0aW4gY8OhIG5ow6JuPC9MaW5rPiwgXCI0XCIsIDxJbVByb2ZpbGUgLz4pLFxuICAgICAgICBdKVxuICAgIF07XG5cbiAgICBjb25zdCByZW5kZXJTdWJNZW51ID0gKCkgPT4ge1xuICAgICAgICAvLyByZXR1cm4gaXRlbXM7XG4gICAgICAgIGxldCBzdWJNZW51ID0gW107XG4gICAgICAgIGxldCBtZW51X3Byb2ZpbGUgPSBbZ2V0SXRlbShcIk5ow6JuIHPhu7FcIiwgXCJzdWItbWVudS0xXCIsIDxNZFBlb3BsZU91dGxpbmUgLz4sIHN1Yk1lbnUpXTtcbiAgICAgICAgbGV0IHN1Yk1lbnVfUGVyID0gW107XG4gICAgICAgIGxldCBtZW51X3Blcm1pc3Npb24gPSBbZ2V0SXRlbShcIlF1eeG7gW5cIiwgXCJzdWItbWVudS0yXCIsIDxQZXJtaXNzaW9uTWVudSAvPiwgc3ViTWVudV9QZXIpXTtcbiAgICAgICAgaWYgKHVyaSAhPT0gXCJcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB1c2VyUGVybWlzc2lvbkFwaSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW1IYXZlIG9mIGl0ZW0uZ3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBlclVzZXIgb2YgaXRlbUhhdmUucGVybWlzc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclBlcm1pc3Npb24ucHVzaChwZXJVc2VyLm5hbWUudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAodXJpID09PSBcInByb2ZpbGUtc2VydmljZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggdXNlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wcm9maWxlYH0+SOG7kyBzxqE8L0xpbms+LCBcIjFcIiwgPEJzRmlsZUVhcm1hcmtGaWxsIC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggcGjDsm5nIGJhblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9kZXBhcnRtZW50YH0+QuG7mSBwaOG6rW4gY8O0bmcgdMOhYzwvTGluaz4sIFwiMlwiLCA8RmNEZXBhcnRtZW50IC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggY2jhu6ljIHbhu6VcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudS5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcG9zaXRpb25gfT5DaOG7qWMgZGFuaCwgY2jhu6ljIHbhu6U8L0xpbms+LCBcIjNcIiwgPFBvc2l0aW9uSXRlbSAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIHF1eeG7gW5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vbWFuYWdlYH0+UXXhuqNuIGzDvSBxdXnhu4FuPC9MaW5rPiwgXCI1XCIsIDxQZXJtaXNzaW9uTWFuYWdlbWVudCAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB2dSDEkcOjIMSRxrDhu6NjIGfDoW4gcXV54buBblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51X1Blci5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9wb3NpdGlvbmB9PlF1eeG7gW4gY2jhu6ljIHbhu6U8L0xpbms+LCBcIjZcIiwgPFBlcm1pc3Npb25Qb3NpdGlvbiAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB24bulIHbDoCBwaMOybmcgYmFuIMSRw6MgxJHGsOG7o2MgZ8OhbiBxdXnhu4FuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnVfUGVyLnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL2RlcGFydG1lbnQtcG9zaXRpb25gfT5RdXnhu4FuIFBCIC0gQ1Y8L0xpbms+LCBcIjdcIiwgPFBlcm1pc3Npb25EZXBQb3MgLz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9teXByb2ZpbGUvJHtqd3RfZGVjb2RlKFRPS0VOKT8uaWR9YH0+VGjDtG5nIHRpbiBjw6EgbmjDom48L0xpbms+LCBcIjRcIiwgPEltUHJvZmlsZSAvPikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbnVfcHJvZmlsZS5jb25jYXQobWVudV9wZXJtaXNzaW9uKVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggdXNlclwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wcm9maWxlYH0+SOG7kyBzxqE8L0xpbms+LCBcIjFcIiwgPEJzRmlsZUVhcm1hcmtGaWxsIC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggcGjDsm5nIGJhblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9kZXBhcnRtZW50YH0+QuG7mSBwaOG6rW4gY8O0bmcgdMOhYzwvTGluaz4sIFwiMlwiLCA8RmNEZXBhcnRtZW50IC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggY2jhu6ljIHbhu6VcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudS5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcG9zaXRpb25gfT5DaOG7qWMgZGFuaCwgY2jhu6ljIHbhu6U8L0xpbms+LCBcIjNcIiwgPFBvc2l0aW9uSXRlbSAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIHF1eeG7gW5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vbWFuYWdlYH0+UXXhuqNuIGzDvSBxdXnhu4FuPC9MaW5rPiwgXCI1XCIsIDxQZXJtaXNzaW9uTWFuYWdlbWVudCAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB2dSDEkcOjIMSRxrDhu6NjIGfDoW4gcXV54buBblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51X1Blci5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9wb3NpdGlvbmB9PlF1eeG7gW4gY2jhu6ljIHbhu6U8L0xpbms+LCBcIjZcIiwgPFBlcm1pc3Npb25Qb3NpdGlvbiAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB24bulIHbDoCBwaMOybmcgYmFuIMSRw6MgxJHGsOG7o2MgZ8OhbiBxdXnhu4FuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnVfUGVyLnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL2RlcGFydG1lbnQtcG9zaXRpb25gfT5RdXnhu4FuIFBCIC0gQ1Y8L0xpbms+LCBcIjdcIiwgPFBlcm1pc3Npb25EZXBQb3MgLz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9teXByb2ZpbGUvJHtqd3RfZGVjb2RlKFRPS0VOKT8uaWR9YH0+VGjDtG5nIHRpbiBjw6EgbmjDom48L0xpbms+LCBcIjRcIiwgPEltUHJvZmlsZSAvPikpXG4gICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vdXNlcnNgfT5RdXnhu4FuIGPDoSBuaMOibjwvTGluaz4sIFwiOFwiLCA8UGVybWlzc2lvbk1lbnUgLz4pKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17W2BzdWIxYF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXttZW51X3Byb2ZpbGUuY29uY2F0KG1lbnVfcGVybWlzc2lvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHVyaSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtc191c2VyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0T3BlbktleXM9e1tgc3ViMWBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e21lbnVfcHJvZmlsZS5jb25jYXQobWVudV9wZXJtaXNzaW9uKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PntyZW5kZXJTdWJNZW51KCl9PC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgY2hlY2tNaWNyb0ZlLCBnZXRUb2tlbkluQ29va2llIH0gZnJvbSBcIi4uL3VsdGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gZ2V0VG9rZW5JbkNvb2tpZSgpO1xuXG5leHBvcnQgY29uc3QgbG9jYWwgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcInN0YWdpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImh0dHBzOi8vcHJvZmlsZXNlcnZpY2Utc3RhZ2luZy50dW9pdHJlLnZuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImh0dHBzOi8vcHJvZmlsZXNlcnZpY2UudHVvaXRyZS52blwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuXG4vLyBSZWdleFxuZXhwb3J0IGNvbnN0IHJlZ2V4RW1haWwgPSAvXltcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9JC87XG5leHBvcnQgY29uc3QgcmVnZXhQaG9uZSA9IC8oODRbM3w1fDd8OHw5XXwwWzN8NXw3fDh8OV0pKyhbMC05XXs4fXxbMC05XXs5fSlcXGIvO1xuXG5leHBvcnQgY29uc3QgcXVhVHJpbmhMVkhUID0gXCJRdcOhIHRyw6xuaCBsw6BtIHZp4buHYyB2w6AgaOG7jWMgdOG6rXBcIjtcbmV4cG9ydCBjb25zdCB0aGFtR2lhVG9DaHVjQ1QgPSBcIlRoYW0gZ2lhIGPDoWMgdOG7lSBjaOG7qWMgY2jDrW5oIHRy4buLLCBjw6FjIGjDtOG7iyBuZ2jhu4EgbmdoaeG7h3BcIjtcbmV4cG9ydCBjb25zdCBkYW9UYW8gPSBcIsSQw6BvIHThuqFvXCI7XG5leHBvcnQgY29uc3QgYm9pRHVvbmcgPSBcIkLhu5NpIGTGsOG7oW5nXCI7XG5leHBvcnQgY29uc3Qga2hlblRodW9uZyA9IFwiS2hlbiB0aMaw4bufbmdcIjtcbmV4cG9ydCBjb25zdCBreUx1YXQgPSBcIkvhu7cgbHXhuq10XCI7XG5leHBvcnQgY29uc3QgbGljaFN1QmFuVGhhbiA9IFwiTOG7i2NoIHPhu60gYuG6o24gdGjDom5cIjtcbmV4cG9ydCBjb25zdCBxdWFuSGVHaWFEaW5oID0gXCJRdWFuIGjhu4cgZ2lhIMSRw6xuaFwiO1xuZXhwb3J0IGNvbnN0IG5vaVNpbmhfU3RlcDEgPSBcIk7GoWkgc2luaFwiXG5leHBvcnQgY29uc3QgcXVlUXVhbl9TdGVwMSA9IFwiUXXDqiBxdcOhblwiXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfSUQgPSBcIkdFVF9QUk9GSUxFX0JZX0lEXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST1ZJTkNFUyA9IFwiR0VUX1BST1ZJTkNFU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfQklSVEhfUExBQ0UgPSBcIkdFVF9ESVNUUklDVFNfQklSVEhfUExBQ0VcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTiA9IFwiR0VUX0RJU1RSSUNUU19IT01FX1RPV05cIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0FERFJFU1MgPSBcIkdFVF9ESVNUUklDVFNfQUREUkVTU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfSE9LSEFVID0gXCJHRVRfRElTVFJJQ1RTX0hPS0hBVVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDggPSBcIkdFVF9ESVNUUklDVFNfU1RFUDhcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA3ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA3XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQOSA9IFwiR0VUX0RJU1RSSUNUU19TVEVQOVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDdfQ09OID0gXCJHRVRfRElTVFJJQ1RTX1NURVA3X0NPTlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9GSUxFID0gXCJVUERBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QUk9GSUxFID0gXCJDUkVBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IE9OTFlfQ1JFQVRFX1BST0ZJTEUgPSBcIk9OTFlfQ1JFQVRFX1BST0ZJTEVcIjtcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MSVNUID0gXCJHRVRfVVNFUl9MSVNUXCI7XG5leHBvcnQgY29uc3QgR0VUX1VTRVJfSU5GT1JNQVRJT04gPSBcIkdFVF9VU0VSX0lORk9STUFUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUF9QT1MgPSBcIkdFVF9ERVBBUlRNRU5UX1BPU0lUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX1BBUlQgPSBcIkdFVF9QQVJUXCI7XG5leHBvcnQgY29uc3QgR0VUX0FWQVRBUiA9IFwiR0VUX0FWQVRBUlwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ERVBfUE9TID0gXCJERUxFVEVfREVQX1BPU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UX0xJU1QgPSBcIkdFVF9ERVBBUlRNRU5UX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfREVQQVJUTUVOVCA9IFwiVVBEQVRFX0RFUEFSVE1FTlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQQVJUTUVOVF9JTkZPUiA9IFwiR0VUX0RFUEFSVE1FTlRfSU5GT1JcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfREVQQVJUTUVOVCA9IFwiQ1JFQVRFX0RFUEFSVE1FTlRcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfREVQQVJUTUVOVCA9IFwiREVMRVRFX0RFUEFSVE1FTlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfUE9TSVRJT05TX01BTkFfTElTVCA9IFwiR0VUX1BPU0lUSU9OU19NQU5BX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfUE9TSVRJT05fVFlQRV9MSVNUID0gXCJHRVRfUE9TSVRJT05fVFlQRV9MSVNUXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU0lUSU9OX1RZUEUgPSBcIkNSRUFURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU0lUSU9OX1RZUEUgPSBcIlVQREFURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BPU0lUSU9OX1RZUEUgPSBcIkRFTEVURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIlVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkdFVF9QRVJTT05BTF9ISVNUT1JZXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIlVQREFURV9QRVJTT05BTF9ISVNUT1JZXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkRFTEVURV9QRVJTT05BTF9ISVNUT1JZXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBUlRZID0gXCJDUkVBVEVfUEFSVFlcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFSVFkgPSBcIlVQREFURV9QQVJUWVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9PUkdBTklaQVRJT04gPSBcIkNSRUFURV9PUkdBTklaQVRJT05cIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfT1JHQU5JWkFUSU9OID0gXCJVUERBVEVfT1JHQU5JWkFUSU9OXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX09SR0FOSVpBVElPTiA9IFwiREVMRVRFX09SR0FOSVpBVElPTlwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9UUkFJTklORyA9IFwiQ1JFQVRFX1RSQUlOSU5HXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1RSQUlOSU5HID0gXCJVUERBVEVfVFJBSU5JTkdcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfVFJBSU5JTkcgPSBcIkRFTEVURV9UUkFJTklOR1wiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJERUxFVEVfUkVXQVJEX0RJU0NJUExJTkVcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIlVQREFURV9SRVdBUkRfRElTQ0lQTElORVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQID0gXCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3ID0gXCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQN1wiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX0NPTl9TVEVQNyA9IFwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3XCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDcgPSBcIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3XCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3ID0gXCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9DT05fU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCA9IFwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBcIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQX1BPU19UT19TRUFSQ0ggPSBcIkdFVF9ERVBfUE9TX1RPX1NFQVJDSFwiO1xuZXhwb3J0IGNvbnN0IFNFQVJDSCA9IFwiU0VBUkNIXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVVNFUl9JRCA9IFwiR0VUX1BST0ZJTEVfQllfVVNFUl9JRFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0JZX1RPS0VOID0gXCJHRVRfUFJPRklMRV9CWV9UT0tFTlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9GSUxFX0FDVElWRSA9IFwiVVBEQVRFX1BST0ZJTEVfQUNUSVZFXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fTElTVCA9IFwiR0VUX1BFUk1JU1NJT05fTElTVFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QRVJNSVNTSU9OID0gXCJDUkVBVEVfUEVSTUlTU0lPTlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QRVJNSVNTSU9OID0gXCJVUERBVEVfUEVSTUlTU0lPTlwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OID0gXCJERUxFVEVfUEVSTUlTU0lPTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OID0gXCJHRVRfUEVSTUlTU0lPTl9QT1NJVElPTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9UQUJMRV9NQU5BR0VNRU5UID0gXCJHRVRfVEFCTEVfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9ERVBBUlRNRU5UID0gXCJTRUFSQ0hfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QT1NJVElPTiA9IFwiU0VBUkNIX1BPU0lUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX1BPU19MSVNUID0gXCJHRVRfUE9TX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVTT1VSQ0UgPSBcIkRFTEVURV9SRVNPVVJDRVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OX1BPUyA9IFwiREVMRVRFX1BFUk1JU1NJT05fUE9TXCI7XG5leHBvcnQgY29uc3QgUE9TVF9QRVJNSVNTSU9OX1BPUyA9IFwiUE9TVF9QRVJNSVNTSU9OX1BPU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OX0RFUF9QT1MgPSBcIkRFTEVURV9QRVJNSVNTSU9OX0RFUF9QT1NcIjtcbmV4cG9ydCBjb25zdCBQT1NUX1BFUk1JU1NJT05fREVQX1BPUyA9IFwiUE9TVF9QRVJNSVNTSU9OX0RFUF9QT1NcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSTUlTU0lPTl9ERVBfUE9TID0gXCJHRVRfUEVSTUlTU0lPTl9ERVBfUE9TXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fREVQX1BPU19MSVNUID0gXCJHRVRfUEVSTUlTU0lPTl9ERVBfUE9TX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSTUlTU0lPTl9QT1NfTElTVCA9IFwiR0VUX1BFUk1JU1NJT05fUE9TX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSTUlTU0lPTl9PRl9VU0VSID0gXCJHRVRfUEVSTUlTU0lPTl9PRl9VU0VSXCI7XG5leHBvcnQgY29uc3QgVVBMT0FEX1BERl9TVEVQNyA9IFwiVVBMT0FEX1BERl9TVEVQN1wiOyIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IGRvY0Nvb2tpZSBmcm9tIFwiZG9jLWNvb2tpZXNcIlxuXG5leHBvcnQgbGV0IGhhbmRsZURhdGVUaW1lID0gKGRhdGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgY29udmVydDtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHThu6sgc+G7kSBzYW5nIGNodeG7l2kgREQtTU0tWVlZWVxuICAgICAgICAgICAgbGV0IGNvbnZlcnQxID0gbW9tZW50KG5ldyBEYXRlKGRhdGUpKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRhdGUuaW5jbHVkZXMoXCIuMDAwWlwiKSl7XG4gICAgICAgICAgICAgICAgbGV0IGNvbnZlcnQxID0gbW9tZW50KG5ldyBEYXRlKGRhdGUpKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlLmNvbmNhdChcIi4wMDBaXCIpKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgICAgIGNvbnZlcnQgPSBtb21lbnQoY29udmVydDEsIFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb252ZXJ0XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGNoZWNrTWljcm9GZSA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIzMDAwXCIpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwicHJvZmlsZXNlcnZpY2VcIikgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIzMDAxXCIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgZ2V0VG9rZW5JbkNvb2tpZSA9ICgpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHRva2VuQ29va2llID0gZG9jQ29va2llLmdldEl0ZW0oXCJ1c2VydG9rZW5cIilcbiAgICAgICAgaWYoIXRva2VuQ29va2llKXtcbiAgICAgICAgICAgIC8vIGtoaSBwdXNoIGNvZGUgbMOqbiBzZXJ2ZXJcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAvLyBLaGkgdGVzdCB0csOqbiBsb2NhbFxuICAgICAgICAgICAgLy8gcmV0dXJuIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TXpVMkxDSmxlSEFpT2pJM05UQTFOVFEzTXpCOS5kckJPX0c3RjlKQ0RpN1htTFJtZjE0UXZVcVllOGNXNGluQkliUXNtUllJXCJcbiAgICAgICAgICAgIC8vIHJldHVybiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk1Td2laWGh3SWpveU56VXdOREV4TURnM2ZRLnVXZUVKRVhIeU55c3c4NWsyMm0wczZkRk5pNG5KRkFPOE5TOGxlWTZmeUFcIlxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuQ29va2llKTtcbiAgICAgICAgcmV0dXJuIHRva2VuQ29va2llXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGNoZWNrVXNlclBlcm1pc3Npb24gPSAocGVybWlzc2lvbkxpc3QsIC4uLm5hbWVQZXJtaXNzaW9uKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICBmb3IobGV0IHBlck5hbWUgb2YgbmFtZVBlcm1pc3Npb24pe1xuICAgICAgICAgICAgaWYoIXBlcm1pc3Npb25MaXN0LmluY2x1ZGVzKHBlck5hbWUpKXtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwiTWRQZW9wbGVPdXRsaW5lIiwiTGluayIsIkJzRmlsZUVhcm1hcmtGaWxsIiwiRmNEZXBhcnRtZW50IiwiY2hlY2tNaWNyb0ZlIiwiSW1Qcm9maWxlIiwiand0X2RlY29kZSIsIlRPS0VOIiwidXNlU2VsZWN0b3IiLCJ1c2VyUGVybWlzc2lvbkFwaSIsInVzZXJQZXJtaXNzaW9uIiwiU3ViTWVudSIsInBlcm1pc3Npb24iLCJ1cmkiLCJ1bmRlZmluZWQiLCJzdGF0ZSIsInBlcm1pc3Npb25SZWR1Y2VyIiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwiUG9zaXRpb25JdGVtIiwiUGVybWlzc2lvbk1lbnUiLCJQZXJtaXNzaW9uUG9zaXRpb24iLCJQZXJtaXNzaW9uRGVwUG9zIiwiUGVybWlzc2lvbk1hbmFnZW1lbnQiLCJpdGVtcyIsImlkIiwiaXRlbXNfdXNlciIsInJlbmRlclN1Yk1lbnUiLCJzdWJNZW51IiwibWVudV9wcm9maWxlIiwic3ViTWVudV9QZXIiLCJtZW51X3Blcm1pc3Npb24iLCJpdGVtIiwiZ3JvdXBzIiwiaXRlbUhhdmUiLCJwZXJVc2VyIiwicHVzaCIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImluY2x1ZGVzIiwiY29uY2F0IiwiZ2V0VG9rZW5JbkNvb2tpZSIsImxvY2FsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVnZXhFbWFpbCIsInJlZ2V4UGhvbmUiLCJxdWFUcmluaExWSFQiLCJ0aGFtR2lhVG9DaHVjQ1QiLCJkYW9UYW8iLCJib2lEdW9uZyIsImtoZW5UaHVvbmciLCJreUx1YXQiLCJsaWNoU3VCYW5UaGFuIiwicXVhbkhlR2lhRGluaCIsIm5vaVNpbmhfU3RlcDEiLCJxdWVRdWFuX1N0ZXAxIiwiR0VUX1BST0ZJTEVfQllfSUQiLCJHRVRfUFJPVklOQ0VTIiwiR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRSIsIkdFVF9ESVNUUklDVFNfSE9NRV9UT1dOIiwiR0VUX0RJU1RSSUNUU19BRERSRVNTIiwiR0VUX0RJU1RSSUNUU19IT0tIQVUiLCJHRVRfRElTVFJJQ1RTX1NURVA4IiwiR0VUX0RJU1RSSUNUU19TVEVQNyIsIkdFVF9ESVNUUklDVFNfU1RFUDkiLCJHRVRfRElTVFJJQ1RTX1NURVA3X0NPTiIsIlVQREFURV9QUk9GSUxFIiwiQ1JFQVRFX1BST0ZJTEUiLCJPTkxZX0NSRUFURV9QUk9GSUxFIiwiR0VUX1VTRVJfTElTVCIsIkdFVF9VU0VSX0lORk9STUFUSU9OIiwiR0VUX0RFUF9QT1MiLCJHRVRfUEFSVCIsIkdFVF9BVkFUQVIiLCJERUxFVEVfREVQX1BPUyIsIkdFVF9ERVBBUlRNRU5UX0xJU1QiLCJVUERBVEVfREVQQVJUTUVOVCIsIkdFVF9ERVBBUlRNRU5UX0lORk9SIiwiQ1JFQVRFX0RFUEFSVE1FTlQiLCJERUxFVEVfREVQQVJUTUVOVCIsIkdFVF9QT1NJVElPTlNfTUFOQV9MSVNUIiwiR0VUX1BPU0lUSU9OX1RZUEVfTElTVCIsIkNSRUFURV9QT1NJVElPTl9UWVBFIiwiVVBEQVRFX1BPU0lUSU9OX1RZUEUiLCJERUxFVEVfUE9TSVRJT05fVFlQRSIsIkNSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCIsIlVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCIsIkRFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCIsIkdFVF9QRVJTT05BTF9ISVNUT1JZIiwiQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJVUERBVEVfUEVSU09OQUxfSElTVE9SWSIsIkRFTEVURV9QRVJTT05BTF9ISVNUT1JZIiwiQ1JFQVRFX1BBUlRZIiwiVVBEQVRFX1BBUlRZIiwiQ1JFQVRFX09SR0FOSVpBVElPTiIsIlVQREFURV9PUkdBTklaQVRJT04iLCJERUxFVEVfT1JHQU5JWkFUSU9OIiwiQ1JFQVRFX1RSQUlOSU5HIiwiVVBEQVRFX1RSQUlOSU5HIiwiREVMRVRFX1RSQUlOSU5HIiwiQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FIiwiREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FIiwiVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FIiwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAiLCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQNyIsIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX0NPTl9TVEVQNyIsIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3IiwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3IiwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAiLCJHRVRfREVQX1BPU19UT19TRUFSQ0giLCJTRUFSQ0giLCJHRVRfUFJPRklMRV9CWV9VU0VSX0lEIiwiR0VUX1BST0ZJTEVfQllfVE9LRU4iLCJVUERBVEVfUFJPRklMRV9BQ1RJVkUiLCJHRVRfUEVSTUlTU0lPTl9MSVNUIiwiQ1JFQVRFX1BFUk1JU1NJT04iLCJVUERBVEVfUEVSTUlTU0lPTiIsIkRFTEVURV9QRVJNSVNTSU9OIiwiR0VUX1BFUk1JU1NJT05fUE9TSVRJT04iLCJHRVRfVEFCTEVfTUFOQUdFTUVOVCIsIlNFQVJDSF9ERVBBUlRNRU5UIiwiU0VBUkNIX1BPU0lUSU9OIiwiR0VUX1BPU19MSVNUIiwiREVMRVRFX1JFU09VUkNFIiwiREVMRVRFX1BFUk1JU1NJT05fUE9TIiwiUE9TVF9QRVJNSVNTSU9OX1BPUyIsIkRFTEVURV9QRVJNSVNTSU9OX0RFUF9QT1MiLCJQT1NUX1BFUk1JU1NJT05fREVQX1BPUyIsIkdFVF9QRVJNSVNTSU9OX0RFUF9QT1MiLCJHRVRfUEVSTUlTU0lPTl9ERVBfUE9TX0xJU1QiLCJHRVRfUEVSTUlTU0lPTl9QT1NfTElTVCIsIkdFVF9QRVJNSVNTSU9OX09GX1VTRVIiLCJVUExPQURfUERGX1NURVA3IiwibW9tZW50IiwiZG9jQ29va2llIiwiaGFuZGxlRGF0ZVRpbWUiLCJkYXRlIiwiY29udmVydCIsImNvbnZlcnQxIiwiRGF0ZSIsImZvcm1hdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInRva2VuQ29va2llIiwiY2hlY2tVc2VyUGVybWlzc2lvbiIsInBlcm1pc3Npb25MaXN0IiwicmVzdWx0IiwibmFtZVBlcm1pc3Npb24iLCJwZXJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==