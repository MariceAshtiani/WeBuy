import { getListing } from "../../api/listings/index.mjs";
import { getParam } from "../../api/utils/tools.mjs";

export async function viewSingleListing() {
    const id = getParam("id");

    try {
        const listing = await getListing(id);
        renderListings("#listing", listing);
    } catch (error) {
        console.log(error);
        displayError("#listing", "Failed to fetch listing");
    }
}

function renderListing(container, listing) {
    const parent = document.querySelector(container);
    parent.innerHTML = "";

    const { id, title, body, created, updated } = listing;

    parent.innerHTML += `This is where i will add my listing-html`
}