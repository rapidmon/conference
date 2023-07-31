document.addEventListener("DOMContentLoaded", function(){
    const main = document.querySelector(".logo-back");
    const main_title = document.querySelector(".main-title");

    main_title.addEventListener("click", function(){
        main.style.transform = "translate(3%, -47.5%)";
    })
});