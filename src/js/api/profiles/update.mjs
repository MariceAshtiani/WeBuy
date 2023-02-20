import { BASE_API } from "../constants.mjs";
import { headers } from "../headers.mjs";
import { profile } from "../auth/state.mjs";

export async function updateAvatar(avatar) {
    const me = profile()

    const response = await fetch(`${BASE_API}/profiles/${me.name}`, {
        method: "put",
        body: JSON.stringify({ ...me, avatar }),
        headers: headers("application/json")
    })

    if (response.ok) {
        return await response.json()
    }

    throw new Error(response.statusText)
}