const stars = document.getElementById("stars");
const moon = document.getElementById("moon");
const mountains_behind = document.getElementById("mountains_behind");
const text = document.getElementById("text");
const btn = document.getElementById("btn");
const mountains_front = document.getElementById("mountains_front");
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const value = window.scrollY;
  stars.style.transform = `translateY(${value * 0.25}px)`;
  moon.style.transform = `translateY(${value * 1.05}px)`;
  mountains_behind.style.transform = `translateY(${value * 0.5}px)`;
  text.style.transform = `translateX(${value * -4}px) translateY(${
    value * 0.5
  }px)`;
  btn.style.transform = `translateY(${value * 1.5}px)`;
  header.style.transform = `translateY(${value * 0.5}px)`;
});
