const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
const notificationBTN=document.getElementById('notification-btn')
let notificationIMG=document.getElementById('notification-img')
let homeContent=document.getElementById('home-containt')
let chatContent=document.getElementById('Chat-content')
let nav=document.getElementById('header')
let notificationContent=document.getElementById('notification-content')


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
    chatContent.style.display='block';
    notificationContent.style.display='none';
    adSeekerpage.style.display='none'
  chatimg.src='./images/home page/chat active.png'
  nav.style.cssText='position: relative;margin: 0;'
  document.querySelector('body').style.backgroundColor='#f2eaccc6'
  notificationIMG.src='./images/bell-fill.png'
}

function notificationDiv(){
  homeContent.style.display='none';
    chatContent.style.display='none';
    notificationContent.style.display='block';
    adSeekerpage.style.display='none'
  notificationIMG.src='./images/bell-active.png'
  chatimg.src='./images/home page/chat.png'
  nav.style.cssText='position: relative;margin: 0;'
  document.querySelector('body').style.backgroundImage='linear-gradient(180deg, #F8F4DB, white)'
}

// card select logic

let cardsCon=document.querySelectorAll('.appartment-card')
let adSeekerpage=document.getElementById('Ad-seeker')
for(let i=0;i<cardsCon.length;i++){
  cardsCon[i].onclick = function(){
    if(i===0){
      nav.style.cssText='position: relative;margin: 0;'
      roomateFinder.style.display='block'
    adSeekerpage.style.display='none'
    homeContent.style.display='none';
    chatContent.style.display='none';
    notificationContent.style.display='none';
    }else{
      nav.style.cssText='position: relative;margin: 0;'
      roomateFinder.style.display='none'
    adSeekerpage.style.display='block'
    homeContent.style.display='none';
    chatContent.style.display='none';
    notificationContent.style.display='none';
    }
    document.querySelector('body').style.backgroundImage='linear-gradient(180deg, #F8F4DB, white)'
    
  }
}

let roomateFinder=document.getElementById('seeker-roomate')
let personCard=document.querySelectorAll('.person-card')
let PeopleProfilePage=document.getElementById('people-profile-page')
let UserProfilePage=document.getElementById('user-profile-page')

for(let i=0;i<personCard.length;i++){
  personCard[i].onclick = function(){
    roomateFinder.style.display='none'
    adSeekerpage.style.display='none'
    homeContent.style.display='none';
    chatContent.style.display='none';
    notificationContent.style.display='none';
    adSeekerpage.style.display='none'
    PeopleProfilePage.style.display='block'
    document.querySelector('body').style.backgroundColor='#f2eaccc6';
  }
}

function goToUserAccount(){
  roomateFinder.style.display='none'
    adSeekerpage.style.display='none'
    homeContent.style.display='none';
    chatContent.style.display='none';
    notificationContent.style.display='none';
    adSeekerpage.style.display='none'
    PeopleProfilePage.style.display='none'
    UserProfilePage.style.display='block'
    document.querySelector('body').style.backgroundColor='#f2eaccc6';
}

let favorites=document.getElementById('favorites')

function showFav(){
  roomateFinder.style.display='none'
    adSeekerpage.style.display='none'
    homeContent.style.display='none';
    chatContent.style.display='none';
    notificationContent.style.display='none';
    adSeekerpage.style.display='none'
    PeopleProfilePage.style.display='none'
    UserProfilePage.style.display='none'
    favorites.style.display='block'
  document.querySelector('body').style.backgroundImage='linear-gradient(180deg, #F8F4DB, white)'
  document.querySelector('body').style.minHeight='100svh'
  nav.style.cssText='position: relative;margin: 0;'
}
let favAds=document.querySelectorAll('.fav')
let OverAds=document.querySelectorAll('.over')
let activeFav= document.querySelectorAll('.fav-item')

function showfavAds(){
  for(let i=0;i<favAds.length;i++){
    favAds[i].style.display='flex'
  }
  for(let i=0;i<OverAds.length;i++){
    OverAds[i].style.display='none'
  }
  for(let i=0;i<activeFav.length;i++){
    if(activeFav[i].classList.contains('fav-item-active')){
      activeFav[i].classList.remove('fav-item-active')
    }else{
      activeFav[i].classList.add('fav-item-active')
    }
  }
}


function showOverAds(){
  for(let i=0;i<OverAds.length;i++){
    OverAds[i].style.display='flex'
  }
  for(let i=0;i<favAds.length;i++){
    favAds[i].style.display='none'
  }
  for(let i=0;i<activeFav.length;i++){
    if(activeFav[i].classList.contains('fav-item-active')){
      activeFav[i].classList.remove('fav-item-active')
    }else{
      activeFav[i].classList.add('fav-item-active')
    }
  }
}