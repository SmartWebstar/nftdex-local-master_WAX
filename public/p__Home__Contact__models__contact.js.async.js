(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"G3/I":function(t,e,n){"use strict";n.r(e);var a=n("eHn4"),c=n.n(a),r=n("p0pE"),s=n.n(r),o=n("d6i3"),i=n.n(o),u=(n("ybqd"),n("F/us"),n("wd/R"),n("rq3/"));e["default"]={namespace:"contact",state:{},subscriptions:{setup:function(t){t.dispatch;var e=t.history;e.listen(function(t){t.pathname})}},effects:{createContact:i.a.mark(function t(){var e,n,a,c,r=arguments;return i.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:{},n=r.length>1?r[1]:void 0,a=n.call,n.put,n.select,c=e.data,t.next=5,a(u.create,c);case 5:t.sent;case 6:case"end":return t.stop()}},t)})},reducers:{saveState:function(t,e){return s()({},t,e.payload)},show:function(t,e){return s()({},t,c()({},e.payload,!0))},hide:function(t,e){return s()({},t,c()({},e.payload,!1))}}}}}]);