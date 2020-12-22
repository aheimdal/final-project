module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/CompanyList.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/company/EditCompany.js":
/*!*******************************************!*\
  !*** ./components/company/EditCompany.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\components\\company\\EditCompany.js";


const EditCompany = ({
  company
}) => {
  const {
    0: company_name,
    1: setCompanyName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(company.company_name);
  const {
    0: contact_name,
    1: setContactName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(company.contact_name);
  const {
    0: company_phone,
    1: setCompanyPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(company.company_phone);
  const {
    0: company_address,
    1: setCompanyAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(company.company_address);
  const {
    0: company_mail,
    1: setCompanyMail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(company.company_mail); // Edit Company_Company_Name

  const updateInfo = async e => {
    e.preventDefault();

    try {
      const body = {
        company_name,
        contact_name,
        company_phone,
        company_address,
        company_mail
      };
      const response = await fetch(`/company/${company.company_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }; // If edit is cancelled the prior changes are not carried over if you wanna finish or change your edit


  const cancelUpdate = () => {
    setCompanyName(company.company_name);
    setContactName(company.contact_name);
    setCompanyPhone(company.company_phone);
    setCompanyAddress(company.company_address);
    setCompanyMail(company.company_mail);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        class: "btn btn-outline-success",
        "data-toggle": "modal",
        "data-target": `#id${company.company_id}`,
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: () => cancelUpdate(),
        class: "modal",
        id: `id${company.company_id}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "modal-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "modal-header",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                class: "modal-title",
                children: "Edit Company"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                class: "close",
                "data-dismiss": "modal",
                onClick: () => cancelUpdate(),
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "modal-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: company_name,
                onChange: e => setCompanyName(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: contact_name,
                onChange: e => setContactName(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: company_phone,
                onChange: e => setCompanyPhone(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: company_address,
                onChange: e => setCompanyAddress(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: company_mail,
                onChange: e => setCompanyMail(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "modal-footer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                class: "btn btn-success",
                "data-dismiss": "modal",
                onClick: e => updateInfo(e),
                children: "Save"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                class: "btn btn-danger",
                "data-dismiss": "modal",
                onClick: () => cancelUpdate(),
                children: "Close"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditCompany);

/***/ }),

/***/ "./components/company/InputCompany.js":
/*!********************************************!*\
  !*** ./components/company/InputCompany.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\components\\company\\InputCompany.js";


const InputCompany = () => {
  const {
    0: company_name,
    1: setCompanyName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: contact_name,
    1: setContactName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: company_phone,
    1: setCompanyPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: company_address,
    1: setCompanyAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: company_mail,
    1: setCompanyMail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  const onSubmitProject = async e => {
    e.preventDefault();

    try {
      const body = {
        company_name,
        contact_name,
        company_phone,
        company_address,
        company_mail
      }; //https://final-project.herokuapp.com/project

      const response = await fetch("/company", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      window.location = "/CompanyList";
    } catch (err) {
      console.error(err.message);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "container-fluid h-auto d-flex flex-column bd-highlight mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        class: "text-center mt-3",
        children: "Add New Company"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        class: "form-row",
        onSubmit: onSubmitProject,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            class: "form-control mt-1",
            type: "text",
            placeholder: "Enter Company Name",
            value: company_name,
            onChange: e => setCompanyName(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            class: "form-control mt-1",
            type: "text",
            placeholder: "Enter Contact Name",
            value: contact_name,
            onChange: e => setContactName(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            class: "form-control mt-1",
            type: "text",
            placeholder: "Enter Company Phone Number",
            value: company_phone,
            onChange: e => setCompanyPhone(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "col",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            class: "form-control mt-1",
            type: "text",
            placeholder: "Enter Company Address",
            value: company_address,
            onChange: e => setCompanyAddress(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 18
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            class: "form-control mt-1",
            type: "text",
            placeholder: "Enter Company Mail",
            value: company_mail,
            onChange: e => setCompanyMail(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 18
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "d-flex flex-column",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              class: "btn btn-success mt-2 p-1",
              children: "Add"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (InputCompany);

/***/ }),

/***/ "./components/company/ListCompany.js":
/*!*******************************************!*\
  !*** ./components/company/ListCompany.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditCompany__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditCompany */ "./components/company/EditCompany.js");
/* harmony import */ var _InputCompany__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InputCompany */ "./components/company/InputCompany.js");

var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\components\\company\\ListCompany.js";




