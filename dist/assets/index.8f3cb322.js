import{r as e,o,c as t,a as r,b as n,t as l,d as s,w as u,F as i,e as a}from"./vendor.262c9181.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?o.credentials="include":"anonymous"===e.crossorigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();const c={},d=r("h1",null,"Hello App!",-1),f=r("strong",null,"Current route path:",-1),p=n("Go to Home"),m=n("Go to About");c.render=function(a,c){const g=e("RouterLink"),y=e("RouterView");return o(),t(i,null,[d,r("p",null,[f,n(" "+l(a.$route.fullPath),1)]),r("nav",null,[s(g,{to:"/"},{default:u((()=>[p])),_:1}),s(g,{to:"/about"},{default:u((()=>[m])),_:1})]),r("main",null,[s(y)])],64)};const g=r("img",{alt:"Vue logo",src:"/assets/logo.03d6d6da.png"},null,-1);a({setup:e=>(e,r)=>(o(),t(i,null,[g,s(c)],64))}).mount("#app");
