const box = document.querySelector('h1');
box.addEventListener('mouseover', () => {
  // Generate random values for both translateX and translateY between 0 and 100
  let randomX = Math.floor(Math.random() * 100); // Random X value between 0 and 100
  let randomY = Math.floor(Math.random() * 100); // Random Y value between 0 and 100
  
  // Generate random values for RGB color (0 to 255)
  let randomR = Math.floor(Math.random() * 256); // Random Red value
  let randomG = Math.floor(Math.random() * 256); // Random Green value
  let randomB = Math.floor(Math.random() * 256); // Random Blue value
  
  // Apply the random translateX and translateY values to the box's transform property
  box.style.transform = `translate(${randomX}px, ${randomY}px)`;
  
  // Apply the random RGB color to the box's text color (or background color)
  box.style.color = `rgb(${randomR}, ${randomG}, ${randomB})`; // Changes the text color
  // If you want to change the background color, use:
  // box.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
});
