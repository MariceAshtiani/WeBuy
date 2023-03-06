import { remove } from "../../storage/index.mjs";

export function logOut() {
    ewmove('profile');
    remove('token');
}