// Your code goes here
const logo = 
document.querySelector(".logo-heading")
console.log(logo);
logo.addEventListener ("mouseenter", ()=>{
    logo.style.transform = "scale(1.4)";
})
logo.addEventListener("mouseleave", ()=>{
logo.style.transform = "scale(1)";
})


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
 
