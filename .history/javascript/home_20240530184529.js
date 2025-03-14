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
const filterButtons = document.querySelectorAll(".filter_button button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");
console.log(filterableCards, filterButtons);
// const filterButtons = document.querySelectorAll("#filter-buttons button");
// const filterableCards = document.querySelectorAll("#filterable-cards .card");
//Define the filter cards function
// const filterable_cards = e=> {
// console.log(e.target);
// }

// Add click event listener to each filter button
// filterButtons.forEach(button =>button.addEventListener("click", filterCards));

//...
// Kete duhet te shkruaje
const filterCards = (e) => {
  document.querySelector("#filter-buttons .active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach(card => {
      // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
      if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
          return card.classList.replace("hide", "show");
      }
      card.classList.add("hide");
  });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));
