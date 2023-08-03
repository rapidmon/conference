const main = document.querySelector(".logo-back");
const main_title = document.querySelector(".main-title");
const intro = document.querySelector(".intro");
const frontier = document.querySelector(".frontier");
const alpha = document.querySelector(".alpha");
const nd = document.querySelector(".nd");
const frontier_desc = document.querySelector(".frontier-desc");
const alpha_desc = document.querySelector(".alpha-desc");
const nd_desc = document.querySelector(".nd-desc");
let intro_click_num = 0;

main_title.addEventListener("click", function(){
    main.style.transform = "translate(4%, -47.5%)";
})

intro.addEventListener("click", ()=>{
    if(intro_click_num === 0){
        frontier.style.transform = "translateY(-272px)";
        setTimeout(() => {
            frontier_desc.style.opacity = 1;
        },500)
        intro_click_num++;
    } else if(intro_click_num === 1){
        alpha.style.transform = "translateY(272px)";
        setTimeout(() => {
            alpha_desc.style.opacity = 1;
        }, 500)
        intro_click_num++;
    } else if(intro_click_num === 2){
        nd.style.transform = "translateY(-272px)";
        setTimeout(() => {
            nd_desc.style.opacity = 1;
        }, 500)
        intro_click_num++;
    }
})