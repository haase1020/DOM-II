// Your code goes here

//mouseenter 1
//mouseleave 2
const logo = 
document.querySelector(".logo-heading")
console.log(logo);
logo.addEventListener ("mouseenter", ()=>{
    logo.style.transform = "scale(1.4)";
})
logo.addEventListener("mouseleave", ()=>{
logo.style.transform = "scale(1)";
})

//mouseenter 3
//mouseleave 4
const nav = 
document.querySelector(".nav")

nav.addEventListener ("mouseenter", ()=>{
    nav.style.transform = "scale(1.4)";
})
nav.addEventListener("mouseleave", ()=>{
nav.style.transform = "scale(1)";
})
//wheel 5
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    header.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const header = document.querySelector(".intro")
header.onwheel = zoom;
 
const button = document.querySelector(".btn")
button.addEventListener('click', event => {
    button.innerHTML = `Click count: ${event.detail}`;
  });

  
//load 6
  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

  //focus event 7
  const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});

//resize event 8
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

//scroll event 9
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
  // Do something with the scroll position
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});

//select 10
function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `You selected: ${selection}`;
  }
  
  const input = document.querySelector('input');
  input.addEventListener('select', logSelection);

  
//transitionrun 11

const transition = document.querySelector('.transition');
const message = document.querySelector('.message');

transition.addEventListener('transitionrun', function() {
  message.textContent = 'transitionrun fired';
});

transition.addEventListener('transitionstart', function() {
  message.textContent = 'transitionstart fired';
});

transition.addEventListener('transitionend', function() {
  message.textContent = 'transitionend fired';
});
