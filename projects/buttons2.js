let back = document.getElementById("back");
back.addEventListener("click", function(){
    history.back();
})

let buttonBack = document.getElementById("swich2");

buttonBack.addEventListener("click", function(){
    this.classList.toggle("mobile");
    document.getElementById("iframe").classList.toggle("width-mobile-640");
} )