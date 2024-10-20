import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN ="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDM5MDJiNGIxNzViNWFmZThjN2RmYTE1OGIyYTdlMSIsIm5iZiI6MTcyOTQzNjA4Ny45OTgxMywic3ViIjoiNjcxNTE3ODU5OWYyMmYzMjZhYWQ4ZDE2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.IQc5V9mQxW55OcPTIMAM77kdiwK6HEjj2oUSvGNfOsA";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
