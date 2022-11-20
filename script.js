const d = document,
  $modal = d.querySelector(".modal");

d.addEventListener("click", (e) => {
  if (e.target.matches(".burger")) {
    if (!$modal.classList.contains("modal-on")) {
      $modal.classList.add("modal-on");
    } else {
      $modal.classList.remove("modal-on");
    }
  }
});
