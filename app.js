//ELEMENTS
const preloader=document.querySelector(".preloader")
const preloaderIcon=preloader.children[1];
const preloaderMessage=document.querySelector(".preloader-message")
const models=document.querySelectorAll(".model");
//JAVASCRIPT

const textAnimation=setInterval(()=>{
    
    preloaderMessage.textContent+=".";
    if(preloaderMessage.textContent.length>10){
        preloaderMessage.textContent="Loading";
    }
},500);

window.addEventListener("load",()=>{

    setTimeout(() => {
        preloaderIcon.addEventListener("animationiteration",()=>{
            clearInterval(textAnimation);
            preloaderMessage.textContent="Done";
            preloaderIcon.classList.remove("infinite-loading");
            preloaderIcon.classList.add("zoom-out");
            preloaderIcon.addEventListener("animationend",()=>{
                preloader.classList.add("hide");
            })
        })
    }, Math.floor(
        Math.random()*4000
    )+2000);
});
models.forEach((model)=>{
    model.addEventListener("mouseover",()=>{
        console.log("e")
        models.forEach((e)=>{
            e.classList.add("timeStop");
        })
        model.classList.remove("timeStop");
    })
})