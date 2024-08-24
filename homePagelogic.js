const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
let homeContent=document.getElementById('home-containt')
let chatContent=document.getElementById('Chat-content')
let nav=document.getElementById('header')

const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000
})

buttonRight.onclick = function () {
  document.getElementById('card-conainer').scrollLeft += 500;
};
buttonLeft.onclick = function () {
  document.getElementById('card-conainer').scrollLeft -= 500;
};

const chatbtn=document.getElementById('chat-btn')
const chatimg=document.getElementById("chat-img")

chatbtn.onclick =function(){
  if(chatbtn.classList.contains('show')){
    chatimg.src="./images/home page/chat active.png"
  }else{
    chatimg.src='./images/home page/chat.png'
    
  }
}

function showchat(){
  homeContent.style.display='none';
  chatimg.src='./images/home page/chat active.png'
  chatbtn.style.pointerEvents='d'
  chatContent.style.display='block'
  nav.style.cssText='position: relative;margin: 0;'
  document.querySelector('body').style.backgroundColor='#f2eaccc6'
}