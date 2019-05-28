// Navigation Toggle Button
function Button() {
  const x = document.getElementById("nav-btn");
  if (x.className === "nav-btn") {
    x.className += " responsive";
  } else {
    x.className = "nav-btn";
  }
}

// Mobile Navigation
function mobileNav() {
const y = document.getElementById("nav");
  if(y.className === "nav-links") {
    y.className += " responsive";
  } else {
    y.className = "nav-links";
  }
}

// Navigation Dropdown
// function drop() {
//   const z = document.querySelector(".marketing-drop");
//   if (z.style.display === "none" || z.style.display === "") {
//     z.style.display = "block";
//   } else {
//     z.style.display = "none";
//   }
// }
//
// function dropTwo() {
//   const z = document.querySelector(".marketing-drop");
//   z.style.display = "none";
// }
//
// function dropThree() {
//   const a = document.querySelector(".resources-drop");
//   if (a.style.display === "none" || a.style.display === "") {
//     a.style.display = "block";
//   } else {
//     a.style.display = "none";
//   }
// }
//
// function dropFour() {
//   const z = document.querySelector(".resources-drop");
//   z.style.display = "none";
// }
