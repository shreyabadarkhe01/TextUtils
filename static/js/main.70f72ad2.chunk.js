(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(13),a(1));a(14);var s=function(e){return null!==e.alert?l.a.createElement("div",{style:{height:"50px"}},l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)),": ",e.alert.msg)):l.a.createElement("div",{style:{height:"50px"}})};function i(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode," ")},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},e.changeAboutTo))),l.a.createElement("div",{className:"form-check form-switch text-".concat("dark"===e.mode?"white":"black")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable ","light"===e.mode?"Dark":"Light","Mode")))))}function m(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h1",{className:"mb-2"},e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",id:"myBox",rows:"8",value:r,onChange:function(e){c(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"black"}})),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.toUpperCase();c(t),e.showAlert("Converted to Uppercase!","success")}},"Convert to Uppercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.toLowerCase();c(t),e.showAlert("Converted to Lowercase!","success")}},"Convert to Lowercase"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-1 my-1",onClick:function(){c(""),e.showAlert("Text cleared!","success")}},"Clear Text"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.toLowerCase().split(" ").map(function(e){return e.charAt(0).toUpperCase()+e.substring(1)}).join(" ");c(t),e.showAlert("Capitalized!","success")}},"Capitalize the First Letter"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=document.getElementById("myBox");navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard!","success")}},"Copy Text"),l.a.createElement("button",{disabled:0===r.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=r.split(/[ ]+/);c(t.join(" ")),e.showAlert("Extra spaces are removed successfully!","success")}},"Remove Extra Spaces")),l.a.createElement("div",{className:"container my-2",style:{color:"dark"===e.mode?"white":"#042743"}},l.a.createElement("h2",null,"Your text summary"),l.a.createElement("p",null,r.split(/\s+/).filter(function(e){return 0!==e.length}).length," words and ",r.length," characters"),l.a.createElement("p",null,.008*r.split(" ").filter(function(e){return 0!==e.length}).length," Minutes to read"),l.a.createElement("h2",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Nothing to preview!")))}i.defaultProps={title:"Set title here",changeAboutTo:"About"};var u=function(){var e=Object(n.useState)("light"),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(o.a)(c,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},3e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{title:"Textutils",mode:a,toggleMode:function(e){"light"===a?(r("dark"),document.body.style.backgroundColor="#042743",h("Dark mode has been enabled","success")):(r("light"),document.body.style.backgroundColor="white",h("Light mode has been enabled","success"))}}),l.a.createElement(s,{alert:d}),l.a.createElement("div",{className:"container my-3 "},l.a.createElement(m,{showAlert:h,heading:"Try TextUtils - Word Counter, Character counter , Remove extra spaces",mode:a})))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.70f72ad2.chunk.js.map