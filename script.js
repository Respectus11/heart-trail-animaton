const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const size = Math.random() * 100; // random size between 0 and 100

  const spanEl = document.createElement("span"); 
  spanEl.style.position = "absolute";
  spanEl.style.left = `${xPos}px`;
  spanEl.style.top = `${yPos}px`;
  spanEl.style.width = `${size}px`;    // apply random width
  spanEl.style.height = `${size}px`;   
  spanEl.style.background = "red";     
  

  bodyEl.appendChild(spanEl); 

  setTimeout(() => {
    spanEl.remove();          
  }, 2000);
});
