const image = document.querySelector(".container");
const heartIcon = document.querySelector(".heart");

image.addEventListener("dblclick", (e) => {
  let xValue = e.clientX - e.target.offsetLeft;
  let yValue = e.clientY - e.target.offsetTop;

  // Set the position of the heart element
  heartIcon.style.left = `${xValue}px`;
  heartIcon.style.top = `${yValue}px`;

  heartIcon.classList.add("active");
  setTimeout(() => {
    heartIcon.classList.remove("active");
  }, 1000);
});
