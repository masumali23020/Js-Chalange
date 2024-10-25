const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const image = document.querySelectorAll(".image")
let sliderNumber = 1; 
console.log(slider.querySelector('img:last-child'))

right.addEventListener("click", ()=> {
  slider.append(slider.querySelector("img:last-child"))
  console.log("right")
})
left.addEventListener("click", ()=> {
  slider.append(slider.querySelector('img:first-child'))
  console.log("left")
})


// left.addEventListener("click", ()=>{
// if(sliderNumber < image.length ) {
//   slider.style.transform = `translateX(-${sliderNumber * 800}px)`;
 
//  sliderNumber ++
//  console.log("right")
// }else {
//   slider.style.transform = `translateX(0px)`;
 
//   sliderNumber = 1
//   console.log("fase")
// }
// })

// right.addEventListener("click", ()=> {
//   if(sliderNumber < image.length){
//     slider.style.transform = `translateX(-${(sliderNumber - 2) * 800}px)`;
//     sliderNumber--;
//     console.log("sdafs")
//   }else{
//     slider.style.transform = `translateX(0px)`;
//     sliderNumber = image.length;
//   }
// })