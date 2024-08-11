//ELEMENTS
const preloader=document.querySelector(".preloader")
const preloaderIcon=preloader.children[1];
const preloaderMessage=document.querySelector(".preloader-message")
const models=document.querySelector(".model").children;
const title=document.querySelector(".title");
const filter=document.querySelector(".filter");
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
Array.from(models).forEach((model)=>{
    model.addEventListener("mouseover",(event)=>{
        Array.from(models).forEach((otherModels)=>{
            otherModels.classList.add("timeStop","grayscale");
            title.classList.add("timeStop")
            filter.classList.remove("hide");
        })
        event.target.classList.remove("timeStop","grayscale");
    })
    model.addEventListener("mouseout",()=>{
        Array.from(models).forEach((otherModels)=>{
            otherModels.classList.remove("timeStop","grayscale");
            title.classList.remove("timeStop");
            filter.classList.add("hide");
        })
    })
})