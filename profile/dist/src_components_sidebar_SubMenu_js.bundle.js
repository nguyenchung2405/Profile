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
/* harmony import */ var doc_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! doc-cookies */ "webpack/sharing/consume/default/doc-cookies/doc-cookies");
/* harmony import */ var doc_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(doc_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










// import { useSelector } from 'react-redux';





var userPermissionApi = [];
var userPermission = [];
function SubMenu(permission) {
  var _jwt_decode, _jwt_decode2;
  var uri = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_3__.checkMicroFe)() === true ? "profile-service" : "";
  // if (permission !== undefined) {
  //     userPermissionApi = permission[2];
  // }
  // if (uri === "") {
  //     userPermission = useSelector(state => state.permissionReducer.userPermission);
  // }

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
          d: "M4310 4783 c-105 -18 -229 -80 -299 -152 -100 -100 -141 -208 -141\r -367 0 -325 178 -563 452 -605 237 -37 466 112 555 362 22 62 27 96 31 206 4\r 115 1 141 -17 203 -28 93 -70 158 -138 219 -118 105 -295 159 -443 134z m144\r -238 c59 -10 130 -49 165 -92 97 -117 74 -369 -44 -488 -50 -49 -90 -67 -165\r -73 -155 -11 -268 97 -300 288 -26 154 15 267 119 328 45 26 142 53 171 47 8\r -2 33 -6 54 -10z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M2420 4114 c-180 -48 -322 -184 -364 -349 -20 -75 -20 -237 -1 -330\r 22 -106 76 -206 154 -285 101 -103 212 -150 351 -150 139 0 250 47 351 150\r 115 117 169 262 169 454 0 161 -43 276 -141 374 -63 63 -152 113 -245 137 -73\r 19 -201 18 -274 -1z m267 -244 c134 -57 188 -195 149 -375 -35 -164 -137 -260\r -276 -260 -169 0 -288 153 -290 371 -1 219 210 353 417 264z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M655 3474 c-152 -37 -223 -72 -306 -154 -106 -105 -138 -192 -139\r -375 0 -131 18 -213 67 -313 99 -200 318 -319 526 -284 272 47 447 283 447\r 606 0 245 -115 408 -345 492 -64 23 -205 39 -250 28z m140 -239 c84 -14 169\r -80 202 -156 32 -75 23 -232 -19 -327 -29 -64 -90 -126 -150 -152 -42 -18 -65\r -21 -118 -18 -75 6 -115 24 -165 73 -118 119 -141 371 -44 488 17 21 50 47 72\r 59 45 23 142 48 167 43 8 -2 33 -6 55 -10z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M4216 3434 c-164 -41 -310 -142 -385 -266 -40 -68 -58 -135 -115\r -443 -62 -336 -62 -353 4 -398 22 -15 64 -17 403 -17 415 0 421 1 452 60 19\r 37 19 73 0 110 -30 57 -45 60 -365 60 l-290 0 5 23 c2 12 21 110 40 217 40\r 217 63 277 125 334 191 172 563 124 667 -86 14 -27 42 -152 78 -343 31 -164\r 61 -307 66 -316 43 -82 174 -75 209 11 12 30 10 52 -19 214 -73 401 -88 467\r -126 543 -64 129 -192 232 -350 283 -90 29 -308 37 -399 14z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M2425 2786 c-231 -46 -395 -173 -463 -358 -12 -31 -47 -195 -78 -365\r l-57 -307 19 -36 c37 -69 46 -70 444 -69 248 0 365 4 390 12 40 14 80 67 80\r 107 0 40 -40 93 -80 107 -24 8 -125 12 -313 12 l-279 1 6 28 c3 15 22 111 41\r 214 40 210 43 222 85 283 62 91 190 145 340 145 157 0 280 -55 347 -156 37\r -56 46 -92 128 -536 30 -166 44 -191 106 -208 53 -14 106 10 133 60 l19 36\r -57 307 c-60 326 -78 391 -134 475 -69 106 -209 199 -357 237 -86 22 -236 27\r -320 11z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M543 2120 c-200 -52 -350 -178 -412 -345 -18 -49 -131 -623 -131\r -667 0 -32 29 -77 60 -93 24 -13 89 -15 405 -15 334 0 380 2 405 17 73 43 73\r 153 0 196 -24 15 -65 17 -319 17 -160 0 -291 3 -291 7 0 44 86 448 103 481\r 126 254 609 253 731 -1 18 -37 40 -133 76 -327 63 -347 56 -318 95 -357 43\r -43 98 -46 144 -7 56 46 55 64 -5 387 -30 161 -62 316 -71 346 -53 172 -235\r 322 -442 366 -100 21 -258 19 -348 -5z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
          d: "M3738 1879 c-14 -6 -159 -153 -323 -330 l-296 -319 -599 0 c-399 0\r -607 -4 -622 -11 -13 -5 -153 -154 -313 -329 l-290 -319 -590 -1 c-429 -1\r -599 -4 -624 -13 -48 -17 -76 -58 -76 -113 0 -36 6 -49 33 -76 l32 -33 642 -3\r c477 -2 650 0 671 9 16 7 156 152 324 336 l295 323 602 0 602 0 31 23 c17 12\r 156 157 309 322 l278 300 606 5 c679 6 645 2 677 78 13 32 14 42 2 76 -8 22\r -27 49 -42 60 -28 21 -36 21 -665 23 -401 1 -647 -2 -664 -8z"
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
  var getUserId = function getUserId() {
    // console.log(docCookies.getItem("usertoken"))
    if (doc_cookies__WEBPACK_IMPORTED_MODULE_6___default().getItem("emails") && doc_cookies__WEBPACK_IMPORTED_MODULE_6___default().getItem("emails") === "erpmanager@tuoitre.com.vn") {
      return true;
    } else {
      return false;
    }
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
  var items_user = [getItem("Nhân sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdPeopleOutline, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/myprofile/").concat((_jwt_decode2 = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode2 === void 0 ? void 0 : _jwt_decode2.id),
    children: "Th\xF4ng tin c\xE1 nh\xE2n"
  }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_11__.ImProfile, {}))])];

  // const renderSubMenu = () => {
  //     // return items;
  //     let subMenu = [];
  //     let menu_profile = [getItem("Nhân sự", "sub-menu-1", <MdPeopleOutline />, subMenu)];
  //     let subMenu_Per = [];
  //     let menu_permission = [getItem("Quyền", "sub-menu-2", <PermissionMenu />, subMenu_Per)];
  //     if (uri !== "") {
  //         for (let item of userPermissionApi) {
  //             for (let itemHave of item.groups) {
  //                 for (let perUser of itemHave.permission) {
  //                     userPermission.push(perUser.name.toLowerCase())
  //                 }
  //             }
  //         }
  //     }

  //     if (userPermission.length > 0) {
  //         if (uri === "profile-service") {
  //             if (userPermission.includes("xem danh sách user")) {
  //                 subMenu.push(getItem(<Link to={`${uri}/hr/profile`}>Hồ sơ</Link>, "1", <BsFileEarmarkFill />))
  //             }
  //             if (userPermission.includes("xem danh sách phòng ban")) {
  //                 subMenu.push(getItem(<Link to={`${uri}/hr/department`}>Bộ phận công tác</Link>, "2", <FcDepartment />))
  //             }
  //             if (userPermission.includes("xem danh sách chức vụ")) {
  //                 subMenu.push(getItem(<Link to={`${uri}/hr/position`}>Chức danh, chức vụ</Link>, "3", <PositionItem />))
  //             }
  //             if (userPermission.includes("xem danh sách quyền")) {
  //                 subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/manage`}>Quản lý quyền</Link>, "5", <PermissionManagement />))
  //             }
  //             if (userPermission.includes("xem danh sách chức vu đã được gán quyền")) {
  //                 subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/position`}>Quyền chức vụ</Link>, "6", <PermissionPosition />))
  //             }
  //             if (userPermission.includes("xem danh sách chức vụ và phòng ban đã được gán quyền")) {
  //                 subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/department-position`}>Quyền PB - CV</Link>, "7", <PermissionDepPos />))
  //             }
  //             subMenu.push(getItem(<Link to={`${uri}/myprofile/${jwt_decode(TOKEN)?.id}`}>Thông tin cá nhân</Link>, "4", <ImProfile />))
  //             return menu_profile.concat(menu_permission)

  //         } else {

  //             if (userPermission.includes("xem danh sách user")) {
  //                 subMenu.push(getItem(<Link to={`${uri}/hr/profile`}>Hồ sơ</Link>, "1", <BsFileEarmarkFill />))
  //             }
  //             if (userPermission.includes("xem danh sách phòng ban")) {
  //                 subMenu.push(getItem(<Link to={`${uri}/hr/department`}>Bộ phận công tác</Link>, "2", <FcDepartment />))
  //             }
  //             if (userPermission.includes("xem danh sách chức vụ")) {
  //                 subMenu.push(getItem(<Link to={`${uri}/hr/position`}>Chức danh, chức vụ</Link>, "3", <PositionItem />))
  //             }
  //             if (userPermission.includes("xem danh sách quyền")) {
  //                 subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/manage`}>Quản lý quyền</Link>, "5", <PermissionManagement />))
  //             }
  //             if (userPermission.includes("xem danh sách chức vu đã được gán quyền")) {
  //                 subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/position`}>Quyền chức vụ</Link>, "6", <PermissionPosition />))
  //             }
  //             if (userPermission.includes("xem danh sách chức vụ và phòng ban đã được gán quyền")) {
  //                 subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/department-position`}>Quyền PB - CV</Link>, "7", <PermissionDepPos />))
  //             }
  //             subMenu.push(getItem(<Link to={`${uri}/myprofile/${jwt_decode(TOKEN)?.id}`}>Thông tin cá nhân</Link>, "4", <ImProfile />))
  //             subMenu_Per.push(getItem(<Link to={`${uri}/hr/permission/users`}>Quyền cá nhân</Link>, "8", <PermissionMenu />))
  //                 return <div className="sidebar_SubMenu__XZeb6">
  //                     <Menu
  //                         // defaultOpenKeys={[`sub1`]}
  //                         mode='inline'
  //                         items={menu_profile.concat(menu_permission)}
  //                     />
  //                 </div>

  //         }
  //     } else {
  //         if (uri !== "") {
  //             return items_user;
  //         } else {
  //             return <div className="sidebar_SubMenu__XZeb6">
  //                 <Menu
  //                     // defaultOpenKeys={[`sub1`]}
  //                     mode='inline'
  //                     items={menu_profile.concat(menu_permission)}
  //                 />
  //             </div>
  //         }

  //     }
  // }
  var renderSubMenu2 = function renderSubMenu2() {
    if ((0,_ultils_helper__WEBPACK_IMPORTED_MODULE_3__.checkMicroFe)() === true) {
      if (getUserId() === true) {
        return items;
      } else {
        return [getItem("Nhân sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdPeopleOutline, {})), getItem("Quyền", "sub-menu-2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionMenu, {}))];
      }
    }
    // Duoi local profile
    else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu
      // defaultOpenKeys={[`sub1`]}
      , {
        mode: "inline",
        items: items
      });
    }
  };
  return (
    /*#__PURE__*/
    // <>{renderSubMenu()}</>
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: renderSubMenu2()
    })
  );
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
  if (
  // window.location.href.includes("3000") 
  window.location.href.includes("profileservice") || window.location.href.includes("3001")) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDRTtBQUNxQjtBQUNSO0FBQ1U7QUFDTDtBQUNNO0FBQ1Q7QUFDTjtBQUNLO0FBQ3pDO0FBQ3FDO0FBQ1I7QUFBQTtBQUFBO0FBQUE7QUFFN0IsSUFBSVksaUJBQWlCLEdBQUcsRUFBRTtBQUMxQixJQUFJQyxjQUFjLEdBQUcsRUFBRTtBQUNSLFNBQVNDLE9BQU8sQ0FBQ0MsVUFBVSxFQUFFO0VBQUE7RUFDeEMsSUFBSUMsR0FBRyxHQUFHViw0REFBWSxFQUFFLEtBQUssSUFBSSxHQUFHLGlCQUFpQixHQUFHLEVBQUU7RUFDMUQ7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBOztFQUVBLElBQU1XLE9BQU8sR0FBRyxTQUFWQSxPQUFPLENBQUlDLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBSztJQUM1QyxPQUFPO01BQ0hILEtBQUssRUFBTEEsS0FBSztNQUNMQyxHQUFHLEVBQUhBLEdBQUc7TUFDSEMsSUFBSSxFQUFKQSxJQUFJO01BQ0pDLFFBQVEsRUFBUkE7SUFDSixDQUFDO0VBQ0wsQ0FBQztFQUVELElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFZO0lBQUEsb0JBQ2Q7TUFBSyxNQUFNLEVBQUMsY0FBYztNQUFDLElBQUksRUFBQyxjQUFjO01BQUMsS0FBSyxFQUFDLGNBQWM7TUFBQyxPQUFPLEVBQUMsS0FBSztNQUFDLEtBQUssRUFBQyw0QkFBNEI7TUFDaEgsT0FBTyxFQUFDLDJCQUEyQjtNQUNuQyxtQkFBbUIsRUFBQyxlQUFlO01BQUEsdUJBQ25DO1FBQUcsU0FBUyxFQUFDLDBEQUEwRDtRQUFDLE1BQU0sRUFBQyxNQUFNO1FBQUEsd0JBQ2pGO1VBQU0sQ0FBQyxFQUFDO1FBS0MsRUFBRSxlQUNYO1VBQU0sQ0FBQyxFQUFDO1FBSTJDLEVBQUUsZUFDckQ7VUFB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RUFBQztNQUNaO01BQ0EsT0FBTyxJQUFJO01BQ1g7TUFDQTtNQUNBO0lBQ0o7SUFDQTtJQUNBLE9BQU9BLFdBQVc7RUFDdEIsQ0FBQyxDQUFDLE9BQU9ILEtBQUssRUFBRTtJQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3RCO0FBQ0osQ0FBQztBQUVNLElBQUlJLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBbUIsQ0FBSUMsY0FBYyxFQUFzQjtFQUNsRSxJQUFJO0lBQ0EsSUFBSUMsTUFBTSxHQUFHLElBQUk7SUFBQyxrQ0FGMkJDLGNBQWM7TUFBZEEsY0FBYztJQUFBO0lBRzNELG1DQUFtQkEsY0FBYyxxQ0FBQztNQUE5QixJQUFJQyxPQUFPO01BQ1gsSUFBRyxDQUFDSCxjQUFjLENBQUN4RyxRQUFRLENBQUMyRyxPQUFPLENBQUMsRUFBQztRQUNqQ0YsTUFBTSxHQUFHLEtBQUs7TUFDbEI7SUFDSjtJQUNBLE9BQU9BLE1BQU07RUFDakIsQ0FBQyxDQUFDLE9BQU9OLEtBQUssRUFBRTtJQUNaQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0VBQ3RCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy90aXRsZS90aXRsZS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3VsdGlscy9oZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIlxyXG5pbXBvcnQgeyBNZFBlb3BsZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuaW1wb3J0IHsgQnNGaWxlRWFybWFya0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxyXG5pbXBvcnQgeyBGY0RlcGFydG1lbnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIlxyXG5pbXBvcnQgeyBjaGVja01pY3JvRmUgfSBmcm9tICcuLi8uLi91bHRpbHMvaGVscGVyJztcclxuaW1wb3J0IHsgSW1Qcm9maWxlIH0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcclxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcclxuaW1wb3J0IHsgVE9LRU4gfSBmcm9tIFwiLi4vLi4vdGl0bGUvdGl0bGVcIlxyXG4vLyBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IGRvY0Nvb2tpZXMgZnJvbSBcImRvYy1jb29raWVzXCI7XHJcbmltcG9ydCBqd3QgZnJvbSBcImp3dC1kZWNvZGVcIjtcclxuXHJcbmxldCB1c2VyUGVybWlzc2lvbkFwaSA9IFtdXHJcbmxldCB1c2VyUGVybWlzc2lvbiA9IFtdO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJNZW51KHBlcm1pc3Npb24pIHtcclxuICAgIGxldCB1cmkgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwicHJvZmlsZS1zZXJ2aWNlXCIgOiBcIlwiO1xyXG4gICAgLy8gaWYgKHBlcm1pc3Npb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgIHVzZXJQZXJtaXNzaW9uQXBpID0gcGVybWlzc2lvblsyXTtcclxuICAgIC8vIH1cclxuICAgIC8vIGlmICh1cmkgPT09IFwiXCIpIHtcclxuICAgIC8vICAgICB1c2VyUGVybWlzc2lvbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBlcm1pc3Npb25SZWR1Y2VyLnVzZXJQZXJtaXNzaW9uKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBnZXRJdGVtID0gKGxhYmVsLCBrZXksIGljb24sIGNoaWxkcmVuKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgaWNvbixcclxuICAgICAgICAgICAgY2hpbGRyZW5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgUG9zaXRpb25JdGVtID0gKCkgPT4gKFxyXG4gICAgICAgIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiXHJcbiAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XHJcbiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgc3Ryb2tlPVwibm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MzEwIDQ3ODMgYy0xMDUgLTE4IC0yMjkgLTgwIC0yOTkgLTE1MiAtMTAwIC0xMDAgLTE0MSAtMjA4IC0xNDFcclxuICAgICAgICAtMzY3IDAgLTMyNSAxNzggLTU2MyA0NTIgLTYwNSAyMzcgLTM3IDQ2NiAxMTIgNTU1IDM2MiAyMiA2MiAyNyA5NiAzMSAyMDYgNFxyXG4gICAgICAgIDExNSAxIDE0MSAtMTcgMjAzIC0yOCA5MyAtNzAgMTU4IC0xMzggMjE5IC0xMTggMTA1IC0yOTUgMTU5IC00NDMgMTM0eiBtMTQ0XHJcbiAgICAgICAgLTIzOCBjNTkgLTEwIDEzMCAtNDkgMTY1IC05MiA5NyAtMTE3IDc0IC0zNjkgLTQ0IC00ODggLTUwIC00OSAtOTAgLTY3IC0xNjVcclxuICAgICAgICAtNzMgLTE1NSAtMTEgLTI2OCA5NyAtMzAwIDI4OCAtMjYgMTU0IDE1IDI2NyAxMTkgMzI4IDQ1IDI2IDE0MiA1MyAxNzEgNDcgOFxyXG4gICAgICAgIC0yIDMzIC02IDU0IC0xMHpcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0MjAgNDExNCBjLTE4MCAtNDggLTMyMiAtMTg0IC0zNjQgLTM0OSAtMjAgLTc1IC0yMCAtMjM3IC0xIC0zMzBcclxuICAgICAgICAyMiAtMTA2IDc2IC0yMDYgMTU0IC0yODUgMTAxIC0xMDMgMjEyIC0xNTAgMzUxIC0xNTAgMTM5IDAgMjUwIDQ3IDM1MSAxNTBcclxuICAgICAgICAxMTUgMTE3IDE2OSAyNjIgMTY5IDQ1NCAwIDE2MSAtNDMgMjc2IC0xNDEgMzc0IC02MyA2MyAtMTUyIDExMyAtMjQ1IDEzNyAtNzNcclxuICAgICAgICAxOSAtMjAxIDE4IC0yNzQgLTF6IG0yNjcgLTI0NCBjMTM0IC01NyAxODggLTE5NSAxNDkgLTM3NSAtMzUgLTE2NCAtMTM3IC0yNjBcclxuICAgICAgICAtMjc2IC0yNjAgLTE2OSAwIC0yODggMTUzIC0yOTAgMzcxIC0xIDIxOSAyMTAgMzUzIDQxNyAyNjR6XCIvPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk02NTUgMzQ3NCBjLTE1MiAtMzcgLTIyMyAtNzIgLTMwNiAtMTU0IC0xMDYgLTEwNSAtMTM4IC0xOTIgLTEzOVxyXG4gICAgICAgIC0zNzUgMCAtMTMxIDE4IC0yMTMgNjcgLTMxMyA5OSAtMjAwIDMxOCAtMzE5IDUyNiAtMjg0IDI3MiA0NyA0NDcgMjgzIDQ0N1xyXG4gICAgICAgIDYwNiAwIDI0NSAtMTE1IDQwOCAtMzQ1IDQ5MiAtNjQgMjMgLTIwNSAzOSAtMjUwIDI4eiBtMTQwIC0yMzkgYzg0IC0xNCAxNjlcclxuICAgICAgICAtODAgMjAyIC0xNTYgMzIgLTc1IDIzIC0yMzIgLTE5IC0zMjcgLTI5IC02NCAtOTAgLTEyNiAtMTUwIC0xNTIgLTQyIC0xOCAtNjVcclxuICAgICAgICAtMjEgLTExOCAtMTggLTc1IDYgLTExNSAyNCAtMTY1IDczIC0xMTggMTE5IC0xNDEgMzcxIC00NCA0ODggMTcgMjEgNTAgNDcgNzJcclxuICAgICAgICA1OSA0NSAyMyAxNDIgNDggMTY3IDQzIDggLTIgMzMgLTYgNTUgLTEwelwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDIxNiAzNDM0IGMtMTY0IC00MSAtMzEwIC0xNDIgLTM4NSAtMjY2IC00MCAtNjggLTU4IC0xMzUgLTExNVxyXG4gICAgICAgIC00NDMgLTYyIC0zMzYgLTYyIC0zNTMgNCAtMzk4IDIyIC0xNSA2NCAtMTcgNDAzIC0xNyA0MTUgMCA0MjEgMSA0NTIgNjAgMTlcclxuICAgICAgICAzNyAxOSA3MyAwIDExMCAtMzAgNTcgLTQ1IDYwIC0zNjUgNjAgbC0yOTAgMCA1IDIzIGMyIDEyIDIxIDExMCA0MCAyMTcgNDBcclxuICAgICAgICAyMTcgNjMgMjc3IDEyNSAzMzQgMTkxIDE3MiA1NjMgMTI0IDY2NyAtODYgMTQgLTI3IDQyIC0xNTIgNzggLTM0MyAzMSAtMTY0XHJcbiAgICAgICAgNjEgLTMwNyA2NiAtMzE2IDQzIC04MiAxNzQgLTc1IDIwOSAxMSAxMiAzMCAxMCA1MiAtMTkgMjE0IC03MyA0MDEgLTg4IDQ2N1xyXG4gICAgICAgIC0xMjYgNTQzIC02NCAxMjkgLTE5MiAyMzIgLTM1MCAyODMgLTkwIDI5IC0zMDggMzcgLTM5OSAxNHpcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI0MjUgMjc4NiBjLTIzMSAtNDYgLTM5NSAtMTczIC00NjMgLTM1OCAtMTIgLTMxIC00NyAtMTk1IC03OCAtMzY1XHJcbiAgICAgICAgbC01NyAtMzA3IDE5IC0zNiBjMzcgLTY5IDQ2IC03MCA0NDQgLTY5IDI0OCAwIDM2NSA0IDM5MCAxMiA0MCAxNCA4MCA2NyA4MFxyXG4gICAgICAgIDEwNyAwIDQwIC00MCA5MyAtODAgMTA3IC0yNCA4IC0xMjUgMTIgLTMxMyAxMiBsLTI3OSAxIDYgMjggYzMgMTUgMjIgMTExIDQxXHJcbiAgICAgICAgMjE0IDQwIDIxMCA0MyAyMjIgODUgMjgzIDYyIDkxIDE5MCAxNDUgMzQwIDE0NSAxNTcgMCAyODAgLTU1IDM0NyAtMTU2IDM3XHJcbiAgICAgICAgLTU2IDQ2IC05MiAxMjggLTUzNiAzMCAtMTY2IDQ0IC0xOTEgMTA2IC0yMDggNTMgLTE0IDEwNiAxMCAxMzMgNjAgbDE5IDM2XHJcbiAgICAgICAgLTU3IDMwNyBjLTYwIDMyNiAtNzggMzkxIC0xMzQgNDc1IC02OSAxMDYgLTIwOSAxOTkgLTM1NyAyMzcgLTg2IDIyIC0yMzYgMjdcclxuICAgICAgICAtMzIwIDExelwiLz5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTQzIDIxMjAgYy0yMDAgLTUyIC0zNTAgLTE3OCAtNDEyIC0zNDUgLTE4IC00OSAtMTMxIC02MjMgLTEzMVxyXG4gICAgICAgIC02NjcgMCAtMzIgMjkgLTc3IDYwIC05MyAyNCAtMTMgODkgLTE1IDQwNSAtMTUgMzM0IDAgMzgwIDIgNDA1IDE3IDczIDQzIDczXHJcbiAgICAgICAgMTUzIDAgMTk2IC0yNCAxNSAtNjUgMTcgLTMxOSAxNyAtMTYwIDAgLTI5MSAzIC0yOTEgNyAwIDQ0IDg2IDQ0OCAxMDMgNDgxXHJcbiAgICAgICAgMTI2IDI1NCA2MDkgMjUzIDczMSAtMSAxOCAtMzcgNDAgLTEzMyA3NiAtMzI3IDYzIC0zNDcgNTYgLTMxOCA5NSAtMzU3IDQzXHJcbiAgICAgICAgLTQzIDk4IC00NiAxNDQgLTcgNTYgNDYgNTUgNjQgLTUgMzg3IC0zMCAxNjEgLTYyIDMxNiAtNzEgMzQ2IC01MyAxNzIgLTIzNVxyXG4gICAgICAgIDMyMiAtNDQyIDM2NiAtMTAwIDIxIC0yNTggMTkgLTM0OCAtNXpcIi8+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM3MzggMTg3OSBjLTE0IC02IC0xNTkgLTE1MyAtMzIzIC0zMzAgbC0yOTYgLTMxOSAtNTk5IDAgYy0zOTkgMFxyXG4gICAgICAgIC02MDcgLTQgLTYyMiAtMTEgLTEzIC01IC0xNTMgLTE1NCAtMzEzIC0zMjkgbC0yOTAgLTMxOSAtNTkwIC0xIGMtNDI5IC0xXHJcbiAgICAgICAgLTU5OSAtNCAtNjI0IC0xMyAtNDggLTE3IC03NiAtNTggLTc2IC0xMTMgMCAtMzYgNiAtNDkgMzMgLTc2IGwzMiAtMzMgNjQyIC0zXHJcbiAgICAgICAgYzQ3NyAtMiA2NTAgMCA2NzEgOSAxNiA3IDE1NiAxNTIgMzI0IDMzNiBsMjk1IDMyMyA2MDIgMCA2MDIgMCAzMSAyMyBjMTcgMTJcclxuICAgICAgICAxNTYgMTU3IDMwOSAzMjIgbDI3OCAzMDAgNjA2IDUgYzY3OSA2IDY0NSAyIDY3NyA3OCAxMyAzMiAxNCA0MiAyIDc2IC04IDIyXHJcbiAgICAgICAgLTI3IDQ5IC00MiA2MCAtMjggMjEgLTM2IDIxIC02NjUgMjMgLTQwMSAxIC02NDcgLTIgLTY2NCAtOHpcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgIClcclxuXHJcbiAgICBjb25zdCBQZXJtaXNzaW9uTWVudSA9ICgpID0+IChcclxuICAgICAgICA8c3ZnIGhlaWdodD1cIjFlbVwiIHdpZHRoPVwiMWVtXCIgY2xhc3NOYW1lPSdhbnQtbWVudS1pdGVtLWljb24nIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG4gICAgICAgICAgICA8Zz48cGF0aCBkPVwiTTIxMS4xLDk5MGwtODkuNi0xLjRjLTE1LjUsMC0yMi4yLTEzLjctMjguNS0zOC40bC0xLjMsMC4ybC0zLTE3LjFjLTAuMy0xLjYtMC41LTMtMC43LTQuNGwtMC4zLTEuN2wwLjEsMGwtNy41LTQyLjZjLTMuOC0yMiwyLjktNTIuNCwxNS41LTcwLjhMMzU2LjMsNDM4Yy0xNy4zLTM3LjItMzEtODMuNy0zNi4xLTExMy4xYy0yOS0xNjYuNCwxMTIuNC0yODQuMSwyNjAuMS0zMTAuNWMxNi43LTMsMzMuNy00LjUsNTAuNC00LjVDNzcxLjEsMTAsODkwLjYsMTExLjQsOTE1LDI1MS4xYzI2LjEsMTQ5LjItMzUuMSwzMjMuNi0xOTkuOSwzNTNjLTIxLjYsMy45LTUwLDYuMS03Ny45LDYuMWgwYy0xNy43LDAtMzQuNC0wLjktNDktMi43TDQ2NS41LDgwMC4xbC05Mi4yLTcuMkwyNzMuMSw5NDkuNGMtMTIuMiwxOS4xLTM4LjEsMzYuNC02MC4yLDQwLjNMMjExLjEsOTkweiBNMTMyLjcsOTUxLjFsNzUuMiwxLjFjMTEuNS0yLjcsMjcuMy0xMy41LDMzLjQtMjMuMmwxMDYuOC0xNjYuN2w2LjItNy43bDEwLjctMC4zbDgwLjgsNi4zbDEyMy44LTE5NC4ybDEyLjMsMi4xYzE1LjEsMi42LDM0LjIsNCw1NS4xLDRoMGMyNS40LDAsNTItMi4xLDcxLjMtNS41Qzg0OS4zLDU0Miw5MDAuOCwzODguOSw4NzcuOCwyNTcuNkM4NTYuNiwxMzYsNzUyLjcsNDcuNyw2MzAuNyw0Ny43Yy0xNC42LDAtMjkuMywxLjMtNDMuOCwzLjlDNDU3LDc0LjcsMzMyLjQsMTc2LjEsMzU3LjMsMzE4LjVjNS4xLDI5LjQsMTkuNyw3Ny41LDM3LjYsMTEyLjdsNS4xLDEwbC0yNzMuMSwzOTRjLTcsMTAuMi0xMS41LDMwLjYtOS40LDQyLjlsNy40LDQyLjJjMC4xLDAuNiwwLjMsMS4zLDAuNSwyQzEyOC42LDkzNy4zLDEzMSw5NDYuMSwxMzIuNyw5NTEuMXogTTcyMiwzNzguMmMtMjksMC01Ni4yLTE5LjgtODcuNi00Mi44Yy01LjktNC4zLTEyLTguOC0xOC4zLTEzLjNjLTYuMy00LjQtMTIuNS04LjctMTguNS0xMi44QzU2MiwyODUsNTMxLjMsMjY0LDUyNS4zLDIzMS4zYy0zLjUtMTguOCwyLTM4LjMsMTYuNi01OS40YzI3LjQtMzkuNSw3Mi4zLTYzLjEsMTIwLjEtNjMuMWMzMC4xLDAsNTkuMiw5LjMsODMuOSwyNi44YzY2LjEsNDYuNyw4Mi4yLDEzOC45LDM1LjksMjA1LjZDNzY0LjUsMzY2LjEsNzQ0LjksMzc4LjIsNzIyLDM3OC4yeiBNNjYyLDE0Ni41Yy0zNS40LDAtNjguOCwxNy41LTg5LjEsNDYuOWMtOC42LDEyLjUtMTIuMSwyMi42LTEwLjUsMzEuMWMzLjIsMTcuMywyNy45LDM0LjIsNTYuNSw1My44YzYuMiw0LjIsMTIuNiw4LjYsMTksMTMuMmM2LjUsNC42LDEyLjgsOS4yLDE4LjgsMTMuNmMyNSwxOC4zLDQ4LjYsMzUuNSw2NS4zLDM1LjVjNi4yLDAsMTUuOS0yLjIsMjguOS0yMC44YzM0LjUtNDkuNywyMi41LTExOC41LTI2LjctMTUzLjNDNzA1LjcsMTUzLjQsNjg0LjMsMTQ2LjUsNjYyLDE0Ni41elwiIC8+PC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IFBlcm1pc3Npb25Qb3NpdGlvbiA9ICgpID0+IChcclxuICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG4gICAgICAgICAgICA8Zz48cGF0aCBkPVwiTTYwMS44LDQyMy4yYzQwLjgtMTcuMiw4My44LTI2LDEyOC40LTI2YzQuNCwwLDguOCwwLjIsMTMuMiwwLjJjMjAuOS01Mi44LDI2LjItMTE1LjIsMTUuNy0xNzUuOUM3MzQuOSw4Mi4zLDYwMy42LTEwLjcsNDY1LjYsMTMuOEMzMjcuNywzOC4zLDIxMS40LDE0NS41LDIzNS45LDI4NC42YzUuMiwzMC4xLDE5LjcsNzYuOSwzNi45LDExMC44TDIyLjUsNzU2LjZjLTkuMiwxMy4yLTE0LjUsMzcuMS0xMS43LDUzLjRsMTAuOSw2MS44Yy0xMC4zLTU5LjUsMi45LDIxLjQsMTAuOSwyMS4ybDgyLjUsMS4xYzE1LjktMi45LDM1LjgtMTYuMyw0NC42LTI5LjlsOTktMTU0LjhsMS0xbDg2LjUsNi45bDExNS42LTE4MS4zYzAuNCwwLDAuOCwwLjIsMS4xLDAuMmMxMC4zLTE0LjIsMjEuNi0yNy42LDM0LjMtNDAuMkM1MjcuMiw0NjMuNiw1NjIuNiw0MzkuOCw2MDEuOCw0MjMuMnogTTc2LjYsNzk0LjdsLTEyLjMsNS4ybDEuMy0xMy40bDIzOS44LTM0OC4ybDE0LjQsMTMuNEw3Ni42LDc5NC43eiBNNDQxLjEsMTU0LjFjMzcuOS01NC42LDExMi41LTY4LjEsMTY2LjUtMjkuN2M1NC4yLDM4LjUsNjcuNCwxMTMuOSwyOS41LDE2OC40Yy0zNy45LDU0LjUtNzYuNiwxNi4xLTEzMC43LTIyLjJDNDUyLjMsMjMyLjIsNDAzLjIsMjA4LjgsNDQxLjEsMTU0LjF6XCIgLz48cGF0aCBkPVwiTTcyNyw0NjQuMmMtMTQ1LjMsMC0yNjMsMTE3LjctMjYzLDI2M3MxMTcuNywyNjMsMjYzLDI2M2MxNDUuMywwLDI2My0xMTcuNywyNjMtMjYzQzk5MCw1ODEuOSw4NzIuMyw0NjQuMiw3MjcsNDY0LjJ6IE04NzksODM1LjFjMCwzOS4yLTc1LjIsNDguMi0xNDUuOCw0OC4yYy03MC42LDAtMTQ2LjgtOS0xNDYuOC00OC4ydi0xMC45YzAtMjguOSw1Mi4xLTU4LjIsOTYuMy03NC4xYzMuMy0xLjEsMTguNi05LjYsMTAtMzJjLTIyLTIyLjQtMzguNS01OC44LTM4LjUtOTQuNmMwLTU0LjcsMzYuMi04My41LDc4LjctODMuNWM0Mi4zLDAsNzguOSwyOC43LDc4LjksODMuNWMwLDM1LjYtMTYuNyw3MS44LTM4LjUsOTQuNGgwLjJjLTguNCwyNS41LDUsMzEuNiw3LjEsMzIuMmM0Ni41LDE1LjMsOTguOCw0NC40LDk4LjgsNzQuMUw4NzksODM1LjFMODc5LDgzNS4xelwiIC8+PC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IFBlcm1pc3Npb25EZXBQb3MgPSAoKSA9PiAoXHJcbiAgICAgICAgPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDEwMDAgMTAwMFwiIHhtbFNwYWNlPVwicHJlc2VydmVcIj5cclxuICAgICAgICAgICAgPGc+PHBhdGggZD1cIk00NDYuMSwxNTQuOWMzOC41LTU0LjYsMTE0LjEtNjguNiwxNjguNy0zMC4xYzU0LjYsMzkuMiw2OCwxMTQuNywyOS40LDE2OS40Yy0zNy44LDU1LjMtNzcsMTYuMS0xMzIuNC0yMi40QzQ1Ny4yLDIzMy4yLDQwNy41LDIxMC4xLDQ0Ni4xLDE1NC45eiBNNzcuMiw3OTguOGwtMTEuOSw0LjlsMS41LTEzLjNsMjQyLjEtMzUwbDE0LjcsMTMuM0w3Ny4yLDc5OC44eiBNNDY4LjUsNTM2LjljMTAuNS0xMy45LDIxLjctMjcuMiwzNC4zLTQwLjVjMzAuOC0zMC4yLDY2LjUtNTQuNiwxMDUuNy03MC44YzQxLjMtMTcuNSw4NS40LTI2LjUsMTMwLjItMjYuNWgxMy4zYzIxLjEtNTIuNCwyNi43LTExNS41LDE2LjItMTc2LjRDNzQzLjYsODIuOCw2MTAuNi0xMSw0NzAuNiwxNC4yQzMzMS4zLDM4LjcsMjEzLjgsMTQ2LjUsMjM4LjEsMjg2LjRjNS43LDMwLjEsMjAuMyw3NywzNy44LDExMS4zTDIyLjYsNzYwLjRjLTkuMSwxMy4zLTE0LjcsMzcuNy0xMS45LDUzLjhMMjIsODc2LjVjLTIuOS0xNi4xLTQuMi0yMi4zLTQuMi0yMi4zYzAuNywwLDksNDMuMywxNS40LDQzLjNsODMuMywxLjVjMTYuMS0yLjgsMzYuNC0xNi4xLDQ0LjgtMzAuMmwxMDAtMTU1LjNsMS41LTEuNWw4Ny40LDcuMWwxMTYuOS0xODIuMUg0NjguNXogTTgxMy42LDc2NC40Yy0yMC40LDQ3LjctNzUuNiw3MC0xMjMuOSw1MC41Yy00OC40LTIwLjMtNzAuNy03NS42LTUwLjQtMTIzLjNjMTkuNi00OC4zLDc1LjYtNzAuNywxMjMuMi01MC40QzgxMC43LDY2MS42LDgzMy44LDcxNi4yLDgxMy42LDc2NC40eiBNOTIwLjYsNjk5LjNsNjkuNC00My4zbC0yNS45LTYyLjNsLTc5LjIsMTguOGMtMTEuMi0xNi4xLTI1LjItMjkuNC00MS4yLTQxLjNsMTguMi03OWwtNjMuMS0yNmwtNDIuNiw2OGMtMTkuNi0yLjgtMzkuMi0yLjgtNTguMSwwbC00Mi44LTY4LjZsLTYyLjksMjUuMmwxNy41LDc5LjJjLTE2LjEsMTEuMi0zMC4yLDI1LjEtNDIsNDAuNmwtNzguNC0xOC4ybC0yNi42LDYyLjNsNjcuOSw0My40Yy0yLjcsMTkuNS0yLjcsMzkuMiwwLDU4LjFsLTY4LjYsNDIuN2wyNS45LDYyLjNsNzkuMi0xNy41YzExLjIsMTUuNCwyNS4yLDI5LjQsNDEuMiw0MS4ybC0xOC44LDc4LjVsNjIuOSwyNS45bDQ0LjItNjhjMTkuNiwyLjksMzkuMiwyLjksNTguMSwwbDQzLjMsNjguN2w2My0yNS45TDg0Myw4ODQuOWMxNS40LTExLjIsMjguNy0yNC40LDQwLjYtNDAuNmw3OS43LDE4LjJsMjYuNi02Mi4zbC02OS40LTQyLjdDOTIzLjQsNzM3LjksOTIzLjQsNzE5LDkyMC42LDY5OS4zelwiIC8+PC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IFBlcm1pc3Npb25NYW5hZ2VtZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCJcclxuICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxyXG4gICAgICAgICAgICA8Zz48cGF0aCBkPVwiTTk2OC45LDQ4MS40Yy0xLjMsMTAuNS0yLjksMjEuNC01LDMxLjhsLTUuMiwyNC44bC0yNS4zLTEuMWMtMy4zLTAuMS02LjYtMC4yLTEwLTAuMmMtNzIuMiwwLTE0MC42LDMzLjYtMTkzLjYsODFjLTQuMywzLjgtOC45LDkuOS0xMi40LDE0LjVjLTYuOSw4LjktMTMuNSwxOC4yLTE5LjksMjcuNGMtMTcuNCwyNC45LTM0LjIsNTAuMy01MC43LDc1LjhjLTE2LjcsMjUuNy0zMy4xLDUxLjYtNDkuMyw3Ny42bC05LjUsMTUuM2wtODAuNi01LjVMNDA1LjMsOTczLjJsLTcuNSwzLjVDMzczLjcsOTg3LjksMzQwLDk5MCwzMTMuNiw5OTBjLTkuOSwwLTIwLTAuMi0yOS45LTFsLTE3LjctMS40bC03LjMtMTYuMmMtMTQuMy0zMS44LTE5LjItNzAuOC0yMi4zLTEwNS4yYy0wLjItMS45LTAuMy0zLjktMC41LTUuOGMtMC40LTIuMy0wLjYtNC43LTAuNC03bC0yMy40LDM0LjVsLTkuOSw0LjZjLTI1LjYsMTItNjAuMywxNC4yLTg4LjIsMTQuMmMtMTAuMSwwLTIwLjUtMC4yLTMwLjYtMWwtMjMuMy0xLjhsLTkuNi0yMS4zYy0xNC43LTMyLjktMTkuOS03Mi43LTIzLjEtMTA4LjNjLTAuMi0xLjctMC4zLTMuNS0wLjUtNS4zYy0zLTE3LjcsNi42LTMwLjYsMTUuOC00NC43YzktMTMuOCwxOC4yLTI3LjUsMjcuNC00MS4xYzI3LjMtNDAuMyw1NS04MC40LDgyLjctMTIwLjRjMzUuNi01MS40LDcxLjQtMTAyLjcsMTA3LjItMTU0Yy0yMC42LTQ2LjMtMzIuNC05Ny4xLTI5LTE0OGMxLjQtMjAuNyw2LTQ3LjcsMTUtNjYuOWMzMS4xLTY2LjIsNzguNC0xMTkuNiwxNDQuNC0xNTJDNDM0LDIwLjYsNDgyLjcsMTAsNTMxLDEwYzEzLjEsMCwyNi45LDAuNywzOS45LDIuOGM2NiwxMC45LDEyMS4zLDQyLjMsMTU5LjIsOTcuOGMwLjQsMC42LDAuOCwxLjEsMS4xLDEuN2MxMi40LDAsMjUuNCwwLjcsMzcuNiwyLjdjNjMuNCwxMC41LDExNi40LDQwLjQsMTUyLjksOTMuOGMzOS4zLDU3LjQsNTEuNiwxMjkuNyw1MS44LDE5OC4xQzk3My42LDQzMS44LDk3Miw0NTYuOCw5NjguOSw0ODEuNHogTTU2MS4xLDcxLjhjLTIuOS0wLjUtMTMuNy0yLTMwLjEtMmMtNTkuOSwwLTE2OS42LDE5LjQtMjMwLjcsMTQ5LjZjLTAuMywwLjctOC40LDE5LjItOS43LDUwLjVjLTEuMiwyOS4zLDMuNiw3Ni4zLDMzLjIsMTMzLjNsNS43LDEwLjlsLTcuMSwxMC4xQzIzOS4zLDU0Mi44LDEwNi45LDczMy40LDg2LjksNzY2LjRjMC4xLDAuOCwwLjEsMS42LDAuMiwyLjZjMS40LDE1LjksNC41LDUwLjQsMTMuNyw3Ny44YzMuOCwwLjEsOC40LDAuMiwxMy4zLDAuMmMyNS4yLDAsNDUuNS0yLjQsNTguMi02LjdsMTEwLjItMTYyLjNsNjMuMiw0LjNjNC45LTcuMSw5LjgtMTQuMSwxNC43LTIxLjJjMzYuNi01Mi45LDczLjQtMTA1LjcsMTEwLjMtMTU4LjRjLTIxLjQtNDYuMi0zMy44LTk3LjItMzAuNC0xNDguM2MxLTE1LDMuNC0zMC4xLDcuNC00NC41Yy0zLjQtMi44LTYuOS01LjUtMTAuMy04LjNjLTIzLjEtMTguNS01NS4xLTQxLjYtNTcuNy03My42Yy0xLjItMTQuOCwzLjgtMjguOCwxMy44LTM5LjhjMzguMi00Mi41LDk0LjEtNzQuMiwxNTIuMy03NC4yYzI1LjYsMCw1MC40LDYuMiw3MS44LDE5LjRjMTQtNS40LDI4LjQtOS44LDQzLjEtMTMuMUM2MzUsOTQuNyw2MDEuNyw3OC41LDU2MS4xLDcxLjh6IE00NzQuMSwyNTQuM2MxOS4zLTMxLjIsNDMtNTguNSw3MS43LTgwLjdjLTM1LjgsMC03NC43LDE5LjEtMTA0LjksNTEuMkM0NDYuMywyMzIsNDYxLjksMjQ0LjYsNDc0LjEsMjU0LjN6IE04ODAuMiwyMzcuMWMtMjctMzkuNS02Ny4zLTYzLjktMTE5LjUtNzIuNWMtMi45LTAuNS0xMy43LTItMzAuMS0yYy01OS45LDAtMTY5LjYsMTkuNC0yMzAuNywxNDkuNmMtMC4zLDAuNy04LjQsMTkuMi05LjcsNTAuNWMtMS4yLDI5LjMsMy42LDc2LjMsMzMuMiwxMzMuM2w1LjcsMTAuOWwtNy4xLDEwLjFjLTgzLjEsMTE4LjYtMjE1LjUsMzA5LjItMjM1LjUsMzQyLjJjMC4xLDAuOCwwLjEsMS42LDAuMiwyLjZjMS40LDE1LjksNC41LDUwLjQsMTMuNyw3Ny44YzMuOCwwLjEsOC40LDAuMiwxMy4zLDAuMmMyNS4yLDAsNDUuNS0yLjQsNTguMi02LjdsMTEwLjItMTYyLjNsNzkuMyw1LjRjMjUuNS00MC44LDEwOC42LTE3Mi4zLDEzNS0xOTUuOGMzOC40LTM0LjQsMTE3LjctOTEuNSwyMjEuMS05My43QzkyNCw0NDIuNCw5MzUuOCwzMTguMiw4ODAuMiwyMzcuMXogTTgxMi4yLDQ3Ny4yYy04LjcsOS43LTIwLjIsMTUuMy0zMy4zLDE1LjNjLTIuNCwwLTQuOC0wLjItNy4yLTAuNmMtMTItMS45LTIyLjMtOC4zLTMxLjYtMTUuOWMtMTAuOC04LjgtMjAuNy0xOS4zLTMwLjQtMjkuM2MtMTAuNy0xMS4xLTIxLjQtMjIuMi0zMi45LTMyLjVjLTExLTkuOC0yMi40LTE5LjEtMzMuOS0yOC4zYy0xMS42LTkuMy0yMy44LTE4LjgtMzQuMS0yOS40Yy04LjctOC45LTE2LjQtMTkuMy0xOS4xLTMxLjdjLTAuNC0xLjktMC43LTMuOS0wLjktNS45Yy0xLTEyLjIsMy4yLTIzLjYsMTEuNC0zMi43YzM2LjMtNDAuNCw4OS43LTcxLDE0NS4yLTcxYzMwLjcsMCw2MC4xLDkuNSw4My4xLDMwLjJjMzEuMiwyOCw0Mi44LDcwLjIsMzkuMSwxMTFDODYzLjQsNDAxLjUsODQyLjEsNDQ0LDgxMi4yLDQ3Ny4yeiBNNzk0LjgsMjgzYy0xMi42LTExLjQtMjkuOC0xNy40LTQ5LjYtMTcuNGMtMzUuOCwwLTc0LjcsMTkuMS0xMDQuOSw1MS4yYzUuNiw3LjMsMjEuNywyMC4yLDMzLjksMzBjMTEuMSw4LjksMjMuNiwxOC45LDM2LjEsMzAuMWMxMy4zLDEyLDI1LjEsMjQuMiwzNS41LDM1YzEwLjMsMTAuNiwyMy44LDI0LjcsMzEuMiwyOS4yYzIzLjMtMjYuOCwzNy42LTU4LjMsNDAuNC04OUM4MjAuMSwzMjMsODEyLjEsMjk4LjUsNzk0LjgsMjgzeiBNNTYyLjcsNTkzLjRMNTYyLjcsNTkzLjRMNDEzLjgsODAyYy0wLjEsMC4xLTAuMSwwLjItMC4yLDAuM2MtOS44LDEzLjUtMjksMTkuMy00My4zLDkuMmMtMTQuMy0xMC4yLTE1LjEtMzAuMy01LjMtNDRsMTQ5LjItMjA4LjljOS43LTEzLjYsMjkuMS0xOS41LDQzLjQtOS4zYzE0LjMsMTAuMiwxNS4xLDMwLjMsNS4zLDQ0TDU2Mi43LDU5My40eiBNMzgyLjksNTA4LjlsLTAuMywwLjRsMCwwLjFMMjMzLjgsNzE3LjhjLTAuMSwwLjEtMC4xLDAuMi0wLjIsMC4zYy0xMi45LDE3LjgtMzgsMjQuNi01Ni42LDExLjNjLTE4LjctMTMuMy0yMC40LTM5LjMtNy41LTU3LjRsMTQ5LjItMjA4LjljMTIuOC0xNy45LDM4LjEtMjQuOCw1Ni43LTExLjVDMzk0LDQ2NC45LDM5NS44LDQ5MC45LDM4Mi45LDUwOC45elwiIC8+PC9nPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0VXNlcklkID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRvY0Nvb2tpZXMuZ2V0SXRlbShcInVzZXJ0b2tlblwiKSlcclxuICAgICAgICBpZiAoZG9jQ29va2llcy5nZXRJdGVtKFwiZW1haWxzXCIpICYmIGRvY0Nvb2tpZXMuZ2V0SXRlbShcImVtYWlsc1wiKT09PVwiZXJwbWFuYWdlckB0dW9pdHJlLmNvbS52blwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgIGdldEl0ZW0oXCJOaMOibiBz4buxXCIsIFwic3ViLW1lbnUtMVwiLCA8TWRQZW9wbGVPdXRsaW5lIC8+LCBbXHJcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcHJvZmlsZWB9Pkjhu5Mgc8ahPC9MaW5rPiwgXCIxXCIsIDxCc0ZpbGVFYXJtYXJrRmlsbCAvPiksXHJcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvZGVwYXJ0bWVudGB9PkLhu5kgcGjhuq1uIGPDtG5nIHTDoWM8L0xpbms+LCBcIjJcIiwgPEZjRGVwYXJ0bWVudCAvPiksXHJcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcG9zaXRpb25gfT5DaOG7qWMgZGFuaCwgY2jhu6ljIHbhu6U8L0xpbms+LCBcIjNcIiwgPFBvc2l0aW9uSXRlbSAvPiksXHJcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vbXlwcm9maWxlLyR7and0X2RlY29kZShUT0tFTik/LmlkfWB9PlRow7RuZyB0aW4gY8OhIG5ow6JuPC9MaW5rPiwgXCI0XCIsIDxJbVByb2ZpbGUgLz4pLFxyXG4gICAgICAgIF0pLFxyXG4gICAgICAgIGdldEl0ZW0oXCJRdXnhu4FuXCIsIFwic3ViLW1lbnUtMlwiLCA8UGVybWlzc2lvbk1lbnUgLz4sIFtcclxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL21hbmFnZWB9PlF14bqjbiBsw70gcXV54buBbjwvTGluaz4sIFwiNVwiLCA8UGVybWlzc2lvbk1hbmFnZW1lbnQgLz4pLFxyXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vcG9zaXRpb25gfT5RdXnhu4FuIGNo4bupYyB24bulPC9MaW5rPiwgXCI2XCIsIDxQZXJtaXNzaW9uUG9zaXRpb24gLz4pLFxyXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vZGVwYXJ0bWVudC1wb3NpdGlvbmB9PlF1eeG7gW4gUEIgLSBDVjwvTGluaz4sIFwiN1wiLCA8UGVybWlzc2lvbkRlcFBvcyAvPiksXHJcbiAgICAgICAgXSlcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgaXRlbXNfdXNlciA9IFtcclxuICAgICAgICBnZXRJdGVtKFwiTmjDom4gc+G7sVwiLCBcInN1Yi1tZW51LTFcIiwgPE1kUGVvcGxlT3V0bGluZSAvPiwgW1xyXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L215cHJvZmlsZS8ke2p3dF9kZWNvZGUoVE9LRU4pPy5pZH1gfT5UaMO0bmcgdGluIGPDoSBuaMOibjwvTGluaz4sIFwiNFwiLCA8SW1Qcm9maWxlIC8+KSxcclxuICAgICAgICBdKVxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBjb25zdCByZW5kZXJTdWJNZW51ID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIC8vIHJldHVybiBpdGVtcztcclxuICAgIC8vICAgICBsZXQgc3ViTWVudSA9IFtdO1xyXG4gICAgLy8gICAgIGxldCBtZW51X3Byb2ZpbGUgPSBbZ2V0SXRlbShcIk5ow6JuIHPhu7FcIiwgXCJzdWItbWVudS0xXCIsIDxNZFBlb3BsZU91dGxpbmUgLz4sIHN1Yk1lbnUpXTtcclxuICAgIC8vICAgICBsZXQgc3ViTWVudV9QZXIgPSBbXTtcclxuICAgIC8vICAgICBsZXQgbWVudV9wZXJtaXNzaW9uID0gW2dldEl0ZW0oXCJRdXnhu4FuXCIsIFwic3ViLW1lbnUtMlwiLCA8UGVybWlzc2lvbk1lbnUgLz4sIHN1Yk1lbnVfUGVyKV07XHJcbiAgICAvLyAgICAgaWYgKHVyaSAhPT0gXCJcIikge1xyXG4gICAgLy8gICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHVzZXJQZXJtaXNzaW9uQXBpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBpdGVtSGF2ZSBvZiBpdGVtLmdyb3Vwcykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGZvciAobGV0IHBlclVzZXIgb2YgaXRlbUhhdmUucGVybWlzc2lvbikge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB1c2VyUGVybWlzc2lvbi5wdXNoKHBlclVzZXIubmFtZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICAgICAgaWYgKHVyaSA9PT0gXCJwcm9maWxlLXNlcnZpY2VcIikge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggdXNlclwiKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN1Yk1lbnUucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Byb2ZpbGVgfT5I4buTIHPGoTwvTGluaz4sIFwiMVwiLCA8QnNGaWxlRWFybWFya0ZpbGwgLz4pKVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggcGjDsm5nIGJhblwiKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN1Yk1lbnUucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL2RlcGFydG1lbnRgfT5C4buZIHBo4bqtbiBjw7RuZyB0w6FjPC9MaW5rPiwgXCIyXCIsIDxGY0RlcGFydG1lbnQgLz4pKVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggY2jhu6ljIHbhu6VcIikpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wb3NpdGlvbmB9PkNo4bupYyBkYW5oLCBjaOG7qWMgduG7pTwvTGluaz4sIFwiM1wiLCA8UG9zaXRpb25JdGVtIC8+KSlcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIHF1eeG7gW5cIikpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdWJNZW51X1Blci5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9tYW5hZ2VgfT5RdeG6o24gbMO9IHF1eeG7gW48L0xpbms+LCBcIjVcIiwgPFBlcm1pc3Npb25NYW5hZ2VtZW50IC8+KSlcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB2dSDEkcOjIMSRxrDhu6NjIGfDoW4gcXV54buBblwiKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN1Yk1lbnVfUGVyLnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL3Bvc2l0aW9uYH0+UXV54buBbiBjaOG7qWMgduG7pTwvTGluaz4sIFwiNlwiLCA8UGVybWlzc2lvblBvc2l0aW9uIC8+KSlcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB24bulIHbDoCBwaMOybmcgYmFuIMSRw6MgxJHGsOG7o2MgZ8OhbiBxdXnhu4FuXCIpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vZGVwYXJ0bWVudC1wb3NpdGlvbmB9PlF1eeG7gW4gUEIgLSBDVjwvTGluaz4sIFwiN1wiLCA8UGVybWlzc2lvbkRlcFBvcyAvPikpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9teXByb2ZpbGUvJHtqd3RfZGVjb2RlKFRPS0VOKT8uaWR9YH0+VGjDtG5nIHRpbiBjw6EgbmjDom48L0xpbms+LCBcIjRcIiwgPEltUHJvZmlsZSAvPikpXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gbWVudV9wcm9maWxlLmNvbmNhdChtZW51X3Blcm1pc3Npb24pXHJcblxyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIHVzZXJcIikpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wcm9maWxlYH0+SOG7kyBzxqE8L0xpbms+LCBcIjFcIiwgPEJzRmlsZUVhcm1hcmtGaWxsIC8+KSlcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIHBow7JuZyBiYW5cIikpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9kZXBhcnRtZW50YH0+QuG7mSBwaOG6rW4gY8O0bmcgdMOhYzwvTGluaz4sIFwiMlwiLCA8RmNEZXBhcnRtZW50IC8+KSlcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGlmICh1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB24bulXCIpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3ViTWVudS5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcG9zaXRpb25gfT5DaOG7qWMgZGFuaCwgY2jhu6ljIHbhu6U8L0xpbms+LCBcIjNcIiwgPFBvc2l0aW9uSXRlbSAvPikpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBxdXnhu4FuXCIpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vbWFuYWdlYH0+UXXhuqNuIGzDvSBxdXnhu4FuPC9MaW5rPiwgXCI1XCIsIDxQZXJtaXNzaW9uTWFuYWdlbWVudCAvPikpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBjaOG7qWMgdnUgxJHDoyDEkcaw4bujYyBnw6FuIHF1eeG7gW5cIikpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBzdWJNZW51X1Blci5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9wb3NpdGlvbmB9PlF1eeG7gW4gY2jhu6ljIHbhu6U8L0xpbms+LCBcIjZcIiwgPFBlcm1pc3Npb25Qb3NpdGlvbiAvPikpXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBjaOG7qWMgduG7pSB2w6AgcGjDsm5nIGJhbiDEkcOjIMSRxrDhu6NjIGfDoW4gcXV54buBblwiKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHN1Yk1lbnVfUGVyLnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL2RlcGFydG1lbnQtcG9zaXRpb25gfT5RdXnhu4FuIFBCIC0gQ1Y8L0xpbms+LCBcIjdcIiwgPFBlcm1pc3Npb25EZXBQb3MgLz4pKVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgc3ViTWVudS5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vbXlwcm9maWxlLyR7and0X2RlY29kZShUT0tFTik/LmlkfWB9PlRow7RuZyB0aW4gY8OhIG5ow6JuPC9MaW5rPiwgXCI0XCIsIDxJbVByb2ZpbGUgLz4pKVxyXG4gICAgLy8gICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vdXNlcnNgfT5RdXnhu4FuIGPDoSBuaMOibjwvTGluaz4sIFwiOFwiLCA8UGVybWlzc2lvbk1lbnUgLz4pKVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfU3ViTWVudV9fWFplYjZcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17W2BzdWIxYF19XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPSdpbmxpbmUnXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17bWVudV9wcm9maWxlLmNvbmNhdChtZW51X3Blcm1pc3Npb24pfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgaWYgKHVyaSAhPT0gXCJcIikge1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGl0ZW1zX3VzZXI7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgPE1lbnVcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdE9wZW5LZXlzPXtbYHN1YjFgXX1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpdGVtcz17bWVudV9wcm9maWxlLmNvbmNhdChtZW51X3Blcm1pc3Npb24pfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8+XHJcbiAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgY29uc3QgcmVuZGVyU3ViTWVudTIgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoY2hlY2tNaWNyb0ZlKCkgPT09IHRydWUgKXtcclxuICAgICAgICAgICAgaWYoIGdldFVzZXJJZCgpPT09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcblxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHJldHVybiAgW2dldEl0ZW0oXCJOaMOibiBz4buxXCIsIFwic3ViLW1lbnUtMVwiLCA8TWRQZW9wbGVPdXRsaW5lIC8+KSxnZXRJdGVtKFwiUXV54buBblwiLCBcInN1Yi1tZW51LTJcIiwgPFBlcm1pc3Npb25NZW51IC8+KV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEdW9pIGxvY2FsIHByb2ZpbGVcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdE9wZW5LZXlzPXtbYHN1YjFgXX1cclxuICAgICAgICAgICAgICAgIG1vZGU9J2lubGluZSdcclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIC8vIDw+e3JlbmRlclN1Yk1lbnUoKX08Lz5cclxuICAgICAgICA8PntyZW5kZXJTdWJNZW51MigpfTwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IGNoZWNrTWljcm9GZSwgZ2V0VG9rZW5JbkNvb2tpZSB9IGZyb20gXCIuLi91bHRpbHMvaGVscGVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVE9LRU4gPSBnZXRUb2tlbkluQ29va2llKCk7XHJcblxyXG5leHBvcnQgY29uc3QgbG9jYWwgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwic3RhZ2luZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJodHRwczovL3Byb2ZpbGVzZXJ2aWNlLXN0YWdpbmcudHVvaXRyZS52blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImh0dHBzOi8vcHJvZmlsZXNlcnZpY2UudHVvaXRyZS52blwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcblxyXG4vLyBSZWdleFxyXG5leHBvcnQgY29uc3QgcmVnZXhFbWFpbCA9IC9eW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0kLztcclxuZXhwb3J0IGNvbnN0IHJlZ2V4UGhvbmUgPSAvKDg0WzN8NXw3fDh8OV18MFszfDV8N3w4fDldKSsoWzAtOV17OH18WzAtOV17OX0pXFxiLztcclxuXHJcbmV4cG9ydCBjb25zdCBxdWFUcmluaExWSFQgPSBcIlF1w6EgdHLDrG5oIGzDoG0gdmnhu4djIHbDoCBo4buNYyB04bqtcFwiO1xyXG5leHBvcnQgY29uc3QgdGhhbUdpYVRvQ2h1Y0NUID0gXCJUaGFtIGdpYSBjw6FjIHThu5UgY2jhu6ljIGNow61uaCB0cuG7iywgY8OhYyBow7Thu4sgbmdo4buBIG5naGnhu4dwXCI7XHJcbmV4cG9ydCBjb25zdCBkYW9UYW8gPSBcIsSQw6BvIHThuqFvXCI7XHJcbmV4cG9ydCBjb25zdCBib2lEdW9uZyA9IFwiQuG7k2kgZMaw4buhbmdcIjtcclxuZXhwb3J0IGNvbnN0IGtoZW5UaHVvbmcgPSBcIktoZW4gdGjGsOG7n25nXCI7XHJcbmV4cG9ydCBjb25zdCBreUx1YXQgPSBcIkvhu7cgbHXhuq10XCI7XHJcbmV4cG9ydCBjb25zdCBsaWNoU3VCYW5UaGFuID0gXCJM4buLY2ggc+G7rSBi4bqjbiB0aMOiblwiO1xyXG5leHBvcnQgY29uc3QgcXVhbkhlR2lhRGluaCA9IFwiUXVhbiBo4buHIGdpYSDEkcOsbmhcIjtcclxuZXhwb3J0IGNvbnN0IG5vaVNpbmhfU3RlcDEgPSBcIk7GoWkgc2luaFwiXHJcbmV4cG9ydCBjb25zdCBxdWVRdWFuX1N0ZXAxID0gXCJRdcOqIHF1w6FuXCJcclxuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0JZX0lEID0gXCJHRVRfUFJPRklMRV9CWV9JRFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST1ZJTkNFUyA9IFwiR0VUX1BST1ZJTkNFU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRSA9IFwiR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19IT01FX1RPV04gPSBcIkdFVF9ESVNUUklDVFNfSE9NRV9UT1dOXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0FERFJFU1MgPSBcIkdFVF9ESVNUUklDVFNfQUREUkVTU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19IT0tIQVUgPSBcIkdFVF9ESVNUUklDVFNfSE9LSEFVXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA4ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA4XCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA3ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA3XCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA5ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA5XCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA3X0NPTiA9IFwiR0VUX0RJU1RSSUNUU19TVEVQN19DT05cIjtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9GSUxFID0gXCJVUERBVEVfUFJPRklMRVwiO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BST0ZJTEUgPSBcIkNSRUFURV9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBPTkxZX0NSRUFURV9QUk9GSUxFID0gXCJPTkxZX0NSRUFURV9QUk9GSUxFXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MSVNUID0gXCJHRVRfVVNFUl9MSVNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9JTkZPUk1BVElPTiA9IFwiR0VUX1VTRVJfSU5GT1JNQVRJT05cIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9ERVBfUE9TID0gXCJHRVRfREVQQVJUTUVOVF9QT1NJVElPTlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BBUlQgPSBcIkdFVF9QQVJUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfQVZBVEFSID0gXCJHRVRfQVZBVEFSXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfREVQX1BPUyA9IFwiREVMRVRFX0RFUF9QT1NcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UX0xJU1QgPSBcIkdFVF9ERVBBUlRNRU5UX0xJU1RcIjtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9ERVBBUlRNRU5UID0gXCJVUERBVEVfREVQQVJUTUVOVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX0RFUEFSVE1FTlRfSU5GT1IgPSBcIkdFVF9ERVBBUlRNRU5UX0lORk9SXCI7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfREVQQVJUTUVOVCA9IFwiQ1JFQVRFX0RFUEFSVE1FTlRcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9ERVBBUlRNRU5UID0gXCJERUxFVEVfREVQQVJUTUVOVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BPU0lUSU9OU19NQU5BX0xJU1QgPSBcIkdFVF9QT1NJVElPTlNfTUFOQV9MSVNUXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUE9TSVRJT05fVFlQRV9MSVNUID0gXCJHRVRfUE9TSVRJT05fVFlQRV9MSVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TSVRJT05fVFlQRSA9IFwiQ1JFQVRFX1BPU0lUSU9OX1RZUEVcIjtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NJVElPTl9UWVBFID0gXCJVUERBVEVfUE9TSVRJT05fVFlQRVwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BPU0lUSU9OX1RZUEUgPSBcIkRFTEVURV9QT1NJVElPTl9UWVBFXCI7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIkNSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfUEVSU09OQUxfSElTVE9SWSA9IFwiR0VUX1BFUlNPTkFMX0hJU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IENSRUFURV9QRVJTT05BTF9ISVNUT1JZID0gXCJDUkVBVEVfUEVSU09OQUxfSElTVE9SWVwiO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIlVQREFURV9QRVJTT05BTF9ISVNUT1JZXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiREVMRVRFX1BFUlNPTkFMX0hJU1RPUllcIjtcclxuZXhwb3J0IGNvbnN0IENSRUFURV9QQVJUWSA9IFwiQ1JFQVRFX1BBUlRZXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFSVFkgPSBcIlVQREFURV9QQVJUWVwiO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX09SR0FOSVpBVElPTiA9IFwiQ1JFQVRFX09SR0FOSVpBVElPTlwiO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX09SR0FOSVpBVElPTiA9IFwiVVBEQVRFX09SR0FOSVpBVElPTlwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX09SR0FOSVpBVElPTiA9IFwiREVMRVRFX09SR0FOSVpBVElPTlwiO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1RSQUlOSU5HID0gXCJDUkVBVEVfVFJBSU5JTkdcIjtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9UUkFJTklORyA9IFwiVVBEQVRFX1RSQUlOSU5HXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfVFJBSU5JTkcgPSBcIkRFTEVURV9UUkFJTklOR1wiO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkVcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIlVQREFURV9SRVdBUkRfRElTQ0lQTElORVwiO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAgPSBcIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQXCI7XHJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQNyA9IFwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDdcIjtcclxuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX0NPTl9TVEVQNyA9IFwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3XCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQNyA9IFwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDdcIjtcclxuZXhwb3J0IGNvbnN0IFVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQX0NPTl9TVEVQNyA9IFwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3XCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCA9IFwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9ERVBfUE9TX1RPX1NFQVJDSCA9IFwiR0VUX0RFUF9QT1NfVE9fU0VBUkNIXCI7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0ggPSBcIlNFQVJDSFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVVNFUl9JRCA9IFwiR0VUX1BST0ZJTEVfQllfVVNFUl9JRFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVE9LRU4gPSBcIkdFVF9QUk9GSUxFX0JZX1RPS0VOXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPRklMRV9BQ1RJVkUgPSBcIlVQREFURV9QUk9GSUxFX0FDVElWRVwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fTElTVCA9IFwiR0VUX1BFUk1JU1NJT05fTElTVFwiO1xyXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUk1JU1NJT04gPSBcIkNSRUFURV9QRVJNSVNTSU9OXCI7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUEVSTUlTU0lPTiA9IFwiVVBEQVRFX1BFUk1JU1NJT05cIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OID0gXCJERUxFVEVfUEVSTUlTU0lPTlwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fUE9TSVRJT04gPSBcIkdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OXCI7XHJcbmV4cG9ydCBjb25zdCBHRVRfVEFCTEVfTUFOQUdFTUVOVCA9IFwiR0VUX1RBQkxFX01BTkFHRU1FTlRcIjtcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9ERVBBUlRNRU5UID0gXCJTRUFSQ0hfREVQQVJUTUVOVFwiO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU0lUSU9OID0gXCJTRUFSQ0hfUE9TSVRJT05cIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9QT1NfTElTVCA9IFwiR0VUX1BPU19MSVNUXCI7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVTT1VSQ0UgPSBcIkRFTEVURV9SRVNPVVJDRVwiO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX1BFUk1JU1NJT05fUE9TID0gXCJERUxFVEVfUEVSTUlTU0lPTl9QT1NcIjtcclxuZXhwb3J0IGNvbnN0IFBPU1RfUEVSTUlTU0lPTl9QT1MgPSBcIlBPU1RfUEVSTUlTU0lPTl9QT1NcIjtcclxuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OX0RFUF9QT1MgPSBcIkRFTEVURV9QRVJNSVNTSU9OX0RFUF9QT1NcIjtcclxuZXhwb3J0IGNvbnN0IFBPU1RfUEVSTUlTU0lPTl9ERVBfUE9TID0gXCJQT1NUX1BFUk1JU1NJT05fREVQX1BPU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fREVQX1BPUyA9IFwiR0VUX1BFUk1JU1NJT05fREVQX1BPU1wiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fREVQX1BPU19MSVNUID0gXCJHRVRfUEVSTUlTU0lPTl9ERVBfUE9TX0xJU1RcIjtcclxuZXhwb3J0IGNvbnN0IEdFVF9QRVJNSVNTSU9OX1BPU19MSVNUID0gXCJHRVRfUEVSTUlTU0lPTl9QT1NfTElTVFwiO1xyXG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fT0ZfVVNFUiA9IFwiR0VUX1BFUk1JU1NJT05fT0ZfVVNFUlwiO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX1BERl9TVEVQNyA9IFwiVVBMT0FEX1BERl9TVEVQN1wiOyIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgZG9jQ29va2llIGZyb20gXCJkb2MtY29va2llc1wiXHJcblxyXG5leHBvcnQgbGV0IGhhbmRsZURhdGVUaW1lID0gKGRhdGUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGNvbnZlcnQ7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnZlcnQgdOG7qyBz4buRIHNhbmcgY2h14buXaSBERC1NTS1ZWVlZXHJcbiAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxyXG4gICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZihkYXRlLmluY2x1ZGVzKFwiLjAwMFpcIikpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbnZlcnQxID0gbW9tZW50KG5ldyBEYXRlKGRhdGUpKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpXHJcbiAgICAgICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlLmNvbmNhdChcIi4wMDBaXCIpKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxyXG4gICAgICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY2hlY2tNaWNyb0ZlID0gKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMzAwMFwiKSBcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwicHJvZmlsZXNlcnZpY2VcIikgXHJcbiAgICB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjMwMDFcIikpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGdldFRva2VuSW5Db29raWUgPSAoKT0+e1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgdG9rZW5Db29raWUgPSBkb2NDb29raWUuZ2V0SXRlbShcInVzZXJ0b2tlblwiKVxyXG4gICAgICAgIGlmKCF0b2tlbkNvb2tpZSl7XHJcbiAgICAgICAgICAgIC8vIGtoaSBwdXNoIGNvZGUgbMOqbiBzZXJ2ZXJcclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgLy8gS2hpIHRlc3QgdHLDqm4gbG9jYWxcclxuICAgICAgICAgICAgLy8gcmV0dXJuIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TXpVMkxDSmxlSEFpT2pJM05UQTFOVFEzTXpCOS5kckJPX0c3RjlKQ0RpN1htTFJtZjE0UXZVcVllOGNXNGluQkliUXNtUllJXCJcclxuICAgICAgICAgICAgLy8gcmV0dXJuIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TVN3aVpYaHdJam95TnpVd05ERXhNRGczZlEudVdlRUpFWEh5Tnlzdzg1azIybTBzNmRGTmk0bkpGQU84TlM4bGVZNmZ5QVwiXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuQ29va2llKTtcclxuICAgICAgICByZXR1cm4gdG9rZW5Db29raWVcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgY2hlY2tVc2VyUGVybWlzc2lvbiA9IChwZXJtaXNzaW9uTGlzdCwgLi4ubmFtZVBlcm1pc3Npb24pPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgIGZvcihsZXQgcGVyTmFtZSBvZiBuYW1lUGVybWlzc2lvbil7XHJcbiAgICAgICAgICAgIGlmKCFwZXJtaXNzaW9uTGlzdC5pbmNsdWRlcyhwZXJOYW1lKSl7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJNZFBlb3BsZU91dGxpbmUiLCJMaW5rIiwiQnNGaWxlRWFybWFya0ZpbGwiLCJGY0RlcGFydG1lbnQiLCJjaGVja01pY3JvRmUiLCJJbVByb2ZpbGUiLCJqd3RfZGVjb2RlIiwiVE9LRU4iLCJkb2NDb29raWVzIiwiand0IiwidXNlclBlcm1pc3Npb25BcGkiLCJ1c2VyUGVybWlzc2lvbiIsIlN1Yk1lbnUiLCJwZXJtaXNzaW9uIiwidXJpIiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwiUG9zaXRpb25JdGVtIiwiUGVybWlzc2lvbk1lbnUiLCJQZXJtaXNzaW9uUG9zaXRpb24iLCJQZXJtaXNzaW9uRGVwUG9zIiwiUGVybWlzc2lvbk1hbmFnZW1lbnQiLCJnZXRVc2VySWQiLCJpdGVtcyIsImlkIiwiaXRlbXNfdXNlciIsInJlbmRlclN1Yk1lbnUyIiwiZ2V0VG9rZW5JbkNvb2tpZSIsImxvY2FsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5jbHVkZXMiLCJyZWdleEVtYWlsIiwicmVnZXhQaG9uZSIsInF1YVRyaW5oTFZIVCIsInRoYW1HaWFUb0NodWNDVCIsImRhb1RhbyIsImJvaUR1b25nIiwia2hlblRodW9uZyIsImt5THVhdCIsImxpY2hTdUJhblRoYW4iLCJxdWFuSGVHaWFEaW5oIiwibm9pU2luaF9TdGVwMSIsInF1ZVF1YW5fU3RlcDEiLCJHRVRfUFJPRklMRV9CWV9JRCIsIkdFVF9QUk9WSU5DRVMiLCJHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFIiwiR0VUX0RJU1RSSUNUU19IT01FX1RPV04iLCJHRVRfRElTVFJJQ1RTX0FERFJFU1MiLCJHRVRfRElTVFJJQ1RTX0hPS0hBVSIsIkdFVF9ESVNUUklDVFNfU1RFUDgiLCJHRVRfRElTVFJJQ1RTX1NURVA3IiwiR0VUX0RJU1RSSUNUU19TVEVQOSIsIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OIiwiVVBEQVRFX1BST0ZJTEUiLCJDUkVBVEVfUFJPRklMRSIsIk9OTFlfQ1JFQVRFX1BST0ZJTEUiLCJHRVRfVVNFUl9MSVNUIiwiR0VUX1VTRVJfSU5GT1JNQVRJT04iLCJHRVRfREVQX1BPUyIsIkdFVF9QQVJUIiwiR0VUX0FWQVRBUiIsIkRFTEVURV9ERVBfUE9TIiwiR0VUX0RFUEFSVE1FTlRfTElTVCIsIlVQREFURV9ERVBBUlRNRU5UIiwiR0VUX0RFUEFSVE1FTlRfSU5GT1IiLCJDUkVBVEVfREVQQVJUTUVOVCIsIkRFTEVURV9ERVBBUlRNRU5UIiwiR0VUX1BPU0lUSU9OU19NQU5BX0xJU1QiLCJHRVRfUE9TSVRJT05fVFlQRV9MSVNUIiwiQ1JFQVRFX1BPU0lUSU9OX1RZUEUiLCJVUERBVEVfUE9TSVRJT05fVFlQRSIsIkRFTEVURV9QT1NJVElPTl9UWVBFIiwiQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UIiwiVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UIiwiREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UIiwiR0VUX1BFUlNPTkFMX0hJU1RPUlkiLCJDUkVBVEVfUEVSU09OQUxfSElTVE9SWSIsIlVQREFURV9QRVJTT05BTF9ISVNUT1JZIiwiREVMRVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJDUkVBVEVfUEFSVFkiLCJVUERBVEVfUEFSVFkiLCJDUkVBVEVfT1JHQU5JWkFUSU9OIiwiVVBEQVRFX09SR0FOSVpBVElPTiIsIkRFTEVURV9PUkdBTklaQVRJT04iLCJDUkVBVEVfVFJBSU5JTkciLCJVUERBVEVfVFJBSU5JTkciLCJERUxFVEVfVFJBSU5JTkciLCJDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkUiLCJERUxFVEVfUkVXQVJEX0RJU0NJUExJTkUiLCJVUERBVEVfUkVXQVJEX0RJU0NJUExJTkUiLCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCIsIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3IiwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3IiwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDciLCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9DT05fU1RFUDciLCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCIsIkdFVF9ERVBfUE9TX1RPX1NFQVJDSCIsIlNFQVJDSCIsIkdFVF9QUk9GSUxFX0JZX1VTRVJfSUQiLCJHRVRfUFJPRklMRV9CWV9UT0tFTiIsIlVQREFURV9QUk9GSUxFX0FDVElWRSIsIkdFVF9QRVJNSVNTSU9OX0xJU1QiLCJDUkVBVEVfUEVSTUlTU0lPTiIsIlVQREFURV9QRVJNSVNTSU9OIiwiREVMRVRFX1BFUk1JU1NJT04iLCJHRVRfUEVSTUlTU0lPTl9QT1NJVElPTiIsIkdFVF9UQUJMRV9NQU5BR0VNRU5UIiwiU0VBUkNIX0RFUEFSVE1FTlQiLCJTRUFSQ0hfUE9TSVRJT04iLCJHRVRfUE9TX0xJU1QiLCJERUxFVEVfUkVTT1VSQ0UiLCJERUxFVEVfUEVSTUlTU0lPTl9QT1MiLCJQT1NUX1BFUk1JU1NJT05fUE9TIiwiREVMRVRFX1BFUk1JU1NJT05fREVQX1BPUyIsIlBPU1RfUEVSTUlTU0lPTl9ERVBfUE9TIiwiR0VUX1BFUk1JU1NJT05fREVQX1BPUyIsIkdFVF9QRVJNSVNTSU9OX0RFUF9QT1NfTElTVCIsIkdFVF9QRVJNSVNTSU9OX1BPU19MSVNUIiwiR0VUX1BFUk1JU1NJT05fT0ZfVVNFUiIsIlVQTE9BRF9QREZfU1RFUDciLCJtb21lbnQiLCJkb2NDb29raWUiLCJoYW5kbGVEYXRlVGltZSIsImRhdGUiLCJjb252ZXJ0IiwiY29udmVydDEiLCJEYXRlIiwiZm9ybWF0IiwiY29uY2F0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidG9rZW5Db29raWUiLCJjaGVja1VzZXJQZXJtaXNzaW9uIiwicGVybWlzc2lvbkxpc3QiLCJyZXN1bHQiLCJuYW1lUGVybWlzc2lvbiIsInBlck5hbWUiXSwic291cmNlUm9vdCI6IiJ9