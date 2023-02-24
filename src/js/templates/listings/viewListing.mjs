import { getListing } from "../../api/listings/index.mjs";
import { getParam } from "../../api/utils/tools.mjs";

export async function viewSingleListing() {
    const id = getParam("id");

    try {
        const listing = await getListing(id);
        renderListing("#listing", listing);
    } catch (error) {
        console.log(error);
        //displayError("#listing", "Failed to fetch listing");
    }
}

export function renderListing(container, listing) {
    const parent = document.querySelector("#listing", container);
    parent.innerHTML = "";

    const { id, title, description, media, endsAt, created, updated } = listing;

    parent.innerHTML += `<div">
                                <div class="card m-4 border-info ">
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
                            </div>`;
}