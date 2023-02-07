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
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  // console.log(userPermission)
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_components_sidebar_SubMenu__WEBPACK_IMPORTED_MODULE_2__["default"])(userPermission);
  }, [userPermission, userPermission.length]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {});
};
/* harmony default export */ __webpack_exports__["default"] = (InitProfile);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX0luaXRQcm9maWxlX2pzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2M7QUFDSjtBQUFBO0FBQ25ELElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFXLEdBQVM7RUFDdEIsSUFBTUMsY0FBYyxHQUFHSCx3REFBVyxDQUFDLFVBQUFJLEtBQUs7SUFBQSxPQUFJQSxLQUFLLENBQUNDLFVBQVU7RUFBQSxFQUFDO0VBQzdELElBQU1DLFFBQVEsR0FBR1Asd0RBQVcsRUFBRTtFQUM5QjtFQUNBRCxnREFBUyxDQUFDLFlBQU07SUFDWkcsdUVBQU8sQ0FBQ0UsY0FBYyxDQUFDO0VBQzNCLENBQUMsRUFBRSxDQUFDQSxjQUFjLEVBQUVBLGNBQWMsQ0FBQ0ksTUFBTSxDQUFDLENBQUM7RUFFM0Msb0JBQ0ksaUVBRU07QUFFZCxDQUFDO0FBRUQsK0RBQWVMLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9maWxlLy4vc3JjL0luaXRQcm9maWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU3ViTWVudSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZWJhci9TdWJNZW51JztcbmNvbnN0IEluaXRQcm9maWxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJQZXJtaXNzaW9uID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGVybWlzc2lvbik7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgLy8gY29uc29sZS5sb2codXNlclBlcm1pc3Npb24pXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgU3ViTWVudSh1c2VyUGVybWlzc2lvbilcbiAgICB9LCBbdXNlclBlcm1pc3Npb24sIHVzZXJQZXJtaXNzaW9uLmxlbmd0aF0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluaXRQcm9maWxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlN1Yk1lbnUiLCJJbml0UHJvZmlsZSIsInVzZXJQZXJtaXNzaW9uIiwic3RhdGUiLCJwZXJtaXNzaW9uIiwiZGlzcGF0Y2giLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9