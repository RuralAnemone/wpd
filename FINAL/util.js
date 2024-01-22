function timer(time) {
	let timerToast = document.createElement('p');
	timerToast.innerHTML = "hi";
	timerToast.setAttribute('class', 'test');
	document.body.appendChild(timerToast);
	setTimeout(() => {
		timerToast.remove();
	}, time);
}