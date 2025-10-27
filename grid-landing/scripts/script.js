// Theme switcher functionality
console.log("Script loaded!");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded!");

  const themeButtons = document.querySelectorAll(".theme-btn");
  const html = document.documentElement;

  console.log("Found theme buttons:", themeButtons.length);

  // Check for saved theme or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);

  console.log("Applied theme:", savedTheme);

  // Update active button based on saved theme
  themeButtons.forEach((btn) => {
    if (btn.dataset.theme === savedTheme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Add click event listeners to theme buttons
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.theme;
      console.log("Button clicked, theme:", theme);

      html.setAttribute("data-theme", theme);

      // Remove active class from all buttons
      themeButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Add active class to clicked button
      button.classList.add("active");

      // Save theme to localStorage
      localStorage.setItem("theme", theme);
    });
  });
});
