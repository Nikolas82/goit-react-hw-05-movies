"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{676:function(e,t,r){var n=r(87),a=r(689),c=r(184);t.Z=function(e){var t=e.movies,r=(0,a.TH)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.original_title;return(0,c.jsx)("li",{children:(0,c.jsx)(n.rU,{to:"/movies/".concat(t),state:{from:r},children:(0,c.jsx)("p",{children:a})})},t)}))})})}},446:function(e,t,r){r.d(t,{D$:function(){return l},_r:function(){return p},wr:function(){return s},z1:function(){return f},zU:function(){return i}});var n=r(861),a=r(757),c=r.n(a),u=r(243),o="406bff9354a0d1960c3f65dfdea628e2",s=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t,"&language=en-US"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},415:function(e,t,r){r.r(t);var n=r(861),a=r(439),c=r(757),u=r.n(c),o=r(791),s=r(676),i=r(446),p=r(184);t.default=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,o.useState)(!1),f=(0,a.Z)(l,2),v=f[0],h=f[1],d=(0,o.useState)(null),g=(0,a.Z)(d,2),m=g[0],x=g[1];(0,o.useEffect)((function(){w()}),[]);var w=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,(0,i.wr)();case 4:t=e.sent,c(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),x(e.t0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return(0,p.jsxs)(p.Fragment,{children:[v&&"Loading ...",m&&(0,p.jsx)("p",{children:"An error occurred. Please try again."}),(0,p.jsx)("h1",{children:"Trending today"}),r&&(0,p.jsx)(s.Z,{movies:r})]})}}}]);
//# sourceMappingURL=415.8c0f2db7.chunk.js.map