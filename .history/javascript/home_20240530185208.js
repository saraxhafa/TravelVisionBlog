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
const filterable_cards = e=> {
  document.querySelector(".active").classList.remove("active");
e.target.classList.add("active")
  console.log(e.target);
}

// Add click event listener to each filter button
// duhet te kishe vendosur emrin e funksionit qe ke krijuar me lart
filterButtons.forEach(button =>button.addEventListener("click", filterable_cards));

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
