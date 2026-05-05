// --- Featured Product Cycling (home.html) ---
var totalCards = 4;
var currentIndex = 0;

function cycleProducts() {
    // Only run if product cards exist on this page
    if (!document.getElementById("card-0")) return;

    document.getElementById("card-" + currentIndex).classList.remove("active");
    document.getElementById("dot-"  + currentIndex).classList.remove("active");
    currentIndex = (currentIndex + 1) % totalCards;
    document.getElementById("card-" + currentIndex).classList.add("active");
    document.getElementById("dot-"  + currentIndex).classList.add("active");
}

// --- Header Banner Cycling (index.html) ---
var bannerIndex = 0;

function cycleBanners() {
    var slides = document.querySelectorAll(".banner-slide");
    if (slides.length === 0) return;

    slides[bannerIndex].classList.remove("active");
    bannerIndex = (bannerIndex + 1) % slides.length;
    slides[bannerIndex].classList.add("active");
}

setInterval(cycleProducts, 2500);
setInterval(cycleBanners, 3500);