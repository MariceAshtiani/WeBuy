import { createListing } from "../../api/listings/create.mjs";
import { convertTags } from "../tags.mjs";

export function setCreateListingFormListener() {
    const form = document.querySelector("#CreateListing");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()

            const form = event.target;
            const formData = new formData(form);
            const listing = object.fromEntries(formData.entried())
            post.tags = convertTags(listing.tags)
            const action = form.action;
            const method = form.method;

            createListing(listing)
        })
    }
}