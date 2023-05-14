const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

// Função para resetar as classes dos slides e dos botões
function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    slides[i].classList.add('inactive');
  }
  slides[currentSlide].classList.remove('inactive');
  slides[currentSlide].classList.add('active');
}

// Função para mostrar o próximo slide
function nextSlide() {
  if (currentSlide == slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  reset();
}

// Função para mostrar o slide anterior
function prevSlide() {
  if (currentSlide == 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  reset();
}

// Adiciona os listeners aos botões
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Mostra o primeiro slide
reset();


function home() {
    window.location.href = '../index.html'
}