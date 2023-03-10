import { getProfile } from "../../api/profiles/read.mjs";
//import { displayError } from "../../api/uidisplayError.mjs";

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
    const profileContainer = document.querySelector("#profile", container);
    const { email, avatar, credits, listings, wins } = profile;

    const profileHeader = document.createElement('div')

    const profileImage = document.createElement('img')
    profileImage.classList.add("avatar", "img-circle")

    const profileName = document.createElement('h2')

    const profileEmail = document.createElement('p')

    const profileCredits = document.createElement('p')


    profileImage.src = avatar ? avatar : '../../../images/avatar.jpg';
    // profileName.textContent = name;
    profileEmail.textContent = email;
    profileCredits.textContent = credits;

    profileHeader.append(profileImage, profileName, profileEmail, profileCredits)

    profileContainer.append(profileHeader);

}