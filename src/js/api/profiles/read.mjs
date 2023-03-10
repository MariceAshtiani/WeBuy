import { BASE_API } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { profile } from "../auth/state.mjs";

const action = "/profiles";

export async function getProfiles() {
    const getProfilesURL = `${BASE_API}${action}`;

    const response = await authFetch(getProfilesURL)
    return await response.json();
}

export async function getProfile(name) {
    const me = profile();
    console.log(me.name)
    if (!name) {
        throw new Error("Name required to get profile");
    }

    const getProfileURL = `${BASE_API}${action}/${me.name}`;

    const response = await authFetch(getProfileURL)

    return await response.json();

}
