/* empty css                      */import{S as u,N as f,E as y,P as b,G as h}from"./assets/vendor-4d988ccd.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&m(a)}).observe(document,{childList:!0,subtree:!0});function l(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(t){if(t.ep)return;t.ep=!0;const s=l(t);fetch(t.href,s)}})();const n={firstBox:document.querySelector(".js-about-box-first"),secondBox:document.querySelector(".js-about-box-second"),firstImage:document.querySelector(".js-first-image"),secondImage:document.querySelector(".js-second-image")};window.addEventListener("resize",w(g,100));document.addEventListener("DOMContentLoaded",g);function g(){window.innerWidth<=1200?B():E()}function E(){n.firstBox.contains(n.firstImage)&&(n.firstBox.replaceChild(n.secondImage,n.firstImage),n.secondBox.insertBefore(n.firstImage,n.secondBox.firstChild))}function B(){n.firstBox.contains(n.secondImage)&&(n.firstBox.replaceChild(n.firstImage,n.secondImage),n.secondBox.insertBefore(n.secondImage,null))}function w(e,i){let l;return function(){clearTimeout(l),l=setTimeout(()=>e.apply(this,arguments),i)}}new u(".swiperReviews",{modules:[f,y],effect:"coverflow",centeredSlides:!0,slidesPerView:"auto",speed:250,grabCursor:!0,spaceBetween:24,navigation:{nextEl:".reviews-btn.swiper-button-next",prevEl:".reviews-btn.swiper-button-prev"},breakpoints:{320:{slidesPerView:1},1200:{slidesPerView:3,speed:850,loop:!0,coverflowEffect:{rotate:40,stretch:0,depth:80,modifier:1,slideShadows:!1}}}});new u(".swiperGallery",{modules:[f,b],speed:450,spaceBetween:4,grabCursor:!0,hashNavigation:{watchState:!0},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".gallery-btn.swiper-button-next",prevEl:".gallery-btn.swiper-button-prev"}});let c;const k=()=>{window.innerWidth<1200?c||(c=new u(".swiperBenefits",{modules:[h,f],spaceBetween:12,speed:250,slidesPerView:1,grabCursor:!0,grid:{rows:2,fill:"row"},navigation:{nextEl:".benefits-btn.swiper-button-next",prevEl:".benefits-btn.swiper-button-prev"}})):c&&(c.destroy(!0,!0),c=null)};window.addEventListener("resize",w(k,300));const o={mobileMenu:document.querySelector(".js-menu-container"),openMenuBtn:document.querySelector(".js-open-menu"),closeMenuBtn:document.querySelector(".js-close-menu"),closeMenuLink:document.querySelectorAll(".js-header-link")};window.addEventListener("resize",v);document.addEventListener("DOMContentLoaded",v);function M(){o.openMenuBtn.addEventListener("click",r),o.closeMenuBtn.addEventListener("click",r),o.closeMenuLink.forEach(e=>e.addEventListener("click",r))}function S(){o.openMenuBtn.removeEventListener("click",r),o.closeMenuBtn.removeEventListener("click",r),o.closeMenuLink.forEach(e=>e.removeEventListener("click",r))}function v(){window.innerWidth<=1200?M():S()}function r(){const e=o.openMenuBtn.getAttribute("aria-expanded")==="true"||!1;o.openMenuBtn.setAttribute("aria-expanded",!e),o.mobileMenu.classList.toggle("is-open"),o.mobileMenu.classList.contains("is-open")?document.body.classList.add("no-scroll"):document.body.classList.remove("no-scroll")}o.closeMenuLink.forEach(e=>e.addEventListener("click",r));o.openMenuBtn.addEventListener("click",r);o.closeMenuBtn.addEventListener("click",r);document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".header");window.addEventListener("scroll",()=>{window.scrollY>190?e.classList.add("header-on-scroll"):e.classList.remove("header-on-scroll")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".play-market-link");if(e){const i=e.cloneNode(!0);document.querySelector(".choose-container").appendChild(i)}});const d={cookiesModal:document.querySelector(".cookies-section"),acceptBtn:document.getElementById("accept-cookies"),declineBtn:document.getElementById("decline-cookies")},p=localStorage.getItem("cookiesAgreement");p?console.log(`Already exist Agreement: "${p}"`):setTimeout(()=>{d.cookiesModal.style.display="block",console.log("There is no any Agreement")},1500);const L=e=>{const{id:i}=e.target;switch(i){case"accept-cookies":localStorage.setItem("cookiesAgreement","accepted");break;case"decline-cookies":localStorage.setItem("cookiesAgreement","declined")}d.cookiesModal.style.display="none"};d.acceptBtn.addEventListener("click",L);d.declineBtn.addEventListener("click",L);
//# sourceMappingURL=commonHelpers3.js.map
