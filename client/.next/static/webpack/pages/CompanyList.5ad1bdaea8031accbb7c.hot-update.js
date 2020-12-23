webpackHotUpdate_N_E("pages/CompanyList",{

/***/ "./components/company/EditCompany.js":
/*!*******************************************!*\
  !*** ./components/company/EditCompany.js ***!
  \*******************************************/
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




var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\components\\company\\EditCompany.js",
    _this = undefined,
    _s = $RefreshSig$();



var EditCompany = function EditCompany(_ref) {
  _s();

  var company = _ref.company;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(company.company_name),
      company_name = _useState[0],
      setCompanyName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(company.contact_name),
      contact_name = _useState2[0],
      setContactName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(company.company_phone),
      company_phone = _useState3[0],
      setCompanyPhone = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(company.company_address),
      company_address = _useState4[0],
      setCompanyAddress = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(company.company_mail),
      company_mail = _useState5[0],
      setCompanyMail = _useState5[1]; // Edit Company_Company_Name


  var updateInfo = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
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
              }; //proxy
              //https://final-project-clockin.herokuapp.com/company

              _context.next = 5;
              return fetch("/company/".concat(company.company_id), {
                method: "PUT",
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

    return function updateInfo(_x) {
      return _ref2.apply(this, arguments);
    };
  }(); // If edit is cancelled the prior changes are not carried over if you wanna finish or change your edit


  var cancelUpdate = function cancelUpdate() {
    setCompanyName(company.company_name);
    setContactName(company.contact_name);
    setCompanyPhone(company.company_phone);
    setCompanyAddress(company.company_address);
    setCompanyMail(company.company_mail);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        type: "button",
        "class": "btn btn-outline-success",
        "data-toggle": "modal",
        "data-target": "#id".concat(company.company_id),
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        onClick: function onClick() {
          return cancelUpdate();
        },
        "class": "modal",
        id: "id".concat(company.company_id),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          "class": "modal-dialog",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            "class": "modal-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              "class": "modal-header",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h4", {
                "class": "modal-title",
                children: "Edit Company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                type: "button",
                "class": "close",
                "data-dismiss": "modal",
                onClick: function onClick() {
                  return cancelUpdate();
                },
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              "class": "modal-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: company_name,
                onChange: function onChange(e) {
                  return setCompanyName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: contact_name,
                onChange: function onChange(e) {
                  return setContactName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: company_phone,
                onChange: function onChange(e) {
                  return setCompanyPhone(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: company_address,
                onChange: function onChange(e) {
                  return setCompanyAddress(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: company_mail,
                onChange: function onChange(e) {
                  return setCompanyMail(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              "class": "modal-footer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                type: "button",
                "class": "btn btn-success",
                "data-dismiss": "modal",
                onClick: function onClick(e) {
                  return updateInfo(e);
                },
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 15
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                type: "button",
                "class": "btn btn-danger",
                "data-dismiss": "modal",
                onClick: function onClick() {
                  return cancelUpdate();
                },
                children: "Close"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, _this);
};

_s(EditCompany, "TQSiRm7z593iG3Xd2OIZGJO+eBg=");

_c = EditCompany;
/* harmony default export */ __webpack_exports__["default"] = (EditCompany);

var _c;

$RefreshReg$(_c, "EditCompany");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wYW55L0VkaXRDb21wYW55LmpzIl0sIm5hbWVzIjpbIkVkaXRDb21wYW55IiwiY29tcGFueSIsInVzZVN0YXRlIiwiY29tcGFueV9uYW1lIiwic2V0Q29tcGFueU5hbWUiLCJjb250YWN0X25hbWUiLCJzZXRDb250YWN0TmFtZSIsImNvbXBhbnlfcGhvbmUiLCJzZXRDb21wYW55UGhvbmUiLCJjb21wYW55X2FkZHJlc3MiLCJzZXRDb21wYW55QWRkcmVzcyIsImNvbXBhbnlfbWFpbCIsInNldENvbXBhbnlNYWlsIiwidXBkYXRlSW5mbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJmZXRjaCIsImNvbXBhbnlfaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiY2FuY2VsVXBkYXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUNELE9BQU8sQ0FBQ0UsWUFBVCxDQUZkO0FBQUEsTUFFMUJBLFlBRjBCO0FBQUEsTUFFWkMsY0FGWTs7QUFBQSxtQkFHTUYsc0RBQVEsQ0FBQ0QsT0FBTyxDQUFDSSxZQUFULENBSGQ7QUFBQSxNQUcxQkEsWUFIMEI7QUFBQSxNQUdaQyxjQUhZOztBQUFBLG1CQUlRSixzREFBUSxDQUFDRCxPQUFPLENBQUNNLGFBQVQsQ0FKaEI7QUFBQSxNQUkxQkEsYUFKMEI7QUFBQSxNQUlYQyxlQUpXOztBQUFBLG1CQUtZTixzREFBUSxDQUFDRCxPQUFPLENBQUNRLGVBQVQsQ0FMcEI7QUFBQSxNQUsxQkEsZUFM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QUFHLGtCQUFBRyxDQUFDO0FBQUEseUJBQUlGLGNBQWMsQ0FBQ0UsQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQWxCO0FBQUE7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkEsZUFzQ0E7QUFBSyx1QkFBTSxjQUFYO0FBQUEsc0NBQ0U7QUFDRSxvQkFBSSxFQUFDLFFBRFA7QUFFRSx5QkFBTSxpQkFGUjtBQUdFLGdDQUFhLE9BSGY7QUFJRSx1QkFBTyxFQUFJLGlCQUFBakIsQ0FBQztBQUFBLHlCQUFJRCxVQUFVLENBQUNDLENBQUQsQ0FBZDtBQUFBLGlCQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBUUU7QUFBUSxvQkFBSSxFQUFDLFFBQWI7QUFDRSx5QkFBTSxnQkFEUjtBQUVFLGdDQUFhLE9BRmY7QUFHRSx1QkFBTyxFQUFFO0FBQUEseUJBQU1lLFlBQVksRUFBbEI7QUFBQSxpQkFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFtRkgsQ0E1SEQ7O0dBQU03QixXOztLQUFBQSxXO0FBOEhTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9Db21wYW55TGlzdC41YWQxYmRhZWE4MDMxYWNjYmI3Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEVkaXRDb21wYW55ID0gKHsgY29tcGFueSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NvbXBhbnlfbmFtZSwgc2V0Q29tcGFueU5hbWVdID0gdXNlU3RhdGUoY29tcGFueS5jb21wYW55X25hbWUpO1xyXG4gICAgY29uc3QgW2NvbnRhY3RfbmFtZSwgc2V0Q29udGFjdE5hbWVdID0gdXNlU3RhdGUoY29tcGFueS5jb250YWN0X25hbWUpO1xyXG4gICAgY29uc3QgW2NvbXBhbnlfcGhvbmUsIHNldENvbXBhbnlQaG9uZV0gPSB1c2VTdGF0ZShjb21wYW55LmNvbXBhbnlfcGhvbmUpO1xyXG4gICAgY29uc3QgW2NvbXBhbnlfYWRkcmVzcywgc2V0Q29tcGFueUFkZHJlc3NdID0gdXNlU3RhdGUoY29tcGFueS5jb21wYW55X2FkZHJlc3MpO1xyXG4gICAgY29uc3QgW2NvbXBhbnlfbWFpbCwgc2V0Q29tcGFueU1haWxdID0gdXNlU3RhdGUoY29tcGFueS5jb21wYW55X21haWwpO1xyXG5cclxuICAvLyBFZGl0IENvbXBhbnlfQ29tcGFueV9OYW1lXHJcbiAgY29uc3QgdXBkYXRlSW5mbyA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICB0cnkge1xyXG4gICAgICBcclxuICAgICAgY29uc3QgYm9keSA9IHtjb21wYW55X25hbWUsIGNvbnRhY3RfbmFtZSwgY29tcGFueV9waG9uZSwgY29tcGFueV9hZGRyZXNzLCBjb21wYW55X21haWx9O1xyXG4gICAgICBcclxuICAgICAgLy9wcm94eVxyXG4gICAgICBcclxuICAgICAgLy9odHRwczovL2ZpbmFsLXByb2plY3QtY2xvY2tpbi5oZXJva3VhcHAuY29tL2NvbXBhbnlcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2NvbXBhbnkvJHtjb21wYW55LmNvbXBhbnlfaWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIC8vIElmIGVkaXQgaXMgY2FuY2VsbGVkIHRoZSBwcmlvciBjaGFuZ2VzIGFyZSBub3QgY2FycmllZCBvdmVyIGlmIHlvdSB3YW5uYSBmaW5pc2ggb3IgY2hhbmdlIHlvdXIgZWRpdFxyXG4gICAgY29uc3QgY2FuY2VsVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICBzZXRDb21wYW55TmFtZShjb21wYW55LmNvbXBhbnlfbmFtZSkgXHJcbiAgICAgIHNldENvbnRhY3ROYW1lKGNvbXBhbnkuY29udGFjdF9uYW1lKVxyXG4gICAgICBzZXRDb21wYW55UGhvbmUoY29tcGFueS5jb21wYW55X3Bob25lKVxyXG4gICAgICBzZXRDb21wYW55QWRkcmVzcyhjb21wYW55LmNvbXBhbnlfYWRkcmVzcylcclxuICAgICAgc2V0Q29tcGFueU1haWwoY29tcGFueS5jb21wYW55X21haWwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjEyLjQvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiBcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiICBcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9e2AjaWQke2NvbXBhbnkuY29tcGFueV9pZH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICBpZCA9IGlkMTBcclxuICAgICAgICAgICovfVxyXG4gICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FuY2VsVXBkYXRlKCl9XHJcbiAgICAgICAgICAgIGNsYXNzPVwibW9kYWxcIiBpZD17YGlkJHtjb21wYW55LmNvbXBhbnlfaWR9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RWRpdCBDb21wYW55PC9oND5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2VcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbmNlbFVwZGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBtdC0zXCJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlfbmFtZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0Q29tcGFueU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0X25hbWV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldENvbnRhY3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIG10LTNcIn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9waG9uZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0Q29tcGFueVBob25lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X2FkZHJlc3N9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldENvbXBhbnlBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X21haWx9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldENvbXBhbnlNYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIFxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljayA9IHtlID0+IHVwZGF0ZUluZm8oZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIFxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FuY2VsVXBkYXRlKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRDb21wYW55OyJdLCJzb3VyY2VSb290IjoiIn0=