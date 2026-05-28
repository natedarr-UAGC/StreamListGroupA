import {useState, useEffect} from "react";
import "./Pages.css";

import {FaTrash, FaEdit, FaCheckCircle, FaSave} from "react-icons/fa";

function StreamList() {
    const [movie, setMovie] = useState("");
    
    const [movies, setMovies] = useState(() => {
        const savedMovies = localStorage.getItem("movies");

        return savedMovies ? JSON.parse(savedMovies) : [];
    });
    
    const [editingId, setEditingId] = useState(null);
    
    const [editText, setEditText] = useState("");

    useEffect(() => {
        localStorage.setItem("movies", JSON.stringify(movies));
    }, [movies]);

    // Add a Movie
    const handleSubmit = (e) => {
        e.preventDefault();

        if (movie.trim() === "") return;

        const newMovie = {
            id: Date.now(),
            text: movie,
            completed: false
        };

        setMovies([...movies, newMovie]);

        console.log("New Movie Added:", movie);
        
        // Clear input after submitting
        setMovie("");
    };

    // Delete a Movie
    const deleteMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    // Toggle Complete
    const toggleComplete = (id) => {
        setMovies(movies.map((movie) => movie.id === id ? {...movie, completed: !movie.completed }: movie));
    };

    // Start Edit
    const startEdit = (movie) => {
        setEditingId(movie.id); setEditText(movie.text);
    };

    // Save Edit
    const saveEdit = (id) => {
        setMovies(movies.map((movie) => movie.id === id ? {...movie, text: editText}: movie));

        setEditingId(null);
        setEditText("");
    };

    // Home Page
    return (
        <div className = "page">
            <h2>Welcome to StreamList</h2>

            <p>Add your favorite movie or TV show below.</p>

            <form onSubmit = {handleSubmit} className = "movie-form">
                <input
                    type = "text"
                    placeholder = "Enter movie name..."
                    value = {movie}
                    onChange = {(e) => setMovie(e.target.value)}
                />

                <button type = "submit">Add to StreamList</button>
            </form>

            <div className = "movie-list">
                {movies.map((movie) => (
                    <div
                        key = {movie.id}
                        className = {`movie-item ${movie.completed ? "completed" : ""}`}
                    >
                        {editingId === movie.id ? (
                            <>
                            <input
                            type = "text"
                            value = {editText}
                            onChange = {(e) =>
                                setEditText(e.target.value)
                            }
                            />
                            
                            <button onClick = {() => saveEdit(movie.id)}>
                                <FaSave />
                            </button>
                            </>
                        ) : (
                            <>
                            <span>{movie.text}</span>

                            <div className = "actions">
                                <button onClick = {() => toggleComplete(movie.id)}>
                                    <FaCheckCircle />
                                </button>

                                <button onClick = {() => startEdit(movie)}>
                                    <FaEdit />
                                </button>

                                <button onClick = {() => deleteMovie(movie.id)}>
                                    <FaTrash />
                                </button>
                            </div>
                        </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StreamList;