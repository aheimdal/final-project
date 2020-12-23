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
        lineNumber: 46,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
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
        lineNumber: 51,
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
                lineNumber: 68,
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
                lineNumber: 69,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
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
                lineNumber: 77,
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
                lineNumber: 82,
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
                lineNumber: 87,
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
                lineNumber: 92,
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
                lineNumber: 97,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 76,
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
                lineNumber: 105,
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
                lineNumber: 112,
                columnNumber: 15
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wYW55L0VkaXRDb21wYW55LmpzIl0sIm5hbWVzIjpbIkVkaXRDb21wYW55IiwiY29tcGFueSIsInVzZVN0YXRlIiwiY29tcGFueV9uYW1lIiwic2V0Q29tcGFueU5hbWUiLCJjb250YWN0X25hbWUiLCJzZXRDb250YWN0TmFtZSIsImNvbXBhbnlfcGhvbmUiLCJzZXRDb21wYW55UGhvbmUiLCJjb21wYW55X2FkZHJlc3MiLCJzZXRDb21wYW55QWRkcmVzcyIsImNvbXBhbnlfbWFpbCIsInNldENvbXBhbnlNYWlsIiwidXBkYXRlSW5mbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJmZXRjaCIsImNvbXBhbnlfaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwid2luZG93IiwibG9jYXRpb24iLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiY2FuY2VsVXBkYXRlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUNELE9BQU8sQ0FBQ0UsWUFBVCxDQUZkO0FBQUEsTUFFMUJBLFlBRjBCO0FBQUEsTUFFWkMsY0FGWTs7QUFBQSxtQkFHTUYsc0RBQVEsQ0FBQ0QsT0FBTyxDQUFDSSxZQUFULENBSGQ7QUFBQSxNQUcxQkEsWUFIMEI7QUFBQSxNQUdaQyxjQUhZOztBQUFBLG1CQUlRSixzREFBUSxDQUFDRCxPQUFPLENBQUNNLGFBQVQsQ0FKaEI7QUFBQSxNQUkxQkEsYUFKMEI7QUFBQSxNQUlYQyxlQUpXOztBQUFBLG1CQUtZTixzREFBUSxDQUFDRCxPQUFPLENBQUNRLGVBQVQsQ0FMcEI7QUFBQSxNQUsxQkEsZUFM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QUFHLENBQUM7QUFBQSx5QkFBSUYsY0FBYyxDQUFDRSxDQUFDLENBQUNnQixNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQTtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWQSxlQXNDQTtBQUFLLHVCQUFNLGNBQVg7QUFBQSxzQ0FDRTtBQUNFLG9CQUFJLEVBQUMsUUFEUDtBQUVFLHlCQUFNLGlCQUZSO0FBR0UsZ0NBQWEsT0FIZjtBQUlFLHVCQUFPLEVBQUksaUJBQUFqQixDQUFDO0FBQUEseUJBQUlELFVBQVUsQ0FBQ0MsQ0FBRCxDQUFkO0FBQUEsaUJBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFRRTtBQUFRLG9CQUFJLEVBQUMsUUFBYjtBQUNFLHlCQUFNLGdCQURSO0FBRUUsZ0NBQWEsT0FGZjtBQUdFLHVCQUFPLEVBQUU7QUFBQSx5QkFBTWUsWUFBWSxFQUFsQjtBQUFBLGlCQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1GSCxDQTNIRDs7R0FBTTdCLFc7O0tBQUFBLFc7QUE2SFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL0NvbXBhbnlMaXN0LmMyODQ3NjRlYTA3ZDAzY2NjOWFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRWRpdENvbXBhbnkgPSAoeyBjb21wYW55IH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBbY29tcGFueV9uYW1lLCBzZXRDb21wYW55TmFtZV0gPSB1c2VTdGF0ZShjb21wYW55LmNvbXBhbnlfbmFtZSk7XHJcbiAgICBjb25zdCBbY29udGFjdF9uYW1lLCBzZXRDb250YWN0TmFtZV0gPSB1c2VTdGF0ZShjb21wYW55LmNvbnRhY3RfbmFtZSk7XHJcbiAgICBjb25zdCBbY29tcGFueV9waG9uZSwgc2V0Q29tcGFueVBob25lXSA9IHVzZVN0YXRlKGNvbXBhbnkuY29tcGFueV9waG9uZSk7XHJcbiAgICBjb25zdCBbY29tcGFueV9hZGRyZXNzLCBzZXRDb21wYW55QWRkcmVzc10gPSB1c2VTdGF0ZShjb21wYW55LmNvbXBhbnlfYWRkcmVzcyk7XHJcbiAgICBjb25zdCBbY29tcGFueV9tYWlsLCBzZXRDb21wYW55TWFpbF0gPSB1c2VTdGF0ZShjb21wYW55LmNvbXBhbnlfbWFpbCk7XHJcblxyXG4gIC8vIEVkaXQgQ29tcGFueV9Db21wYW55X05hbWVcclxuICBjb25zdCB1cGRhdGVJbmZvID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBib2R5ID0ge2NvbXBhbnlfbmFtZSwgY29udGFjdF9uYW1lLCBjb21wYW55X3Bob25lLCBjb21wYW55X2FkZHJlc3MsIGNvbXBhbnlfbWFpbH07XHJcbiAgICAgIFxyXG4gICAgICAvL3Byb3h5XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvY29tcGFueS8ke2NvbXBhbnkuY29tcGFueV9pZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSBcIi9cIjtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgLy8gSWYgZWRpdCBpcyBjYW5jZWxsZWQgdGhlIHByaW9yIGNoYW5nZXMgYXJlIG5vdCBjYXJyaWVkIG92ZXIgaWYgeW91IHdhbm5hIGZpbmlzaCBvciBjaGFuZ2UgeW91ciBlZGl0XHJcbiAgICBjb25zdCBjYW5jZWxVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgIHNldENvbXBhbnlOYW1lKGNvbXBhbnkuY29tcGFueV9uYW1lKSBcclxuICAgICAgc2V0Q29udGFjdE5hbWUoY29tcGFueS5jb250YWN0X25hbWUpXHJcbiAgICAgIHNldENvbXBhbnlQaG9uZShjb21wYW55LmNvbXBhbnlfcGhvbmUpXHJcbiAgICAgIHNldENvbXBhbnlBZGRyZXNzKGNvbXBhbnkuY29tcGFueV9hZGRyZXNzKVxyXG4gICAgICBzZXRDb21wYW55TWFpbChjb21wYW55LmNvbXBhbnlfbWFpbClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiIFxyXG4gICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgIFxyXG4gICAgICAgICAgICBkYXRhLXRhcmdldD17YCNpZCR7Y29tcGFueS5jb21wYW55X2lkfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgey8qXHJcbiAgICAgICAgICAgIGlkID0gaWQxMFxyXG4gICAgICAgICAgKi99XHJcbiAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjYW5jZWxVcGRhdGUoKX1cclxuICAgICAgICAgICAgY2xhc3M9XCJtb2RhbFwiIGlkPXtgaWQke2NvbXBhbnkuY29tcGFueV9pZH1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5FZGl0IENvbXBhbnk8L2g0PlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjbG9zZVwiIFxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FuY2VsVXBkYXRlKCl9XHJcbiAgICAgICAgICAgICAgICA+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIG10LTNcIn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9uYW1lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBzZXRDb21wYW55TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBtdC0zXCJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRhY3RfbmFtZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0Q29udGFjdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X3Bob25lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBzZXRDb21wYW55UGhvbmUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBtdC0zXCJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlfYWRkcmVzc30gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0Q29tcGFueUFkZHJlc3MoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBtdC0zXCJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlfbWFpbH0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0Q29tcGFueU1haWwoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrID0ge2UgPT4gdXBkYXRlSW5mbyhlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTYXZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjYW5jZWxVcGRhdGUoKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdENvbXBhbnk7Il0sInNvdXJjZVJvb3QiOiIifQ==