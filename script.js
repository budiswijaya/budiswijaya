function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.style.background =
    theme === "dark" ? "hsla(0, 0%, 20%)" : "hsla(0, 0%, 70%)";
  document.body.style.color =
    theme === "dark" ? "hsla(0, 0%, 70%)" : "hsla(0, 0%, 20%)";
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
}
