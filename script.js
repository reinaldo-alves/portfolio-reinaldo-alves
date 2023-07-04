const homepageLink = document.getElementById('homepage-li');
const aboutMeLink = document.getElementById('aboutMe-li');
const solutionLink = document.getElementById('solution-li');
const projectLink = document.getElementById('project-li');
const contactLink = document.getElementById('contact-li');

function scroll(pages) {
    const scrollPixels = window.innerHeight * pages;
    window.scrollTo({top: scrollPixels, behavior: 'smooth'})
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
    const pixScroll = window.innerWidth > 696 ? 500 : 300;
    if (cardsContainer.scrollLeft === 0) {
        cardsContainer.scrollLeft = maxScroll;
    } else {
        cardsContainer.scrollLeft -= pixScroll;
    }
}

function scrolltoRight() {
    const maxScroll = cardsContainer.scrollWidth - cardsContainer.clientWidth;
    const pixScroll = window.innerWidth > 696 ? 500 : 300;
    if (cardsContainer.scrollLeft === maxScroll) {
        cardsContainer.scrollLeft = 0;
    } else {
        cardsContainer.scrollLeft += pixScroll;
    }
}

arrowLeft.addEventListener('click', () => scrolltoLeft());
arrowRight.addEventListener('click', () => scrolltoRight());

const tabWeb = document.getElementById('tab-1');
const tabApp = document.getElementById('tab-2');
const tabsContent = document.getElementById('tabs-content');

const textWeb = 'Páginas web para as mais diversas finalidades, como lojas, profissionais autônomos (advogados, corretores, cabelereiros, etc) e artistas, além de landing pages para quem vende algum produto ou serviço na internet. Os websites são desenvolvidos em HTML/CSS ou em React, de acordo com a necessidade ou preferência do cliente';
const textApp = 'Sistemas com funcionalidades mais complexas e integrados com bancos de dados, como sistemas de agendamento de serviços, de gestão de estoque, de cadastro de funcionários/clientes, entre outros. A interface dos sistemas é desenvolvida em React, enquanto que o servidor é desenvolvido em Node.js com banco de dados MariaDB ou MySQL';

function activeWeb() {
    tabsContent.innerHTML = textWeb;
    tabWeb.classList.add('active-tab');
    tabApp.classList.remove('active-tab');
}

function activeApp() {
    tabsContent.innerHTML = textApp
    tabApp.classList.add('active-tab');
    tabWeb.classList.remove('active-tab');
}

tabWeb.addEventListener('click', () => activeWeb());
tabApp.addEventListener('click', () => activeApp());