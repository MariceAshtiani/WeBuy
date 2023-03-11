import { getListing, updateListing } from "../../api/listings/index.mjs";
import { convertTags } from "../tags.mjs";
import { getParam } from "../../api/utils/tools.mjs";
import { setAddMoreMediaListener } from "./addMore.mjs";

export async function setUpdateListingFormListener() {
    const form = document.querySelector("#updateListing");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button = form.querySelector("#update-btn");
        button.disabled = true;

        const listing = await getListing(id);

        form.title.value = listing.title;
        form.description.value = listing.description;
        form.media.value = listing.media;
        form.tags.value = listing.tags.join(',');

        button.disabled = false;

        console.log(listing);


        form.addEventListener("submit", (event) => {
            event.preventDefault()

            const form = event.target;
            const formData = new FormData(form);
            const listing = Object.fromEntries(formData.entries())
            listing.tags = convertTags(listing.tags)
            listing.id = id;

            updateListing(listing)
        })

    }
}