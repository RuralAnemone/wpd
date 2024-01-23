const jsConfetti = new JSConfetti();

document.querySelector('#a-second')?.addEventListener('click', () => {
	timer(60 * 1000);
});

document.querySelector('#linux')?.addEventListener('mouseover', () => {
	jsConfetti.addConfetti({
		emojis: ['🐧']
	});
});

document.querySelector('.red')?.addEventListener('mouseover', () => {
	jsConfetti.addConfetti({
		emojis: ['❌']
	});
});