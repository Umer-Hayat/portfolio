
// Portfolio Item Filter

const filterContainer = document.querySelector(".portfolio-filter"),
    filterBtns = filterContainer.children,
    totalFilterBtn = filterBtns.length,
    portfolioItems = document.querySelectorAll(".portfolio-item"),
    totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener("click", function () {
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        const filterValue = this.getAttribute("data-filter");

        for (let k = 0; k < totalPortfolioItem; k++) {
            if (filterValue === portfolioItems[k].getAttribute("data-category")) {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
            else {
                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }
            if (filterValue === "all") {
                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }
    })
}

// Portfolio Lightbox

const lightBox = document.querySelector(".lightbox"),
    lightBoxImg = lightBox.querySelector(".lightbox-img"),
    lightBoxClose = lightBox.querySelector(".lightbox-close"),
    lightBoxText = lightBox.querySelector(".caption-text"),
    lightboxCounter = lightBox.querySelector(".caption-counter");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
        toggleLightBox();
    })
}
function nextItem() {
    if (itemIndex === totalPortfolioItem - 1) {
        itemIndex = 0;
    }
    else {
        itemIndex++;
    }
    changeItem();
}
function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPortfolioItem - 1;
    }
    else {
        itemIndex--;
    }
    changeItem();
}
function toggleLightBox() {
    lightBox.classList.toggle("open");
}
function changeItem() {
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    lightBoxImg.src = imgSrc;
    lightBoxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}

// Lightbox Close

lightBox.addEventListener("click", function (event) {
    if (event.target === lightBoxClose || event.target === lightBox) {
        toggleLightBox();
    }
})