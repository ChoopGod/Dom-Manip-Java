const myApp=document.getElementById("app")
const newFigure = document.createElement("figure");
const galleryCard = document.createElement("img");
const description = document.createElement("p");

galleryCard.setAttribute(
    'src',
    '/PFP.webp'
);

myApp.appendChild(newFigure)
newFigure.innerHTML="<H2>My Profile Picture</H2>"
newFigure.appendChild(galleryCard)
description.innerText="This is my profile picture on discord"
newFigure.appendChild(description)