function isMobileDevice() {
  return window.innerWidth <= 768;
}

const smoothScroll = (id) => {
  id.scrollIntoView();
};
// const loader = document.getElementById("loader");
// const main = document.getElementById("main");
// setTimeout(() => {
//   loader.style.display = "none";
// }, 4000);

const terminal = document.getElementById('terminal');
const mepex = document.getElementById('project-mepex');
const project2 = document.getElementById('project-mepex');
const project4 = document.getElementById('project-4');

const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      if(entry.target === terminal){
        entry.target.classList.add("terminal-animated", entry.isIntersecting);  
      }
      if(entry.target === project2){
        mepex.classList.add('mepex-animado')
      }
      if(entry.target === project4){
        mepex.classList.add('mepex-animado')
      }
    }
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
Obs.observe(terminal, obsOptions);
if(isMobileDevice()){
  Obs.observe(project2, obsOptions);
}else{
  Obs.observe(project4, obsOptions)
}


const reload = document.getElementById('reload');
let counter = 0;
reload.addEventListener('click', function(){
  const svgElement = mepex.querySelector('.animacion');
  const newSvgElement = svgElement.cloneNode(true);
  if(!svgElement.classList.contains('mepex-animado')){
    newSvgElement.classList.add('mepex-animado');  
  }
  if (svgElement) {
    svgElement.remove();
  }
  mepex.appendChild(newSvgElement);
  counter++;
  if(counter === 3){
    const message = document.createElement('p');
    message.innerHTML = "Pretty cool, huh?";
    message.classList.add('easter-egg');
    mepex.querySelector('.item-text').appendChild(message);
  }
  if(counter === 4){
    const message = document.createElement('p');
    message.innerHTML = "The entire animation is made with CSS and SVG, triggered by JS";
    message.classList.add('easter-egg-2');
    mepex.querySelector('.item-text').appendChild(message);
  }
});
  


let lang = "eng";

const changeLanguage = () => {
  const navbar = document.getElementById('navbar');
  const introTitle = document.getElementById('intro__title');
  const introDesc = document.getElementById('intro__desc');
  const project1Text = document.getElementById('project__1-text');
  const project2Text = document.getElementById('project__2-text');
  const project3Text = document.getElementById('project__3-text');
  const project4Text = document.getElementById('project__4-text');
  const bioTitle = document.getElementById('bio-title');
  const bioDesc = document.getElementById('bio-desc');
  const contactTitle = document.getElementById('contact-title');
  if(lang === "eng"){
    navbar.children[0].innerHTML = "ENG";
    navbar.children[1].innerHTML = 'Proyectos';
    navbar.children[2].innerHTML = 'Acerca de';
    navbar.children[3].innerHTML = 'Contacto';
    introTitle.innerHTML = "Vos solo imaginá";
    introDesc.innerHTML = "Y estará ahí";
    project1Text.innerHTML = "Stands y exposiciones.<br/>Desarrollo web. Tema Wordpress customizado desde cero.";
    project2Text.innerHTML = "Servicios a la industria pesada.<br/>Desarrollo web. Tema Wordpress customizado desde cero.";
    project3Text.innerHTML = "Revista musical de Argentina.<br/>Modificación al tema Zakra, PHP customizado, SASS y JS.";
    project4Text.innerHTML = "Calculador de cuotas con interés versus inflación <br> React y SASS";
    bioTitle.innerHTML = "Acerca de mi";
    bioDesc.innerHTML = "Soy un desarrollador front end con una pasión por los sitios veloces y dinámicos.<br><br>Mi objetivo es crear sitios web boutique que transmiten un mensaje a través de animaciones y un diseño responsivo, dejando una duradera impresión en cualquier posible cliente.";
    contactTitle.innerHTML = "En contacto";
    lang = "esp";
  }else if(lang === "esp"){
    navbar.children[0].innerHTML = "ESP";
    navbar.children[1].innerHTML = 'Projects';
    navbar.children[2].innerHTML = 'About';
    navbar.children[3].innerHTML = 'Contact';
    introTitle.innerHTML = "You just imagine";
    introDesc.innerHTML = "It'll be there";
    project1Text.innerHTML = "Stands and expositions. <br />Web development. Custom WordPress theme from scratch.";
    project2Text.innerHTML = "Heavy industry maintenance. <br />Web development. Custom WordPress theme from scratch.";
    project3Text.innerHTML = "Music magazine from Argentina. <br />Modified WordPress theme (Zakra), custom PHP, SASS and JS.";
    project4Text.innerHTML = "Financial calculator for installments <br> React and SASS";
    bioTitle.innerHTML = "About me";
    bioDesc.innerHTML = "I'm a front end engineer with a passion for fast-loading and dynamic websites.<br><br>Through responsive and animated design, I believe a boutique website can convey what you're all about and dazzle any potential customer.";
    contactTitle.innerHTML = "In touch";
    lang = "eng";
  }else{
    console.log("Error");
  }
}

function calculateAge() {
  let age = document.querySelector("#age");
  let ageMobile = document.querySelector("#age-mobile");
  // Your birthdate
  let birthDate = new Date('1991-12-24');
  
  // Current date
  let currentDate = new Date();
  
  // Calculate the difference in milliseconds
  let ageInMilliseconds = currentDate - birthDate;
  
  // Convert milliseconds to years (approximately)
  let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
  
  // Round the age to the nearest integer
  ageInYears = Math.floor(ageInYears);

  age.innerHTML = ageInYears;
  ageMobile.innerHTML = ageInYears;
}

calculateAge();

// Make bubble follow cursor
document.addEventListener('mousemove', function(event) {
  const bubble = document.querySelector('.bubble');
  const container = document.querySelector('.section-5'); // Select the 4th container (index 3)

  if (bubble && container) {
      const containerRect = container.getBoundingClientRect(); // Get the container's position

      // Calculate the position of the bubble relative to the container
      const bubbleX = event.clientX - containerRect.left;
      const bubbleY = event.clientY - containerRect.top;

      // Set the bubble's position within the container
      bubble.style.position = 'absolute';
      bubble.style.left = `${bubbleX}px`;
      bubble.style.top = `${bubbleY}px`;
  }
});
