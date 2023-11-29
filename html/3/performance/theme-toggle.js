const pathPrefix = location.origin === "ruralanemone.github.io" ? "/wpd/html/3/performance/" : "/html/3/performance/"

// document.body already has class="dark" on it

if (localStorage.getItem("theme") === null) {
	localStorage.setItem("theme", "dark");
}

if (localStorage.getItem("theme") === "light") toLight();
else toDark();

function toLight() {
	localStorage.setItem("theme", "light");
	document.body.classList.remove("dark");
	document.querySelector("div.theme-toggle > button > img").setAttribute("src", pathPrefix + "img/light.svg");
}

function toDark() {
	localStorage.setItem("theme", "dark");
	document.body.classList.add("dark");
	document.querySelector("div.theme-toggle > button > img").setAttribute("src", pathPrefix + "img/dark.svg");
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
