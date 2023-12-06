document.addEventListener("DOMContentLoaded", function () {
    // main lodding
    // let title = document.querySelector(".title");
    // let circlBox = document.querySelector(".circle__box");
    // let mainBottom = document.querySelector(".main__bottom");
    // let dice = document.querySelector(".dice");
    // let starBox = document.querySelector(".star__box");
    // title.classList.add("loaded");
    // circlBox.classList.add("loaded");
    // mainBottom.classList.add("loaded");
    // dice.classList.add("loaded");
    // starBox.classList.add("loaded");

    let backgroundChangeDark = document.querySelector(".background__change__dark");
    let backgroundChangeYllow = document.querySelector(".background__change__yllow");

    let body = document.querySelector("body");
    backgroundChangeDark.addEventListener("click", () => {
        body.classList.remove("yelow");
        body.classList.add("sky");
    });
    backgroundChangeYllow.addEventListener("click", () => {
        body.classList.remove("sky");
        body.classList.add("yellow");
    });

});