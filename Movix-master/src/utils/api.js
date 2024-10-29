import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = "f43902b4b175b5afe8c7dfa158b2a7e1";

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            params: {
                api_key: TMDB_API_KEY,
                ...params,
            },
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
