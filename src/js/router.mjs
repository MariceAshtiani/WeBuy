import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as listings from "./api/listings/index.mjs";

export default function router() {

    const path = location.pathname;

    switch (path) {
        case '/profile/register/':
        case '&profile/register/index.html':
            listeners.setRegisterFormListener();
            break;
        case '/profile/login/':
        case '/profile/login/index.html':
            listeners.setLoginFormListener();
            break;
        case '/listings/':
        case '/listings/index.html':
            templates.displayListings();
            break;
        case '/listing/':
        case '/listing/index.html':
            templates.viewSingleListing();
            break;
    }
}