const ListCompany = () => {
  const {
    0: companies,
    1: setCompanies
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Delete function

  const deleteCompanies = async id => {
    try {
      //https://final-project.herokuapp.com/project
      const deleteProject = await fetch(`/company/${id}`, {
        method: "DELETE"
      });
      setCompanies(companies.filter(company => company.company_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }; // Fetch data function 


  const getCompanies = async () => {
    try {
      //https://final-project.herokuapp.com/project
      const response = await fetch("/company");
      const jsonData = await response.json();
      setCompanies(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getCompanies();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_InputCompany__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "d-flex flex-column bd-highlight mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        class: "text-center p-3",
        children: "Company List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        class: "table mt-5 text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Company Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Contact Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Company Phone"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Company Address"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Company mail"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: companies.map(company => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: company.company_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: company.contact_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: company.company_phone
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: company.company_address
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: company.company_mail
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EditCompany__WEBPACK_IMPORTED_MODULE_2__["default"], {
                company: company
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                class: "btn btn-danger",
                onClick: () => deleteCompanies(company.company_id),
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 13
            }, undefined)]
          }, company.company_id, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 5
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ListCompany);

/***/ }),

/***/ "./pages/CompanyList.js":
/*!******************************!*\
  !*** ./pages/CompanyList.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_company_ListCompany__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/company/ListCompany */ "./components/company/ListCompany.js");

var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\pages\\CompanyList.js";

 // Company Components


function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "jumbotron jumbotron-fluid",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          class: "text-center",
          children: "Clockin Project"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          class: "text-center",
          children: "Author: Anton H. Heimdal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_company_ListCompany__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "d-flex flex-column",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        class: "btn btn-primary m-3 p-2",
        onClick: () => {
          window.location.href = '/';
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 12
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21wYW55L0VkaXRDb21wYW55LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tcGFueS9JbnB1dENvbXBhbnkuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21wYW55L0xpc3RDb21wYW55LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL0NvbXBhbnlMaXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiRWRpdENvbXBhbnkiLCJjb21wYW55IiwiY29tcGFueV9uYW1lIiwic2V0Q29tcGFueU5hbWUiLCJ1c2VTdGF0ZSIsImNvbnRhY3RfbmFtZSIsInNldENvbnRhY3ROYW1lIiwiY29tcGFueV9waG9uZSIsInNldENvbXBhbnlQaG9uZSIsImNvbXBhbnlfYWRkcmVzcyIsInNldENvbXBhbnlBZGRyZXNzIiwiY29tcGFueV9tYWlsIiwic2V0Q29tcGFueU1haWwiLCJ1cGRhdGVJbmZvIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJjb21wYW55X2lkIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJjYW5jZWxVcGRhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIklucHV0Q29tcGFueSIsIm9uU3VibWl0UHJvamVjdCIsIkxpc3RDb21wYW55IiwiY29tcGFuaWVzIiwic2V0Q29tcGFuaWVzIiwiZGVsZXRlQ29tcGFuaWVzIiwiaWQiLCJkZWxldGVQcm9qZWN0IiwiZmlsdGVyIiwiZ2V0Q29tcGFuaWVz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O0FBQUE7QUFBQSxZQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JELEM7Ozs7Ozs7Ozs7O0FDaENELHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL0NvbXBhbnlMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9Db21wYW55TGlzdC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBFZGl0Q29tcGFueSA9ICh7IGNvbXBhbnkgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjb21wYW55X25hbWUsIHNldENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKGNvbXBhbnkuY29tcGFueV9uYW1lKTtcclxuICAgIGNvbnN0IFtjb250YWN0X25hbWUsIHNldENvbnRhY3ROYW1lXSA9IHVzZVN0YXRlKGNvbXBhbnkuY29udGFjdF9uYW1lKTtcclxuICAgIGNvbnN0IFtjb21wYW55X3Bob25lLCBzZXRDb21wYW55UGhvbmVdID0gdXNlU3RhdGUoY29tcGFueS5jb21wYW55X3Bob25lKTtcclxuICAgIGNvbnN0IFtjb21wYW55X2FkZHJlc3MsIHNldENvbXBhbnlBZGRyZXNzXSA9IHVzZVN0YXRlKGNvbXBhbnkuY29tcGFueV9hZGRyZXNzKTtcclxuICAgIGNvbnN0IFtjb21wYW55X21haWwsIHNldENvbXBhbnlNYWlsXSA9IHVzZVN0YXRlKGNvbXBhbnkuY29tcGFueV9tYWlsKTtcclxuXHJcbiAgLy8gRWRpdCBDb21wYW55X0NvbXBhbnlfTmFtZVxyXG4gIGNvbnN0IHVwZGF0ZUluZm8gPSBhc3luYyBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSB7Y29tcGFueV9uYW1lLCBjb250YWN0X25hbWUsIGNvbXBhbnlfcGhvbmUsIGNvbXBhbnlfYWRkcmVzcywgY29tcGFueV9tYWlsfTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2NvbXBhbnkvJHtjb21wYW55LmNvbXBhbnlfaWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgIC8vIElmIGVkaXQgaXMgY2FuY2VsbGVkIHRoZSBwcmlvciBjaGFuZ2VzIGFyZSBub3QgY2FycmllZCBvdmVyIGlmIHlvdSB3YW5uYSBmaW5pc2ggb3IgY2hhbmdlIHlvdXIgZWRpdFxyXG4gICAgY29uc3QgY2FuY2VsVXBkYXRlID0gKCkgPT4ge1xyXG4gICAgICBzZXRDb21wYW55TmFtZShjb21wYW55LmNvbXBhbnlfbmFtZSkgXHJcbiAgICAgIHNldENvbnRhY3ROYW1lKGNvbXBhbnkuY29udGFjdF9uYW1lKVxyXG4gICAgICBzZXRDb21wYW55UGhvbmUoY29tcGFueS5jb21wYW55X3Bob25lKVxyXG4gICAgICBzZXRDb21wYW55QWRkcmVzcyhjb21wYW55LmNvbXBhbnlfYWRkcmVzcylcclxuICAgICAgc2V0Q29tcGFueU1haWwoY29tcGFueS5jb21wYW55X21haWwpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjEyLjQvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiBcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiICBcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9e2AjaWQke2NvbXBhbnkuY29tcGFueV9pZH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICBpZCA9IGlkMTBcclxuICAgICAgICAgICovfVxyXG4gICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FuY2VsVXBkYXRlKCl9XHJcbiAgICAgICAgICAgIGNsYXNzPVwibW9kYWxcIiBpZD17YGlkJHtjb21wYW55LmNvbXBhbnlfaWR9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RWRpdCBDb21wYW55PC9oND5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2VcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbmNlbFVwZGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBtdC0zXCJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbXBhbnlfbmFtZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0Q29tcGFueU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0X25hbWV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldENvbnRhY3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiZm9ybS1jb250cm9sIG10LTNcIn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9waG9uZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0Q29tcGFueVBob25lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X2FkZHJlc3N9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldENvbXBhbnlBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X21haWx9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBlID0+IHNldENvbXBhbnlNYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIFxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljayA9IHtlID0+IHVwZGF0ZUluZm8oZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiIFxyXG4gICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FuY2VsVXBkYXRlKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRDb21wYW55OyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBJbnB1dENvbXBhbnkgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NvbXBhbnlfbmFtZSwgc2V0Q29tcGFueU5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY29udGFjdF9uYW1lLCBzZXRDb250YWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjb21wYW55X3Bob25lLCBzZXRDb21wYW55UGhvbmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY29tcGFueV9hZGRyZXNzLCBzZXRDb21wYW55QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjb21wYW55X21haWwsIHNldENvbXBhbnlNYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IG9uU3VibWl0UHJvamVjdCA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IHtjb21wYW55X25hbWUsIGNvbnRhY3RfbmFtZSwgY29tcGFueV9waG9uZSwgY29tcGFueV9hZGRyZXNzLCBjb21wYW55X21haWx9O1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vZmluYWwtcHJvamVjdC5oZXJva3VhcHAuY29tL3Byb2plY3RcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9jb21wYW55XCIse1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFwiL0NvbXBhbnlMaXN0XCI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICB7LypcclxuICAgICAgICBIw6lyIMOhIMOpZyBlZnRpciBhw7AgbWXDsGjDtm5kbGEgw75ldHRhIG1lw7AgQm9vdHN0cmFwIHRpbCBhw7AgYnJleXRhIGHDsGVpbnMgw7p0bGl0IHPDrcOwdW5uYXJcclxuICAgICAgICBNdW4gbm90YWFzdCB2acOwIC0gaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ib290c3RyYXA0L2Jvb3RzdHJhcF9mb3Jtcy5hc3AgKEZvcm0gLSBSb3cgJiBHcmlkKVxyXG4gICAgKi99XHJcbiAgICA8aGVhZGVyPlxyXG4gICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9hamF4Lmdvb2dsZWFwaXMuY29tL2FqYXgvbGlicy9qcXVlcnkvMS4xMi40L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPGRpdiBjbGFzcyA9IFwiY29udGFpbmVyLWZsdWlkIGgtYXV0byBkLWZsZXggZmxleC1jb2x1bW4gYmQtaGlnaGxpZ2h0IG1iLTNcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC0zXCI+QWRkIE5ldyBDb21wYW55PC9oMT5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0tcm93XCIgb25TdWJtaXQ9e29uU3VibWl0UHJvamVjdH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDb21wYW55IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X25hbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbXBhbnlOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBDb250YWN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250YWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q29udGFjdE5hbWUoZS50YXJnZXQudmFsdWUpfSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ29tcGFueSBQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb21wYW55X3Bob25lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbXBhbnlQaG9uZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ29tcGFueSBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9hZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbXBhbnlBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtdC0xXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ29tcGFueSBNYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29tcGFueV9tYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldENvbXBhbnlNYWlsKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtdC0yIHAtMVwiPkFkZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dENvbXBhbnk7IiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRWRpdENvbXBhbnkgZnJvbSAnLi9FZGl0Q29tcGFueSc7XHJcbmltcG9ydCBJbnB1dENvbXBhbnkgZnJvbSAnLi9JbnB1dENvbXBhbnknO1xyXG5cclxuY29uc3QgTGlzdENvbXBhbnkgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NvbXBhbmllcywgc2V0Q29tcGFuaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyBEZWxldGUgZnVuY3Rpb25cclxuICAgIGNvbnN0IGRlbGV0ZUNvbXBhbmllcyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly9maW5hbC1wcm9qZWN0Lmhlcm9rdWFwcC5jb20vcHJvamVjdFxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gYXdhaXQgZmV0Y2goYC9jb21wYW55LyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0Q29tcGFuaWVzKGNvbXBhbmllcy5maWx0ZXIoY29tcGFueSA9PiBjb21wYW55LmNvbXBhbnlfaWQgIT09IGlkKSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIGRhdGEgZnVuY3Rpb24gXHJcbiAgICBjb25zdCBnZXRDb21wYW5pZXMgPSBhc3luYygpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy9odHRwczovL2ZpbmFsLXByb2plY3QuaGVyb2t1YXBwLmNvbS9wcm9qZWN0XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvY29tcGFueVwiKTtcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRDb21wYW5pZXMoanNvbkRhdGEpOyAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDb21wYW5pZXMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gPEZyYWdtZW50PlxyXG4gICAgPGhlYWRlcj5cclxuICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxJbnB1dENvbXBhbnkvPlxyXG4gICAgPGRpdiBjbGFzcyA9IFwiZC1mbGV4IGZsZXgtY29sdW1uIGJkLWhpZ2hsaWdodCBtYi0zXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1jZW50ZXIgcC0zXCI+Q29tcGFueSBMaXN0PC9oMT4gIFxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIG10LTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNvbXBhbnkgTmFtZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+Q29udGFjdCBOYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Db21wYW55IFBob25lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Db21wYW55IEFkZHJlc3M8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNvbXBhbnkgbWFpbDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgIDx0Ym9keT5cclxuICAgICAgICB7LypcclxuICAgICAgICBSZWZlcmVuY2UgZnlyaXIgdXBwYnlnZ2luZ3UgdMO2Zmx1IHNlbSDDqWcgbXVuIG5vdGEgLSBNdW4gYnJleXRhc3QgZWl0dGh2YcOwXHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICA8dGQ+w41zdGFrIGVoZjwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5Eb2U8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+am9obkBleGFtcGxlLmNvbTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5qb2huQGV4YW1wbGUuY29tPC90ZD5cclxuICAgICAgICAgICAgPHRkPmpvaG5AZXhhbXBsZS5jb208L3RkPlxyXG4gICAgICAgICAgICA8dGQ+am9obkBleGFtcGxlLmNvbTwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICAqLyB9XHJcbiAgICAgICAgey8qIFRoaXMgaXMgaG93IEkgbWFwIHRvIGJlIGFibGUgdG8gdXNlIHRoZSBkYXRhICovfVxyXG4gICAgICAgIHtjb21wYW5pZXMubWFwKGNvbXBhbnkgPT4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2NvbXBhbnkuY29tcGFueV9pZH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2NvbXBhbnkuY29tcGFueV9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2NvbXBhbnkuY29udGFjdF9uYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e2NvbXBhbnkuY29tcGFueV9waG9uZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntjb21wYW55LmNvbXBhbnlfYWRkcmVzc308L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntjb21wYW55LmNvbXBhbnlfbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxFZGl0Q29tcGFueSBjb21wYW55PXtjb21wYW55fS8+PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCk9PiBkZWxldGVDb21wYW5pZXMoY29tcGFueS5jb21wYW55X2lkKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICApKX1cclxuICAgIDwvdGJvZHk+XHJcbiAgPC90YWJsZT5cclxuICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RDb21wYW55OyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuXHJcbmltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBDb21wYW55IENvbXBvbmVudHNcclxuaW1wb3J0IExpc3RDb21wYW55IGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGFueS9MaXN0Q29tcGFueSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uIGp1bWJvdHJvbi1mbHVpZFwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtY2VudGVyXCI+Q2xvY2tpbiBQcm9qZWN0PC9oMT5cclxuICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPkF1dGhvcjogQW50b24gSC4gSGVpbWRhbDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaXN0Q29tcGFueS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IG0tMyBwLTJcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+PGgxPkJhY2s8L2gxPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==