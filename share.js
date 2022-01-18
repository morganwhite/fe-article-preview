var shareBtn = document.querySelector(".shareBtn");
var credit = document.querySelector(".credit");
var shareBar = document.querySelector(".shareBar");
var articleShare = document.querySelector(".article__share");
var mobileActive = document.querySelector(".mobile-active");
var desktopActive = document.querySelector(".desktop-active");
var shareBarMobile = document.querySelector(".shareBar-mobile");
var shareBarDesktop = document.querySelector(".shareBar-desktop");


shareBtn.addEventListener('click', function() {
  if (window.innerWidth <= 749) {
      shareBarMobile.classList.toggle("mobile-active");
      shareBarMobile.classList.toggle("clrDGB");
      return;
    }
    shareBarDesktop.classList.toggle("desktop-active");
})
// var mql = window.matchMedia('(max-width: 46.8125rem)');
// function handleDeviceChange(e){
//   shareBtn.addEventListener('click', function(){
//     if (e.matches){
//       shareBarMobile.classList.toggle("mobile-active");
//     })
//   } else {
//     shareBtn.addEventListener('click', function(){
//       shareBarDesktop.classList.toggle("desktop-active");
//     })
//   }
// };

// mql.addListener(handleDeviceChange);

// // Initial check
// handleDeviceChange(mql);

// shareBtn.addEventListener('click', function(){
//   credit.classList.toggle("hide");
//   shareBar.classList.toggle("hide");
//   articleShare.classList.toggle("clrDGB");
// })