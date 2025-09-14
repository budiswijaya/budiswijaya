function setTheme(theme) {
  localStorage.setItem("theme", theme);

  // Update theme colors with darker default
  document.body.style.background =
    theme === "dark" ? "hsla(0, 0%, 15%)" : "hsla(50, 50%, 30%)";
  document.body.style.color =
    theme === "dark" ? "hsla(0, 0%, 85%)" : "hsla(0, 0%, 90%)";

  // Update active button state
  const buttons = document.querySelectorAll(".mode");
  buttons.forEach((button) => {
    if (button.getAttribute("onclick").includes(theme)) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);
