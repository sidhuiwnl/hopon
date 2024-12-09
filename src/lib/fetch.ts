import axios from "axios";

export async function refreshToken( token : string){
    const refresh_token = await axios.get(`${process.env.INSTAGRAM_BASE_URL}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`);

    if(refresh_token){
        return refresh_token.data
    }
}