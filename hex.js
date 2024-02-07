const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// #ff13f4

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNumber = () => {
	return Math.floor(Math.random() * hex.length);
};
btn.addEventListener('click', () => {
	let hexColor = '#';
	// let number = getRandomNumber();
	for (let i = 0; i < 6; i++) {
		// hexColor += hex[Math.floor(Math.random() * hex.length)];
		hexColor += hex[getRandomNumber()];
	}

	document.body.style.background = hexColor;
	color.textContent = hexColor;
});
