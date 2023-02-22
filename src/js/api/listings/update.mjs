import { BASE_API } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "put";

export async function updateListing(listingData) {
    if (!listingData.id) {
        throw new Error("Listing-ID required to update");
    }

    const updateListingURL = `${BASE_API}${action}/${listingData.id}`;

    const response = await authFetch(updateListingURL, {
        method,
        body: JSON.stringify(listingData)
    })

    if (response.ok === false) {
        alert("You do not have permission to edit this listing");
    }

    console.log(response);

    if (response.ok) {
        alert("Listing updated");
    }

    return await response.json();
}