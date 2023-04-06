const smoothScroll = (id) => {
  id.scrollIntoView();
};
const loader = document.getElementById("loader");
const main = document.getElementById("main");
setTimeout(() => {
  loader.style.display = "none";
}, 4000);

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
    project3Text.innerHTML = "Revista musical de Argentina.<br/>Modificación al tema Zakra, PHP customizado, SCSS y JS.";
    project4Text.innerHTML = "Simulación de tablero realizado con ReactJS.<br/>Front end unicamente.";
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
    project3Text.innerHTML = "Music magazine from Argentina. <br />Modified WordPress theme (Zakra), custom PHP, SCSS and JS.";
    project4Text.innerHTML = "Mock up dashboard done with ReactJS<br/>Frontend only";
    bioTitle.innerHTML = "About me";
    bioDesc.innerHTML = "I'm a front end engineer with a passion for fast-loading and dynamic websites.<br><br>Through responsive and animated design, I believe a boutique website can convey what you're all about and dazzle any potential customer.";
    contactTitle.innerHTML = "In touch";
    lang = "eng";
  }else{
    console.log("Error");
  }
}