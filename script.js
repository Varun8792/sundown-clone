const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemC=document.querySelector("#elem-container");
var fixed=document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
    fixed.style.display="block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display="none"
})

// var elem1=document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//    var image= elem1.getAttribute("data-image")
//    fixed.style.backgroundImage=`url(${image})`
// })
                    //  OR

function page4Animation(){
  var elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    var image=e.getAttribute("data-img")
    fixed.style.backgroundImage=`url(${image})`
  })
})
}

// swiper js
function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
  });
}
swiperAnimation()
page4Animation()