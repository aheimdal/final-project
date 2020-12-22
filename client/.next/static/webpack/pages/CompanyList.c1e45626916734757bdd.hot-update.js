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
              }; //https://final-project.herokuapp.com/company

              _context.next = 5;
              return fetch("http://localhost:5000/company/".concat(company.company_id), {
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
        lineNumber: 42,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
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
        lineNumber: 47,
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
                lineNumber: 64,
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
                lineNumber: 65,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
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
                lineNumber: 73,
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
                lineNumber: 78,
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
                lineNumber: 83,
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
                lineNumber: 88,
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
                lineNumber: 93,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
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
                lineNumber: 101,
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
                lineNumber: 108,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wYW55L0VkaXRDb21wYW55LmpzIl0sIm5hbWVzIjpbIkVkaXRDb21wYW55IiwiY29tcGFueSIsInVzZVN0YXRlIiwiY29tcGFueV9uYW1lIiwic2V0Q29tcGFueU5hbWUiLCJjb250YWN0X25hbWUiLCJzZXRDb250YWN0TmFtZSIsImNvbXBhbnlfcGhvbmUiLCJzZXRDb21wYW55UGhvbmUiLCJjb21wYW55X2FkZHJlc3MiLCJzZXRDb21wYW55QWRkcmVzcyIsImNvbXBhbnlfbWFpbCIsInNldENvbXBhbnlNYWlsIiwidXBkYXRlSW5mbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJmZXRjaCIsImNvbXBhbnlfaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiY2FuY2VsVXBkYXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUNELE9BQU8sQ0FBQ0UsWUFBVCxDQUZkO0FBQUEsTUFFMUJBLFlBRjBCO0FBQUEsTUFFWkMsY0FGWTs7QUFBQSxtQkFHTUYsc0RBQVEsQ0FBQ0QsT0FBTyxDQUFDSSxZQUFULENBSGQ7QUFBQSxNQUcxQkEsWUFIMEI7QUFBQSxNQUdaQyxjQUhZOztBQUFBLG1CQUlRSixzREFBUSxDQUFDRCxPQUFPLENBQUNNLGFBQVQsQ0FKaEI7QUFBQSxNQUkxQkEsYUFKMEI7QUFBQSxNQUlYQyxlQUpXOztBQUFBLG1CQUtZTixzREFBUSxDQUFDRCxPQUFPLENBQUNRLGVBQVQsQ0FMcEI7QUFBQSxNQUsxQkEsZUFM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QUcsQ0FBQztBQUFBLHlCQUFJRixjQUFjLENBQUNFLENBQUMsQ0FBQ2dCLE1BQUYsQ0FBU0MsS0FBVixDQUFsQjtBQUFBO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZBLGVBc0NBO0FBQUssdUJBQU0sY0FBWDtBQUFBLHNDQUNFO0FBQ0Usb0JBQUksRUFBQyxRQURQO0FBRUUseUJBQU0saUJBRlI7QUFHRSxnQ0FBYSxPQUhmO0FBSUUsdUJBQU8sRUFBSSxpQkFBQWpCLENBQUM7QUFBQSx5QkFBSUQsVUFBVSxDQUFDQyxDQUFELENBQWQ7QUFBQSxpQkFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQVFFO0FBQVEsb0JBQUksRUFBQyxRQUFiO0FBQ0UseUJBQU0sZ0JBRFI7QUFFRSxnQ0FBYSxPQUZmO0FBR0UsdUJBQU8sRUFBRTtBQUFBLHlCQUFNZSxZQUFZLEVBQWxCO0FBQUEsaUJBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUZILENBdkhEOztHQUFNN0IsVzs7S0FBQUEsVztBQXlIU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ29tcGFueUxpc3QuYzFlNDU2MjY5MTY3MzQ3NTdiZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBFZGl0Q29tcGFueSA9ICh7IGNvbXBhbnkgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjb21wYW55X25hbWUsIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKGNvbXBhbnkuY29tcGFueV9uYW1lKTtcclxuICAgIGNvbnN0IFtjb250YWN0X25hbWUsIHNldENvbnRhY3ROYW1lXSA9IHVzZVN0YXRlKGNvbXBhbnkuY29udGFjdF9uYW1lKTtcclxuICAgIGNvbnN0IFtjb21wYW55X3Bob25lLCBzZXRDb21wYW55UGhvbmVdID0gdXNlU3RhdGUoY29tcGFueS5jb21wYW55X3Bob25lKTtcclxuICAgIGNvbnN0IFtjb21wYW55X2FkZHJlc3MsIHNldENvbXBhbnlBZGRyZXNzXSA9IHVzZVN0YXRlKGNvbXBhbnkuY29tcGFueV9hZGRyZXNzKTtcclxuICAgIGNvbnN0IFtjb21wYW55X21haWwsIHNldENvbXBhbnlNYWlsXSA9IHVzZVN0YXRlKGNvbXBhbnkuY29tcGFueV9tYWlsKTtcclxuXHJcbiAgLy8gRWRpdCBDb21wYW55X0NvbXBhbnlfTmFtZVxyXG4gIGNvbnN0IHVwZGF0ZUluZm8gPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7Y29tcGFueV9uYW1lLCBjb250YWN0X25hbWUsIGNvbXBhbnlfcGhvbmUsIGNvbXBhbnlfYWRkcmVzcywgY29tcGFueV9tYWlsfTtcclxuICAgICAgLy9odHRwczovL2ZpbmFsLXByb2plY3QuaGVyb2t1YXBwLmNvbS9jb21wYW55XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jb21wYW55LyR7Y29tcGFueS5jb21wYW55X2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwifSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL1wiO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgICAvLyBJZiBlZGl0IGlzIGNhbmNlbGxlZCB0aGUgcHJpb3IgY2hhbmdlcyBhcmUgbm90IGNhcnJpZWQgb3ZlciBpZiB5b3Ugd2FubmEgZmluaXNoIG9yIGNoYW5nZSB5b3VyIGVkaXRcclxuICAgIGNvbnN0IGNhbmNlbFVwZGF0ZSA9ICgpID0+IHtcclxuICAgICAgc2V0Q29tcGFueU5hbWUoY29tcGFueS5jb21wYW55X25hbWUpIFxyXG4gICAgICBzZXRDb250YWN0TmFtZShjb21wYW55LmNvbnRhY3RfbmFtZSlcclxuICAgICAgc2V0Q29tcGFueVBob25lKGNvbXBhbnkuY29tcGFueV9waG9uZSlcclxuICAgICAgc2V0Q29tcGFueUFkZHJlc3MoY29tcGFueS5jb21wYW55X2FkZHJlc3MpXHJcbiAgICAgIHNldENvbXBhbnlNYWlsKGNvbXBhbnkuY29tcGFueV9tYWlsKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCIgXHJcbiAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiAgXHJcbiAgICAgICAgICAgIGRhdGEtdGFyZ2V0PXtgI2lkJHtjb21wYW55LmNvbXBhbnlfaWR9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICB7LypcclxuICAgICAgICAgICAgaWQgPSBpZDEwXHJcbiAgICAgICAgICAqL31cclxuICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbmNlbFVwZGF0ZSgpfVxyXG4gICAgICAgICAgICBjbGFzcz1cIm1vZGFsXCIgaWQ9e2BpZCR7Y29tcGFueS5jb21wYW55X2lkfWB9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkVkaXQgQ29tcGFueTwvaDQ+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNsb3NlXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjYW5jZWxVcGRhdGUoKX1cclxuICAgICAgICAgICAgICAgID4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X25hbWV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldENvbXBhbnlOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIG10LTNcIn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29udGFjdF9uYW1lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBzZXRDb250YWN0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBtdC0zXCJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlfcGhvbmV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldENvbXBhbnlQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIG10LTNcIn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9hZGRyZXNzfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBzZXRDb21wYW55QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIG10LTNcIn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9tYWlsfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBzZXRDb21wYW55TWFpbChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZSA9PiB1cGRhdGVJbmZvKGUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbmNlbFVwZGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0Q29tcGFueTsiXSwic291cmNlUm9vdCI6IiJ9