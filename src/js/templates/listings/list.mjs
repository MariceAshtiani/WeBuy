import { getListings } from "../../api/listings/index.mjs";
import { setupSearch } from "../../api/index.mjs";

export async function displayListings() {
    try {
        const container = document.querySelector("#listings")
        const listings = await getListings();
        renderListings("#listings", listings);

        setupSearch(listings, container);
    } catch (error) {
        console.log(error);
        //displayError("#listings", "Failed to get listings");
    }
}

export function renderListings(container, listings) {
    const parent = document.querySelector("#listings", container);

    parent.innerHTML = "";


    listings.forEach((listing) => {
        const { id, title, description, media, endsAt, created, updated, tags, seller } = listing;

        const endDate = new Date(endsAt).toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });


        parent.innerHTML += `<div class="col-12 col-sm-6 col-lg-4">
                                <div class="card m-4 border ">
                                    <div class="card-body">
                                        <div class="w-100">
                                            <div class="product">
                                                <div class="product-image">
                                                    <img src="${media[0] ?? "../../../../images/defaultimage.jpg"}" alt="${title}" class="w-100"/>
                                                </div>
                                                <div class="product-info p-4">
                                                    <h2>${title}</h2>
                                                    <p class="text-muted">Updated: ${updated}</p>
                                                <div id="dateContainer">
                                                    <h5 class="end-date" id="endDate">${endDate}</h5>
                                                    <a href="/listing/index.html?id=${id}" class="listing-link">
                                                        <button class="btn btn-lg btn-dark view-btn">View</button>
                                                    </a>
                                                </div>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                    </div>
                                </div> 
                            </div>`
    });
}