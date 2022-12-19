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

  var PositionItem = function PositionItem() {
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

  var PermissionMenu = function PermissionMenu() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("g", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M211.1,990l-89.6-1.4c-15.5,0-22.2-13.7-28.5-38.4l-1.3,0.2l-3-17.1c-0.3-1.6-0.5-3-0.7-4.4l-0.3-1.7l0.1,0l-7.5-42.6c-3.8-22,2.9-52.4,15.5-70.8L356.3,438c-17.3-37.2-31-83.7-36.1-113.1c-29-166.4,112.4-284.1,260.1-310.5c16.7-3,33.7-4.5,50.4-4.5C771.1,10,890.6,111.4,915,251.1c26.1,149.2-35.1,323.6-199.9,353c-21.6,3.9-50,6.1-77.9,6.1h0c-17.7,0-34.4-0.9-49-2.7L465.5,800.1l-92.2-7.2L273.1,949.4c-12.2,19.1-38.1,36.4-60.2,40.3L211.1,990z M132.7,951.1l75.2,1.1c11.5-2.7,27.3-13.5,33.4-23.2l106.8-166.7l6.2-7.7l10.7-0.3l80.8,6.3l123.8-194.2l12.3,2.1c15.1,2.6,34.2,4,55.1,4h0c25.4,0,52-2.1,71.3-5.5C849.3,542,900.8,388.9,877.8,257.6C856.6,136,752.7,47.7,630.7,47.7c-14.6,0-29.3,1.3-43.8,3.9C457,74.7,332.4,176.1,357.3,318.5c5.1,29.4,19.7,77.5,37.6,112.7l5.1,10l-273.1,394c-7,10.2-11.5,30.6-9.4,42.9l7.4,42.2c0.1,0.6,0.3,1.3,0.5,2C128.6,937.3,131,946.1,132.7,951.1z M722,378.2c-29,0-56.2-19.8-87.6-42.8c-5.9-4.3-12-8.8-18.3-13.3c-6.3-4.4-12.5-8.7-18.5-12.8C562,285,531.3,264,525.3,231.3c-3.5-18.8,2-38.3,16.6-59.4c27.4-39.5,72.3-63.1,120.1-63.1c30.1,0,59.2,9.3,83.9,26.8c66.1,46.7,82.2,138.9,35.9,205.6C764.5,366.1,744.9,378.2,722,378.2z M662,146.5c-35.4,0-68.8,17.5-89.1,46.9c-8.6,12.5-12.1,22.6-10.5,31.1c3.2,17.3,27.9,34.2,56.5,53.8c6.2,4.2,12.6,8.6,19,13.2c6.5,4.6,12.8,9.2,18.8,13.6c25,18.3,48.6,35.5,65.3,35.5c6.2,0,15.9-2.2,28.9-20.8c34.5-49.7,22.5-118.5-26.7-153.3C705.7,153.4,684.3,146.5,662,146.5z"
        })
      })
    });
  };

  var PermissionPosition = function PermissionPosition() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("g", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M601.8,423.2c40.8-17.2,83.8-26,128.4-26c4.4,0,8.8,0.2,13.2,0.2c20.9-52.8,26.2-115.2,15.7-175.9C734.9,82.3,603.6-10.7,465.6,13.8C327.7,38.3,211.4,145.5,235.9,284.6c5.2,30.1,19.7,76.9,36.9,110.8L22.5,756.6c-9.2,13.2-14.5,37.1-11.7,53.4l10.9,61.8c-10.3-59.5,2.9,21.4,10.9,21.2l82.5,1.1c15.9-2.9,35.8-16.3,44.6-29.9l99-154.8l1-1l86.5,6.9l115.6-181.3c0.4,0,0.8,0.2,1.1,0.2c10.3-14.2,21.6-27.6,34.3-40.2C527.2,463.6,562.6,439.8,601.8,423.2z M76.6,794.7l-12.3,5.2l1.3-13.4l239.8-348.2l14.4,13.4L76.6,794.7z M441.1,154.1c37.9-54.6,112.5-68.1,166.5-29.7c54.2,38.5,67.4,113.9,29.5,168.4c-37.9,54.5-76.6,16.1-130.7-22.2C452.3,232.2,403.2,208.8,441.1,154.1z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M727,464.2c-145.3,0-263,117.7-263,263s117.7,263,263,263c145.3,0,263-117.7,263-263C990,581.9,872.3,464.2,727,464.2z M879,835.1c0,39.2-75.2,48.2-145.8,48.2c-70.6,0-146.8-9-146.8-48.2v-10.9c0-28.9,52.1-58.2,96.3-74.1c3.3-1.1,18.6-9.6,10-32c-22-22.4-38.5-58.8-38.5-94.6c0-54.7,36.2-83.5,78.7-83.5c42.3,0,78.9,28.7,78.9,83.5c0,35.6-16.7,71.8-38.5,94.4h0.2c-8.4,25.5,5,31.6,7.1,32.2c46.5,15.3,98.8,44.4,98.8,74.1L879,835.1L879,835.1z"
        })]
      })
    });
  };

  var PermissionManagement = function PermissionManagement() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
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
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("g", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
          d: "M968.9,481.4c-1.3,10.5-2.9,21.4-5,31.8l-5.2,24.8l-25.3-1.1c-3.3-0.1-6.6-0.2-10-0.2c-72.2,0-140.6,33.6-193.6,81c-4.3,3.8-8.9,9.9-12.4,14.5c-6.9,8.9-13.5,18.2-19.9,27.4c-17.4,24.9-34.2,50.3-50.7,75.8c-16.7,25.7-33.1,51.6-49.3,77.6l-9.5,15.3l-80.6-5.5L405.3,973.2l-7.5,3.5C373.7,987.9,340,990,313.6,990c-9.9,0-20-0.2-29.9-1l-17.7-1.4l-7.3-16.2c-14.3-31.8-19.2-70.8-22.3-105.2c-0.2-1.9-0.3-3.9-0.5-5.8c-0.4-2.3-0.6-4.7-0.4-7l-23.4,34.5l-9.9,4.6c-25.6,12-60.3,14.2-88.2,14.2c-10.1,0-20.5-0.2-30.6-1l-23.3-1.8l-9.6-21.3c-14.7-32.9-19.9-72.7-23.1-108.3c-0.2-1.7-0.3-3.5-0.5-5.3c-3-17.7,6.6-30.6,15.8-44.7c9-13.8,18.2-27.5,27.4-41.1c27.3-40.3,55-80.4,82.7-120.4c35.6-51.4,71.4-102.7,107.2-154c-20.6-46.3-32.4-97.1-29-148c1.4-20.7,6-47.7,15-66.9c31.1-66.2,78.4-119.6,144.4-152C434,20.6,482.7,10,531,10c13.1,0,26.9,0.7,39.9,2.8c66,10.9,121.3,42.3,159.2,97.8c0.4,0.6,0.8,1.1,1.1,1.7c12.4,0,25.4,0.7,37.6,2.7c63.4,10.5,116.4,40.4,152.9,93.8c39.3,57.4,51.6,129.7,51.8,198.1C973.6,431.8,972,456.8,968.9,481.4z M561.1,71.8c-2.9-0.5-13.7-2-30.1-2c-59.9,0-169.6,19.4-230.7,149.6c-0.3,0.7-8.4,19.2-9.7,50.5c-1.2,29.3,3.6,76.3,33.2,133.3l5.7,10.9l-7.1,10.1C239.3,542.8,106.9,733.4,86.9,766.4c0.1,0.8,0.1,1.6,0.2,2.6c1.4,15.9,4.5,50.4,13.7,77.8c3.8,0.1,8.4,0.2,13.3,0.2c25.2,0,45.5-2.4,58.2-6.7l110.2-162.3l63.2,4.3c4.9-7.1,9.8-14.1,14.7-21.2c36.6-52.9,73.4-105.7,110.3-158.4c-21.4-46.2-33.8-97.2-30.4-148.3c1-15,3.4-30.1,7.4-44.5c-3.4-2.8-6.9-5.5-10.3-8.3c-23.1-18.5-55.1-41.6-57.7-73.6c-1.2-14.8,3.8-28.8,13.8-39.8c38.2-42.5,94.1-74.2,152.3-74.2c25.6,0,50.4,6.2,71.8,19.4c14-5.4,28.4-9.8,43.1-13.1C635,94.7,601.7,78.5,561.1,71.8z M474.1,254.3c19.3-31.2,43-58.5,71.7-80.7c-35.8,0-74.7,19.1-104.9,51.2C446.3,232,461.9,244.6,474.1,254.3z M880.2,237.1c-27-39.5-67.3-63.9-119.5-72.5c-2.9-0.5-13.7-2-30.1-2c-59.9,0-169.6,19.4-230.7,149.6c-0.3,0.7-8.4,19.2-9.7,50.5c-1.2,29.3,3.6,76.3,33.2,133.3l5.7,10.9l-7.1,10.1c-83.1,118.6-215.5,309.2-235.5,342.2c0.1,0.8,0.1,1.6,0.2,2.6c1.4,15.9,4.5,50.4,13.7,77.8c3.8,0.1,8.4,0.2,13.3,0.2c25.2,0,45.5-2.4,58.2-6.7l110.2-162.3l79.3,5.4c25.5-40.8,108.6-172.3,135-195.8c38.4-34.4,117.7-91.5,221.1-93.7C924,442.4,935.8,318.2,880.2,237.1z M812.2,477.2c-8.7,9.7-20.2,15.3-33.3,15.3c-2.4,0-4.8-0.2-7.2-0.6c-12-1.9-22.3-8.3-31.6-15.9c-10.8-8.8-20.7-19.3-30.4-29.3c-10.7-11.1-21.4-22.2-32.9-32.5c-11-9.8-22.4-19.1-33.9-28.3c-11.6-9.3-23.8-18.8-34.1-29.4c-8.7-8.9-16.4-19.3-19.1-31.7c-0.4-1.9-0.7-3.9-0.9-5.9c-1-12.2,3.2-23.6,11.4-32.7c36.3-40.4,89.7-71,145.2-71c30.7,0,60.1,9.5,83.1,30.2c31.2,28,42.8,70.2,39.1,111C863.4,401.5,842.1,444,812.2,477.2z M794.8,283c-12.6-11.4-29.8-17.4-49.6-17.4c-35.8,0-74.7,19.1-104.9,51.2c5.6,7.3,21.7,20.2,33.9,30c11.1,8.9,23.6,18.9,36.1,30.1c13.3,12,25.1,24.2,35.5,35c10.3,10.6,23.8,24.7,31.2,29.2c23.3-26.8,37.6-58.3,40.4-89C820.1,323,812.1,298.5,794.8,283z M562.7,593.4L562.7,593.4L413.8,802c-0.1,0.1-0.1,0.2-0.2,0.3c-9.8,13.5-29,19.3-43.3,9.2c-14.3-10.2-15.1-30.3-5.3-44l149.2-208.9c9.7-13.6,29.1-19.5,43.4-9.3c14.3,10.2,15.1,30.3,5.3,44L562.7,593.4z M382.9,508.9l-0.3,0.4l0,0.1L233.8,717.8c-0.1,0.1-0.1,0.2-0.2,0.3c-12.9,17.8-38,24.6-56.6,11.3c-18.7-13.3-20.4-39.3-7.5-57.4l149.2-208.9c12.8-17.9,38.1-24.8,56.7-11.5C394,464.9,395.8,490.9,382.9,508.9z"
        })
      })
    });
  };

  var items = [getItem("Nhân sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdPeopleOutline, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/profile"),
    children: "H\u1ED3 s\u01A1"
  }), "1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsFileEarmarkFill, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/department"),
    children: "B\u1ED9 ph\u1EADn c\xF4ng t\xE1c"
  }), "2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_fc__WEBPACK_IMPORTED_MODULE_9__.FcDepartment, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/position"),
    children: "Ch\u1EE9c danh, ch\u1EE9c v\u1EE5"
  }), "3", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PositionItem, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/myprofile/").concat((_jwt_decode = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode === void 0 ? void 0 : _jwt_decode.id),
    children: "Th\xF4ng tin c\xE1 nh\xE2n"
  }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_10__.ImProfile, {}))]), getItem("Quyền", "sub-menu-2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PermissionMenu, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/permission/manage"),
    children: "Qu\u1EA3n l\xFD quy\u1EC1n"
  }), "5", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PermissionManagement, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/permission/position"),
    children: "Quy\u1EC1n ch\u1EE9c v\u1EE5"
  }), "6", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PermissionPosition, {}))])];

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
/* harmony export */   "CREATE_PERMISSION": function() { return /* binding */ CREATE_PERMISSION; },
/* harmony export */   "CREATE_PERSONAL_HISTORY": function() { return /* binding */ CREATE_PERSONAL_HISTORY; },
/* harmony export */   "CREATE_POSITION_AND_MANAGEMENT": function() { return /* binding */ CREATE_POSITION_AND_MANAGEMENT; },
/* harmony export */   "CREATE_POSITION_TYPE": function() { return /* binding */ CREATE_POSITION_TYPE; },
/* harmony export */   "CREATE_PROFILE": function() { return /* binding */ CREATE_PROFILE; },
/* harmony export */   "CREATE_REWARD_DISCIPLINE": function() { return /* binding */ CREATE_REWARD_DISCIPLINE; },
/* harmony export */   "CREATE_TRAINING": function() { return /* binding */ CREATE_TRAINING; },
/* harmony export */   "DELETE_DEP_POS": function() { return /* binding */ DELETE_DEP_POS; },
/* harmony export */   "DELETE_ORGANIZATION": function() { return /* binding */ DELETE_ORGANIZATION; },
/* harmony export */   "DELETE_PERMISSION": function() { return /* binding */ DELETE_PERMISSION; },
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
/* harmony export */   "GET_PERMISSION_LIST": function() { return /* binding */ GET_PERMISSION_LIST; },
/* harmony export */   "GET_PERMISSION_POSITION": function() { return /* binding */ GET_PERMISSION_POSITION; },
/* harmony export */   "GET_PERSONAL_HISTORY": function() { return /* binding */ GET_PERSONAL_HISTORY; },
/* harmony export */   "GET_POSITIONS_LIST": function() { return /* binding */ GET_POSITIONS_LIST; },
/* harmony export */   "GET_POSITION_TYPE_LIST": function() { return /* binding */ GET_POSITION_TYPE_LIST; },
/* harmony export */   "GET_PROFILE_BY_ID": function() { return /* binding */ GET_PROFILE_BY_ID; },
/* harmony export */   "GET_PROFILE_BY_TOKEN": function() { return /* binding */ GET_PROFILE_BY_TOKEN; },
/* harmony export */   "GET_PROFILE_BY_USER_ID": function() { return /* binding */ GET_PROFILE_BY_USER_ID; },
/* harmony export */   "GET_PROVINCES": function() { return /* binding */ GET_PROVINCES; },
/* harmony export */   "GET_TABLE_MANAGEMENT": function() { return /* binding */ GET_TABLE_MANAGEMENT; },
/* harmony export */   "GET_USER_INFORMATION": function() { return /* binding */ GET_USER_INFORMATION; },
/* harmony export */   "GET_USER_LIST": function() { return /* binding */ GET_USER_LIST; },
/* harmony export */   "ONLY_CREATE_PROFILE": function() { return /* binding */ ONLY_CREATE_PROFILE; },
/* harmony export */   "SEARCH": function() { return /* binding */ SEARCH; },
/* harmony export */   "TOKEN": function() { return /* binding */ TOKEN; },
/* harmony export */   "UPDATE_DEPARTMENT": function() { return /* binding */ UPDATE_DEPARTMENT; },
/* harmony export */   "UPDATE_FAMILY_RELATIONSHIP": function() { return /* binding */ UPDATE_FAMILY_RELATIONSHIP; },
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
var GET_PERMISSION_LIST = "GET_PERMISSION_LIST";
var CREATE_PERMISSION = "CREATE_PERMISSION";
var UPDATE_PERMISSION = "UPDATE_PERMISSION";
var DELETE_PERMISSION = "DELETE_PERMISSION";
var GET_PERMISSION_POSITION = "GET_PERMISSION_POSITION";
var GET_TABLE_MANAGEMENT = "GET_TABLE_MANAGEMENT";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFZSxTQUFTVSxPQUFULEdBQW1CO0VBQUE7O0VBRTlCLElBQUlDLEdBQUcsR0FBR0wsNERBQVksT0FBTyxJQUFuQixHQUEwQixpQkFBMUIsR0FBOEMsRUFBeEQ7O0VBRUEsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBbUJDLFFBQW5CLEVBQWdDO0lBQzVDLE9BQU87TUFDSEgsS0FBSyxFQUFMQSxLQURHO01BRUhDLEdBQUcsRUFBSEEsR0FGRztNQUdIQyxJQUFJLEVBQUpBLElBSEc7TUFJSEMsUUFBUSxFQUFSQTtJQUpHLENBQVA7RUFNSCxDQVBEOztFQVNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0lBQUEsb0JBQ2I7TUFBSyxNQUFNLEVBQUMsY0FBWjtNQUEyQixJQUFJLEVBQUMsY0FBaEM7TUFBK0MsS0FBSyxFQUFDLGNBQXJEO01BQW9FLE9BQU8sRUFBQyxLQUE1RTtNQUFrRixLQUFLLEVBQUMsNEJBQXhGO01BQ1AsT0FBTyxFQUFDLDJCQUREO01BRVIsbUJBQW1CLEVBQUMsZUFGWjtNQUFBLHVCQUdKO1FBQUcsU0FBUyxFQUFDLDBEQUFiO1FBQXdFLE1BQU0sRUFBQyxNQUEvRTtRQUFBLHdCQUNBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFEQSxlQU9BO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFQQSxlQVlBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFaQSxlQWtCQTtVQUFNLENBQUMsRUFBQztRQUFSLEVBbEJBLGVBd0JBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUF4QkEsZUErQkE7VUFBTSxDQUFDLEVBQUM7UUFBUixFQS9CQSxlQXFDQTtV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QkFBOUIsQ0FBekMsSUFBNEZILE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLFFBQXJCLENBQThCLE1BQTlCLENBQWhHLEVBQXVJO0lBQ25JLE9BQU8sS0FBUDtFQUNILENBRkQsTUFFTztJQUNILE9BQU8sSUFBUDtFQUNIO0FBQ0osQ0FOTTtBQVFBLElBQUlyRixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQUk7RUFDOUIsSUFBSTtJQUNBLElBQUlzRixXQUFXLEdBQUdkLDBEQUFBLENBQWtCLFdBQWxCLENBQWxCOztJQUNBLElBQUcsQ0FBQ2MsV0FBSixFQUFnQjtNQUNaO01BQ0EsT0FBTyxJQUFQLENBRlksQ0FHWjtNQUNBO01BQ0E7SUFDSCxDQVJELENBU0E7OztJQUNBLE9BQU9BLFdBQVA7RUFDSCxDQVhELENBV0UsT0FBT1AsS0FBUCxFQUFjO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0VBQ0g7QUFDSixDQWZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3RpdGxlL3RpdGxlLmpzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvdWx0aWxzL2hlbHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIlxuaW1wb3J0IHsgTWRQZW9wbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnNGaWxlRWFybWFya0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHsgRmNEZXBhcnRtZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCJcbmltcG9ydCB7IGNoZWNrTWljcm9GZSB9IGZyb20gJy4uLy4uL3VsdGlscy9oZWxwZXInO1xuaW1wb3J0IHtJbVByb2ZpbGV9IGZyb20gXCJyZWFjdC1pY29ucy9pbVwiXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IHtUT0tFTn0gZnJvbSBcIi4uLy4uL3RpdGxlL3RpdGxlXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3ViTWVudSgpIHtcbiAgICBcbiAgICBsZXQgdXJpID0gY2hlY2tNaWNyb0ZlKCkgPT09IHRydWUgPyBcInByb2ZpbGUtc2VydmljZVwiIDogXCJcIjtcblxuICAgIGNvbnN0IGdldEl0ZW0gPSAobGFiZWwsIGtleSwgaWNvbiwgY2hpbGRyZW4pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBQb3NpdGlvbkl0ZW0gPSAoKT0+KFxuICAgICAgICAgICAgPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY29sb3I9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgIHZpZXdCb3g9XCIwIDAgNTEyLjAwMDAwMCA1MTIuMDAwMDAwXCJcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPlxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiIHN0cm9rZT1cIm5vbmVcIj5cbiAgICAgICAgPHBhdGggZD1cIk00MzEwIDQ3ODMgYy0xMDUgLTE4IC0yMjkgLTgwIC0yOTkgLTE1MiAtMTAwIC0xMDAgLTE0MSAtMjA4IC0xNDFcbiAgICAgICAgLTM2NyAwIC0zMjUgMTc4IC01NjMgNDUyIC02MDUgMjM3IC0zNyA0NjYgMTEyIDU1NSAzNjIgMjIgNjIgMjcgOTYgMzEgMjA2IDRcbiAgICAgICAgMTE1IDEgMTQxIC0xNyAyMDMgLTI4IDkzIC03MCAxNTggLTEzOCAyMTkgLTExOCAxMDUgLTI5NSAxNTkgLTQ0MyAxMzR6IG0xNDRcbiAgICAgICAgLTIzOCBjNTkgLTEwIDEzMCAtNDkgMTY1IC05MiA5NyAtMTE3IDc0IC0zNjkgLTQ0IC00ODggLTUwIC00OSAtOTAgLTY3IC0xNjVcbiAgICAgICAgLTczIC0xNTUgLTExIC0yNjggOTcgLTMwMCAyODggLTI2IDE1NCAxNSAyNjcgMTE5IDMyOCA0NSAyNiAxNDIgNTMgMTcxIDQ3IDhcbiAgICAgICAgLTIgMzMgLTYgNTQgLTEwelwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0yNDIwIDQxMTQgYy0xODAgLTQ4IC0zMjIgLTE4NCAtMzY0IC0zNDkgLTIwIC03NSAtMjAgLTIzNyAtMSAtMzMwXG4gICAgICAgIDIyIC0xMDYgNzYgLTIwNiAxNTQgLTI4NSAxMDEgLTEwMyAyMTIgLTE1MCAzNTEgLTE1MCAxMzkgMCAyNTAgNDcgMzUxIDE1MFxuICAgICAgICAxMTUgMTE3IDE2OSAyNjIgMTY5IDQ1NCAwIDE2MSAtNDMgMjc2IC0xNDEgMzc0IC02MyA2MyAtMTUyIDExMyAtMjQ1IDEzNyAtNzNcbiAgICAgICAgMTkgLTIwMSAxOCAtMjc0IC0xeiBtMjY3IC0yNDQgYzEzNCAtNTcgMTg4IC0xOTUgMTQ5IC0zNzUgLTM1IC0xNjQgLTEzNyAtMjYwXG4gICAgICAgIC0yNzYgLTI2MCAtMTY5IDAgLTI4OCAxNTMgLTI5MCAzNzEgLTEgMjE5IDIxMCAzNTMgNDE3IDI2NHpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNjU1IDM0NzQgYy0xNTIgLTM3IC0yMjMgLTcyIC0zMDYgLTE1NCAtMTA2IC0xMDUgLTEzOCAtMTkyIC0xMzlcbiAgICAgICAgLTM3NSAwIC0xMzEgMTggLTIxMyA2NyAtMzEzIDk5IC0yMDAgMzE4IC0zMTkgNTI2IC0yODQgMjcyIDQ3IDQ0NyAyODMgNDQ3XG4gICAgICAgIDYwNiAwIDI0NSAtMTE1IDQwOCAtMzQ1IDQ5MiAtNjQgMjMgLTIwNSAzOSAtMjUwIDI4eiBtMTQwIC0yMzkgYzg0IC0xNCAxNjlcbiAgICAgICAgLTgwIDIwMiAtMTU2IDMyIC03NSAyMyAtMjMyIC0xOSAtMzI3IC0yOSAtNjQgLTkwIC0xMjYgLTE1MCAtMTUyIC00MiAtMTggLTY1XG4gICAgICAgIC0yMSAtMTE4IC0xOCAtNzUgNiAtMTE1IDI0IC0xNjUgNzMgLTExOCAxMTkgLTE0MSAzNzEgLTQ0IDQ4OCAxNyAyMSA1MCA0NyA3MlxuICAgICAgICA1OSA0NSAyMyAxNDIgNDggMTY3IDQzIDggLTIgMzMgLTYgNTUgLTEwelwiLz5cbiAgICAgICAgPHBhdGggZD1cIk00MjE2IDM0MzQgYy0xNjQgLTQxIC0zMTAgLTE0MiAtMzg1IC0yNjYgLTQwIC02OCAtNTggLTEzNSAtMTE1XG4gICAgICAgIC00NDMgLTYyIC0zMzYgLTYyIC0zNTMgNCAtMzk4IDIyIC0xNSA2NCAtMTcgNDAzIC0xNyA0MTUgMCA0MjEgMSA0NTIgNjAgMTlcbiAgICAgICAgMzcgMTkgNzMgMCAxMTAgLTMwIDU3IC00NSA2MCAtMzY1IDYwIGwtMjkwIDAgNSAyMyBjMiAxMiAyMSAxMTAgNDAgMjE3IDQwXG4gICAgICAgIDIxNyA2MyAyNzcgMTI1IDMzNCAxOTEgMTcyIDU2MyAxMjQgNjY3IC04NiAxNCAtMjcgNDIgLTE1MiA3OCAtMzQzIDMxIC0xNjRcbiAgICAgICAgNjEgLTMwNyA2NiAtMzE2IDQzIC04MiAxNzQgLTc1IDIwOSAxMSAxMiAzMCAxMCA1MiAtMTkgMjE0IC03MyA0MDEgLTg4IDQ2N1xuICAgICAgICAtMTI2IDU0MyAtNjQgMTI5IC0xOTIgMjMyIC0zNTAgMjgzIC05MCAyOSAtMzA4IDM3IC0zOTkgMTR6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTI0MjUgMjc4NiBjLTIzMSAtNDYgLTM5NSAtMTczIC00NjMgLTM1OCAtMTIgLTMxIC00NyAtMTk1IC03OCAtMzY1XG4gICAgICAgIGwtNTcgLTMwNyAxOSAtMzYgYzM3IC02OSA0NiAtNzAgNDQ0IC02OSAyNDggMCAzNjUgNCAzOTAgMTIgNDAgMTQgODAgNjcgODBcbiAgICAgICAgMTA3IDAgNDAgLTQwIDkzIC04MCAxMDcgLTI0IDggLTEyNSAxMiAtMzEzIDEyIGwtMjc5IDEgNiAyOCBjMyAxNSAyMiAxMTEgNDFcbiAgICAgICAgMjE0IDQwIDIxMCA0MyAyMjIgODUgMjgzIDYyIDkxIDE5MCAxNDUgMzQwIDE0NSAxNTcgMCAyODAgLTU1IDM0NyAtMTU2IDM3XG4gICAgICAgIC01NiA0NiAtOTIgMTI4IC01MzYgMzAgLTE2NiA0NCAtMTkxIDEwNiAtMjA4IDUzIC0xNCAxMDYgMTAgMTMzIDYwIGwxOSAzNlxuICAgICAgICAtNTcgMzA3IGMtNjAgMzI2IC03OCAzOTEgLTEzNCA0NzUgLTY5IDEwNiAtMjA5IDE5OSAtMzU3IDIzNyAtODYgMjIgLTIzNiAyN1xuICAgICAgICAtMzIwIDExelwiLz5cbiAgICAgICAgPHBhdGggZD1cIk01NDMgMjEyMCBjLTIwMCAtNTIgLTM1MCAtMTc4IC00MTIgLTM0NSAtMTggLTQ5IC0xMzEgLTYyMyAtMTMxXG4gICAgICAgIC02NjcgMCAtMzIgMjkgLTc3IDYwIC05MyAyNCAtMTMgODkgLTE1IDQwNSAtMTUgMzM0IDAgMzgwIDIgNDA1IDE3IDczIDQzIDczXG4gICAgICAgIDE1MyAwIDE5NiAtMjQgMTUgLTY1IDE3IC0zMTkgMTcgLTE2MCAwIC0yOTEgMyAtMjkxIDcgMCA0NCA4NiA0NDggMTAzIDQ4MVxuICAgICAgICAxMjYgMjU0IDYwOSAyNTMgNzMxIC0xIDE4IC0zNyA0MCAtMTMzIDc2IC0zMjcgNjMgLTM0NyA1NiAtMzE4IDk1IC0zNTcgNDNcbiAgICAgICAgLTQzIDk4IC00NiAxNDQgLTcgNTYgNDYgNTUgNjQgLTUgMzg3IC0zMCAxNjEgLTYyIDMxNiAtNzEgMzQ2IC01MyAxNzIgLTIzNVxuICAgICAgICAzMjIgLTQ0MiAzNjYgLTEwMCAyMSAtMjU4IDE5IC0zNDggLTV6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTM3MzggMTg3OSBjLTE0IC02IC0xNTkgLTE1MyAtMzIzIC0zMzAgbC0yOTYgLTMxOSAtNTk5IDAgYy0zOTkgMFxuICAgICAgICAtNjA3IC00IC02MjIgLTExIC0xMyAtNSAtMTUzIC0xNTQgLTMxMyAtMzI5IGwtMjkwIC0zMTkgLTU5MCAtMSBjLTQyOSAtMVxuICAgICAgICAtNTk5IC00IC02MjQgLTEzIC00OCAtMTcgLTc2IC01OCAtNzYgLTExMyAwIC0zNiA2IC00OSAzMyAtNzYgbDMyIC0zMyA2NDIgLTNcbiAgICAgICAgYzQ3NyAtMiA2NTAgMCA2NzEgOSAxNiA3IDE1NiAxNTIgMzI0IDMzNiBsMjk1IDMyMyA2MDIgMCA2MDIgMCAzMSAyMyBjMTcgMTJcbiAgICAgICAgMTU2IDE1NyAzMDkgMzIyIGwyNzggMzAwIDYwNiA1IGM2NzkgNiA2NDUgMiA2NzcgNzggMTMgMzIgMTQgNDIgMiA3NiAtOCAyMlxuICAgICAgICAtMjcgNDkgLTQyIDYwIC0yOCAyMSAtMzYgMjEgLTY2NSAyMyAtNDAxIDEgLTY0NyAtMiAtNjY0IC04elwiLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG5cbiAgICBjb25zdCBQZXJtaXNzaW9uTWVudSA9ICgpPT4oXG4gICAgICAgIDxzdmcgaGVpZ2h0PVwiMWVtXCIgd2lkdGg9XCIxZW1cIiBjbGFzc05hbWU9J2FudC1tZW51LWl0ZW0taWNvbicgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY29sb3I9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAxMDAwIDEwMDBcIiB4bWxTcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgICA8Zz48cGF0aCBkPVwiTTIxMS4xLDk5MGwtODkuNi0xLjRjLTE1LjUsMC0yMi4yLTEzLjctMjguNS0zOC40bC0xLjMsMC4ybC0zLTE3LjFjLTAuMy0xLjYtMC41LTMtMC43LTQuNGwtMC4zLTEuN2wwLjEsMGwtNy41LTQyLjZjLTMuOC0yMiwyLjktNTIuNCwxNS41LTcwLjhMMzU2LjMsNDM4Yy0xNy4zLTM3LjItMzEtODMuNy0zNi4xLTExMy4xYy0yOS0xNjYuNCwxMTIuNC0yODQuMSwyNjAuMS0zMTAuNWMxNi43LTMsMzMuNy00LjUsNTAuNC00LjVDNzcxLjEsMTAsODkwLjYsMTExLjQsOTE1LDI1MS4xYzI2LjEsMTQ5LjItMzUuMSwzMjMuNi0xOTkuOSwzNTNjLTIxLjYsMy45LTUwLDYuMS03Ny45LDYuMWgwYy0xNy43LDAtMzQuNC0wLjktNDktMi43TDQ2NS41LDgwMC4xbC05Mi4yLTcuMkwyNzMuMSw5NDkuNGMtMTIuMiwxOS4xLTM4LjEsMzYuNC02MC4yLDQwLjNMMjExLjEsOTkweiBNMTMyLjcsOTUxLjFsNzUuMiwxLjFjMTEuNS0yLjcsMjcuMy0xMy41LDMzLjQtMjMuMmwxMDYuOC0xNjYuN2w2LjItNy43bDEwLjctMC4zbDgwLjgsNi4zbDEyMy44LTE5NC4ybDEyLjMsMi4xYzE1LjEsMi42LDM0LjIsNCw1NS4xLDRoMGMyNS40LDAsNTItMi4xLDcxLjMtNS41Qzg0OS4zLDU0Miw5MDAuOCwzODguOSw4NzcuOCwyNTcuNkM4NTYuNiwxMzYsNzUyLjcsNDcuNyw2MzAuNyw0Ny43Yy0xNC42LDAtMjkuMywxLjMtNDMuOCwzLjlDNDU3LDc0LjcsMzMyLjQsMTc2LjEsMzU3LjMsMzE4LjVjNS4xLDI5LjQsMTkuNyw3Ny41LDM3LjYsMTEyLjdsNS4xLDEwbC0yNzMuMSwzOTRjLTcsMTAuMi0xMS41LDMwLjYtOS40LDQyLjlsNy40LDQyLjJjMC4xLDAuNiwwLjMsMS4zLDAuNSwyQzEyOC42LDkzNy4zLDEzMSw5NDYuMSwxMzIuNyw5NTEuMXogTTcyMiwzNzguMmMtMjksMC01Ni4yLTE5LjgtODcuNi00Mi44Yy01LjktNC4zLTEyLTguOC0xOC4zLTEzLjNjLTYuMy00LjQtMTIuNS04LjctMTguNS0xMi44QzU2MiwyODUsNTMxLjMsMjY0LDUyNS4zLDIzMS4zYy0zLjUtMTguOCwyLTM4LjMsMTYuNi01OS40YzI3LjQtMzkuNSw3Mi4zLTYzLjEsMTIwLjEtNjMuMWMzMC4xLDAsNTkuMiw5LjMsODMuOSwyNi44YzY2LjEsNDYuNyw4Mi4yLDEzOC45LDM1LjksMjA1LjZDNzY0LjUsMzY2LjEsNzQ0LjksMzc4LjIsNzIyLDM3OC4yeiBNNjYyLDE0Ni41Yy0zNS40LDAtNjguOCwxNy41LTg5LjEsNDYuOWMtOC42LDEyLjUtMTIuMSwyMi42LTEwLjUsMzEuMWMzLjIsMTcuMywyNy45LDM0LjIsNTYuNSw1My44YzYuMiw0LjIsMTIuNiw4LjYsMTksMTMuMmM2LjUsNC42LDEyLjgsOS4yLDE4LjgsMTMuNmMyNSwxOC4zLDQ4LjYsMzUuNSw2NS4zLDM1LjVjNi4yLDAsMTUuOS0yLjIsMjguOS0yMC44YzM0LjUtNDkuNywyMi41LTExOC41LTI2LjctMTUzLjNDNzA1LjcsMTUzLjQsNjg0LjMsMTQ2LjUsNjYyLDE0Ni41elwiLz48L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcblxuICAgIGNvbnN0IFBlcm1pc3Npb25Qb3NpdGlvbiA9ICgpPT4oXG4gICAgICAgIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY29sb3I9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAxMDAwIDEwMDBcIiB4bWxTcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgIDxnPjxwYXRoIGQ9XCJNNjAxLjgsNDIzLjJjNDAuOC0xNy4yLDgzLjgtMjYsMTI4LjQtMjZjNC40LDAsOC44LDAuMiwxMy4yLDAuMmMyMC45LTUyLjgsMjYuMi0xMTUuMiwxNS43LTE3NS45QzczNC45LDgyLjMsNjAzLjYtMTAuNyw0NjUuNiwxMy44QzMyNy43LDM4LjMsMjExLjQsMTQ1LjUsMjM1LjksMjg0LjZjNS4yLDMwLjEsMTkuNyw3Ni45LDM2LjksMTEwLjhMMjIuNSw3NTYuNmMtOS4yLDEzLjItMTQuNSwzNy4xLTExLjcsNTMuNGwxMC45LDYxLjhjLTEwLjMtNTkuNSwyLjksMjEuNCwxMC45LDIxLjJsODIuNSwxLjFjMTUuOS0yLjksMzUuOC0xNi4zLDQ0LjYtMjkuOWw5OS0xNTQuOGwxLTFsODYuNSw2LjlsMTE1LjYtMTgxLjNjMC40LDAsMC44LDAuMiwxLjEsMC4yYzEwLjMtMTQuMiwyMS42LTI3LjYsMzQuMy00MC4yQzUyNy4yLDQ2My42LDU2Mi42LDQzOS44LDYwMS44LDQyMy4yeiBNNzYuNiw3OTQuN2wtMTIuMyw1LjJsMS4zLTEzLjRsMjM5LjgtMzQ4LjJsMTQuNCwxMy40TDc2LjYsNzk0Ljd6IE00NDEuMSwxNTQuMWMzNy45LTU0LjYsMTEyLjUtNjguMSwxNjYuNS0yOS43YzU0LjIsMzguNSw2Ny40LDExMy45LDI5LjUsMTY4LjRjLTM3LjksNTQuNS03Ni42LDE2LjEtMTMwLjctMjIuMkM0NTIuMywyMzIuMiw0MDMuMiwyMDguOCw0NDEuMSwxNTQuMXpcIi8+PHBhdGggZD1cIk03MjcsNDY0LjJjLTE0NS4zLDAtMjYzLDExNy43LTI2MywyNjNzMTE3LjcsMjYzLDI2MywyNjNjMTQ1LjMsMCwyNjMtMTE3LjcsMjYzLTI2M0M5OTAsNTgxLjksODcyLjMsNDY0LjIsNzI3LDQ2NC4yeiBNODc5LDgzNS4xYzAsMzkuMi03NS4yLDQ4LjItMTQ1LjgsNDguMmMtNzAuNiwwLTE0Ni44LTktMTQ2LjgtNDguMnYtMTAuOWMwLTI4LjksNTIuMS01OC4yLDk2LjMtNzQuMWMzLjMtMS4xLDE4LjYtOS42LDEwLTMyYy0yMi0yMi40LTM4LjUtNTguOC0zOC41LTk0LjZjMC01NC43LDM2LjItODMuNSw3OC43LTgzLjVjNDIuMywwLDc4LjksMjguNyw3OC45LDgzLjVjMCwzNS42LTE2LjcsNzEuOC0zOC41LDk0LjRoMC4yYy04LjQsMjUuNSw1LDMxLjYsNy4xLDMyLjJjNDYuNSwxNS4zLDk4LjgsNDQuNCw5OC44LDc0LjFMODc5LDgzNS4xTDg3OSw4MzUuMXpcIi8+PC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG5cbiAgICBjb25zdCBQZXJtaXNzaW9uTWFuYWdlbWVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY29sb3I9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBcbiAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICA8Zz48cGF0aCBkPVwiTTk2OC45LDQ4MS40Yy0xLjMsMTAuNS0yLjksMjEuNC01LDMxLjhsLTUuMiwyNC44bC0yNS4zLTEuMWMtMy4zLTAuMS02LjYtMC4yLTEwLTAuMmMtNzIuMiwwLTE0MC42LDMzLjYtMTkzLjYsODFjLTQuMywzLjgtOC45LDkuOS0xMi40LDE0LjVjLTYuOSw4LjktMTMuNSwxOC4yLTE5LjksMjcuNGMtMTcuNCwyNC45LTM0LjIsNTAuMy01MC43LDc1LjhjLTE2LjcsMjUuNy0zMy4xLDUxLjYtNDkuMyw3Ny42bC05LjUsMTUuM2wtODAuNi01LjVMNDA1LjMsOTczLjJsLTcuNSwzLjVDMzczLjcsOTg3LjksMzQwLDk5MCwzMTMuNiw5OTBjLTkuOSwwLTIwLTAuMi0yOS45LTFsLTE3LjctMS40bC03LjMtMTYuMmMtMTQuMy0zMS44LTE5LjItNzAuOC0yMi4zLTEwNS4yYy0wLjItMS45LTAuMy0zLjktMC41LTUuOGMtMC40LTIuMy0wLjYtNC43LTAuNC03bC0yMy40LDM0LjVsLTkuOSw0LjZjLTI1LjYsMTItNjAuMywxNC4yLTg4LjIsMTQuMmMtMTAuMSwwLTIwLjUtMC4yLTMwLjYtMWwtMjMuMy0xLjhsLTkuNi0yMS4zYy0xNC43LTMyLjktMTkuOS03Mi43LTIzLjEtMTA4LjNjLTAuMi0xLjctMC4zLTMuNS0wLjUtNS4zYy0zLTE3LjcsNi42LTMwLjYsMTUuOC00NC43YzktMTMuOCwxOC4yLTI3LjUsMjcuNC00MS4xYzI3LjMtNDAuMyw1NS04MC40LDgyLjctMTIwLjRjMzUuNi01MS40LDcxLjQtMTAyLjcsMTA3LjItMTU0Yy0yMC42LTQ2LjMtMzIuNC05Ny4xLTI5LTE0OGMxLjQtMjAuNyw2LTQ3LjcsMTUtNjYuOWMzMS4xLTY2LjIsNzguNC0xMTkuNiwxNDQuNC0xNTJDNDM0LDIwLjYsNDgyLjcsMTAsNTMxLDEwYzEzLjEsMCwyNi45LDAuNywzOS45LDIuOGM2NiwxMC45LDEyMS4zLDQyLjMsMTU5LjIsOTcuOGMwLjQsMC42LDAuOCwxLjEsMS4xLDEuN2MxMi40LDAsMjUuNCwwLjcsMzcuNiwyLjdjNjMuNCwxMC41LDExNi40LDQwLjQsMTUyLjksOTMuOGMzOS4zLDU3LjQsNTEuNiwxMjkuNyw1MS44LDE5OC4xQzk3My42LDQzMS44LDk3Miw0NTYuOCw5NjguOSw0ODEuNHogTTU2MS4xLDcxLjhjLTIuOS0wLjUtMTMuNy0yLTMwLjEtMmMtNTkuOSwwLTE2OS42LDE5LjQtMjMwLjcsMTQ5LjZjLTAuMywwLjctOC40LDE5LjItOS43LDUwLjVjLTEuMiwyOS4zLDMuNiw3Ni4zLDMzLjIsMTMzLjNsNS43LDEwLjlsLTcuMSwxMC4xQzIzOS4zLDU0Mi44LDEwNi45LDczMy40LDg2LjksNzY2LjRjMC4xLDAuOCwwLjEsMS42LDAuMiwyLjZjMS40LDE1LjksNC41LDUwLjQsMTMuNyw3Ny44YzMuOCwwLjEsOC40LDAuMiwxMy4zLDAuMmMyNS4yLDAsNDUuNS0yLjQsNTguMi02LjdsMTEwLjItMTYyLjNsNjMuMiw0LjNjNC45LTcuMSw5LjgtMTQuMSwxNC43LTIxLjJjMzYuNi01Mi45LDczLjQtMTA1LjcsMTEwLjMtMTU4LjRjLTIxLjQtNDYuMi0zMy44LTk3LjItMzAuNC0xNDguM2MxLTE1LDMuNC0zMC4xLDcuNC00NC41Yy0zLjQtMi44LTYuOS01LjUtMTAuMy04LjNjLTIzLjEtMTguNS01NS4xLTQxLjYtNTcuNy03My42Yy0xLjItMTQuOCwzLjgtMjguOCwxMy44LTM5LjhjMzguMi00Mi41LDk0LjEtNzQuMiwxNTIuMy03NC4yYzI1LjYsMCw1MC40LDYuMiw3MS44LDE5LjRjMTQtNS40LDI4LjQtOS44LDQzLjEtMTMuMUM2MzUsOTQuNyw2MDEuNyw3OC41LDU2MS4xLDcxLjh6IE00NzQuMSwyNTQuM2MxOS4zLTMxLjIsNDMtNTguNSw3MS43LTgwLjdjLTM1LjgsMC03NC43LDE5LjEtMTA0LjksNTEuMkM0NDYuMywyMzIsNDYxLjksMjQ0LjYsNDc0LjEsMjU0LjN6IE04ODAuMiwyMzcuMWMtMjctMzkuNS02Ny4zLTYzLjktMTE5LjUtNzIuNWMtMi45LTAuNS0xMy43LTItMzAuMS0yYy01OS45LDAtMTY5LjYsMTkuNC0yMzAuNywxNDkuNmMtMC4zLDAuNy04LjQsMTkuMi05LjcsNTAuNWMtMS4yLDI5LjMsMy42LDc2LjMsMzMuMiwxMzMuM2w1LjcsMTAuOWwtNy4xLDEwLjFjLTgzLjEsMTE4LjYtMjE1LjUsMzA5LjItMjM1LjUsMzQyLjJjMC4xLDAuOCwwLjEsMS42LDAuMiwyLjZjMS40LDE1LjksNC41LDUwLjQsMTMuNyw3Ny44YzMuOCwwLjEsOC40LDAuMiwxMy4zLDAuMmMyNS4yLDAsNDUuNS0yLjQsNTguMi02LjdsMTEwLjItMTYyLjNsNzkuMyw1LjRjMjUuNS00MC44LDEwOC42LTE3Mi4zLDEzNS0xOTUuOGMzOC40LTM0LjQsMTE3LjctOTEuNSwyMjEuMS05My43QzkyNCw0NDIuNCw5MzUuOCwzMTguMiw4ODAuMiwyMzcuMXogTTgxMi4yLDQ3Ny4yYy04LjcsOS43LTIwLjIsMTUuMy0zMy4zLDE1LjNjLTIuNCwwLTQuOC0wLjItNy4yLTAuNmMtMTItMS45LTIyLjMtOC4zLTMxLjYtMTUuOWMtMTAuOC04LjgtMjAuNy0xOS4zLTMwLjQtMjkuM2MtMTAuNy0xMS4xLTIxLjQtMjIuMi0zMi45LTMyLjVjLTExLTkuOC0yMi40LTE5LjEtMzMuOS0yOC4zYy0xMS42LTkuMy0yMy44LTE4LjgtMzQuMS0yOS40Yy04LjctOC45LTE2LjQtMTkuMy0xOS4xLTMxLjdjLTAuNC0xLjktMC43LTMuOS0wLjktNS45Yy0xLTEyLjIsMy4yLTIzLjYsMTEuNC0zMi43YzM2LjMtNDAuNCw4OS43LTcxLDE0NS4yLTcxYzMwLjcsMCw2MC4xLDkuNSw4My4xLDMwLjJjMzEuMiwyOCw0Mi44LDcwLjIsMzkuMSwxMTFDODYzLjQsNDAxLjUsODQyLjEsNDQ0LDgxMi4yLDQ3Ny4yeiBNNzk0LjgsMjgzYy0xMi42LTExLjQtMjkuOC0xNy40LTQ5LjYtMTcuNGMtMzUuOCwwLTc0LjcsMTkuMS0xMDQuOSw1MS4yYzUuNiw3LjMsMjEuNywyMC4yLDMzLjksMzBjMTEuMSw4LjksMjMuNiwxOC45LDM2LjEsMzAuMWMxMy4zLDEyLDI1LjEsMjQuMiwzNS41LDM1YzEwLjMsMTAuNiwyMy44LDI0LjcsMzEuMiwyOS4yYzIzLjMtMjYuOCwzNy42LTU4LjMsNDAuNC04OUM4MjAuMSwzMjMsODEyLjEsMjk4LjUsNzk0LjgsMjgzeiBNNTYyLjcsNTkzLjRMNTYyLjcsNTkzLjRMNDEzLjgsODAyYy0wLjEsMC4xLTAuMSwwLjItMC4yLDAuM2MtOS44LDEzLjUtMjksMTkuMy00My4zLDkuMmMtMTQuMy0xMC4yLTE1LjEtMzAuMy01LjMtNDRsMTQ5LjItMjA4LjljOS43LTEzLjYsMjkuMS0xOS41LDQzLjQtOS4zYzE0LjMsMTAuMiwxNS4xLDMwLjMsNS4zLDQ0TDU2Mi43LDU5My40eiBNMzgyLjksNTA4LjlsLTAuMywwLjRsMCwwLjFMMjMzLjgsNzE3LjhjLTAuMSwwLjEtMC4xLDAuMi0wLjIsMC4zYy0xMi45LDE3LjgtMzgsMjQuNi01Ni42LDExLjNjLTE4LjctMTMuMy0yMC40LTM5LjMtNy41LTU3LjRsMTQ5LjItMjA4LjljMTIuOC0xNy45LDM4LjEtMjQuOCw1Ni43LTExLjVDMzk0LDQ2NC45LDM5NS44LDQ5MC45LDM4Mi45LDUwOC45elwiLz48L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICBnZXRJdGVtKFwiTmjDom4gc+G7sVwiLCBcInN1Yi1tZW51LTFcIiwgPE1kUGVvcGxlT3V0bGluZSAvPiwgW1xuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wcm9maWxlYH0+SOG7kyBzxqE8L0xpbms+LCBcIjFcIiwgPEJzRmlsZUVhcm1hcmtGaWxsIC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvZGVwYXJ0bWVudGB9PkLhu5kgcGjhuq1uIGPDtG5nIHTDoWM8L0xpbms+LCBcIjJcIiwgPEZjRGVwYXJ0bWVudCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Bvc2l0aW9uYH0+Q2jhu6ljIGRhbmgsIGNo4bupYyB24bulPC9MaW5rPiwgXCIzXCIsIDxQb3NpdGlvbkl0ZW0gLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9teXByb2ZpbGUvJHtqd3RfZGVjb2RlKFRPS0VOKT8uaWR9YH0+VGjDtG5nIHRpbiBjw6EgbmjDom48L0xpbms+LCBcIjRcIiwgPEltUHJvZmlsZSAvPiksXG4gICAgICAgIF0pLFxuICAgICAgICBnZXRJdGVtKFwiUXV54buBblwiLCBcInN1Yi1tZW51LTJcIiwgPFBlcm1pc3Npb25NZW51IC8+LCBbXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vbWFuYWdlYH0+UXXhuqNuIGzDvSBxdXnhu4FuPC9MaW5rPiwgXCI1XCIsIDxQZXJtaXNzaW9uTWFuYWdlbWVudCAvPiApLFxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL3Bvc2l0aW9uYH0+UXV54buBbiBjaOG7qWMgduG7pTwvTGluaz4sIFwiNlwiLCA8UGVybWlzc2lvblBvc2l0aW9uIC8+KSxcblxuICAgICAgICBdKVxuICAgIF07XG5cbiAgICBjb25zdCByZW5kZXJTdWJNZW51ICA9ICgpPT57XG4gICAgICAgIGlmKHVyaSA9PT0gXCJwcm9maWxlLXNlcnZpY2VcIil7XG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17W2BzdWIxYF19XG4gICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgPD57cmVuZGVyU3ViTWVudSgpfTwvPlxuICAgIClcbn1cbiIsImltcG9ydCB7IGNoZWNrTWljcm9GZSwgZ2V0VG9rZW5JbkNvb2tpZSB9IGZyb20gXCIuLi91bHRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBjb25zdCBUT0tFTiA9IGdldFRva2VuSW5Db29raWUoKTtcblxuLy8gVE9LRU4gQURNSU4sIE5Iw4JOIFPhu7Bcbi8vIGV4cG9ydCBjb25zdCBUT0tFTiA9IFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TVN3aVpYaHdJam95TnpVd05ERXhNRGczZlEudVdlRUpFWEh5Tnlzdzg1azIybTBzNmRGTmk0bkpGQU84TlM4bGVZNmZ5QVwiO1xuLy8gVE9LRU4gdXNlclxuLy8gZXhwb3J0IGNvbnN0IFRPS0VOID0gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZOaXdpWlhod0lqb3lOelV3TkRZM01Ea3dmUS5qUzJMcFNycENTb3NqdU1MVDFNSmN1bzFOSWVtbWZ2LWhrcW80eWNpTnk4XCJcbmV4cG9ydCBjb25zdCBsb2NhbCA9IGNoZWNrTWljcm9GZSgpID09PSB0cnVlID8gXCJodHRwczovL3Byb2ZpbGVzZXJ2aWNlLnR1b2l0cmUudm5cIiA6IFwiXCJcblxuXG5leHBvcnQgY29uc3QgcXVhVHJpbmhMVkhUID0gXCJRdcOhIHRyw6xuaCBsw6BtIHZp4buHYyB2w6AgaOG7jWMgdOG6rXBcIjtcbmV4cG9ydCBjb25zdCB0aGFtR2lhVG9DaHVjQ1QgPSBcIlRoYW0gZ2lhIGPDoWMgdOG7lSBjaOG7qWMgY2jDrW5oIHRy4buLLCBjw6FjIGjDtOG7iyBuZ2jhu4EgbmdoaeG7h3BcIjtcbmV4cG9ydCBjb25zdCBkYW9UYW8gPSBcIsSQw6BvIHThuqFvXCI7XG5leHBvcnQgY29uc3QgYm9pRHVvbmcgPSBcIkLhu5NpIGTGsOG7oW5nXCI7XG5leHBvcnQgY29uc3Qga2hlblRodW9uZyA9IFwiS2hlbiB0aMaw4bufbmdcIjtcbmV4cG9ydCBjb25zdCBreUx1YXQgPSBcIkvhu7cgbHXhuq10XCI7XG5leHBvcnQgY29uc3QgbGljaFN1QmFuVGhhbiA9IFwiTOG7i2NoIHPhu60gYuG6o24gdGjDom5cIjtcbmV4cG9ydCBjb25zdCBxdWFuSGVHaWFEaW5oID0gXCJRdWFuIGjhu4cgZ2lhIMSRw6xuaFwiO1xuZXhwb3J0IGNvbnN0IG5vaVNpbmhfU3RlcDEgPSBcIk7GoWkgc2luaFwiXG5leHBvcnQgY29uc3QgcXVlUXVhbl9TdGVwMSA9IFwiUXXDqiBxdcOhblwiXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfSUQgPSBcIkdFVF9QUk9GSUxFX0JZX0lEXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST1ZJTkNFUyA9IFwiR0VUX1BST1ZJTkNFU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfQklSVEhfUExBQ0UgPSBcIkdFVF9ESVNUUklDVFNfQklSVEhfUExBQ0VcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTiA9IFwiR0VUX0RJU1RSSUNUU19IT01FX1RPV05cIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0FERFJFU1MgPSBcIkdFVF9ESVNUUklDVFNfQUREUkVTU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfSE9LSEFVID0gXCJHRVRfRElTVFJJQ1RTX0hPS0hBVVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDggPSBcIkdFVF9ESVNUUklDVFNfU1RFUDhcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA3ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA3XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQOSA9IFwiR0VUX0RJU1RSSUNUU19TVEVQOVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDdfQ09OID0gXCJHRVRfRElTVFJJQ1RTX1NURVA3X0NPTlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9GSUxFID0gXCJVUERBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QUk9GSUxFID0gXCJDUkVBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IE9OTFlfQ1JFQVRFX1BST0ZJTEUgPSBcIk9OTFlfQ1JFQVRFX1BST0ZJTEVcIjtcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MSVNUID0gXCJHRVRfVVNFUl9MSVNUXCI7XG5leHBvcnQgY29uc3QgR0VUX1VTRVJfSU5GT1JNQVRJT04gPSBcIkdFVF9VU0VSX0lORk9STUFUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUF9QT1MgPSBcIkdFVF9ERVBBUlRNRU5UX1BPU0lUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX1BBUlQgPSBcIkdFVF9QQVJUXCI7XG5leHBvcnQgY29uc3QgR0VUX0FWQVRBUiA9IFwiR0VUX0FWQVRBUlwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ERVBfUE9TID0gXCJERUxFVEVfREVQX1BPU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UX0xJU1QgPSBcIkdFVF9ERVBBUlRNRU5UX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfREVQQVJUTUVOVCA9IFwiVVBEQVRFX0RFUEFSVE1FTlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQQVJUTUVOVF9JTkZPUiA9IFwiR0VUX0RFUEFSVE1FTlRfSU5GT1JcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfREVQQVJUTUVOVCA9IFwiQ1JFQVRFX0RFUEFSVE1FTlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfUE9TSVRJT05TX0xJU1QgPSBcIkdFVF9QT1NJVElPTlNfTElTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NJVElPTl9UWVBFX0xJU1QgPSBcIkdFVF9QT1NJVElPTl9UWVBFX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TSVRJT05fVFlQRSA9IFwiQ1JFQVRFX1BPU0lUSU9OX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TSVRJT05fVFlQRSA9IFwiVVBEQVRFX1BPU0lUSU9OX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TSVRJT05fVFlQRSA9IFwiREVMRVRFX1BPU0lUSU9OX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIkNSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSU09OQUxfSElTVE9SWSA9IFwiR0VUX1BFUlNPTkFMX0hJU1RPUllcIlxuZXhwb3J0IGNvbnN0IENSRUFURV9QRVJTT05BTF9ISVNUT1JZID0gXCJDUkVBVEVfUEVSU09OQUxfSElTVE9SWVwiXG5leHBvcnQgY29uc3QgVVBEQVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIlVQREFURV9QRVJTT05BTF9ISVNUT1JZXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiREVMRVRFX1BFUlNPTkFMX0hJU1RPUllcIlxuZXhwb3J0IGNvbnN0IENSRUFURV9QQVJUWSA9IFwiQ1JFQVRFX1BBUlRZXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFSVFkgPSBcIlVQREFURV9QQVJUWVwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX09SR0FOSVpBVElPTiA9IFwiQ1JFQVRFX09SR0FOSVpBVElPTlwiXG5leHBvcnQgY29uc3QgVVBEQVRFX09SR0FOSVpBVElPTiA9IFwiVVBEQVRFX09SR0FOSVpBVElPTlwiXG5leHBvcnQgY29uc3QgREVMRVRFX09SR0FOSVpBVElPTiA9IFwiREVMRVRFX09SR0FOSVpBVElPTlwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1RSQUlOSU5HID0gXCJDUkVBVEVfVFJBSU5JTkdcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9UUkFJTklORyA9IFwiVVBEQVRFX1RSQUlOSU5HXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfVFJBSU5JTkcgPSBcIkRFTEVURV9UUkFJTklOR1wiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkVcIlxuZXhwb3J0IGNvbnN0IERFTEVURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIlVQREFURV9SRVdBUkRfRElTQ0lQTElORVwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAgPSBcIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCA9IFwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBcIlxuZXhwb3J0IGNvbnN0IEdFVF9ERVBfUE9TX1RPX1NFQVJDSCA9IFwiR0VUX0RFUF9QT1NfVE9fU0VBUkNIXCJcbmV4cG9ydCBjb25zdCBTRUFSQ0ggPSBcIlNFQVJDSFwiXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVVNFUl9JRCA9IFwiR0VUX1BST0ZJTEVfQllfVVNFUl9JRFwiXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVE9LRU4gPSBcIkdFVF9QUk9GSUxFX0JZX1RPS0VOXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPRklMRV9BQ1RJVkUgPSBcIlVQREFURV9QUk9GSUxFX0FDVElWRVwiXG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fTElTVCA9IFwiR0VUX1BFUk1JU1NJT05fTElTVFwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUk1JU1NJT04gPSBcIkNSRUFURV9QRVJNSVNTSU9OXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUEVSTUlTU0lPTiA9IFwiVVBEQVRFX1BFUk1JU1NJT05cIlxuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OID0gXCJERUxFVEVfUEVSTUlTU0lPTlwiXG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fUE9TSVRJT04gPSBcIkdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OXCJcbmV4cG9ydCBjb25zdCBHRVRfVEFCTEVfTUFOQUdFTUVOVCA9IFwiR0VUX1RBQkxFX01BTkFHRU1FTlRcIiIsImltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IGRvY0Nvb2tpZSBmcm9tIFwiZG9jLWNvb2tpZXNcIlxuXG5leHBvcnQgbGV0IGhhbmRsZURhdGVUaW1lID0gKGRhdGUpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgY29udmVydDtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IHThu6sgc+G7kSBzYW5nIGNodeG7l2kgREQtTU0tWVlZWVxuICAgICAgICAgICAgbGV0IGNvbnZlcnQxID0gbW9tZW50KG5ldyBEYXRlKGRhdGUpKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGxldCBjb252ZXJ0VG9OdW1iZXIgPSBEYXRlLnBhcnNlKGRhdGUpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb252ZXJ0VG9OdW1iZXIpXG4gICAgICAgICAgICBsZXQgY29udmVydDEgPSBtb21lbnQobmV3IERhdGUoZGF0ZSkpLmZvcm1hdChcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnZlcnQxKVxuICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udmVydClcbiAgICAgICAgcmV0dXJuIGNvbnZlcnRcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgY2hlY2tNaWNyb0ZlID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjMwMDBcIikgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJwcm9maWxlc2VydmljZVwiKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcIjMwMDFcIikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGxldCBnZXRUb2tlbkluQ29va2llID0gKCk9PntcbiAgICB0cnkge1xuICAgICAgICBsZXQgdG9rZW5Db29raWUgPSBkb2NDb29raWUuZ2V0SXRlbShcInVzZXJ0b2tlblwiKVxuICAgICAgICBpZighdG9rZW5Db29raWUpe1xuICAgICAgICAgICAgLy8ga2hpIHB1c2ggY29kZSBsw6puIHNlcnZlclxuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIC8vIEtoaSB0ZXN0IHRyw6puIGxvY2FsXG4gICAgICAgICAgICAvLyByZXR1cm4gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNelUyTENKbGVIQWlPakkzTlRBMU5UUTNNekI5LmRyQk9fRzdGOUpDRGk3WG1MUm1mMTRRdlVxWWU4Y1c0aW5CSWJRc21SWUlcIlxuICAgICAgICAgICAgLy8gcmV0dXJuIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TVN3aVpYaHdJam95TnpVd05ERXhNRGczZlEudVdlRUpFWEh5Tnlzdzg1azIybTBzNmRGTmk0bkpGQU84TlM4bGVZNmZ5QVwiXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codG9rZW5Db29raWUpO1xuICAgICAgICByZXR1cm4gdG9rZW5Db29raWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIk1kUGVvcGxlT3V0bGluZSIsIkxpbmsiLCJCc0ZpbGVFYXJtYXJrRmlsbCIsIkZjRGVwYXJ0bWVudCIsImNoZWNrTWljcm9GZSIsIkltUHJvZmlsZSIsImp3dF9kZWNvZGUiLCJUT0tFTiIsIlN1Yk1lbnUiLCJ1cmkiLCJnZXRJdGVtIiwibGFiZWwiLCJrZXkiLCJpY29uIiwiY2hpbGRyZW4iLCJQb3NpdGlvbkl0ZW0iLCJQZXJtaXNzaW9uTWVudSIsIlBlcm1pc3Npb25Qb3NpdGlvbiIsIlBlcm1pc3Npb25NYW5hZ2VtZW50IiwiaXRlbXMiLCJpZCIsInJlbmRlclN1Yk1lbnUiLCJnZXRUb2tlbkluQ29va2llIiwibG9jYWwiLCJxdWFUcmluaExWSFQiLCJ0aGFtR2lhVG9DaHVjQ1QiLCJkYW9UYW8iLCJib2lEdW9uZyIsImtoZW5UaHVvbmciLCJreUx1YXQiLCJsaWNoU3VCYW5UaGFuIiwicXVhbkhlR2lhRGluaCIsIm5vaVNpbmhfU3RlcDEiLCJxdWVRdWFuX1N0ZXAxIiwiR0VUX1BST0ZJTEVfQllfSUQiLCJHRVRfUFJPVklOQ0VTIiwiR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRSIsIkdFVF9ESVNUUklDVFNfSE9NRV9UT1dOIiwiR0VUX0RJU1RSSUNUU19BRERSRVNTIiwiR0VUX0RJU1RSSUNUU19IT0tIQVUiLCJHRVRfRElTVFJJQ1RTX1NURVA4IiwiR0VUX0RJU1RSSUNUU19TVEVQNyIsIkdFVF9ESVNUUklDVFNfU1RFUDkiLCJHRVRfRElTVFJJQ1RTX1NURVA3X0NPTiIsIlVQREFURV9QUk9GSUxFIiwiQ1JFQVRFX1BST0ZJTEUiLCJPTkxZX0NSRUFURV9QUk9GSUxFIiwiR0VUX1VTRVJfTElTVCIsIkdFVF9VU0VSX0lORk9STUFUSU9OIiwiR0VUX0RFUF9QT1MiLCJHRVRfUEFSVCIsIkdFVF9BVkFUQVIiLCJERUxFVEVfREVQX1BPUyIsIkdFVF9ERVBBUlRNRU5UX0xJU1QiLCJVUERBVEVfREVQQVJUTUVOVCIsIkdFVF9ERVBBUlRNRU5UX0lORk9SIiwiQ1JFQVRFX0RFUEFSVE1FTlQiLCJHRVRfUE9TSVRJT05TX0xJU1QiLCJHRVRfUE9TSVRJT05fVFlQRV9MSVNUIiwiQ1JFQVRFX1BPU0lUSU9OX1RZUEUiLCJVUERBVEVfUE9TSVRJT05fVFlQRSIsIkRFTEVURV9QT1NJVElPTl9UWVBFIiwiQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UIiwiVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UIiwiREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UIiwiR0VUX1BFUlNPTkFMX0hJU1RPUlkiLCJDUkVBVEVfUEVSU09OQUxfSElTVE9SWSIsIlVQREFURV9QRVJTT05BTF9ISVNUT1JZIiwiREVMRVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJDUkVBVEVfUEFSVFkiLCJVUERBVEVfUEFSVFkiLCJDUkVBVEVfT1JHQU5JWkFUSU9OIiwiVVBEQVRFX09SR0FOSVpBVElPTiIsIkRFTEVURV9PUkdBTklaQVRJT04iLCJDUkVBVEVfVFJBSU5JTkciLCJVUERBVEVfVFJBSU5JTkciLCJERUxFVEVfVFJBSU5JTkciLCJDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkUiLCJERUxFVEVfUkVXQVJEX0RJU0NJUExJTkUiLCJVUERBVEVfUkVXQVJEX0RJU0NJUExJTkUiLCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCIsIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQIiwiR0VUX0RFUF9QT1NfVE9fU0VBUkNIIiwiU0VBUkNIIiwiR0VUX1BST0ZJTEVfQllfVVNFUl9JRCIsIkdFVF9QUk9GSUxFX0JZX1RPS0VOIiwiVVBEQVRFX1BST0ZJTEVfQUNUSVZFIiwiR0VUX1BFUk1JU1NJT05fTElTVCIsIkNSRUFURV9QRVJNSVNTSU9OIiwiVVBEQVRFX1BFUk1JU1NJT04iLCJERUxFVEVfUEVSTUlTU0lPTiIsIkdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OIiwiR0VUX1RBQkxFX01BTkFHRU1FTlQiLCJtb21lbnQiLCJkb2NDb29raWUiLCJoYW5kbGVEYXRlVGltZSIsImRhdGUiLCJjb252ZXJ0IiwiY29udmVydDEiLCJEYXRlIiwiZm9ybWF0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5jbHVkZXMiLCJ0b2tlbkNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=