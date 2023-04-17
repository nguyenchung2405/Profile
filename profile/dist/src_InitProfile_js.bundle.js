"use strict";
(self["webpackChunkprofile"] = self["webpackChunkprofile"] || []).push([["src_InitProfile_js"],{

/***/ "./src/InitProfile.js":
/*!****************************!*\
  !*** ./src/InitProfile.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "webpack/sharing/consume/default/react-redux/react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_sidebar_SubMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/sidebar/SubMenu */ "./src/components/sidebar/SubMenu.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var InitProfile = function InitProfile() {
  var userPermission = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.permission;
  });
  // console.log(userPermission)
  if (userPermission.length !== 0) {
    (0,_components_sidebar_SubMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(userPermission);
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {});
};
/* harmony default export */ __webpack_exports__["default"] = (InitProfile);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX0luaXRQcm9maWxlX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ1M7QUFBQTtBQUNuRCxJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0VBQ3RCLElBQU1DLGNBQWMsR0FBR0gsd0RBQVcsQ0FBQyxVQUFBSSxLQUFLO0lBQUEsT0FBSUEsS0FBSyxDQUFDQyxVQUFVO0VBQUEsRUFBQztFQUM3RDtFQUNBLElBQUlGLGNBQWMsQ0FBQ0csTUFBTSxLQUFLLENBQUMsRUFBRTtJQUM3QkwsdUVBQU8sQ0FBQ0UsY0FBYyxDQUFDO0VBQzNCO0VBRUEsb0JBQ0ksaUVBRU07QUFFZCxDQUFDO0FBRUQsK0RBQWVELFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL0luaXRQcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgU3ViTWVudSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZWJhci9TdWJNZW51JztcclxuY29uc3QgSW5pdFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyUGVybWlzc2lvbiA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBlcm1pc3Npb24pO1xyXG4gICAgLy8gY29uc29sZS5sb2codXNlclBlcm1pc3Npb24pXHJcbiAgICBpZiAodXNlclBlcm1pc3Npb24ubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgU3ViTWVudSh1c2VyUGVybWlzc2lvbilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5pdFByb2ZpbGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVNlbGVjdG9yIiwiU3ViTWVudSIsIkluaXRQcm9maWxlIiwidXNlclBlcm1pc3Npb24iLCJzdGF0ZSIsInBlcm1pc3Npb24iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9