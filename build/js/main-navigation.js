"use strict";const mainMenu=document.querySelector(".page-header__popup"),mainMenuButtonOpen=document.querySelector(".menu-controls__button--open"),mainMenuButtonClose=document.querySelector(".menu-controls__button--close"),menuVisibilityToggle=function(e){mainMenu.classList.toggle("is-visible"),mainMenuButtonOpen.classList.toggle("is-visible"),mainMenuButtonClose.classList.toggle("is-visible"),e.focus()};mainMenuButtonOpen.addEventListener("click",e=>{e.preventDefault(),menuVisibilityToggle(mainMenuButtonClose)}),mainMenuButtonClose.addEventListener("click",e=>{e.preventDefault(),menuVisibilityToggle(mainMenuButtonOpen)}),window.addEventListener("keydown",e=>{27===e.keyCode&&mainMenu.classList.contains("is-visible")&&(e.preventDefault(),menuVisibilityToggle(mainMenuButtonOpen))});