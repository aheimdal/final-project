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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ProjectList.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/project/EditProject.js":
/*!*******************************************!*\
  !*** ./components/project/EditProject.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\components\\project\\EditProject.js";


const EditProject = ({
  project
}) => {
  const {
    0: project_company_name,
    1: setProjectCompanyName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(project.project_company_name);
  const {
    0: project_description,
    1: setProjectDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(project.project_description);
  const {
    0: project_location,
    1: setProjectLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(project.project_location);
  const {
    0: project_time,
    1: setProjectTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(project.project_time); // Edit Project_Company_Name

  const updateInfo = async e => {
    e.preventDefault();

    try {
      const body = {
        project_company_name,
        project_description,
        project_location,
        project_time
      }; // proxy

      const response = await fetch(`/project/${project.project_id}`, {
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
    setProjectCompanyName(project.project_company_name);
    setProjectDescription(project.project_description);
    setProjectLocation(project.project_location);
    setProjectTime(project.project_time);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        class: "btn btn-outline-success",
        "data-toggle": "modal",
        "data-target": `#id${project.project_id}`,
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: () => cancelUpdate(),
        class: "modal",
        id: `id${project.project_id}`,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "modal-dialog",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "modal-content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "modal-header",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                class: "modal-title",
                children: "Edit Project"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                class: "close",
                "data-dismiss": "modal",
                onClick: () => cancelUpdate(),
                children: "\xD7"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 13
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              class: "modal-body",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: project_company_name,
                onChange: e => setProjectCompanyName(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: project_description,
                onChange: e => setProjectDescription(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: project_location,
                onChange: e => setProjectLocation(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "text",
                className: "form-control mt-3",
                value: project_time,
                onChange: e => setProjectTime(e.target.value)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
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
                lineNumber: 96,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                type: "button",
                class: "btn btn-danger",
                "data-dismiss": "modal",
                onClick: () => cancelUpdate(),
                children: "Close"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 13
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (EditProject);

/***/ }),

/***/ "./components/project/ListProject.js":
/*!*******************************************!*\
  !*** ./components/project/ListProject.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditProject */ "./components/project/EditProject.js");

var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\components\\project\\ListProject.js";



