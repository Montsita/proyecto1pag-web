const navBar = document.querySelector(".main-nav-desktop");
const buttonNav = document.querySelector("#burger-menu");

buttonNav.addEventListener("click", () => {
    console.log("te he pulsado");
    const computedStyle = window.getComputedStyle(navBar).display;
    console.log(computedStyle);
    if (computedStyle === "none") {
        console.log(computedStyle);
        navBar.style.display = 'flex';
    } else {
        navBar.style.display = 'none';
    }
})
