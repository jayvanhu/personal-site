var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{r as l,R as c,N as s,F as o,a as i,u as m,Q as u,b as d,H as p,D as E,S as f,c as g,d as b,e as h,f as v,g as j,h as y,i as N}from"./vendor.d4b1f9dc.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var k="/personal-site/assets/resume-public.e7746f32.pdf";function _(){const[e,t]=l.exports.useState(!1);return c.createElement("div",{className:"nav-container"},c.createElement("nav",{className:`nav-links ${a={active:e},Object.entries(a).filter((([e,t])=>t)).map((([e,t])=>e)).join(" ")}`},c.createElement(s,{className:"nav-link",activeClassName:"active",to:"/about"},"About"),"•",c.createElement(s,{className:"nav-link",activeClassName:"active",to:"projects"},"Projects / Code Samples"),"•",c.createElement("a",{href:k,className:"nav-link",target:"_blank"},"Resume")),c.createElement("button",{className:"nav-btn",onClick:()=>t(!e)},e?c.createElement(o,null):c.createElement(i,null)));var a}const w="https://github.com/jayvanhu",P="https://www.linkedin.com/in/jayvanhu/",S="";function I({title:e,img:t,description:a,link:r,sourceCodeLink:n,tags:l}){return c.createElement("article",{className:"project-card"},c.createElement("h4",{id:"aria-project-card__img-label",className:"project-card__title"},e),c.createElement("img",{className:"project-card__image project-card__section",src:t,alt:"",role:"presentation","aria-labelledby":"aria-project-card__img-label"}),c.createElement("section",{className:"project-card__body project-card__section"},c.createElement("div",{className:"project-card__tags"},null==l?void 0:l.map((e=>c.createElement("span",{key:e,className:"tag"},e)))),c.createElement("p",null,a),c.createElement("div",{className:"project-card__links"},r?c.createElement("a",{href:"todo"},"Link"):null,n?c.createElement("a",{href:"asd"},"Source"):null)))}let O=-1;function L(){return O++,O}function C(){const e=[{id:L(),title:"Personal Website",img:"/personal-site/assets/personal.fddb937c.jpg",description:"This website that you're viewing right now.",link:"todo",sourceCodeLink:"todo",tags:["React"]},{id:L(),title:"Github Issues Page",img:"/personal-site/assets/github.157110c0.jpg",description:"A clone of the UI of the Issues page of Github repositories.",link:S,tags:["WIP","React"]}];return Promise.resolve(e)}function R(){const{data:e}=m("projects",C);return c.createElement("section",{className:"project-cards"},null==e?void 0:e.map((e=>c.createElement(I,((e,l)=>{for(var c in l||(l={}))a.call(l,c)&&n(e,c,l[c]);if(t)for(var c of t(l))r.call(l,c)&&n(e,c,l[c]);return e})({key:e.id},e)))))}const A=new u;function x(){return c.createElement(d,{client:A},c.createElement(p,null,c.createElement("header",{className:"landing-header"},c.createElement(E,{className:"header-icon"}),c.createElement(_,null)),c.createElement("main",null,c.createElement(f,null,c.createElement(g,{from:"/",to:"about",exact:!0}),c.createElement(b,{path:"/about"},c.createElement("section",{className:"blurb"},c.createElement("h4",null,"Full-Stack ",c.createElement(h,{className:"heart"})," Engineering"),c.createElement("p",null,"React.js, TypeScript, & a variety of backend languages")),c.createElement("section",{className:"description"},c.createElement("h4",null,"I'm Jason Huynh, a curious, eager full-stack engineer."),c.createElement("p",null,"todo"))),c.createElement(b,{path:"/projects"},c.createElement(R,null)))),c.createElement("footer",{className:"footer"},c.createElement("a",{href:P},c.createElement(v,null)),c.createElement("a",{href:w},c.createElement(j,null)),c.createElement("a",{href:k,target:"_blank"},c.createElement(y,null)))))}N.render(c.createElement(c.StrictMode,null,c.createElement(x,null)),document.getElementById("root"));