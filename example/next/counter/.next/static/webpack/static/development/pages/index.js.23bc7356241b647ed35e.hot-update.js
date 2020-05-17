webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var acey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! acey */ \"./node_modules/acey/dist/index.js\");\n/* harmony import */ var acey__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(acey__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/louis/video/counter-next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar CounterModel = /*#__PURE__*/function (_Model) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CounterModel, _Model);\n\n  var _super = _createSuper(CounterModel);\n\n  function CounterModel(data, options) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, CounterModel);\n\n    _this = _super.call(this, data, options);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"get\", function () {\n      return _this.state.counter;\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"increment\", function () {\n      return _this.setState({\n        counter: _this.get() + 1\n      }).save().cookie();\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"decrement\", function () {\n      return _this.setState({\n        counter: _this.get() - 1\n      }).save().cookie();\n    });\n\n    return _this;\n  }\n\n  return CounterModel;\n}(acey__WEBPACK_IMPORTED_MODULE_7__[\"Model\"]);\n\nvar Counter = new CounterModel({\n  counter: 0\n}, {\n  connected: true,\n  key: 'counter'\n});\nfunction Home() {\n  _s();\n\n  Object(acey__WEBPACK_IMPORTED_MODULE_7__[\"useAcey\"])([Counter]);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    onClick: Counter.decrement,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"decrement\"), Counter.get(), __jsx(\"button\", {\n    onClick: Counter.increment,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, \"increment\"));\n}\n\n_s(Home, \"qTdWqdOQ7gFO3TfbS6/s2CUwZgs=\", false, function () {\n  return [acey__WEBPACK_IMPORTED_MODULE_7__[\"useAcey\"]];\n});\n\n_c = Home;\n\nHome.getInitialProps = function (_ref) {//Counter state updated on server side\n  //Counter.setState({counter: 10}).save()\n\n  var query = _ref.query;\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkNvdW50ZXJNb2RlbCIsImRhdGEiLCJvcHRpb25zIiwic3RhdGUiLCJjb3VudGVyIiwic2V0U3RhdGUiLCJnZXQiLCJzYXZlIiwiY29va2llIiwiTW9kZWwiLCJDb3VudGVyIiwiY29ubmVjdGVkIiwia2V5IiwiSG9tZSIsInVzZUFjZXkiLCJkZWNyZW1lbnQiLCJpbmNyZW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMEI7QUFBQTs7QUFBQTs7QUFDeEIsOEJBQU1ELElBQU4sRUFBWUMsT0FBWjs7QUFEd0IsOE1BSXBCO0FBQUEsYUFBTSxNQUFLQyxLQUFMLENBQVdDLE9BQWpCO0FBQUEsS0FKb0I7O0FBQUEsb05BS2Q7QUFBQSxhQUFNLE1BQUtDLFFBQUwsQ0FBYztBQUFDRCxlQUFPLEVBQUUsTUFBS0UsR0FBTCxLQUFhO0FBQXZCLE9BQWQsRUFBeUNDLElBQXpDLEdBQWdEQyxNQUFoRCxFQUFOO0FBQUEsS0FMYzs7QUFBQSxvTkFNZDtBQUFBLGFBQU0sTUFBS0gsUUFBTCxDQUFjO0FBQUNELGVBQU8sRUFBRSxNQUFLRSxHQUFMLEtBQWE7QUFBdkIsT0FBZCxFQUF5Q0MsSUFBekMsR0FBZ0RDLE1BQWhELEVBQU47QUFBQSxLQU5jOztBQUFBO0FBRXpCOzs7RUFId0JDLDBDOztBQVUzQixJQUFNQyxPQUFPLEdBQUcsSUFBSVYsWUFBSixDQUFpQjtBQUFDSSxTQUFPLEVBQUU7QUFBVixDQUFqQixFQUErQjtBQUFDTyxXQUFTLEVBQUUsSUFBWjtBQUFrQkMsS0FBRyxFQUFFO0FBQXZCLENBQS9CLENBQWhCO0FBRWUsU0FBU0MsSUFBVCxHQUFnQjtBQUFBOztBQUU3QkMsc0RBQU8sQ0FBQyxDQUNOSixPQURNLENBQUQsQ0FBUDtBQUlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFQSxPQUFPLENBQUNLLFNBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFFR0wsT0FBTyxDQUFDSixHQUFSLEVBRkgsRUFHRTtBQUFRLFdBQU8sRUFBRUksT0FBTyxDQUFDTSxTQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLENBREY7QUFPRDs7R0FidUJILEk7VUFFdEJDLDRDOzs7S0FGc0JELEk7O0FBZXhCQSxJQUFJLENBQUNJLGVBQUwsR0FBdUIsZ0JBQWUsQ0FDcEM7QUFDQTs7QUFGb0MsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBR3JDLENBSEQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsLCB1c2VBY2V5fSBmcm9tICdhY2V5J1xuXG5jbGFzcyBDb3VudGVyTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIG9wdGlvbnMpe1xuICAgIHN1cGVyKGRhdGEsIG9wdGlvbnMpXG4gIH1cblxuICBnZXQgPSAoKSA9PiB0aGlzLnN0YXRlLmNvdW50ZXJcbiAgaW5jcmVtZW50ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjogdGhpcy5nZXQoKSArIDF9KS5zYXZlKCkuY29va2llKClcbiAgZGVjcmVtZW50ID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjogdGhpcy5nZXQoKSAtIDF9KS5zYXZlKCkuY29va2llKClcbn1cblxuY29uc3QgQ291bnRlciA9IG5ldyBDb3VudGVyTW9kZWwoe2NvdW50ZXI6IDB9LCB7Y29ubmVjdGVkOiB0cnVlLCBrZXk6ICdjb3VudGVyJ30pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgdXNlQWNleShbXG4gICAgQ291bnRlclxuICBdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17Q291bnRlci5kZWNyZW1lbnR9PmRlY3JlbWVudDwvYnV0dG9uPlxuICAgICAge0NvdW50ZXIuZ2V0KCl9XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e0NvdW50ZXIuaW5jcmVtZW50fT5pbmNyZW1lbnQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5Ib21lLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcbiAgLy9Db3VudGVyIHN0YXRlIHVwZGF0ZWQgb24gc2VydmVyIHNpZGVcbiAgLy9Db3VudGVyLnNldFN0YXRlKHtjb3VudGVyOiAxMH0pLnNhdmUoKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})