document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

document.querySelectorAll(".wrapper").forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.remove("change");
    });
  });
});

const videos = document.querySelectorAll(".video");

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});

document.getElementById("form-btn").addEventListener("click", function() {
  window.alert("Thank you for the visit we will contact you soon! bye");
});



document.querySelectorAll('.section-2').forEach(item => {
  item.addEventListener('click', event => {
    window.alert("Keep calm!!currently working on it");
    //handle click
  })
})