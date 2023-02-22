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

    listings.forEach((listing) => {
        const { id, title, description, media, endsAt, created, updated } = listing;

        parent.innerHTML += `<div class="col-sm-4">
                                <div class="card m-4 border-info ">
                                    <div class="card-body">
                                        <div class="w-100">
                                            <div class="product">
                                                <div class="product-image">
                                                    <img src="${media[0] ?? "../../../../images/defaultimage.jpg"}" alt="${title}" class="w-100"/>
                                                </div>
                                                <div class="product-info p-4">
                                                    <h2>${title}</h2>
                                                    <p>Ends at: ${endsAt}</p>
                                                <a href="/listing/index.html?id=${id}" class="listing-link">
                                                    <button class="btn btn-dark">View</button>
                                                </a>
                                                <p class="text-muted">Updated: ${updated}</p>
                                                </div>
                                            </div>
                                        </div>    
                                    </div>
                                    </div>
                                </div> 
                            </div>`
    });
}