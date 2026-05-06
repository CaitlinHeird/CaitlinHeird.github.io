/*
    Student Name: Caitlin Heird
    File Name: script.js
    Date: 04/12/2026
*/

// Mobile nav toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


// Amount button selection
const amountButtons = document.querySelectorAll(".amount-options button");

amountButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    amountButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

  });
});