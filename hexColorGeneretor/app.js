const root = document.querySelector('#root')
const btn = document.querySelector('#btn');
console.log(btn);


window.onload = () => {
  main()
}
const main = () => {

  btn.addEventListener("click", ()=> {
    const bgColor = genarateRgbColor();
    return   root.style.backgroundColor = bgColor
    
  })

}

const genarateRgbColor = () => {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  return `rgb(${red}, ${green}, ${blue})`
}