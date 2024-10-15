
const box1 = document.querySelector("#card")
const box2 = document.querySelector("#card1")
console.log(box1);


box2.style.display = "none";

box1.onclick = function(){
    if(box2.style.display == "block"){
        box2.style.display = "none"
    }else {
        box2.style.display = 'block'
    }
}