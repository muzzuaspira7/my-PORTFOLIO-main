const typed = new Typed('#changing-text', {
  strings: ['Flutter Developer', 'Frontend Developer', 'Mobile App Developer', 'Web Designer', 'Web Developer'],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

// Projects

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  });
});



// Function to add or remove the 'active' class based on scroll position
function setActiveNav() {
  const sections = document.querySelectorAll("section"); // Replace with your section elements
  const navLinks = document.querySelectorAll(".navbar a");
  const icons = document.querySelectorAll(".bottom-icons a i");

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 150 && rect.bottom >= 150) {
      // Highlight the corresponding nav link and icon
      navLinks[index].classList.add("active");
      icons[index].classList.add("active");
    } else {
      // Remove the 'active' class from nav link and icon
      navLinks[index].classList.remove("active");
      icons[index].classList.remove("active");
    }
  });
}

// Listen for scroll events and call the setActiveNav function
window.addEventListener("scroll", setActiveNav);

// Call setActiveNav initially to highlight the active section on page load
setActiveNav();

// TIME LINE
(function () {
  "use strict";

  // define variables

  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
 
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

// Contacttttt
const scriptURL = 'https://script.google.com/macros/s/AKfycbwvlmFmTZeDsL3mqALhcx51fnu_p6lzzC19uurAjn6hvcNdhY_BSzn4DlE3lKmQYFY_iA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.style.display = "block"
      setTimeout(function () {
        msg.style.display = "none"
      }, 3000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


// Swipper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
});

let appProjects = document.querySelector('.appProjects')
// App
async function fetchAppData() {
  let response = await fetch('projects.json')
  let data = await response.json();
  console.log(data)
  data.app_projects.forEach(value => {

    console.log(value.project_name)
    // created card
    let card = document.createElement('div')
    card.classList.add('card')
    appProjects.appendChild(card)
    // created img-container
    let imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    card.appendChild(imgContainer)
    // created img
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('img')
    imgContainer.appendChild(imgDiv)
    // created projImage
    let projImage = document.createElement('div')
    projImage.classList.add('projImage')
    imgDiv.appendChild(projImage)
    // create img tag
    let img = document.createElement('img')
    img.src = value.img
    projImage.appendChild(img)
    // created title 
    let title = document.createElement('div')
    title.classList.add('title')
    imgDiv.appendChild(title)
    // creating h tag
    let projName = document.createElement('h4')
    projName.innerHTML = value.project_name
    title.appendChild(projName)
    // creating p tag
    let LangUsed = document.createElement('p')
    LangUsed.innerHTML = value.language
    title.appendChild(LangUsed)
    // created description card
    let descriptionCard = document.createElement('div')
    descriptionCard.classList.add('description')
    imgDiv.appendChild(descriptionCard)
    // created title 
    let titlee = document.createElement('span')
    titlee.classList.add('title')
    descriptionCard.appendChild(titlee)
    // created row
    let row = document.createElement('div')
    row.classList.add('row')
    titlee.appendChild(row)
    // created gitimg
    let gitimgDiv = document.createElement('div')
    gitimgDiv.classList.add('gitimg')
    row.appendChild(gitimgDiv)
    // created ancher tag
    let aTag = document.createElement('a')
    aTag.href = value.links
    aTag.target = '_blank'
    gitimgDiv.appendChild(aTag)
    // created githubImage
    let constGitImage = document.createElement('img')
    constGitImage.src = "/img/github.png"
    aTag.appendChild(constGitImage)

















  })


}

fetchAppData()

// for web

let webProjects = document.querySelector('.webProjects')

async function fetchWebData() {
  let response = await fetch('projects.json')
  let data = await response.json();
  console.log(data)
  data.web_projects.forEach(value => {

    console.log(value.project_name)
    // created card
    let card = document.createElement('div')
    card.classList.add('card')
    webProjects.appendChild(card)
    // created img-container
    let imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    card.appendChild(imgContainer)
    // created img
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('img')
    imgContainer.appendChild(imgDiv)
    // created projImage
    let projImage = document.createElement('div')
    projImage.classList.add('projImage')
    imgDiv.appendChild(projImage)
    // create img tag
    let img = document.createElement('img')
    img.src = value.img
    projImage.appendChild(img)
    // created title 
    let title = document.createElement('div')
    title.classList.add('title')
    imgDiv.appendChild(title)
    // creating h tag
    let projName = document.createElement('h4')
    projName.innerHTML = value.project_name
    title.appendChild(projName)
    // creating p tag
    let LangUsed = document.createElement('p')
    LangUsed.innerHTML = value.language
    title.appendChild(LangUsed)
    // created description card
    let descriptionCard = document.createElement('div')
    descriptionCard.classList.add('description')
    imgDiv.appendChild(descriptionCard)
    // created title 
    let titlee = document.createElement('span')
    titlee.classList.add('title')
    descriptionCard.appendChild(titlee)
    // created row
    let row = document.createElement('div')
    row.classList.add('row')
    titlee.appendChild(row)
    // created gitimg
    let gitimgDiv = document.createElement('div')
    gitimgDiv.classList.add('gitimg')
    row.appendChild(gitimgDiv)
    // created ancher tag
    let aTag = document.createElement('a')
    aTag.href = value.links
    aTag.target = '_blank'
    gitimgDiv.appendChild(aTag)
    // created githubImage
    let constGitImage = document.createElement('img')
    constGitImage.src = "/img/github.png"
    aTag.appendChild(constGitImage)
    // for the netlify link 

    let GoLive = document.createElement('div')
    GoLive.classList.add('gitimg')
    row.appendChild(GoLive)
    // created ancher tag
    let GoLiveTag = document.createElement('a')
    GoLiveTag.href = value.live
    GoLiveTag.target = '_blank'
    GoLive.appendChild(GoLiveTag)
    // created githubImage
    let ConstNetlifyImg = document.createElement('img')
    ConstNetlifyImg.src = "/img/golive.png"
    GoLiveTag.appendChild(ConstNetlifyImg)

  })


}

fetchWebData()
let view_more = document.querySelector('.project_footer p')
let show = false;
let mainforweb = document.querySelector('.hidden')
view_more.addEventListener('click', function () {
  show = !show
  console.log(show)
  if (show) {
    mainforweb.style.display = "block"
    view_more.innerHTML = "View Less"

  } else {
    mainforweb.style.display = "none"
    view_more.innerHTML = "View More"
  }


})