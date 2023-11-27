const dropdown = document.querySelector("nav > .breadcrumbs > select");

function go() {
	if (dropdown.value === "select") {
		alert("please sleect a page to go to");
		return;
	}

	location.href += dropdown.value;
}
