const modal = document.getElementById("modal");
const openBtn = document.querySelectorAll(".openBtn");
const closeBtn = document.getElementById("closeBtn");


openBtn.forEach(btn => {
  btn.addEventListener("cilck", () => {
    modal.style.display ="flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
});
