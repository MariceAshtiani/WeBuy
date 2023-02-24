import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listings from "./api/listings/index.mjs";

export default function router() {

    const path = location.pathname;

    switch (path) {
        case '/profile/register/':
            listeners.setRegisterFormListener();
            break;
        case '/profile/login/':
            listeners.setLoginFormListener();
            break;
        case '/listings/':
            templates.displayListings();
            break;
        case '/listing/':
            templates.viewSingleListing();
            break;
    }
}