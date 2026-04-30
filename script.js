// Initialize theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  applyTheme(savedTheme);
  updateThemeButtons(savedTheme);
}

// Apply theme with safe fallbacks
function applyTheme(theme) {
  const isDark = theme === "dark";
  const bgColor = isDark ? "#2a2420" : "#473a0f";
  const textColor = isDark ? "#473a0f" : "#2a2420";

  document.body.style.background = bgColor;
  document.body.style.color = textColor;
  document.documentElement.setAttribute("data-theme", theme);
}

// Update button appearance
function updateThemeButtons(theme) {
  const lightBtn = document.querySelector('.mode[onclick*="light"]');
  const darkBtn = document.querySelector('.mode[onclick*="dark"]');

  if (lightBtn) lightBtn.classList.toggle("active", theme === "light");
  if (darkBtn) darkBtn.classList.toggle("active", theme === "dark");
}

// Set theme function (called by button)
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
  updateThemeButtons(theme);
}

// Initialize on DOMContentLoaded for better compatibility
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme);
} else {
  initTheme();
}
