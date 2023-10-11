import axios from "axios";

export const initLogoutService=async()=>{
    const url = `/api/logout`
     await axios.get(url, { withCredentials: true })

}