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
  var _jwt_decode, _jwt_decode2;

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
  var items_user = [getItem("Nhân sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdPeopleOutline, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/myprofile/").concat((_jwt_decode2 = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode2 === void 0 ? void 0 : _jwt_decode2.id),
    children: "Th\xF4ng tin c\xE1 nh\xE2n"
  }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_10__.ImProfile, {}))])];

  var renderSubMenu = function renderSubMenu() {
    if (uri === "profile-service") {
      return items;
    } else {
      var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN);

      if (decoded.id === 1) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "sidebar_SubMenu__XZeb6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu // defaultOpenKeys={[`sub1`]}
          , {
            mode: "inline",
            items: items
          })
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "sidebar_SubMenu__XZeb6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu // defaultOpenKeys={[`sub1`]}
          , {
            mode: "inline",
            items: items_user
          })
        });
      }
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
/* harmony export */   "SEARCH_DEPARTMENT": function() { return /* binding */ SEARCH_DEPARTMENT; },
/* harmony export */   "TOKEN": function() { return /* binding */ TOKEN; },
/* harmony export */   "UPDATE_DEPARTMENT": function() { return /* binding */ UPDATE_DEPARTMENT; },
/* harmony export */   "UPDATE_FAMILY_RELATIONSHIP": function() { return /* binding */ UPDATE_FAMILY_RELATIONSHIP; },
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
var local = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_0__.checkMicroFe)() === true ? "https://profileservice.tuoitre.vn" : ""; // Regex

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
var CREATE_FAMILY_RELATIONSHIP_STEP7 = "CREATE_FAMILY_RELATIONSHIP_STEP7";
var UPDATE_FAMILY_RELATIONSHIP_STEP7 = "UPDATE_FAMILY_RELATIONSHIP_STEP7";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFZSxTQUFTVSxPQUFULEdBQW1CO0VBQUE7O0VBRTlCLElBQUlDLEdBQUcsR0FBR0wsNERBQVksT0FBTyxJQUFuQixHQUEwQixpQkFBMUIsR0FBOEMsRUFBeEQ7O0VBRUEsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBbUJDLFFBQW5CLEVBQWdDO0lBQzVDLE9BQU87TUFDSEgsS0FBSyxFQUFMQSxLQURHO01BRUhDLEdBQUcsRUFBSEEsR0FGRztNQUdIQyxJQUFJLEVBQUpBLElBSEc7TUFJSEMsUUFBUSxFQUFSQTtJQUpHLENBQVA7RUFNSCxDQVBEOztFQVNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0lBQUEsb0JBQ2I7TUFBSyxNQUFNLEVBQUMsY0FBWjtNQUEyQixJQUFJLEVBQUMsY0FBaEM7TUFBK0MsS0FBSyxFQUFDLGNBQXJEO01BQW9FLE9BQU8sRUFBQyxLQUE1RTtNQUFrRixLQUFLLEVBQUMsNEJBQXhGO01BQ1AsT0FBTyxFQUFDLDJCQUREO01BRVIsbUJBQW1CLEVBQUMsZUFGWjtNQUFBLHVCQUdKO1FBQUcsU0FBUyxFQUFDLDBEQUFiO1FBQXdFLE1BQU0sRUFBQyxNQUEvRTtRQUFBLHdCQUNBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFEQSxlQU9BO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFQQSxlQVlBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFaQSxlQWtCQTtVQUFNLENBQUMsRUFBQztRQUFSLEVBbEJBLGVBd0JBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUF4QkEsZUErQkE7VUFBTSxDQUFDLEVBQUM7UUFBUixFQS9CQSxlQXFDQTtV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LEVBQWdCO01BQ1o7TUFDQSxPQUFPLElBQVAsQ0FGWSxDQUdaO01BQ0E7TUFDQTtJQUNILENBUkQsQ0FTQTs7O0lBQ0EsT0FBT0EsV0FBUDtFQUNILENBWEQsQ0FXRSxPQUFPUCxLQUFQLEVBQWM7SUFDWkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7RUFDSDtBQUNKLENBZk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci9TdWJNZW51LmpzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvdGl0bGUvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy91bHRpbHMvaGVscGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiXG5pbXBvcnQgeyBNZFBlb3BsZU91dGxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIlxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBCc0ZpbGVFYXJtYXJrRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiXG5pbXBvcnQgeyBGY0RlcGFydG1lbnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmNcIlxuaW1wb3J0IHsgY2hlY2tNaWNyb0ZlIH0gZnJvbSAnLi4vLi4vdWx0aWxzL2hlbHBlcic7XG5pbXBvcnQge0ltUHJvZmlsZX0gZnJvbSBcInJlYWN0LWljb25zL2ltXCJcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQge1RPS0VOfSBmcm9tIFwiLi4vLi4vdGl0bGUvdGl0bGVcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJNZW51KCkge1xuICAgIFxuICAgIGxldCB1cmkgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwicHJvZmlsZS1zZXJ2aWNlXCIgOiBcIlwiO1xuXG4gICAgY29uc3QgZ2V0SXRlbSA9IChsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFBvc2l0aW9uSXRlbSA9ICgpPT4oXG4gICAgICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgdmlld0JveD1cIjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDBcIlxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cGF0aCBkPVwiTTQzMTAgNDc4MyBjLTEwNSAtMTggLTIyOSAtODAgLTI5OSAtMTUyIC0xMDAgLTEwMCAtMTQxIC0yMDggLTE0MVxuICAgICAgICAtMzY3IDAgLTMyNSAxNzggLTU2MyA0NTIgLTYwNSAyMzcgLTM3IDQ2NiAxMTIgNTU1IDM2MiAyMiA2MiAyNyA5NiAzMSAyMDYgNFxuICAgICAgICAxMTUgMSAxNDEgLTE3IDIwMyAtMjggOTMgLTcwIDE1OCAtMTM4IDIxOSAtMTE4IDEwNSAtMjk1IDE1OSAtNDQzIDEzNHogbTE0NFxuICAgICAgICAtMjM4IGM1OSAtMTAgMTMwIC00OSAxNjUgLTkyIDk3IC0xMTcgNzQgLTM2OSAtNDQgLTQ4OCAtNTAgLTQ5IC05MCAtNjcgLTE2NVxuICAgICAgICAtNzMgLTE1NSAtMTEgLTI2OCA5NyAtMzAwIDI4OCAtMjYgMTU0IDE1IDI2NyAxMTkgMzI4IDQ1IDI2IDE0MiA1MyAxNzEgNDcgOFxuICAgICAgICAtMiAzMyAtNiA1NCAtMTB6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTI0MjAgNDExNCBjLTE4MCAtNDggLTMyMiAtMTg0IC0zNjQgLTM0OSAtMjAgLTc1IC0yMCAtMjM3IC0xIC0zMzBcbiAgICAgICAgMjIgLTEwNiA3NiAtMjA2IDE1NCAtMjg1IDEwMSAtMTAzIDIxMiAtMTUwIDM1MSAtMTUwIDEzOSAwIDI1MCA0NyAzNTEgMTUwXG4gICAgICAgIDExNSAxMTcgMTY5IDI2MiAxNjkgNDU0IDAgMTYxIC00MyAyNzYgLTE0MSAzNzQgLTYzIDYzIC0xNTIgMTEzIC0yNDUgMTM3IC03M1xuICAgICAgICAxOSAtMjAxIDE4IC0yNzQgLTF6IG0yNjcgLTI0NCBjMTM0IC01NyAxODggLTE5NSAxNDkgLTM3NSAtMzUgLTE2NCAtMTM3IC0yNjBcbiAgICAgICAgLTI3NiAtMjYwIC0xNjkgMCAtMjg4IDE1MyAtMjkwIDM3MSAtMSAyMTkgMjEwIDM1MyA0MTcgMjY0elwiLz5cbiAgICAgICAgPHBhdGggZD1cIk02NTUgMzQ3NCBjLTE1MiAtMzcgLTIyMyAtNzIgLTMwNiAtMTU0IC0xMDYgLTEwNSAtMTM4IC0xOTIgLTEzOVxuICAgICAgICAtMzc1IDAgLTEzMSAxOCAtMjEzIDY3IC0zMTMgOTkgLTIwMCAzMTggLTMxOSA1MjYgLTI4NCAyNzIgNDcgNDQ3IDI4MyA0NDdcbiAgICAgICAgNjA2IDAgMjQ1IC0xMTUgNDA4IC0zNDUgNDkyIC02NCAyMyAtMjA1IDM5IC0yNTAgMjh6IG0xNDAgLTIzOSBjODQgLTE0IDE2OVxuICAgICAgICAtODAgMjAyIC0xNTYgMzIgLTc1IDIzIC0yMzIgLTE5IC0zMjcgLTI5IC02NCAtOTAgLTEyNiAtMTUwIC0xNTIgLTQyIC0xOCAtNjVcbiAgICAgICAgLTIxIC0xMTggLTE4IC03NSA2IC0xMTUgMjQgLTE2NSA3MyAtMTE4IDExOSAtMTQxIDM3MSAtNDQgNDg4IDE3IDIxIDUwIDQ3IDcyXG4gICAgICAgIDU5IDQ1IDIzIDE0MiA0OCAxNjcgNDMgOCAtMiAzMyAtNiA1NSAtMTB6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTQyMTYgMzQzNCBjLTE2NCAtNDEgLTMxMCAtMTQyIC0zODUgLTI2NiAtNDAgLTY4IC01OCAtMTM1IC0xMTVcbiAgICAgICAgLTQ0MyAtNjIgLTMzNiAtNjIgLTM1MyA0IC0zOTggMjIgLTE1IDY0IC0xNyA0MDMgLTE3IDQxNSAwIDQyMSAxIDQ1MiA2MCAxOVxuICAgICAgICAzNyAxOSA3MyAwIDExMCAtMzAgNTcgLTQ1IDYwIC0zNjUgNjAgbC0yOTAgMCA1IDIzIGMyIDEyIDIxIDExMCA0MCAyMTcgNDBcbiAgICAgICAgMjE3IDYzIDI3NyAxMjUgMzM0IDE5MSAxNzIgNTYzIDEyNCA2NjcgLTg2IDE0IC0yNyA0MiAtMTUyIDc4IC0zNDMgMzEgLTE2NFxuICAgICAgICA2MSAtMzA3IDY2IC0zMTYgNDMgLTgyIDE3NCAtNzUgMjA5IDExIDEyIDMwIDEwIDUyIC0xOSAyMTQgLTczIDQwMSAtODggNDY3XG4gICAgICAgIC0xMjYgNTQzIC02NCAxMjkgLTE5MiAyMzIgLTM1MCAyODMgLTkwIDI5IC0zMDggMzcgLTM5OSAxNHpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjQyNSAyNzg2IGMtMjMxIC00NiAtMzk1IC0xNzMgLTQ2MyAtMzU4IC0xMiAtMzEgLTQ3IC0xOTUgLTc4IC0zNjVcbiAgICAgICAgbC01NyAtMzA3IDE5IC0zNiBjMzcgLTY5IDQ2IC03MCA0NDQgLTY5IDI0OCAwIDM2NSA0IDM5MCAxMiA0MCAxNCA4MCA2NyA4MFxuICAgICAgICAxMDcgMCA0MCAtNDAgOTMgLTgwIDEwNyAtMjQgOCAtMTI1IDEyIC0zMTMgMTIgbC0yNzkgMSA2IDI4IGMzIDE1IDIyIDExMSA0MVxuICAgICAgICAyMTQgNDAgMjEwIDQzIDIyMiA4NSAyODMgNjIgOTEgMTkwIDE0NSAzNDAgMTQ1IDE1NyAwIDI4MCAtNTUgMzQ3IC0xNTYgMzdcbiAgICAgICAgLTU2IDQ2IC05MiAxMjggLTUzNiAzMCAtMTY2IDQ0IC0xOTEgMTA2IC0yMDggNTMgLTE0IDEwNiAxMCAxMzMgNjAgbDE5IDM2XG4gICAgICAgIC01NyAzMDcgYy02MCAzMjYgLTc4IDM5MSAtMTM0IDQ3NSAtNjkgMTA2IC0yMDkgMTk5IC0zNTcgMjM3IC04NiAyMiAtMjM2IDI3XG4gICAgICAgIC0zMjAgMTF6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTU0MyAyMTIwIGMtMjAwIC01MiAtMzUwIC0xNzggLTQxMiAtMzQ1IC0xOCAtNDkgLTEzMSAtNjIzIC0xMzFcbiAgICAgICAgLTY2NyAwIC0zMiAyOSAtNzcgNjAgLTkzIDI0IC0xMyA4OSAtMTUgNDA1IC0xNSAzMzQgMCAzODAgMiA0MDUgMTcgNzMgNDMgNzNcbiAgICAgICAgMTUzIDAgMTk2IC0yNCAxNSAtNjUgMTcgLTMxOSAxNyAtMTYwIDAgLTI5MSAzIC0yOTEgNyAwIDQ0IDg2IDQ0OCAxMDMgNDgxXG4gICAgICAgIDEyNiAyNTQgNjA5IDI1MyA3MzEgLTEgMTggLTM3IDQwIC0xMzMgNzYgLTMyNyA2MyAtMzQ3IDU2IC0zMTggOTUgLTM1NyA0M1xuICAgICAgICAtNDMgOTggLTQ2IDE0NCAtNyA1NiA0NiA1NSA2NCAtNSAzODcgLTMwIDE2MSAtNjIgMzE2IC03MSAzNDYgLTUzIDE3MiAtMjM1XG4gICAgICAgIDMyMiAtNDQyIDM2NiAtMTAwIDIxIC0yNTggMTkgLTM0OCAtNXpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMzczOCAxODc5IGMtMTQgLTYgLTE1OSAtMTUzIC0zMjMgLTMzMCBsLTI5NiAtMzE5IC01OTkgMCBjLTM5OSAwXG4gICAgICAgIC02MDcgLTQgLTYyMiAtMTEgLTEzIC01IC0xNTMgLTE1NCAtMzEzIC0zMjkgbC0yOTAgLTMxOSAtNTkwIC0xIGMtNDI5IC0xXG4gICAgICAgIC01OTkgLTQgLTYyNCAtMTMgLTQ4IC0xNyAtNzYgLTU4IC03NiAtMTEzIDAgLTM2IDYgLTQ5IDMzIC03NiBsMzIgLTMzIDY0MiAtM1xuICAgICAgICBjNDc3IC0yIDY1MCAwIDY3MSA5IDE2IDcgMTU2IDE1MiAzMjQgMzM2IGwyOTUgMzIzIDYwMiAwIDYwMiAwIDMxIDIzIGMxNyAxMlxuICAgICAgICAxNTYgMTU3IDMwOSAzMjIgbDI3OCAzMDAgNjA2IDUgYzY3OSA2IDY0NSAyIDY3NyA3OCAxMyAzMiAxNCA0MiAyIDc2IC04IDIyXG4gICAgICAgIC0yNyA0OSAtNDIgNjAgLTI4IDIxIC0zNiAyMSAtNjY1IDIzIC00MDEgMSAtNjQ3IC0yIC02NjQgLTh6XCIvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcblxuICAgIGNvbnN0IFBlcm1pc3Npb25NZW51ID0gKCk9PihcbiAgICAgICAgPHN2ZyBoZWlnaHQ9XCIxZW1cIiB3aWR0aD1cIjFlbVwiIGNsYXNzTmFtZT0nYW50LW1lbnUtaXRlbS1pY29uJyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDEwMDAgMTAwMFwiIHhtbFNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgIDxnPjxwYXRoIGQ9XCJNMjExLjEsOTkwbC04OS42LTEuNGMtMTUuNSwwLTIyLjItMTMuNy0yOC41LTM4LjRsLTEuMywwLjJsLTMtMTcuMWMtMC4zLTEuNi0wLjUtMy0wLjctNC40bC0wLjMtMS43bDAuMSwwbC03LjUtNDIuNmMtMy44LTIyLDIuOS01Mi40LDE1LjUtNzAuOEwzNTYuMyw0MzhjLTE3LjMtMzcuMi0zMS04My43LTM2LjEtMTEzLjFjLTI5LTE2Ni40LDExMi40LTI4NC4xLDI2MC4xLTMxMC41YzE2LjctMywzMy43LTQuNSw1MC40LTQuNUM3NzEuMSwxMCw4OTAuNiwxMTEuNCw5MTUsMjUxLjFjMjYuMSwxNDkuMi0zNS4xLDMyMy42LTE5OS45LDM1M2MtMjEuNiwzLjktNTAsNi4xLTc3LjksNi4xaDBjLTE3LjcsMC0zNC40LTAuOS00OS0yLjdMNDY1LjUsODAwLjFsLTkyLjItNy4yTDI3My4xLDk0OS40Yy0xMi4yLDE5LjEtMzguMSwzNi40LTYwLjIsNDAuM0wyMTEuMSw5OTB6IE0xMzIuNyw5NTEuMWw3NS4yLDEuMWMxMS41LTIuNywyNy4zLTEzLjUsMzMuNC0yMy4ybDEwNi44LTE2Ni43bDYuMi03LjdsMTAuNy0wLjNsODAuOCw2LjNsMTIzLjgtMTk0LjJsMTIuMywyLjFjMTUuMSwyLjYsMzQuMiw0LDU1LjEsNGgwYzI1LjQsMCw1Mi0yLjEsNzEuMy01LjVDODQ5LjMsNTQyLDkwMC44LDM4OC45LDg3Ny44LDI1Ny42Qzg1Ni42LDEzNiw3NTIuNyw0Ny43LDYzMC43LDQ3LjdjLTE0LjYsMC0yOS4zLDEuMy00My44LDMuOUM0NTcsNzQuNywzMzIuNCwxNzYuMSwzNTcuMywzMTguNWM1LjEsMjkuNCwxOS43LDc3LjUsMzcuNiwxMTIuN2w1LjEsMTBsLTI3My4xLDM5NGMtNywxMC4yLTExLjUsMzAuNi05LjQsNDIuOWw3LjQsNDIuMmMwLjEsMC42LDAuMywxLjMsMC41LDJDMTI4LjYsOTM3LjMsMTMxLDk0Ni4xLDEzMi43LDk1MS4xeiBNNzIyLDM3OC4yYy0yOSwwLTU2LjItMTkuOC04Ny42LTQyLjhjLTUuOS00LjMtMTItOC44LTE4LjMtMTMuM2MtNi4zLTQuNC0xMi41LTguNy0xOC41LTEyLjhDNTYyLDI4NSw1MzEuMywyNjQsNTI1LjMsMjMxLjNjLTMuNS0xOC44LDItMzguMywxNi42LTU5LjRjMjcuNC0zOS41LDcyLjMtNjMuMSwxMjAuMS02My4xYzMwLjEsMCw1OS4yLDkuMyw4My45LDI2LjhjNjYuMSw0Ni43LDgyLjIsMTM4LjksMzUuOSwyMDUuNkM3NjQuNSwzNjYuMSw3NDQuOSwzNzguMiw3MjIsMzc4LjJ6IE02NjIsMTQ2LjVjLTM1LjQsMC02OC44LDE3LjUtODkuMSw0Ni45Yy04LjYsMTIuNS0xMi4xLDIyLjYtMTAuNSwzMS4xYzMuMiwxNy4zLDI3LjksMzQuMiw1Ni41LDUzLjhjNi4yLDQuMiwxMi42LDguNiwxOSwxMy4yYzYuNSw0LjYsMTIuOCw5LjIsMTguOCwxMy42YzI1LDE4LjMsNDguNiwzNS41LDY1LjMsMzUuNWM2LjIsMCwxNS45LTIuMiwyOC45LTIwLjhjMzQuNS00OS43LDIyLjUtMTE4LjUtMjYuNy0xNTMuM0M3MDUuNywxNTMuNCw2ODQuMywxNDYuNSw2NjIsMTQ2LjV6XCIvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgUGVybWlzc2lvblBvc2l0aW9uID0gKCk9PihcbiAgICAgICAgPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDEwMDAgMTAwMFwiIHhtbFNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgPGc+PHBhdGggZD1cIk02MDEuOCw0MjMuMmM0MC44LTE3LjIsODMuOC0yNiwxMjguNC0yNmM0LjQsMCw4LjgsMC4yLDEzLjIsMC4yYzIwLjktNTIuOCwyNi4yLTExNS4yLDE1LjctMTc1LjlDNzM0LjksODIuMyw2MDMuNi0xMC43LDQ2NS42LDEzLjhDMzI3LjcsMzguMywyMTEuNCwxNDUuNSwyMzUuOSwyODQuNmM1LjIsMzAuMSwxOS43LDc2LjksMzYuOSwxMTAuOEwyMi41LDc1Ni42Yy05LjIsMTMuMi0xNC41LDM3LjEtMTEuNyw1My40bDEwLjksNjEuOGMtMTAuMy01OS41LDIuOSwyMS40LDEwLjksMjEuMmw4Mi41LDEuMWMxNS45LTIuOSwzNS44LTE2LjMsNDQuNi0yOS45bDk5LTE1NC44bDEtMWw4Ni41LDYuOWwxMTUuNi0xODEuM2MwLjQsMCwwLjgsMC4yLDEuMSwwLjJjMTAuMy0xNC4yLDIxLjYtMjcuNiwzNC4zLTQwLjJDNTI3LjIsNDYzLjYsNTYyLjYsNDM5LjgsNjAxLjgsNDIzLjJ6IE03Ni42LDc5NC43bC0xMi4zLDUuMmwxLjMtMTMuNGwyMzkuOC0zNDguMmwxNC40LDEzLjRMNzYuNiw3OTQuN3ogTTQ0MS4xLDE1NC4xYzM3LjktNTQuNiwxMTIuNS02OC4xLDE2Ni41LTI5LjdjNTQuMiwzOC41LDY3LjQsMTEzLjksMjkuNSwxNjguNGMtMzcuOSw1NC41LTc2LjYsMTYuMS0xMzAuNy0yMi4yQzQ1Mi4zLDIzMi4yLDQwMy4yLDIwOC44LDQ0MS4xLDE1NC4xelwiLz48cGF0aCBkPVwiTTcyNyw0NjQuMmMtMTQ1LjMsMC0yNjMsMTE3LjctMjYzLDI2M3MxMTcuNywyNjMsMjYzLDI2M2MxNDUuMywwLDI2My0xMTcuNywyNjMtMjYzQzk5MCw1ODEuOSw4NzIuMyw0NjQuMiw3MjcsNDY0LjJ6IE04NzksODM1LjFjMCwzOS4yLTc1LjIsNDguMi0xNDUuOCw0OC4yYy03MC42LDAtMTQ2LjgtOS0xNDYuOC00OC4ydi0xMC45YzAtMjguOSw1Mi4xLTU4LjIsOTYuMy03NC4xYzMuMy0xLjEsMTguNi05LjYsMTAtMzJjLTIyLTIyLjQtMzguNS01OC44LTM4LjUtOTQuNmMwLTU0LjcsMzYuMi04My41LDc4LjctODMuNWM0Mi4zLDAsNzguOSwyOC43LDc4LjksODMuNWMwLDM1LjYtMTYuNyw3MS44LTM4LjUsOTQuNGgwLjJjLTguNCwyNS41LDUsMzEuNiw3LjEsMzIuMmM0Ni41LDE1LjMsOTguOCw0NC40LDk4LjgsNzQuMUw4NzksODM1LjFMODc5LDgzNS4xelwiLz48L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcblxuICAgIGNvbnN0IFBlcm1pc3Npb25NYW5hZ2VtZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIFxuICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAxMDAwIDEwMDBcIiB4bWxTcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgIDxnPjxwYXRoIGQ9XCJNOTY4LjksNDgxLjRjLTEuMywxMC41LTIuOSwyMS40LTUsMzEuOGwtNS4yLDI0LjhsLTI1LjMtMS4xYy0zLjMtMC4xLTYuNi0wLjItMTAtMC4yYy03Mi4yLDAtMTQwLjYsMzMuNi0xOTMuNiw4MWMtNC4zLDMuOC04LjksOS45LTEyLjQsMTQuNWMtNi45LDguOS0xMy41LDE4LjItMTkuOSwyNy40Yy0xNy40LDI0LjktMzQuMiw1MC4zLTUwLjcsNzUuOGMtMTYuNywyNS43LTMzLjEsNTEuNi00OS4zLDc3LjZsLTkuNSwxNS4zbC04MC42LTUuNUw0MDUuMyw5NzMuMmwtNy41LDMuNUMzNzMuNyw5ODcuOSwzNDAsOTkwLDMxMy42LDk5MGMtOS45LDAtMjAtMC4yLTI5LjktMWwtMTcuNy0xLjRsLTcuMy0xNi4yYy0xNC4zLTMxLjgtMTkuMi03MC44LTIyLjMtMTA1LjJjLTAuMi0xLjktMC4zLTMuOS0wLjUtNS44Yy0wLjQtMi4zLTAuNi00LjctMC40LTdsLTIzLjQsMzQuNWwtOS45LDQuNmMtMjUuNiwxMi02MC4zLDE0LjItODguMiwxNC4yYy0xMC4xLDAtMjAuNS0wLjItMzAuNi0xbC0yMy4zLTEuOGwtOS42LTIxLjNjLTE0LjctMzIuOS0xOS45LTcyLjctMjMuMS0xMDguM2MtMC4yLTEuNy0wLjMtMy41LTAuNS01LjNjLTMtMTcuNyw2LjYtMzAuNiwxNS44LTQ0LjdjOS0xMy44LDE4LjItMjcuNSwyNy40LTQxLjFjMjcuMy00MC4zLDU1LTgwLjQsODIuNy0xMjAuNGMzNS42LTUxLjQsNzEuNC0xMDIuNywxMDcuMi0xNTRjLTIwLjYtNDYuMy0zMi40LTk3LjEtMjktMTQ4YzEuNC0yMC43LDYtNDcuNywxNS02Ni45YzMxLjEtNjYuMiw3OC40LTExOS42LDE0NC40LTE1MkM0MzQsMjAuNiw0ODIuNywxMCw1MzEsMTBjMTMuMSwwLDI2LjksMC43LDM5LjksMi44YzY2LDEwLjksMTIxLjMsNDIuMywxNTkuMiw5Ny44YzAuNCwwLjYsMC44LDEuMSwxLjEsMS43YzEyLjQsMCwyNS40LDAuNywzNy42LDIuN2M2My40LDEwLjUsMTE2LjQsNDAuNCwxNTIuOSw5My44YzM5LjMsNTcuNCw1MS42LDEyOS43LDUxLjgsMTk4LjFDOTczLjYsNDMxLjgsOTcyLDQ1Ni44LDk2OC45LDQ4MS40eiBNNTYxLjEsNzEuOGMtMi45LTAuNS0xMy43LTItMzAuMS0yYy01OS45LDAtMTY5LjYsMTkuNC0yMzAuNywxNDkuNmMtMC4zLDAuNy04LjQsMTkuMi05LjcsNTAuNWMtMS4yLDI5LjMsMy42LDc2LjMsMzMuMiwxMzMuM2w1LjcsMTAuOWwtNy4xLDEwLjFDMjM5LjMsNTQyLjgsMTA2LjksNzMzLjQsODYuOSw3NjYuNGMwLjEsMC44LDAuMSwxLjYsMC4yLDIuNmMxLjQsMTUuOSw0LjUsNTAuNCwxMy43LDc3LjhjMy44LDAuMSw4LjQsMC4yLDEzLjMsMC4yYzI1LjIsMCw0NS41LTIuNCw1OC4yLTYuN2wxMTAuMi0xNjIuM2w2My4yLDQuM2M0LjktNy4xLDkuOC0xNC4xLDE0LjctMjEuMmMzNi42LTUyLjksNzMuNC0xMDUuNywxMTAuMy0xNTguNGMtMjEuNC00Ni4yLTMzLjgtOTcuMi0zMC40LTE0OC4zYzEtMTUsMy40LTMwLjEsNy40LTQ0LjVjLTMuNC0yLjgtNi45LTUuNS0xMC4zLTguM2MtMjMuMS0xOC41LTU1LjEtNDEuNi01Ny43LTczLjZjLTEuMi0xNC44LDMuOC0yOC44LDEzLjgtMzkuOGMzOC4yLTQyLjUsOTQuMS03NC4yLDE1Mi4zLTc0LjJjMjUuNiwwLDUwLjQsNi4yLDcxLjgsMTkuNGMxNC01LjQsMjguNC05LjgsNDMuMS0xMy4xQzYzNSw5NC43LDYwMS43LDc4LjUsNTYxLjEsNzEuOHogTTQ3NC4xLDI1NC4zYzE5LjMtMzEuMiw0My01OC41LDcxLjctODAuN2MtMzUuOCwwLTc0LjcsMTkuMS0xMDQuOSw1MS4yQzQ0Ni4zLDIzMiw0NjEuOSwyNDQuNiw0NzQuMSwyNTQuM3ogTTg4MC4yLDIzNy4xYy0yNy0zOS41LTY3LjMtNjMuOS0xMTkuNS03Mi41Yy0yLjktMC41LTEzLjctMi0zMC4xLTJjLTU5LjksMC0xNjkuNiwxOS40LTIzMC43LDE0OS42Yy0wLjMsMC43LTguNCwxOS4yLTkuNyw1MC41Yy0xLjIsMjkuMywzLjYsNzYuMywzMy4yLDEzMy4zbDUuNywxMC45bC03LjEsMTAuMWMtODMuMSwxMTguNi0yMTUuNSwzMDkuMi0yMzUuNSwzNDIuMmMwLjEsMC44LDAuMSwxLjYsMC4yLDIuNmMxLjQsMTUuOSw0LjUsNTAuNCwxMy43LDc3LjhjMy44LDAuMSw4LjQsMC4yLDEzLjMsMC4yYzI1LjIsMCw0NS41LTIuNCw1OC4yLTYuN2wxMTAuMi0xNjIuM2w3OS4zLDUuNGMyNS41LTQwLjgsMTA4LjYtMTcyLjMsMTM1LTE5NS44YzM4LjQtMzQuNCwxMTcuNy05MS41LDIyMS4xLTkzLjdDOTI0LDQ0Mi40LDkzNS44LDMxOC4yLDg4MC4yLDIzNy4xeiBNODEyLjIsNDc3LjJjLTguNyw5LjctMjAuMiwxNS4zLTMzLjMsMTUuM2MtMi40LDAtNC44LTAuMi03LjItMC42Yy0xMi0xLjktMjIuMy04LjMtMzEuNi0xNS45Yy0xMC44LTguOC0yMC43LTE5LjMtMzAuNC0yOS4zYy0xMC43LTExLjEtMjEuNC0yMi4yLTMyLjktMzIuNWMtMTEtOS44LTIyLjQtMTkuMS0zMy45LTI4LjNjLTExLjYtOS4zLTIzLjgtMTguOC0zNC4xLTI5LjRjLTguNy04LjktMTYuNC0xOS4zLTE5LjEtMzEuN2MtMC40LTEuOS0wLjctMy45LTAuOS01LjljLTEtMTIuMiwzLjItMjMuNiwxMS40LTMyLjdjMzYuMy00MC40LDg5LjctNzEsMTQ1LjItNzFjMzAuNywwLDYwLjEsOS41LDgzLjEsMzAuMmMzMS4yLDI4LDQyLjgsNzAuMiwzOS4xLDExMUM4NjMuNCw0MDEuNSw4NDIuMSw0NDQsODEyLjIsNDc3LjJ6IE03OTQuOCwyODNjLTEyLjYtMTEuNC0yOS44LTE3LjQtNDkuNi0xNy40Yy0zNS44LDAtNzQuNywxOS4xLTEwNC45LDUxLjJjNS42LDcuMywyMS43LDIwLjIsMzMuOSwzMGMxMS4xLDguOSwyMy42LDE4LjksMzYuMSwzMC4xYzEzLjMsMTIsMjUuMSwyNC4yLDM1LjUsMzVjMTAuMywxMC42LDIzLjgsMjQuNywzMS4yLDI5LjJjMjMuMy0yNi44LDM3LjYtNTguMyw0MC40LTg5QzgyMC4xLDMyMyw4MTIuMSwyOTguNSw3OTQuOCwyODN6IE01NjIuNyw1OTMuNEw1NjIuNyw1OTMuNEw0MTMuOCw4MDJjLTAuMSwwLjEtMC4xLDAuMi0wLjIsMC4zYy05LjgsMTMuNS0yOSwxOS4zLTQzLjMsOS4yYy0xNC4zLTEwLjItMTUuMS0zMC4zLTUuMy00NGwxNDkuMi0yMDguOWM5LjctMTMuNiwyOS4xLTE5LjUsNDMuNC05LjNjMTQuMywxMC4yLDE1LjEsMzAuMyw1LjMsNDRMNTYyLjcsNTkzLjR6IE0zODIuOSw1MDguOWwtMC4zLDAuNGwwLDAuMUwyMzMuOCw3MTcuOGMtMC4xLDAuMS0wLjEsMC4yLTAuMiwwLjNjLTEyLjksMTcuOC0zOCwyNC42LTU2LjYsMTEuM2MtMTguNy0xMy4zLTIwLjQtMzkuMy03LjUtNTcuNGwxNDkuMi0yMDguOWMxMi44LTE3LjksMzguMS0yNC44LDU2LjctMTEuNUMzOTQsNDY0LjksMzk1LjgsNDkwLjksMzgyLjksNTA4Ljl6XCIvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIGdldEl0ZW0oXCJOaMOibiBz4buxXCIsIFwic3ViLW1lbnUtMVwiLCA8TWRQZW9wbGVPdXRsaW5lIC8+LCBbXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Byb2ZpbGVgfT5I4buTIHPGoTwvTGluaz4sIFwiMVwiLCA8QnNGaWxlRWFybWFya0ZpbGwgLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9kZXBhcnRtZW50YH0+QuG7mSBwaOG6rW4gY8O0bmcgdMOhYzwvTGluaz4sIFwiMlwiLCA8RmNEZXBhcnRtZW50IC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcG9zaXRpb25gfT5DaOG7qWMgZGFuaCwgY2jhu6ljIHbhu6U8L0xpbms+LCBcIjNcIiwgPFBvc2l0aW9uSXRlbSAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L215cHJvZmlsZS8ke2p3dF9kZWNvZGUoVE9LRU4pPy5pZH1gfT5UaMO0bmcgdGluIGPDoSBuaMOibjwvTGluaz4sIFwiNFwiLCA8SW1Qcm9maWxlIC8+KSxcbiAgICAgICAgXSksXG4gICAgICAgIGdldEl0ZW0oXCJRdXnhu4FuXCIsIFwic3ViLW1lbnUtMlwiLCA8UGVybWlzc2lvbk1lbnUgLz4sIFtcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9tYW5hZ2VgfT5RdeG6o24gbMO9IHF1eeG7gW48L0xpbms+LCBcIjVcIiwgPFBlcm1pc3Npb25NYW5hZ2VtZW50IC8+ICksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vcG9zaXRpb25gfT5RdXnhu4FuIGNo4bupYyB24bulPC9MaW5rPiwgXCI2XCIsIDxQZXJtaXNzaW9uUG9zaXRpb24gLz4pLFxuXG4gICAgICAgIF0pXG4gICAgXTtcblxuICAgIGNvbnN0IGl0ZW1zX3VzZXIgPSBbXG4gICAgICAgIGdldEl0ZW0oXCJOaMOibiBz4buxXCIsIFwic3ViLW1lbnUtMVwiLCA8TWRQZW9wbGVPdXRsaW5lIC8+LCBbXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L215cHJvZmlsZS8ke2p3dF9kZWNvZGUoVE9LRU4pPy5pZH1gfT5UaMO0bmcgdGluIGPDoSBuaMOibjwvTGluaz4sIFwiNFwiLCA8SW1Qcm9maWxlIC8+KSxcbiAgICAgICAgXSlcbiAgICBdO1xuXG4gICAgY29uc3QgcmVuZGVyU3ViTWVudSAgPSAoKT0+e1xuICAgICAgICBpZih1cmkgPT09IFwicHJvZmlsZS1zZXJ2aWNlXCIpe1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGRlY29kZWQgPSBqd3RfZGVjb2RlKFRPS0VOKTtcbiAgICAgICAgICAgIGlmKGRlY29kZWQuaWQgPT09IDEpe1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfU3ViTWVudV9fWFplYjZcIj5cbiAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAvLyBkZWZhdWx0T3BlbktleXM9e1tgc3ViMWBdfVxuICAgICAgICAgICAgICAgICAgICBtb2RlPSdpbmxpbmUnXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17W2BzdWIxYF19XG4gICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc191c2VyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICA8PntyZW5kZXJTdWJNZW51KCl9PC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgY2hlY2tNaWNyb0ZlLCBnZXRUb2tlbkluQ29va2llIH0gZnJvbSBcIi4uL3VsdGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gZ2V0VG9rZW5JbkNvb2tpZSgpO1xuXG5leHBvcnQgY29uc3QgbG9jYWwgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwiaHR0cHM6Ly9wcm9maWxlc2VydmljZS50dW9pdHJlLnZuXCIgOiBcIlwiXG5cbi8vIFJlZ2V4XG5leHBvcnQgY29uc3QgcmVnZXhFbWFpbCA9IC9eW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0kLztcbmV4cG9ydCBjb25zdCByZWdleFBob25lID0gLyg4NFszfDV8N3w4fDldfDBbM3w1fDd8OHw5XSkrKFswLTldezh9fFswLTldezl9KVxcYi87XG5cbmV4cG9ydCBjb25zdCBxdWFUcmluaExWSFQgPSBcIlF1w6EgdHLDrG5oIGzDoG0gdmnhu4djIHbDoCBo4buNYyB04bqtcFwiO1xuZXhwb3J0IGNvbnN0IHRoYW1HaWFUb0NodWNDVCA9IFwiVGhhbSBnaWEgY8OhYyB04buVIGNo4bupYyBjaMOtbmggdHLhu4ssIGPDoWMgaMO04buLIG5naOG7gSBuZ2hp4buHcFwiO1xuZXhwb3J0IGNvbnN0IGRhb1RhbyA9IFwixJDDoG8gdOG6oW9cIjtcbmV4cG9ydCBjb25zdCBib2lEdW9uZyA9IFwiQuG7k2kgZMaw4buhbmdcIjtcbmV4cG9ydCBjb25zdCBraGVuVGh1b25nID0gXCJLaGVuIHRoxrDhu59uZ1wiO1xuZXhwb3J0IGNvbnN0IGt5THVhdCA9IFwiS+G7tyBsdeG6rXRcIjtcbmV4cG9ydCBjb25zdCBsaWNoU3VCYW5UaGFuID0gXCJM4buLY2ggc+G7rSBi4bqjbiB0aMOiblwiO1xuZXhwb3J0IGNvbnN0IHF1YW5IZUdpYURpbmggPSBcIlF1YW4gaOG7hyBnaWEgxJHDrG5oXCI7XG5leHBvcnQgY29uc3Qgbm9pU2luaF9TdGVwMSA9IFwiTsahaSBzaW5oXCJcbmV4cG9ydCBjb25zdCBxdWVRdWFuX1N0ZXAxID0gXCJRdcOqIHF1w6FuXCJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9JRCA9IFwiR0VUX1BST0ZJTEVfQllfSURcIjtcbmV4cG9ydCBjb25zdCBHRVRfUFJPVklOQ0VTID0gXCJHRVRfUFJPVklOQ0VTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRSA9IFwiR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfSE9NRV9UT1dOID0gXCJHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfQUREUkVTUyA9IFwiR0VUX0RJU1RSSUNUU19BRERSRVNTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19IT0tIQVUgPSBcIkdFVF9ESVNUUklDVFNfSE9LSEFVXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQOCA9IFwiR0VUX0RJU1RSSUNUU19TVEVQOFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDcgPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA5ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA5XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQN19DT04gPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0ZJTEUgPSBcIlVQREFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BST0ZJTEUgPSBcIkNSRUFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgT05MWV9DUkVBVEVfUFJPRklMRSA9IFwiT05MWV9DUkVBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xJU1QgPSBcIkdFVF9VU0VSX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9JTkZPUk1BVElPTiA9IFwiR0VUX1VTRVJfSU5GT1JNQVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQX1BPUyA9IFwiR0VUX0RFUEFSVE1FTlRfUE9TSVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfUEFSVCA9IFwiR0VUX1BBUlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfQVZBVEFSID0gXCJHRVRfQVZBVEFSXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RFUF9QT1MgPSBcIkRFTEVURV9ERVBfUE9TXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUEFSVE1FTlRfTElTVCA9IFwiR0VUX0RFUEFSVE1FTlRfTElTVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ERVBBUlRNRU5UID0gXCJVUERBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UX0lORk9SID0gXCJHRVRfREVQQVJUTUVOVF9JTkZPUlwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9ERVBBUlRNRU5UID0gXCJDUkVBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NJVElPTlNfTElTVCA9IFwiR0VUX1BPU0lUSU9OU19MSVNUXCI7XG5leHBvcnQgY29uc3QgR0VUX1BPU0lUSU9OX1RZUEVfTElTVCA9IFwiR0VUX1BPU0lUSU9OX1RZUEVfTElTVFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NJVElPTl9UWVBFID0gXCJDUkVBVEVfUE9TSVRJT05fVFlQRVwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NJVElPTl9UWVBFID0gXCJVUERBVEVfUE9TSVRJT05fVFlQRVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NJVElPTl9UWVBFID0gXCJERUxFVEVfUE9TSVRJT05fVFlQRVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIkRFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJTT05BTF9ISVNUT1JZID0gXCJHRVRfUEVSU09OQUxfSElTVE9SWVwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUllcIlxuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJTT05BTF9ISVNUT1JZID0gXCJERUxFVEVfUEVSU09OQUxfSElTVE9SWVwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBUlRZID0gXCJDUkVBVEVfUEFSVFlcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9QQVJUWSA9IFwiVVBEQVRFX1BBUlRZXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfT1JHQU5JWkFUSU9OID0gXCJDUkVBVEVfT1JHQU5JWkFUSU9OXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfT1JHQU5JWkFUSU9OID0gXCJVUERBVEVfT1JHQU5JWkFUSU9OXCJcbmV4cG9ydCBjb25zdCBERUxFVEVfT1JHQU5JWkFUSU9OID0gXCJERUxFVEVfT1JHQU5JWkFUSU9OXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfVFJBSU5JTkcgPSBcIkNSRUFURV9UUkFJTklOR1wiXG5leHBvcnQgY29uc3QgVVBEQVRFX1RSQUlOSU5HID0gXCJVUERBVEVfVFJBSU5JTkdcIlxuZXhwb3J0IGNvbnN0IERFTEVURV9UUkFJTklORyA9IFwiREVMRVRFX1RSQUlOSU5HXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIkNSRUFURV9SRVdBUkRfRElTQ0lQTElORVwiXG5leHBvcnQgY29uc3QgREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJERUxFVEVfUkVXQVJEX0RJU0NJUExJTkVcIlxuZXhwb3J0IGNvbnN0IFVQREFURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FXCJcbmV4cG9ydCBjb25zdCBDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCA9IFwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBcIlxuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3ID0gXCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQN1wiXG5leHBvcnQgY29uc3QgVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDcgPSBcIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3XCJcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCA9IFwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBcIlxuZXhwb3J0IGNvbnN0IEdFVF9ERVBfUE9TX1RPX1NFQVJDSCA9IFwiR0VUX0RFUF9QT1NfVE9fU0VBUkNIXCJcbmV4cG9ydCBjb25zdCBTRUFSQ0ggPSBcIlNFQVJDSFwiXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVVNFUl9JRCA9IFwiR0VUX1BST0ZJTEVfQllfVVNFUl9JRFwiXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVE9LRU4gPSBcIkdFVF9QUk9GSUxFX0JZX1RPS0VOXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUFJPRklMRV9BQ1RJVkUgPSBcIlVQREFURV9QUk9GSUxFX0FDVElWRVwiXG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fTElTVCA9IFwiR0VUX1BFUk1JU1NJT05fTElTVFwiXG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUk1JU1NJT04gPSBcIkNSRUFURV9QRVJNSVNTSU9OXCJcbmV4cG9ydCBjb25zdCBVUERBVEVfUEVSTUlTU0lPTiA9IFwiVVBEQVRFX1BFUk1JU1NJT05cIlxuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OID0gXCJERUxFVEVfUEVSTUlTU0lPTlwiXG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fUE9TSVRJT04gPSBcIkdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OXCJcbmV4cG9ydCBjb25zdCBHRVRfVEFCTEVfTUFOQUdFTUVOVCA9IFwiR0VUX1RBQkxFX01BTkFHRU1FTlRcIlxuZXhwb3J0IGNvbnN0IFNFQVJDSF9ERVBBUlRNRU5UID0gXCJTRUFSQ0hfREVQQVJUTUVOVFwiXG4iLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBkb2NDb29raWUgZnJvbSBcImRvYy1jb29raWVzXCJcblxuZXhwb3J0IGxldCBoYW5kbGVEYXRlVGltZSA9IChkYXRlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvbnZlcnQ7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgLy8gY29udmVydCB04burIHPhu5Egc2FuZyBjaHXhu5dpIERELU1NLVlZWVlcbiAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBsZXQgY29udmVydFRvTnVtYmVyID0gRGF0ZS5wYXJzZShkYXRlKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29udmVydFRvTnVtYmVyKVxuICAgICAgICAgICAgbGV0IGNvbnZlcnQxID0gbW9tZW50KG5ldyBEYXRlKGRhdGUpKS5mb3JtYXQoXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb252ZXJ0MSlcbiAgICAgICAgICAgIGNvbnZlcnQgPSBtb21lbnQoY29udmVydDEsIFwiREQtTU0tWVlZWVwiKVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNvbnZlcnQpXG4gICAgICAgIHJldHVybiBjb252ZXJ0XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGNoZWNrTWljcm9GZSA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIzMDAwXCIpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwicHJvZmlsZXNlcnZpY2VcIikgfHwgd2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCIzMDAxXCIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBsZXQgZ2V0VG9rZW5JbkNvb2tpZSA9ICgpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHRva2VuQ29va2llID0gZG9jQ29va2llLmdldEl0ZW0oXCJ1c2VydG9rZW5cIilcbiAgICAgICAgaWYoIXRva2VuQ29va2llKXtcbiAgICAgICAgICAgIC8vIGtoaSBwdXNoIGNvZGUgbMOqbiBzZXJ2ZXJcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAvLyBLaGkgdGVzdCB0csOqbiBsb2NhbFxuICAgICAgICAgICAgLy8gcmV0dXJuIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBaQ0k2TXpVMkxDSmxlSEFpT2pJM05UQTFOVFEzTXpCOS5kckJPX0c3RjlKQ0RpN1htTFJtZjE0UXZVcVllOGNXNGluQkliUXNtUllJXCJcbiAgICAgICAgICAgIC8vIHJldHVybiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk1Td2laWGh3SWpveU56VXdOREV4TURnM2ZRLnVXZUVKRVhIeU55c3c4NWsyMm0wczZkRk5pNG5KRkFPOE5TOGxlWTZmeUFcIlxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuQ29va2llKTtcbiAgICAgICAgcmV0dXJuIHRva2VuQ29va2llXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnUiLCJNZFBlb3BsZU91dGxpbmUiLCJMaW5rIiwiQnNGaWxlRWFybWFya0ZpbGwiLCJGY0RlcGFydG1lbnQiLCJjaGVja01pY3JvRmUiLCJJbVByb2ZpbGUiLCJqd3RfZGVjb2RlIiwiVE9LRU4iLCJTdWJNZW51IiwidXJpIiwiZ2V0SXRlbSIsImxhYmVsIiwia2V5IiwiaWNvbiIsImNoaWxkcmVuIiwiUG9zaXRpb25JdGVtIiwiUGVybWlzc2lvbk1lbnUiLCJQZXJtaXNzaW9uUG9zaXRpb24iLCJQZXJtaXNzaW9uTWFuYWdlbWVudCIsIml0ZW1zIiwiaWQiLCJpdGVtc191c2VyIiwicmVuZGVyU3ViTWVudSIsImRlY29kZWQiLCJnZXRUb2tlbkluQ29va2llIiwibG9jYWwiLCJyZWdleEVtYWlsIiwicmVnZXhQaG9uZSIsInF1YVRyaW5oTFZIVCIsInRoYW1HaWFUb0NodWNDVCIsImRhb1RhbyIsImJvaUR1b25nIiwia2hlblRodW9uZyIsImt5THVhdCIsImxpY2hTdUJhblRoYW4iLCJxdWFuSGVHaWFEaW5oIiwibm9pU2luaF9TdGVwMSIsInF1ZVF1YW5fU3RlcDEiLCJHRVRfUFJPRklMRV9CWV9JRCIsIkdFVF9QUk9WSU5DRVMiLCJHRVRfRElTVFJJQ1RTX0JJUlRIX1BMQUNFIiwiR0VUX0RJU1RSSUNUU19IT01FX1RPV04iLCJHRVRfRElTVFJJQ1RTX0FERFJFU1MiLCJHRVRfRElTVFJJQ1RTX0hPS0hBVSIsIkdFVF9ESVNUUklDVFNfU1RFUDgiLCJHRVRfRElTVFJJQ1RTX1NURVA3IiwiR0VUX0RJU1RSSUNUU19TVEVQOSIsIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OIiwiVVBEQVRFX1BST0ZJTEUiLCJDUkVBVEVfUFJPRklMRSIsIk9OTFlfQ1JFQVRFX1BST0ZJTEUiLCJHRVRfVVNFUl9MSVNUIiwiR0VUX1VTRVJfSU5GT1JNQVRJT04iLCJHRVRfREVQX1BPUyIsIkdFVF9QQVJUIiwiR0VUX0FWQVRBUiIsIkRFTEVURV9ERVBfUE9TIiwiR0VUX0RFUEFSVE1FTlRfTElTVCIsIlVQREFURV9ERVBBUlRNRU5UIiwiR0VUX0RFUEFSVE1FTlRfSU5GT1IiLCJDUkVBVEVfREVQQVJUTUVOVCIsIkdFVF9QT1NJVElPTlNfTElTVCIsIkdFVF9QT1NJVElPTl9UWVBFX0xJU1QiLCJDUkVBVEVfUE9TSVRJT05fVFlQRSIsIlVQREFURV9QT1NJVElPTl9UWVBFIiwiREVMRVRFX1BPU0lUSU9OX1RZUEUiLCJDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJHRVRfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZIiwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJERUxFVEVfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QQVJUWSIsIlVQREFURV9QQVJUWSIsIkNSRUFURV9PUkdBTklaQVRJT04iLCJVUERBVEVfT1JHQU5JWkFUSU9OIiwiREVMRVRFX09SR0FOSVpBVElPTiIsIkNSRUFURV9UUkFJTklORyIsIlVQREFURV9UUkFJTklORyIsIkRFTEVURV9UUkFJTklORyIsIkNSRUFURV9SRVdBUkRfRElTQ0lQTElORSIsIkRFTEVURV9SRVdBUkRfRElTQ0lQTElORSIsIlVQREFURV9SRVdBUkRfRElTQ0lQTElORSIsIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQIiwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDciLCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQNyIsIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQIiwiR0VUX0RFUF9QT1NfVE9fU0VBUkNIIiwiU0VBUkNIIiwiR0VUX1BST0ZJTEVfQllfVVNFUl9JRCIsIkdFVF9QUk9GSUxFX0JZX1RPS0VOIiwiVVBEQVRFX1BST0ZJTEVfQUNUSVZFIiwiR0VUX1BFUk1JU1NJT05fTElTVCIsIkNSRUFURV9QRVJNSVNTSU9OIiwiVVBEQVRFX1BFUk1JU1NJT04iLCJERUxFVEVfUEVSTUlTU0lPTiIsIkdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OIiwiR0VUX1RBQkxFX01BTkFHRU1FTlQiLCJTRUFSQ0hfREVQQVJUTUVOVCIsIm1vbWVudCIsImRvY0Nvb2tpZSIsImhhbmRsZURhdGVUaW1lIiwiZGF0ZSIsImNvbnZlcnQiLCJjb252ZXJ0MSIsIkRhdGUiLCJmb3JtYXQiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJpbmNsdWRlcyIsInRva2VuQ29va2llIl0sInNvdXJjZVJvb3QiOiIifQ==