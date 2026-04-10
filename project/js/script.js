const fishData = [
  { type: "Tilapia", growth: "Fast" },
  { type: "Catfish", growth: "Medium" },
  { type: "Salmon", growth: "Fast" }
];

function displayFish() {
  const container = document.querySelector("#fishList");

  fishData.forEach(fish => {
    container.innerHTML += `
      <p>${fish.type} - Growth: ${fish.growth}</p>
    `;
  });
}

function saveVisits() {
  let visits = localStorage.getItem("visits") || 0;
  visits++;
  localStorage.setItem("visits", visits);

  document.querySelector("#visits").textContent = visits;
}

function saveReview(name, comment) {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  reviews.push({ name, comment });
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

function displayReviews() {
  const reviewList = document.querySelector("#reviewList");
  reviewList.innerHTML = "";

  const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews.forEach(r => {
    reviewList.innerHTML += `
      <div class="review-card">
        <strong>${r.name}</strong>
        <p>${r.comment}</p>
      </div>
    `;
  });
}

function handleForm() {
  const form = document.querySelector("#reviewForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#username").value;
    const comment = document.querySelector("#comment").value;

    saveReview(name, comment);
    displayReviews();

    form.reset();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayFish();
  saveVisits();
  displayReviews();
  handleForm();
});
function toggleTheme() {
  const btn = document.querySelector("#themeToggle");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", mode);
  });

  // Load saved theme
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
  }
}
let rating = 0;

function handleStars() {
  const stars = document.querySelectorAll("#stars span");

  stars.forEach(star => {
    star.addEventListener("click", () => {
      rating = star.dataset.value;

      stars.forEach(s => s.classList.remove("active"));
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add("active");
      }
    });
  });
}
function calculateGrowth() {
  const count = document.querySelector("#fishCount").value;
  const feed = document.querySelector("#feedRate").value;

  if (!count || !feed) {
    document.querySelector("#result").textContent = "Enter valid values";
    return;
  }

  const totalFeed = count * feed;

  document.querySelector("#result").textContent =
    `Estimated daily feed: ${totalFeed} grams`;
}
document.addEventListener("DOMContentLoaded", () => {
  displayFish();
  saveVisits();
  displayReviews();
  handleForm();
  handleStars();
  toggleTheme();
});