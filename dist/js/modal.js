"use strict";const body=document.querySelector(".page"),modalContainer=document.querySelector(".modal"),modalCloseButton1=modalContainer.querySelector(".modal__close-button--1"),modalCloseButton2=modalContainer.querySelector(".modal__close-button--2"),modalCloseButton3=modalContainer.querySelector(".modal__close-button--3"),modalCloseButton4=modalContainer.querySelector(".modal__close-button--4"),modalCloseButton5=modalContainer.querySelector(".modal__close-button--5"),modalCloseButton6=modalContainer.querySelector(".modal__close-button--6"),modalCloseButton7=modalContainer.querySelector(".modal__close-button--7"),overlay=modalContainer.querySelector(".modal__overlay"),acknowledge1=document.querySelector(".acknowledgements__link--1"),acknowledge2=document.querySelector(".acknowledgements__link--2"),acknowledge3=document.querySelector(".acknowledgements__link--3"),acknowledge4=document.querySelector(".acknowledgements__link--4"),acknowledge5=document.querySelector(".acknowledgements__link--5"),acknowledge6=document.querySelector(".acknowledgements__link--6"),acknowledge7=document.querySelector(".acknowledgements__link--7");acknowledge1.addEventListener("click",o=>{o.preventDefault(),body.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal--1")}),modalCloseButton1.addEventListener("click",o=>{o.preventDefault(),body.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal--1")}),acknowledge2.addEventListener("click",o=>{o.preventDefault(),body.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal--2")}),modalCloseButton2.addEventListener("click",o=>{o.preventDefault(),body.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal--2")}),acknowledge3.addEventListener("click",o=>{o.preventDefault(),body.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal--3")}),modalCloseButton3.addEventListener("click",o=>{o.preventDefault(),body.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal--3")}),acknowledge4.addEventListener("click",o=>{o.preventDefault(),body.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal--4")}),modalCloseButton4.addEventListener("click",o=>{o.preventDefault(),body.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal--4")}),acknowledge5.addEventListener("click",o=>{o.preventDefault(),body.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal--5")}),modalCloseButton5.addEventListener("click",o=>{o.preventDefault(),body.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal--5")}),acknowledge6.addEventListener("click",o=>{o.preventDefault(),body.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal--6")}),modalCloseButton6.addEventListener("click",o=>{o.preventDefault(),body.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal--6")}),acknowledge7.addEventListener("click",o=>{o.preventDefault(),body.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal"),modalContainer.classList.add("js-show-modal--7")}),modalCloseButton7.addEventListener("click",o=>{o.preventDefault(),body.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal--7")}),window.addEventListener("keydown",o=>{27===o.keyCode&&modalContainer.classList.contains("js-show-modal")&&(o.preventDefault(),body.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal--1"),modalContainer.classList.remove("js-show-modal--2"),modalContainer.classList.remove("js-show-modal--3"),modalContainer.classList.remove("js-show-modal--4"),modalContainer.classList.remove("js-show-modal--5"),modalContainer.classList.remove("js-show-modal--6"),modalContainer.classList.remove("js-show-modal--7"))}),overlay.addEventListener("click",()=>{modalContainer.classList.contains("js-show-modal")&&(body.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal"),modalContainer.classList.remove("js-show-modal--1"),modalContainer.classList.remove("js-show-modal--2"),modalContainer.classList.remove("js-show-modal--3"),modalContainer.classList.remove("js-show-modal--4"),modalContainer.classList.remove("js-show-modal--5"),modalContainer.classList.remove("js-show-modal--6"),modalContainer.classList.remove("js-show-modal--7"))});