const ListProject = () => {
  const {
    0: projects,
    1: setProjects
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // Delete function

  const deleteProjects = async id => {
    try {
      //https://final-project.herokuapp.com/project
      const deleteProject = await fetch(`/project/${id}`, {
        method: "DELETE"
      });
      setProjects(projects.filter(project => project.project_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  }; // Fetch data function 


  const getProjects = async () => {
    try {
      //https://final-project.herokuapp.com/project
      const response = await fetch("/project");
      const jsonData = await response.json();
      setProjects(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    getProjects();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      class: "d-flex flex-column bd-highlight mb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        class: "text-center p-3",
        children: "Project List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
        class: "table mt-5 text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Company Name"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Description"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Location"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Total Time"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Edit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
              children: "Delete"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
          children: projects.map(project => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: project.project_company_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: project.project_description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: project.project_location
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: [("0" + Math.floor(project.project_time / 3600) % 24).slice(-2), ":", ("0" + Math.floor(project.project_time / 60) % 60).slice(-2), ":", ("0" + project.project_time % 60).slice(-2)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_EditProject__WEBPACK_IMPORTED_MODULE_2__["default"], {
                project: project
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                class: "btn btn-danger",
                onClick: () => deleteProjects(project.project_id),
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 13
            }, undefined)]
          }, project.project_id, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 5
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 12
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ListProject);

/***/ }),

/***/ "./pages/ProjectList.js":
/*!******************************!*\
  !*** ./pages/ProjectList.js ***!
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
/* harmony import */ var _components_project_ListProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project/ListProject */ "./components/project/ListProject.js");

var _jsxFileName = "C:\\Users\\heimd\\OneDrive\\Documents\\Lokaverkefni\\Three\\final-project\\client\\pages\\ProjectList.js";

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
          lineNumber: 14,
          columnNumber: 7
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "jumbotron jumbotron-fluid",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          class: "text-center",
          children: "Clockin Project"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          class: "text-center",
          children: "Author: Anton H. Heimdal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_project_ListProject__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
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
          lineNumber: 30,
          columnNumber: 10
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wcm9qZWN0L0VkaXRQcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcHJvamVjdC9MaXN0UHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9Qcm9qZWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkVkaXRQcm9qZWN0IiwicHJvamVjdCIsInByb2plY3RfY29tcGFueV9uYW1lIiwic2V0UHJvamVjdENvbXBhbnlOYW1lIiwidXNlU3RhdGUiLCJwcm9qZWN0X2Rlc2NyaXB0aW9uIiwic2V0UHJvamVjdERlc2NyaXB0aW9uIiwicHJvamVjdF9sb2NhdGlvbiIsInNldFByb2plY3RMb2NhdGlvbiIsInByb2plY3RfdGltZSIsInNldFByb2plY3RUaW1lIiwidXBkYXRlSW5mbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJyZXNwb25zZSIsImZldGNoIiwicHJvamVjdF9pZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwid2luZG93IiwibG9jYXRpb24iLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiY2FuY2VsVXBkYXRlIiwidGFyZ2V0IiwidmFsdWUiLCJMaXN0UHJvamVjdCIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJkZWxldGVQcm9qZWN0cyIsImlkIiwiZGVsZXRlUHJvamVjdCIsImZpbHRlciIsImdldFByb2plY3RzIiwianNvbkRhdGEiLCJqc29uIiwidXNlRWZmZWN0IiwibWFwIiwiTWF0aCIsImZsb29yIiwic2xpY2UiLCJIb21lIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7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Ozs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL1Byb2plY3RMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9Qcm9qZWN0TGlzdC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBFZGl0UHJvamVjdCA9ICh7IHByb2plY3QgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtwcm9qZWN0X2NvbXBhbnlfbmFtZSwgc2V0UHJvamVjdENvbXBhbnlOYW1lXSA9IHVzZVN0YXRlKHByb2plY3QucHJvamVjdF9jb21wYW55X25hbWUpO1xyXG4gICAgY29uc3QgW3Byb2plY3RfZGVzY3JpcHRpb24sIHNldFByb2plY3REZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShwcm9qZWN0LnByb2plY3RfZGVzY3JpcHRpb24pO1xyXG4gICAgY29uc3QgW3Byb2plY3RfbG9jYXRpb24sIHNldFByb2plY3RMb2NhdGlvbl0gPSB1c2VTdGF0ZShwcm9qZWN0LnByb2plY3RfbG9jYXRpb24pO1xyXG4gICAgY29uc3QgW3Byb2plY3RfdGltZSwgc2V0UHJvamVjdFRpbWVdID0gdXNlU3RhdGUocHJvamVjdC5wcm9qZWN0X3RpbWUpO1xyXG5cclxuICAvLyBFZGl0IFByb2plY3RfQ29tcGFueV9OYW1lXHJcbiAgY29uc3QgdXBkYXRlSW5mbyA9IGFzeW5jIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYm9keSA9IHtwcm9qZWN0X2NvbXBhbnlfbmFtZSwgcHJvamVjdF9kZXNjcmlwdGlvbiwgcHJvamVjdF9sb2NhdGlvbiwgcHJvamVjdF90aW1lfTtcclxuICAgICAgXHJcbiAgICAgIC8vIHByb3h5XHJcblxyXG4gICAgICBcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL3Byb2plY3QvJHtwcm9qZWN0LnByb2plY3RfaWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgd2luZG93LmxvY2F0aW9uID0gXCIvXCI7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gICAgLy8gSWYgZWRpdCBpcyBjYW5jZWxsZWQgdGhlIHByaW9yIGNoYW5nZXMgYXJlIG5vdCBjYXJyaWVkIG92ZXIgaWYgeW91IHdhbm5hIGZpbmlzaCBvciBjaGFuZ2UgeW91ciBlZGl0XHJcbiAgICBjb25zdCBjYW5jZWxVcGRhdGUgPSAoKSA9PiB7XHJcbiAgICAgIHNldFByb2plY3RDb21wYW55TmFtZShwcm9qZWN0LnByb2plY3RfY29tcGFueV9uYW1lKSBcclxuICAgICAgc2V0UHJvamVjdERlc2NyaXB0aW9uKHByb2plY3QucHJvamVjdF9kZXNjcmlwdGlvbilcclxuICAgICAgc2V0UHJvamVjdExvY2F0aW9uKHByb2plY3QucHJvamVjdF9sb2NhdGlvbilcclxuICAgICAgc2V0UHJvamVjdFRpbWUocHJvamVjdC5wcm9qZWN0X3RpbWUpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjEyLjQvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2pzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIiBcclxuICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJtb2RhbFwiICBcclxuICAgICAgICAgICAgZGF0YS10YXJnZXQ9e2AjaWQke3Byb2plY3QucHJvamVjdF9pZH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICBpZCA9IGlkMTBcclxuICAgICAgICAgICovfVxyXG4gICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2FuY2VsVXBkYXRlKCl9XHJcbiAgICAgICAgICAgIGNsYXNzPVwibW9kYWxcIiBpZD17YGlkJHtwcm9qZWN0LnByb2plY3RfaWR9YH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RWRpdCBQcm9qZWN0PC9oND5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2xvc2VcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbmNlbFVwZGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBtdC0zXCJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3RfY29tcGFueV9uYW1lfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBzZXRQcm9qZWN0Q29tcGFueU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0X2Rlc2NyaXB0aW9ufSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBzZXRQcm9qZWN0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJmb3JtLWNvbnRyb2wgbXQtM1wifSBcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0X2xvY2F0aW9ufSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgZSA9PiBzZXRQcm9qZWN0TG9jYXRpb24oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImZvcm0tY29udHJvbCBtdC0zXCJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3RfdGltZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17IGUgPT4gc2V0UHJvamVjdFRpbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZSA9PiB1cGRhdGVJbmZvKGUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiBcclxuICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbmNlbFVwZGF0ZSgpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRQcm9qZWN0OyIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVkaXRQcm9qZWN0IGZyb20gJy4vRWRpdFByb2plY3QnO1xyXG5cclxuY29uc3QgTGlzdFByb2plY3QgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gRGVsZXRlIGZ1bmN0aW9uXHJcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vaHR0cHM6Ly9maW5hbC1wcm9qZWN0Lmhlcm9rdWFwcC5jb20vcHJvamVjdFxyXG4gICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gYXdhaXQgZmV0Y2goYC9wcm9qZWN0LyR7aWR9YCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LnByb2plY3RfaWQgIT09IGlkKSlcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEZldGNoIGRhdGEgZnVuY3Rpb24gXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9IGFzeW5jKCkgPT4ge1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvL2h0dHBzOi8vZmluYWwtcHJvamVjdC5oZXJva3VhcHAuY29tL3Byb2plY3RcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9wcm9qZWN0XCIpO1xyXG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIHNldFByb2plY3RzKGpzb25EYXRhKTsgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0UHJvamVjdHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIDxGcmFnbWVudD5cclxuICAgIDxoZWFkZXI+XHJcbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2FqYXguZ29vZ2xlYXBpcy5jb20vYWpheC9saWJzL2pxdWVyeS8xLjEyLjQvanF1ZXJ5Lm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvanMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8ZGl2IGNsYXNzID0gXCJkLWZsZXggZmxleC1jb2x1bW4gYmQtaGlnaGxpZ2h0IG1iLTNcIj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwLTNcIj5Qcm9qZWN0IExpc3Q8L2gxPiBcclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBtdC01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5Db21wYW55IE5hbWU8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Mb2NhdGlvbjwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+VG90YWwgVGltZTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RWRpdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGg+RGVsZXRlPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICA8dGJvZHk+XHJcbiAgICAgICAgey8qXHJcbiAgICAgICAgUmVmZXJlbmNlIGZ5cmlyIHVwcGJ5Z2dpbmd1IHTDtmZsdSBzZW0gw6lnIG11biBub3RhIC0gTXVuIGJyZXl0YXN0IGVpdHRodmHDsFxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRkPsONc3RhayBlaGY8L3RkPlxyXG4gICAgICAgICAgICA8dGQ+RG9lPC90ZD5cclxuICAgICAgICAgICAgPHRkPmpvaG5AZXhhbXBsZS5jb208L3RkPlxyXG4gICAgICAgICAgICA8dGQ+am9obkBleGFtcGxlLmNvbTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD5qb2huQGV4YW1wbGUuY29tPC90ZD5cclxuICAgICAgICAgICAgPHRkPmpvaG5AZXhhbXBsZS5jb208L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgKi8gfVxyXG4gICAgICAgIHsvKiBUaGlzIGlzIGhvdyBJIG1hcCB0byBiZSBhYmxlIHRvIHVzZSB0aGUgZGF0YSAqL31cclxuICAgICAgICB7cHJvamVjdHMubWFwKHByb2plY3QgPT4oXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e3Byb2plY3QucHJvamVjdF9pZH0+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3Byb2plY3QucHJvamVjdF9jb21wYW55X25hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57cHJvamVjdC5wcm9qZWN0X2Rlc2NyaXB0aW9ufTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3Byb2plY3QucHJvamVjdF9sb2NhdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPntcclxuICAgICAgICAgICAgICAgICAgICAgICAgKFwiMFwiICsgTWF0aC5mbG9vcihwcm9qZWN0LnByb2plY3RfdGltZSAvIDM2MDApICUgMjQpLnNsaWNlKC0yKVxyXG4gICAgICAgICAgICAgICAgICAgIH06XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXCIwXCIgKyBNYXRoLmZsb29yKHByb2plY3QucHJvamVjdF90aW1lIC8gNjApICUgNjApLnNsaWNlKC0yKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA6e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoXCIwXCIgKyAocHJvamVjdC5wcm9qZWN0X3RpbWUpICUgNjApLnNsaWNlKC0yKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPjxFZGl0UHJvamVjdCBwcm9qZWN0PXtwcm9qZWN0fS8+PC90ZD5cclxuICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCIgb25DbGljaz17KCk9PiBkZWxldGVQcm9qZWN0cyhwcm9qZWN0LnByb2plY3RfaWQpfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgICkpfVxyXG4gICAgPC90Ym9keT5cclxuICA8L3RhYmxlPlxyXG4gIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFByb2plY3Q7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7RnJhZ21lbnR9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIENvbXBhbnkgQ29tcG9uZW50c1xyXG5pbXBvcnQgTGlzdFByb2plY3QgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0L0xpc3RQcm9qZWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4zLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cclxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vYWpheC5nb29nbGVhcGlzLmNvbS9hamF4L2xpYnMvanF1ZXJ5LzEuMTIuNC9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9qcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uIGp1bWJvdHJvbi1mbHVpZFwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInRleHQtY2VudGVyXCI+Q2xvY2tpbiBQcm9qZWN0PC9oMT5cclxuICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPkF1dGhvcjogQW50b24gSC4gSGVpbWRhbDwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxMaXN0UHJvamVjdC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBcclxuICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS0zIHAtMlwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID48aDE+QmFjazwvaDE+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9