_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(c.default.useContext(o.AmpStateContext))};var r,c=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,c=void 0!==r&&r,o=t.hasQuery,a=void 0!==o&&o;return n||c&&a}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var r,c=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c)){var o=r?Object.getOwnPropertyDescriptor(t,c):null;o&&(o.get||o.set)?Object.defineProperty(n,c,o):n[c]=t[c]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),s=n("FYa8"),i=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[c.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===c.default.Fragment?t.concat(c.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function j(t,e){return t.reduce((function(t,e){var n=c.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(d,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(c){var o=!0;if(c.key&&"number"!==typeof c.key&&c.key.indexOf("$")>0){var a=c.key.slice(c.key.indexOf("$")+1);t.has(a)?o=!1:t.add(a)}switch(c.type){case"title":case"base":e.has(c.type)?o=!1:e.add(c.type);break;case"meta":for(var s=0,i=p.length;s<i;s++){var u=p[s];if(c.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=c.props[u],d=r[u]||new Set;d.has(l)?o=!1:(d.add(l),r[u]=d)}}}return o}}()).reverse().map((function(t,e){var n=t.key||e;return c.default.cloneElement(t,{key:n})}))}function h(t){var e=t.children,n=(0,c.useContext)(a.AmpStateContext),r=(0,c.useContext)(s.HeadManagerContext);return c.default.createElement(o.default,{reduceComponentsToState:j,headManager:r,inAmpMode:(0,i.isInAmpMode)(n)},e)}h.rewind=function(){};var f=h;e.default=f},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},"HaE+":function(t,e,n){"use strict";function r(t,e,n,r,c,o,a){try{var s=t[o](a),i=s.value}catch(u){return void n(u)}s.done?e(i):Promise.resolve(i).then(r,c)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(c,o){var a=t.apply(e,n);function s(t){r(a,c,o,s,i,"next",t)}function i(t){r(a,c,o,s,i,"throw",t)}s(void 0)}))}}n.d(e,"a",(function(){return c}))},I1HZ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ProjectList",function(){return n("wq7A")}])},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,e,n){var r=n("Ijbi"),c=n("EbDI"),o=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||c(t)||o(t)||a()}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),c=n("lwsE"),o=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),s=n("a1gu"),i=n("Nsbk");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var c=i(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var l=n("q1tI"),d=function(t){a(n,t);var e=u(n);function n(t){var o;return c(this,n),(o=e.call(this,t))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);e.default=d},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var c=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=c},wq7A:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n("nKUr"),c=(n("8Kt/"),n("q1tI")),o=n("o0o1"),a=n.n(o),s=n("HaE+"),i=function(t){var e=t.project,n=Object(c.useState)(e.project_company_name),o=n[0],i=n[1],u=Object(c.useState)(e.project_description),l=u[0],d=u[1],p=Object(c.useState)(e.project_location),j=p[0],h=p[1],f=Object(c.useState)(e.project_time),b=f[0],m=f[1],x=function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,r={project_company_name:o,project_description:l,project_location:j,project_time:b},t.next=5,fetch("http://localhost:5000/project/".concat(e.project_id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 5:t.sent,window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){i(e.project_company_name),d(e.project_description),h(e.project_location),m(e.project_time)};return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}),Object(r.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"}),Object(r.jsx)("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",class:"btn btn-outline-success","data-toggle":"modal","data-target":"#id".concat(e.project_id),children:"Edit"}),Object(r.jsx)("div",{onClick:function(){return v()},class:"modal",id:"id".concat(e.project_id),children:Object(r.jsx)("div",{class:"modal-dialog",children:Object(r.jsxs)("div",{class:"modal-content",children:[Object(r.jsxs)("div",{class:"modal-header",children:[Object(r.jsx)("h4",{class:"modal-title",children:"Edit Project"}),Object(r.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",onClick:function(){return v()},children:"\xd7"})]}),Object(r.jsxs)("div",{class:"modal-body",children:[Object(r.jsx)("input",{type:"text",className:"form-control mt-3",value:o,onChange:function(t){return i(t.target.value)}}),Object(r.jsx)("input",{type:"text",className:"form-control mt-3",value:l,onChange:function(t){return d(t.target.value)}}),Object(r.jsx)("input",{type:"text",className:"form-control mt-3",value:j,onChange:function(t){return h(t.target.value)}}),Object(r.jsx)("input",{type:"text",className:"form-control mt-3",value:b,onChange:function(t){return m(t.target.value)}})]}),Object(r.jsxs)("div",{class:"modal-footer",children:[Object(r.jsx)("button",{type:"button",class:"btn btn-success","data-dismiss":"modal",onClick:function(t){return x(t)},children:"Save"}),Object(r.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:function(){return v()},children:"Close"})]})]})})})]})]})},u=function(){var t=Object(c.useState)([]),e=t[0],n=t[1],o=function(){var t=Object(s.a)(a.a.mark((function t(r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/project/".concat(r),{method:"DELETE"});case 3:t.sent,n(e.filter((function(t){return t.project_id!==r}))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),u=function(){var t=Object(s.a)(a.a.mark((function t(){var e,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:5000/project");case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,n(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){u()}),[]),Object(r.jsxs)(c.Fragment,{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}),Object(r.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"}),Object(r.jsx)("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"})]}),Object(r.jsxs)("div",{class:"d-flex flex-column bd-highlight mb-3",children:[Object(r.jsx)("h1",{class:"text-center p-3",children:"Project List"}),Object(r.jsxs)("table",{class:"table mt-5 text-center",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Company Name"}),Object(r.jsx)("th",{children:"Description"}),Object(r.jsx)("th",{children:"Location"}),Object(r.jsx)("th",{children:"Total Time"}),Object(r.jsx)("th",{children:"Edit"}),Object(r.jsx)("th",{children:"Delete"})]})}),Object(r.jsx)("tbody",{children:e.map((function(t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.project_company_name}),Object(r.jsx)("td",{children:t.project_description}),Object(r.jsx)("td",{children:t.project_location}),Object(r.jsxs)("td",{children:[("0"+Math.floor(t.project_time/3600)%24).slice(-2),":",("0"+Math.floor(t.project_time/60)%60).slice(-2),":",("0"+t.project_time%60).slice(-2)]}),Object(r.jsx)("td",{children:Object(r.jsx)(i,{project:t})}),Object(r.jsx)("td",{children:Object(r.jsx)("button",{class:"btn btn-danger",onClick:function(){return o(t.project_id)},children:"Delete"})})]},t.project_id)}))})]})]})]})};function l(){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("header",{children:[Object(r.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"}),Object(r.jsx)("script",{src:"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"}),Object(r.jsx)("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"})]}),Object(r.jsxs)("div",{class:"jumbotron jumbotron-fluid",children:[Object(r.jsx)("h1",{class:"text-center",children:"Clockin Project"}),Object(r.jsx)("h3",{class:"text-center",children:"Author: Anton H. Heimdal"})]}),Object(r.jsx)(u,{})]}),Object(r.jsx)("div",{class:"d-flex flex-column",children:Object(r.jsx)("button",{class:"btn btn-primary m-3 p-2",onClick:function(){window.location.href="/"},children:Object(r.jsx)("h1",{children:"Back"})})})]})}}},[["I1HZ",0,2,1]]]);