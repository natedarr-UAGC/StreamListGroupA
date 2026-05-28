import "./Pages.css";

import {useEffect, useState} from "react";

import {getPopularMovies} from "../services/tmdb";

import "./Pages.css";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getPopularMovies();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    return (
        <div className = "page">
            <h2>Popular Movies</h2>
            
            <div className = "movie-grid">
                {movies.map((movie) => (

                    <div key = {movie.id} className = "movie-card">
                        <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt = {movie.title}/>

                        <h3>{movie.title}</h3>
                        <p>Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;