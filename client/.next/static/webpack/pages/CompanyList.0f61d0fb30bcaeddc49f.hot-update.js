webpackHotUpdate_N_E("pages/CompanyList",{

/***/ "./components/company/ListCompany.js":
/*!*******************************************!*\
  !*** ./components/company/ListCompany.js ***!
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
/* harmony import */ var _EditCompany__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditCompany */ "./components/company/EditCompany.js");
/* harmony import */ var _InputCompany__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InputCompany */ "./components/company/InputCompany.js");




var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\components\\company\\ListCompany.js",
    _this = undefined,
    _s = $RefreshSig$();





var ListCompany = function ListCompany() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      companies = _useState[0],
      setCompanies = _useState[1]; // Delete function


  var deleteCompanies = /*#__PURE__*/function () {
    var _ref = Object(C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
      var deleteProject;
      return C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch("company/".concat(id), {
                method: "DELETE"
              });

            case 3:
              deleteProject = _context.sent;
              setCompanies(companies.filter(function (company) {
                return company.company_id !== id;
              }));
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0.message);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function deleteCompanies(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // Fetch data function 


  var getCompanies = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var response, jsonData;
      return C_Users_heimd_OneDrive_Documents_Lokaverkefni_Three_final_project_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return fetch("company");

            case 3:
              response = _context2.sent;
              _context2.next = 6;
              return response.json();

            case 6:
              jsonData = _context2.sent;
              setCompanies(jsonData);
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0.message);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 10]]);
    }));

    return function getCompanies() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getCompanies();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_InputCompany__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      "class": "d-flex flex-column bd-highlight mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
        "class": "text-center p-3",
        children: "Company List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("table", {
        "class": "table mt-5 text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Company Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Contact Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Company Phone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Company Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {
              children: "Company mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tbody", {
          children: companies.map(function (company) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("tr", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: company.company_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: company.contact_name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: company.company_phone
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: company.company_address
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: company.company_mail
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_EditCompany__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  company: company
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("td", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                  "class": "btn btn-danger",
                  onClick: function onClick() {
                    return deleteCompanies(company.company_id);
                  },
                  children: "Delete"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 13
              }, _this)]
            }, company.company_id, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 12
  }, _this);
};

_s(ListCompany, "fvSMykEKVRSxSgZ7G/ZC4cRqlrw=");

_c = ListCompany;
/* harmony default export */ __webpack_exports__["default"] = (ListCompany);

var _c;

