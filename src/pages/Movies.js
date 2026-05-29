import "./Pages.css";

import {useEffect, useState} from "react";

import {getPopularMovies} from "../services/tmdb";

function Movies({cart, setCart}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getPopularMovies();
            setMovies(data);
        };

        fetchMovies();
    }, []);

    //Adding movies to the cart
    const addToCart = (movie) => {
        const existingMovie = cart.find((item) => item.id === movie.id);

        if (existingMovie) {setCart(cart.map((item) => item.id === movie.id ? {...item, quantity: item.quantity + 1} : item));
        } else {
            setCart([...cart, {id: movie.id, title: movie.title, price: 9.99, quantity: 1, image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}]);
        }
    };

    return (
        <div className = "page">
            <h2>Popular Movies</h2>
            
            <div className = "movie-grid">
                {movies.map((movie) => (

                    <div key = {movie.id} className = "movie-card">
                        <img src = {movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/300x450?text=No+Image"} alt = {movie.title}/>
                        <h3>{movie.title}</h3>
                        <p>Rating: {movie.vote_average}</p>

                        <button onClick = {() => addToCart(movie)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies;