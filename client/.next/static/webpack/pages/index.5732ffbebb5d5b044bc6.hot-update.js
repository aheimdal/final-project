webpackHotUpdate_N_E("pages/index",{

/***/ "./components/project/InputProject.js":
/*!********************************************!*\
  !*** ./components/project/InputProject.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Stopwatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Stopwatch */ "./components/Stopwatch.js");




var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\components\\project\\InputProject.js",
    _this = undefined,
    _s = $RefreshSig$();




var InputProject = function InputProject() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      project_company_name = _useState[0],
      setProject_Company_Name = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      project_description = _useState2[0],
      setProject_description = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      project_location = _useState3[0],
      setProject_location = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      project_time = _useState4[0],
      setProjectTime = _useState4[1];

  var onSubmitProject = /*#__PURE__*/function () {
    var _ref = Object(C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var body, response;
      return C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.prev = 1;
              body = {
                project_company_name: project_company_name,
                project_description: project_description,
                project_location: project_location,
                project_time: project_time
              }; //https://final-project.herokuapp.com/project

              _context.next = 5;
              return fetch("http://localhost:5000//project", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
              });

            case 5:
              response = _context.sent;
              window.location = "/";
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0.message);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function onSubmitProject(_x) {
      return _ref.apply(this, arguments);
    };
  }(); //console.log(timeSaved);


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      "class": "container-fluid h-auto d-flex flex-column bd-highlight mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_Stopwatch__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        "class": "form",
        onSubmit: onSubmitProject,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          "class": "row",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            "class": "col",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              "class": "form-control mt-1",
              type: "text",
              placeholder: "Company Name",
              value: project_company_name,
              onChange: function onChange(e) {
                return setProject_Company_Name(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              "class": "form-control mt-1",
              type: "text",
              placeholder: "Description",
              value: project_description,
              onChange: function onChange(e) {
                return setProject_description(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            "class": "col",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              "class": "form-control mt-1",
              type: "text",
              placeholder: "Location",
              value: project_location,
              onChange: function onChange(e) {
                return setProject_location(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
              "class": "form-control mt-1",
              type: "text",
              placeholder: "Total Time",
              value: project_time,
              onChange: function onChange(e) {
                return setProjectTime(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          "class": "d-flex flex-column",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
            "class": "btn btn-success mt-1",
            onSubmit: onSubmitProject,
            children: "Add Project"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};

_s(InputProject, "5INw8dIobBzjS3PgISTamrZR/WA=");

_c = InputProject;
/* harmony default export */ __webpack_exports__["default"] = (InputProject);

var _c;

$RefreshReg$(_c, "InputProject");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0L0lucHV0UHJvamVjdC5qcyJdLCJuYW1lcyI6WyJJbnB1dFByb2plY3QiLCJ1c2VTdGF0ZSIsInByb2plY3RfY29tcGFueV9uYW1lIiwic2V0UHJvamVjdF9Db21wYW55X05hbWUiLCJwcm9qZWN0X2Rlc2NyaXB0aW9uIiwic2V0UHJvamVjdF9kZXNjcmlwdGlvbiIsInByb2plY3RfbG9jYXRpb24iLCJzZXRQcm9qZWN0X2xvY2F0aW9uIiwicHJvamVjdF90aW1lIiwic2V0UHJvamVjdFRpbWUiLCJvblN1Ym1pdFByb2plY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTztBQUFBOztBQUFBLGtCQUVnQ0Msc0RBQVEsQ0FBQyxFQUFELENBRnhDO0FBQUEsTUFFakJDLG9CQUZpQjtBQUFBLE1BRUtDLHVCQUZMOztBQUFBLG1CQUc4QkYsc0RBQVEsQ0FBQyxFQUFELENBSHRDO0FBQUEsTUFHakJHLG1CQUhpQjtBQUFBLE1BR0lDLHNCQUhKOztBQUFBLG1CQUl3Qkosc0RBQVEsQ0FBQyxFQUFELENBSmhDO0FBQUEsTUFJakJLLGdCQUppQjtBQUFBLE1BSUNDLG1CQUpEOztBQUFBLG1CQUtlTixzREFBUSxDQUFDLEVBQUQsQ0FMdkI7QUFBQSxNQUtqQk8sWUFMaUI7QUFBQSxNQUtIQyxjQUxHOztBQU94QixNQUFNQyxlQUFlO0FBQUEsMFdBQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BC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Q0FBQ2MsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBb0NJO0FBQUssbUJBQU0sb0JBQVg7QUFBQSxpQ0FDSTtBQUFRLHFCQUFNLHNCQUFkO0FBQXFDLG9CQUFRLEVBQUVoQixlQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBd0RILENBcEZEOztHQUFNVixZOztLQUFBQSxZO0FBc0ZTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NzMyZmZiZWJiNWQ1YjA0NGJjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuLi9TdG9wd2F0Y2gnO1xyXG5cclxuY29uc3QgSW5wdXRQcm9qZWN0ID0gKCApID0+IHtcclxuXHJcbiAgICBjb25zdCBbcHJvamVjdF9jb21wYW55X25hbWUsIHNldFByb2plY3RfQ29tcGFueV9OYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Byb2plY3RfZGVzY3JpcHRpb24sIHNldFByb2plY3RfZGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcHJvamVjdF9sb2NhdGlvbiwgc2V0UHJvamVjdF9sb2NhdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwcm9qZWN0X3RpbWUsIHNldFByb2plY3RUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgXHJcbiAgICBjb25zdCBvblN1Ym1pdFByb2plY3QgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7cHJvamVjdF9jb21wYW55X25hbWUsIHByb2plY3RfZGVzY3JpcHRpb24sIHByb2plY3RfbG9jYXRpb24sIHByb2plY3RfdGltZX07XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL2h0dHBzOi8vZmluYWwtcHJvamVjdC5oZXJva3VhcHAuY29tL3Byb2plY3RcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC8vcHJvamVjdFwiLHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCJcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc29sZS5sb2codGltZVNhdmVkKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICB7LypcclxuICAgICAgICBIw6lyIMOhIMOpZyBlZnRpciBhw7AgbWXDsGjDtm5kbGEgw75ldHRhIG1lw7AgQm9vdHN0cmFwIHRpbCBhw7AgYnJleXRhIGHDsGVpbnMgw7p0bGl0IHPDrcOwdW5uYXJcclxuICAgICAgICBNdW4gbm90YWFzdCB2acOwIC0gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ib290c3RyYXA0L2Jvb3RzdHJhcF9mb3Jtcy5hc3AgKEZvcm0gLSBSb3cgJiBHcmlkKVxyXG4gICAgKi99XHJcbiAgICA8aGVhZGVyPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPGRpdiBjbGFzcyA9IFwiY29udGFpbmVyLWZsdWlkIGgtYXV0byBkLWZsZXggZmxleC1jb2x1bW4gYmQtaGlnaGxpZ2h0IG1iLTNcIj5cclxuICAgICAgICA8U3RvcHdhdGNoLz5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBvblN1Ym1pdD17b25TdWJtaXRQcm9qZWN0fT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG10LTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb21wYW55IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0X2NvbXBhbnlfbmFtZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UHJvamVjdF9Db21wYW55X05hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3RfZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UHJvamVjdF9kZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSl9ICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0xXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTG9jYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3RfbG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQcm9qZWN0X2xvY2F0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRvdGFsIFRpbWVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3RfdGltZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFByb2plY3RUaW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0xXCIgb25TdWJtaXQ9e29uU3VibWl0UHJvamVjdH0+QWRkIFByb2plY3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dFByb2plY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==