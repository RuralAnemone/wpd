function timer(time) {
	let progressContainer = document.createElement("div");
	progressContainer.setAttribute("class", "progress-container");

	let progressBar = document.createElement("progress");
	progressBar.setAttribute("class", "progress-bar");
	progressBar.setAttribute("max", "100");

	progressContainer.appendChild(progressBar);

	document.body.appendChild(progressContainer);

	console.log(progressContainer);

	let progress = 0;
	let interval = time / 100;

	let timer = setInterval(() => {
		progress++;
		console.log(progress);
		progressBar.setAttribute("value", progress.toString());

		if (progress > 100) {
			clearInterval(timer);
			progressContainer.remove();
		}
	}, interval);
}
