import{S as a,N as u,A as d,G as p,P as f}from"./assets/vendor-4e25c2f8.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new a(".swiperReviews",{modules:[u,d],speed:250,grabCursor:!0,spaceBetween:24,loop:!0,navigation:{nextEl:".reviews-btn.swiper-button-next",prevEl:".reviews-btn.swiper-button-prev"},breakpoints:{1200:{slidesPerView:3,autoplay:{delay:250,disableOnInteraction:!1}}}});document.addEventListener("DOMContentLoaded",function(){let n,i;function s(){window.innerWidth<1200?n||(n=new a(".swiperBenefits",{modules:[p,u],spaceBetween:12,speed:250,slidesPerView:1,grabCursor:!0,grid:{rows:2,fill:"row"},navigation:{nextEl:".benefits-btn.swiper-button-next",prevEl:".benefits-btn.swiper-button-prev"}})):n&&(n.destroy(!0,!0),n=null)}function o(){i||(i=new a(".swiperGallery",{modules:[u,f],speed:250,spaceBetween:30,grabCursor:!0,hashNavigation:{watchState:!0},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".gallery-btn.swiper-button-next",prevEl:".gallery-btn.swiper-button-prev"}}))}function e(){s(),o()}window.addEventListener("resize",e),e()});const r={mobileMenu:document.querySelector(".js-menu-container"),openMenuBtn:document.querySelector(".js-open-menu"),closeMenuBtn:document.querySelector(".js-close-menu"),closeMenuLink:document.querySelectorAll(".header-link"),playMarketImage:document.querySelector(".google-image")};function c(){const n=r.openMenuBtn.getAttribute("aria-expanded")==="true"||!1;r.openMenuBtn.setAttribute("aria-expanded",!n),r.mobileMenu.classList.toggle("is-open"),r.mobileMenu.classList.contains("is-open")?(document.body.classList.add("no-scroll"),r.playMarketImage.classList.remove("google-image")):(document.body.classList.remove("no-scroll"),r.playMarketImage.classList.add("google-image"))}r.closeMenuLink.forEach(n=>n.addEventListener("click",c));r.openMenuBtn.addEventListener("click",c);r.closeMenuBtn.addEventListener("click",c);
//# sourceMappingURL=commonHelpers3.js.map
