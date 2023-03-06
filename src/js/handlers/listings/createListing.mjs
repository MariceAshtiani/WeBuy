import { createListing } from "../../api/listings/create.mjs";
import { convertTags } from "../tags.mjs";

export function setCreateListingFormListener() {
    const form = document.querySelector("#createListing");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const mediaValues = formData.getAll('media[]');
            const listing = Object.fromEntries(formData.entries())
            listing.tags = convertTags(listing.tags)


            createListing(listing)
        })
    }
}