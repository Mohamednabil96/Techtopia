// Image Slider
let slideIndex = 1;
showSlides(slideIndex);

setInterval(function() {
    showSlides(slideIndex += 1);
}, 3000);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";    
}

// Categories
let navItems = document.querySelectorAll('.nav-item2');
let tabPanes = document.querySelectorAll('.tab-pane');

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    const category = navItem.dataset.category;

    navItems.forEach(item => item.classList.remove('active'));
    navItem.classList.add('active');

    tabPanes.forEach(pane => {
      if (pane.dataset.category === category || category === 'all') {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Hiding the other categ. 
    const otherPanes = document.querySelectorAll(`.tab-pane:not([data-category="${category}"])`);
    otherPanes.forEach(pane => pane.classList.remove('active'));
  });
});

// Cart 
let counterBtns = document.querySelectorAll('.counterBtn');
let counter = document.querySelector('.counter');

let count = 0;

counterBtns.forEach((button) => {
  button.addEventListener('click', () => {
    count++;
    counter.textContent = count;
  });
});

