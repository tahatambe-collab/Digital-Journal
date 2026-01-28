function openDiary() {
  document.body.style.transition = "opacity 1.5s";
  document.body.style.opacity = "0";

  setTimeout(() => {
    window.location.href = "page2.html";
  }, 1500);
}
