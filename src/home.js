import homeBackgroundImg from './images/tabs-background-imgs/home-background-img.jpg'

export default function () {
    const content = document.querySelector("#content");
    const navbar = document.querySelector("nav");

    const main = document.createElement("div");
    const title = document.createElement("div");
    const h1 = document.createElement("h1");
    const para = document.createElement("p");
    h1.textContent = "NUTS & SEEDS";
    para.textContent = "Lorem Ipsum Dolor";
    main.classList.add("main", "main-home");
    title.classList.add("title");
    title.append(h1, para);

    content.style.opacity = "0";
    content.addEventListener("transitionend", function displayHome() {
        document.querySelector(".main").remove();

        navbar.style.position = "absolute";

        content.appendChild(main);
        content.style.background =
            `radial-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${homeBackgroundImg}) center/cover no-repeat`;
        content.style.justifyContent = "";
        content.style.opacity = "1";
        content.removeEventListener("transitionend", displayHome);

        setTimeout(function () {
            main.style.opacity = "1";
            main.appendChild(title);
        }, 0);
    });
}