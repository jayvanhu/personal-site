var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{r as l,R as c,N as i,F as s,a as o,u as m,Q as d,b as u,H as p,D as b,S as f,c as g,d as h,e as E,f as v,g as y,h as j,i as k}from"./vendor.d4b1f9dc.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var N="/personal-site/assets/resume-public.1d0d024b.pdf";function _(){const[e,t]=l.exports.useState(!1);return c.createElement("div",{className:"nav-container"},c.createElement("nav",{id:"aria-site-nav",className:`nav-links ${a={active:e},Object.entries(a).filter((([e,t])=>t)).map((([e,t])=>e)).join(" ")}`,"aria-label":"Site","aria-hidden":!e},c.createElement(i,{className:"nav-link",activeClassName:"active",to:"/about",tabIndex:e?0:-1},"About"),"•",c.createElement(i,{className:"nav-link",activeClassName:"active",to:"projects",tabIndex:e?0:-1},"Projects / Code Samples"),"•",c.createElement("a",{href:N,className:"nav-link",target:"_blank",tabIndex:e?0:-1},"Resume")),c.createElement("button",{className:"nav-btn",onClick:()=>t(!e),"aria-label":"open site nav","aria-expanded":e,"aria-controls":"aria-site-nav"},e?c.createElement(s,null):c.createElement(o,null)));var a}const w="https://github.com/jayvanhu",S="https://www.linkedin.com/in/jayvanhu/";function I({href:e,children:t}){return c.createElement("a",{href:e,className:"link"},t)}function L({title:e,img:t,description:a,link:r,sourceCodeLink:n,tags:l}){return c.createElement("article",{className:"project-card","aria-labelledby":"aria-project-card__img-label"},c.createElement("h4",{id:"aria-project-card__img-label",className:"project-card__title"},e),c.createElement("img",{className:"project-card__image project-card__section",src:t,alt:"",role:"presentation"}),c.createElement("div",{className:"project-card__body project-card__section"},c.createElement("div",{className:"project-card__tags"},null==l?void 0:l.map((e=>c.createElement("span",{key:e,className:"tag"},e)))),c.createElement("p",null,a),c.createElement("div",{className:"project-card__links"},r?c.createElement(I,{href:r},"Link"):null,n?c.createElement(I,{href:n},"Source"):null)))}let O=-1;function P(){return O++,O}function C(){const e=[{id:P(),title:"Personal Website",img:"/personal-site/assets/personal.fddb937c.jpg",description:"This website that you're viewing right now. Built with accessibility and responsive design in mind. Occasionally updated to apply newly learned frontend skills.",sourceCodeLink:"https://github.com/jayvanhu/personal-site",tags:["React"]},{id:P(),title:"Discord UI",img:"/personal-site/assets/discord-ui.b98556ff.jpg",description:"A clone of the UI for the Discord voice chat application. Uses Docker to run as a full-stack app to query mock data from a GraphQL backend. Built using Test-Driven Development.",tags:["WIP","React","Nest.js","GraphQL","Docker"],sourceCodeLink:"https://github.com/jayvanhu/discord-ui"},{id:P(),title:"Golang Blog Scraper",img:"/personal-site/assets/golang-blog-scrape.2318d3ad.jpg",description:"A web scraper written in Golang to scrape Joel's blog. Utilizes goroutines and rate limiting to scrape the site concurrently and safely. Outputs result to an html file.",tags:["Golang","Scripting"],sourceCodeLink:"https://github.com/jayvanhu/blog-scrape"}];return Promise.resolve(e)}function D(){const{data:e}=m("projects",C);return c.createElement("section",{className:"project-cards","aria-label":"Personal Projects and Code Samples"},null==e?void 0:e.map((e=>c.createElement(L,((e,l)=>{for(var c in l||(l={}))a.call(l,c)&&n(e,c,l[c]);if(t)for(var c of t(l))r.call(l,c)&&n(e,c,l[c]);return e})({key:e.id},e)))))}const x=new d;function G(){return c.createElement(u,{client:x},c.createElement(p,null,c.createElement("header",{className:"landing-header"},c.createElement(b,{className:"header-icon"}),c.createElement(_,null)),c.createElement("main",null,c.createElement(f,null,c.createElement(g,{from:"/",to:"about",exact:!0}),c.createElement(h,{path:"/about"},c.createElement("section",{className:"blurb","aria-label":"blurb"},c.createElement("h4",null,"Full-Stack ",c.createElement(E,{role:"presentation",className:"heart"})," Engineering"),c.createElement("p",null,"React.js, TypeScript, & a variety of backend languages")),c.createElement("section",{className:"description","aria-label":"description"},c.createElement("h4",null,"Jason Huynh"),c.createElement("p",null,"I'm a curious, versatile engineer eager to learn new skills & technologies and apply them across both frontend and backend."),c.createElement("p",null,"I care about leaving code better than when I found it and approach coding with an attention for clarity, modularity, and maintainability."))),c.createElement(h,{path:"/projects"},c.createElement(D,null)))),c.createElement("footer",{className:"footer"},c.createElement("a",{href:S,"aria-label":"linkedin"},c.createElement(v,{role:"presentation"})),c.createElement("a",{href:w,"aria-label":"github"},c.createElement(y,{role:"presentation"})),c.createElement("a",{href:N,target:"_blank","aria-label":"resume pdf"},c.createElement(j,{role:"presentation"})))))}k.render(c.createElement(c.StrictMode,null,c.createElement(G,null)),document.getElementById("root"));
