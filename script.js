const homepageLink = document.getElementById('homepage-li');
const aboutMeLink = document.getElementById('aboutMe-li');
const solutionLink = document.getElementById('solution-li');
const projectLink = document.getElementById('project-li');
const contactLink = document.getElementById('contact-li');

function scroll(pages) {
    const scrollPixels = window.innerHeight * pages;
    window.scrollTo({top: scrollPixels, behavior: 'smooth'})
    console.log('executou')
}

homepageLink.addEventListener('click', () => scroll(0));
aboutMeLink.addEventListener('click', () => scroll(1));
solutionLink.addEventListener('click', () => scroll(2));
projectLink.addEventListener('click', () => scroll(3));
contactLink.addEventListener('click', () => scroll(4));

const cardsContainer = document.getElementById('cards-container');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

arrowLeft.addEventListener('click', () => cardsContainer.scrollLeft -= 500)
arrowRight.addEventListener('click', () => cardsContainer.scrollLeft += 500)

//PROJETOS
//Reprodução da Página inicial do Facebook
//Site Conhecendo o Brasil
//Calculadora IMC
//Portifolio Reinaldo Alves
//Star Wars Encyclopedia
//Youtube Clone
//WhatsApp Clone

// const button = document.getElementById('button');
// const nome = document.getElementById('name');
// const peso = document.getElementById('weight');
// const altura = document.getElementById('height');
// const resultado = document.getElementById('result')

// const getText = (imc) => {
//     if(imc > 40) return 'com obesidade grau III'
//     if(imc > 35) return 'com obesidade grau II'
//     if(imc > 30) return 'com obesidade grau I'
//     if(imc > 25) return 'levemente acima do peso'
//     if(imc > 18.5) return 'no peso ideal'
//     return 'abaixo do peso'
// }

// const imcCalc = () => {
//     if(!peso.value || !altura.value || !nome.value) return resultado.textContent = "Preencha todos os campos corretamente"
//     const valorIMC = (+peso.value / (+altura.value * +altura.value)).toFixed(1);   //+ serve para transformar string em numero
//     resultado.textContent = `${nome.value}, seu IMC é ${valorIMC} e você está ${getText(valorIMC)}`;
// }

// button.addEventListener('click', imcCalc)