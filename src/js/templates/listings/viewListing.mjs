import { getListing } from "../../api/listings/index.mjs";
import { getParam } from "../../api/utils/tools.mjs";
import { load } from "../../storage/load.mjs";
import { BASE_API } from "../../api/constants.mjs";
//import { displayError } from "../../api/ui/displayError.mjs";




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

    const endDate = new Date(endsAt).toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });



    parent.innerHTML += `<div class="p-5">
                            <h1 class="text-center p-4">${title}</h1>
                            <hr>
                            <div class="product-image text-center">
                                <img src="${media[0] ?? "../../../../images/defaultimage.jpg"}" alt="${title}" class="img-fluid p-4"/>
                            </div> 
                            <div class="listing-info card-body">
                                <h5 class="end-date text-center">Ends at: ${endDate}</h5>
                                <h5 class="pl-5"> Description: </h5>
                                <p> ${description} </p>
                                <div class="muted-text">
                                    <p class="text-muted">Created: ${created}</p>
                                    <p class="text-muted">Updated: ${updated}</p>
                                </div>
                            </div>
                        </div>`;






    //Product images

    const imgContainer = document.querySelector(".imgContainer");
    media.forEach(imgSrc => {
        const container = document.createElement('div')
        container.classList.add("col-12", "col-lg-4")
        const img = document.createElement('img')
        img.src = imgSrc
        imgContainer.append(img)
    })


    //bids
    const sortedBids = bids.sort((a, b) => b.amount - a.amount);

    const bidContainer = document.querySelector(".bidContainer");
    const showMoreButton = document.querySelector("#showMore");

    let numBidsDisplayed = 1;

    function displayNexFiveBids() {
        const remainingBids = sortedBids.slice(numBidsDisplayed);
        const nextFiveBids = remainingBids.slice(0, 5);

        nextFiveBids.forEach(bid => {
            const { amount, bidderName, created } = bid;
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
        });

        numBidsDisplayed += nextFiveBids.length;

        if (numBidsDisplayed >= sortedBids.length) {
            showMoreButton.style.display = "none";
        }
    }

    displayNexFiveBids();

    showMoreButton.addEventListener("click", displayNexFiveBids);




    //Seller 

    const sellerContainer = document.querySelector(".sellerContainer");
    const { name, email, avatar } = seller;
    const sellerElement = document.createElement('div')
    sellerElement.classList.add("card-body")
    const sellerName = document.createElement('h5')
    const sellerEmail = document.createElement('p')
    const sellerAvatar = document.createElement('img')
    sellerAvatar.classList.add("seller-avatar", "rounded-circle", "w-25", "border")
    const sellerButton = document.createElement('a')
    sellerButton.classList.add("btn", "btn-dark")

    sellerAvatar.src = avatar ? avatar : '../../../images/avatar.jpg';
    sellerName.textContent = name
    sellerEmail.textContent = email
    sellerButton.textContent = "Visit profile"


    const sellerURL = `/profile/index.html/${name}`;
    sellerButton.setAttribute("href", sellerURL)

    sellerElement.append(sellerAvatar, sellerName, sellerEmail, sellerButton)
    sellerContainer.append(sellerElement)



    const user = JSON.parse(localStorage.getItem("profile")).name;


    if (seller.name === user) {
        const editButtonContainer = document.querySelector("#edit-button")
        const editButton = document.createElement('a')
        editButton.classList.add("btn", "btn-dark", "mx-auto")

        editButton.textContent = "Edit Listing"
        const editURL = `/listing/edit/index.html?id=${id}`;
        console.log(editURL);
        editButton.setAttribute("href", editURL)

        editButtonContainer.append(editButton)
    }
}