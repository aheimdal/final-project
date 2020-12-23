webpackHotUpdate_N_E("pages/CompanyList",{

/***/ "./components/company/InputCompany.js":
/*!********************************************!*\
  !*** ./components/company/InputCompany.js ***!
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




var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\components\\company\\InputCompany.js",
    _this = undefined,
    _s = $RefreshSig$();



var InputCompany = function InputCompany() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      company_name = _useState[0],
      setCompanyName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      contact_name = _useState2[0],
      setContactName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      company_phone = _useState3[0],
      setCompanyPhone = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      company_address = _useState4[0],
      setCompanyAddress = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      company_mail = _useState5[0],
      setCompanyMail = _useState5[1];

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
                company_name: company_name,
                contact_name: contact_name,
                company_phone: company_phone,
                company_address: company_address,
                company_mail: company_mail
              }; //https://final-project-clockin.herokuapp.com/company

              _context.next = 5;
              return fetch("company", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
              });

            case 5:
              response = _context.sent;
              window.location = "/CompanyList";
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
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      "class": "container-fluid h-auto d-flex flex-column bd-highlight mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        "class": "text-center mt-3",
        children: "Add New Company"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
        "class": "form-row",
        onSubmit: onSubmitProject,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          "class": "col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            "class": "form-control mt-1",
            type: "text",
            placeholder: "Enter Company Name",
            value: company_name,
            onChange: function onChange(e) {
              return setCompanyName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            "class": "form-control mt-1",
            type: "text",
            placeholder: "Enter Contact Name",
            value: contact_name,
            onChange: function onChange(e) {
              return setContactName(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            "class": "form-control mt-1",
            type: "text",
            placeholder: "Enter Company Phone Number",
            value: company_phone,
            onChange: function onChange(e) {
              return setCompanyPhone(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          "class": "col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            "class": "form-control mt-1",
            type: "text",
            placeholder: "Enter Company Address",
            value: company_address,
            onChange: function onChange(e) {
              return setCompanyAddress(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 18
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
            "class": "form-control mt-1",
            type: "text",
            placeholder: "Enter Company Mail",
            value: company_mail,
            onChange: function onChange(e) {
              return setCompanyMail(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 18
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            "class": "d-flex flex-column",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
              "class": "btn btn-success mt-2 p-1",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 25
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 21
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(InputCompany, "QdwCZwxBrJozRwWSf6fuixUmtM4=");

_c = InputCompany;
/* harmony default export */ __webpack_exports__["default"] = (InputCompany);

var _c;

$RefreshReg$(_c, "InputCompany");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wYW55L0lucHV0Q29tcGFueS5qcyJdLCJuYW1lcyI6WyJJbnB1dENvbXBhbnkiLCJ1c2VTdGF0ZSIsImNvbXBhbnlfbmFtZSIsInNldENvbXBhbnlOYW1lIiwiY29udGFjdF9uYW1lIiwic2V0Q29udGFjdE5hbWUiLCJjb21wYW55X3Bob25lIiwic2V0Q29tcGFueVBob25lIiwiY29tcGFueV9hZGRyZXNzIiwic2V0Q29tcGFueUFkZHJlc3MiLCJjb21wYW55X21haWwiLCJzZXRDb21wYW55TWFpbCIsIm9uU3VibWl0UHJvamVjdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUEsa0JBRWdCQyxzREFBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQSxNQUVoQkMsWUFGZ0I7QUFBQSxNQUVGQyxjQUZFOztBQUFBLG1CQUdnQkYsc0RBQVEsQ0FBQyxFQUFELENBSHhCO0FBQUEsTUFHaEJHLFlBSGdCO0FBQUEsTUFHRkMsY0FIRTs7QUFBQSxtQkFJa0JKLHNEQUFRLENBQUMsRUFBRCxDQUoxQjtBQUFBLE1BSWhCSyxhQUpnQjtBQUFBLE1BSURDLGVBSkM7O0FBQUEsbUJBS3NCTixzREFBUSxDQUFDLEVBQUQsQ0FMOUI7QUFBQSxNQUtoQk8sZUFMZ0I7QUFBQSxNQUtDQyxpQkFMRDs7QUFBQSxtQkFNZ0JSLHNEQUFRLENBQUMsRUFBRCxDQU54QjtBQUFBLE1BTWhCUyxZQU5nQjtBQUFBLE1BTUZDLGNBTkU7O0FBUXZCLE1BQU1D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SyxDQUFDO0FBQUEscUJBQUlKLGlCQUFpQixDQUFDSSxDQUFDLENBQUNjLE1BQUYsQ0FBU0MsS0FBVixDQUFyQjtBQUFBO0FBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQVFDO0FBQ0cscUJBQU0sbUJBRFQ7QUFFRyxnQkFBSSxFQUFDLE1BRlI7QUFHRyx1QkFBVyxFQUFDLG9CQUhmO0FBSUcsaUJBQUssRUFBRWxCLFlBSlY7QUFLRyxvQkFBUSxFQUFFLGtCQUFBRyxDQUFDO0FBQUEscUJBQUlGLGNBQWMsQ0FBQ0UsQ0FBQyxDQUFDYyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUxkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkQsZUFlSTtBQUFLLHFCQUFNLG9CQUFYO0FBQUEsbUNBQ0k7QUFBUSx1QkFBTSwwQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQTRESCxDQXRGRDs7R0FBTTVCLFk7O0tBQUFBLFk7QUF3RlNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NvbXBhbnlMaXN0LjJmMmZmMWVmYTQ1MzFiNWQyYzdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgSW5wdXRDb21wYW55ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjb21wYW55X25hbWUsIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NvbnRhY3RfbmFtZSwgc2V0Q29udGFjdE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY29tcGFueV9waG9uZSwgc2V0Q29tcGFueVBob25lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2NvbXBhbnlfYWRkcmVzcywgc2V0Q29tcGFueUFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY29tcGFueV9tYWlsLCBzZXRDb21wYW55TWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBvblN1Ym1pdFByb2plY3QgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7Y29tcGFueV9uYW1lLCBjb250YWN0X25hbWUsIGNvbXBhbnlfcGhvbmUsIGNvbXBhbnlfYWRkcmVzcywgY29tcGFueV9tYWlsfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly9maW5hbC1wcm9qZWN0LWNsb2NraW4uaGVyb2t1YXBwLmNvbS9jb21wYW55XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJjb21wYW55XCIse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL0NvbXBhbnlMaXN0XCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICB7LypcclxuICAgICAgICBIw6lyIMOhIMOpZyBlZnRpciBhw7AgbWXDsGjDtm5kbGEgw75ldHRhIG1lw7AgQm9vdHN0cmFwIHRpbCBhw7AgYnJleXRhIGHDsGVpbnMgw7p0bGl0IHPDrcOwdW5uYXJcclxuICAgICAgICBNdW4gbm90YWFzdCB2acOwIC0gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ib290c3RyYXA0L2Jvb3RzdHJhcF9mb3Jtcy5hc3AgKEZvcm0gLSBSb3cgJiBHcmlkKVxyXG4gICAgKi99XHJcbiAgICA8aGVhZGVyPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPGRpdiBjbGFzcyA9IFwiY29udGFpbmVyLWZsdWlkIGgtYXV0byBkLWZsZXggZmxleC1jb2x1bW4gYmQtaGlnaGxpZ2h0IG1iLTNcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0zXCI+QWRkIE5ldyBDb21wYW55PC9oMT5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tcm93XCIgb25TdWJtaXQ9e29uU3VibWl0UHJvamVjdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDb21wYW55IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbXBhbnlOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDb250YWN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q29udGFjdE5hbWUoZS50YXJnZXQudmFsdWUpfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ29tcGFueSBQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X3Bob25lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbXBhbnlQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ29tcGFueSBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbXBhbnlBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ29tcGFueSBNYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9tYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbXBhbnlNYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0yIHAtMVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbXBhbnk7Il0sInNvdXJjZVJvb3QiOiIifQ==