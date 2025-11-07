const track = document.querySelector('.slider-track')
const slides = document.querySelectorAll('.herosliderimg')
const preBtn = document.querySelector('.hero-pre-button')
const nextBtn = document.querySelector('.hero-next-button')

let index = 0;
const totalSlides = slides.length;

function moveSlide(i){
     track.style.transform = `translateX(-${i*100}%)`;
}
function nextSlide(){
     index = ( index + 1 )% totalSlides;
     moveSlide(index);
}
function preSlide(){
     index = (index -1 +totalSlides )% totalSlides;
     moveSlide(index);
}
nextBtn.addEventListener('click', nextSlide);
preBtn.addEventListener('click', preSlide);

let autoSlide = setInterval(nextSlide, 5000);


