export function setupSearch(listings) {

    const searchForm = document.querySelector("form#search")


    searchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const form = event.target;
        const searchTerm = form.term.value;
        const term = searchTerm.toLowerCase();

        const filteredListings = listings.filter(function (listing) {
            const title = listing.title.toLowerCase();
            const description = listing.description.toLowerCase();

            return title.includes(term) || description.includes(term);


        })
        console.log(filteredListings)
    })

}

