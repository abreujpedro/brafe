(()=>{"use strict";!function(){function e(e){var t;e.preventDefault(),t=function(e){const t=e.getAttribute("href");return document.querySelector(t).offsetTop}(e.target)-100,window.scroll({top:t,behavior:"smooth"})}document.querySelectorAll('.menu-nav a[href^="#"]').forEach((t=>{t.addEventListener("click",e)}))}(),function(){const e=document.querySelectorAll("[data-anim]"),t="animate";function o(){const o=window.pageYOffset+3.5*window.innerHeight/4;e.forEach((e=>{o>e.offsetTop&&window.pageYOffset<e.offsetTop+e.offsetHeight?e.classList.add(t):(window.pageYOffset,e.offsetTop,e.offsetHeight,e.classList.remove(t))}))}e.length&&(o(),window.addEventListener("scroll",o))}(),function(){const e=document.querySelector("[data-top]"),t="ativo",o=document.querySelector(".mistura").offsetTop;function n(){window.scroll({top:0,behavior:"smooth"})}function c(){window.pageYOffset>o?(e.classList.add(t),e.addEventListener("click",n)):e.classList.remove(t)}c(),window.addEventListener("scroll",c)}(),function(){const e=document.querySelector('[data-type="h1"]'),t=document.querySelector('[data-type="p"]');function o(e){const t=e.innerHTML.indexOf("<br>"),o=e.innerHTML.replace("<br>","").split("");e.innerHTML="",o.forEach(((o,n)=>{setTimeout((()=>{n===t&&(e.innerHTML+="<br>"),e.innerHTML+=o}),80*n)}))}o(e),o(t)}(),function(){const e=document.querySelector(".contato"),t=document.querySelector(".modal"),o=document.querySelector(".fechar"),n=document.querySelector(".x1"),c=document.querySelector(".x2");t.addEventListener("click",(function(e){const i=e.target;i!==t&&i!==o&&i!==n&&i!==c||t.classList.remove("ativo")})),e.addEventListener("click",(function(e){e.preventDefault(),t.classList.add("ativo")}))}(),function(){const e=document.querySelector(".mobile-content"),t=document.querySelector(".btn-mobile"),o=document.querySelectorAll('.menu-nav ul li a[href^="#"]'),n=document.querySelector(".menu-nav");function c(){n.classList.contains("ativado")?(document.documentElement.style.overflow="hidden",document.body.scroll="no"):(document.documentElement.style.overflow="auto",document.body.scroll="yes")}function i(){n.classList.remove("ativado"),e.classList.remove("at"),t.classList.remove("ativ"),c()}o.forEach((e=>{e.addEventListener("click",i)})),e.addEventListener("click",(function(){n.classList.toggle("ativado"),e.classList.toggle("at"),t.classList.toggle("ativ"),c()}))}()})();