import './style.css'

import generateHome from './home.js'
import generateGallery from './gallery.js'
import generateAbout from './about.js'
import generateContact from './contact.js'

const activateWindowOnLoad = (function () {
    window.addEventListener("load", function () {
        const content = document.querySelector("#content");

        const nav = document.createElement("nav");
        const divIcon = document.createElement("div");
        const divLinks = document.createElement("div");
        const ul = document.createElement("ul");
        divIcon.classList.add("icon");
        divIcon.textContent = "UST NUTS";
        divLinks.classList.add("links");

        for (let i = 0; i < 4; i++) {
            const anchorTagsAttributes = {
                href: ["#", "#", "#", "#"],
                class: ["home", "gallery", "about", "contact"],
            };
            const li = document.createElement("li");
            const a = document.createElement("a");

            Object.keys(anchorTagsAttributes).forEach((attr) =>
                a.setAttribute(attr, anchorTagsAttributes[attr][i]),
            );
            a.textContent =
                anchorTagsAttributes.class[i][0].toUpperCase() +
                anchorTagsAttributes.class[i].slice(1);

            li.appendChild(a);
            ul.appendChild(li);
        }

        divLinks.appendChild(ul);
        nav.append(divIcon, divLinks);

        const main = document.createElement("div");
        const title = document.createElement("div");
        const h1 = document.createElement("h1");
        const para = document.createElement("p");
        h1.textContent = "NUTS & SEEDS";
        para.textContent = "Lorem Ipsum Dolor";
        main.classList.add("main", "main-home");
        title.classList.add("title");
        title.append(h1, para);

        content.append(nav, main);
        content.style.opacity = "1";

        setTimeout(function () {
            main.style.opacity = "1";
            main.appendChild(title);
        }, 0);
    });
})();

setTimeout(function () {
    const activateLinks = (function () {
        const linkHome = document.querySelector(".home");
        const linkGallery = document.querySelector(".gallery");
        const linkAbout = document.querySelector(".about");
        const linkContact = document.querySelector(".contact");

        linkHome.addEventListener('click', generateHome);
        linkGallery.addEventListener('click', generateGallery);
        linkAbout.addEventListener('click', generateAbout);
        linkContact.addEventListener('click', generateContact);
    })();
}, 1000);