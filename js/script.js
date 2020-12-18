document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", addImage);
});

function addImage(e) {
  let selector = this.getAttribute("data-img-container");
  if (this.files[0]) {
    var fr = new FileReader();

    fr.addEventListener(
      "load",
      function () {
        document.querySelector("." + selector).style.backgroundImage =
          "url(" + fr.result + ")";
      },
      false
    );

    fr.readAsDataURL(this.files[0]);
  }
}
