import * as listeners from "./handlers/index.mjs";

export default function router() {

    const path = location.pathname;

    switch (path) {
        case '/profile/register':
            listeners.setRegisterFormListener();
            break;
    }
}