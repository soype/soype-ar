const smoothScroll = (id) => {
  id.scrollIntoView();
};
const loader = document.getElementById("loader");
const main = document.getElementById("main");
setTimeout(() => {
  loader.style.display = "none";
}, 4000);
