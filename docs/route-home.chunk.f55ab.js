(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{OPsQ:function(e,t,n){"use strict";function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var c=n.call(e,t||"default");if("object"!==l(c))return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,c,r,a,i=[],o=!0,s=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(l=r.call(n)).done)&&(i.push(l.value),i.length!==t);o=!0);}catch(e){s=!0,c=e}finally{try{if(!o&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw c}}return i}}(e,t)||s(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}n.r(t);var b=n("hosL"),h="terminal__Ns8FN",p="welcome__8TTjf",j="activeprompt__-RKgw",m="prompt__wX4A9",O="command__JBFdT",d=n("QRet"),f="output__Y6snD",v="error__HYsFw",y="section__AQ-WW",g="title__UtO8N",w="description__DD9lX",S=function(){return Object(b.h)("div",{class:f},Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},"Available Commands :"),Object(b.h)("ul",null,Object(b.h)("li",null,"help -- List of available commands"),Object(b.h)("li",null,"experience -- List of professional experiences"),Object(b.h)("li",null,"skills -- List of skills"),Object(b.h)("li",null,"education -- List of education"),Object(b.h)("li",null,"activities -- List of activities"))),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},"Special Commands :"),Object(b.h)("ul",null,Object(b.h)("li",null,"clear -- Clear all command histories"),Object(b.h)("li",null,"cd -- Change location(Not Implemented)"),Object(b.h)("li",null,"ls -- List locations and files(Not Implemented)"))))},k=function(e){var t=e.command;return Object(b.h)("div",{class:v},Object(b.h)("p",null,"command not found: ",t))},I=function(){return Object(b.h)("div",{className:f},Object(b.h)("strong",null,"Professional Experience :"),Object(b.h)("div",{className:y},Object(b.h)("p",{className:g},Object(b.h)("strong",null,"1) Software Engineer Backend Techlead"),", Mercari, Inc. Tokyo, Japan (2024/10 ~ Now)"),Object(b.h)("p",{className:w},"As a Software Engineer Backend Tech Lead, I was responsible for the system design, feature development, and operation of services in the HR domain, as well as the technical management of a team of three people."),Object(b.h)("ul",null,Object(b.h)("li",null,"Developing GraphQL API and gRPC."),Object(b.h)("li",null,"Technical management for a team of 3 people."))),Object(b.h)("div",{className:y},Object(b.h)("p",{className:g},Object(b.h)("strong",null,"2) Software Engineer Backend"),", Mercari, Inc. Tokyo, Japan (2023/10 ~ 2024/09)"),Object(b.h)("p",{className:w},"As a Software Engineer Backend, I was responsible for the system design, feature development, and operation of services in the HR domain."),Object(b.h)("ul",null,Object(b.h)("li",null,"Building a distributed record lock service across multiple services within modular monolith application."),Object(b.h)("li",null,"Developing GraphQL API and gRPC."))),Object(b.h)("div",{className:y},Object(b.h)("p",{className:g},Object(b.h)("strong",null,"3) Customer Reliability Engineer"),", Studyplus, Inc. Tokyo, Japan (2022/05 ~ Now)"),Object(b.h)("p",{className:w},"A first member of the team. Decrease Customer's anxiety and increase Customer's satisfaction by improving the reliability of the service."),Object(b.h)("ul",null,Object(b.h)("li",null,"Building Data Pipeline and Data Warehouse(~500 tables, 1billion records)"),Object(b.h)("li",null,"Implement a system to detect messages between users that violate the terms of service.(1M messages/month)"))),Object(b.h)("div",{className:y},Object(b.h)("p",{className:g},Object(b.h)("strong",null,"4) Team Leader"),", Studyplus, Inc. Tokyo, Japan (2020/01 ~ Now)"),Object(b.h)("p",{className:w},"As a team leader of 9 people web application group, I have led the team to deliver features in the educational field. Examples of actions I have taken are as follows."),Object(b.h)("ul",null,Object(b.h)("li",null,"Create a career ladder to clarify the career goals and current status of the members"),Object(b.h)("li",null,"Introduced scrum development and reduced project delays"))),Object(b.h)("div",{className:y},Object(b.h)("p",{className:g},Object(b.h)("strong",null,"5) Back-End Engineer"),", Studyplus, Inc. Tokyo, Japan (2018/09 ~ 2020/12)"),Object(b.h)("p",{className:w},"As part of B2B SaaS Web Application Team, I have delivered features to improve the learning efficiency of students and teachers."),Object(b.h)("ul",null,Object(b.h)("li",null,"Migrate monolith Ruby on Rails App into REST API and React SPA"),Object(b.h)("li",null,"Introduce Schema Driven Development process"),Object(b.h)("li",null,"Implement front-end and back-end across ambiguous systems and environment"))),Object(b.h)("div",{className:y},Object(b.h)("p",{className:g},Object(b.h)("strong",null,"6) System Engineer"),", Technobrain,Inc. Tokyo, Japan (2017/09 ~ 2018/08)"),Object(b.h)("p",{className:w},"As a system engineer of a contract software development team, I have developed web applications for internal business operations.")))},D=function(){return Object(b.h)("div",{class:f},Object(b.h)("strong",null,"Skills :"),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},"Software Development"),Object(b.h)("ul",null,Object(b.h)("li",null,"Ruby"),Object(b.h)("li",null,"Node.js"),Object(b.h)("li",null,"Go"),Object(b.h)("li",null,"Python"),Object(b.h)("li",null,"Rust"))),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},"Data Engineering"),Object(b.h)("ul",null,Object(b.h)("li",null,"digdag"),Object(b.h)("li",null,"embulk"),Object(b.h)("li",null,"GCP BigQuery"),Object(b.h)("li",null,"GCP Datastream"),Object(b.h)("li",null,"GCP Dataform"))),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},"Web Development"),Object(b.h)("ul",null,Object(b.h)("li",null,"HTML"),Object(b.h)("li",null,"CSS"),Object(b.h)("li",null,"JavaScript/TypeScript"),Object(b.h)("li",null,"React/Next.js"),Object(b.h)("li",null,"Ruby on Rails"),Object(b.h)("li",null,"Sidekiq"))),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},"Misc"),Object(b.h)("ul",null,Object(b.h)("li",null,"Git"),Object(b.h)("li",null,"Scrum Development"),Object(b.h)("li",null,"Schema Driven Development"),Object(b.h)("li",null,"Interviewing"),Object(b.h)("li",null,"Team organization"))),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},"Interests"),Object(b.h)("ul",null,Object(b.h)("li",null,"Engineering excellence"),Object(b.h)("li",null,"Authorization and Authentication"),Object(b.h)("li",null,"Machine Learning"))))},N=function(){return Object(b.h)("div",{class:f},Object(b.h)("strong",null,"Education :"),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},"Iwate Prefectural University(2013~2017)"),Object(b.h)("p",{class:w},Object(b.h)("strong",null,"Unfinished")),Object(b.h)("p",{class:w},"Completed 66 Credits towards a Bachelor of Policy Management")))},A=function(){return Object(b.h)("div",{class:f},Object(b.h)("strong",null,"Activities :"),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},Object(b.h)("strong",null,"Feb 2023)")),Object(b.h)("p",{class:w},"Release conventional commit stat tool ",Object(b.h)("a",{href:"https://github.com/atomiyama/ccstat"},Object(b.h)("b",null,"ccstat")))),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},Object(b.h)("strong",null,"December 2019)")),Object(b.h)("p",{class:w},Object(b.h)("span",null,"Presentation ",Object(b.h)("b",null,Object(b.h)("i",null,"Build Gem in Rust "))),Object(b.h)("span",null,"at ",Object(b.h)("a",{href:"https://heiseirb.connpass.com/event/151414/"},"heisei.rb#9"))),Object(b.h)("p",{class:w},Object(b.h)("a",{href:"https://speakerdeck.com/atomiyama/rustdegemwozuo-rou"},"Speaker Deck"))),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},Object(b.h)("strong",null,"Oct 2019)")),Object(b.h)("p",{class:w},Object(b.h)("span",null,"Presentation ",Object(b.h)("b",null,Object(b.h)("i",null,"FFI & Native Extension "))),Object(b.h)("span",null,"at ",Object(b.h)("a",{href:"https://heiseirb.connpass.com/event/148650/"},"heisei.rb#9"))),Object(b.h)("p",{class:w},Object(b.h)("a",{href:"https://speakerdeck.com/atomiyama/ffi-and-native-extension"},"Speaker Deck"))),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},Object(b.h)("strong",null,"Dec 2018)")),Object(b.h)("p",{class:w},"Release Cursor based pagination gem ",Object(b.h)("a",{href:"https://github.com/studyplus/jinrai"},"jinrai"))),Object(b.h)("div",{class:y},Object(b.h)("p",{class:g},Object(b.h)("strong",null,"Jun 2018)")),Object(b.h)("p",{class:w},"Applied Information Technology Engineer Examination")))},E=function(e){return e.hidden?null:Object(b.h)(b.Fragment,null,Object(b.h)("p",null,Object(b.h)("span",{class:m},C),Object(b.h)("span",{class:O},e.rawInput)),Object(b.h)(P,e))},P=function(e){var t=e.command;switch(t){case"help":return Object(b.h)(S,null);case"experience":return Object(b.h)(I,null);case"skills":return Object(b.h)(D,null);case"education":return Object(b.h)(N,null);case"activities":return Object(b.h)(A,null);case"":return null;default:return Object(b.h)(k,{command:t})}},R=n("/CiD"),T=n.n(R),C="guest@atomiyama.dev:~$",_=function(){var e=function(){var e=Object(d.j)(null);Object(d.d)((function(){return e.current.scrollIntoView({behavior:"smooth"})}));var t=o(Object(d.k)([]),2),n=t[0],l=t[1],r=o(Object(d.k)(0),2),i=r[0],s=r[1],u=Object(d.j)(null);Object(d.d)((function(){return u.current.focus()}),[]);var b=Object(d.j)("");return Object(d.d)((function(){var e=function(e){var t,l;if("Enter"===e.key&&document.activeElement!==u.current&&(e.preventDefault(),null===(t=u.current)||void 0===t||t.focus()),i===n.length&&(b.current=(null===(l=u.current)||void 0===l?void 0:l.value)||""),"ArrowUp"===e.key){e.preventDefault();var c=n[i-1];c&&u.current&&(u.current.value=c.rawInput,s((function(e){return e-1})))}if("ArrowDown"===e.key){e.preventDefault();var r=n[i+1];r&&u.current?(u.current.value=r.rawInput,s((function(e){return e+1}))):(u.current.value=b.current,s(n.length))}};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[n,i]),{formRef:e,inputRef:u,handleExecCmd:function(e){var t=e.split(" ")[0],n=e.split(" ").slice(1);if("clear"===t)return l((function(e){return e.map((function(e){return a(a({},e),{},{hidden:!0})}))}));var r={rawInput:e,command:t,args:n};l((function(e){return[].concat(c(e),[r])})),s((function(e){return e+1}))},commandProps:n}}(),t=e.formRef,n=e.inputRef,l=e.commandProps,r=e.handleExecCmd;return Object(b.h)("div",{class:h},Object(b.h)("div",{class:p},Object(b.h)("p",null,"Hello, there!"),Object(b.h)("p",null,'Type "help" to see the list of available commands.')),l.map((function(e,t){return Object(b.h)(b.Fragment,{key:"history_".concat(t)},Object(b.h)(E,e))})),Object(b.h)(x,{handleExecCmd:r,formRef:t,inputRef:n}))},x=function(e){var t=e.handleExecCmd,n=e.formRef,l=e.inputRef;return Object(b.h)("form",{ref:n,id:"activeprompt",class:j,onSubmit:function(e){e.preventDefault();var n=e.target.command.value;t(n),T.a.event("submit_form",{input:n}),e.target.command.value=""}},Object(b.h)("span",{class:m},C),Object(b.h)("input",{ref:l,type:"text",name:"command",class:O,autofocus:!0,autocomplete:"off"}))};t.default=function(){return Object(b.h)(_,null)}}}]);
//# sourceMappingURL=route-home.chunk.f55ab.js.map