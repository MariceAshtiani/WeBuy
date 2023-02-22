import { BASE_API } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";

/* Gets all listings */
export async function getListings() {
    const getListingsURL = `${BASE_API}${action}`;
    const response = await authFetch(getListingsURL)

    return await response.json()
}


/* Gets one listing */
export async function getListing(id) {
    if (!id) {
        throw new Error("Listing-ID required to get listing");
    }

    const getListingURL = `${BASE_API}${action}/${id}`;

    const response = await authFetch(getListingURL)

    return await response.json();
}