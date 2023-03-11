import { getProfile } from "../../api/profiles/read.mjs";
//import { displayError } from "../../api/ui/displayError.mjs";

export async function viewProfile() {

    try {
        const profile = await getProfile();
        renderProfile("#profile", profile);
        console.log(profile)
    } catch (error) {
        console.log(error);
        //displayError("#profile", "Failed to fetch profile");
    }

}


export function renderProfile(container, profile) {

    const { name, email, avatar, credits, listings } = profile;


    //Header
    const profileContainer = document.querySelector("#profile", container);

    const profileHeader = document.createElement('div')
    profileHeader.classList.add("profile-header")

    const headerImg = document.createElement('img')
    headerImg.classList.add("w-100", "header-image")

    const profileAvatar = document.createElement('img')
    profileAvatar.classList.add("rounded-circle", "img-fluid", "w-25", "profileimage")

    //Text

    const profileInfo = document.querySelector(".profile-info")

    const profileName = document.createElement('h3')

    const profileEmail = document.createElement('h4')
    profileEmail.classList.add("text-muted", "m-5")

    const creditsText = document.createElement('h5')
    const profileCredits = document.createElement('h5')
    profileCredits.classList.add("user-credit")







    headerImg.src = "/images/Rectangle 13.png"
    profileAvatar.src = avatar ? avatar : '/images/avatar.jpg';
    profileName.textContent = name
    profileEmail.textContent = email
    creditsText.textContent = "Total Credits:"
    profileCredits.textContent = credits

    profileHeader.append(headerImg, profileAvatar)
    profileInfo.append(profileName, profileEmail, creditsText, profileCredits)

    profileContainer.append(profileHeader)


}