// ==============================
// TEMPLE DATA (with images)
// ==============================
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8452.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919, November, 27",
    area: 42100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-3829.jpg"
  },
  {
    templeName: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923, August, 26",
    area: 88962,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cardston-alberta-temple/cardston-alberta-temple-61960.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-5154.jpg"
  },
  {
    templeName: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5092.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3545.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-11048.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "2020, December, 20",
    area: 50000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-27491.jpg"
  },
  {
    templeName: "Las Vegas Nevada Temple",
    location: "Las Vegas, Nevada, USA",
    dedicated: "1989, December, 15",
    area: 120000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-51115.jpg"
  }
];

// ==============================
// DISPLAY FUNCTION
// ==============================
function displayTemples(templeList) {
  const container = document.getElementById("temple-container");
  container.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" 
           alt="${temple.templeName}" 
           loading="lazy">
    `;

    container.appendChild(card);
  });
}

// ==============================
// FILTER FUNCTIONS
// ==============================

// HOME (all temples)
document.getElementById("home").addEventListener("click", e => {
  e.preventDefault();
  displayTemples(temples);
});

// OLD (< 1900)
document.getElementById("old").addEventListener("click", e => {
  e.preventDefault();
  const filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
  displayTemples(filtered);
});

// NEW (> 2000)
document.getElementById("new").addEventListener("click", e => {
  e.preventDefault();
  const filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
  displayTemples(filtered);
});

// LARGE (> 90,000 sq ft)
document.getElementById("large").addEventListener("click", e => {
  e.preventDefault();
  const filtered = temples.filter(t => t.area > 90000);
  displayTemples(filtered);
});

// SMALL (< 10,000 sq ft)
document.getElementById("small").addEventListener("click", e => {
  e.preventDefault();
  const filtered = temples.filter(t => t.area < 10000);
  displayTemples(filtered);
});

// ==============================
// FOOTER (AUTO UPDATE)
// ==============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ==============================
// INITIAL LOAD
// ==============================
displayTemples(temples);