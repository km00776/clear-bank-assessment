import { apiFetch } from "../../../utils";
export async function getCats(url) {
    const result = await apiFetch(url, {
        method: 'GET'
    });
    return result;

}