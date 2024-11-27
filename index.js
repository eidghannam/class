const box = document.querySelector("h1");

box.addEventListener("mouseover", () => {
  box.textContent = box.textContent === "Hi" ? "Bye" : "Hi";

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  let randomX = Math.floor(Math.random() * windowWidth);
  let randomY = Math.floor(Math.random() * windowHeight);

  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);

  box.style.transform = `translate(${randomX}px, ${randomY}px)`;
  box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
});
