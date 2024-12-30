const root = document.querySelector('#root')
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');


window.onload = () => {
  main()
}
const main = () => {

  btn.addEventListener("click", ()=> {
    const bgColor = genarateRgbColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor
    
  })

}

const genarateRgbColor = () => {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

const salad = ["tomato", "cucumber", "lici", "jackfourit"]
const copuSlad = salad.slice()


console.log(Array.isArray(salad))

const [tomat, cina, has, gas, ha] = [1,2,3,4,]
console.log(ha)

const customers = [
  {
    id: 1,
    f_name: "John",
    l_name: "Doe",
    gender: "Male",
    married: true,
    age: 30,
    expense: 1000,
    purchased: ["Shaban", "Shunu"]
  },
  {
    id: 2,
    f_name: "Jane",
    l_name: "Smith",
    gender: "Female",
    married: false,
    age: 25,
    expense: 1500,
    purchased: ["Vaja", "Biscit"]
  },
  {
    id: 3,
    f_name: "John",
    l_name: "Doe",
    gender: "Male",
    married: true,
    age: 30,
    expense: 1000,
    purchased: ["Pototo", "patroy"]
  },
  {
    id: 4,
    f_name: "Jane",
    l_name: "Smith",
    gender: "Female",
    married: false,
    age: 25,
    expense: 1500,
    purchased: ["Muya", "Jelapai"]
  },
  {
    id: 5,
    f_name: "John",
    l_name: "Doe",
    gender: "Male",
    married: true,
    age: 70,
    expense: 1000,
    purchased: ["Narikel", "Pawruti"]
  },
  {
    id: 6,
    f_name: "Jane",
    l_name: "Smith",
    gender: "Female",
    married: false,
    age: 65,
    expense: 1500,
    purchased: ["Moja", "Valo"]
  },
];

const seniorCustomer = customers.filter(customer => customer.age <=50 )
console.log(seniorCustomer)

