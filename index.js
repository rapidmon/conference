const main = document.querySelector(".logo-back");
const main_title = document.querySelector(".main-title");
const intro = document.querySelector(".intro");
const intro_text = document.querySelector(".intro-text");
const frontier = document.querySelector(".frontier");
const alpha = document.querySelector(".alpha");
const nd = document.querySelector(".nd");
const frontier_desc = document.querySelector(".frontier-desc");
const alpha_desc = document.querySelector(".alpha-desc");
const nd_desc = document.querySelector(".nd-desc");
const text_name = document.querySelector(".name");
const text_end = document.querySelector(".text-end");
const text_start = document.querySelector(".text-start");
const hero = document.querySelector(".hero-contents");
const hero_img_list = document.querySelector(".hero-img-list");
const interactive = document.querySelector(".interactive");
const dongailbo = document.querySelector(".dongailbo");
const inside = document.querySelector(".inside");
const hero_contents_logo = document.querySelector(".hero-contents-logo");
const cooperation = document.querySelector(".cooperation");
const reference = document.querySelector(".reference");
let intro_click_num = 0;
let hero_click_num = 0;
let coo_click_num = 0;

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
    } else if(intro_click_num === 3){
        frontier.style.opacity = 0;
        alpha.style.opacity = 0;
        nd.style.opacity = 0;
        frontier_desc.style.opacity = 0;
        alpha_desc.style.opacity = 0;
        nd_desc.style.opacity = 0;
        setTimeout(() => {
            intro_text.style.left = "15%";
            text_name.style.transform = "translateX(-300px)";
            text_end.style.transform = "translateX(-350px)";
            setTimeout(() => {
                text_name.style.transition = "none";
                text_end.style.transition = "none";
                text_start.textContent = `"안녕하세요, 기자의 시선이 혁신을 찾을 때, 그들의 비전을 현실로 만드는 개발자`;
                text_start.style.clipPath = "inset(0 84% 0 0)";
                text_name.style.transform = "translateX(-1040px)";
                text_end.style.transform = "translateX(-1090px)";
            }, 500)
            setTimeout(() => {
                text_start.style.transition = "1.5s ease-in-out";
                text_name.style.transition = "1.5s ease-in-out";
                text_end.style.transition = "1.5s ease-in-out";
                text_name.style.transform = "translateX(-300px)";
                text_end.style.transform = "translateX(-350px)";
                text_start.style.clipPath = "inset(0 0 0 0)";
            }, 1000)
        },500)
        intro_click_num++;
    } else if(intro_click_num === 4){
        main.style.transform = "translate(-3%, -45%)";
        intro_click_num++;
    }
})

hero.addEventListener("click", ()=>{
    if(hero_click_num === 0){
        dongailbo.classList.add("dongailbo-on");
        hero_click_num++;
    } else if(hero_click_num === 1){
        dongailbo.classList.remove("dongailbo-on");
        interactive.classList.add("interactive-on");
        hero_click_num++;
    } else if(hero_click_num === 2){
        interactive.classList.remove("interactive-on");
        inside.classList.add("inside-on");
        hero_click_num++;
    } else if(hero_click_num === 3){
        inside.classList.remove("inside-on");
        hero_img_list.style.gap = 0;
        setTimeout(() => {
            hero_img_list.style.opacity = 0;
            hero_contents_logo.style.opacity = 1;
        },500)
        hero_click_num++;
    } else if(hero_click_num === 4){
        main.style.transform = "translate(-42%, -44.8%)";
        hero_click_num++;
    }
})

cooperation.addEventListener("click", ()=>{
    if(coo_click_num === 0){
        reference.classList.add("reference-on");
        coo_click_num++;
    } else if(coo_click_num === 1){

    } else if(coo_click_num === 2){
        
    }
})