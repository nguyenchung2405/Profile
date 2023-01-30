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

  var PermissionDepPos = function PermissionDepPos() {
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
          d: "M446.1,154.9c38.5-54.6,114.1-68.6,168.7-30.1c54.6,39.2,68,114.7,29.4,169.4c-37.8,55.3-77,16.1-132.4-22.4C457.2,233.2,407.5,210.1,446.1,154.9z M77.2,798.8l-11.9,4.9l1.5-13.3l242.1-350l14.7,13.3L77.2,798.8z M468.5,536.9c10.5-13.9,21.7-27.2,34.3-40.5c30.8-30.2,66.5-54.6,105.7-70.8c41.3-17.5,85.4-26.5,130.2-26.5h13.3c21.1-52.4,26.7-115.5,16.2-176.4C743.6,82.8,610.6-11,470.6,14.2C331.3,38.7,213.8,146.5,238.1,286.4c5.7,30.1,20.3,77,37.8,111.3L22.6,760.4c-9.1,13.3-14.7,37.7-11.9,53.8L22,876.5c-2.9-16.1-4.2-22.3-4.2-22.3c0.7,0,9,43.3,15.4,43.3l83.3,1.5c16.1-2.8,36.4-16.1,44.8-30.2l100-155.3l1.5-1.5l87.4,7.1l116.9-182.1H468.5z M813.6,764.4c-20.4,47.7-75.6,70-123.9,50.5c-48.4-20.3-70.7-75.6-50.4-123.3c19.6-48.3,75.6-70.7,123.2-50.4C810.7,661.6,833.8,716.2,813.6,764.4z M920.6,699.3l69.4-43.3l-25.9-62.3l-79.2,18.8c-11.2-16.1-25.2-29.4-41.2-41.3l18.2-79l-63.1-26l-42.6,68c-19.6-2.8-39.2-2.8-58.1,0l-42.8-68.6l-62.9,25.2l17.5,79.2c-16.1,11.2-30.2,25.1-42,40.6l-78.4-18.2l-26.6,62.3l67.9,43.4c-2.7,19.5-2.7,39.2,0,58.1l-68.6,42.7l25.9,62.3l79.2-17.5c11.2,15.4,25.2,29.4,41.2,41.2l-18.8,78.5l62.9,25.9l44.2-68c19.6,2.9,39.2,2.9,58.1,0l43.3,68.7l63-25.9L843,884.9c15.4-11.2,28.7-24.4,40.6-40.6l79.7,18.2l26.6-62.3l-69.4-42.7C923.4,737.9,923.4,719,920.6,699.3z"
        })
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
  }), "6", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PermissionPosition, {})), getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/hr/permission/department-position"),
    children: "Quy\u1EC1n PB - CV"
  }), "7", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(PermissionDepPos, {}))])];
  var items_user = [getItem("Nhân sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdPeopleOutline, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/myprofile/").concat((_jwt_decode2 = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode2 === void 0 ? void 0 : _jwt_decode2.id),
    children: "Th\xF4ng tin c\xE1 nh\xE2n"
  }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_10__.ImProfile, {}))])];

  var renderSubMenu = function renderSubMenu() {
    if (uri === "profile-service") {
      var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN);

      if (decoded.id === 1) {
        return items;
      } else {
        return items_user;
      }
    } else {
      var _decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN);

      if (_decoded.id === 1) {
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
/* harmony export */   "GET_PERMISSION_POSITION": function() { return /* binding */ GET_PERMISSION_POSITION; },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFZSxTQUFTVSxPQUFULEdBQW1CO0VBQUE7O0VBRTlCLElBQUlDLEdBQUcsR0FBR0wsNERBQVksT0FBTyxJQUFuQixHQUEwQixpQkFBMUIsR0FBOEMsRUFBeEQ7O0VBRUEsSUFBTU0sT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWFDLElBQWIsRUFBbUJDLFFBQW5CLEVBQWdDO0lBQzVDLE9BQU87TUFDSEgsS0FBSyxFQUFMQSxLQURHO01BRUhDLEdBQUcsRUFBSEEsR0FGRztNQUdIQyxJQUFJLEVBQUpBLElBSEc7TUFJSEMsUUFBUSxFQUFSQTtJQUpHLENBQVA7RUFNSCxDQVBEOztFQVNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0lBQUEsb0JBQ2I7TUFBSyxNQUFNLEVBQUMsY0FBWjtNQUEyQixJQUFJLEVBQUMsY0FBaEM7TUFBK0MsS0FBSyxFQUFDLGNBQXJEO01BQW9FLE9BQU8sRUFBQyxLQUE1RTtNQUFrRixLQUFLLEVBQUMsNEJBQXhGO01BQ1AsT0FBTyxFQUFDLDJCQUREO01BRVIsbUJBQW1CLEVBQUMsZUFGWjtNQUFBLHVCQUdKO1FBQUcsU0FBUyxFQUFDLDBEQUFiO1FBQXdFLE1BQU0sRUFBQyxNQUEvRTtRQUFBLHdCQUNBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFEQSxlQU9BO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFQQSxlQVlBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUFaQSxlQWtCQTtVQUFNLENBQUMsRUFBQztRQUFSLEVBbEJBLGVBd0JBO1VBQU0sQ0FBQyxFQUFDO1FBQVIsRUF4QkEsZUErQkE7VUFBTSxDQUFDLEVBQUM7UUFBUixFQS9CQSxlQXFDQTtV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QlAsUUFBckIsQ0FBOEIsZ0JBQTlCLENBQXpDLElBQTRGSyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCUCxRQUFyQixDQUE4QixNQUE5QixDQUFoRyxFQUF1STtJQUNuSSxPQUFPLEtBQVA7RUFDSCxDQUZELE1BRU87SUFDSCxPQUFPLElBQVA7RUFDSDtBQUNKLENBTk07QUFRQSxJQUFJaEcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFJO0VBQzlCLElBQUk7SUFDQSxJQUFJd0csV0FBVyxHQUFHZiwwREFBQSxDQUFrQixXQUFsQixDQUFsQjs7SUFDQSxJQUFHLENBQUNlLFdBQUosRUFBZ0I7TUFDWjtNQUNBLE9BQU8sSUFBUCxDQUZZLENBR1o7TUFDQTtNQUNBO0lBQ0gsQ0FSRCxDQVNBOzs7SUFDQSxPQUFPQSxXQUFQO0VBQ0gsQ0FYRCxDQVdFLE9BQU9OLEtBQVAsRUFBYztJQUNaQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtFQUNIO0FBQ0osQ0FmTSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyL1N1Yk1lbnUuanMiLCJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy90aXRsZS90aXRsZS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3VsdGlscy9oZWxwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWVudSB9IGZyb20gXCJhbnRkXCJcbmltcG9ydCB7IE1kUGVvcGxlT3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IEJzRmlsZUVhcm1hcmtGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcbmltcG9ydCB7IEZjRGVwYXJ0bWVudCB9IGZyb20gXCJyZWFjdC1pY29ucy9mY1wiXG5pbXBvcnQgeyBjaGVja01pY3JvRmUgfSBmcm9tICcuLi8uLi91bHRpbHMvaGVscGVyJztcbmltcG9ydCB7SW1Qcm9maWxlfSBmcm9tIFwicmVhY3QtaWNvbnMvaW1cIlxuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCB7VE9LRU59IGZyb20gXCIuLi8uLi90aXRsZS90aXRsZVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Yk1lbnUoKSB7XG4gICAgXG4gICAgbGV0IHVyaSA9IGNoZWNrTWljcm9GZSgpID09PSB0cnVlID8gXCJwcm9maWxlLXNlcnZpY2VcIiA6IFwiXCI7XG5cbiAgICBjb25zdCBnZXRJdGVtID0gKGxhYmVsLCBrZXksIGljb24sIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgUG9zaXRpb25JdGVtID0gKCk9PihcbiAgICAgICAgICAgIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj5cbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIiBzdHJva2U9XCJub25lXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNNDMxMCA0NzgzIGMtMTA1IC0xOCAtMjI5IC04MCAtMjk5IC0xNTIgLTEwMCAtMTAwIC0xNDEgLTIwOCAtMTQxXG4gICAgICAgIC0zNjcgMCAtMzI1IDE3OCAtNTYzIDQ1MiAtNjA1IDIzNyAtMzcgNDY2IDExMiA1NTUgMzYyIDIyIDYyIDI3IDk2IDMxIDIwNiA0XG4gICAgICAgIDExNSAxIDE0MSAtMTcgMjAzIC0yOCA5MyAtNzAgMTU4IC0xMzggMjE5IC0xMTggMTA1IC0yOTUgMTU5IC00NDMgMTM0eiBtMTQ0XG4gICAgICAgIC0yMzggYzU5IC0xMCAxMzAgLTQ5IDE2NSAtOTIgOTcgLTExNyA3NCAtMzY5IC00NCAtNDg4IC01MCAtNDkgLTkwIC02NyAtMTY1XG4gICAgICAgIC03MyAtMTU1IC0xMSAtMjY4IDk3IC0zMDAgMjg4IC0yNiAxNTQgMTUgMjY3IDExOSAzMjggNDUgMjYgMTQyIDUzIDE3MSA0NyA4XG4gICAgICAgIC0yIDMzIC02IDU0IC0xMHpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjQyMCA0MTE0IGMtMTgwIC00OCAtMzIyIC0xODQgLTM2NCAtMzQ5IC0yMCAtNzUgLTIwIC0yMzcgLTEgLTMzMFxuICAgICAgICAyMiAtMTA2IDc2IC0yMDYgMTU0IC0yODUgMTAxIC0xMDMgMjEyIC0xNTAgMzUxIC0xNTAgMTM5IDAgMjUwIDQ3IDM1MSAxNTBcbiAgICAgICAgMTE1IDExNyAxNjkgMjYyIDE2OSA0NTQgMCAxNjEgLTQzIDI3NiAtMTQxIDM3NCAtNjMgNjMgLTE1MiAxMTMgLTI0NSAxMzcgLTczXG4gICAgICAgIDE5IC0yMDEgMTggLTI3NCAtMXogbTI2NyAtMjQ0IGMxMzQgLTU3IDE4OCAtMTk1IDE0OSAtMzc1IC0zNSAtMTY0IC0xMzcgLTI2MFxuICAgICAgICAtMjc2IC0yNjAgLTE2OSAwIC0yODggMTUzIC0yOTAgMzcxIC0xIDIxOSAyMTAgMzUzIDQxNyAyNjR6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTY1NSAzNDc0IGMtMTUyIC0zNyAtMjIzIC03MiAtMzA2IC0xNTQgLTEwNiAtMTA1IC0xMzggLTE5MiAtMTM5XG4gICAgICAgIC0zNzUgMCAtMTMxIDE4IC0yMTMgNjcgLTMxMyA5OSAtMjAwIDMxOCAtMzE5IDUyNiAtMjg0IDI3MiA0NyA0NDcgMjgzIDQ0N1xuICAgICAgICA2MDYgMCAyNDUgLTExNSA0MDggLTM0NSA0OTIgLTY0IDIzIC0yMDUgMzkgLTI1MCAyOHogbTE0MCAtMjM5IGM4NCAtMTQgMTY5XG4gICAgICAgIC04MCAyMDIgLTE1NiAzMiAtNzUgMjMgLTIzMiAtMTkgLTMyNyAtMjkgLTY0IC05MCAtMTI2IC0xNTAgLTE1MiAtNDIgLTE4IC02NVxuICAgICAgICAtMjEgLTExOCAtMTggLTc1IDYgLTExNSAyNCAtMTY1IDczIC0xMTggMTE5IC0xNDEgMzcxIC00NCA0ODggMTcgMjEgNTAgNDcgNzJcbiAgICAgICAgNTkgNDUgMjMgMTQyIDQ4IDE2NyA0MyA4IC0yIDMzIC02IDU1IC0xMHpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNDIxNiAzNDM0IGMtMTY0IC00MSAtMzEwIC0xNDIgLTM4NSAtMjY2IC00MCAtNjggLTU4IC0xMzUgLTExNVxuICAgICAgICAtNDQzIC02MiAtMzM2IC02MiAtMzUzIDQgLTM5OCAyMiAtMTUgNjQgLTE3IDQwMyAtMTcgNDE1IDAgNDIxIDEgNDUyIDYwIDE5XG4gICAgICAgIDM3IDE5IDczIDAgMTEwIC0zMCA1NyAtNDUgNjAgLTM2NSA2MCBsLTI5MCAwIDUgMjMgYzIgMTIgMjEgMTEwIDQwIDIxNyA0MFxuICAgICAgICAyMTcgNjMgMjc3IDEyNSAzMzQgMTkxIDE3MiA1NjMgMTI0IDY2NyAtODYgMTQgLTI3IDQyIC0xNTIgNzggLTM0MyAzMSAtMTY0XG4gICAgICAgIDYxIC0zMDcgNjYgLTMxNiA0MyAtODIgMTc0IC03NSAyMDkgMTEgMTIgMzAgMTAgNTIgLTE5IDIxNCAtNzMgNDAxIC04OCA0NjdcbiAgICAgICAgLTEyNiA1NDMgLTY0IDEyOSAtMTkyIDIzMiAtMzUwIDI4MyAtOTAgMjkgLTMwOCAzNyAtMzk5IDE0elwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0yNDI1IDI3ODYgYy0yMzEgLTQ2IC0zOTUgLTE3MyAtNDYzIC0zNTggLTEyIC0zMSAtNDcgLTE5NSAtNzggLTM2NVxuICAgICAgICBsLTU3IC0zMDcgMTkgLTM2IGMzNyAtNjkgNDYgLTcwIDQ0NCAtNjkgMjQ4IDAgMzY1IDQgMzkwIDEyIDQwIDE0IDgwIDY3IDgwXG4gICAgICAgIDEwNyAwIDQwIC00MCA5MyAtODAgMTA3IC0yNCA4IC0xMjUgMTIgLTMxMyAxMiBsLTI3OSAxIDYgMjggYzMgMTUgMjIgMTExIDQxXG4gICAgICAgIDIxNCA0MCAyMTAgNDMgMjIyIDg1IDI4MyA2MiA5MSAxOTAgMTQ1IDM0MCAxNDUgMTU3IDAgMjgwIC01NSAzNDcgLTE1NiAzN1xuICAgICAgICAtNTYgNDYgLTkyIDEyOCAtNTM2IDMwIC0xNjYgNDQgLTE5MSAxMDYgLTIwOCA1MyAtMTQgMTA2IDEwIDEzMyA2MCBsMTkgMzZcbiAgICAgICAgLTU3IDMwNyBjLTYwIDMyNiAtNzggMzkxIC0xMzQgNDc1IC02OSAxMDYgLTIwOSAxOTkgLTM1NyAyMzcgLTg2IDIyIC0yMzYgMjdcbiAgICAgICAgLTMyMCAxMXpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNTQzIDIxMjAgYy0yMDAgLTUyIC0zNTAgLTE3OCAtNDEyIC0zNDUgLTE4IC00OSAtMTMxIC02MjMgLTEzMVxuICAgICAgICAtNjY3IDAgLTMyIDI5IC03NyA2MCAtOTMgMjQgLTEzIDg5IC0xNSA0MDUgLTE1IDMzNCAwIDM4MCAyIDQwNSAxNyA3MyA0MyA3M1xuICAgICAgICAxNTMgMCAxOTYgLTI0IDE1IC02NSAxNyAtMzE5IDE3IC0xNjAgMCAtMjkxIDMgLTI5MSA3IDAgNDQgODYgNDQ4IDEwMyA0ODFcbiAgICAgICAgMTI2IDI1NCA2MDkgMjUzIDczMSAtMSAxOCAtMzcgNDAgLTEzMyA3NiAtMzI3IDYzIC0zNDcgNTYgLTMxOCA5NSAtMzU3IDQzXG4gICAgICAgIC00MyA5OCAtNDYgMTQ0IC03IDU2IDQ2IDU1IDY0IC01IDM4NyAtMzAgMTYxIC02MiAzMTYgLTcxIDM0NiAtNTMgMTcyIC0yMzVcbiAgICAgICAgMzIyIC00NDIgMzY2IC0xMDAgMjEgLTI1OCAxOSAtMzQ4IC01elwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0zNzM4IDE4NzkgYy0xNCAtNiAtMTU5IC0xNTMgLTMyMyAtMzMwIGwtMjk2IC0zMTkgLTU5OSAwIGMtMzk5IDBcbiAgICAgICAgLTYwNyAtNCAtNjIyIC0xMSAtMTMgLTUgLTE1MyAtMTU0IC0zMTMgLTMyOSBsLTI5MCAtMzE5IC01OTAgLTEgYy00MjkgLTFcbiAgICAgICAgLTU5OSAtNCAtNjI0IC0xMyAtNDggLTE3IC03NiAtNTggLTc2IC0xMTMgMCAtMzYgNiAtNDkgMzMgLTc2IGwzMiAtMzMgNjQyIC0zXG4gICAgICAgIGM0NzcgLTIgNjUwIDAgNjcxIDkgMTYgNyAxNTYgMTUyIDMyNCAzMzYgbDI5NSAzMjMgNjAyIDAgNjAyIDAgMzEgMjMgYzE3IDEyXG4gICAgICAgIDE1NiAxNTcgMzA5IDMyMiBsMjc4IDMwMCA2MDYgNSBjNjc5IDYgNjQ1IDIgNjc3IDc4IDEzIDMyIDE0IDQyIDIgNzYgLTggMjJcbiAgICAgICAgLTI3IDQ5IC00MiA2MCAtMjggMjEgLTM2IDIxIC02NjUgMjMgLTQwMSAxIC02NDcgLTIgLTY2NCAtOHpcIi8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgUGVybWlzc2lvbk1lbnUgPSAoKT0+KFxuICAgICAgICA8c3ZnIGhlaWdodD1cIjFlbVwiIHdpZHRoPVwiMWVtXCIgY2xhc3NOYW1lPSdhbnQtbWVudS1pdGVtLWljb24nIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgPGc+PHBhdGggZD1cIk0yMTEuMSw5OTBsLTg5LjYtMS40Yy0xNS41LDAtMjIuMi0xMy43LTI4LjUtMzguNGwtMS4zLDAuMmwtMy0xNy4xYy0wLjMtMS42LTAuNS0zLTAuNy00LjRsLTAuMy0xLjdsMC4xLDBsLTcuNS00Mi42Yy0zLjgtMjIsMi45LTUyLjQsMTUuNS03MC44TDM1Ni4zLDQzOGMtMTcuMy0zNy4yLTMxLTgzLjctMzYuMS0xMTMuMWMtMjktMTY2LjQsMTEyLjQtMjg0LjEsMjYwLjEtMzEwLjVjMTYuNy0zLDMzLjctNC41LDUwLjQtNC41Qzc3MS4xLDEwLDg5MC42LDExMS40LDkxNSwyNTEuMWMyNi4xLDE0OS4yLTM1LjEsMzIzLjYtMTk5LjksMzUzYy0yMS42LDMuOS01MCw2LjEtNzcuOSw2LjFoMGMtMTcuNywwLTM0LjQtMC45LTQ5LTIuN0w0NjUuNSw4MDAuMWwtOTIuMi03LjJMMjczLjEsOTQ5LjRjLTEyLjIsMTkuMS0zOC4xLDM2LjQtNjAuMiw0MC4zTDIxMS4xLDk5MHogTTEzMi43LDk1MS4xbDc1LjIsMS4xYzExLjUtMi43LDI3LjMtMTMuNSwzMy40LTIzLjJsMTA2LjgtMTY2LjdsNi4yLTcuN2wxMC43LTAuM2w4MC44LDYuM2wxMjMuOC0xOTQuMmwxMi4zLDIuMWMxNS4xLDIuNiwzNC4yLDQsNTUuMSw0aDBjMjUuNCwwLDUyLTIuMSw3MS4zLTUuNUM4NDkuMyw1NDIsOTAwLjgsMzg4LjksODc3LjgsMjU3LjZDODU2LjYsMTM2LDc1Mi43LDQ3LjcsNjMwLjcsNDcuN2MtMTQuNiwwLTI5LjMsMS4zLTQzLjgsMy45QzQ1Nyw3NC43LDMzMi40LDE3Ni4xLDM1Ny4zLDMxOC41YzUuMSwyOS40LDE5LjcsNzcuNSwzNy42LDExMi43bDUuMSwxMGwtMjczLjEsMzk0Yy03LDEwLjItMTEuNSwzMC42LTkuNCw0Mi45bDcuNCw0Mi4yYzAuMSwwLjYsMC4zLDEuMywwLjUsMkMxMjguNiw5MzcuMywxMzEsOTQ2LjEsMTMyLjcsOTUxLjF6IE03MjIsMzc4LjJjLTI5LDAtNTYuMi0xOS44LTg3LjYtNDIuOGMtNS45LTQuMy0xMi04LjgtMTguMy0xMy4zYy02LjMtNC40LTEyLjUtOC43LTE4LjUtMTIuOEM1NjIsMjg1LDUzMS4zLDI2NCw1MjUuMywyMzEuM2MtMy41LTE4LjgsMi0zOC4zLDE2LjYtNTkuNGMyNy40LTM5LjUsNzIuMy02My4xLDEyMC4xLTYzLjFjMzAuMSwwLDU5LjIsOS4zLDgzLjksMjYuOGM2Ni4xLDQ2LjcsODIuMiwxMzguOSwzNS45LDIwNS42Qzc2NC41LDM2Ni4xLDc0NC45LDM3OC4yLDcyMiwzNzguMnogTTY2MiwxNDYuNWMtMzUuNCwwLTY4LjgsMTcuNS04OS4xLDQ2LjljLTguNiwxMi41LTEyLjEsMjIuNi0xMC41LDMxLjFjMy4yLDE3LjMsMjcuOSwzNC4yLDU2LjUsNTMuOGM2LjIsNC4yLDEyLjYsOC42LDE5LDEzLjJjNi41LDQuNiwxMi44LDkuMiwxOC44LDEzLjZjMjUsMTguMyw0OC42LDM1LjUsNjUuMywzNS41YzYuMiwwLDE1LjktMi4yLDI4LjktMjAuOGMzNC41LTQ5LjcsMjIuNS0xMTguNS0yNi43LTE1My4zQzcwNS43LDE1My40LDY4NC4zLDE0Ni41LDY2MiwxNDYuNXpcIi8+PC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICApXG5cbiAgICBjb25zdCBQZXJtaXNzaW9uUG9zaXRpb24gPSAoKT0+KFxuICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICA8Zz48cGF0aCBkPVwiTTYwMS44LDQyMy4yYzQwLjgtMTcuMiw4My44LTI2LDEyOC40LTI2YzQuNCwwLDguOCwwLjIsMTMuMiwwLjJjMjAuOS01Mi44LDI2LjItMTE1LjIsMTUuNy0xNzUuOUM3MzQuOSw4Mi4zLDYwMy42LTEwLjcsNDY1LjYsMTMuOEMzMjcuNywzOC4zLDIxMS40LDE0NS41LDIzNS45LDI4NC42YzUuMiwzMC4xLDE5LjcsNzYuOSwzNi45LDExMC44TDIyLjUsNzU2LjZjLTkuMiwxMy4yLTE0LjUsMzcuMS0xMS43LDUzLjRsMTAuOSw2MS44Yy0xMC4zLTU5LjUsMi45LDIxLjQsMTAuOSwyMS4ybDgyLjUsMS4xYzE1LjktMi45LDM1LjgtMTYuMyw0NC42LTI5LjlsOTktMTU0LjhsMS0xbDg2LjUsNi45bDExNS42LTE4MS4zYzAuNCwwLDAuOCwwLjIsMS4xLDAuMmMxMC4zLTE0LjIsMjEuNi0yNy42LDM0LjMtNDAuMkM1MjcuMiw0NjMuNiw1NjIuNiw0MzkuOCw2MDEuOCw0MjMuMnogTTc2LjYsNzk0LjdsLTEyLjMsNS4ybDEuMy0xMy40bDIzOS44LTM0OC4ybDE0LjQsMTMuNEw3Ni42LDc5NC43eiBNNDQxLjEsMTU0LjFjMzcuOS01NC42LDExMi41LTY4LjEsMTY2LjUtMjkuN2M1NC4yLDM4LjUsNjcuNCwxMTMuOSwyOS41LDE2OC40Yy0zNy45LDU0LjUtNzYuNiwxNi4xLTEzMC43LTIyLjJDNDUyLjMsMjMyLjIsNDAzLjIsMjA4LjgsNDQxLjEsMTU0LjF6XCIvPjxwYXRoIGQ9XCJNNzI3LDQ2NC4yYy0xNDUuMywwLTI2MywxMTcuNy0yNjMsMjYzczExNy43LDI2MywyNjMsMjYzYzE0NS4zLDAsMjYzLTExNy43LDI2My0yNjNDOTkwLDU4MS45LDg3Mi4zLDQ2NC4yLDcyNyw0NjQuMnogTTg3OSw4MzUuMWMwLDM5LjItNzUuMiw0OC4yLTE0NS44LDQ4LjJjLTcwLjYsMC0xNDYuOC05LTE0Ni44LTQ4LjJ2LTEwLjljMC0yOC45LDUyLjEtNTguMiw5Ni4zLTc0LjFjMy4zLTEuMSwxOC42LTkuNiwxMC0zMmMtMjItMjIuNC0zOC41LTU4LjgtMzguNS05NC42YzAtNTQuNywzNi4yLTgzLjUsNzguNy04My41YzQyLjMsMCw3OC45LDI4LjcsNzguOSw4My41YzAsMzUuNi0xNi43LDcxLjgtMzguNSw5NC40aDAuMmMtOC40LDI1LjUsNSwzMS42LDcuMSwzMi4yYzQ2LjUsMTUuMyw5OC44LDQ0LjQsOTguOCw3NC4xTDg3OSw4MzUuMUw4NzksODM1LjF6XCIvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgUGVybWlzc2lvbkRlcFBvcyA9ICgpPT4oXG4gICAgICAgIDxzdmcgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY29sb3I9XCJjdXJyZW50Q29sb3JcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAxMDAwIDEwMDBcIiBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAxMDAwIDEwMDBcIiB4bWxTcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgICAgICA8Zz48cGF0aCBkPVwiTTQ0Ni4xLDE1NC45YzM4LjUtNTQuNiwxMTQuMS02OC42LDE2OC43LTMwLjFjNTQuNiwzOS4yLDY4LDExNC43LDI5LjQsMTY5LjRjLTM3LjgsNTUuMy03NywxNi4xLTEzMi40LTIyLjRDNDU3LjIsMjMzLjIsNDA3LjUsMjEwLjEsNDQ2LjEsMTU0Ljl6IE03Ny4yLDc5OC44bC0xMS45LDQuOWwxLjUtMTMuM2wyNDIuMS0zNTBsMTQuNywxMy4zTDc3LjIsNzk4Ljh6IE00NjguNSw1MzYuOWMxMC41LTEzLjksMjEuNy0yNy4yLDM0LjMtNDAuNWMzMC44LTMwLjIsNjYuNS01NC42LDEwNS43LTcwLjhjNDEuMy0xNy41LDg1LjQtMjYuNSwxMzAuMi0yNi41aDEzLjNjMjEuMS01Mi40LDI2LjctMTE1LjUsMTYuMi0xNzYuNEM3NDMuNiw4Mi44LDYxMC42LTExLDQ3MC42LDE0LjJDMzMxLjMsMzguNywyMTMuOCwxNDYuNSwyMzguMSwyODYuNGM1LjcsMzAuMSwyMC4zLDc3LDM3LjgsMTExLjNMMjIuNiw3NjAuNGMtOS4xLDEzLjMtMTQuNywzNy43LTExLjksNTMuOEwyMiw4NzYuNWMtMi45LTE2LjEtNC4yLTIyLjMtNC4yLTIyLjNjMC43LDAsOSw0My4zLDE1LjQsNDMuM2w4My4zLDEuNWMxNi4xLTIuOCwzNi40LTE2LjEsNDQuOC0zMC4ybDEwMC0xNTUuM2wxLjUtMS41bDg3LjQsNy4xbDExNi45LTE4Mi4xSDQ2OC41eiBNODEzLjYsNzY0LjRjLTIwLjQsNDcuNy03NS42LDcwLTEyMy45LDUwLjVjLTQ4LjQtMjAuMy03MC43LTc1LjYtNTAuNC0xMjMuM2MxOS42LTQ4LjMsNzUuNi03MC43LDEyMy4yLTUwLjRDODEwLjcsNjYxLjYsODMzLjgsNzE2LjIsODEzLjYsNzY0LjR6IE05MjAuNiw2OTkuM2w2OS40LTQzLjNsLTI1LjktNjIuM2wtNzkuMiwxOC44Yy0xMS4yLTE2LjEtMjUuMi0yOS40LTQxLjItNDEuM2wxOC4yLTc5bC02My4xLTI2bC00Mi42LDY4Yy0xOS42LTIuOC0zOS4yLTIuOC01OC4xLDBsLTQyLjgtNjguNmwtNjIuOSwyNS4ybDE3LjUsNzkuMmMtMTYuMSwxMS4yLTMwLjIsMjUuMS00Miw0MC42bC03OC40LTE4LjJsLTI2LjYsNjIuM2w2Ny45LDQzLjRjLTIuNywxOS41LTIuNywzOS4yLDAsNTguMWwtNjguNiw0Mi43bDI1LjksNjIuM2w3OS4yLTE3LjVjMTEuMiwxNS40LDI1LjIsMjkuNCw0MS4yLDQxLjJsLTE4LjgsNzguNWw2Mi45LDI1LjlsNDQuMi02OGMxOS42LDIuOSwzOS4yLDIuOSw1OC4xLDBsNDMuMyw2OC43bDYzLTI1LjlMODQzLDg4NC45YzE1LjQtMTEuMiwyOC43LTI0LjQsNDAuNi00MC42bDc5LjcsMTguMmwyNi42LTYyLjNsLTY5LjQtNDIuN0M5MjMuNCw3MzcuOSw5MjMuNCw3MTksOTIwLjYsNjk5LjN6XCIvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgUGVybWlzc2lvbk1hbmFnZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgXG4gICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDEwMDAgMTAwMFwiIHhtbFNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgPGc+PHBhdGggZD1cIk05NjguOSw0ODEuNGMtMS4zLDEwLjUtMi45LDIxLjQtNSwzMS44bC01LjIsMjQuOGwtMjUuMy0xLjFjLTMuMy0wLjEtNi42LTAuMi0xMC0wLjJjLTcyLjIsMC0xNDAuNiwzMy42LTE5My42LDgxYy00LjMsMy44LTguOSw5LjktMTIuNCwxNC41Yy02LjksOC45LTEzLjUsMTguMi0xOS45LDI3LjRjLTE3LjQsMjQuOS0zNC4yLDUwLjMtNTAuNyw3NS44Yy0xNi43LDI1LjctMzMuMSw1MS42LTQ5LjMsNzcuNmwtOS41LDE1LjNsLTgwLjYtNS41TDQwNS4zLDk3My4ybC03LjUsMy41QzM3My43LDk4Ny45LDM0MCw5OTAsMzEzLjYsOTkwYy05LjksMC0yMC0wLjItMjkuOS0xbC0xNy43LTEuNGwtNy4zLTE2LjJjLTE0LjMtMzEuOC0xOS4yLTcwLjgtMjIuMy0xMDUuMmMtMC4yLTEuOS0wLjMtMy45LTAuNS01LjhjLTAuNC0yLjMtMC42LTQuNy0wLjQtN2wtMjMuNCwzNC41bC05LjksNC42Yy0yNS42LDEyLTYwLjMsMTQuMi04OC4yLDE0LjJjLTEwLjEsMC0yMC41LTAuMi0zMC42LTFsLTIzLjMtMS44bC05LjYtMjEuM2MtMTQuNy0zMi45LTE5LjktNzIuNy0yMy4xLTEwOC4zYy0wLjItMS43LTAuMy0zLjUtMC41LTUuM2MtMy0xNy43LDYuNi0zMC42LDE1LjgtNDQuN2M5LTEzLjgsMTguMi0yNy41LDI3LjQtNDEuMWMyNy4zLTQwLjMsNTUtODAuNCw4Mi43LTEyMC40YzM1LjYtNTEuNCw3MS40LTEwMi43LDEwNy4yLTE1NGMtMjAuNi00Ni4zLTMyLjQtOTcuMS0yOS0xNDhjMS40LTIwLjcsNi00Ny43LDE1LTY2LjljMzEuMS02Ni4yLDc4LjQtMTE5LjYsMTQ0LjQtMTUyQzQzNCwyMC42LDQ4Mi43LDEwLDUzMSwxMGMxMy4xLDAsMjYuOSwwLjcsMzkuOSwyLjhjNjYsMTAuOSwxMjEuMyw0Mi4zLDE1OS4yLDk3LjhjMC40LDAuNiwwLjgsMS4xLDEuMSwxLjdjMTIuNCwwLDI1LjQsMC43LDM3LjYsMi43YzYzLjQsMTAuNSwxMTYuNCw0MC40LDE1Mi45LDkzLjhjMzkuMyw1Ny40LDUxLjYsMTI5LjcsNTEuOCwxOTguMUM5NzMuNiw0MzEuOCw5NzIsNDU2LjgsOTY4LjksNDgxLjR6IE01NjEuMSw3MS44Yy0yLjktMC41LTEzLjctMi0zMC4xLTJjLTU5LjksMC0xNjkuNiwxOS40LTIzMC43LDE0OS42Yy0wLjMsMC43LTguNCwxOS4yLTkuNyw1MC41Yy0xLjIsMjkuMywzLjYsNzYuMywzMy4yLDEzMy4zbDUuNywxMC45bC03LjEsMTAuMUMyMzkuMyw1NDIuOCwxMDYuOSw3MzMuNCw4Ni45LDc2Ni40YzAuMSwwLjgsMC4xLDEuNiwwLjIsMi42YzEuNCwxNS45LDQuNSw1MC40LDEzLjcsNzcuOGMzLjgsMC4xLDguNCwwLjIsMTMuMywwLjJjMjUuMiwwLDQ1LjUtMi40LDU4LjItNi43bDExMC4yLTE2Mi4zbDYzLjIsNC4zYzQuOS03LjEsOS44LTE0LjEsMTQuNy0yMS4yYzM2LjYtNTIuOSw3My40LTEwNS43LDExMC4zLTE1OC40Yy0yMS40LTQ2LjItMzMuOC05Ny4yLTMwLjQtMTQ4LjNjMS0xNSwzLjQtMzAuMSw3LjQtNDQuNWMtMy40LTIuOC02LjktNS41LTEwLjMtOC4zYy0yMy4xLTE4LjUtNTUuMS00MS42LTU3LjctNzMuNmMtMS4yLTE0LjgsMy44LTI4LjgsMTMuOC0zOS44YzM4LjItNDIuNSw5NC4xLTc0LjIsMTUyLjMtNzQuMmMyNS42LDAsNTAuNCw2LjIsNzEuOCwxOS40YzE0LTUuNCwyOC40LTkuOCw0My4xLTEzLjFDNjM1LDk0LjcsNjAxLjcsNzguNSw1NjEuMSw3MS44eiBNNDc0LjEsMjU0LjNjMTkuMy0zMS4yLDQzLTU4LjUsNzEuNy04MC43Yy0zNS44LDAtNzQuNywxOS4xLTEwNC45LDUxLjJDNDQ2LjMsMjMyLDQ2MS45LDI0NC42LDQ3NC4xLDI1NC4zeiBNODgwLjIsMjM3LjFjLTI3LTM5LjUtNjcuMy02My45LTExOS41LTcyLjVjLTIuOS0wLjUtMTMuNy0yLTMwLjEtMmMtNTkuOSwwLTE2OS42LDE5LjQtMjMwLjcsMTQ5LjZjLTAuMywwLjctOC40LDE5LjItOS43LDUwLjVjLTEuMiwyOS4zLDMuNiw3Ni4zLDMzLjIsMTMzLjNsNS43LDEwLjlsLTcuMSwxMC4xYy04My4xLDExOC42LTIxNS41LDMwOS4yLTIzNS41LDM0Mi4yYzAuMSwwLjgsMC4xLDEuNiwwLjIsMi42YzEuNCwxNS45LDQuNSw1MC40LDEzLjcsNzcuOGMzLjgsMC4xLDguNCwwLjIsMTMuMywwLjJjMjUuMiwwLDQ1LjUtMi40LDU4LjItNi43bDExMC4yLTE2Mi4zbDc5LjMsNS40YzI1LjUtNDAuOCwxMDguNi0xNzIuMywxMzUtMTk1LjhjMzguNC0zNC40LDExNy43LTkxLjUsMjIxLjEtOTMuN0M5MjQsNDQyLjQsOTM1LjgsMzE4LjIsODgwLjIsMjM3LjF6IE04MTIuMiw0NzcuMmMtOC43LDkuNy0yMC4yLDE1LjMtMzMuMywxNS4zYy0yLjQsMC00LjgtMC4yLTcuMi0wLjZjLTEyLTEuOS0yMi4zLTguMy0zMS42LTE1LjljLTEwLjgtOC44LTIwLjctMTkuMy0zMC40LTI5LjNjLTEwLjctMTEuMS0yMS40LTIyLjItMzIuOS0zMi41Yy0xMS05LjgtMjIuNC0xOS4xLTMzLjktMjguM2MtMTEuNi05LjMtMjMuOC0xOC44LTM0LjEtMjkuNGMtOC43LTguOS0xNi40LTE5LjMtMTkuMS0zMS43Yy0wLjQtMS45LTAuNy0zLjktMC45LTUuOWMtMS0xMi4yLDMuMi0yMy42LDExLjQtMzIuN2MzNi4zLTQwLjQsODkuNy03MSwxNDUuMi03MWMzMC43LDAsNjAuMSw5LjUsODMuMSwzMC4yYzMxLjIsMjgsNDIuOCw3MC4yLDM5LjEsMTExQzg2My40LDQwMS41LDg0Mi4xLDQ0NCw4MTIuMiw0NzcuMnogTTc5NC44LDI4M2MtMTIuNi0xMS40LTI5LjgtMTcuNC00OS42LTE3LjRjLTM1LjgsMC03NC43LDE5LjEtMTA0LjksNTEuMmM1LjYsNy4zLDIxLjcsMjAuMiwzMy45LDMwYzExLjEsOC45LDIzLjYsMTguOSwzNi4xLDMwLjFjMTMuMywxMiwyNS4xLDI0LjIsMzUuNSwzNWMxMC4zLDEwLjYsMjMuOCwyNC43LDMxLjIsMjkuMmMyMy4zLTI2LjgsMzcuNi01OC4zLDQwLjQtODlDODIwLjEsMzIzLDgxMi4xLDI5OC41LDc5NC44LDI4M3ogTTU2Mi43LDU5My40TDU2Mi43LDU5My40TDQxMy44LDgwMmMtMC4xLDAuMS0wLjEsMC4yLTAuMiwwLjNjLTkuOCwxMy41LTI5LDE5LjMtNDMuMyw5LjJjLTE0LjMtMTAuMi0xNS4xLTMwLjMtNS4zLTQ0bDE0OS4yLTIwOC45YzkuNy0xMy42LDI5LjEtMTkuNSw0My40LTkuM2MxNC4zLDEwLjIsMTUuMSwzMC4zLDUuMyw0NEw1NjIuNyw1OTMuNHogTTM4Mi45LDUwOC45bC0wLjMsMC40bDAsMC4xTDIzMy44LDcxNy44Yy0wLjEsMC4xLTAuMSwwLjItMC4yLDAuM2MtMTIuOSwxNy44LTM4LDI0LjYtNTYuNiwxMS4zYy0xOC43LTEzLjMtMjAuNC0zOS4zLTcuNS01Ny40bDE0OS4yLTIwOC45YzEyLjgtMTcuOSwzOC4xLTI0LjgsNTYuNy0xMS41QzM5NCw0NjQuOSwzOTUuOCw0OTAuOSwzODIuOSw1MDguOXpcIi8+PC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICB9XG5cbiAgICBjb25zdCBpdGVtcyA9IFtcbiAgICAgICAgZ2V0SXRlbShcIk5ow6JuIHPhu7FcIiwgXCJzdWItbWVudS0xXCIsIDxNZFBlb3BsZU91dGxpbmUgLz4sIFtcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcHJvZmlsZWB9Pkjhu5Mgc8ahPC9MaW5rPiwgXCIxXCIsIDxCc0ZpbGVFYXJtYXJrRmlsbCAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL2RlcGFydG1lbnRgfT5C4buZIHBo4bqtbiBjw7RuZyB0w6FjPC9MaW5rPiwgXCIyXCIsIDxGY0RlcGFydG1lbnQgLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wb3NpdGlvbmB9PkNo4bupYyBkYW5oLCBjaOG7qWMgduG7pTwvTGluaz4sIFwiM1wiLCA8UG9zaXRpb25JdGVtIC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vbXlwcm9maWxlLyR7and0X2RlY29kZShUT0tFTik/LmlkfWB9PlRow7RuZyB0aW4gY8OhIG5ow6JuPC9MaW5rPiwgXCI0XCIsIDxJbVByb2ZpbGUgLz4pLFxuICAgICAgICBdKSxcbiAgICAgICAgZ2V0SXRlbShcIlF1eeG7gW5cIiwgXCJzdWItbWVudS0yXCIsIDxQZXJtaXNzaW9uTWVudSAvPiwgW1xuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL21hbmFnZWB9PlF14bqjbiBsw70gcXV54buBbjwvTGluaz4sIFwiNVwiLCA8UGVybWlzc2lvbk1hbmFnZW1lbnQgLz4gKSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9wb3NpdGlvbmB9PlF1eeG7gW4gY2jhu6ljIHbhu6U8L0xpbms+LCBcIjZcIiwgPFBlcm1pc3Npb25Qb3NpdGlvbiAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vZGVwYXJ0bWVudC1wb3NpdGlvbmB9PlF1eeG7gW4gUEIgLSBDVjwvTGluaz4sIFwiN1wiLCA8UGVybWlzc2lvbkRlcFBvcyAvPiksXG5cbiAgICAgICAgXSlcbiAgICBdO1xuXG4gICAgY29uc3QgaXRlbXNfdXNlciA9IFtcbiAgICAgICAgZ2V0SXRlbShcIk5ow6JuIHPhu7FcIiwgXCJzdWItbWVudS0xXCIsIDxNZFBlb3BsZU91dGxpbmUgLz4sIFtcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vbXlwcm9maWxlLyR7and0X2RlY29kZShUT0tFTik/LmlkfWB9PlRow7RuZyB0aW4gY8OhIG5ow6JuPC9MaW5rPiwgXCI0XCIsIDxJbVByb2ZpbGUgLz4pLFxuICAgICAgICBdKVxuICAgIF07XG5cbiAgICBjb25zdCByZW5kZXJTdWJNZW51ICA9ICgpPT57XG4gICAgICAgIGlmKHVyaSA9PT0gXCJwcm9maWxlLXNlcnZpY2VcIil7XG4gICAgICAgICAgICBsZXQgZGVjb2RlZCA9IGp3dF9kZWNvZGUoVE9LRU4pO1xuICAgICAgICAgICAgaWYoZGVjb2RlZC5pZCA9PT0gMSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNfdXNlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBkZWNvZGVkID0gand0X2RlY29kZShUT0tFTik7XG4gICAgICAgICAgICBpZihkZWNvZGVkLmlkID09PSAxKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdE9wZW5LZXlzPXtbYHN1YjFgXX1cbiAgICAgICAgICAgICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9TdWJNZW51X19YWmViNlwiPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0T3BlbktleXM9e1tgc3ViMWBdfVxuICAgICAgICAgICAgICAgIG1vZGU9J2lubGluZSdcbiAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXNfdXNlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgPD57cmVuZGVyU3ViTWVudSgpfTwvPlxuICAgIClcbn1cbiIsImltcG9ydCB7IGNoZWNrTWljcm9GZSwgZ2V0VG9rZW5JbkNvb2tpZSB9IGZyb20gXCIuLi91bHRpbHMvaGVscGVyXCI7XG5cbmV4cG9ydCBjb25zdCBUT0tFTiA9IGdldFRva2VuSW5Db29raWUoKTtcblxuZXhwb3J0IGNvbnN0IGxvY2FsID0gY2hlY2tNaWNyb0ZlKCkgPT09IHRydWUgPyBcImh0dHBzOi8vcHJvZmlsZXNlcnZpY2UudHVvaXRyZS52blwiIDogXCJcIlxuXG4vLyBSZWdleFxuZXhwb3J0IGNvbnN0IHJlZ2V4RW1haWwgPSAvXltcXHctXFwuXStAKFtcXHctXStcXC4pK1tcXHctXXsyLDR9JC87XG5leHBvcnQgY29uc3QgcmVnZXhQaG9uZSA9IC8oODRbM3w1fDd8OHw5XXwwWzN8NXw3fDh8OV0pKyhbMC05XXs4fXxbMC05XXs5fSlcXGIvO1xuXG5leHBvcnQgY29uc3QgcXVhVHJpbmhMVkhUID0gXCJRdcOhIHRyw6xuaCBsw6BtIHZp4buHYyB2w6AgaOG7jWMgdOG6rXBcIjtcbmV4cG9ydCBjb25zdCB0aGFtR2lhVG9DaHVjQ1QgPSBcIlRoYW0gZ2lhIGPDoWMgdOG7lSBjaOG7qWMgY2jDrW5oIHRy4buLLCBjw6FjIGjDtOG7iyBuZ2jhu4EgbmdoaeG7h3BcIjtcbmV4cG9ydCBjb25zdCBkYW9UYW8gPSBcIsSQw6BvIHThuqFvXCI7XG5leHBvcnQgY29uc3QgYm9pRHVvbmcgPSBcIkLhu5NpIGTGsOG7oW5nXCI7XG5leHBvcnQgY29uc3Qga2hlblRodW9uZyA9IFwiS2hlbiB0aMaw4bufbmdcIjtcbmV4cG9ydCBjb25zdCBreUx1YXQgPSBcIkvhu7cgbHXhuq10XCI7XG5leHBvcnQgY29uc3QgbGljaFN1QmFuVGhhbiA9IFwiTOG7i2NoIHPhu60gYuG6o24gdGjDom5cIjtcbmV4cG9ydCBjb25zdCBxdWFuSGVHaWFEaW5oID0gXCJRdWFuIGjhu4cgZ2lhIMSRw6xuaFwiO1xuZXhwb3J0IGNvbnN0IG5vaVNpbmhfU3RlcDEgPSBcIk7GoWkgc2luaFwiXG5leHBvcnQgY29uc3QgcXVlUXVhbl9TdGVwMSA9IFwiUXXDqiBxdcOhblwiXG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfSUQgPSBcIkdFVF9QUk9GSUxFX0JZX0lEXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST1ZJTkNFUyA9IFwiR0VUX1BST1ZJTkNFU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfQklSVEhfUExBQ0UgPSBcIkdFVF9ESVNUUklDVFNfQklSVEhfUExBQ0VcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTiA9IFwiR0VUX0RJU1RSSUNUU19IT01FX1RPV05cIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX0FERFJFU1MgPSBcIkdFVF9ESVNUUklDVFNfQUREUkVTU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfSE9LSEFVID0gXCJHRVRfRElTVFJJQ1RTX0hPS0hBVVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDggPSBcIkdFVF9ESVNUUklDVFNfU1RFUDhcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA3ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA3XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQOSA9IFwiR0VUX0RJU1RSSUNUU19TVEVQOVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDdfQ09OID0gXCJHRVRfRElTVFJJQ1RTX1NURVA3X0NPTlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9GSUxFID0gXCJVUERBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QUk9GSUxFID0gXCJDUkVBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IE9OTFlfQ1JFQVRFX1BST0ZJTEUgPSBcIk9OTFlfQ1JFQVRFX1BST0ZJTEVcIjtcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9MSVNUID0gXCJHRVRfVVNFUl9MSVNUXCI7XG5leHBvcnQgY29uc3QgR0VUX1VTRVJfSU5GT1JNQVRJT04gPSBcIkdFVF9VU0VSX0lORk9STUFUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUF9QT1MgPSBcIkdFVF9ERVBBUlRNRU5UX1BPU0lUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX1BBUlQgPSBcIkdFVF9QQVJUXCI7XG5leHBvcnQgY29uc3QgR0VUX0FWQVRBUiA9IFwiR0VUX0FWQVRBUlwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ERVBfUE9TID0gXCJERUxFVEVfREVQX1BPU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UX0xJU1QgPSBcIkdFVF9ERVBBUlRNRU5UX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfREVQQVJUTUVOVCA9IFwiVVBEQVRFX0RFUEFSVE1FTlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQQVJUTUVOVF9JTkZPUiA9IFwiR0VUX0RFUEFSVE1FTlRfSU5GT1JcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfREVQQVJUTUVOVCA9IFwiQ1JFQVRFX0RFUEFSVE1FTlRcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfREVQQVJUTUVOVCA9IFwiREVMRVRFX0RFUEFSVE1FTlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfUE9TSVRJT05TX01BTkFfTElTVCA9IFwiR0VUX1BPU0lUSU9OU19NQU5BX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfUE9TSVRJT05fVFlQRV9MSVNUID0gXCJHRVRfUE9TSVRJT05fVFlQRV9MSVNUXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU0lUSU9OX1RZUEUgPSBcIkNSRUFURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU0lUSU9OX1RZUEUgPSBcIlVQREFURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BPU0lUSU9OX1RZUEUgPSBcIkRFTEVURV9QT1NJVElPTl9UWVBFXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIlVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkdFVF9QRVJTT05BTF9ISVNUT1JZXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIlVQREFURV9QRVJTT05BTF9ISVNUT1JZXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BFUlNPTkFMX0hJU1RPUlkgPSBcIkRFTEVURV9QRVJTT05BTF9ISVNUT1JZXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BBUlRZID0gXCJDUkVBVEVfUEFSVFlcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUEFSVFkgPSBcIlVQREFURV9QQVJUWVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9PUkdBTklaQVRJT04gPSBcIkNSRUFURV9PUkdBTklaQVRJT05cIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfT1JHQU5JWkFUSU9OID0gXCJVUERBVEVfT1JHQU5JWkFUSU9OXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX09SR0FOSVpBVElPTiA9IFwiREVMRVRFX09SR0FOSVpBVElPTlwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9UUkFJTklORyA9IFwiQ1JFQVRFX1RSQUlOSU5HXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1RSQUlOSU5HID0gXCJVUERBVEVfVFJBSU5JTkdcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfVFJBSU5JTkcgPSBcIkRFTEVURV9UUkFJTklOR1wiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJERUxFVEVfUkVXQVJEX0RJU0NJUExJTkVcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIlVQREFURV9SRVdBUkRfRElTQ0lQTElORVwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQID0gXCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3ID0gXCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQN1wiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX0NPTl9TVEVQNyA9IFwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3XCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDcgPSBcIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3XCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3ID0gXCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9DT05fU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUCA9IFwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBcIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQX1BPU19UT19TRUFSQ0ggPSBcIkdFVF9ERVBfUE9TX1RPX1NFQVJDSFwiO1xuZXhwb3J0IGNvbnN0IFNFQVJDSCA9IFwiU0VBUkNIXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVVNFUl9JRCA9IFwiR0VUX1BST0ZJTEVfQllfVVNFUl9JRFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QUk9GSUxFX0JZX1RPS0VOID0gXCJHRVRfUFJPRklMRV9CWV9UT0tFTlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QUk9GSUxFX0FDVElWRSA9IFwiVVBEQVRFX1BST0ZJTEVfQUNUSVZFXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fTElTVCA9IFwiR0VUX1BFUk1JU1NJT05fTElTVFwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QRVJNSVNTSU9OID0gXCJDUkVBVEVfUEVSTUlTU0lPTlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QRVJNSVNTSU9OID0gXCJVUERBVEVfUEVSTUlTU0lPTlwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OID0gXCJERUxFVEVfUEVSTUlTU0lPTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OID0gXCJHRVRfUEVSTUlTU0lPTl9QT1NJVElPTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9UQUJMRV9NQU5BR0VNRU5UID0gXCJHRVRfVEFCTEVfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9ERVBBUlRNRU5UID0gXCJTRUFSQ0hfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IFNFQVJDSF9QT1NJVElPTiA9IFwiU0VBUkNIX1BPU0lUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX1BPU19MSVNUID0gXCJHRVRfUE9TX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVTT1VSQ0UgPSBcIkRFTEVURV9SRVNPVVJDRVwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OX1BPUyA9IFwiREVMRVRFX1BFUk1JU1NJT05fUE9TXCI7XG5leHBvcnQgY29uc3QgUE9TVF9QRVJNSVNTSU9OX1BPUyA9IFwiUE9TVF9QRVJNSVNTSU9OX1BPU1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9QRVJNSVNTSU9OX0RFUF9QT1MgPSBcIkRFTEVURV9QRVJNSVNTSU9OX0RFUF9QT1NcIjtcbmV4cG9ydCBjb25zdCBQT1NUX1BFUk1JU1NJT05fREVQX1BPUyA9IFwiUE9TVF9QRVJNSVNTSU9OX0RFUF9QT1NcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSTUlTU0lPTl9ERVBfUE9TID0gXCJHRVRfUEVSTUlTU0lPTl9ERVBfUE9TXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fREVQX1BPU19MSVNUID0gXCJHRVRfUEVSTUlTU0lPTl9ERVBfUE9TX0xJU1RcIjsiLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBkb2NDb29raWUgZnJvbSBcImRvYy1jb29raWVzXCJcblxuZXhwb3J0IGxldCBoYW5kbGVEYXRlVGltZSA9IChkYXRlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvbnZlcnQ7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgLy8gY29udmVydCB04burIHPhu5Egc2FuZyBjaHXhu5dpIERELU1NLVlZWVlcbiAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZihkYXRlLmluY2x1ZGVzKFwiLjAwMFpcIikpe1xuICAgICAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgICAgIGNvbnZlcnQgPSBtb21lbnQoY29udmVydDEsIFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udmVydDEgPSBtb21lbnQobmV3IERhdGUoZGF0ZS5jb25jYXQoXCIuMDAwWlwiKSkpLmZvcm1hdChcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udmVydFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGxldCBjaGVja01pY3JvRmUgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMzAwMFwiKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcInByb2ZpbGVzZXJ2aWNlXCIpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMzAwMVwiKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGdldFRva2VuSW5Db29raWUgPSAoKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB0b2tlbkNvb2tpZSA9IGRvY0Nvb2tpZS5nZXRJdGVtKFwidXNlcnRva2VuXCIpXG4gICAgICAgIGlmKCF0b2tlbkNvb2tpZSl7XG4gICAgICAgICAgICAvLyBraGkgcHVzaCBjb2RlIGzDqm4gc2VydmVyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgLy8gS2hpIHRlc3QgdHLDqm4gbG9jYWxcbiAgICAgICAgICAgIC8vIHJldHVybiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk16VTJMQ0psZUhBaU9qSTNOVEExTlRRM016QjkuZHJCT19HN0Y5SkNEaTdYbUxSbWYxNFF2VXFZZThjVzRpbkJJYlFzbVJZSVwiXG4gICAgICAgICAgICAvLyByZXR1cm4gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNU3dpWlhod0lqb3lOelV3TkRFeE1EZzNmUS51V2VFSkVYSHlOeXN3ODVrMjJtMHM2ZEZOaTRuSkZBTzhOUzhsZVk2ZnlBXCJcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbkNvb2tpZSk7XG4gICAgICAgIHJldHVybiB0b2tlbkNvb2tpZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJNZW51IiwiTWRQZW9wbGVPdXRsaW5lIiwiTGluayIsIkJzRmlsZUVhcm1hcmtGaWxsIiwiRmNEZXBhcnRtZW50IiwiY2hlY2tNaWNyb0ZlIiwiSW1Qcm9maWxlIiwiand0X2RlY29kZSIsIlRPS0VOIiwiU3ViTWVudSIsInVyaSIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsIlBvc2l0aW9uSXRlbSIsIlBlcm1pc3Npb25NZW51IiwiUGVybWlzc2lvblBvc2l0aW9uIiwiUGVybWlzc2lvbkRlcFBvcyIsIlBlcm1pc3Npb25NYW5hZ2VtZW50IiwiaXRlbXMiLCJpZCIsIml0ZW1zX3VzZXIiLCJyZW5kZXJTdWJNZW51IiwiZGVjb2RlZCIsImdldFRva2VuSW5Db29raWUiLCJsb2NhbCIsInJlZ2V4RW1haWwiLCJyZWdleFBob25lIiwicXVhVHJpbmhMVkhUIiwidGhhbUdpYVRvQ2h1Y0NUIiwiZGFvVGFvIiwiYm9pRHVvbmciLCJraGVuVGh1b25nIiwia3lMdWF0IiwibGljaFN1QmFuVGhhbiIsInF1YW5IZUdpYURpbmgiLCJub2lTaW5oX1N0ZXAxIiwicXVlUXVhbl9TdGVwMSIsIkdFVF9QUk9GSUxFX0JZX0lEIiwiR0VUX1BST1ZJTkNFUyIsIkdFVF9ESVNUUklDVFNfQklSVEhfUExBQ0UiLCJHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTiIsIkdFVF9ESVNUUklDVFNfQUREUkVTUyIsIkdFVF9ESVNUUklDVFNfSE9LSEFVIiwiR0VUX0RJU1RSSUNUU19TVEVQOCIsIkdFVF9ESVNUUklDVFNfU1RFUDciLCJHRVRfRElTVFJJQ1RTX1NURVA5IiwiR0VUX0RJU1RSSUNUU19TVEVQN19DT04iLCJVUERBVEVfUFJPRklMRSIsIkNSRUFURV9QUk9GSUxFIiwiT05MWV9DUkVBVEVfUFJPRklMRSIsIkdFVF9VU0VSX0xJU1QiLCJHRVRfVVNFUl9JTkZPUk1BVElPTiIsIkdFVF9ERVBfUE9TIiwiR0VUX1BBUlQiLCJHRVRfQVZBVEFSIiwiREVMRVRFX0RFUF9QT1MiLCJHRVRfREVQQVJUTUVOVF9MSVNUIiwiVVBEQVRFX0RFUEFSVE1FTlQiLCJHRVRfREVQQVJUTUVOVF9JTkZPUiIsIkNSRUFURV9ERVBBUlRNRU5UIiwiREVMRVRFX0RFUEFSVE1FTlQiLCJHRVRfUE9TSVRJT05TX01BTkFfTElTVCIsIkdFVF9QT1NJVElPTl9UWVBFX0xJU1QiLCJDUkVBVEVfUE9TSVRJT05fVFlQRSIsIlVQREFURV9QT1NJVElPTl9UWVBFIiwiREVMRVRFX1BPU0lUSU9OX1RZUEUiLCJDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJVUERBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQiLCJHRVRfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QRVJTT05BTF9ISVNUT1JZIiwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJERUxFVEVfUEVSU09OQUxfSElTVE9SWSIsIkNSRUFURV9QQVJUWSIsIlVQREFURV9QQVJUWSIsIkNSRUFURV9PUkdBTklaQVRJT04iLCJVUERBVEVfT1JHQU5JWkFUSU9OIiwiREVMRVRFX09SR0FOSVpBVElPTiIsIkNSRUFURV9UUkFJTklORyIsIlVQREFURV9UUkFJTklORyIsIkRFTEVURV9UUkFJTklORyIsIkNSRUFURV9SRVdBUkRfRElTQ0lQTElORSIsIkRFTEVURV9SRVdBUkRfRElTQ0lQTElORSIsIlVQREFURV9SRVdBUkRfRElTQ0lQTElORSIsIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQIiwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDciLCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9DT05fU1RFUDciLCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQNyIsIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQX0NPTl9TVEVQNyIsIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQIiwiR0VUX0RFUF9QT1NfVE9fU0VBUkNIIiwiU0VBUkNIIiwiR0VUX1BST0ZJTEVfQllfVVNFUl9JRCIsIkdFVF9QUk9GSUxFX0JZX1RPS0VOIiwiVVBEQVRFX1BST0ZJTEVfQUNUSVZFIiwiR0VUX1BFUk1JU1NJT05fTElTVCIsIkNSRUFURV9QRVJNSVNTSU9OIiwiVVBEQVRFX1BFUk1JU1NJT04iLCJERUxFVEVfUEVSTUlTU0lPTiIsIkdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OIiwiR0VUX1RBQkxFX01BTkFHRU1FTlQiLCJTRUFSQ0hfREVQQVJUTUVOVCIsIlNFQVJDSF9QT1NJVElPTiIsIkdFVF9QT1NfTElTVCIsIkRFTEVURV9SRVNPVVJDRSIsIkRFTEVURV9QRVJNSVNTSU9OX1BPUyIsIlBPU1RfUEVSTUlTU0lPTl9QT1MiLCJERUxFVEVfUEVSTUlTU0lPTl9ERVBfUE9TIiwiUE9TVF9QRVJNSVNTSU9OX0RFUF9QT1MiLCJHRVRfUEVSTUlTU0lPTl9ERVBfUE9TIiwiR0VUX1BFUk1JU1NJT05fREVQX1BPU19MSVNUIiwibW9tZW50IiwiZG9jQ29va2llIiwiaGFuZGxlRGF0ZVRpbWUiLCJkYXRlIiwiY29udmVydCIsImNvbnZlcnQxIiwiRGF0ZSIsImZvcm1hdCIsImluY2x1ZGVzIiwiY29uY2F0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9rZW5Db29raWUiXSwic291cmNlUm9vdCI6IiJ9