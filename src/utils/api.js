import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzM2MDcyMmMyNmE1ZDA5NjYzOWQxYzJjNzU4ZDBiZiIsInN1YiI6IjY0OGM3NDk3YzJmZjNkMDEzOWFkNDM4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7l6kgsLthy3NolzGDG1Lrq6lEgP_zc6ExTe4buEZvow"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN ,
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