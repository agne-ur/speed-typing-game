(this["webpackJsonpspeed-typing-game"]=this["webpackJsonpspeed-typing-game"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),u=n(4),r=n.n(u),s=(n(9),n(2)),a=(n(10),n(1));var o=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],u=Object(c.useState)(10),r=Object(s.a)(u,2),o=r[0],j=r[1],b=Object(c.useState)(!1),d=Object(s.a)(b,2),f=d[0],l=d[1],O=Object(c.useState)(0),h=Object(s.a)(O,2),g=h[0],p=h[1],x=Object(c.useRef)(null);function m(){l(!1),p(function(e){if(!1===f)return e.trim().split(" ").filter((function(e){return""!==e})).length}(n))}return Object(c.useEffect)((function(){f&&o>0?setTimeout((function(){j(o-1)}),1e3):0===o&&m()}),[o,f]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Speed typing"}),Object(a.jsx)("textarea",{value:n,onChange:function(e){i(e.target.value)},disabled:!f,ref:x}),Object(a.jsxs)("h4",{children:["Time remaining: ",o]}),Object(a.jsx)("button",{onClick:function(){j(10),l(!0),i(""),x.current.disabled=!1,x.current.focus()},disabled:f,children:"Start"}),Object(a.jsxs)("h4",{children:["Word count: ",g]})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,u=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),u(e),r(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(o,{})}),document.getElementById("root")),j()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.ddb72cae.chunk.js.map