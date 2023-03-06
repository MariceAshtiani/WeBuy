import { BASE_API } from "../../api/constants.mjs";
import { authFetch } from "../../api/authFetch.mjs";

const action = "/listings/?view=newest";

export async function getFeaturedListings() {
    const getFeaturedListingsURL = `${BASE_API}${action}`;
    const response = await authFetch(getFeaturedListingsURL)

    return await response.json()
}

export async function displayFeaturedListings() {
    try {
        const featuredListings = await getFeaturedListings();
        renderFeaturedListings("#featured", featuredListings);
    } catch (error) {
        console.log(error)
    }
}

export function renderFeaturedListings(container, featuredListings) {
    const parent = document.querySelector("#featured", container);

    parent.innerHTML = "";

    let count = 0;

    const sortedFeaturedListings = featuredListings.sort((a, b) => {
        const aTimestamp = Date.parse(a.endsAt);
        const bTimestamp = Date.parse(b.endsAt);
        return bTimestamp - aTimestamp;
    });

    sortedFeaturedListings.forEach((featuredListing) => {
        const { id, title, media, endsAt } = featuredListing;

        if (count < 9) {

            parent.innerHTML += `
                                <div class="col-lg-4 featured">
                                    <img src="${media[0] ?? "../../../images/defaultimage.jpg"}" class="rounded-circle" width="140" height="140"/>
                                    <h2 class="fw-normal">${title}</h2>
                                    <p class=text-muted">${endsAt}</p>
                                    <p><a class="btn btn-dark" href="/listing/index.html?id=${id}">View listing</a></p>
                                </div>

                                `;
            count++;
        }
    });
}