const closebtn = document.querySelector('.headertop-btn')
const hidebox = document.querySelector('.headertop')
closebtn.addEventListener("click",function() {
     hidebox.classList.add("hidden");
});


const track = document.querySelector('.slider-track')
const slides = document.querySelectorAll('.herosliderimg')
const preBtn = document.querySelector('.hero-pre-button')
const nextBtn = document.querySelector('.hero-next-button')

let index = 0;
const totalSlides = slides.length;

function moveSlide(i) {
     track.style.transform = `translateX(-${i * 100}%)`;
}
function nextSlide() {
     index = (index + 1) % totalSlides;
     moveSlide(index);
}
function preSlide() {
     index = (index - 1 + totalSlides) % totalSlides;
     moveSlide(index);
}
nextBtn.addEventListener('click', nextSlide);
preBtn.addEventListener('click', preSlide);

let autoSlide = setInterval(nextSlide, 5000);

const mobiletrack = document.querySelector('.mobile-slider-track')
const mobileslides = document.querySelectorAll('.mobile-herosliderimg')

let mobileindex = 0;
const mobiletotalSlides = mobileslides.length;

function mobilemoveSlide(i) {
     mobiletrack.style.transform = `translateX(-${i * 100}%)`;
}
function mobilenextSlide() {
     mobileindex = (mobileindex + 1) % mobiletotalSlides;
     mobilemoveSlide(index);
}
function mobilepreSlide() {
     mobileindex = (mobileindex - 1 + mobiletotalSlides) % mobiletotalSlides;
     mobilemoveSlide(mobileindex);
}

let mobileautoSlide = setInterval(mobilenextSlide, 5000);


const slidetrack1 = document.querySelector('.section1-ul-all')
const slidetrack1img = document.querySelectorAll('.section1-slide')
const mainprebutton = document.querySelector('.main-pre-button')
const mainnextbutton = document.querySelector('.main-next-button')

let main1index = 0; 
const maintotalSlides = slidetrack1img.length;
const slidesPerView = 6;
const maxIndex = Math.ceil(maintotalSlides/slidesPerView)-1

function movetrack1slide(i){
     slidetrack1.style.transform = `translateX(-${i * 50.5}%)`;
}
function freslidetrack (){
     if (main1index > 0){
          main1index--;
     }else{
          main1index = maxIndex;
     }
     movetrack1slide(main1index);
}
function nextslidetrack (){
     if(main1index<maxIndex){
          main1index++;
     }else{
          main1index = 0;
     }
     movetrack1slide(main1index);
}

mainprebutton.addEventListener('click', freslidetrack);
mainnextbutton.addEventListener('click', nextslidetrack);




const slidetrack2 = document.querySelector('.section2-ul-all')
const slidetrack2img = document.querySelectorAll('.section2-slide')
const main2prebutton = document.querySelector('.main2-pre-button')
const main2nextbutton = document.querySelector('.main2-next-button')

let main2index = 0; 
const main2totalSlides = slidetrack2img.length;
const slides2PerView = 4;
const maxIndex2 = Math.ceil(main2totalSlides/slides2PerView)-1

function movetrack2slide(i){
     slidetrack2.style.transform = `translateX(-${i * 51}%)`;
}
function freslidetrack2 (){
     if (main2index > 0){
          main2index--;
     }else{
          main2index = maxIndex2;
     }
     movetrack2slide(main2index);
}
function nextslidetrack2 (){
     if(main2index < maxIndex2){
          main2index++;
     }else{
          main2index = 0;
     }
     movetrack2slide(main2index);
}

main2prebutton.addEventListener('click', freslidetrack2);
main2nextbutton.addEventListener('click', nextslidetrack2);

window.addEventListener('load', () => {
    const nav = document.querySelector('.main-nav');
    if (nav) nav.scrollLeft = 0; 
  });

