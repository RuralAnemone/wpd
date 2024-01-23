const jsConfetti = new JSConfetti();

document.querySelectorAll("#a-second")?.forEach((e) => {
	e.addEventListener("click", () => {
		timer(60 * 1000);
	});
});

document.querySelectorAll("#linux")?.forEach((e) => {
	e.addEventListener("mouseover", () => {
		jsConfetti.addConfetti({
			emojis: ["🐧"],
		});
	});
});

document.querySelectorAll(".red")?.forEach((e) => {
	e.addEventListener("mouseover", () => {
		jsConfetti.addConfetti({
			emojis: ["❌"],
		});
	});
});

document.querySelectorAll(".green")?.forEach((e) => {
	e.addEventListener("mouseover", () => {
		jsConfetti.addConfetti({
			emojis: ["✅"],
		});
	});
});
