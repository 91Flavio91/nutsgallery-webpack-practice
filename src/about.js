import aboutBackgroundImg from './images/tabs-background-imgs/about-background-img.jpg'

export default function () {
    const content = document.querySelector("#content");
    const navbar = document.querySelector("nav");

    const main = document.createElement("div");
    const textAbout = document.createElement("div");
    const h2 = document.createElement("h2");
    const firstPara = document.createElement("p");
    const secondPara = document.createElement("p");
    main.classList.add("main", "main-about");
    textAbout.classList.add("text-about");
    h2.textContent = "Lorem Ipsum Dolor";
    firstPara.textContent = "Donec leo neque, gravida nec ligula vel, placerat porttitor mi. Aenean aliquet magna sit amet diam pulvinar hendrerit. Aliquam malesuada, magna et dictum semper, felis lacus ultrices eros, porta venenatis eros ex vel nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed tempor tempus faucibus. Ut consectetur lectus sit amet turpis ornare, vitae faucibus lectus fringilla. Sed cursus nibh id orci pellentesque, nec volutpat ipsum sagittis."
    secondPara.textContent = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis pulvinar libero at dolor malesuada tempor. Vivamus finibus nunc tempor turpis dignissim egestas. Curabitur lacinia nulla et augue vestibulum ultricies. Nullam nec risus magna. Praesent vitae efficitur metus. Aliquam vel viverra ante. Integer placerat neque semper pulvinar vehicula. Ut rutrum nunc sem, ac fringilla ex molestie eget. Etiam tincidunt, mi in ultrices cursus, mi enim bibendum nisi, in tempus sapien ligula et libero. Cras non scelerisque nisi. Pellentesque nec libero leo. Maecenas porttitor ullamcorper orci, eu faucibus ante congue ut.";
    textAbout.append(h2, firstPara, secondPara);
    
    content.style.opacity = "0";
    content.addEventListener("transitionend", function createAbout() {
        document.querySelector(".main").remove();

        navbar.style.position = "initial";

        content.appendChild(main);
        content.style.background = `radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0)), url(${aboutBackgroundImg}) center/cover no-repeat`;
        content.style.justifyContent = "flex-start";
        content.style.opacity = "1";
        content.removeEventListener("transitionend", createAbout);

        setTimeout(function () {
            main.style.opacity = "1";
            main.appendChild(textAbout);
            setTimeout(function () {
                h2.style.transform = "scale(1)";
                firstPara.style.transform = "scale(1)";
                secondPara.style.transform = "scale(1)";
            }, 100);
        }, 0);
    });
}