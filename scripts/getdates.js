const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
`© ${year} Precious Fabiyi • Nigeria`;

document.getElementById("lastModified").textContent =
"Last Modification: " + document.lastModified;