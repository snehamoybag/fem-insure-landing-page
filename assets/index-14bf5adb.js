(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const o=document.querySelector("#btn-nav-hamburger"),r=document.querySelector("#nav-header-list");o.addEventListener("click",()=>{o.getAttribute("aria-expanded")==="true"?c():u()});function u(){o.setAttribute("aria-expanded","true"),r.setAttribute("data-state","opened"),document.body.classList.add("overflow","overflow--y-hidden")}function c(){o.setAttribute("aria-expanded","false"),r.setAttribute("data-state","closing"),r.addEventListener("animationend",()=>{r.setAttribute("data-state","closed")},{once:!0}),document.body.classList.remove("overflow","overflow--y-hidden")}
