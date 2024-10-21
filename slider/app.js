const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const image = document.querySelectorAll(".image")
let sliderNumber = 1;


left.addEventListener("click", ()=>{
if(sliderNumber < image.length ) {
  slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
 
 sliderNumber ++
 console.log("right")
}else {
  slider.style.transform = `translateX(0px)`;
 
  sliderNumber = 1
  console.log("fase")
}
})

right.addEventListener("click", ()=> {
  if(sliderNumber < image.length){
    slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
    sliderNumber--;
    console.log("sdafs")
  }else{
    slider.style.transform = `translateX(0px)`;
    sliderNumber = image.length;
  }
})