const categoryTitle = document.querySelectorAll(".category-title");
const allCategoryListings = document.querySelectorAll(".all");

for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].addEventListener("click", filterListings.bind(this, categoryTitle[i]));
}

export function filterListings(item) {
    changeActivePosition(item);
    for (let i = 0; i < allCategoryListings.length; i++) {
        if (allCategoryListings[i].classList.contains(item.attributes.id.value)) {
            allCategoryListings[i].style.display = "block"
        }
    }
}

changeActivePosition();