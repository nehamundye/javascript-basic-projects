const togglefillClick = document.querySelector(".togglefill");
const toggleBtn = document.querySelector("#toggle");
const video = document.querySelector(".video-container");

if (toggleBtn.checked == false) {
  video.pause();
}

togglefillClick.addEventListener("click", () => {
  console.log(toggleBtn.checked);
  if (toggleBtn.checked == false) {
    video.play();
  } else {
    video.pause();
  }
});

// preloader
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.classList.add("hide-preloader")
})
