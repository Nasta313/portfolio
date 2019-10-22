let buttonBack = document.getElementById("swich");

buttonBack.addEventListener("click", function(){
    this.classList.toggle("mobile");
    document.getElementById("iframe").classList.toggle("width-mobile-640");
} )