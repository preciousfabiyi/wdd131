// Product Array
const products = [
  { id: "p1", name: "Fish Feeder" },
  { id: "p2", name: "Water Pump" },
  { id: "p3", name: "Fish Net" },
  { id: "p4", name: "Pond Filter" }
];

// Populate Select
document.addEventListener("DOMContentLoaded", () => {
  const select = document.querySelector("#product");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});