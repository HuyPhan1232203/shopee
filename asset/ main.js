// scroll fixed 
function addElement(){
    document.getElementById('clone').style.display='block';
}
function removeElement(){
    document.getElementById('clone').style.display='none';
}

window.addEventListener('scroll',function(){
    var header = document.getElementById('menu');
    var scrollPosi=window.scrollY;
    var a=2550;
    if(scrollPosi >=a && scrollPosi < 5050){
        header.classList.add('sticky');
        addElement();
    }
    else{
        header.classList.remove('sticky');
        removeElement();
    }
}
);
function Click(){
    document.getElementById("modal__overlay").style.display="block";
    document.getElementById("modal").style.display="flex";
    document.getElementById("login-form").style.display="block";
}
function registerClick(){
    document.getElementById("modal__overlay").style.display="block";
    document.getElementById("modal").style.display="flex";
    document.getElementById("register-form").style.display="block";
    document.getElementById("login-form").style.display="none";

}
function loginClick(){
    document.getElementById("modal__overlay").style.display="block";
    document.getElementById("modal").style.display="flex";
    document.getElementById("register-form").style.display="none";
    document.getElementById("login-form").style.display="block";

}
function exit(){
    document.getElementById("modal__overlay").style.display="none";
    document.getElementById("modal").style.display="none";
    document.getElementById("register-form").style.display="none";
    document.getElementById("login-form").style.display="none";
}
var allIntroImg=[
    "https://cf.shopee.vn/file/vn-50009109-3b4844af326ff3b9c1e1793d0dbda9f3_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-1c22c2397f2d521dec292bc82a7e5488_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-52dbd04934726189fb1aa3de88cf9e1b_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-d23fb29b9661286224c809bea9dbd761_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-3909648f4ba31e18948449e40c58aa66_xxhdpi"
]
var count=0;
function nextSlide(){
    var imgPass= document.getElementById("img-pass");
    count++;
    if(count>=allIntroImg.length){
        count=0;
    }
    imgPass.style.backgroundImage= "url(" + allIntroImg[count]+")";
    imgPass.style.transitionDuration="0.5s";

}
function preSlide(){
    count--;
    if(count<=0){
        count=allIntroImg.length-1;
    }
    var imgPass= document.getElementById("img-pass");
    imgPass.style.backgroundImage="url("+allIntroImg[count]+")";
    imgPass.style.transitionDuration=".5s";
}
let introSlideIndex= count;
function introSlides(){ 
    var imgPass= document.getElementById("img-pass");
    introSlideIndex++;
    if(introSlideIndex>=allIntroImg.length){
        introSlideIndex=0;
    }
    imgPass.style.backgroundImage="url("+allIntroImg[introSlideIndex]+")";
    // imgPass.style.animation="fade ease-in .5s"
    setTimeout(introSlides,2000);
}
introSlides();
let slideIndex = 0;
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("shopee-mall-img-slide");
  let dot = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1}    
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
showSlides();


