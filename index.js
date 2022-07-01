let palette = null;
let textarea = null;

main();

function onkeypress(keyboardEvent) {
	switch (keyboardEvent.key) {
		case 'Enter': 
			if (keyboardEvent.ctrlKey) {
				resetInput();
			} 
			if (keyboardEvent.shiftKey) {
				muteText();
			} 

			insertNewLine();
			randomizePallete();
			break;
		default:
			insertText(keyboardEvent.key);
			break;
	}
}

function getActiveInput() {
	const c = textarea.children;
	const input = c[c.length - 2]; // last on is a brick element

	return input;
}

function insertText(text) {
	getActiveInput().innerHTML += text;
}

function muteText() {
	getActiveInput().classList.add('mute');
}

function insertNewLine() {
	const bar = textarea.querySelector('b');
	if (bar) bar.parentElement.removeChild(bar);

	const el = document.createElement('p');
	textarea.appendChild(el);

	textarea.innerHTML += '<b>▮</b>'
}

function resetInput() {
	textarea.innerHTML = '';
}

function main() {
	window.addEventListener('keypress', onkeypress)
	window.addEventListener('click', _onclick)
	window.addEventListener('paste', _onpaste);
	textarea = document.querySelector('bb#main text');
}

function _onpaste() {
	let paste = (event.clipboardData || window.clipboardData).getData('text');

	if (!paste.length) {
		insertText('🍍');
		return;
	}

	insertText(paste);
}

function _onclick() {
	randomizePallete();
}

function _loadPalette() {
	palette = document.querySelector('db#palette').innerHTML;
	palette = palette.split('\n'); // Array[32]. Palette from https://lospec.com/palette-list/pineapple-32
}

function randomizePallete() {
	if (!palette) {
		_loadPalette();
	}

	const colors = palette.length;
	const colorA = Math.round(Math.random() * colors);
	const colorB = Math.round(Math.random() * colors);

	if (colorA == colorB) { randomizePallete(); return; }

	document.body.style.setProperty("--dust-color-a", "#" + palette[colorA]);
	document.body.style.setProperty("--dust-color-b", "#" + palette[colorB]);
}
