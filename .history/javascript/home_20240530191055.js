// for Carousel
/*
 slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
*/
//Select all filter buttons and filterable cards
// emrin e class e kishe vendosur gabim
const filterButtons = document.querySelectorAll(".filter_buttons button");
// Duhet ta kishe vendosur dhe fjallen All
const filterableCards = document.querySelectorAll(".filterable_cards .card");
console.log(filterableCards, filterButtons);

//Define the filter cards function
const filterable_cards = (e) => {
  // Tek html ke perdorur class active dhe ne navbar edhe ne carousel dhe te ben crash me kete ku
  // keshtu duhet te perdorej nje klase tjeter (duhet te ndryshohet ne html dhe css)
  // Dhe duhet te shkruaje te gjithen kete
  document.querySelector(".activeF").classList.remove("activeF");
  e.target.classList.add("activeF");

  filterableCards.forEach((card) => {
    card.classList.add("hide");

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

// Add click event listener to each filter button

filterButtons.forEach((button) =>
  // duhet te kishe vendosur emrin e funksionit qe ke krijuar me lart
  button.addEventListener("click", filterable_cards)
);
