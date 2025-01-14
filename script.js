let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(x) {
    showSlides(slideIndex += x);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
}

for (let c = 7; c <= 12; c++) {
    document.querySelector("#b" + c).style.backgroundImage = "url('b" + c + ".avif')";
}

for (let c=1; c<=20; c++) {
    document.querySelector("#p" + c).style.backgroundImage = "url('p" + c + ".avif')";
}

let productIndex = 0;
const prodShow = 5;
const products = document.querySelectorAll(".product");
const products2 = document.querySelectorAll(".product2");

function plusProducts(x) {
    const pp = document.querySelector(".products");
    const totalProducts = products.length/2;
    const maxIndex = totalProducts - prodShow;

    productIndex += x;

    if (productIndex < 0) {
        productIndex = maxIndex;
    } else if (productIndex > maxIndex) {
        productIndex = 0;
    }

    pp.style.transform = "translateX(" + (-productIndex * (100 / prodShow)) + "%)";
}

function plusProducts2(x) {
    const pp = document.querySelector(".products2");
    const totalProducts = products2.length;
    const maxIndex = totalProducts - prodShow;

    productIndex += x;

    if (productIndex < 0) {
        productIndex = maxIndex;
    } else if (productIndex > maxIndex) {
        productIndex = 0;
    }

    pp.style.transform = "translateX(" + (-productIndex * (100 / prodShow)) + "%)";
}


for (let g=1; g<=3; g++) {
    document.querySelector("#g" + g).style.backgroundImage = "url('g" + g + ".avif')";
}

for (let cat=1; cat<=6; cat++) {
    document.querySelector("#cat" + cat).style.backgroundImage = "url('cat" + cat + ".avif')";
}

for (let pay=1; pay<=8; pay++) {
    document.querySelector("#pay" + pay).style.backgroundImage = "url('pay" + pay + ".avif')";
}


function nextSlide() {
    plusSlides(1);
    plusProducts(1);
    plusProducts2(1);
  }
  
setInterval(nextSlide, 4000);
