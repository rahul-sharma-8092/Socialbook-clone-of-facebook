const profilePic = document.querySelector(".profile-pic img");
const settingMenu = document.querySelector(".setting-menu");

// To show the settings menu on click of profile image.
profilePic.addEventListener("click", () => {
	settingMenu.classList.toggle("settings-menu-height");
});
