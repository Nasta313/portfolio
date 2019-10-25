let back = document.getElementById("back");
back.addEventListener("click", function(){
    history.back();
})

let buttonMobDesc = document.getElementById("swich");

buttonMobDesc.addEventListener("click", function(){
    this.classList.toggle("mobile");
    document.getElementById("iframe").classList.toggle("width-mobile-375");
} )