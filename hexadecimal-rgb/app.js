/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 * - Add a toast message when copied
 */

// Steps

// Globals
let div = null;

// Step 1 - create onload handler
window.onload = () => {
	main();
};

function main() {
	const root = document.getElementById('root');
	const output = document.getElementById('output');
	const changeBtn = document.getElementById('change-btn');
	const output2 = document.getElementById('output2');

	changeBtn.addEventListener('click', function () {
		const color = genareteColorDecimal()
		const bgColor = generateHexColor(color);
		const bgColorRgb = genareRGBcolor(color)
		root.style.backgroundColor = bgColor;
		output.value = bgColor;
		output2.value = bgColorRgb
	});

	copyBtn.addEventListener('click', function () {
		navigator.clipboard.writeText(output.value);
		if (div !== null) {
			div.remove();
			div = null;
		}
		if(isHaxvalid(output.value)){
			
			generateToastMessage(`${output.value} copied`);
		}else{
			
			
			alert("invlaid cour code")
			
		}
	});

	output.addEventListener("keyup", function(e){
		let color = e.target.value;
		if(color && isHaxvalid(color)){
			return root.style.backgroundColor = color;
		}
	})
}

// step 2 - random color generator function


function genareteColorDecimal (){
	const red = Math.floor(Math.random() * 255);
	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);

	return {
		red, 
		green,
		blue
	}

}
function generateHexColor({red, green, blue}) {

	

	const getTOCOde = (value) => {
		const hax = value.toString(16)
		return hax.length === 1 ? `0${hax}` : hax
	}

	return `#${getTOCOde(red)}${getTOCOde(green)}${getTOCOde(blue)}`.toUpperCase();
}

function genareRGBcolor({red, green, blue}){
	

	return (`rgb(${red}, ${green}, ${blue})`)

}


function generateToastMessage(msg) {
	div = document.createElement('div');
	div.innerText = msg;
	div.className = 'toast-message toast-message-slide-in';

	div.addEventListener('click', function () {
		div.classList.remove('toast-message-slide-in');
		div.classList.add('toast-message-slide-out');

		div.addEventListener('animationend', function () {
			div.remove();
			div = null;
		});
	});

	document.body.appendChild(div);
}

/**
 * @param {String} color
 */
function isHaxvalid (color) {
	if(color.length !== 7) return false;
	if(color[0] !== '#') return false;

	color = color.substring(1)
	return  /^[0-9A-Fa-f]{6}$/i.test(color)

}


// step 3 - collect all necessary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event

// Step 6 - activate toast message

// Step 7 - create a dynamic toast message

// step 8 - clear toast message

// step 9 - create isHaxvalid function

// step 10 - implement change handeler an input filed

// step 11 - prevent coping hax color if it is not valid 