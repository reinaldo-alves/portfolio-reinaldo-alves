import { projectData } from "./projectdata.js";

const homepageLink = document.getElementById('homepage-li');
const aboutMeLink = document.getElementById('aboutMe-li');
const solutionLink = document.getElementById('solution-li');
const projectLink = document.getElementById('project-li');
const contactLink = document.getElementById('contact-li');

function scroll(pages) {
    if (window.innerHeight > 625) {
        const scrollPixels = window.innerHeight * pages;
        window.scrollTo({top: scrollPixels, behavior: 'smooth'})
    } else {
        const scrollPixels = 625 * pages;
        window.scrollTo({top: scrollPixels, behavior: 'smooth'})
    }
}

homepageLink.addEventListener('click', () => scroll(0));
aboutMeLink.addEventListener('click', () => scroll(1));
solutionLink.addEventListener('click', () => scroll(2));
projectLink.addEventListener('click', () => scroll(3));
contactLink.addEventListener('click', () => scroll(4));

const cardsContainer = document.getElementById('cards-container');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

function scrolltoLeft() {
    const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
    const pixScroll = 500;
    if (cardsContainer.scrollLeft === 0) {
        cardsContainer.scrollLeft = maxScroll;
    } else {
        cardsContainer.scrollLeft -= pixScroll;
    }
}

function scrolltoRight() {
    const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
    const pixScroll = 500;
    if (cardsContainer.scrollLeft === maxScroll) {
        cardsContainer.scrollLeft = 0;
    } else {
        cardsContainer.scrollLeft += pixScroll;
    }
}

function scrolltoTop() {
    const maxScroll = cardsContainer.scrollHeight - cardsContainer.clientHeight;
    const pixScroll = window.innerWidth > 478 ? 400 : 200;
    if (cardsContainer.scrollTop === 0) {
        cardsContainer.scrollTop = maxScroll;
    } else {
        cardsContainer.scrollTop -= pixScroll;
    }
}

function scrolltoBottom() {
    const maxScroll = cardsContainer.scrollHeight - cardsContainer.clientHeight;
    const pixScroll = window.innerWidth > 478 ? 400 : 200;
    if (cardsContainer.scrollTop === maxScroll) {
        cardsContainer.scrollTop = 0;
    } else {
        cardsContainer.scrollTop += pixScroll;
    }
}

function firstButton() {
    if (window.innerWidth > 575) {
        scrolltoLeft()
    } else {
        scrolltoTop()
    }
}

function lastButton() {
    if (window.innerWidth > 575) {
        scrolltoRight()
    } else {
        scrolltoBottom()
    }
}

arrowLeft.addEventListener('click', () => firstButton());
arrowRight.addEventListener('click', () => lastButton());

const tabWeb = document.getElementById('tab-1');
const tabApp = document.getElementById('tab-2');
const tabsContentWeb = document.getElementById('tabs-content-1');
const tabsContentApp = document.getElementById('tabs-content-2');

function activeWeb() {
    tabWeb.classList.add('active-tab');
    tabApp.classList.remove('active-tab');
    tabsContentWeb.style.display = 'block'
    tabsContentApp.style.display = 'none'
}

function activeApp() {
    // tabsContent.innerHTML = textApp
    tabApp.classList.add('active-tab');
    tabWeb.classList.remove('active-tab');
    tabsContentApp.style.display = 'block'
    tabsContentWeb.style.display = 'none'
}

tabWeb.addEventListener('click', () => activeWeb());
tabApp.addEventListener('click', () => activeApp());

function showProjectDetails(project) {
    const modal = document.getElementById('modal');
    modal.style.visibility = 'visible'
    
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';
    
    const exitButton = document.createElement('div');
    exitButton.className = 'exit-button';
    exitButton.innerText = '×';
    exitButton.onclick = () => {modal.style.visibility = 'hidden'};
    modalContent.appendChild(exitButton);

    const modalTitle = document.createElement('h2');
    modalTitle.className = 'modal-title';
    modalTitle.innerText = projectData[project].title;
    modalContent.appendChild(modalTitle);

    const modalImage = document.createElement('img');
    modalImage.className = 'modal-image';
    modalImage.src = projectData[project].image;
    modalContent.appendChild(modalImage);

    const modalInfoLink = document.createElement('div');
    modalInfoLink.className = 'modal-info';
    modalInfoLink.id = 'links-container';
    const linksTitle = document.createElement('h3');
    linksTitle.innerText = 'Links';
    modalInfoLink.appendChild(linksTitle);
    projectData[project].links.forEach((item) => {
        const anchor = document.createElement('a');
        anchor.href = item.href;
        anchor.target = '_blank';
        const icon = document.createElement('i');
        icon.className = item.class;
        const span = document.createElement('span');
        span.textContent = item.span;
        anchor.appendChild(icon);
        anchor.appendChild(span);
        modalInfoLink.appendChild(anchor);
    })
    modalContent.appendChild(modalInfoLink);

    const modalInfoTech = document.createElement('div');
    modalInfoTech.className = 'modal-info';
    modalInfoTech.id = 'technologies-container';
    const techsTitle = document.createElement('h3');
    techsTitle.innerText = 'Tecnologias';
    modalInfoTech.appendChild(techsTitle);
    const modalTech = document.createElement('div');
    modalTech.className = 'modal-technologies';
    projectData[project].technologies.forEach((item) => {
        const image = document.createElement('img');
        image.alt = item.alt;
        image.src = item.src;
        image.style = item.style;
        modalTech.appendChild(image);
    })
    modalInfoTech.appendChild(modalTech);
    modalContent.appendChild(modalInfoTech);

    const modalText = document.createElement('p');
    modalText.className = 'modal-text';
    modalText.innerText = projectData[project].text;
    modalContent.appendChild(modalText);
}

projectData.forEach((item, index) => {
    const card = document.getElementById(`project${index}`);
    card.addEventListener('click', () => showProjectDetails(index));
})