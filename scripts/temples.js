const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;


const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
navMenu.classList.toggle("open");
});
const original = [...data];

function filterTemples(criteria) {
  return original.filter(temple => {
    return Object.keys(criteria).every(key => {
      return temple[key] === criteria[key];
    });
  });
}