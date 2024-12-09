//Start Mega Menu
let megaMenu = document.querySelector(".header .mega-menu")
document.querySelector(".header ul .mega-btn").onclick = function() {
  megaMenu.classList.toggle('active-mega');
}
//End Mega Menu
// Start Scroll Button
let scrollButton = document.querySelector(".scroll");
window.addEventListener('scroll', function() {
  if(window.scrollY >= 600) {
    scrollButton.style.transform =  "scale(1)";
  } else {
    scrollButton.style.transform =  "scale(0)";
  }
})
scrollButton.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}
// End Scroll Button


// Start Our Skills Width
let skillsProgress = document.querySelectorAll(".our-skills .skill .progress span");
let section = document.querySelector(".our-skills");
window.addEventListener('scroll', function() {
  if(window.scrollY >= section.offsetTop - 250) {
    skillsProgress.forEach(function(el) {
      let progress = el.parentElement.parentElement.querySelector('h3').getAttribute("data-progress")
      el.style.width = progress;
    })
  }
})
// End Our Skills Width



// Start stats Number
let number = document.querySelectorAll(".stats .box .number");
let statsSection = document.querySelector(".stats");
window.addEventListener('scroll', function() {
  if(window.scrollY >= statsSection.offsetTop) {
    number.forEach(function(el) {
      let maxNumber = el.parentElement.getAttribute("data-number")
      let stop = setInterval(() => {
        if(+el.innerHTML == maxNumber) {
          clearInterval(stop)
        } else {
          el.innerHTML++
        }
      }, 2000 / maxNumber);
    })
  }
})


// End stats Number