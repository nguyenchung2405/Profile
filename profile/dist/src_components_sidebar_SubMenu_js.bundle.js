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














function SubMenu() {
  var _jwt_decode, _jwt_decode2;

  var uri = (0,_ultils_helper__WEBPACK_IMPORTED_MODULE_3__.checkMicroFe)() === true ? "profile-service" : "";

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(function (state) {
    return state.permissionReducer;
  }),
      userPermission = _useSelector.userPermission;

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
  var items_user = [getItem("Nhân sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdPeopleOutline, {}), [getItem( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "".concat(uri, "/myprofile/").concat((_jwt_decode2 = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(_title_title__WEBPACK_IMPORTED_MODULE_5__.TOKEN)) === null || _jwt_decode2 === void 0 ? void 0 : _jwt_decode2.id),
    children: "Th\xF4ng tin c\xE1 nh\xE2n"
  }), "4", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_im__WEBPACK_IMPORTED_MODULE_11__.ImProfile, {}))])];

  var renderSubMenu = function renderSubMenu() {
    var subMenu = [];
    var menu_profile = [getItem("Nhân sự", "sub-menu-1", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_8__.MdPeopleOutline, {}), subMenu)];
    var subMenu_Per = [];
    var menu_permission = [getItem("Quyền", "sub-menu-2", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(PermissionMenu, {}), subMenu_Per)];

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
        return menu_profile.concat(menu_permission);
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
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          className: "sidebar_SubMenu__XZeb6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__.Menu // defaultOpenKeys={[`sub1`]}
          , {
            mode: "inline",
            items: menu_profile.concat(menu_permission)
          })
        });
      }
    } // if(uri === "profile-service"){
    //     let decoded = jwt_decode(TOKEN);
    //     if(decoded.id === 1){
    //         return items;
    //     } else {
    //         return items_user;
    //     }
    // } else {
    //     let decoded = jwt_decode(TOKEN);
    //     if(decoded.id === 1){
    //         return <div className="sidebar_SubMenu__XZeb6">
    //         <Menu
    //             // defaultOpenKeys={[`sub1`]}
    //             mode='inline'
    //             items={items}
    //         />
    //         </div>
    //     } else {
    //         return <div className="sidebar_SubMenu__XZeb6">
    //     <Menu
    //         // defaultOpenKeys={[`sub1`]}
    //         mode='inline'
    //         items={items_user}
    //     />
    //     </div>
    //     }
    // }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfc2lkZWJhcl9TdWJNZW51X2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRWUsU0FBU1csT0FBVCxHQUFtQjtFQUFBOztFQUU5QixJQUFJQyxHQUFHLEdBQUdOLDREQUFZLE9BQU8sSUFBbkIsR0FBMEIsaUJBQTFCLEdBQThDLEVBQXhEOztFQUNBLG1CQUF5Qkksd0RBQVcsQ0FBQyxVQUFBRyxLQUFLO0lBQUEsT0FBSUEsS0FBSyxDQUFDQyxpQkFBVjtFQUFBLENBQU4sQ0FBcEM7RUFBQSxJQUFPQyxjQUFQLGdCQUFPQSxjQUFQOztFQUNBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFhQyxJQUFiLEVBQW1CQyxRQUFuQixFQUFnQztJQUM1QyxPQUFPO01BQ0hILEtBQUssRUFBTEEsS0FERztNQUVIQyxHQUFHLEVBQUhBLEdBRkc7TUFHSEMsSUFBSSxFQUFKQSxJQUhHO01BSUhDLFFBQVEsRUFBUkE7SUFKRyxDQUFQO0VBTUgsQ0FQRDs7RUFTQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtJQUFBLG9CQUNiO01BQUssTUFBTSxFQUFDLGNBQVo7TUFBMkIsSUFBSSxFQUFDLGNBQWhDO01BQStDLEtBQUssRUFBQyxjQUFyRDtNQUFvRSxPQUFPLEVBQUMsS0FBNUU7TUFBa0YsS0FBSyxFQUFDLDRCQUF4RjtNQUNQLE9BQU8sRUFBQywyQkFERDtNQUVSLG1CQUFtQixFQUFDLGVBRlo7TUFBQSx1QkFHSjtRQUFHLFNBQVMsRUFBQywwREFBYjtRQUF3RSxNQUFNLEVBQUMsTUFBL0U7UUFBQSx3QkFDQTtVQUFNLENBQUMsRUFBQztRQUFSLEVBREEsZUFPQTtVQUFNLENBQUMsRUFBQztRQUFSLEVBUEEsZUFZQTtVQUFNLENBQUMsRUFB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SUFEQSxrQ0FENkNDLGNBQzdDO01BRDZDQSxjQUM3QztJQUFBOztJQUVBLG1DQUFtQkEsY0FBbkIscUNBQWtDO01BQTlCLElBQUlDLE9BQU8sc0JBQVg7O01BQ0EsSUFBRyxDQUFDSCxjQUFjLENBQUM3RyxRQUFmLENBQXdCZ0gsT0FBeEIsQ0FBSixFQUFxQztRQUNqQ0YsTUFBTSxHQUFHLEtBQVQ7TUFDSDtJQUNKOztJQUNELE9BQU9BLE1BQVA7RUFDSCxDQVJELENBUUUsT0FBT1QsS0FBUCxFQUFjO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0VBQ0g7QUFDSixDQVpNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZmlsZS8uL3NyYy9jb21wb25lbnRzL3NpZGViYXIvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL3RpdGxlL3RpdGxlLmpzIiwid2VicGFjazovL3Byb2ZpbGUvLi9zcmMvdWx0aWxzL2hlbHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIlxuaW1wb3J0IHsgTWRQZW9wbGVPdXRsaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQnNGaWxlRWFybWFya0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxuaW1wb3J0IHsgRmNEZXBhcnRtZW50IH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCJcbmltcG9ydCB7IGNoZWNrTWljcm9GZSB9IGZyb20gJy4uLy4uL3VsdGlscy9oZWxwZXInO1xuaW1wb3J0IHtJbVByb2ZpbGV9IGZyb20gXCJyZWFjdC1pY29ucy9pbVwiXG5pbXBvcnQgand0X2RlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IHtUT0tFTn0gZnJvbSBcIi4uLy4uL3RpdGxlL3RpdGxlXCJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJNZW51KCkge1xuICAgIFxuICAgIGxldCB1cmkgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwicHJvZmlsZS1zZXJ2aWNlXCIgOiBcIlwiO1xuICAgIGNvbnN0IHt1c2VyUGVybWlzc2lvbn0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wZXJtaXNzaW9uUmVkdWNlcik7XG4gICAgY29uc3QgZ2V0SXRlbSA9IChsYWJlbCwga2V5LCBpY29uLCBjaGlsZHJlbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgY2hpbGRyZW5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IFBvc2l0aW9uSXRlbSA9ICgpPT4oXG4gICAgICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgdmlld0JveD1cIjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDBcIlxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+XG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgc3Ryb2tlPVwibm9uZVwiPlxuICAgICAgICA8cGF0aCBkPVwiTTQzMTAgNDc4MyBjLTEwNSAtMTggLTIyOSAtODAgLTI5OSAtMTUyIC0xMDAgLTEwMCAtMTQxIC0yMDggLTE0MVxuICAgICAgICAtMzY3IDAgLTMyNSAxNzggLTU2MyA0NTIgLTYwNSAyMzcgLTM3IDQ2NiAxMTIgNTU1IDM2MiAyMiA2MiAyNyA5NiAzMSAyMDYgNFxuICAgICAgICAxMTUgMSAxNDEgLTE3IDIwMyAtMjggOTMgLTcwIDE1OCAtMTM4IDIxOSAtMTE4IDEwNSAtMjk1IDE1OSAtNDQzIDEzNHogbTE0NFxuICAgICAgICAtMjM4IGM1OSAtMTAgMTMwIC00OSAxNjUgLTkyIDk3IC0xMTcgNzQgLTM2OSAtNDQgLTQ4OCAtNTAgLTQ5IC05MCAtNjcgLTE2NVxuICAgICAgICAtNzMgLTE1NSAtMTEgLTI2OCA5NyAtMzAwIDI4OCAtMjYgMTU0IDE1IDI2NyAxMTkgMzI4IDQ1IDI2IDE0MiA1MyAxNzEgNDcgOFxuICAgICAgICAtMiAzMyAtNiA1NCAtMTB6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTI0MjAgNDExNCBjLTE4MCAtNDggLTMyMiAtMTg0IC0zNjQgLTM0OSAtMjAgLTc1IC0yMCAtMjM3IC0xIC0zMzBcbiAgICAgICAgMjIgLTEwNiA3NiAtMjA2IDE1NCAtMjg1IDEwMSAtMTAzIDIxMiAtMTUwIDM1MSAtMTUwIDEzOSAwIDI1MCA0NyAzNTEgMTUwXG4gICAgICAgIDExNSAxMTcgMTY5IDI2MiAxNjkgNDU0IDAgMTYxIC00MyAyNzYgLTE0MSAzNzQgLTYzIDYzIC0xNTIgMTEzIC0yNDUgMTM3IC03M1xuICAgICAgICAxOSAtMjAxIDE4IC0yNzQgLTF6IG0yNjcgLTI0NCBjMTM0IC01NyAxODggLTE5NSAxNDkgLTM3NSAtMzUgLTE2NCAtMTM3IC0yNjBcbiAgICAgICAgLTI3NiAtMjYwIC0xNjkgMCAtMjg4IDE1MyAtMjkwIDM3MSAtMSAyMTkgMjEwIDM1MyA0MTcgMjY0elwiLz5cbiAgICAgICAgPHBhdGggZD1cIk02NTUgMzQ3NCBjLTE1MiAtMzcgLTIyMyAtNzIgLTMwNiAtMTU0IC0xMDYgLTEwNSAtMTM4IC0xOTIgLTEzOVxuICAgICAgICAtMzc1IDAgLTEzMSAxOCAtMjEzIDY3IC0zMTMgOTkgLTIwMCAzMTggLTMxOSA1MjYgLTI4NCAyNzIgNDcgNDQ3IDI4MyA0NDdcbiAgICAgICAgNjA2IDAgMjQ1IC0xMTUgNDA4IC0zNDUgNDkyIC02NCAyMyAtMjA1IDM5IC0yNTAgMjh6IG0xNDAgLTIzOSBjODQgLTE0IDE2OVxuICAgICAgICAtODAgMjAyIC0xNTYgMzIgLTc1IDIzIC0yMzIgLTE5IC0zMjcgLTI5IC02NCAtOTAgLTEyNiAtMTUwIC0xNTIgLTQyIC0xOCAtNjVcbiAgICAgICAgLTIxIC0xMTggLTE4IC03NSA2IC0xMTUgMjQgLTE2NSA3MyAtMTE4IDExOSAtMTQxIDM3MSAtNDQgNDg4IDE3IDIxIDUwIDQ3IDcyXG4gICAgICAgIDU5IDQ1IDIzIDE0MiA0OCAxNjcgNDMgOCAtMiAzMyAtNiA1NSAtMTB6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTQyMTYgMzQzNCBjLTE2NCAtNDEgLTMxMCAtMTQyIC0zODUgLTI2NiAtNDAgLTY4IC01OCAtMTM1IC0xMTVcbiAgICAgICAgLTQ0MyAtNjIgLTMzNiAtNjIgLTM1MyA0IC0zOTggMjIgLTE1IDY0IC0xNyA0MDMgLTE3IDQxNSAwIDQyMSAxIDQ1MiA2MCAxOVxuICAgICAgICAzNyAxOSA3MyAwIDExMCAtMzAgNTcgLTQ1IDYwIC0zNjUgNjAgbC0yOTAgMCA1IDIzIGMyIDEyIDIxIDExMCA0MCAyMTcgNDBcbiAgICAgICAgMjE3IDYzIDI3NyAxMjUgMzM0IDE5MSAxNzIgNTYzIDEyNCA2NjcgLTg2IDE0IC0yNyA0MiAtMTUyIDc4IC0zNDMgMzEgLTE2NFxuICAgICAgICA2MSAtMzA3IDY2IC0zMTYgNDMgLTgyIDE3NCAtNzUgMjA5IDExIDEyIDMwIDEwIDUyIC0xOSAyMTQgLTczIDQwMSAtODggNDY3XG4gICAgICAgIC0xMjYgNTQzIC02NCAxMjkgLTE5MiAyMzIgLTM1MCAyODMgLTkwIDI5IC0zMDggMzcgLTM5OSAxNHpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjQyNSAyNzg2IGMtMjMxIC00NiAtMzk1IC0xNzMgLTQ2MyAtMzU4IC0xMiAtMzEgLTQ3IC0xOTUgLTc4IC0zNjVcbiAgICAgICAgbC01NyAtMzA3IDE5IC0zNiBjMzcgLTY5IDQ2IC03MCA0NDQgLTY5IDI0OCAwIDM2NSA0IDM5MCAxMiA0MCAxNCA4MCA2NyA4MFxuICAgICAgICAxMDcgMCA0MCAtNDAgOTMgLTgwIDEwNyAtMjQgOCAtMTI1IDEyIC0zMTMgMTIgbC0yNzkgMSA2IDI4IGMzIDE1IDIyIDExMSA0MVxuICAgICAgICAyMTQgNDAgMjEwIDQzIDIyMiA4NSAyODMgNjIgOTEgMTkwIDE0NSAzNDAgMTQ1IDE1NyAwIDI4MCAtNTUgMzQ3IC0xNTYgMzdcbiAgICAgICAgLTU2IDQ2IC05MiAxMjggLTUzNiAzMCAtMTY2IDQ0IC0xOTEgMTA2IC0yMDggNTMgLTE0IDEwNiAxMCAxMzMgNjAgbDE5IDM2XG4gICAgICAgIC01NyAzMDcgYy02MCAzMjYgLTc4IDM5MSAtMTM0IDQ3NSAtNjkgMTA2IC0yMDkgMTk5IC0zNTcgMjM3IC04NiAyMiAtMjM2IDI3XG4gICAgICAgIC0zMjAgMTF6XCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTU0MyAyMTIwIGMtMjAwIC01MiAtMzUwIC0xNzggLTQxMiAtMzQ1IC0xOCAtNDkgLTEzMSAtNjIzIC0xMzFcbiAgICAgICAgLTY2NyAwIC0zMiAyOSAtNzcgNjAgLTkzIDI0IC0xMyA4OSAtMTUgNDA1IC0xNSAzMzQgMCAzODAgMiA0MDUgMTcgNzMgNDMgNzNcbiAgICAgICAgMTUzIDAgMTk2IC0yNCAxNSAtNjUgMTcgLTMxOSAxNyAtMTYwIDAgLTI5MSAzIC0yOTEgNyAwIDQ0IDg2IDQ0OCAxMDMgNDgxXG4gICAgICAgIDEyNiAyNTQgNjA5IDI1MyA3MzEgLTEgMTggLTM3IDQwIC0xMzMgNzYgLTMyNyA2MyAtMzQ3IDU2IC0zMTggOTUgLTM1NyA0M1xuICAgICAgICAtNDMgOTggLTQ2IDE0NCAtNyA1NiA0NiA1NSA2NCAtNSAzODcgLTMwIDE2MSAtNjIgMzE2IC03MSAzNDYgLTUzIDE3MiAtMjM1XG4gICAgICAgIDMyMiAtNDQyIDM2NiAtMTAwIDIxIC0yNTggMTkgLTM0OCAtNXpcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMzczOCAxODc5IGMtMTQgLTYgLTE1OSAtMTUzIC0zMjMgLTMzMCBsLTI5NiAtMzE5IC01OTkgMCBjLTM5OSAwXG4gICAgICAgIC02MDcgLTQgLTYyMiAtMTEgLTEzIC01IC0xNTMgLTE1NCAtMzEzIC0zMjkgbC0yOTAgLTMxOSAtNTkwIC0xIGMtNDI5IC0xXG4gICAgICAgIC01OTkgLTQgLTYyNCAtMTMgLTQ4IC0xNyAtNzYgLTU4IC03NiAtMTEzIDAgLTM2IDYgLTQ5IDMzIC03NiBsMzIgLTMzIDY0MiAtM1xuICAgICAgICBjNDc3IC0yIDY1MCAwIDY3MSA5IDE2IDcgMTU2IDE1MiAzMjQgMzM2IGwyOTUgMzIzIDYwMiAwIDYwMiAwIDMxIDIzIGMxNyAxMlxuICAgICAgICAxNTYgMTU3IDMwOSAzMjIgbDI3OCAzMDAgNjA2IDUgYzY3OSA2IDY0NSAyIDY3NyA3OCAxMyAzMiAxNCA0MiAyIDc2IC04IDIyXG4gICAgICAgIC0yNyA0OSAtNDIgNjAgLTI4IDIxIC0zNiAyMSAtNjY1IDIzIC00MDEgMSAtNjQ3IC0yIC02NjQgLTh6XCIvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcblxuICAgIGNvbnN0IFBlcm1pc3Npb25NZW51ID0gKCk9PihcbiAgICAgICAgPHN2ZyBoZWlnaHQ9XCIxZW1cIiB3aWR0aD1cIjFlbVwiIGNsYXNzTmFtZT0nYW50LW1lbnUtaXRlbS1pY29uJyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDEwMDAgMTAwMFwiIHhtbFNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgIDxnPjxwYXRoIGQ9XCJNMjExLjEsOTkwbC04OS42LTEuNGMtMTUuNSwwLTIyLjItMTMuNy0yOC41LTM4LjRsLTEuMywwLjJsLTMtMTcuMWMtMC4zLTEuNi0wLjUtMy0wLjctNC40bC0wLjMtMS43bDAuMSwwbC03LjUtNDIuNmMtMy44LTIyLDIuOS01Mi40LDE1LjUtNzAuOEwzNTYuMyw0MzhjLTE3LjMtMzcuMi0zMS04My43LTM2LjEtMTEzLjFjLTI5LTE2Ni40LDExMi40LTI4NC4xLDI2MC4xLTMxMC41YzE2LjctMywzMy43LTQuNSw1MC40LTQuNUM3NzEuMSwxMCw4OTAuNiwxMTEuNCw5MTUsMjUxLjFjMjYuMSwxNDkuMi0zNS4xLDMyMy42LTE5OS45LDM1M2MtMjEuNiwzLjktNTAsNi4xLTc3LjksNi4xaDBjLTE3LjcsMC0zNC40LTAuOS00OS0yLjdMNDY1LjUsODAwLjFsLTkyLjItNy4yTDI3My4xLDk0OS40Yy0xMi4yLDE5LjEtMzguMSwzNi40LTYwLjIsNDAuM0wyMTEuMSw5OTB6IE0xMzIuNyw5NTEuMWw3NS4yLDEuMWMxMS41LTIuNywyNy4zLTEzLjUsMzMuNC0yMy4ybDEwNi44LTE2Ni43bDYuMi03LjdsMTAuNy0wLjNsODAuOCw2LjNsMTIzLjgtMTk0LjJsMTIuMywyLjFjMTUuMSwyLjYsMzQuMiw0LDU1LjEsNGgwYzI1LjQsMCw1Mi0yLjEsNzEuMy01LjVDODQ5LjMsNTQyLDkwMC44LDM4OC45LDg3Ny44LDI1Ny42Qzg1Ni42LDEzNiw3NTIuNyw0Ny43LDYzMC43LDQ3LjdjLTE0LjYsMC0yOS4zLDEuMy00My44LDMuOUM0NTcsNzQuNywzMzIuNCwxNzYuMSwzNTcuMywzMTguNWM1LjEsMjkuNCwxOS43LDc3LjUsMzcuNiwxMTIuN2w1LjEsMTBsLTI3My4xLDM5NGMtNywxMC4yLTExLjUsMzAuNi05LjQsNDIuOWw3LjQsNDIuMmMwLjEsMC42LDAuMywxLjMsMC41LDJDMTI4LjYsOTM3LjMsMTMxLDk0Ni4xLDEzMi43LDk1MS4xeiBNNzIyLDM3OC4yYy0yOSwwLTU2LjItMTkuOC04Ny42LTQyLjhjLTUuOS00LjMtMTItOC44LTE4LjMtMTMuM2MtNi4zLTQuNC0xMi41LTguNy0xOC41LTEyLjhDNTYyLDI4NSw1MzEuMywyNjQsNTI1LjMsMjMxLjNjLTMuNS0xOC44LDItMzguMywxNi42LTU5LjRjMjcuNC0zOS41LDcyLjMtNjMuMSwxMjAuMS02My4xYzMwLjEsMCw1OS4yLDkuMyw4My45LDI2LjhjNjYuMSw0Ni43LDgyLjIsMTM4LjksMzUuOSwyMDUuNkM3NjQuNSwzNjYuMSw3NDQuOSwzNzguMiw3MjIsMzc4LjJ6IE02NjIsMTQ2LjVjLTM1LjQsMC02OC44LDE3LjUtODkuMSw0Ni45Yy04LjYsMTIuNS0xMi4xLDIyLjYtMTAuNSwzMS4xYzMuMiwxNy4zLDI3LjksMzQuMiw1Ni41LDUzLjhjNi4yLDQuMiwxMi42LDguNiwxOSwxMy4yYzYuNSw0LjYsMTIuOCw5LjIsMTguOCwxMy42YzI1LDE4LjMsNDguNiwzNS41LDY1LjMsMzUuNWM2LjIsMCwxNS45LTIuMiwyOC45LTIwLjhjMzQuNS00OS43LDIyLjUtMTE4LjUtMjYuNy0xNTMuM0M3MDUuNywxNTMuNCw2ODQuMywxNDYuNSw2NjIsMTQ2LjV6XCIvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgKVxuXG4gICAgY29uc3QgUGVybWlzc2lvblBvc2l0aW9uID0gKCk9PihcbiAgICAgICAgPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDEwMDAgMTAwMFwiIHhtbFNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgPGc+PHBhdGggZD1cIk02MDEuOCw0MjMuMmM0MC44LTE3LjIsODMuOC0yNiwxMjguNC0yNmM0LjQsMCw4LjgsMC4yLDEzLjIsMC4yYzIwLjktNTIuOCwyNi4yLTExNS4yLDE1LjctMTc1LjlDNzM0LjksODIuMyw2MDMuNi0xMC43LDQ2NS42LDEzLjhDMzI3LjcsMzguMywyMTEuNCwxNDUuNSwyMzUuOSwyODQuNmM1LjIsMzAuMSwxOS43LDc2LjksMzYuOSwxMTAuOEwyMi41LDc1Ni42Yy05LjIsMTMuMi0xNC41LDM3LjEtMTEuNyw1My40bDEwLjksNjEuOGMtMTAuMy01OS41LDIuOSwyMS40LDEwLjksMjEuMmw4Mi41LDEuMWMxNS45LTIuOSwzNS44LTE2LjMsNDQuNi0yOS45bDk5LTE1NC44bDEtMWw4Ni41LDYuOWwxMTUuNi0xODEuM2MwLjQsMCwwLjgsMC4yLDEuMSwwLjJjMTAuMy0xNC4yLDIxLjYtMjcuNiwzNC4zLTQwLjJDNTI3LjIsNDYzLjYsNTYyLjYsNDM5LjgsNjAxLjgsNDIzLjJ6IE03Ni42LDc5NC43bC0xMi4zLDUuMmwxLjMtMTMuNGwyMzkuOC0zNDguMmwxNC40LDEzLjRMNzYuNiw3OTQuN3ogTTQ0MS4xLDE1NC4xYzM3LjktNTQuNiwxMTIuNS02OC4xLDE2Ni41LTI5LjdjNTQuMiwzOC41LDY3LjQsMTEzLjksMjkuNSwxNjguNGMtMzcuOSw1NC41LTc2LjYsMTYuMS0xMzAuNy0yMi4yQzQ1Mi4zLDIzMi4yLDQwMy4yLDIwOC44LDQ0MS4xLDE1NC4xelwiLz48cGF0aCBkPVwiTTcyNyw0NjQuMmMtMTQ1LjMsMC0yNjMsMTE3LjctMjYzLDI2M3MxMTcuNywyNjMsMjYzLDI2M2MxNDUuMywwLDI2My0xMTcuNywyNjMtMjYzQzk5MCw1ODEuOSw4NzIuMyw0NjQuMiw3MjcsNDY0LjJ6IE04NzksODM1LjFjMCwzOS4yLTc1LjIsNDguMi0xNDUuOCw0OC4yYy03MC42LDAtMTQ2LjgtOS0xNDYuOC00OC4ydi0xMC45YzAtMjguOSw1Mi4xLTU4LjIsOTYuMy03NC4xYzMuMy0xLjEsMTguNi05LjYsMTAtMzJjLTIyLTIyLjQtMzguNS01OC44LTM4LjUtOTQuNmMwLTU0LjcsMzYuMi04My41LDc4LjctODMuNWM0Mi4zLDAsNzguOSwyOC43LDc4LjksODMuNWMwLDM1LjYtMTYuNyw3MS44LTM4LjUsOTQuNGgwLjJjLTguNCwyNS41LDUsMzEuNiw3LjEsMzIuMmM0Ni41LDE1LjMsOTguOCw0NC40LDk4LjgsNzQuMUw4NzksODM1LjFMODc5LDgzNS4xelwiLz48L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcblxuICAgIGNvbnN0IFBlcm1pc3Npb25EZXBQb3MgPSAoKT0+KFxuICAgICAgICA8c3ZnIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNvbG9yPVwiY3VycmVudENvbG9yXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMTAwMCAxMDAwXCIgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICAgICAgPGc+PHBhdGggZD1cIk00NDYuMSwxNTQuOWMzOC41LTU0LjYsMTE0LjEtNjguNiwxNjguNy0zMC4xYzU0LjYsMzkuMiw2OCwxMTQuNywyOS40LDE2OS40Yy0zNy44LDU1LjMtNzcsMTYuMS0xMzIuNC0yMi40QzQ1Ny4yLDIzMy4yLDQwNy41LDIxMC4xLDQ0Ni4xLDE1NC45eiBNNzcuMiw3OTguOGwtMTEuOSw0LjlsMS41LTEzLjNsMjQyLjEtMzUwbDE0LjcsMTMuM0w3Ny4yLDc5OC44eiBNNDY4LjUsNTM2LjljMTAuNS0xMy45LDIxLjctMjcuMiwzNC4zLTQwLjVjMzAuOC0zMC4yLDY2LjUtNTQuNiwxMDUuNy03MC44YzQxLjMtMTcuNSw4NS40LTI2LjUsMTMwLjItMjYuNWgxMy4zYzIxLjEtNTIuNCwyNi43LTExNS41LDE2LjItMTc2LjRDNzQzLjYsODIuOCw2MTAuNi0xMSw0NzAuNiwxNC4yQzMzMS4zLDM4LjcsMjEzLjgsMTQ2LjUsMjM4LjEsMjg2LjRjNS43LDMwLjEsMjAuMyw3NywzNy44LDExMS4zTDIyLjYsNzYwLjRjLTkuMSwxMy4zLTE0LjcsMzcuNy0xMS45LDUzLjhMMjIsODc2LjVjLTIuOS0xNi4xLTQuMi0yMi4zLTQuMi0yMi4zYzAuNywwLDksNDMuMywxNS40LDQzLjNsODMuMywxLjVjMTYuMS0yLjgsMzYuNC0xNi4xLDQ0LjgtMzAuMmwxMDAtMTU1LjNsMS41LTEuNWw4Ny40LDcuMWwxMTYuOS0xODIuMUg0NjguNXogTTgxMy42LDc2NC40Yy0yMC40LDQ3LjctNzUuNiw3MC0xMjMuOSw1MC41Yy00OC40LTIwLjMtNzAuNy03NS42LTUwLjQtMTIzLjNjMTkuNi00OC4zLDc1LjYtNzAuNywxMjMuMi01MC40QzgxMC43LDY2MS42LDgzMy44LDcxNi4yLDgxMy42LDc2NC40eiBNOTIwLjYsNjk5LjNsNjkuNC00My4zbC0yNS45LTYyLjNsLTc5LjIsMTguOGMtMTEuMi0xNi4xLTI1LjItMjkuNC00MS4yLTQxLjNsMTguMi03OWwtNjMuMS0yNmwtNDIuNiw2OGMtMTkuNi0yLjgtMzkuMi0yLjgtNTguMSwwbC00Mi44LTY4LjZsLTYyLjksMjUuMmwxNy41LDc5LjJjLTE2LjEsMTEuMi0zMC4yLDI1LjEtNDIsNDAuNmwtNzguNC0xOC4ybC0yNi42LDYyLjNsNjcuOSw0My40Yy0yLjcsMTkuNS0yLjcsMzkuMiwwLDU4LjFsLTY4LjYsNDIuN2wyNS45LDYyLjNsNzkuMi0xNy41YzExLjIsMTUuNCwyNS4yLDI5LjQsNDEuMiw0MS4ybC0xOC44LDc4LjVsNjIuOSwyNS45bDQ0LjItNjhjMTkuNiwyLjksMzkuMiwyLjksNTguMSwwbDQzLjMsNjguN2w2My0yNS45TDg0Myw4ODQuOWMxNS40LTExLjIsMjguNy0yNC40LDQwLjYtNDAuNmw3OS43LDE4LjJsMjYuNi02Mi4zbC02OS40LTQyLjdDOTIzLjQsNzM3LjksOTIzLjQsNzE5LDkyMC42LDY5OS4zelwiLz48L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIClcblxuICAgIGNvbnN0IFBlcm1pc3Npb25NYW5hZ2VtZW50ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gPHN2ZyBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjb2xvcj1cImN1cnJlbnRDb2xvclwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIFxuICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCAxMDAwIDEwMDBcIiB4bWxTcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgIDxnPjxwYXRoIGQ9XCJNOTY4LjksNDgxLjRjLTEuMywxMC41LTIuOSwyMS40LTUsMzEuOGwtNS4yLDI0LjhsLTI1LjMtMS4xYy0zLjMtMC4xLTYuNi0wLjItMTAtMC4yYy03Mi4yLDAtMTQwLjYsMzMuNi0xOTMuNiw4MWMtNC4zLDMuOC04LjksOS45LTEyLjQsMTQuNWMtNi45LDguOS0xMy41LDE4LjItMTkuOSwyNy40Yy0xNy40LDI0LjktMzQuMiw1MC4zLTUwLjcsNzUuOGMtMTYuNywyNS43LTMzLjEsNTEuNi00OS4zLDc3LjZsLTkuNSwxNS4zbC04MC42LTUuNUw0MDUuMyw5NzMuMmwtNy41LDMuNUMzNzMuNyw5ODcuOSwzNDAsOTkwLDMxMy42LDk5MGMtOS45LDAtMjAtMC4yLTI5LjktMWwtMTcuNy0xLjRsLTcuMy0xNi4yYy0xNC4zLTMxLjgtMTkuMi03MC44LTIyLjMtMTA1LjJjLTAuMi0xLjktMC4zLTMuOS0wLjUtNS44Yy0wLjQtMi4zLTAuNi00LjctMC40LTdsLTIzLjQsMzQuNWwtOS45LDQuNmMtMjUuNiwxMi02MC4zLDE0LjItODguMiwxNC4yYy0xMC4xLDAtMjAuNS0wLjItMzAuNi0xbC0yMy4zLTEuOGwtOS42LTIxLjNjLTE0LjctMzIuOS0xOS45LTcyLjctMjMuMS0xMDguM2MtMC4yLTEuNy0wLjMtMy41LTAuNS01LjNjLTMtMTcuNyw2LjYtMzAuNiwxNS44LTQ0LjdjOS0xMy44LDE4LjItMjcuNSwyNy40LTQxLjFjMjcuMy00MC4zLDU1LTgwLjQsODIuNy0xMjAuNGMzNS42LTUxLjQsNzEuNC0xMDIuNywxMDcuMi0xNTRjLTIwLjYtNDYuMy0zMi40LTk3LjEtMjktMTQ4YzEuNC0yMC43LDYtNDcuNywxNS02Ni45YzMxLjEtNjYuMiw3OC40LTExOS42LDE0NC40LTE1MkM0MzQsMjAuNiw0ODIuNywxMCw1MzEsMTBjMTMuMSwwLDI2LjksMC43LDM5LjksMi44YzY2LDEwLjksMTIxLjMsNDIuMywxNTkuMiw5Ny44YzAuNCwwLjYsMC44LDEuMSwxLjEsMS43YzEyLjQsMCwyNS40LDAuNywzNy42LDIuN2M2My40LDEwLjUsMTE2LjQsNDAuNCwxNTIuOSw5My44YzM5LjMsNTcuNCw1MS42LDEyOS43LDUxLjgsMTk4LjFDOTczLjYsNDMxLjgsOTcyLDQ1Ni44LDk2OC45LDQ4MS40eiBNNTYxLjEsNzEuOGMtMi45LTAuNS0xMy43LTItMzAuMS0yYy01OS45LDAtMTY5LjYsMTkuNC0yMzAuNywxNDkuNmMtMC4zLDAuNy04LjQsMTkuMi05LjcsNTAuNWMtMS4yLDI5LjMsMy42LDc2LjMsMzMuMiwxMzMuM2w1LjcsMTAuOWwtNy4xLDEwLjFDMjM5LjMsNTQyLjgsMTA2LjksNzMzLjQsODYuOSw3NjYuNGMwLjEsMC44LDAuMSwxLjYsMC4yLDIuNmMxLjQsMTUuOSw0LjUsNTAuNCwxMy43LDc3LjhjMy44LDAuMSw4LjQsMC4yLDEzLjMsMC4yYzI1LjIsMCw0NS41LTIuNCw1OC4yLTYuN2wxMTAuMi0xNjIuM2w2My4yLDQuM2M0LjktNy4xLDkuOC0xNC4xLDE0LjctMjEuMmMzNi42LTUyLjksNzMuNC0xMDUuNywxMTAuMy0xNTguNGMtMjEuNC00Ni4yLTMzLjgtOTcuMi0zMC40LTE0OC4zYzEtMTUsMy40LTMwLjEsNy40LTQ0LjVjLTMuNC0yLjgtNi45LTUuNS0xMC4zLTguM2MtMjMuMS0xOC41LTU1LjEtNDEuNi01Ny43LTczLjZjLTEuMi0xNC44LDMuOC0yOC44LDEzLjgtMzkuOGMzOC4yLTQyLjUsOTQuMS03NC4yLDE1Mi4zLTc0LjJjMjUuNiwwLDUwLjQsNi4yLDcxLjgsMTkuNGMxNC01LjQsMjguNC05LjgsNDMuMS0xMy4xQzYzNSw5NC43LDYwMS43LDc4LjUsNTYxLjEsNzEuOHogTTQ3NC4xLDI1NC4zYzE5LjMtMzEuMiw0My01OC41LDcxLjctODAuN2MtMzUuOCwwLTc0LjcsMTkuMS0xMDQuOSw1MS4yQzQ0Ni4zLDIzMiw0NjEuOSwyNDQuNiw0NzQuMSwyNTQuM3ogTTg4MC4yLDIzNy4xYy0yNy0zOS41LTY3LjMtNjMuOS0xMTkuNS03Mi41Yy0yLjktMC41LTEzLjctMi0zMC4xLTJjLTU5LjksMC0xNjkuNiwxOS40LTIzMC43LDE0OS42Yy0wLjMsMC43LTguNCwxOS4yLTkuNyw1MC41Yy0xLjIsMjkuMywzLjYsNzYuMywzMy4yLDEzMy4zbDUuNywxMC45bC03LjEsMTAuMWMtODMuMSwxMTguNi0yMTUuNSwzMDkuMi0yMzUuNSwzNDIuMmMwLjEsMC44LDAuMSwxLjYsMC4yLDIuNmMxLjQsMTUuOSw0LjUsNTAuNCwxMy43LDc3LjhjMy44LDAuMSw4LjQsMC4yLDEzLjMsMC4yYzI1LjIsMCw0NS41LTIuNCw1OC4yLTYuN2wxMTAuMi0xNjIuM2w3OS4zLDUuNGMyNS41LTQwLjgsMTA4LjYtMTcyLjMsMTM1LTE5NS44YzM4LjQtMzQuNCwxMTcuNy05MS41LDIyMS4xLTkzLjdDOTI0LDQ0Mi40LDkzNS44LDMxOC4yLDg4MC4yLDIzNy4xeiBNODEyLjIsNDc3LjJjLTguNyw5LjctMjAuMiwxNS4zLTMzLjMsMTUuM2MtMi40LDAtNC44LTAuMi03LjItMC42Yy0xMi0xLjktMjIuMy04LjMtMzEuNi0xNS45Yy0xMC44LTguOC0yMC43LTE5LjMtMzAuNC0yOS4zYy0xMC43LTExLjEtMjEuNC0yMi4yLTMyLjktMzIuNWMtMTEtOS44LTIyLjQtMTkuMS0zMy45LTI4LjNjLTExLjYtOS4zLTIzLjgtMTguOC0zNC4xLTI5LjRjLTguNy04LjktMTYuNC0xOS4zLTE5LjEtMzEuN2MtMC40LTEuOS0wLjctMy45LTAuOS01LjljLTEtMTIuMiwzLjItMjMuNiwxMS40LTMyLjdjMzYuMy00MC40LDg5LjctNzEsMTQ1LjItNzFjMzAuNywwLDYwLjEsOS41LDgzLjEsMzAuMmMzMS4yLDI4LDQyLjgsNzAuMiwzOS4xLDExMUM4NjMuNCw0MDEuNSw4NDIuMSw0NDQsODEyLjIsNDc3LjJ6IE03OTQuOCwyODNjLTEyLjYtMTEuNC0yOS44LTE3LjQtNDkuNi0xNy40Yy0zNS44LDAtNzQuNywxOS4xLTEwNC45LDUxLjJjNS42LDcuMywyMS43LDIwLjIsMzMuOSwzMGMxMS4xLDguOSwyMy42LDE4LjksMzYuMSwzMC4xYzEzLjMsMTIsMjUuMSwyNC4yLDM1LjUsMzVjMTAuMywxMC42LDIzLjgsMjQuNywzMS4yLDI5LjJjMjMuMy0yNi44LDM3LjYtNTguMyw0MC40LTg5QzgyMC4xLDMyMyw4MTIuMSwyOTguNSw3OTQuOCwyODN6IE01NjIuNyw1OTMuNEw1NjIuNyw1OTMuNEw0MTMuOCw4MDJjLTAuMSwwLjEtMC4xLDAuMi0wLjIsMC4zYy05LjgsMTMuNS0yOSwxOS4zLTQzLjMsOS4yYy0xNC4zLTEwLjItMTUuMS0zMC4zLTUuMy00NGwxNDkuMi0yMDguOWM5LjctMTMuNiwyOS4xLTE5LjUsNDMuNC05LjNjMTQuMywxMC4yLDE1LjEsMzAuMyw1LjMsNDRMNTYyLjcsNTkzLjR6IE0zODIuOSw1MDguOWwtMC4zLDAuNGwwLDAuMUwyMzMuOCw3MTcuOGMtMC4xLDAuMS0wLjEsMC4yLTAuMiwwLjNjLTEyLjksMTcuOC0zOCwyNC42LTU2LjYsMTEuM2MtMTguNy0xMy4zLTIwLjQtMzkuMy03LjUtNTcuNGwxNDkuMi0yMDguOWMxMi44LTE3LjksMzguMS0yNC44LDU2LjctMTEuNUMzOTQsNDY0LjksMzk1LjgsNDkwLjksMzgyLjksNTA4Ljl6XCIvPjwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbXMgPSBbXG4gICAgICAgIGdldEl0ZW0oXCJOaMOibiBz4buxXCIsIFwic3ViLW1lbnUtMVwiLCA8TWRQZW9wbGVPdXRsaW5lIC8+LCBbXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Byb2ZpbGVgfT5I4buTIHPGoTwvTGluaz4sIFwiMVwiLCA8QnNGaWxlRWFybWFya0ZpbGwgLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9kZXBhcnRtZW50YH0+QuG7mSBwaOG6rW4gY8O0bmcgdMOhYzwvTGluaz4sIFwiMlwiLCA8RmNEZXBhcnRtZW50IC8+KSxcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcG9zaXRpb25gfT5DaOG7qWMgZGFuaCwgY2jhu6ljIHbhu6U8L0xpbms+LCBcIjNcIiwgPFBvc2l0aW9uSXRlbSAvPiksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L215cHJvZmlsZS8ke2p3dF9kZWNvZGUoVE9LRU4pPy5pZH1gfT5UaMO0bmcgdGluIGPDoSBuaMOibjwvTGluaz4sIFwiNFwiLCA8SW1Qcm9maWxlIC8+KSxcbiAgICAgICAgXSksXG4gICAgICAgIGdldEl0ZW0oXCJRdXnhu4FuXCIsIFwic3ViLW1lbnUtMlwiLCA8UGVybWlzc2lvbk1lbnUgLz4sIFtcbiAgICAgICAgICAgIGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9tYW5hZ2VgfT5RdeG6o24gbMO9IHF1eeG7gW48L0xpbms+LCBcIjVcIiwgPFBlcm1pc3Npb25NYW5hZ2VtZW50IC8+ICksXG4gICAgICAgICAgICBnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vcG9zaXRpb25gfT5RdXnhu4FuIGNo4bupYyB24bulPC9MaW5rPiwgXCI2XCIsIDxQZXJtaXNzaW9uUG9zaXRpb24gLz4pLFxuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL2RlcGFydG1lbnQtcG9zaXRpb25gfT5RdXnhu4FuIFBCIC0gQ1Y8L0xpbms+LCBcIjdcIiwgPFBlcm1pc3Npb25EZXBQb3MgLz4pLFxuICAgICAgICBdKVxuICAgIF07XG5cbiAgICBjb25zdCBpdGVtc191c2VyID0gW1xuICAgICAgICBnZXRJdGVtKFwiTmjDom4gc+G7sVwiLCBcInN1Yi1tZW51LTFcIiwgPE1kUGVvcGxlT3V0bGluZSAvPiwgW1xuICAgICAgICAgICAgZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9teXByb2ZpbGUvJHtqd3RfZGVjb2RlKFRPS0VOKT8uaWR9YH0+VGjDtG5nIHRpbiBjw6EgbmjDom48L0xpbms+LCBcIjRcIiwgPEltUHJvZmlsZSAvPiksXG4gICAgICAgIF0pXG4gICAgXTtcblxuICAgIGNvbnN0IHJlbmRlclN1Yk1lbnUgID0gKCk9PntcbiAgICAgICAgbGV0IHN1Yk1lbnUgPSBbXTtcbiAgICAgICAgbGV0IG1lbnVfcHJvZmlsZSA9IFtnZXRJdGVtKFwiTmjDom4gc+G7sVwiLCBcInN1Yi1tZW51LTFcIiwgPE1kUGVvcGxlT3V0bGluZSAvPiwgc3ViTWVudSldO1xuICAgICAgICBsZXQgc3ViTWVudV9QZXIgPSBbXTtcbiAgICAgICAgbGV0IG1lbnVfcGVybWlzc2lvbiA9IFtnZXRJdGVtKFwiUXV54buBblwiLCBcInN1Yi1tZW51LTJcIiwgPFBlcm1pc3Npb25NZW51IC8+LCBzdWJNZW51X1BlcildO1xuICAgICAgICBpZih1c2VyUGVybWlzc2lvbi5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGlmKHVyaSA9PT0gXCJwcm9maWxlLXNlcnZpY2VcIil7XG4gICAgICAgICAgICAgICAgaWYodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBo4buTIHPGoVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnUucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Byb2ZpbGVgfT5I4buTIHPGoTwvTGluaz4sIFwiMVwiLCA8QnNGaWxlRWFybWFya0ZpbGwgLz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIHBow7JuZyBiYW5cIikpe1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9kZXBhcnRtZW50YH0+QuG7mSBwaOG6rW4gY8O0bmcgdMOhYzwvTGluaz4sIFwiMlwiLCA8RmNEZXBhcnRtZW50IC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBjaOG7qWMgduG7pVwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnUucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Bvc2l0aW9uYH0+Q2jhu6ljIGRhbmgsIGNo4bupYyB24bulPC9MaW5rPiwgXCIzXCIsIDxQb3NpdGlvbkl0ZW0gLz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIHF1eeG7gW5cIikpe1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51X1Blci5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvcGVybWlzc2lvbi9tYW5hZ2VgfT5RdeG6o24gbMO9IHF1eeG7gW48L0xpbms+LCBcIjVcIiwgPFBlcm1pc3Npb25NYW5hZ2VtZW50IC8+ICkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggY2jhu6ljIHZ1IMSRw6MgxJHGsOG7o2MgZ8OhbiBxdXnhu4FuXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vcG9zaXRpb25gfT5RdXnhu4FuIGNo4bupYyB24bulPC9MaW5rPiwgXCI2XCIsIDxQZXJtaXNzaW9uUG9zaXRpb24gLz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB24bulIHbDoCBwaMOybmcgYmFuIMSRw6MgxJHGsOG7o2MgZ8OhbiBxdXnhu4FuXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vZGVwYXJ0bWVudC1wb3NpdGlvbmB9PlF1eeG7gW4gUEIgLSBDVjwvTGluaz4sIFwiN1wiLCA8UGVybWlzc2lvbkRlcFBvcyAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN1Yk1lbnUucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L215cHJvZmlsZS8ke2p3dF9kZWNvZGUoVE9LRU4pPy5pZH1gfT5UaMO0bmcgdGluIGPDoSBuaMOibjwvTGluaz4sIFwiNFwiLCA8SW1Qcm9maWxlIC8+KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVudV9wcm9maWxlLmNvbmNhdChtZW51X3Blcm1pc3Npb24pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggaOG7kyBzxqFcIikpe1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wcm9maWxlYH0+SOG7kyBzxqE8L0xpbms+LCBcIjFcIiwgPEJzRmlsZUVhcm1hcmtGaWxsIC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBwaMOybmcgYmFuXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudS5wdXNoKGdldEl0ZW0oPExpbmsgdG89e2Ake3VyaX0vaHIvZGVwYXJ0bWVudGB9PkLhu5kgcGjhuq1uIGPDtG5nIHTDoWM8L0xpbms+LCBcIjJcIiwgPEZjRGVwYXJ0bWVudCAvPikpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKHVzZXJQZXJtaXNzaW9uLmluY2x1ZGVzKFwieGVtIGRhbmggc8OhY2ggY2jhu6ljIHbhu6VcIikpe1xuICAgICAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wb3NpdGlvbmB9PkNo4bupYyBkYW5oLCBjaOG7qWMgduG7pTwvTGluaz4sIFwiM1wiLCA8UG9zaXRpb25JdGVtIC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBxdXnhu4FuXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgc3ViTWVudV9QZXIucHVzaChnZXRJdGVtKDxMaW5rIHRvPXtgJHt1cml9L2hyL3Blcm1pc3Npb24vbWFuYWdlYH0+UXXhuqNuIGzDvSBxdXnhu4FuPC9MaW5rPiwgXCI1XCIsIDxQZXJtaXNzaW9uTWFuYWdlbWVudCAvPiApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZih1c2VyUGVybWlzc2lvbi5pbmNsdWRlcyhcInhlbSBkYW5oIHPDoWNoIGNo4bupYyB2dSDEkcOjIMSRxrDhu6NjIGfDoW4gcXV54buBblwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnVfUGVyLnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL3Bvc2l0aW9uYH0+UXV54buBbiBjaOG7qWMgduG7pTwvTGluaz4sIFwiNlwiLCA8UGVybWlzc2lvblBvc2l0aW9uIC8+KSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYodXNlclBlcm1pc3Npb24uaW5jbHVkZXMoXCJ4ZW0gZGFuaCBzw6FjaCBjaOG7qWMgduG7pSB2w6AgcGjDsm5nIGJhbiDEkcOjIMSRxrDhu6NjIGfDoW4gcXV54buBblwiKSl7XG4gICAgICAgICAgICAgICAgICAgIHN1Yk1lbnVfUGVyLnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9oci9wZXJtaXNzaW9uL2RlcGFydG1lbnQtcG9zaXRpb25gfT5RdXnhu4FuIFBCIC0gQ1Y8L0xpbms+LCBcIjdcIiwgPFBlcm1pc3Npb25EZXBQb3MgLz4pKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdWJNZW51LnB1c2goZ2V0SXRlbSg8TGluayB0bz17YCR7dXJpfS9teXByb2ZpbGUvJHtqd3RfZGVjb2RlKFRPS0VOKT8uaWR9YH0+VGjDtG5nIHRpbiBjw6EgbmjDom48L0xpbms+LCBcIjRcIiwgPEltUHJvZmlsZSAvPikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhcl9TdWJNZW51X19YWmViNlwiPlxuICAgICAgICAgICAgICAgICAgICA8TWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmYXVsdE9wZW5LZXlzPXtbYHN1YjFgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU9J2lubGluZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXttZW51X3Byb2ZpbGUuY29uY2F0KG1lbnVfcGVybWlzc2lvbil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYodXJpID09PSBcInByb2ZpbGUtc2VydmljZVwiKXtcbiAgICAgICAgLy8gICAgIGxldCBkZWNvZGVkID0gand0X2RlY29kZShUT0tFTik7XG4gICAgICAgIC8vICAgICBpZihkZWNvZGVkLmlkID09PSAxKXtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBpdGVtc191c2VyO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgbGV0IGRlY29kZWQgPSBqd3RfZGVjb2RlKFRPS0VOKTtcbiAgICAgICAgLy8gICAgIGlmKGRlY29kZWQuaWQgPT09IDEpe1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJfU3ViTWVudV9fWFplYjZcIj5cbiAgICAgICAgLy8gICAgICAgICA8TWVudVxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBkZWZhdWx0T3BlbktleXM9e1tgc3ViMWBdfVxuICAgICAgICAvLyAgICAgICAgICAgICBtb2RlPSdpbmxpbmUnXG4gICAgICAgIC8vICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cbiAgICAgICAgLy8gICAgICAgICAvPlxuICAgICAgICAvLyAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyX1N1Yk1lbnVfX1haZWI2XCI+XG4gICAgICAgIC8vICAgICA8TWVudVxuICAgICAgICAvLyAgICAgICAgIC8vIGRlZmF1bHRPcGVuS2V5cz17W2BzdWIxYF19XG4gICAgICAgIC8vICAgICAgICAgbW9kZT0naW5saW5lJ1xuICAgICAgICAvLyAgICAgICAgIGl0ZW1zPXtpdGVtc191c2VyfVxuICAgICAgICAvLyAgICAgLz5cbiAgICAgICAgLy8gICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICA8PntyZW5kZXJTdWJNZW51KCl9PC8+XG4gICAgKVxufVxuIiwiaW1wb3J0IHsgY2hlY2tNaWNyb0ZlLCBnZXRUb2tlbkluQ29va2llIH0gZnJvbSBcIi4uL3VsdGlscy9oZWxwZXJcIjtcblxuZXhwb3J0IGNvbnN0IFRPS0VOID0gZ2V0VG9rZW5JbkNvb2tpZSgpO1xuXG5leHBvcnQgY29uc3QgbG9jYWwgPSBjaGVja01pY3JvRmUoKSA9PT0gdHJ1ZSA/IFwiaHR0cHM6Ly9wcm9maWxlc2VydmljZS50dW9pdHJlLnZuXCIgOiBcIlwiXG5cbi8vIFJlZ2V4XG5leHBvcnQgY29uc3QgcmVnZXhFbWFpbCA9IC9eW1xcdy1cXC5dK0AoW1xcdy1dK1xcLikrW1xcdy1dezIsNH0kLztcbmV4cG9ydCBjb25zdCByZWdleFBob25lID0gLyg4NFszfDV8N3w4fDldfDBbM3w1fDd8OHw5XSkrKFswLTldezh9fFswLTldezl9KVxcYi87XG5cbmV4cG9ydCBjb25zdCBxdWFUcmluaExWSFQgPSBcIlF1w6EgdHLDrG5oIGzDoG0gdmnhu4djIHbDoCBo4buNYyB04bqtcFwiO1xuZXhwb3J0IGNvbnN0IHRoYW1HaWFUb0NodWNDVCA9IFwiVGhhbSBnaWEgY8OhYyB04buVIGNo4bupYyBjaMOtbmggdHLhu4ssIGPDoWMgaMO04buLIG5naOG7gSBuZ2hp4buHcFwiO1xuZXhwb3J0IGNvbnN0IGRhb1RhbyA9IFwixJDDoG8gdOG6oW9cIjtcbmV4cG9ydCBjb25zdCBib2lEdW9uZyA9IFwiQuG7k2kgZMaw4buhbmdcIjtcbmV4cG9ydCBjb25zdCBraGVuVGh1b25nID0gXCJLaGVuIHRoxrDhu59uZ1wiO1xuZXhwb3J0IGNvbnN0IGt5THVhdCA9IFwiS+G7tyBsdeG6rXRcIjtcbmV4cG9ydCBjb25zdCBsaWNoU3VCYW5UaGFuID0gXCJM4buLY2ggc+G7rSBi4bqjbiB0aMOiblwiO1xuZXhwb3J0IGNvbnN0IHF1YW5IZUdpYURpbmggPSBcIlF1YW4gaOG7hyBnaWEgxJHDrG5oXCI7XG5leHBvcnQgY29uc3Qgbm9pU2luaF9TdGVwMSA9IFwiTsahaSBzaW5oXCJcbmV4cG9ydCBjb25zdCBxdWVRdWFuX1N0ZXAxID0gXCJRdcOqIHF1w6FuXCJcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9JRCA9IFwiR0VUX1BST0ZJTEVfQllfSURcIjtcbmV4cG9ydCBjb25zdCBHRVRfUFJPVklOQ0VTID0gXCJHRVRfUFJPVklOQ0VTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRSA9IFwiR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfSE9NRV9UT1dOID0gXCJHRVRfRElTVFJJQ1RTX0hPTUVfVE9XTlwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfQUREUkVTUyA9IFwiR0VUX0RJU1RSSUNUU19BRERSRVNTXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19IT0tIQVUgPSBcIkdFVF9ESVNUUklDVFNfSE9LSEFVXCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQOCA9IFwiR0VUX0RJU1RSSUNUU19TVEVQOFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ESVNUUklDVFNfU1RFUDcgPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBHRVRfRElTVFJJQ1RTX1NURVA5ID0gXCJHRVRfRElTVFJJQ1RTX1NURVA5XCI7XG5leHBvcnQgY29uc3QgR0VUX0RJU1RSSUNUU19TVEVQN19DT04gPSBcIkdFVF9ESVNUUklDVFNfU1RFUDdfQ09OXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0ZJTEUgPSBcIlVQREFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BST0ZJTEUgPSBcIkNSRUFURV9QUk9GSUxFXCI7XG5leHBvcnQgY29uc3QgT05MWV9DUkVBVEVfUFJPRklMRSA9IFwiT05MWV9DUkVBVEVfUFJPRklMRVwiO1xuZXhwb3J0IGNvbnN0IEdFVF9VU0VSX0xJU1QgPSBcIkdFVF9VU0VSX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBHRVRfVVNFUl9JTkZPUk1BVElPTiA9IFwiR0VUX1VTRVJfSU5GT1JNQVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfREVQX1BPUyA9IFwiR0VUX0RFUEFSVE1FTlRfUE9TSVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfUEFSVCA9IFwiR0VUX1BBUlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfQVZBVEFSID0gXCJHRVRfQVZBVEFSXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX0RFUF9QT1MgPSBcIkRFTEVURV9ERVBfUE9TXCI7XG5leHBvcnQgY29uc3QgR0VUX0RFUEFSVE1FTlRfTElTVCA9IFwiR0VUX0RFUEFSVE1FTlRfTElTVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9ERVBBUlRNRU5UID0gXCJVUERBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBBUlRNRU5UX0lORk9SID0gXCJHRVRfREVQQVJUTUVOVF9JTkZPUlwiO1xuZXhwb3J0IGNvbnN0IENSRUFURV9ERVBBUlRNRU5UID0gXCJDUkVBVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9ERVBBUlRNRU5UID0gXCJERUxFVEVfREVQQVJUTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NJVElPTlNfTUFOQV9MSVNUID0gXCJHRVRfUE9TSVRJT05TX01BTkFfTElTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QT1NJVElPTl9UWVBFX0xJU1QgPSBcIkdFVF9QT1NJVElPTl9UWVBFX0xJU1RcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TSVRJT05fVFlQRSA9IFwiQ1JFQVRFX1BPU0lUSU9OX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TSVRJT05fVFlQRSA9IFwiVVBEQVRFX1BPU0lUSU9OX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TSVRJT05fVFlQRSA9IFwiREVMRVRFX1BPU0lUSU9OX1RZUEVcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlQgPSBcIkNSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVFwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCA9IFwiVVBEQVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BPU0lUSU9OX0FORF9NQU5BR0VNRU5UID0gXCJERUxFVEVfUE9TSVRJT05fQU5EX01BTkFHRU1FTlRcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSU09OQUxfSElTVE9SWSA9IFwiR0VUX1BFUlNPTkFMX0hJU1RPUllcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUllcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiVVBEQVRFX1BFUlNPTkFMX0hJU1RPUllcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUEVSU09OQUxfSElTVE9SWSA9IFwiREVMRVRFX1BFUlNPTkFMX0hJU1RPUllcIjtcbmV4cG9ydCBjb25zdCBDUkVBVEVfUEFSVFkgPSBcIkNSRUFURV9QQVJUWVwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QQVJUWSA9IFwiVVBEQVRFX1BBUlRZXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX09SR0FOSVpBVElPTiA9IFwiQ1JFQVRFX09SR0FOSVpBVElPTlwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9PUkdBTklaQVRJT04gPSBcIlVQREFURV9PUkdBTklaQVRJT05cIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfT1JHQU5JWkFUSU9OID0gXCJERUxFVEVfT1JHQU5JWkFUSU9OXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1RSQUlOSU5HID0gXCJDUkVBVEVfVFJBSU5JTkdcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfVFJBSU5JTkcgPSBcIlVQREFURV9UUkFJTklOR1wiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9UUkFJTklORyA9IFwiREVMRVRFX1RSQUlOSU5HXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FID0gXCJDUkVBVEVfUkVXQVJEX0RJU0NJUExJTkVcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfUkVXQVJEX0RJU0NJUExJTkUgPSBcIkRFTEVURV9SRVdBUkRfRElTQ0lQTElORVwiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9SRVdBUkRfRElTQ0lQTElORSA9IFwiVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAgPSBcIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDcgPSBcIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3XCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3ID0gXCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9DT05fU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQNyA9IFwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfU1RFUDdcIjtcbmV4cG9ydCBjb25zdCBVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9DT05fU1RFUDcgPSBcIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQX0NPTl9TVEVQN1wiO1xuZXhwb3J0IGNvbnN0IFVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQID0gXCJVUERBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9ERVBfUE9TX1RPX1NFQVJDSCA9IFwiR0VUX0RFUF9QT1NfVE9fU0VBUkNIXCI7XG5leHBvcnQgY29uc3QgU0VBUkNIID0gXCJTRUFSQ0hcIjtcbmV4cG9ydCBjb25zdCBHRVRfUFJPRklMRV9CWV9VU0VSX0lEID0gXCJHRVRfUFJPRklMRV9CWV9VU0VSX0lEXCI7XG5leHBvcnQgY29uc3QgR0VUX1BST0ZJTEVfQllfVE9LRU4gPSBcIkdFVF9QUk9GSUxFX0JZX1RPS0VOXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BST0ZJTEVfQUNUSVZFID0gXCJVUERBVEVfUFJPRklMRV9BQ1RJVkVcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSTUlTU0lPTl9MSVNUID0gXCJHRVRfUEVSTUlTU0lPTl9MSVNUXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BFUk1JU1NJT04gPSBcIkNSRUFURV9QRVJNSVNTSU9OXCI7XG5leHBvcnQgY29uc3QgVVBEQVRFX1BFUk1JU1NJT04gPSBcIlVQREFURV9QRVJNSVNTSU9OXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BFUk1JU1NJT04gPSBcIkRFTEVURV9QRVJNSVNTSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX1BFUk1JU1NJT05fUE9TSVRJT04gPSBcIkdFVF9QRVJNSVNTSU9OX1BPU0lUSU9OXCI7XG5leHBvcnQgY29uc3QgR0VUX1RBQkxFX01BTkFHRU1FTlQgPSBcIkdFVF9UQUJMRV9NQU5BR0VNRU5UXCI7XG5leHBvcnQgY29uc3QgU0VBUkNIX0RFUEFSVE1FTlQgPSBcIlNFQVJDSF9ERVBBUlRNRU5UXCI7XG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU0lUSU9OID0gXCJTRUFSQ0hfUE9TSVRJT05cIjtcbmV4cG9ydCBjb25zdCBHRVRfUE9TX0xJU1QgPSBcIkdFVF9QT1NfTElTVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURV9SRVNPVVJDRSA9IFwiREVMRVRFX1JFU09VUkNFXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BFUk1JU1NJT05fUE9TID0gXCJERUxFVEVfUEVSTUlTU0lPTl9QT1NcIjtcbmV4cG9ydCBjb25zdCBQT1NUX1BFUk1JU1NJT05fUE9TID0gXCJQT1NUX1BFUk1JU1NJT05fUE9TXCI7XG5leHBvcnQgY29uc3QgREVMRVRFX1BFUk1JU1NJT05fREVQX1BPUyA9IFwiREVMRVRFX1BFUk1JU1NJT05fREVQX1BPU1wiO1xuZXhwb3J0IGNvbnN0IFBPU1RfUEVSTUlTU0lPTl9ERVBfUE9TID0gXCJQT1NUX1BFUk1JU1NJT05fREVQX1BPU1wiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJNSVNTSU9OX0RFUF9QT1MgPSBcIkdFVF9QRVJNSVNTSU9OX0RFUF9QT1NcIjtcbmV4cG9ydCBjb25zdCBHRVRfUEVSTUlTU0lPTl9ERVBfUE9TX0xJU1QgPSBcIkdFVF9QRVJNSVNTSU9OX0RFUF9QT1NfTElTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJNSVNTSU9OX1BPU19MSVNUID0gXCJHRVRfUEVSTUlTU0lPTl9QT1NfTElTVFwiO1xuZXhwb3J0IGNvbnN0IEdFVF9QRVJNSVNTSU9OX09GX1VTRVIgPSBcIkdFVF9QRVJNSVNTSU9OX09GX1VTRVJcIjsiLCJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBkb2NDb29raWUgZnJvbSBcImRvYy1jb29raWVzXCJcblxuZXhwb3J0IGxldCBoYW5kbGVEYXRlVGltZSA9IChkYXRlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGNvbnZlcnQ7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgLy8gY29udmVydCB04burIHPhu5Egc2FuZyBjaHXhu5dpIERELU1NLVlZWVlcbiAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgY29udmVydCA9IG1vbWVudChjb252ZXJ0MSwgXCJERC1NTS1ZWVlZXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZihkYXRlLmluY2x1ZGVzKFwiLjAwMFpcIikpe1xuICAgICAgICAgICAgICAgIGxldCBjb252ZXJ0MSA9IG1vbWVudChuZXcgRGF0ZShkYXRlKSkuZm9ybWF0KFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgICAgIGNvbnZlcnQgPSBtb21lbnQoY29udmVydDEsIFwiREQtTU0tWVlZWVwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgY29udmVydDEgPSBtb21lbnQobmV3IERhdGUoZGF0ZS5jb25jYXQoXCIuMDAwWlwiKSkpLmZvcm1hdChcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgICAgICBjb252ZXJ0ID0gbW9tZW50KGNvbnZlcnQxLCBcIkRELU1NLVlZWVlcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29udmVydFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGxldCBjaGVja01pY3JvRmUgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMzAwMFwiKSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcInByb2ZpbGVzZXJ2aWNlXCIpIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiMzAwMVwiKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgbGV0IGdldFRva2VuSW5Db29raWUgPSAoKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB0b2tlbkNvb2tpZSA9IGRvY0Nvb2tpZS5nZXRJdGVtKFwidXNlcnRva2VuXCIpXG4gICAgICAgIGlmKCF0b2tlbkNvb2tpZSl7XG4gICAgICAgICAgICAvLyBraGkgcHVzaCBjb2RlIGzDqm4gc2VydmVyXG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgLy8gS2hpIHRlc3QgdHLDqm4gbG9jYWxcbiAgICAgICAgICAgIC8vIHJldHVybiBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNk16VTJMQ0psZUhBaU9qSTNOVEExTlRRM016QjkuZHJCT19HN0Y5SkNEaTdYbUxSbWYxNFF2VXFZZThjVzRpbkJJYlFzbVJZSVwiXG4gICAgICAgICAgICAvLyByZXR1cm4gXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZNU3dpWlhod0lqb3lOelV3TkRFeE1EZzNmUS51V2VFSkVYSHlOeXN3ODVrMjJtMHM2ZEZOaTRuSkZBTzhOUzhsZVk2ZnlBXCJcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbkNvb2tpZSk7XG4gICAgICAgIHJldHVybiB0b2tlbkNvb2tpZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbn1cblxuZXhwb3J0IGxldCBjaGVja1VzZXJQZXJtaXNzaW9uID0gKHBlcm1pc3Npb25MaXN0LCAuLi5uYW1lUGVybWlzc2lvbik9PntcbiAgICB0cnkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgZm9yKGxldCBwZXJOYW1lIG9mIG5hbWVQZXJtaXNzaW9uKXtcbiAgICAgICAgICAgIGlmKCFwZXJtaXNzaW9uTGlzdC5pbmNsdWRlcyhwZXJOYW1lKSl7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiTWVudSIsIk1kUGVvcGxlT3V0bGluZSIsIkxpbmsiLCJCc0ZpbGVFYXJtYXJrRmlsbCIsIkZjRGVwYXJ0bWVudCIsImNoZWNrTWljcm9GZSIsIkltUHJvZmlsZSIsImp3dF9kZWNvZGUiLCJUT0tFTiIsInVzZVNlbGVjdG9yIiwiU3ViTWVudSIsInVyaSIsInN0YXRlIiwicGVybWlzc2lvblJlZHVjZXIiLCJ1c2VyUGVybWlzc2lvbiIsImdldEl0ZW0iLCJsYWJlbCIsImtleSIsImljb24iLCJjaGlsZHJlbiIsIlBvc2l0aW9uSXRlbSIsIlBlcm1pc3Npb25NZW51IiwiUGVybWlzc2lvblBvc2l0aW9uIiwiUGVybWlzc2lvbkRlcFBvcyIsIlBlcm1pc3Npb25NYW5hZ2VtZW50IiwiaXRlbXMiLCJpZCIsIml0ZW1zX3VzZXIiLCJyZW5kZXJTdWJNZW51Iiwic3ViTWVudSIsIm1lbnVfcHJvZmlsZSIsInN1Yk1lbnVfUGVyIiwibWVudV9wZXJtaXNzaW9uIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJwdXNoIiwiY29uY2F0IiwiZ2V0VG9rZW5JbkNvb2tpZSIsImxvY2FsIiwicmVnZXhFbWFpbCIsInJlZ2V4UGhvbmUiLCJxdWFUcmluaExWSFQiLCJ0aGFtR2lhVG9DaHVjQ1QiLCJkYW9UYW8iLCJib2lEdW9uZyIsImtoZW5UaHVvbmciLCJreUx1YXQiLCJsaWNoU3VCYW5UaGFuIiwicXVhbkhlR2lhRGluaCIsIm5vaVNpbmhfU3RlcDEiLCJxdWVRdWFuX1N0ZXAxIiwiR0VUX1BST0ZJTEVfQllfSUQiLCJHRVRfUFJPVklOQ0VTIiwiR0VUX0RJU1RSSUNUU19CSVJUSF9QTEFDRSIsIkdFVF9ESVNUUklDVFNfSE9NRV9UT1dOIiwiR0VUX0RJU1RSSUNUU19BRERSRVNTIiwiR0VUX0RJU1RSSUNUU19IT0tIQVUiLCJHRVRfRElTVFJJQ1RTX1NURVA4IiwiR0VUX0RJU1RSSUNUU19TVEVQNyIsIkdFVF9ESVNUUklDVFNfU1RFUDkiLCJHRVRfRElTVFJJQ1RTX1NURVA3X0NPTiIsIlVQREFURV9QUk9GSUxFIiwiQ1JFQVRFX1BST0ZJTEUiLCJPTkxZX0NSRUFURV9QUk9GSUxFIiwiR0VUX1VTRVJfTElTVCIsIkdFVF9VU0VSX0lORk9STUFUSU9OIiwiR0VUX0RFUF9QT1MiLCJHRVRfUEFSVCIsIkdFVF9BVkFUQVIiLCJERUxFVEVfREVQX1BPUyIsIkdFVF9ERVBBUlRNRU5UX0xJU1QiLCJVUERBVEVfREVQQVJUTUVOVCIsIkdFVF9ERVBBUlRNRU5UX0lORk9SIiwiQ1JFQVRFX0RFUEFSVE1FTlQiLCJERUxFVEVfREVQQVJUTUVOVCIsIkdFVF9QT1NJVElPTlNfTUFOQV9MSVNUIiwiR0VUX1BPU0lUSU9OX1RZUEVfTElTVCIsIkNSRUFURV9QT1NJVElPTl9UWVBFIiwiVVBEQVRFX1BPU0lUSU9OX1RZUEUiLCJERUxFVEVfUE9TSVRJT05fVFlQRSIsIkNSRUFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCIsIlVQREFURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCIsIkRFTEVURV9QT1NJVElPTl9BTkRfTUFOQUdFTUVOVCIsIkdFVF9QRVJTT05BTF9ISVNUT1JZIiwiQ1JFQVRFX1BFUlNPTkFMX0hJU1RPUlkiLCJVUERBVEVfUEVSU09OQUxfSElTVE9SWSIsIkRFTEVURV9QRVJTT05BTF9ISVNUT1JZIiwiQ1JFQVRFX1BBUlRZIiwiVVBEQVRFX1BBUlRZIiwiQ1JFQVRFX09SR0FOSVpBVElPTiIsIlVQREFURV9PUkdBTklaQVRJT04iLCJERUxFVEVfT1JHQU5JWkFUSU9OIiwiQ1JFQVRFX1RSQUlOSU5HIiwiVVBEQVRFX1RSQUlOSU5HIiwiREVMRVRFX1RSQUlOSU5HIiwiQ1JFQVRFX1JFV0FSRF9ESVNDSVBMSU5FIiwiREVMRVRFX1JFV0FSRF9ESVNDSVBMSU5FIiwiVVBEQVRFX1JFV0FSRF9ESVNDSVBMSU5FIiwiQ1JFQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAiLCJDUkVBVEVfRkFNSUxZX1JFTEFUSU9OU0hJUF9TVEVQNyIsIkNSRUFURV9GQU1JTFlfUkVMQVRJT05TSElQX0NPTl9TVEVQNyIsIlVQREFURV9GQU1JTFlfUkVMQVRJT05TSElQX1NURVA3IiwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVBfQ09OX1NURVA3IiwiVVBEQVRFX0ZBTUlMWV9SRUxBVElPTlNISVAiLCJHRVRfREVQX1BPU19UT19TRUFSQ0giLCJTRUFSQ0giLCJHRVRfUFJPRklMRV9CWV9VU0VSX0lEIiwiR0VUX1BST0ZJTEVfQllfVE9LRU4iLCJVUERBVEVfUFJPRklMRV9BQ1RJVkUiLCJHRVRfUEVSTUlTU0lPTl9MSVNUIiwiQ1JFQVRFX1BFUk1JU1NJT04iLCJVUERBVEVfUEVSTUlTU0lPTiIsIkRFTEVURV9QRVJNSVNTSU9OIiwiR0VUX1BFUk1JU1NJT05fUE9TSVRJT04iLCJHRVRfVEFCTEVfTUFOQUdFTUVOVCIsIlNFQVJDSF9ERVBBUlRNRU5UIiwiU0VBUkNIX1BPU0lUSU9OIiwiR0VUX1BPU19MSVNUIiwiREVMRVRFX1JFU09VUkNFIiwiREVMRVRFX1BFUk1JU1NJT05fUE9TIiwiUE9TVF9QRVJNSVNTSU9OX1BPUyIsIkRFTEVURV9QRVJNSVNTSU9OX0RFUF9QT1MiLCJQT1NUX1BFUk1JU1NJT05fREVQX1BPUyIsIkdFVF9QRVJNSVNTSU9OX0RFUF9QT1MiLCJHRVRfUEVSTUlTU0lPTl9ERVBfUE9TX0xJU1QiLCJHRVRfUEVSTUlTU0lPTl9QT1NfTElTVCIsIkdFVF9QRVJNSVNTSU9OX09GX1VTRVIiLCJtb21lbnQiLCJkb2NDb29raWUiLCJoYW5kbGVEYXRlVGltZSIsImRhdGUiLCJjb252ZXJ0IiwiY29udmVydDEiLCJEYXRlIiwiZm9ybWF0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9rZW5Db29raWUiLCJjaGVja1VzZXJQZXJtaXNzaW9uIiwicGVybWlzc2lvbkxpc3QiLCJyZXN1bHQiLCJuYW1lUGVybWlzc2lvbiIsInBlck5hbWUiXSwic291cmNlUm9vdCI6IiJ9