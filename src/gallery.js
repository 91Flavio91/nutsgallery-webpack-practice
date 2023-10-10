import galleryBackgroundImg from './images/tabs-background-imgs/gallery-background-img.jpg'

import almondsCardImg from './images/gallery-tab-imgs/almonds.jpg'
import brazilianCardImg from './images/gallery-tab-imgs/brazilian-nuts.jpg'
import cashewsCardImg from './images/gallery-tab-imgs/cashews.jpg'
import chiaCardImg from './images/gallery-tab-imgs/chia-seeds.jpg'
import hazelnutsCardImg from './images/gallery-tab-imgs/hazelnuts.jpg'
import peanutsCardImg from './images/gallery-tab-imgs/peanuts.jpg'
import pecanCardImg from './images/gallery-tab-imgs/pecan-nuts.jpg'
import pistachiosCardImg from './images/gallery-tab-imgs/pistachios.jpg'
import pumpkinCardImg from './images/gallery-tab-imgs/pumpkin-seeds.jpg'
import queenslandCardImg from './images/gallery-tab-imgs/queensland-nuts.jpg'
import sesameCardImg from './images/gallery-tab-imgs/sesame-seeds.jpg'
import sunflowerCardImg from './images/gallery-tab-imgs/sunflower-seeds.jpg'
import walnutsCardImg from './images/gallery-tab-imgs/walnuts.jpg'




export default function () {
    const content = document.querySelector("#content");
    const navbar = document.querySelector("nav");

    const main = document.createElement("div");
    main.classList.add("main", "main-gallery");

    const h2Text = [
        "Almonds",
        "Brazilian Nuts",
        "Cashews",
        "Chia Seeds",
        "Hazelnuts",
        "Peanuts",
        "Pecan Nuts",
        "Pistachios",
        "Pumpkin Seeds",
        "Queensland Nuts",
        "Sesame Seeds",
        "Sunflower Seeds",
        "Walnuts",
    ];
    const h2Overlays = [];
    const images = [];
    const imagesSrc = [
        almondsCardImg,
        brazilianCardImg,
        cashewsCardImg,
        chiaCardImg,
        hazelnutsCardImg,
        peanutsCardImg,
        pecanCardImg,
        pistachiosCardImg,
        pumpkinCardImg,
        queenslandCardImg,
        sesameCardImg,
        sunflowerCardImg,
        walnutsCardImg
    ];
    const cardsContainers = [];
    for (let i = 0; i < 13; i++) {
        const h2 = document.createElement("h2");
        const h2Overlay = document.createElement("div");
        const img = new Image();
        const cardContainer = document.createElement("div");

        h2.textContent = h2Text[i];
        h2Overlay.classList.add("overlay");
        img.setAttribute("src", `${imagesSrc[i]}`);
        cardContainer.classList.add("card-container");

        h2Overlay.appendChild(h2);
        h2Overlays.push(h2Overlay);
        images.push(img);
        cardsContainers.push(cardContainer);
    }
    
    content.style.opacity = "0";
    content.addEventListener("transitionend", function createGallery() {
        document.querySelector(".main").remove();

        navbar.style.position = "initial";
        content.appendChild(main);
        for (let i = 0; i < 13; i++) {
            main.appendChild(cardsContainers[i]);
        }

        content.style.background =
            `radial-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0)), url(${galleryBackgroundImg}) center/cover no-repeat`;
        content.style.justifyContent = "flex-start";
        content.style.opacity = "1";
        content.removeEventListener("transitionend", createGallery);

        setTimeout(function () {
            main.style.opacity = "1";

            for (let i = 0; i < cardsContainers.length; i++) {
                setTimeout(function () {
                    cardsContainers[i].style.opacity = "1";
                    cardsContainers[i].style.transform = "scale(1)";
                    cardsContainers[i].append(images[i], h2Overlays[i]);
                }, 180 * (i + 1),);
            }
        }, 0);
    });
};
