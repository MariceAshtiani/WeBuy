import { BASE_API } from "../constants.mjs";
import { profile } from "../auth/state.mjs";
import { load } from "../../storage/index.mjs";

export async function updateAvatar(avatar) {
    const me = profile()
    const token = load("token");

    const response = await fetch(`${BASE_API}/profiles/${me.name}`, {
        method: "put",
        body: JSON.stringify({ ...me, avatar }),
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    })

    if (response.ok) {
        return await response.json()
    }

    throw new Error(response.statusText)
}