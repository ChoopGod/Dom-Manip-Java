//declaring my elements and variables
const myApp=document.getElementById("app")
const newFigure = document.createElement("figure");
const galleryCard = document.createElement("img");
const description = document.createElement("p");
//this gives the img tag we created its source
galleryCard.setAttribute(
    'src',
    '/PFP.webp'
);
//appending childs and giving the h2 and p tags their text
myApp.appendChild(newFigure)
newFigure.innerHTML="<H2>My Profile Picture</H2>"
newFigure.appendChild(galleryCard)
description.innerText="This is my profile picture on discord"
newFigure.appendChild(description)