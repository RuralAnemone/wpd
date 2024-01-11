const dataArea = document.querySelector("div.data>pre");

const usp = new URLSearchParams(location.search);

let data = {};

for (const [key, value] of usp.entries()) data[key] = value;

dataArea.innerText = JSON.stringify(data).replaceAll(",", ",\n	").replace("{", "{\n	").replace("}", "\n}").replaceAll(":", ": ");

// I mean I could use prettier but I don't really feel like it eh
