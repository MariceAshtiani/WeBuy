import { BASE_API } from "../constants.mjs";
import { headers } from "../headers.mjs";

// doing somewhat the same as deleting post/listing
export async function deleteProfile(name) {
    const response = await fetch(`${BASE_API}/profiles/${name}`, {
        method: "delete",
        headers: headers()
    })

    if (response.ok) {
        return await response.json()
    }

    throw new Error(response.statusText)
}