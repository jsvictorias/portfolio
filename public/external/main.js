onload = () => {
    document.body.classList.remove("container");

    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
};

window.addEventListener("message", (event) => {
    if (!event.data || !event.data.theme) return;

    const newTheme = event.data.theme;

    document.documentElement.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
});
