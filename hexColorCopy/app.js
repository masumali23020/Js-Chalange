const root = document.querySelector('#root')
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');
const copuBtn = document.querySelector('#copy-btn');


window.onload = () => {
  main()
}
const main = () => {

  btn.addEventListener("click", ()=> {
    const bgColor = genarateRgbColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor
    
  })

  copuBtn.addEventListener("click", ()=> {
    navigator.clipboard.writeText(output.value)
  })

}

const genarateRgbColor = () => {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}