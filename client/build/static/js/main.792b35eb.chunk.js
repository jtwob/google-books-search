(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{34:function(e,t,n){},53:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(27),s=n.n(c),r=(n(34),n(9)),i=n.n(r),o=n(28),l=n(2),d=(n(53),n(7)),j=n.n(d),m=n(10),b=n(13),u=n(0),h=function(e){var t=function(){var t=Object(m.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link},t.next=3,i.a.post("/api/books",n);case 3:t.sent;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-sm-3",children:[Object(u.jsx)("h5",{className:"card-title",children:e.title}),e.authors.map((function(e){return Object(u.jsx)("p",{children:e})}))]}),Object(u.jsxs)("div",{className:"col-sm-9",style:{textAlign:"right"},children:[Object(u.jsx)("a",{target:"_blank",style:{marginRight:"5px"},href:e.link,className:"btn btn-primary",children:"View"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),t()},className:"btn btn-primary",children:"Save"})]})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-3",children:Object(u.jsx)("img",{className:"card-img-top",src:e.image,alt:"Card image cap",style:{width:"150px",float:"left",margin:"10px"}})}),Object(u.jsx)("div",{className:"col-sm-9",children:Object(u.jsx)("p",{className:"card-text",children:e.description})})]})]})})})},v=function(e){var t=Object(a.useState)({term:""}),n=Object(b.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)({data:[]}),o=Object(b.a)(r,2),l=o[0],d=o[1],v=function(){var e=Object(m.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=c.term.trim().replace(/  +/g,"+"),console.log(n),e.next=5,i.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(n));case 5:a=e.sent,d({data:a.data.items});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("h3",{children:"Search a Book"})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("form",{className:"form-inline",onSubmit:v,children:Object(u.jsxs)("div",{className:"form-row align-items-center",children:[Object(u.jsx)("input",{className:"form-control",onChange:function(e){s({term:e.target.value})},type:"text",name:"book"}),Object(u.jsx)("button",{className:"btn",type:"submit",children:"Find"})]})})})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"container",style:{backgroundColor:"lightgray"},children:[Object(u.jsx)("h3",{children:"Results"}),l.data.map((function(e){return Object(u.jsx)("div",{className:"row",style:{justifyContent:"center"},children:Object(u.jsx)(h,{title:e.volumeInfo.title,authors:e.volumeInfo.authors,description:e.volumeInfo.description?e.volumeInfo.description:"No available description at this time.",image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink})})}))]})]})},p=function(e){var t=function(){var t=Object(m.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.delete("/api/books/".concat(e.id));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"card",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-sm-3",children:[Object(u.jsx)("h5",{className:"card-title",children:e.title}),e.authors.map((function(e){return Object(u.jsx)("p",{children:e})}))]}),Object(u.jsxs)("div",{className:"col-sm-9",style:{textAlign:"right"},children:[Object(u.jsx)("a",{target:"_blank",style:{marginRight:"5px"},href:e.link,className:"btn btn-primary",children:"View"}),Object(u.jsx)("button",{onClick:function(e){t()},className:"btn btn-primary",children:"Delete"})]})]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm-3",children:Object(u.jsx)("img",{className:"card-img-top",src:e.image,alt:"Card image cap",style:{width:"150px",float:"left",margin:"10px"}})}),Object(u.jsx)("div",{className:"col-sm-9",children:Object(u.jsx)("p",{className:"card-text",children:e.description})})]})]})})})},f=function(){var e=Object(a.useState)({saved:[]}),t=Object(b.a)(e,2),n=t[0],c=t[1],s=function(){var e=Object(m.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get("/api/books");case 2:t=e.sent,c({saved:t.data});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){s()}),[n]),Object(u.jsx)("div",{className:"container",children:n.saved?n.saved.map((function(e){return Object(u.jsx)(p,{title:e.title,authors:e.authors,description:e.description,image:e.image,link:e.link,id:e._id})})):Object(u.jsx)("h1",{children:"No books saved yet... Head to the search page to add some."})})},x=function(e){return Object(u.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"#",children:"Google Books"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"/search",children:"Search"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("a",{className:"nav-link",href:"/saved",children:"Saved"})})]})})]})};var O=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(x,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/search",component:v}),Object(u.jsx)(l.a,{path:"/saved",component:f})]})]})})})},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(u.jsx)(O,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");g?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):N(e)}))}}()}},[[61,1,2]]]);
//# sourceMappingURL=main.792b35eb.chunk.js.map