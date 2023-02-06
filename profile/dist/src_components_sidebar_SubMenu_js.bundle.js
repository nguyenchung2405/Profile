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
  console.log(userPermission);
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
    console.log(userPermissionApi);
    console.log(userPermission);
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
        if (userPermission.includes("xem danh sách hồ sơ")) {
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
        if (url !== "") {
          return menu_profile.concat(menu_permission);
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
      } else {
        var _jwt_decode4;
        if (userPermission.includes("xem danh sách hồ sơ")) {
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
        if (uri !== "") {
          return menu_profile.concat(menu_permission);
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
var local = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_0__.checkMicroFe)() === true ? "https://profileservice.tuoitre.vn" : "";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRTtBQUNxQjtBQUNSO0FBQ1U7QUFDTDtBQUNNO0FBQ1Q7QUFDTjtBQUNLO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFDMUMsSUFBSVcsaUJBQWlCLEdBQUcsRUFBRTtBQUMxQixJQUFJQyxjQUFjLEdBQUcsRUFBRTtBQUNSLFNBQVNDLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFO0VBQUE7RUFFeEMsSUFBSUMsR0FBRyxHQUFHVCw0REFBWSxFQUFFLEtBQUssSUFBSSxHQUFHLGlCQUFpQixHQUFHLEVBQUU7RUFDMUQsSUFBSVEsVUFBVSxLQUFLRSxTQUFTLEVBQUU7SUFDMUJMLGlCQUFpQixHQUFHRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQ3JDO0VBQ0EsSUFBSUMsR0FBRyxLQUFLLEVBQUUsRUFBRTtJQUNaSCxjQUFjLEdBQUdGLHdEQUFXLENBQUMsVUFBQU8sS0FBSztNQUFBLE9BQUlBLEtBQUssQ0FBQ0MsaUJBQWlCLENBQUNOLGNBQWM7SUFBQSxFQUFDO0VBQ2pGO0VBQ0FPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixjQUFjLENBQUM7RUFFM0IsSUFBTVMsT0FBTyxHQUFHLFNBQVZBLE9BQU8sQ0FBSUMsS0FBSyxFQUFFQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFLO0lBQzVDLE9BQU87TUFDSEgsS0FBSyxFQUFMQSxLQUFLO01BQ0xDLEdBQUcsRUFBSEEsR0FBRztNQUNIQyxJQUFJLEVBQUpBLElBQUk7TUFDSkMsUUFBUSxFQUFSQTtJQUNKLENBQUM7RUFDTCxDQUFDO0VBRUQsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQVk7SUFBQSxvQkFDZDtNQUFLLE1BQU0sRUFBQyxjQUFjO01BQUMsSUFBSSxFQUFDLGNBQWM7TUFBQyxLQUFLLEVBQUMsY0FBYztNQUFDLE9BQU8sRUFBQyxL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QSxXQUFXO0VBQ3RCLENBQUMsQ0FBQyxPQUFPSixLQUFLLEVBQUU7SUFDWmpJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0ksS0FBSyxDQUFDO0VBQ3RCO0FBQ0osQ0FBQztBQUVNLElBQUlLLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUIsQ0FBSUMsY0FBYyxFQUFzQjtFQUNsRSxJQUFJO0lBQ0EsSUFBSUMsTUFBTSxHQUFHLElBQUk7SUFBQyxrQ0FGMkJDLGNBQWM7TUFBZEEsY0FBYztJQUFBO0lBRzNELG1DQUFtQkEsY0FBYyxxQ0FBQztNQUE5QixJQUFJQyxPQUFPO01BQ1gsSUFBRyxDQUFDSCxjQUFjLENBQUMzRyxRQUFRLENBQUM4RyxPQUFPLENBQUMsRUFBQztRQUNqQ0YsTUFBTSxHQUFHLEtBQUs7TUFDbEI7SUFDSjtJQUNBLE9BQU9BLE1BQU07RUFDakIsQ0FBQyxDQUFDLE9BQU9QLEtBQUssRUFBRTtJQUNaakksT0FBTyxDQUFDQyxHQUFHLENBQUNnSSxLQUFLLENBQUM7RUFDdEI7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3RpdGxlL3RpdGxlLmpzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvdWx0aWxzL2hlbHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIlxuaW1wb3J0IHsgTWRQZW9wbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnNGaWxlRWFybWFya0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHsgRmNEZXBhcnRtZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCJcbmltcG9ydCB7IGNoZWNrTWljcm9GZSB9IGZyb20gJy4uLy4uL3VsdGlscy9oZWxwZXInO1xuaW1wb3J0IHsgSW1Qcm9maWxlIH0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgeyBUT0tFTiB9IGZyb20gXCIuLi8uLi90aXRsZS90aXRsZVwiXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmxldCB1c2VyUGVybWlzc2lvbkFwaSA9IFtdXG5sZXQgdXNlclBlcm1pc3Npb24gPSBbXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Yk1lbnUocGVybWlzc2lvbikge1xuXG4gICAgbGV0IHVyaSA9IGNoZWNrTWljcm9GZSgpID09PSB0cnVlID8gXCJwcm9maWxlLXNlcnZpY2VcIiA6IFwiXCI7XG4gICAgaWYgKHBlcm1pc3Npb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB1c2VyUGVybWlzc2lvbkFwaSA9IHBlcm1pc3Npb25bMl07XG4gICAgfVxuICAgIGlmICh1cmkgPT09IFwiXCIpIHtcbiAgICAgICAgdXNlclBlcm1pc3Npb24gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wZXJtaXNzaW9uUmVkdWNlci51c2VyUGVybWlzc2lvbik7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHVzZXJQZXJtaXNzaW9uKVxuXG4gICAgY29uc3QgZ2V0SXRlbSA9IChsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFBvc2l0aW9uSXRlbSA9ICgpID0+IChcbiAgICAgICAgPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY29sb3I9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MzEwIDQ3ODMgYy0xMDUgLTE4IC0yMjkgLTgwIC0yOTkgLTE1MiAtMTAwIC0xMDAgLTE0MSAtMjA4IC0xNDFcbiAgICAgICAgLTM2NyAwIC0zMjUgMTc4IC01NjMgNDUyIC02MDUgMjM3IC0zNyA0NjYgMTEyIDU1NSAzNjIgMjIgNjIgMjcgOTYgMzEgMjA2IDRcbiAgICAgICAgMTE1IDEgMTQxIC0xNyAyMDMgLTI4IDkzIC03MCAxNTggLTEzOCAyMTkgLTExOCAxMDUgLTI5NSAxNTkgLTQ0MyAxMzR6IG0xNDRcbiAgICAgICAgLTIzOCBjNTkgLTEwIDEzMCAtNDkgMTY1IC05MiA5NyAtMTE3IDc0IC0zNjkgLTQ0IC00ODggLTUwIC00OSAtOTAgLTY3IC0xNjVcbiAgICAgICAgLTczIC0xNTUgLTExIC0yNjggOTcgLTMwMCAyODggLTI2IDE1NCAxNSAyNjcgMTE5IDMyOCA0NSAyNiAxNDIgNTMgMTcxIDQ3IDhcbiAgICAgICAgLTIgMzMgLTYgNTQgLTEwelwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0MjAgNDExNCBjLTE4MCAtNDggLTMyMiAtMTg0IC0zNjQgLTM0OSAtMjAgLTc1IC0yMCAtMjM3IC0xIC0zMzBcbiAgICAgICAgMjIgLTEwNiA3NiAtMjA2IDE1NCAtMjg1IDEwMSAtMTAzIDIxMiAtMTUwIDM1MSAtMTUwIDEzOSAwIDI1MCA0NyAzNTEgMTUwXG4gICAgICAgIDExNSAxMTcgMTY5IDI2MiAxNjkgNDU0IDAgMTYxIC00MyAyNzYgLTE0MSAzNzQgLTYzIDYzIC0xNTIgMTEzIC0yNDUgMTM3IC03M1xuICAgICAgICAxOSAtMjAxIDE4IC0yNzQgLTF6IG0yNjcgLTI0NCBjMTM0IC01NyAxODggLTE5NSAxNDkgLTM3NSAtMzUgLTE2NCAtMTM3IC0yNjBcbiAgICAgICAgLTI3NiAtMjYwIC0xNjkgMCAtMjg4IDE1MyAtMjkwIDM3MSAtMSAyMTkgMjEwIDM1MyA0MTcgMjY0elwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTY1NSAzNDc0IGMtMTUyIC0zNyAtMjIzIC03MiAtMzA2IC0xNTQgLTEwNiAtMTA1IC0xMzggLTE5MiAtMTM5XG4gICAgICAgIC0zNzUgMCAtMTMxIDE4IC0yMTMgNjcgLTMxMyA5OSAtMjAwIDMxOCAtMzE5IDUyNiAtMjg0IDI3MiA0NyA0NDcgMjgzIDQ0N1xuICAgICAgICA2MDYgMCAyNDUgLTExNSA0MDggLTM0NSA0OTIgLTY0IDIzIC0yMDUgMzkgLTI1MCAyOHogbTE0MCAtMjM5IGM4NCAtMTQgMTY5XG4gICAgICAgIC04MCAyMDIgLTE1NiAzMiAtNzUgMjMgLTIzMiAtMTkgLTMyNyAtMjkgLTY0IC05MCAtMTI2IC0xNTAgLTE1MiAtNDIgLTE4IC02NVxuICAgICAgICAtMjEgLTExOCAtMTggLTc1IDYgLTExNSAyNCAtMTY1IDczIC0xMTggMTE5IC0xNDEgMzcxIC00NCA0ODggMTcgMjEgNTAgNDcgNzJcbiAgICAgICAgNTkgNDUgMjMgMTQyIDQ4IDE2NyA0MyA4IC0yIDMzIC02IDU1IC0xMHpcIi8+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MjE2IDM0MzQgYy0xNjQgLTQxIC0zMTAgLTE0MiAtMzg1IC0yNjYgLTQwIC02OCAtNTggLTEzNSAtMTE1XG4gICAgICAgIC00NDMgLTYyIC0zMzYgLTYyIC0zNTMgNCAtMzk4IDIyIC0xNSA2NCAtMTcgNDAzIC0xNyA0MTUgMCA0MjEgMSA0NTIgNjAgMTlcbiAgICAgICAgMzcgMTkgNzMgMCAxMTAgLTMwIDU3IC00NSA2MCAtMzY1IDYwIGwtMjkwIDAgNSAyMyBjMiAxMiAyMSAxMTAgNDAgMjE3IDQwXG4gICAgICAgIDIxNyA2MyAyNzcgMTI1IDMzNCAxOTEgMTcyIDU2MyAxMjQgNjY3IC04NiAxNCAtMjcgNDIgLTE1MiA3OCAtMzQzIDMxIC0xNjRcbiAgICAgICAgNjEgLTMwNyA2NiAtMzE2IDQzIC04MiAxNzQgLTc1IDIwOSAxMSAxMiAzMCAxMCA1MiAtMTkgMjE0IC03MyA0MDEgLTg4IDQ2N1xuICAgICAgICAtMTI2IDU0MyAtNjQgMTI5IC0xOTIgMjMyIC0zNTAgMjgzIC05MCAyOSAtMzA4IDM3IC0zOTkgMTR6XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjQyNSAyNzg2IGMtMjMxIC00NiAtMzk1IC0xNzMgLTQ2MyAtMzU4IC0xMiAtMzEgLTQ3IC0xOTUgLTc4IC0zNjVcbiAgICAgICAgbC01NyAtMzA3IDE5IC0zNiBjMzcgLTY5IDQ2IC03MCA0NDQgLTY5IDI0OCAwIDM2NSA0IDM5MCAxMiA0MCAxNCA4MCA2NyA4MFxuICAgICAgICAxMDcgMCA0MCAtNDAgOTMgLTgwIDEwNyAtMjQgOCAtMTI1IDEyIC0zMTMgMTIgbC0yNzkgMSA2IDI4IGMzIDE1IDIyIDExMSA0MVxuICAgICAgICAyMTQgNDAgMjEwIDQzIDIyMiA4NSAyODMgNjIgOTEgMTkwIDE0NSAzNDAgMTQ1IDE1NyAwIDI4MCAtNTUgMzQ3IC0xNTYgMzdcbiAgICAgICAgLTU2IDQ2IC05MiAxMjggLTUzNiAzMCAtMTY2IDQ0IC0xOTEgMTA2IC0yMDggNTMgLTE0IDEwNiAxMCAxMzMgNjAgbDE5IDM2XG4gICAgICAgIC01NyAzMDcgYy02MCAzMjYgLTc4IDM5MSAtMTM0IDQ3NSAtNjkgMTA2IC0yMDkgMTk5IC0zNTcgMjM3IC04NiAyMiAtMjM2IDI3XG4gICAgICAgIC0zMjAgMTF6XCIvPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTQzIDIxMjAgYy0yMDAgLTUyIC0zNTAgLTE3OCAtNDEyIC0zNDUgLTE4IC00OSAtMTMxIC02MjMgLTEzMVxuICAgICAgICAtNjY3IDAgLTMyIDI5IC03NyA2MCAtOTMgMjQgLTEzIDg5IC0xNSA0MDUgLTE1IDMzNCAwIDM4MCAyIDQwNSAxNyA3MyA0MyA3M1xuICAgICAgICAxNTMgMCAxOTYgLTI0IDE1IC02NSAxNyAtMzE5IDE3IC0xNjAgMCAtMjkxIDMgLTI5MSA3IDAgNDQgODYgNDQ4IDEwMyA0ODFcbiAgICAgICAgMTI2IDI1NCA2MDkgMjUzIDczMSAtMSAxOCAtMzcgNDAgLTEzMyA3NiAtMzI3IDYzIC0zNDcgNTYgLTMxOCA5NSAtMzU3IDQzXG4gICAgICAgIC00MyA5OCAtNDYgMTQ0IC03IDU2IDQ2IDU1IDY0IC01IDM4NyAtMzAgMTYxIC02MiAzMTYgLTcxIDM0NiAtNTMgMTcyIC0yMzVcbiAgICAgICAgMzIyIC00NDIgMzY2IC0xMDAgMjEgLTI1OCAxOSAtMzQ4IC01elwiLz5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM3MzggMTg3OSBjLTE0IC02IC0xNTkgLTE1MyAtMzIzIC0zMzAgbC0yOTYgLTMxOSAtNTk5IDAgYy0zOTkgMFxuICAgICAgICAtNjA3IC00IC02MjIgLTExIC0xMyAtNSAtMTUzIC0xNTQgLTMxMyAtMzI5IGwtMjkwIC0zMTkgLTU5MCAtMSBjLTQyOSAtMVxuICAgICAgICAtNTk5IC00IC02MjQgLTEzIC00OCAtMTcgLTc2IC01OCAtNzYgLTExMyAwIC0zNiA2IC00OSAzMyAtNzYgbDMyIC0zMyA2NDIgLTNcbiAgICAgICAgYzQ3NyAtMiA2NTAgMCA2NzEgOSAxNiA3IDE1NiAxNTIgMzI0IDMzNiBsMjk1IDMyMyA2MDIgMCA2MDIgMCAzMSAyMyBjMTcgMTJcbiAgICAgICAgMTU2IDE1NyAzMDkgMzIyIGwyNzggMzAwIDYwNiA1IGM2NzkgNiA2NDUgMiA2NzcgNzggMTMgMzIgMTQgNDIgMiA3NiAtOCAyMlxuICAgICAgICAtMjcgNDkgLTQyIDYwIC0yOCAyMSAtMzYgMjEgLTY2NSAyMyAtNDAxIDEgLTY0NyAtMiAtNjY0IC04elwiLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgUGVybWlzc2lvbk1lbnUgPSAoKSA9PiAoXG4gICAgICAgIDxzdmcgaGVpZ2h0PVwiMWVtXCIgd2lkdGg9XCIxZW1cIiBjbGFzc05hbWU9J2FudC1tZW51LWl0ZW0taWNvbicgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY29sb3I9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAxMDAwIDEwMDBcIiB4bWxTcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgICA8Zz48cGF0aCBkPVwiTTIxMS4xLDk5MGwtODkuNi0xLjRjLTE1LjUsMC0yMi4yLTEzLjctMjguNS0zOC40bC0xLjMsMC4ybC0zLTE3LjFjLTAuMy0xLjYtMC41LTMtMC43LTQuNGwtMC4zLTEuN2wwLjEsMGwtNy41LTQyLjZjLTMuOC0yMiwyLjktNTIuNCwxNS41LTcwLjhMMzU2LjMsNDM4Yy0xNy4zLTM3LjItMzEtODMuNy0zNi4xLTExMy4xYy0yOS0xNjYuNCwxMTIuNC0yODQuMSwyNjAuMS0zMTAuNWMxNi43LTMsMzMuNy00LjUsNTAuNC00LjVDNzcxLjEsMTAsODkwLjYsMTExLjQsOTE1LDI1MS4xYzI2LjEsMTQ5LjItMzUuMSwzMjMuNi0xOTkuOSwzNTNjLTIxLjYsMy45LTUwLDYuMS03Ny45LDYuMWgwYy0xNy43LDAtMzQuNC0wLjktNDktMi43TDQ2NS41LDgwMC4xbC05Mi4yLTcuMkwyNzMuMSw5NDkuNGMtMTIuMiwxOS4xLTM4LjEsMzYuNC02MC4yLDQwLjNMMjExLjEsOTkweiBNMTMyLjcsOTUxLjFsNzUuMiwxLjFjMTEuNS0yLjcsMjcuMy0xMy41LDMzLjQtMjMuMmwxMDYuOC0xNjYuN2w2LjItNy43bDEwLjctMC4zbDgwLjgsNi4zbDEyMy44LTE5NC4ybDEyLjMsMi4xYzE1LjEsMi42LDM0LjIsNCw1NS4xLDRoMGMyNS40LDAsNTItMi4xLDcxLjMtNS41Qzg0OS4zLDU0Miw5MDAuOCwzODguOSw4NzcuOCwyNTcuNkM4NTYuNiwxMzYsNzUyLjcsNDcuNyw2MzAuNyw0Ny43Yy0xNC42LDAtMjkuMywxLjMtNDMuOCwzLjlDNDU3LDc0LjcsMzMyLjQsMTc2LjEsMzU3LjMsMzE4LjVjNS4xLDI5LjQsMTkuNyw3Ny41LDM3LjYsMTEyLjdsNS4xLDEwbC0yNzMuMSwzOTRjLTcsMTAuMi0xMS41LDMwLjYtOS40LDQyLjlsNy40LDQyLjJjMC4xLDAuNiwwLjMsMS4zLDAuNSwyQzEyOC42LDkzNy4zLDEzMSw5NDYuMSwxMzIuNyw5NTEuMXogTTcyMiwzNzguMmMtMjksMC01Ni4yLTE5LjgtODcuNi00Mi44Yy01LjktNC4zLTEyLTguOC0xOC4zLTEzLjNjLTYuMy00LjQtMTIuNS04LjctMTguNS0xMi44QzU2MiwyODUsNTMxLjMsMjY0LDUyNS4zLDIzMS4zYy0zLjUtMTguOCwyLTM4LjMsMTYuNi01OS40YzI3LjQtMzkuNSw3Mi4zLTYzLjEsMTIwLjEtNjMuMWMzMC4xLDAsNTkuMiw5LjMsODMuOSwyNi44YzY2LjEsNDYuNyw4Mi4yLDEzOC45LDM1LjksMjA1LjZDNzY0LjUsMzY2LjEsNzQ0LjksMzc4LjIsNzIyLDM3OC4yeiBNNjYyLDE0Ni41Yy0zNS40LDAtNjguOCwxNy41LTg5LjEsNDYuOWMtOC42LDEyLjUtMTIuMSwyMi42LTEwLjUsMzEuMWMzLjIsMTcuMywyNy45LDM0LjIsNTYuNSw1My44YzYuMiw0LjIsMTIuNiw4LjYsMTksMTMuMmM2LjUsNC42LDEyLjgsOS4yLDE4LjgsMTMuNmMyNSwxOC4zLDQ4LjYsMzUuNSw2NS4zLDM1LjVjNi4yLDAsMTUuOS0yLjIsMjguOS0yMC44YzM0LjUtNDkuNywyMi41LTExOC41LTI2LjctMTUzLjNDNzA1LjcsMTUzLjQsNjg0LjMsMTQ2LjUsNjYyLDE0Ni41elwiIC8+PC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG5cbiAgICBjb25zdCBQZXJtaXNzaW9uUG9zaXRpb24gPSAoKSA9PiAoXG4gICAgICAgIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY29sb3I9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAxMDAwIDEwMDBcIiB4bWxTcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgICA8Zz48cGF0aCBkPVwiTTYwMS44LDQyMy4yYzQwLjgtMTcuMiw4My44LTI2LDEyOC40LTI2YzQuNCwwLDguOCwwLjIsMTMuMiwwLjJjMjAuOS01Mi44LDI2LjItMTE1LjIsMTUuNy0xNzUuOUM3MzQuOSw4Mi4zLDYwMy42LTEwLjcsNDY1LjYsMTMuOEMzMjcuNywzOC4zLDIxMS40LDE0NS41LDIzNS45LDI4NC42YzUuMiwzMC4xLDE5LjcsNzYuOSwzNi45LDExMC44TDIyLjUsNzU2LjZjLTkuMiwxMy4yLTE0LjUsMzcuMS0xMS43LDUzLjRsMTAuOSw2MS44Yy0xMC4zLTU5LjUsMi45LDIxLjQsMTAuOSwyMS4ybDgyLjUsMS4xYzE1LjktMi45LDM1LjgtMTYuMyw0NC42LTI5LjlsOTktMTU0LjhsMS0xbDg2LjUsNi45bDExNS42LTE4MS4zYzAuNCwwLDAuOCwwLjIsMS4xLDAuMmMxMC4zLTE0LjIsMjEuNi0yNy42LDM0LjMtNDAuMkM1MjcuMiw0NjMuNiw1NjIuNiw0MzkuOCw2MDEuOCw0MjMuMnogTTc2LjYsNzk0LjdsLTEyLjMsNS4ybDEuMy0xMy40bDIzOS44LTM0OC4ybDE0LjQsMTMuNEw3Ni42LDc5NC43eiBNNDQxLjEsMTU0LjFjMzcuOS01NC42LDExMi41LTY4LjEsMTY2LjUtMjkuN2M1NC4yLDM4LjUsNjcuNCwxMTMuOSwyOS41LDE2OC40Yy0zNy45LDU0LjUtNzYuNiwxNi4xLTEzMC43LTIyLjJDNDUyLjMsMjMyLjIsNDAzLjIsMjA4LjgsNDQxLjEsMTU0LjF6XCIgLz48cGF0aCBkPVwiTTcyNyw0NjQuMmMtMTQ1LjMsMC0yNjMsMTE3LjctMjYzLDI2M3MxMTcuNywyNjMsMjYzLDI2M2MxNDUuMywwLDI2My0xMTcuNywyNjMtMjYzQzk5MCw1ODEuOSw4NzIuMyw0NjQuMiw3MjcsNDY0LjJ6IE04NzksODM1LjFjMCwzOS4yLTc1LjIsNDguMi0xNDUuOCw0OC4yYy03MC42LDAtMTQ2LjgtOS0xNDYuOC00OC4ydi0xMC45YzAtMjguOSw1Mi4xLTU4LjIsOTYuMy03NC4xYzMuMy0xLjEsMTguNi05LjYsMTAtMzJjLTIyLTIyLjQtMzguNS01OC44LTM4LjUtOTQuNmMwLTU0LjcsMzYuMi04My41LDc4LjctODMuNWM0Mi4zLDAsNzguOSwyOC43LDc4LjksODMuNWMwLDM1LjYtMTYuNyw3MS44LTM4LjUsOTQuNGgwLjJjLTguNCwyNS41LDUsMzEuNiw3LjEsMzIuMmM0Ni41LDE1LjMsOTguOCw0NC40LDk4LjgsNzQuMUw4NzksODM1LjFMODc5LDgzNS4xelwiIC8+PC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG5cbiAgICBjb25zdCBQZXJtaXNzaW9uRGVwUG9zID0gKCkgPT4gKFxuICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgPGc+PHBhdGggZD1cIk00NDYuMSwxNTQuOWMzOC41LTU0LjYsMTE0LjEtNjguNiwxNjguNy0zMC4xYzU0LjYsMzkuMiw2OCwxMTQuNywyOS40LDE2OS40Yy0zNy44LDU1LjMtNzcsMTYuMS0xMzIuNC0yMi40QzQ1Ny4yLDIzMy4yLDQwNy41LDIxMC4xLDQ0Ni4xLDE1NC45eiBNNzcuMiw3OTguOGwtMTEuOSw0LjlsMS41LTEzLjNsMjQyLjEtMzUwbDE0LjcsMTMuM0w3Ny4yLDc5OC44eiBNNDY4LjUsNTM2LjljMTAuNS0xMy45LDIxLjctMjcuMiwzNC4zLTQwLjVjMzAuOC0zMC4yLDY2LjUtNTQuNiwxMDUuNy03MC44YzQxLjMtMTcuNSw4NS40LTI2LjUsMTMwLjItMjYuNWgxMy4zYzIxLjEtNTIuNCwyNi43LTExNS41LDE2LjItMTc2LjRDNzQzLjYsODIuOCw2MTAuNi0xMSw0NzAuNiwxNC4yQzMzMS4zLDM4LjcsMjEzLjgsMTQ2LjUsMjM4LjEsMjg2LjRjNS43LDMwLjEsMjAuMyw3NywzNy44LDExMS4zTDIyLjYsNzYwLjRjLTkuMSwxMy4zLTE0LjcsMzcuNy0xMS45LDUzLjhMMjIsODc2LjVjLTIuOS0xNi4xLTQuMi0yMi4zLTQuMi0yMi4zYzAuNywwLDksNDMuMywxNS40LDQzLjNsODMuMywxLjVjMTYuMS0yLjgsMzYuNC0xNi4xLDQ0LjgtMzAuMmwxMDAtMTU1LjNsMS41LTEuNWw4Ny40LDcuMWwxMTYuOS0xODIuMUg0NjguNXogTTgxMy42LDc2NC40Yy0yMC40LDQ3LjctNzUuNiw3MC0xMjMuOSw1MC41Yy00OC40LTIwLjMtNzAuNy03NS42LTUwLjQtMTIzLjNjMTkuNi00OC4zLDc1LjYtNzAuNywxMjMuMi01MC40QzgxMC43LDY2MS42LDgzMy44LDcxNi4yLDgxMy42LDc2NC40eiBNOTIwLjYsNjk5LjNsNjkuNC00My4zbC0yNS45LTYyLjNsLTc5LjIsMTguOGMtMTEuMi0xNi4xLTI1LjItMjkuNC00MS4yLTQxLjNsMTguMi03OWwtNjMuMS0yNmwtNDIuNiw2OGMtMTkuNi0yLjgtMzkuMi0yLjgtNTguMSwwbC00Mi44LTY4LjZsLTYyLjksMjUuMmwxNy41LDc5LjJjLTE2LjEsMTEuMi0zMC4yLDI1LjEtNDIsNDAuNmwtNzguNC0xOC4ybC0yNi42LDYyLjNsNjcuOSw0My40Yy0yLjcsMTkuNS0yLjcsMzkuMiwwLDU4LjFsLTY4LjYsNDIuN2wyNS45LDYyLjNsNzkuMi0xNy41YzExLjIsMTUuNCwyNS4yLDI5LjQsNDEuMiw0MS4ybC0xOC44LDc4LjVsNjIuOSwyNS45bDQ0LjItNjhjMTkuNiwyLjksMzkuMiwyLjksNTguMSwwbDQzLjMsNjguN2w2My0yNS45TDg0Myw4ODQuOWMxNS40LTExLjIsMjguNy0yNC40LDQwLjYtNDAuNmw3OS43LDE4LjJsMjYuNi02Mi4zbC02OS40LTQyLjdDOTIzLjQsNzM3LjksOTIzLjQsNzE5LDkyMC42LDY5OS4zelwiIC8+PC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG5cbiAgICBjb25zdCBQZXJtaXNzaW9uTWFuYWdlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY29sb3I9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIlxuICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgPGc+PHBhdGggZD1cIk05NjguOSw0ODEuNGMtMS4zLDEwLjUtMi45LDIxLjQtNSwzMS44bC01LjIsMjQuOGwtMjUuMy0xLjFjLTMuMy0wLjEtNi42LTAuMi0xMC0wLjJjLTcyLjIsMC0xNDAuNiwzMy42LTE5My42LDgxYy00LjMsMy44LTguOSw5LjktMTIuNCwxNC41Yy02LjksOC45LTEzLjUsMTguMi0xOS45LDI3LjRjLTE3LjQsMjQuOS0zNC4yLDUwLjMtNTAuNyw3NS44Yy0xNi43LDI1LjctMzMuMSw1MS42LTQ5LjMsNzcuNmwtOS41LDE1LjNsLTgwLjYtNS41TDQwNS4zLDk3My4ybC03LjUsMy41QzM3My43LDk4Ny45LDM0MCw5OTAsMzEzLjYsOTkwYy05LjksMC0yMC0wLjItMjkuOS0xbC0xNy43LTEuNGwtNy4zLTE2LjJjLTE0LjMtMzEuOC0xOS4yLTcwLjgtMjIuMy0xMDUuMmMtMC4yLTEuOS0wLjMtMy45LTAuNS01LjhjLTAuNC0yLjMtMC42LTQuNy0wLjQtN2wtMjMuNCwzNC41bC05LjksNC42Yy0yNS42LDEyLTYwLjMsMTQuMi04OC4yLDE0LjJjLTEwLjEsMC0yMC41LTAuMi0zMC42LTFsLTIzLjMtMS44bC05LjYtMjEuM2MtMTQuNy0zMi45LTE5LjktNzIuNy0yMy4xLTEwOC4zYy0wLjItMS43LTAuMy0zLjUtMC41LTUuM2MtMy0xNy43LDYuNi0zMC42LDE1LjgtNDQuN2M5LTEzLjgsMTguMi0yNy41LDI3LjQtNDEuMWMyNy4zLTQwLjMsNTUtODAuNCw4Mi43LTEyMC40YzM1LjYtNTEuNCw3MS40LTEwMi43LDEwNy4yLTE1NGMtMjAuNi00Ni4zLTMyLjQtOTcuMS0yOS0xNDhjMS40LTIwLjcsNi00Ny43LDE1LTY2LjljMzEuMS02Ni4yLDc4LjQtMTE5LjYsMTQ0LjQtMTUyQzQzNCwyMC42LDQ4Mi43LDEwLDUzMSwxMGMxMy4xLDAsMjYuOSwwLjcsMzkuOSwyLjhjNjYsMTAuOSwxMjEuMyw0Mi4zLDE1OS4yLDk3LjhjMC40LDAuNiwwLjgsMS4xLDEuMSwxLjdjMTIuNCwwLDI1LjQsMC43LDM3LjYsMi43YzYzLjQsMTAuNSwxMTYuNCw0MC40LDE1Mi45LDkzLjhjMzkuMyw1Ny40LDUxLjYsMTI5LjcsNTEuOCwxOTguMUM5NzMuNiw0MzEuOCw5NzIsNDU2LjgsOTY4LjksNDgxLjR6IE01NjEuMSw3MS44Yy0yLjktMC41LTEzLjctMi0zMC4xLTJjLTU5LjksMC0xNjkuNiwxOS40LTIzMC43LDE0OS42Yy0wLjMsMC43LTguNCwxOS4yLTkuNyw1MC41Yy0xLjIsMjkuMywzLjYsNzYuMywzMy4yLDEzMy4zbDUuNywxMC45bC03LjEsMTAuMUMyMzkuMyw1NDIuOCwxMDYuOSw3MzMuNCw4Ni45LDc2Ni40YzAuMSwwLjgsMC4xLDEuNiwwLjIsMi42YzEuNCwxNS45LDQuNSw1MC40LDEzLjcsNzcuOGMzLjgsMC4xLDguNCwwLjIsMTMuMywwLjJjMjUuMiwwLDQ1LjUtMi40LDU4LjItNi43bDExMC4yLTE2Mi4zbDYzLjIsNC4zYzQuOS03LjEsOS44LTE0LjEsMTQuNy0yMS4yYzM2LjYtNTIuOSw3My40LTEwNS43LDExMC4zLTE1OC40Yy0yMS40LTQ2LjItMzMuOC05Ny4yLTMwLjQtMTQ4LjNjMS0xNSwzLjQtMzAuMSw3LjQtNDQuNWMtMy40LTIuOC02LjktNS41LTEwLjMtOC4zYy0yMy4xLTE4LjUtNTUuMS00MS42LTU3LjctNzMuNmMtMS4yLTE0LjgsMy44LTI4LjgsMTMuOC0zOS44YzM4LjItNDIuNSw5NC4xLTc0LjIsMTUyLjMtNzQuMmMyNS42LDAsNTAuNCw2LjIsNzEuOCwxOS40YzE0LTUuNCwyOC40LTkuOCw0My4xLTEzLjFDNjM1LDk0LjcsNjAxLjcsNzguNSw1NjEuMSw3MS44eiBNNDc0LjEsMjU0LjNjMTkuMy0zMS4yLDQzLTU4LjUsNzEuNy04MC43Yy0zNS44LDAtNzQuNywxOS4xLTEwNC45LDUxLjJDNDQ2LjMsMjMyLDQ2MS45LDI0NC42LDQ3NC4xLDI1NC4zeiBNODgwLjIsMjM3LjFjLTI3LTM5LjUtNjcuMy02My45LTExOS41LTcyLjVjLTIuOS0wLjUtMTMuNy0yLTMwLjEtMmMtNTkuOSwwLTE2OS42LDE5LjQtMjMwLjcsMTQ5LjZjLTAuMywwLjctOC40LDE5LjItOS43LDUwLjVjLTEuMiwyOS4zLDMuNiw3Ni4zLDMzLjIsMTMzLjNsNS43LDEwLjlsLTcuMSwxMC4xYy04My4xLDExOC42LTIxNS41LDMwOS4yLTIzNS41LDM0Mi4yYzAuMSwwLjgsMC4xLDEuNiwwLjIsMi42YzEuNCwxNS45LDQuNSw1MC40LDEzLjcsNzcuOGMzLjgsMC4xLDguNCwwLjIsMTMuMywwLjJjMjUuMiwwLDQ1LjUtMi40LDU4LjItNi43bDExMC4yLTE2Mi4zbDc5LjMsNS40YzI1LjUtNDAuOCwxMDguNi0xNzIuMywxMzUtMTk1LjhjMzguNC0zNC40LDExNy43LTkxLjUsMjIxLjEtOTMuN0M5MjQsNDQyLjQsOTM1LjgsMzE4LjIsODgwLjIsMjM3LjF6IE04MTIuMiw0NzcuMmMtOC43LDkuNy0yMC4yLDE1LjMtMzMuMywxNS4zYy0yLjQsMC00LjgtMC4yLTcuMi0wLjZjLTEyLTEuOS0yMi4zLTguMy0zMS42LTE1LjljLTEwLjgtOC44LTIwLjctMTkuMy0zMC40LTI5LjNjLTEwLjctMTEuMS0yMS40LTIyLjItMzIuOS0zMi41Yy0xMS05LjgtMjIuNC0xOS4xLTMzLjktMjguM2MtMTEuNi05LjMtMjMuOC0xOC44LTM0LjEtMjkuNGMtOC43LTguOS0xNi40LTE5LjMtMTkuMS0zMS43Yy0wLjQtMS45LTAuNy0zLjktMC45LTUuOWMtMS0xMi4yLDMuMi0yMy42LDExLjQtMzIuN2MzNi4zLTQwLjQsODkuNy03MSwxNDUuMi03MWMzMC43LDAsNjAuMSw5LjUsODMuMSwzMC4yYzMxLjIsMjgsNDIuOCw3MC4yLDM5LjEsMTExQzg2My40LDQwMS41LDg0Mi4xLDQ0NCw4MTIuMiw0NzcuMnogTTc5NC44LDI4M2MtMTIuNi0xMS40LTI5LjgtMTcuNC00OS42LTE3LjRjLTM1LjgsMC03NC43LDE5LjEtMTA0LjksNTEuMmM1LjYsNy4zLDIxLjcsMjAuMiwzMy45LDMwYzExLjEsOC45LDIzLjYsMTguOSwzNi4xLDMwLjFjMTMuMywxMiwyNS4xLDI0LjIsMzUuNSwzNWMxMC4zLDEwLjYsMjMuOCwyNC43LDMxLjIsMjkuMmMyMy4zLTI2LjgsMzcuNi01OC4zLDQwLjQtODlDODIwLjEsMzIzLDgxMi4xLDI5OC41LDc5NC44LDI4M3ogTTU2Mi43LDU5My40TDU2Mi43LDU5My40TDQxMy44LDgwMmMtMC4xLDAuMS0wLjEsMC4yLTAuMiwwLjNjLTkuOCwxMy41LTI5LDE5LjMtNDMuMyw5LjJjLTE0LjMtMTAuMi0xNS4xLTMwLjMtNS4zLTQ0bDE0OS4yLTIwOC45YzkuNy0xMy42LDI5LjEtMTkuNSw0My40LTkuM2MxNC4zLDEwLjIsMTUuMSwzMC4zLDUuMyw0NEw1NjIuNyw1OTMuNHogTTM4Mi45LDUwOC45bC0wLjMsMC40bDAsMC4xTDIzMy44LDcxNy44Yy0wLjEsMC4xLTAuMSwwLjItMC4yLDAuM2MtMTIuOSwxNy44LTM4LDI0LjYtNTYuNiwxMS4zYy0xOC43LTEzLjMtMjAuNC0zOS4zLTcuNS01Ny40bDE0OS4yLTIwOC45YzEyLjgtMTcuOSwzOC4xLTI0LjgsNTYuNy0xMS41QzM5NCw0NjQuOSwzOTUuOCw0OTAuOSwzODIuOSw1MDguOXpcIiAvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIGdldEl0ZW0oXCJOaMOibiBz4buxXCIsIFwic3ViLW1lbnUtMVwiLCA8TWRQZW9wbGVPdXRsaW5lIC8+LCBbXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Byb2ZpbGVgfT5I4buTIHPGoTwvTGluaz4sIFwiMVwiLCA8QnNGaWxlRWFybWFya0ZpbGwgLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9kZXBhcnRtZW50YH0+QuG7mSBwaOG6rW4gY8O0bmcgdMOhYzwvTGluaz4sIFwiMlwiLCA8RmNEZXBhcnRtZW50IC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcG9zaXRpb25gfT5DaOG7qWMgZGFuaCwgY2jhu6ljIHbhu6U8L0xpbms+LCBcIjNcIiwgPFBvc2l0aW9uSXRlbSAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L215cHJvZmlsZS8ke2p3dF9kZWNvZGUoVE9LRU4pPy5pZH1gfT5UaMO0bmcgdGluIGPDoSBuaMOibjwvTGluaz4sIFwiNFwiLCA8SW1Qcm9maWxlIC8+KSxcbiAgICAgICAgXSksXG4gICAgICAgIGdldEl0ZW0oXCJRdXnhu4FuXCIsIFwic3ViLW1lbnUtMlwiLCA8UGVybWlzc2lvbk1lbnUgLz4sIFtcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9tYW5hZ2VgfT5RdeG6o24gbMO9IHF1eeG7gW48L0xpbms+LCBcIjVcIiwgPFBlcm1pc3Npb25NYW5hZ2VtZW50IC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9wb3NpdGlvbmB9PlF1eeG7gW4gY2jhu6ljIHbhu6U8L0xpbms+LCBcIjZcIiwgPFBlcm1pc3Npb25Qb3NpdGlvbiAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vZGVwYXJ0bWVudC1wb3NpdGlvbmB9PlF1eeG7gW4gUEIgLSBDVjwvTGluaz4sIFwiN1wiLCA8UGVybWlzc2lvbkRlcFBvcyAvPiksXG4gICAgICAgIF0pXG4gICAgXTtcblxuICAgIGNvbnN0IGl0ZW1zX3VzZXIgPSBbXG4gICAgICAgIGdldEl0ZW0oXCJOaMOibm4gc+G7sVwiLCBcInN1Yi1tZW51LTFcIiwgPE1kUGVvcGxlT3V0bGluZSAvPiwgW1xuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9teXByb2ZpbGUvJHtqd3RfZGVjb2RlKFRPS0VOKT8uaWR9YH0+VGjDtG5nIHRpbiBjw6EgbmjDom48L0xpbms+LCBcIjRcIiwgPEltUHJvZmlsZSAvPiksXG4gICAgICAgIF0pXG4gICAgXTtcblxuICAgIGNvbnN0IHJlbmRlclN1Yk1lbnUgPSAoKSA9PiB7XG4gICAgICAgIC8vIHJldHVybiBpdGVtcztcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBbXTtcbiAgICAgICAgbGV0IG1lbnVfcHJvZmlsZSA9IFtnZXRJdGVtKFwiTmjDom4gc+G7sVwiLCBcInN1Yi1tZW51LTFcIiwgPE1kUGVvcGxlT3V0bGluZSAvPiwgc3ViTWVudSldO1xuICAgICAgICBsZXQgc3ViTWVudV9QZXIgPSBbXTtcbiAgICAgICAgbGV0IG1lbnVfcGVybWlzc2lvbiA9IFtnZXRJdGVtKFwiUXV54buBblwiLCBcInN1Yi1tZW51LTJcIiwgPFBlcm1pc3Npb25NZW51IC8+LCBzdWJNZW51X1BlcildO1xuICAgICAgICBjb25zb2xlLmxvZyh1c2VyUGVybWlzc2lvbkFwaSlcbiAgICAgICAgY29uc29sZS5sb2codXNlclBlcm1pc3Npb24pXG4gICAgICAgIGlmICh1cmkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdXNlclBlcm1pc3Npb25BcGkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtSGF2ZSBvZiBpdGVtLmdyb3Vwcykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwZXJVc2VyIG9mIGl0ZW1IYXZlLnBlcm1pc3Npb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJQZXJtaXNzaW9uLnB1c2gocGVyVXNlci5uYW1lLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXNlclBlcm1pc3Npb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHVyaSA9PT0gXCJwcm9maWxlLXNlcnZpY2VcIikge1xuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGjhu5Mgc8ahXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnUucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Byb2ZpbGVgfT5I4buTIHPGoTwvTGluaz4sIFwiMVwiLCA8QnNGaWxlRWFybWFya0ZpbGwgLz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBwaMOybmcgYmFuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnUucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL2RlcGFydG1lbnRgfT5C4buZIHBo4bqtbiBjw7RuZyB0w6FjPC9MaW5rPiwgXCIyXCIsIDxGY0RlcGFydG1lbnQgLz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBjaOG7qWMgduG7pVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wb3NpdGlvbmB9PkNo4bupYyBkYW5oLCBjaOG7qWMgduG7pTwvTGluaz4sIFwiM1wiLCA8UG9zaXRpb25JdGVtIC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggcXV54buBblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51X1Blci5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9tYW5hZ2VgfT5RdeG6o24gbMO9IHF1eeG7gW48L0xpbms+LCBcIjVcIiwgPFBlcm1pc3Npb25NYW5hZ2VtZW50IC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggY2jhu6ljIHZ1IMSRw6MgxJHGsOG7o2MgZ8OhbiBxdXnhu4FuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnVfUGVyLnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL3Bvc2l0aW9uYH0+UXV54buBbiBjaOG7qWMgduG7pTwvTGluaz4sIFwiNlwiLCA8UGVybWlzc2lvblBvc2l0aW9uIC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggY2jhu6ljIHbhu6UgdsOgIHBow7JuZyBiYW4gxJHDoyDEkcaw4bujYyBnw6FuIHF1eeG7gW5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vZGVwYXJ0bWVudC1wb3NpdGlvbmB9PlF1eeG7gW4gUEIgLSBDVjwvTGluaz4sIFwiN1wiLCA8UGVybWlzc2lvbkRlcFBvcyAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1Yk1lbnUucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L215cHJvZmlsZS8ke2p3dF9kZWNvZGUoVE9LRU4pPy5pZH1gfT5UaMO0bmcgdGluIGPDoSBuaMOibjwvTGluaz4sIFwiNFwiLCA8SW1Qcm9maWxlIC8+KSlcblxuICAgICAgICAgICAgICAgIGlmICh1cmwgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1lbnVfcHJvZmlsZS5jb25jYXQobWVudV9wZXJtaXNzaW9uKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfU3ViTWVudV9fWFplYjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdE9wZW5LZXlzPXtbYHN1YjFgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPSdpbmxpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e21lbnVfcHJvZmlsZS5jb25jYXQobWVudV9wZXJtaXNzaW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBo4buTIHPGoVwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wcm9maWxlYH0+SOG7kyBzxqE8L0xpbms+LCBcIjFcIiwgPEJzRmlsZUVhcm1hcmtGaWxsIC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggcGjDsm5nIGJhblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9kZXBhcnRtZW50YH0+QuG7mSBwaOG6rW4gY8O0bmcgdMOhYzwvTGluaz4sIFwiMlwiLCA8RmNEZXBhcnRtZW50IC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggY2jhu6ljIHbhu6VcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudS5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcG9zaXRpb25gfT5DaOG7qWMgZGFuaCwgY2jhu6ljIHbhu6U8L0xpbms+LCBcIjNcIiwgPFBvc2l0aW9uSXRlbSAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIHF1eeG7gW5cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vbWFuYWdlYH0+UXXhuqNuIGzDvSBxdXnhu4FuPC9MaW5rPiwgXCI1XCIsIDxQZXJtaXNzaW9uTWFuYWdlbWVudCAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB2dSDEkcOjIMSRxrDhu6NjIGfDoW4gcXV54buBblwiKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51X1Blci5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9wb3NpdGlvbmB9PlF1eeG7gW4gY2jhu6ljIHbhu6U8L0xpbms+LCBcIjZcIiwgPFBlcm1pc3Npb25Qb3NpdGlvbiAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB24bulIHbDoCBwaMOybmcgYmFuIMSRw6MgxJHGsOG7o2MgZ8OhbiBxdXnhu4FuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnVfUGVyLnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL2RlcGFydG1lbnQtcG9zaXRpb25gfT5RdXnhu4FuIFBCIC0gQ1Y8L0xpbms+LCBcIjdcIiwgPFBlcm1pc3Npb25EZXBQb3MgLz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9teXByb2ZpbGUvJHtqd3RfZGVjb2RlKFRPS0VOKT8uaWR9YH0+VGjDtG5nIHRpbiBjw6EgbmjDom48L0xpbms+LCBcIjRcIiwgPEltUHJvZmlsZSAvPikpXG4gICAgICAgICAgICAgICAgaWYgKHVyaSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVudV9wcm9maWxlLmNvbmNhdChtZW51X3Blcm1pc3Npb24pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfU3ViTWVudV9fWFplYjZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdE9wZW5LZXlzPXtbYHN1YjFgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPSdpbmxpbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e21lbnVfcHJvZmlsZS5jb25jYXQobWVudV9wZXJtaXNzaW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHVyaSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtc191c2VyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0T3BlbktleXM9e1tgc3ViMWBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e21lbnVfcHJvZmlsZS5jb25jYXQobWVudV9wZXJtaXNzaW9uKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PntyZW5kZXJTdWJNZW51KCl9PC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgY2hlY2tNaWNyb0ZlLCBnZXRUb2tlbkluQ29va2llIH0gZnJvbSBcIi4uL3VsdGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gZ2V0VG9rZW5JbkNvb2tpZSgpO1xuXG5leHBvcnQgY29uc3QgbG9jYWwgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwiaHR0cHM6Ly9wcm9maWxlc2VydmljZS50dW9pdHJlLnZuXCIgOiBcIlwiXG5cbi8vIFJlZ2V4XG5leHBvcnQgY29uc3QgcmVnZXhFbWFpbCA9IC9eW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0kLztcbmV4cG9ydCBjb25zdCByZWdleFBob25lID0gLyg4NFszfDV8N3w4fDldfDBbM3w1fDd8OHw5XSkrKFswLTldezh9fFswLTldezl9KVxcYi87XG5cbmV4cG9ydCBjb25zdCBxdWFUcmluaExWSFQgPSBcIlF1w6EgdHLDrG5oIGzDoG0gdmnhu4djIHbDoCBo4buNYyB04bqtcFwiO1xuZXhwb3J0IGNvbnN0IHRoYW1HaWFUb0NodWNDVCA9IFwiVGhhbSBnaWEgY8OhYyB04buVIGNo4bupYyBjaMOtbmggdHLhu4ssIGPDoWMgaMO04buLIG5naOG7gSBuZ2hp4buHcFwiO1xuZXhwb3J0IGNvbnN0IGRhb1RhbyA9IFwixJDDoG8gdOG6oW9cIjtcbmV4cG9ydCBjb25zdCBib2lEdW9uZyA9IFwiQuG7k2kgZMaw4buhbmdcIjtcbmV4cG9ydCBjb25zdCBraGVuVGh1b25nID0gXCJLaGVuIHRoxrDhu59uZ1wiO1xuZXhwb3J0IGNvbnN0IGt5THVhdCA9IFwiS+G7tyBsdeG6rXRcIjtcbmV4cG9ydCBjb25zdCBsaWNoU3VCYW5UaGFuID0gXCJM4buLY2ggc+G7rSBi4bqjbiB0aMOiblwiO1xuZXhwb3J0IGNvbnN0IHF1YW5IZUdpYURpbmggPSBcIlF1YW4gaOG7hyBnaWEgxJHDrG5oXCI7XG5leHBvcnQgY29uc3Qgbm9pU2luaF9TdGVwMSA9IFwiTsahaSBzaW5oXCJcbmV4cG9ydCBjb25zdCBxdWVRdWFuX1N0ZXAxID0gXCJRdcOqIHF1w6FuXCJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9JRCA9IFwiR0VUX1BST0ZJTEVfQllfSURcIjtcbmV4cG9ydCBjb25zdCBHRVRfUFJPVklOQ0VTID0gXCJHRVRfUFJPVklOQ0VTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRSA9IFwiR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfSE9NRV9UT1dOID0gXCJHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfQUREUkVTUyA9IFwiR0VUX0RJU1RSSUNUU19BRERSRVNTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19IT0tIQVUgPSBcIkdFVF9ESVNUUklDVFNfSE9LSEFVXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQOCA9IFwiR0VUX0RJU1RSSUNUU19TVEVQOFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDcgPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA5ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA5XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQN19DT04gPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0ZJTEUgPSBcIlVQREFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BST0ZJTEUgPSBcIkNSRUFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgT05MWV9DUkVBVEVfUFJPRklMRSA9IFwiT05MWV9DUkVBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xJU1QgPSBcIkdFVF9VU0VSX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9JTkZPUk1BVElPTiA9IFwiR0VUX1VTRVJfSU5GT1JNQVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQX1BPUyA9IFwiR0VUX0RFUEFSVE1FTlRfUE9TSVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfUEFSVCA9IFwiR0VUX1BBUlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfQVZBVEFSID0gXCJHRVRfQVZBVEFSXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RFUF9QT1MgPSBcIkRFTEVURV9ERVBfUE9TXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUEFSVE1FTlRfTElTVCA9IFwiR0VUX0RFUEFSVE1FTlRfTElTVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ERVBBUlRNRU5UID0gXCJVUERBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UX0lORk9SID0gXCJHRVRfREVQQVJUTUVOVF9JTkZPUlwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9ERVBBUlRNRU5UID0gXCJDUkVBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ERVBBUlRNRU5UID0gXCJERUxFVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NJVElPTlNfTUFOQV9MSVNUID0gXCJHRVRfUE9TSVRJT05TX01BTkFfTElTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NJVElPTl9UWVBFX0xJU1QgPSBcIkdFVF9QT1NJVElPTl9UWVBFX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TSVRJT05fVFlQRSA9IFwiQ1JFQVRFX1BPU0lUSU9OX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TSVRJT05fVFlQRSA9IFwiVVBEQVRFX1BPU0lUSU9OX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TSVRJT05fVFlQRSA9IFwiREVMRVRFX1BPU0lUSU9OX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIkNSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSU09OQUxfSElTVE9SWSA9IFwiR0VUX1BFUlNPTkFMX0hJU1RPUllcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUllcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUllcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiREVMRVRFX1BFUlNPTkFMX0hJU1RPUllcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFSVFkgPSBcIkNSRUFURV9QQVJUWVwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQVJUWSA9IFwiVVBEQVRFX1BBUlRZXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX09SR0FOSVpBVElPTiA9IFwiQ1JFQVRFX09SR0FOSVpBVElPTlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9PUkdBTklaQVRJT04gPSBcIlVQREFURV9PUkdBTklaQVRJT05cIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfT1JHQU5JWkFUSU9OID0gXCJERUxFVEVfT1JHQU5JWkFUSU9OXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1RSQUlOSU5HID0gXCJDUkVBVEVfVFJBSU5JTkdcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfVFJBSU5JTkcgPSBcIlVQREFURV9UUkFJTklOR1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9UUkFJTklORyA9IFwiREVMRVRFX1RSQUlOSU5HXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkVcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIkRFTEVURV9SRVdBUkRfRElTQ0lQTElORVwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAgPSBcIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDcgPSBcIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3XCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3ID0gXCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9DT05fU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQNyA9IFwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9DT05fU1RFUDcgPSBcIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQX0NPTl9TVEVQN1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQID0gXCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBfUE9TX1RPX1NFQVJDSCA9IFwiR0VUX0RFUF9QT1NfVE9fU0VBUkNIXCI7XG5leHBvcnQgY29uc3QgU0VBUkNIID0gXCJTRUFSQ0hcIjtcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9VU0VSX0lEID0gXCJHRVRfUFJPRklMRV9CWV9VU0VSX0lEXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVE9LRU4gPSBcIkdFVF9QUk9GSUxFX0JZX1RPS0VOXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0ZJTEVfQUNUSVZFID0gXCJVUERBVEVfUFJPRklMRV9BQ1RJVkVcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSTUlTU0lPTl9MSVNUID0gXCJHRVRfUEVSTUlTU0lPTl9MSVNUXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUk1JU1NJT04gPSBcIkNSRUFURV9QRVJNSVNTSU9OXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BFUk1JU1NJT04gPSBcIlVQREFURV9QRVJNSVNTSU9OXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BFUk1JU1NJT04gPSBcIkRFTEVURV9QRVJNSVNTSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fUE9TSVRJT04gPSBcIkdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX1RBQkxFX01BTkFHRU1FTlQgPSBcIkdFVF9UQUJMRV9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgU0VBUkNIX0RFUEFSVE1FTlQgPSBcIlNFQVJDSF9ERVBBUlRNRU5UXCI7XG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU0lUSU9OID0gXCJTRUFSQ0hfUE9TSVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfUE9TX0xJU1QgPSBcIkdFVF9QT1NfTElTVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9SRVNPVVJDRSA9IFwiREVMRVRFX1JFU09VUkNFXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BFUk1JU1NJT05fUE9TID0gXCJERUxFVEVfUEVSTUlTU0lPTl9QT1NcIjtcbmV4cG9ydCBjb25zdCBQT1NUX1BFUk1JU1NJT05fUE9TID0gXCJQT1NUX1BFUk1JU1NJT05fUE9TXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BFUk1JU1NJT05fREVQX1BPUyA9IFwiREVMRVRFX1BFUk1JU1NJT05fREVQX1BPU1wiO1xuZXhwb3J0IGNvbnN0IFBPU1RfUEVSTUlTU0lPTl9ERVBfUE9TID0gXCJQT1NUX1BFUk1JU1NJT05fREVQX1BPU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJNSVNTSU9OX0RFUF9QT1MgPSBcIkdFVF9QRVJNSVNTSU9OX0RFUF9QT1NcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSTUlTU0lPTl9ERVBfUE9TX0xJU1QgPSBcIkdFVF9QRVJNSVNTSU9OX0RFUF9QT1NfTElTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJNSVNTSU9OX1BPU19MSVNUID0gXCJHRVRfUEVSTUlTU0lPTl9QT1NfTElTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJNSVNTSU9OX09GX1VTRVIgPSBcIkdFVF9QRVJNSVNTSU9OX09GX1VTRVJcIjsiLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBkb2NDb29raWUgZnJvbSBcImRvYy1jb29raWVzXCJcblxuZXhwb3J0IGxldCBoYW5kbGVEYXRlVGltZSA9IChkYXRlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvbnZlcnQ7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgLy8gY29udmVydCB04burIHPhu5Egc2FuZyBjaHXhu5dpIERELU1NLVlZWVlcbiAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZihkYXRlLmluY2x1ZGVzKFwiLjAwMFpcIikpe1xuICAgICAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgICAgIGNvbnZlcnQgPSBtb21lbnQoY29udmVydDEsIFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udmVydDEgPSBtb21lbnQobmV3IERhdGUoZGF0ZS5jb25jYXQoXCIuMDAwWlwiKSkpLmZvcm1hdChcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udmVydFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGxldCBjaGVja01pY3JvRmUgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMzAwMFwiKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcInByb2ZpbGVzZXJ2aWNlXCIpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMzAwMVwiKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGdldFRva2VuSW5Db29raWUgPSAoKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB0b2tlbkNvb2tpZSA9IGRvY0Nvb2tpZS5nZXRJdGVtKFwidXNlcnRva2VuXCIpXG4gICAgICAgIGlmKCF0b2tlbkNvb2tpZSl7XG4gICAgICAgICAgICAvLyBraGkgcHVzaCBjb2RlIGzDqm4gc2VydmVyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgLy8gS2hpIHRlc3QgdHLDqm4gbG9jYWxcbiAgICAgICAgICAgIC8vIHJldHVybiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk16VTJMQ0psZUhBaU9qSTNOVEExTlRRM016QjkuZHJCT19HN0Y5SkNEaTdYbUxSbWYxNFF2VXFZZThjVzRpbkJJYlFzbVJZSVwiXG4gICAgICAgICAgICAvLyByZXR1cm4gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNU3dpWlhod0lqb3lOelV3TkRFeE1EZzNmUS51V2VFSkVYSHlOeXN3ODVrMjJtMHM2ZEZOaTRuSkZBTzhOUzhsZVk2ZnlBXCJcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbkNvb2tpZSk7XG4gICAgICAgIHJldHVybiB0b2tlbkNvb2tpZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGxldCBjaGVja1VzZXJQZXJtaXNzaW9uID0gKHBlcm1pc3Npb25MaXN0LCAuLi5uYW1lUGVybWlzc2lvbik9PntcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgZm9yKGxldCBwZXJOYW1lIG9mIG5hbWVQZXJtaXNzaW9uKXtcbiAgICAgICAgICAgIGlmKCFwZXJtaXNzaW9uTGlzdC5pbmNsdWRlcyhwZXJOYW1lKSl7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIk1kUGVvcGxlT3V0bGluZSIsIkxpbmsiLCJCc0ZpbGVFYXJtYXJrRmlsbCIsIkZjRGVwYXJ0bWVudCIsImNoZWNrTWljcm9GZSIsIkltUHJvZmlsZSIsImp3dF9kZWNvZGUiLCJUT0tFTiIsInVzZVNlbGVjdG9yIiwidXNlclBlcm1pc3Npb25BcGkiLCJ1c2VyUGVybWlzc2lvbiIsIlN1Yk1lbnUiLCJwZXJtaXNzaW9uIiwidXJpIiwidW5kZWZpbmVkIiwic3RhdGUiLCJwZXJtaXNzaW9uUmVkdWNlciIsImNvbnNvbGUiLCJsb2ciLCJnZXRJdGVtIiwibGFiZWwiLCJrZXkiLCJpY29uIiwiY2hpbGRyZW4iLCJQb3NpdGlvbkl0ZW0iLCJQZXJtaXNzaW9uTWVudSIsIlBlcm1pc3Npb25Qb3NpdGlvbiIsIlBlcm1pc3Npb25EZXBQb3MiLCJQZXJtaXNzaW9uTWFuYWdlbWVudCIsIml0ZW1zIiwiaWQiLCJpdGVtc191c2VyIiwicmVuZGVyU3ViTWVudSIsInN1Yk1lbnUiLCJtZW51X3Byb2ZpbGUiLCJzdWJNZW51X1BlciIsIm1lbnVfcGVybWlzc2lvbiIsIml0ZW0iLCJncm91cHMiLCJpdGVtSGF2ZSIsInBlclVzZXIiLCJwdXNoIiwibmFtZSIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJ1cmwiLCJjb25jYXQiLCJnZXRUb2tlbkluQ29va2llIiwibG9jYWwiLCJyZWdleEVtYWlsIiwicmVnZXhQaG9uZSIsInF1YVRyaW5oTFZIVCIsInRoYW1HaWFUb0NodWNDVCIsImRhb1RhbyIsImJvaUR1b25nIiwia2hlblRodW9uZyIsImt5THVhdCIsImxpY2hTdUJhblRoYW4iLCJxdWFuSGVHaWFEaW5oIiwibm9pU2luaF9TdGVwMSIsInF1ZVF1YW5fU3RlcDEiLCJHRVRfUFJPRklMRV9CWV9JRCIsIkdFVF9QUk9WSU5DRVMiLCJHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFIiwiR0VUX0RJU1RSSUNUU19IT01FX1RPV04iLCJHRVRfRElTVFJJQ1RTX0FERFJFU1MiLCJHRVRfRElTVFJJQ1RTX0hPS0hBVSIsIkdFVF9ESVNUUklDVFNfU1RFUDgiLCJHRVRfRElTVFJJQ1RTX1NURVA3IiwiR0VUX0RJU1RSSUNUU19TVEVQOSIsIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OIiwiVVBEQVRFX1BST0ZJTEUiLCJDUkVBVEVfUFJPRklMRSIsIk9OTFlfQ1JFQVRFX1BST0ZJTEUiLCJHRVRfVVNFUl9MSVNUIiwiR0VUX1VTRVJfSU5GT1JNQVRJT04iLCJHRVRfREVQX1BPUyIsIkdFVF9QQVJUIiwiR0VUX0FWQVRBUiIsIkRFTEVURV9ERVBfUE9TIiwiR0VUX0RFUEFSVE1FTlRfTElTVCIsIlVQREFURV9ERVBBUlRNRU5UIiwiR0VUX0RFUEFSVE1FTlRfSU5GT1IiLCJDUkVBVEVfREVQQVJUTUVOVCIsIkRFTEVURV9ERVBBUlRNRU5UIiwiR0VUX1BPU0lUSU9OU19NQU5BX0xJU1QiLCJHRVRfUE9TSVRJT05fVFlQRV9MSVNUIiwiQ1JFQVRFX1BPU0lUSU9OX1RZUEUiLCJVUERBVEVfUE9TSVRJT05fVFlQRSIsIkRFTEVURV9QT1NJVElPTl9UWVBFIiwiQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UIiwiVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UIiwiREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UIiwiR0VUX1BFUlNPTkFMX0hJU1RPUlkiLCJDUkVBVEVfUEVSU09OQUxfSElTVE9SWSIsIlVQREFURV9QRVJTT05BTF9ISVNUT1JZIiwiREVMRVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJDUkVBVEVfUEFSVFkiLCJVUERBVEVfUEFSVFkiLCJDUkVBVEVfT1JHQU5JWkFUSU9OIiwiVVBEQVRFX09SR0FOSVpBVElPTiIsIkRFTEVURV9PUkdBTklaQVRJT04iLCJDUkVBVEVfVFJBSU5JTkciLCJVUERBVEVfVFJBSU5JTkciLCJERUxFVEVfVFJBSU5JTkciLCJDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkUiLCJERUxFVEVfUkVXQVJEX0RJU0NJUExJTkUiLCJVUERBVEVfUkVXQVJEX0RJU0NJUExJTkUiLCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCIsIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3IiwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3IiwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDciLCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9DT05fU1RFUDciLCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCIsIkdFVF9ERVBfUE9TX1RPX1NFQVJDSCIsIlNFQVJDSCIsIkdFVF9QUk9GSUxFX0JZX1VTRVJfSUQiLCJHRVRfUFJPRklMRV9CWV9UT0tFTiIsIlVQREFURV9QUk9GSUxFX0FDVElWRSIsIkdFVF9QRVJNSVNTSU9OX0xJU1QiLCJDUkVBVEVfUEVSTUlTU0lPTiIsIlVQREFURV9QRVJNSVNTSU9OIiwiREVMRVRFX1BFUk1JU1NJT04iLCJHRVRfUEVSTUlTU0lPTl9QT1NJVElPTiIsIkdFVF9UQUJMRV9NQU5BR0VNRU5UIiwiU0VBUkNIX0RFUEFSVE1FTlQiLCJTRUFSQ0hfUE9TSVRJT04iLCJHRVRfUE9TX0xJU1QiLCJERUxFVEVfUkVTT1VSQ0UiLCJERUxFVEVfUEVSTUlTU0lPTl9QT1MiLCJQT1NUX1BFUk1JU1NJT05fUE9TIiwiREVMRVRFX1BFUk1JU1NJT05fREVQX1BPUyIsIlBPU1RfUEVSTUlTU0lPTl9ERVBfUE9TIiwiR0VUX1BFUk1JU1NJT05fREVQX1BPUyIsIkdFVF9QRVJNSVNTSU9OX0RFUF9QT1NfTElTVCIsIkdFVF9QRVJNSVNTSU9OX1BPU19MSVNUIiwiR0VUX1BFUk1JU1NJT05fT0ZfVVNFUiIsIm1vbWVudCIsImRvY0Nvb2tpZSIsImhhbmRsZURhdGVUaW1lIiwiZGF0ZSIsImNvbnZlcnQiLCJjb252ZXJ0MSIsIkRhdGUiLCJmb3JtYXQiLCJlcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRva2VuQ29va2llIiwiY2hlY2tVc2VyUGVybWlzc2lvbiIsInBlcm1pc3Npb25MaXN0IiwicmVzdWx0IiwibmFtZVBlcm1pc3Npb24iLCJwZXJOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==