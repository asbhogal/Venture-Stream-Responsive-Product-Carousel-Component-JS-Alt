const carousel = document.querySelector(".app__container__carousel");
let isDragging = false,
  startX,
  startScrollLeft;
let startPos = 0;
let currentPos = 0;

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startPos = e.pageX - carousel.offsetLeft;
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  e.preventDefault();
  currentPos = e.pageX - carousel.offsetLeft;
  const scrollPos = currentPos - startPos;
  carousel.scrollLeft = carousel.scrollLeft - scrollPos;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = (e) => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
document.addEventListener("mouseup", () => {
  isDragging = false;
});
carousel.addEventListener("mouseleave", () => {
  isDragging = false;
});
