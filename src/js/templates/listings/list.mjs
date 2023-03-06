import { getListings } from "../../api/listings/index.mjs";

export async function displayListings() {
    try {
        const listings = await getListings();
        renderListings("#listings", listings);
    } catch (error) {
        console.log(error);
        //displayError("#listings", "Failed to get listings");
    }
}

export function renderListings(container, listings) {
    const parent = document.querySelector("#listings", container);

    parent.innerHTML = "";

    const sortedListings = listings.sort((a, b) => new Date(b.created || b.updated) - new Date(a.created || a.updated));
    sortedListings.forEach((listing) => {
        const { id, title, description, media, endsAt, created, updated } = listing;

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
                                                    <h5 class="end-date">Ends at: ${endsAt}</h5>
                                                <a href="/listing/index.html?id=${id}" class="listing-link">
                                                    <button class="btn btn-lg btn-dark view-btn">View</button>
                                                </a>
                                                
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                    </div>
                                </div> 
                            </div>`
    });
}