var form = document.getElementById("register_form");
const overlay = document.querySelector(".overlays");
const mainwrapper = document.querySelector(".main-wrapper");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("register_form")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
    });
});

form.addEventListener("submit", () => {
  overlay.classList.toggle("overlay-active");
  mainwrapper.classList.toggle("deactive");
  form.reset();
});

overlay.addEventListener("click", () => {
  console.log(mainwrapper.classList);
  overlay.classList.toggle("overlay-active");
  mainwrapper.classList.toggle("deactive");
});
console.log(popupbtn);

document.getElementById("degreeandbranch").attributes["required"] = "";    
