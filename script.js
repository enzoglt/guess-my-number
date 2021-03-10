'use strict';

function generator() {
	return Math.trunc(Math.random() * 20) + 1;
}

function editElement(element, content) {
	document.querySelector(element).textContent = content;
}

let secret = generator();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	if (!guess) {
		editElement('.message', '⛔️ No number!');
	} else if (guess === secret) {
		editElement('.message', '🎉 Correct number!');
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').style.width = '30rem';
		if (score > highScore) {
			highScore = score;
		}
		editElement('.highscore', highScore);
	} else if (guess !== secret) {
		if (score > 1) {
			editElement('.message', guess > secret ? '📈 Too high!' : '📉 Too low!');
			score--;
			editElement('.score', score);
		}
	} else {
		editElement('.message', '🛑 You lost the game!');
		editElement('.score', 0);
	}
});

document.querySelector('.again').addEventListener('click', function () {
	secret = generator();
	score = 20;
	editElement('.score', score);
	editElement('.number', '?');
	editElement('.message', 'Start guessing...');
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
});
