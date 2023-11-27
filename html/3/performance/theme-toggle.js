// document.body already has class="dark" on it

if (localStorage.getItem("theme") === null) {
	localStorage.setItem("theme", "dark");
}

if (localStorage.getItem("theme") === "light") toLight();
else toDark();

function toLight() {
	localStorage.setItem("theme", "light");
	document.body.classList.remove("dark");
	document.querySelector("div.theme-toggle > button > img").setAttribute("src", "/html/3/performance/img/light.svg");
}

function toDark() {
	localStorage.setItem("theme", "dark");
	document.body.classList.add("dark");
	document.querySelector("div.theme-toggle > button > img").setAttribute("src", "/html/3/performance/img/dark.svg");
}

function toggleTheme() {
	console.log(`switching theme from ${localStorage.getItem("theme")}...`);
	if (localStorage.getItem("theme") === "dark") {
		toLight();
	} else {
		toDark();
	}
	console.log(`...to ${localStorage.getItem("theme")}`);
}
