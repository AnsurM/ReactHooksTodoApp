(this["webpackJsonpreact-hooks-todo-app"]=this["webpackJsonpreact-hooks-todo-app"]||[]).push([[0],[,,,,,function(e,t,o){e.exports=o(12)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),c=o(4),r=o.n(c),i=(o(10),o(1)),l=o(2);o(11);function d(e){var t=e.addTodo,o=Object(n.useState)(""),c=Object(l.a)(o,2),r=c[0],i=c[1];return a.a.createElement("form",{onSubmit:function(e){e.preventDefault(),r&&(t(r),i(""))}},a.a.createElement("input",{type:"text",className:"input",value:r,placeholder:"Add Todo...",onChange:function(e){return i(e.target.value)}}))}function u(e){var t=e.todo,o=e.index,n=e.completeTodo,c=e.deleteTodo;return a.a.createElement("div",{style:{textDecoration:t.isCompleted?"line-through":""},className:"todo"},t.text,a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return n(o)}},"Complete"),a.a.createElement("button",{onClick:function(){return c(o)}},"Delete")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement((function(){var e=Object(n.useState)([{text:"ABC",isCompleted:!1},{text:"DEF",isCompleted:!1},{text:"HIJ",isCompleted:!1}]),t=Object(l.a)(e,2),o=t[0],c=t[1],r=function(e){var t=Object(i.a)(o);t[e].isCompleted=!0,c(t)},s=function(e){var t=Object(i.a)(o);t.splice(e,1),c(t)};return a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"todo-list"},o.map((function(e,t){return a.a.createElement(u,{key:t,index:t,todo:e,completeTodo:r,deleteTodo:s})})),a.a.createElement(d,{addTodo:function(e){var t=[].concat(Object(i.a)(o),[{text:e}]);c(t)}})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[5,1,2]]]);
//# sourceMappingURL=main.b87082cb.chunk.js.map