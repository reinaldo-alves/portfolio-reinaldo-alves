import { projectData } from "./projectdata.js";

document.addEventListener('DOMContentLoaded', () => {
    const contactButtons = document.querySelectorAll('.contact-button')

    contactButtons.forEach(link => {
        link.addEventListener('click', scrollToContact);
    })

    function scrollToContact(event) {
        const contactSection = document.getElementById('contact');

        if (contactSection) {
            event.preventDefault();
            const scrollPosition = contactSection.offsetTop;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
        }
    }
});

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

function showProjectDetails(project) {
    const lang = () => {
        if (document.documentElement.lang === 'pt-br') {
            return true
        } else {
            return false
        }
    };
    
    const modal = document.getElementById('modal');
    modal.style.visibility = 'visible'
    
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';
    
    const exitButton = document.createElement('div');
    exitButton.className = 'exit-button';
    exitButton.innerText = '\u00D7';
    exitButton.onclick = () => {modal.style.visibility = 'hidden'};
    modalContent.appendChild(exitButton);

    const modalTitle = document.createElement('h2');
    modalTitle.className = 'modal-title';
    modalTitle.innerText = lang() ? projectData[project].title : projectData[project].titleEN;
    modalContent.appendChild(modalTitle);

    // const modalImage = document.createElement('img');
    // modalImage.className = 'modal-image';
    // modalImage.src = projectData[project].image;
    // modalContent.appendChild(modalImage);

    const modalImage = document.createElement('div');
    modalImage.className = 'modal-image';
    const swiperDiv = document.createElement('div');
    swiperDiv.className = 'swiper mySwiper';
    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';
    projectData[project].image.forEach((imageUrl) => {
        const swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';
        const imageElement = document.createElement('img');
        imageElement.src = imageUrl;
        swiperSlide.appendChild(imageElement);
        swiperWrapper.appendChild(swiperSlide);
    });
    const swiperNextButton = document.createElement('div');
    swiperNextButton.className = 'swiper-button-next';
    const swiperPrevButton = document.createElement('div');
    swiperPrevButton.className = 'swiper-button-prev';
    const swiperPagination = document.createElement('div');
    swiperPagination.className = 'swiper-pagination';
    swiperDiv.appendChild(swiperWrapper);
    swiperDiv.appendChild(swiperNextButton);
    swiperDiv.appendChild(swiperPrevButton);
    swiperDiv.appendChild(swiperPagination);
    modalImage.appendChild(swiperDiv);
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
    techsTitle.innerText = lang() ? 'Tecnologias' : 'Technologies';
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
    modalText.innerText = lang() ? projectData[project].text : projectData[project].textEN;
    modalContent.appendChild(modalText);

    const mySwiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    mySwiper.update();
}

projectData.forEach((item, index) => {
    const card = document.getElementById(`project${index}`);
    card.addEventListener('click', () => showProjectDetails(index));
})