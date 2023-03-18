const rating_section = document.querySelector (".rating_section");
const result_section = document.querySelector (".result_section");
const submit_btn = document.querySelector (".submit_btn");
const ratings = document.querySelectorAll (".ratings span");
const rate_point = document.getElementById ("rate");
const favorite = document.querySelector (".favorite_icon");
let rate = null;

ratings.forEach((rating_card) => {
    rating_card.addEventListener("click", (e) => {
      const active = document.querySelector(".checked");
      if (active) {
        active.classList.remove("checked");
      }
      const card = e.target;
      card.classList.add("checked");
      rate = e.target.innerText;
    });
  });
  
  submit_btn.addEventListener("click", () => {
    if (rate) {
      rate_point.innerText = rate;
      rating_section.classList.add("hidden");
      result_section.classList.remove("hidden");
    }
  });

