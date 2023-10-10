import contactBackgroundImg from './images/tabs-background-imgs/contact-background-img.jpg'

export default function () {
    const content = document.querySelector("#content");
    const navbar = document.querySelector("nav");

    const h2Text = [
        "PHONE",
        "EMAIL",
        "CHAT",
    ];
    const parasText = [
        "Random Place in the World:<br/>+0-111-222-3333<br/>International:<br/>+0-111-222-3333",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacus dui, interdum vitae leo eu, aliquet dictum odio. Phasellus interdum sem enim.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum."
    ];
    const buttonsText = [
        "SEND EMAIL",
        "START CHAT",
    ]
    const contactCards = [];
    for (let i = 0; i < 3; i++) {
        const textContactContainer = document.createElement("div");
        const h2 = document.createElement("h2");
        const para = document.createElement("p");
        const button = document.createElement("button");
        h2.textContent = h2Text[i];
        para.setHTML(parasText[i]);
        button.setHTML(i === 0 ? '' : buttonsText[i - 1]);

        contactCards.push(document.createElement("div"));
        contactCards[i].classList.add("contact-card");

        contactCards[i].append(textContactContainer, (i === 0 ? '' : button));
        contactCards[i].firstElementChild.append(h2, para);
    };

    content.style.opacity = "0";
    content.addEventListener("transitionend", function createContact() {
        document.querySelector(".main").remove();

        navbar.style.position = "initial";
        const main = document.createElement("div");
        main.classList.add("main", "main-contact");
        content.appendChild(main);
        content.style.background = `radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0)), url(${contactBackgroundImg}) center/cover no-repeat`;
        content.style.justifyContent = "flex-start";
        content.style.opacity = "1";
        content.removeEventListener("transitionend", createContact);

        setTimeout(() => {
            main.style.opacity = "1";

            for (let i = 0; i < 3; i++) {
                main.appendChild(contactCards[i]);
                setTimeout(function () {
                    contactCards[i].style.transform = "scale(1)";
                }, 180 * (i + 1));
            };
        }, 0);
    });
};