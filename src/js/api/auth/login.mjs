import { BASE_API } from "../constants.mjs";

const action = "/auth/login";
const method = "post";

export async function login(profile) {
    const loginURL = BASE_API + action;
    const body = JSON.stringify(profile);

    const response = await fetch(loginURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json()
    console.log(result)
    alert("You are now logged in")

    if (response.ok) {
        window.location.replace("/profile/")
    }
}