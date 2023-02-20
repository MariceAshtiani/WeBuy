import { BASE_API } from "../constants.mjs";
import { headers } from "../headers.mjs";

//Doing something similar as the getPosts functions
export async function getProfiles() {
    const response = await fetch(`${BASE_API}/profiles`, { headers: headers() });
    if (response.ok) {
        return await response.json()
    }

    throw new Error(response.statusText);
}

export async function getProfile(name) {
    const response = await fetch(`${BASE_API}/profiles${name}`, { headers: headers() });
    if (response.ok) {
        return await response.json()
    }
    throw new Error(response.statusText);
}