$RefreshReg$(_c, "ListCompany");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21wYW55L0xpc3RDb21wYW55LmpzIl0sIm5hbWVzIjpbIkxpc3RDb21wYW55IiwidXNlU3RhdGUiLCJjb21wYW5pZXMiLCJzZXRDb21wYW5pZXMiLCJkZWxldGVDb21wYW5pZXMiLCJpZCIsImZldGNoIiwibWV0aG9kIiwiZGVsZXRlUHJvamVjdCIsImZpbHRlciIsImNvbXBhbnkiLCJjb21wYW55X2lkIiwiY29uc29sZSIsImVycm9yIiwibWVzc2FnZSIsImdldENvbXBhbmllcyIsInJlc3BvbnNlIiwianNvbiIsImpzb25EYXRhIiwidXNlRWZmZWN0IiwibWFwIiwiY29tcGFueV9uYW1lIiwiY29udGFjdF9uYW1lIiwiY29tcGFueV9waG9uZSIsImNvbXBhbnlfYWRkcmVzcyIsImNvbXBhbnlfbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBRVlDLHNEQUFRLENBQUMsRUFBRCxDQUZwQjtBQUFBLE1BRWZDLFNBRmU7QUFBQSxNQUVKQyxZQUZJLGlCQUl0Qjs7O0FBQ0EsTUFBTUMsZUFBZTtBQUFBLDBXQUFHLGlCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHWUMsS0FBSyxtQkFBWUQsRUFBWixHQUFrQjtBQUMvQ0Usc0JBQU0sRUFBRTtBQUR1QyxlQUFsQixDQUhqQjs7QUFBQTtBQUdWQywyQkFIVTtBQU9oQkwsMEJBQVksQ0FBQ0QsU0FBUyxDQUFDTyxNQUFWLENBQWlCLFVBQUFDLE9BQU87QUFBQSx1QkFBSUEsT0FBTyxDQUFDQyxVQUFSLEtBQXVCTixFQUEzQjtBQUFBLGVBQXhCLENBQUQsQ0FBWjtBQVBnQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNoQk8scUJBQU8sQ0FBQ0MsS0FBUixD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QUNDLFVBQVQsQ0FBcEI7QUFBQSxtQkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBBO0FBQUEsZUFBU0QsT0FBTyxDQUFDQyxVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURrQjtBQUFBLFdBQXJCO0FBYkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQW1ESCxDQXpGRDs7R0FBTVgsVzs7S0FBQUEsVztBQTJGU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvQ29tcGFueUxpc3QuMGY2MWQwZmIzMGJjYWVkZGM0OWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVkaXRDb21wYW55IGZyb20gJy4vRWRpdENvbXBhbnknO1xyXG5pbXBvcnQgSW5wdXRDb21wYW55IGZyb20gJy4vSW5wdXRDb21wYW55JztcclxuXHJcbmNvbnN0IExpc3RDb21wYW55ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjb21wYW5pZXMsIHNldENvbXBhbmllc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gRGVsZXRlIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBkZWxldGVDb21wYW5pZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vZmluYWwtcHJvamVjdC5oZXJva3VhcHAuY29tL3Byb2plY3RcclxuICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGF3YWl0IGZldGNoKGBjb21wYW55LyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29tcGFuaWVzKGNvbXBhbmllcy5maWx0ZXIoY29tcGFueSA9PiBjb21wYW55LmNvbXBhbnlfaWQgIT09IGlkKSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIGRhdGEgZnVuY3Rpb24gXHJcbiAgICBjb25zdCBnZXRDb21wYW5pZXMgPSBhc3luYygpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gaHR0cDovL2xvY2FsaG9zdDo1MDAwLyAtIHJ1biBsb2NhbGx5IGZvciB0ZXN0aW5nXHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly9maW5hbC1wcm9qZWN0Lmhlcm9rdWFwcC5jb20vcHJvamVjdFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiY29tcGFueVwiKTtcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRDb21wYW5pZXMoanNvbkRhdGEpOyAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDb21wYW5pZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gPEZyYWdtZW50PlxyXG4gICAgPGhlYWRlcj5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxJbnB1dENvbXBhbnkvPlxyXG4gICAgPGRpdiBjbGFzcyA9IFwiZC1mbGV4IGZsZXgtY29sdW1uIGJkLWhpZ2hsaWdodCBtYi0zXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1jZW50ZXIgcC0zXCI+Q29tcGFueSBMaXN0PC9oMT4gIFxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIG10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNvbXBhbnkgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+Q29udGFjdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Db21wYW55IFBob25lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Db21wYW55IEFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNvbXBhbnkgbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgIDx0Ym9keT5cclxuICAgICAgICB7LypcclxuICAgICAgICBSZWZlcmVuY2UgZnlyaXIgdXBwYnlnZ2luZ3UgdMO2Zmx1IHNlbSDDqWcgbXVuIG5vdGEgLSBNdW4gYnJleXRhc3QgZWl0dGh2YcOwXHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+w41zdGFrIGVoZjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5Eb2U8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+am9obkBleGFtcGxlLmNvbTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5qb2huQGV4YW1wbGUuY29tPC90ZD5cclxuICAgICAgICAgICAgPHRkPmpvaG5AZXhhbXBsZS5jb208L3RkPlxyXG4gICAgICAgICAgICA8dGQ+am9obkBleGFtcGxlLmNvbTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICAqLyB9XHJcbiAgICAgICAgey8qIFRoaXMgaXMgaG93IEkgbWFwIHRvIGJlIGFibGUgdG8gdXNlIHRoZSBkYXRhICovfVxyXG4gICAgICAgIHtjb21wYW5pZXMubWFwKGNvbXBhbnkgPT4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2NvbXBhbnkuY29tcGFueV9pZH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2NvbXBhbnkuY29tcGFueV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2NvbXBhbnkuY29udGFjdF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2NvbXBhbnkuY29tcGFueV9waG9uZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntjb21wYW55LmNvbXBhbnlfYWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntjb21wYW55LmNvbXBhbnlfbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxFZGl0Q29tcGFueSBjb21wYW55PXtjb21wYW55fS8+PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCk9PiBkZWxldGVDb21wYW5pZXMoY29tcGFueS5jb21wYW55X2lkKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgIDwvdGJvZHk+XHJcbiAgPC90YWJsZT5cclxuICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RDb21wYW55OyJdLCJzb3VyY2VSb290IjoiIn0=