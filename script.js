const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// échelles initiales
let yesSize = 1;
let noSize = 1;

// écart initial
let marginLeft = 20;

noBtn.addEventListener("click", () => {
  // réduire le bouton Non
  noSize *= 0.8;
  noBtn.style.transform = `scale(${noSize})`;

  // agrandir le bouton Oui
  yesSize *= 1.2;
  yesBtn.style.transform = `scale(${yesSize})`;

  // ajuster l'écart visuel
  marginLeft = 20 * yesSize;
  noBtn.style.marginLeft = `${marginLeft}px`;
});

// toujours rediriger sur Oui
yesBtn.addEventListener("click", () => {
  // petit délai pour que l'animation se termine (optionnel)
  setTimeout(() => {
    window.location.href = "page2.html";
  }, 50);
});
