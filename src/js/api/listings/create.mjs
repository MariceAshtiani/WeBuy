import { BASE_API } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/listings";
const method = "post";

export async function createListing(postData) {
    const createListingURL = BASE_API + action;

    const response = await authFetch(createListingURL, {
        method,
        body: JSON.stringify(postData)
    })

    if (response.ok) {
        alert("Your listing was created successcfully!")
        window.location.replace("/listings/")
    }

    return await response.json();
}