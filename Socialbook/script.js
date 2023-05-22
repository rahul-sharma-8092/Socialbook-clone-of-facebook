const profilePic = document.querySelector(".profile-pic img");
const settingMenu = document.querySelector(".setting-menu");

// To show the settings menu on click of profile image.
profilePic.addEventListener("click", () => {
	settingMenu.classList.toggle("settings-menu-height");
});

// Dark button
const darkBtn = document.getElementById("dark-btn");
darkBtn.addEventListener("click", () => {
	darkBtn.classList.toggle("dark-btn-on");
	document.body.classList.toggle("dark-theme");

	if (localStorage.getItem("theme") == "light") {
		localStorage.setItem("theme", "dark");
	} else {
		localStorage.setItem("theme", "light");
	}
});

if (localStorage.getItem("theme") == "light") {
	darkBtn.classList.remove("dark-btn-on");
	document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
	darkBtn.classList.add("dark-btn-on");
	document.body.classList.add("dark-theme");
} else {
	localStorage.setItem("theme", "light");
}
