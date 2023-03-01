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

    const { id, title, description, media, endsAt, created, updated, bids, seller } = listing;
    console.log(listing);

    parent.innerHTML += `<div class="p-5">
                            <h1 class="text-center p-4">${title}</h1>
                            <hr>
                            <div class="product-image text-center">
                                <img src="${media[0] ?? "../../../../images/defaultimage.jpg"}" alt="${title}" class="img-fluid p-4"/>
                            </div> 
                            <div class="listing-info">
                                <h5 class="end-date text-center">Ends at: ${endsAt}</h5>
                                <h5 class="pl-5"> Description: </h5>
                                <p> ${description} </p>
                                <div class="muted-text">
                                    <p class="text-muted">Created: ${created}</p>
                                    <p class="text-muted">Updated: ${updated}</p>
                                </div>
                            </div>
                            <hr>
                        </div>`;

    const imgContainer = document.querySelector(".imgContainer");
    media.forEach(imgSrc => {
        const img = document.createElement('img')
        img.src = imgSrc
        imgContainer.append(img)
    })


    const allBids = bids.forEach(bid => {
        const { amount, bidderName, created } = bid;
        const bidContainer = document.querySelector(".bidContainer");
        const bidElement = document.createElement('div')
        bidElement.classList.add("card-body", "m-4", "bids")
        const bidAmount = document.createElement('p')
        const bidCreated = document.createElement('p')
        bidCreated.classList.add("text-muted")
        const bidder = document.createElement('p')

        bidAmount.textContent = amount
        bidder.textContent = bidderName
        bidCreated.textContent = created

        bidElement.append(bidder, bidCreated, bidAmount)
        bidContainer.append(bidElement)
    })

    const sellerContainer = document.querySelector(".sellerContainer");
    const { name, email, avatar } = seller;
    const sellerElement = document.createElement('div')
    sellerElement.classList.add("card-body")
    const sellerName = document.createElement('h5')
    const sellerEmail = document.createElement('p')
    const sellerButton = document.createElement('button')
    sellerButton.classList.add("btn", "btn-dark")

    sellerName.textContent = name
    sellerEmail.textContent = email
    sellerButton.textContent = "Visit profile"

    const sellerProfile = document.createElement('a')
    sellerProfile.setAttribute("href", "/api/v1/auction/profiles/{name}")

    sellerElement.append(sellerName, sellerEmail, sellerButton)
    sellerContainer.append(sellerElement)


}