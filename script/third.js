// rotating logo name
const text = document.querySelector(".text p");
            text.innerHTML = text.innerText.split("").map(
                (char, i) =>
                `<span style="transform:rotate(${i * 8.8}deg)">${char}</span>`
            ).join("")

// end of rotating logo name

//clock code

const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
setInterval(() => {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;
hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})

// end of clock code

//header scroll code

{
const header = document.querySelector("header");
let lastScrollY = window.scrollY;
          
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});
}


// end of header scroll

// vision dropdown code

const sectionVision = document.getElementById("vision");
const buttonVision = document.getElementById("visionButton")

sectionVision.style.display = "none";


document.getElementById("visionButton").addEventListener("click", function(){
  
  if (sectionVision.style.display === "none") {
    sectionVision.style.display = "block";
    buttonVision.innerHTML = "&#8659; My Vision";

  }else {
    sectionVision.style.display = "none";
    buttonVision.innerHTML = "&#8658; My Vision";

  }
  
});

// end of vision dropdown code

//mission dropdown code

const section = document.getElementById("mission");
const buttonMission = document.getElementById("missionButton")

section.style.display = "none";

document.getElementById("missionButton").addEventListener("click", function(){
  
  if (section.style.display === "none") {
    section.style.display = "block";
    buttonMission.innerHTML = "&#8659; My Mission";

  }else {
    section.style.display = "none";
    missionButton.innerHTML = "&#8658; My Mission";
  }
  
});

// end of mission dropdown code

//Goal dropdown code

const sectionGoal = document.getElementById("goal");
const buttonGoal = document.getElementById("goalButton")
sectionGoal.style.display = "none";

document.getElementById("goalButton").addEventListener("click", function(){
  
  if (sectionGoal.style.display === "none") {
    
    sectionGoal.style.display = "block";
    buttonGoal.innerHTML = "&#8659; My Goal";

  }else {
    
    sectionGoal.style.display = "none";
    buttonGoal.innerHTML = "&#8658; My Goal";

  }
  
});

// End Goal dropdown code


  const scrollElements = document.querySelectorAll(".js-scroll");

  const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
  };
  
  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }
  
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });


var imageContainers = document.querySelectorAll('.projectImage');
var prevButton = document.getElementById('prev-btn');
var nextButton = document.getElementById('next-btn');
var currentIndex = 0;
var maxIndex = imageContainers.length - 1;

function showImages() {
  for (var i = 0; i <= maxIndex; i++) {
    if (i >= currentIndex && i <= currentIndex + 2) {
      imageContainers[i].classList.remove('hide');
    } else {
      imageContainers[i].classList.add('hide');
    }
  }
}

prevButton.addEventListener('click', function() {
  if (currentIndex === 0) {
    currentIndex = maxIndex - 2;
  } else if (currentIndex <= maxIndex - 2) {
    currentIndex--;
  } else {
    currentIndex = maxIndex;
  }
  showImages();
});

nextButton.addEventListener('click', function() {
  if (currentIndex < maxIndex - 2) {
    currentIndex++;
  } else if (currentIndex === maxIndex - 2) {
    currentIndex = 0;
  } else {
    currentIndex = 0;
  }
  showImages();
});

showImages();


function restartAnimation() {
    var element = document.querySelector('.imageDescription');
    element.style.animation = 'none';
    void element.offsetWidth; // Trigger reflow
    element.style.animation = null;
  }

  function nav_open() {
    document.querySelector("#smallNav").style.display = "block";
    document.querySelector("html").style.overflowY = "hidden";
  }

  function nav_close() {
    document.querySelector("#smallNav").style.display = "none";
    document.querySelector("html").style.overflowY = "scroll";
  }

window.addEventListener("resize", function(){
  var navbar = document.getElementById("smallNav");
  var screenWidth = window.innerHTML || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth >= 1000) {
    navbar.style.display = "none";
  }else {
    navbar.style.display = "none";
  }

});

window.addEventListener("resize", function() {
  var resizeAnimate = document.querySelectorAll(".projectImage");
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth >= 1000) {
    resizeAnimate.forEach(function(element) {
      element.classList.remove("js-scroll", "fade-in-bottom");
    });
  } else {
    resizeAnimate.forEach(function(element) {
      element.classList.add("js-scroll", "fade-in-bottom");
    });
  }
});





"editor.codeActionsOnSave"; {
    "source.fixAll.eslint"; true
  }
  "eslint.validate"; ["javascript"]
            
            