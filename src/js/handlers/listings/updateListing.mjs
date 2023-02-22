import { getListing, updateListing } from "../../api/listings/index.mjs";
import { convertTags } from "../tags.mjs";

export async function setUpdateListingFormListener() {
    const form = document.querySelector("#updateListing");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {
        const button = form.querySelector("button");
        button.disabled = true;

        const listing = await getListing(id);

        form.title.value = listing.title;
        form.body.value = listing.body;
        form.tags.value = listing.tags;
        form.media.value = listing.media;

        button.disabled = false;


        form.addEventListener("submit", (event) => {
            event.preventDefault()

            const form = event.target;
            const formData = new FormData(form);
            const listing = object.fromEntries(formData.entries())
            listing.tags = convertTags(listing.tags)
            listing.id = id;
            const action = form.action;
            const method = form.method;

            updateListing(listing)
        })

    }
}