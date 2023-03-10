import { getProfile } from "../../api/profiles/read.mjs";
//import { displayError } from "../../api/ui/displayError.mjs";

export async function viewProfile() {

    try {
        const profile = await getProfile();
        renderProfile("#profile", profile);
    } catch (error) {
        console.log(error);
        //displayError("#profile", "Failed to fetch profile");
    }

}


export function renderProfile(container, profile) {


}