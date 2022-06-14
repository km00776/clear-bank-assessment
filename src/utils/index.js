import { get } from "lodash";
import { API_KEY } from "../views/home/constants";

export async function apiFetch(url) {
  
    const config = {
        headers: {
            'x-api-key':  API_KEY,
            'Content-Type': 'application/json',
           
        }
    }
        const response = await fetch(url, config);
        let result = {}
        try {
            result = await response.json();
        } catch{}
        const status = get(response, 'status', 1000);
        
        if(status < 200 || status > 299) {
            // eslint-disable-next-line no-throw-literal
            throw {
                response_status: status,
                response_body: result
            }
        }
        return result;
}