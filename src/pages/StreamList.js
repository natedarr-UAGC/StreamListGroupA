import {useState} from "react";
import "./Pages.css";

function StreamList() {
    const [movie, setMovie] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("User entered:", movie);

        setMovie("");
    };

    return (
        <div className="page">
            <h2>Welcome to StreamList</h2>

            <p>Add your favorite movie or TV show below.</p>

            <form onSubmit={handleSubmit} className="movie-form">
                <input
                    type="text"
                    placeholder="Enter movie name..."
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                />

                <button type="submit">Add to StreamList</button>
            </form>
        </div>
    );
}

export default StreamList;