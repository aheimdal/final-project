(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=c,e.useAmp=function(){return c(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,a=void 0!==r&&r,o=t.hasQuery,c=void 0!==o&&o;return n||a&&c}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var r,a=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var o=r?Object.getOwnPropertyDescriptor(t,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=t[a]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),s=n("FYa8"),i=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===a.default.Fragment?t.concat(a.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function p(t,e){return t.reduce((function(t,e){var n=a.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(a){var o=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var c=a.key.slice(a.key.indexOf("$")+1);t.has(c)?o=!1:t.add(c)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var s=0,i=d.length;s<i;s++){var u=d[s];if(a.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=a.props[u],f=r[u]||new Set;f.has(l)?o=!1:(f.add(l),r[u]=f)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return a.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,a.useContext)(c.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},e)}h.rewind=function(){};var b=h;e.default=b},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,a,o,c){try{var s=t[o](c),i=s.value}catch(u){return void n(u)}s.done?e(i):Promise.resolve(i).then(r,a)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(a,o){var c=t.apply(e,n);function s(t){r(c,a,o,s,i,"next",t)}function i(t){r(c,a,o,s,i,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return a}))},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),c=n("Bnag");t.exports=function(t){return r(t)||a(t)||o(t)||c()}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),s=n("a1gu"),i=n("Nsbk");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var a=i(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),f=function(t){c(n,t);var e=u(n);function n(t){var o;return a(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);e.default=f},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lcND:function(t,e,n){"use strict";var r=n("o0o1"),a=n.n(r),o=n("HaE+"),c=n("nKUr"),s=n("q1tI"),i=function(){var t=Object(s.useState)(0),e=t[0],n=t[1],r=Object(s.useState)(!1),a=r[0],o=r[1];Object(s.useEffect)((function(){var t=null;return a?t=setInterval((function(){n((function(t){return t+1}))}),1e3):clearInterval(t),function(){return clearInterval(t)}}),[a]);return Object(c.jsxs)("div",{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}),Object(c.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"}),Object(c.jsx)("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"})]}),Object(c.jsx)("h3",{class:"text-center",children:"Stopwatch"}),Object(c.jsxs)("h1",{class:"text-center",children:[Object(c.jsxs)("span",{children:[("0"+Math.floor(e/3600)%24).slice(-2),":"]}),Object(c.jsxs)("span",{children:[("0"+Math.floor(e/60)%60).slice(-2),":"]}),Object(c.jsx)("span",{children:("0"+e%60).slice(-2)})]}),Object(c.jsxs)("div",{class:"text-center d-flex",children:[!a&&0==e&&Object(c.jsx)("button",{class:"btn btn-primary flex-fill",onClick:function(){return o(!0)},children:" Start"}),a&&Object(c.jsx)("button",{class:"btn btn-danger flex-fill",onClick:function(){return o(!1)},children:"Stop"}),!a&&e>0&&Object(c.jsx)("button",{class:"btn btn-primary flex-fill",onClick:function(){return o(!0)},children:"Resume"}),!a&&e>0&&Object(c.jsx)("button",{class:"btn btn-outline-success flex-fill",onClick:function(){return n(0)},children:"Reset"})]})]})};e.a=function(){var t=Object(s.useState)(""),e=t[0],n=t[1],r=Object(s.useState)(""),u=r[0],l=r[1],f=Object(s.useState)(""),d=f[0],p=f[1],h=Object(s.useState)(""),b=h[0],j=h[1],m=function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,r={project_company_name:e,project_description:u,project_location:d,project_time:b},t.next=5,fetch("http://localhost:5000/project",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:t.sent,window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsxs)(s.Fragment,{children:[Object(c.jsxs)("header",{children:[Object(c.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}),Object(c.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"}),Object(c.jsx)("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"})]}),Object(c.jsxs)("div",{class:"container-fluid h-auto d-flex flex-column bd-highlight mb-3",children:[Object(c.jsx)(i,{}),Object(c.jsxs)("form",{class:"form",onSubmit:m,children:[Object(c.jsxs)("div",{class:"row",children:[Object(c.jsxs)("div",{class:"col",children:[Object(c.jsx)("input",{class:"form-control mt-1",type:"text",placeholder:"Company Name",value:e,onChange:function(t){return n(t.target.value)}}),Object(c.jsx)("input",{class:"form-control mt-1",type:"text",placeholder:"Description",value:u,onChange:function(t){return l(t.target.value)}})]}),Object(c.jsxs)("div",{class:"col",children:[Object(c.jsx)("input",{class:"form-control mt-1",type:"text",placeholder:"Location",value:d,onChange:function(t){return p(t.target.value)}}),Object(c.jsx)("input",{class:"form-control mt-1",type:"text",placeholder:"Total Time",value:b,onChange:function(t){return j(t.target.value)}})]})]}),Object(c.jsx)("div",{class:"d-flex flex-column",children:Object(c.jsx)("button",{class:"btn btn-success mt-1",onSubmit:m,children:"Add Project"})})]})]})]})}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=a}}]);